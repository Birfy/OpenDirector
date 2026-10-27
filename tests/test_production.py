import asyncio
from copy import deepcopy
import io
from pathlib import Path
from types import SimpleNamespace
from uuid import UUID, uuid4, uuid5

from PIL import Image
import pytest

from museshow.agent import storyboard_tools
from museshow.application.generation import Generation
from museshow.application.production import Production
from museshow.domain.projects import ProjectError
from museshow.domain.generation import GenerationError, GenerationFailure
from museshow.infrastructure.asset_catalog import AssetCatalog
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.local_projects import read_json, write_json
from museshow.infrastructure.execution import read_production_plan
from museshow.infrastructure.model_configs import ModelConfigs


def setup(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    project = store.create('制作计划', str(uuid4()), session)
    configs = ModelConfigs(tmp_path)
    config = configs.save('image', 'https://ark.test/api/plan/v3', 'seedream', 'private')
    stream = io.BytesIO()
    Image.new('RGB', (16, 12), 'red').save(stream, 'PNG')
    class Provider:
        def __init__(self):
            self.calls = []
            self.gate = asyncio.Event()
            self.gate.set()
            self.fail = False
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            self.calls.append(task['id'])
            await self.gate.wait()
            if self.fail:
                self.fail = False
                raise GenerationError(GenerationFailure(category='input', stage='submit',
                    message='测试供应商失败', suggestion='请检查输入。', httpStatus=400))
            return 'png', stream.getvalue()
    provider = Provider()
    generation = Generation(store, configs, provider)
    return store, session, project, config, generation, provider


def test_finite_plan_more_than_one_batch_and_failed_step_resume(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    script = generation.canvas.save_text(project['id'], str(uuid4()), str(uuid4()), '第一幕到第四幕', '剧本.md', session, create=True)
    specification = {'title': '四镜短片', 'scriptAssetId': script['id'], 'scriptFingerprint': script['fingerprint'], 'shots': [
        {'title': f'镜头{index}', 'imagePrompt': '雨后街道', **({'referenceShot': 1} if index > 1 else {})} for index in range(1, 7)]}
    async def run():
        provider.fail = True
        plan = await manager.submit(project['id'], str(uuid4()), specification, {'image': config['id']}, session)
        await asyncio.gather(*manager.jobs.values())
        blocked = manager.list(project['id'])[0]
        assert blocked['status'] == 'blocked' and '供应商失败' in blocked['error']
        assert len(provider.calls) == 1
        await manager.resume(project['id'], plan['id'], session)
        await asyncio.gather(*manager.jobs.values())
        result = manager.list(project['id'])[0]
        assert result['status'] == 'succeeded', result['error']
        assert result['schemaVersion'] == 1 and result['revision'] > plan['revision']
        assert len(provider.calls) == 7 and len(set(provider.calls)) == 7
        assert all(step['status'] == 'completed' for step in result['steps'])
        board = manager.board.snapshot(project['id'])['storyboard']
        assert len(board['shots']) == 6 and all(shot['selected']['visual'] for shot in board['shots'])
        snapshot = generation.canvas.snapshot(project['id'])
        assert all(task['schemaVersion'] == 1 for task in snapshot['tasks'])
        retried = result['steps'][0]
        assert retried['attempt'] == 1
        assert retried['taskId'] == str(uuid5(UUID(retried['id']), 'task:1'))
        assert any(task['id'] == str(uuid5(UUID(retried['id']), 'task:0')) and task['status'] == 'failed' for task in snapshot['tasks'])
        assert len(snapshot['assets']) == 7
        assert len(snapshot['canvas']['nodes']) == 7
        first = result['steps'][0]['assetId']
        assert all(first in task['referenceIds'] for task in snapshot['tasks'] if task['nodeId'] != result['steps'][0]['nodeId'])
        assert all('镜头' in asset['name'] for asset in snapshot['assets'] if asset['kind'] == 'image')
        await manager.close(); await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('legacy', [False, True])
def test_stop_keeps_accepted_task_and_restart_does_not_repay(tmp_path, legacy):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    specification = {'title': '暂停恢复', 'shots': [{'title': '首镜', 'imagePrompt': '雨'}, {'title': '次镜', 'imagePrompt': '晴'}]}
    async def run():
        provider.gate.clear()
        plan = await manager.submit(project['id'], str(uuid4()), specification, {'image': config['id']}, session)
        for _ in range(200):
            if len(provider.calls) == 2: break
            await asyncio.sleep(.01)
        assert len(provider.calls) == 2
        stopped = await manager.stop(project['id'], plan['id'], session)
        assert stopped['status'] == 'stopped'
        assert generation.jobs
        provider.gate.set()
        await asyncio.gather(*(job.future for job in generation.jobs.values()))
        if legacy:
            path = Path(project['path']) / 'production-plans' / (plan['id'] + '.json')
            record = read_json(path)
            record.pop('schemaVersion'); record.pop('revision')
            write_json(path, record)
            for task_path in (Path(project['path']) / 'tasks').glob('*.json'):
                task = read_json(task_path)
                task.pop('schemaVersion')
                write_json(task_path, task)
        await manager.resume(project['id'], plan['id'], session)
        await asyncio.gather(*manager.jobs.values())
        assert manager.list(project['id'])[0]['status'] == 'succeeded'
        assert len(provider.calls) == 2
        await manager.close(); await generation.close()
    asyncio.run(run())


def test_cancel_without_remote_receipt_does_not_create_new_attempt_on_resume(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    async def run():
        provider.gate.clear()
        plan = await manager.submit(project['id'], str(uuid4()), {'title': '取消反馈', 'shots': [
            {'title': '首镜', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
        for _ in range(200):
            if provider.calls:
                break
            await asyncio.sleep(.01)
        assert len(provider.calls) == 1
        path = Path(project['path']) / 'production-plans' / (plan['id'] + '.json')
        before = path.read_bytes()
        shown = manager.view(project['id'], manager.list(project['id'])[0])
        assert shown['steps'][0]['task']['status'] == 'running'
        assert path.read_bytes() == before
        stopped = await manager.stop(project['id'], plan['id'], session, cancel_tasks=True)
        shown = manager.view(project['id'], stopped)
        assert shown['status'] == 'stopped' and shown['steps'][0]['task']['status'] == 'cancelled'
        assert shown['steps'][0]['task']['error'] and len(provider.calls) == 1
        cancelled = generation.canvas.snapshot(project['id'])['tasks'][0]
        assert cancelled['recovery'] == 'review' and not cancelled['resumeAllowed']
        # Local stop does not prove that a provider rejected or cancelled the
        # request. Continuation must retain its identity pending reconciliation.
        provider.fail = True
        provider.gate.set()
        await manager.resume(project['id'], plan['id'], session)
        await asyncio.gather(*list(manager.jobs.values()))
        shown = manager.view(project['id'], manager.list(project['id'])[0])
        assert shown['status'] == 'blocked'
        assert shown['steps'][0]['task']['status'] == 'interrupted'
        assert shown['steps'][0]['task']['id'] == stopped['steps'][0]['taskId']
        assert shown['steps'][0]['attempt'] == 0
        assert len(provider.calls) == 1
        assert all('task' not in step for step in read_json(path)['steps'])
        await manager.close(); await generation.close()
    asyncio.run(run())


def test_legacy_plan_read_and_duplicate_prepare_do_not_write_project(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    request = {'title': '旧计划', 'shots': [{'title': '原镜头', 'imagePrompt': '雨'}]}
    plan, _ = manager._prepare(project['id'], str(uuid4()), request, {'image': config['id']}, session)
    directory = Path(project['path'])
    path = directory / 'production-plans' / (plan['id'] + '.json')
    legacy = read_json(path)
    legacy.pop('schemaVersion'); legacy.pop('revision')
    legacy.pop('scriptFingerprint')
    legacy['script'] = '保留原剧本'
    for shot in legacy['shots']: shot.pop('existing')
    legacy['status'] = 'stopped'
    legacy['steps'][0]['attempt'] = 2
    write_json(path, legacy)
    def files():
        return {str(p.relative_to(directory)): p.read_bytes() for p in directory.rglob('*') if p.is_file()}
    before = files()
    first = manager.list(project['id'])[0]
    again, launch = manager._prepare(project['id'], plan['id'], request, {'image': config['id']}, session)
    assert first == again == manager.list(project['id'])[0]
    assert first['schemaVersion'] == first['revision'] == 1
    assert first['steps'] == legacy['steps'] and first['script'] == legacy['script']
    assert files() == before and launch is False and provider.calls == [] and manager.jobs == {}


def test_plan_checkpoint_rejects_stale_writes_and_preserves_memory_on_failure(tmp_path, monkeypatch):
    store, session, project, config, generation, _ = setup(tmp_path)
    manager = Production(store, generation)
    plan, _ = manager._prepare(project['id'], str(uuid4()), {'title': '检查点', 'shots': [{'title': '首镜', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
    stale = deepcopy(plan)
    shot, step = plan['shots'][0], plan['steps'][0]
    plan['status'] = 'stopped'
    manager._save(project['id'], plan)
    assert plan['revision'] == 2 and plan['shots'][0] is shot and plan['steps'][0] is step
    path = Path(project['path']) / 'production-plans' / (plan['id'] + '.json')
    before = path.read_bytes()
    stale['status'] = 'running'
    with pytest.raises(ProjectError, match='计划已变化'):
        manager._save(project['id'], stale)
    assert path.read_bytes() == before and stale['revision'] == 1
    def fail(*args):
        raise OSError('simulated disk failure')
    monkeypatch.setattr('museshow.infrastructure.execution.write_json', fail)
    with pytest.raises(OSError):
        manager._save(project['id'], plan)
    assert path.read_bytes() == before and plan['revision'] == 2


@pytest.mark.parametrize('problem', ['future_version', 'invalid_json', 'wrong_identity', 'invalid_dependency'])
def test_invalid_plan_is_preserved_without_submission(tmp_path, problem):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    request = {'title': '原计划', 'shots': [{'title': '原镜头', 'imagePrompt': '雨'}]}
    plan, _ = manager._prepare(project['id'], str(uuid4()), request, {'image': config['id']}, session)
    path = Path(project['path']) / 'production-plans' / (plan['id'] + '.json')
    damaged = deepcopy(plan)
    if problem == 'future_version': damaged['schemaVersion'] = 2
    if problem == 'wrong_identity': damaged['id'] = str(uuid4())
    if problem == 'invalid_dependency': damaged['steps'][0]['dependency'] = str(uuid4())
    if problem == 'invalid_json': path.write_text('{broken', encoding='utf-8')
    else: write_json(path, damaged)
    before = path.read_bytes()
    with pytest.raises(ProjectError, match='原文件已保留'):
        manager.list(project['id'])
    with pytest.raises(ProjectError):
        manager._prepare(project['id'], plan['id'], request, {'image': config['id']}, session)
    with pytest.raises(ProjectError):
        manager._save(project['id'], plan)
    assert path.read_bytes() == before and provider.calls == [] and manager.jobs == {}


def test_completed_legacy_plan_and_tasks_survive_restart_and_duplicate_submit(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    request = {'title': '旧成品', 'shots': [{'title': '首镜', 'imagePrompt': '雨'}]}
    directory = Path(project['path'])
    async def run():
        plan, _ = manager._prepare(project['id'], str(uuid4()), request, {'image': config['id']}, session)
        plan['script'] = '原剧本'  # Existing inline plans still initialize once.
        manager._save(project['id'], plan)
        manager._launch(project['id'], plan)
        await asyncio.gather(*list(manager.jobs.values()))
        await manager.close(); await generation.close()
        path = directory / 'production-plans' / (plan['id'] + '.json')
        legacy = read_json(path)
        legacy.pop('schemaVersion'); legacy.pop('revision')
        legacy.pop('scriptFingerprint')
        for shot in legacy['shots']: shot.pop('existing')
        write_json(path, legacy)
        for task_path in (directory / 'tasks').glob('*.json'):
            task = read_json(task_path)
            task.pop('schemaVersion')
            write_json(task_path, task)
        before = {str(p.relative_to(directory)): p.read_bytes() for p in directory.rglob('*') if p.is_file()}
        restarted_generation = Generation(store, generation.configs, provider)
        restarted = Production(store, restarted_generation)
        await restarted_generation.start(); await restarted.start()
        again = await restarted.submit(project['id'], plan['id'], request, {'image': config['id']}, session)
        assert again['status'] == 'succeeded' and again['schemaVersion'] == 1
        assert again['steps'] == legacy['steps']
        assert restarted.jobs == restarted_generation.jobs == {} and len(provider.calls) == 1
        assert {str(p.relative_to(directory)): p.read_bytes() for p in directory.rglob('*') if p.is_file()} == before
        assert read_production_plan(path)['scriptAssetId'] == legacy['scriptAssetId']
        await restarted.close(); await restarted_generation.close()
    asyncio.run(run())


def test_storyboard_tools_reject_stale_and_invalid_adoption(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    board = Production(store, generation).board
    turn = SimpleNamespace(owner=project['id'], session=session)
    result = storyboard_tools.execute(board, turn, 'create_storyboard_shot', {'title': '第一镜', 'description': '清晨', 'expectedOrderRevision': 0, 'afterId': None}, str(uuid4()))
    shot = result['shots'][0]
    asset = AssetCatalog(store).import_file(project['id'], str(uuid4()), '剧本.md', b'script', session)
    before = board.snapshot(project['id'])
    with pytest.raises(ProjectError, match='类型'):
        storyboard_tools.execute(board, turn, 'set_shot_asset', {'shotId': shot['id'], 'expectedRevision': 1, 'kind': 'visual', 'assetId': asset['id']}, str(uuid4()))
    assert board.snapshot(project['id']) == before
    board.change(project['id'], shot['id'], 1, session, fields={'title': '用户修改'})
    with pytest.raises(ProjectError, match='分镜已被修改'):
        storyboard_tools.execute(board, turn, 'edit_storyboard_shot', {'shotId': shot['id'], 'expectedRevision': 1, 'title': '过期覆盖', 'description': None}, str(uuid4()))
    assert board.snapshot(project['id'])['storyboard']['shots'][0]['title'] == '用户修改'


def test_restart_pauses_unknown_interruption_without_automatic_submission(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    async def run():
        provider.gate.clear()
        plan = await manager.submit(project['id'], str(uuid4()), {'title': '重启', 'shots': [{'title': '首镜', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
        for _ in range(200):
            if provider.calls: break
            await asyncio.sleep(.01)
        await manager.close(); await generation.close()
        restarted_generation = Generation(store, generation.configs, provider)
        restarted = Production(store, restarted_generation)
        await restarted_generation.start()
        await restarted.start()
        await asyncio.gather(*list(restarted.jobs.values()))
        result = restarted.list(project['id'])[0]
        assert result['status'] == 'blocked'
        assert len(provider.calls) == 1
        assert not restarted_generation.jobs
        await restarted.close(); await restarted_generation.close()
    asyncio.run(run())
