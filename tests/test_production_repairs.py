import asyncio
from copy import deepcopy
from pathlib import Path
import shutil
import subprocess
from types import SimpleNamespace
from uuid import uuid4

import pytest
import httpx
from fastapi.testclient import TestClient

from museshow.application.production import Production
from museshow.application.generation import Generation
from museshow.domain.generation import GenerationError, GenerationFailure
from museshow.domain.projects import ProjectError
from museshow.infrastructure.execution import read_generation_task
from museshow.infrastructure.local_projects import write_json
from museshow.integrations.volcengine import VolcengineGeneration
from museshow_api.main import create_app
from test_production import setup
from test_result_adoption import audio_bytes, image


@pytest.fixture(scope='module')
def media(tmp_path_factory):
    if not shutil.which('ffmpeg') or not shutil.which('ffprobe'):
        pytest.skip('media tests require FFmpeg tools')
    video = tmp_path_factory.mktemp('repair-media') / 'clip.mp4'
    subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=32x24:d=0.2',
        '-pix_fmt', 'yuv420p', str(video)], check=True)
    return video.read_bytes(), audio_bytes()


def context(tmp_path, media=None):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    owner = project['id']
    png = image(generation, owner, session, '本地参考')
    provider.calls, provider.failures = [], set()
    data = {'image': ('png', store.asset(owner, png['id'])[0])}
    if media:
        data.update(video=('mp4', media[0]), audio=('wav', media[1]))
    async def generate(config, task, submitted):
        provider.calls.append(deepcopy(task))
        await provider.gate.wait()
        if task['prompt'] in provider.failures:
            provider.failures.remove(task['prompt'])
            raise GenerationError(GenerationFailure(category='reference', stage='submit',
                message='测试参考被拒绝', suggestion='请更换参考。', httpStatus=400))
        return data[task['kind']]
    provider.generate = generate
    models = {'image': config['id']}
    for kind in ('video', 'audio') if media else ():
        models[kind] = generation.configs.save(kind, 'https://model.test', kind, 'private')['id']
    return SimpleNamespace(store=store, session=session, owner=owner, directory=Path(project['path']),
        generation=generation, manager=manager, provider=provider, models=models, reference=png)


async def wait(c):
    await asyncio.gather(*list(c.manager.jobs.values()))
    return c.manager.list(c.owner)[0]


async def close(c):
    await c.manager.close()
    await c.generation.close()


def command(c, plan, step, **changes):
    board = c.manager.board.snapshot(c.owner)['storyboard']
    shot = next(item for item in board['shots'] if item['id'] == step['shotId'])
    node = next((item for item in c.generation.canvas.snapshot(c.owner)['canvas']['nodes'] if item['id'] == step['nodeId']), None)
    return {'id': str(uuid4()), 'stepId': step['id'], 'action': 'regenerate', 'expectedRevision': plan['revision'],
        'expectedShotRevision': shot['revision'], 'expectedNodeRevision': node['revision'] if node else None, **changes}


def test_failed_third_shot_repair_keeps_completed_shots_and_only_runs_target(tmp_path):
    c = context(tmp_path)
    async def run():
        c.provider.failures.add('三')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '四镜', 'shots': [
            {'title': title, 'imagePrompt': title} for title in ('一', '二', '三', '四')]}, c.models, c.session)
        plan = await wait(c)
        old_board = c.manager.board.snapshot(c.owner)['storyboard']
        failed = plan['steps'][2]
        old_task = c.directory / 'tasks' / (failed['taskId'] + '.json')
        before_task = old_task.read_bytes()
        request = command(c, plan, failed, prompt='第三镜新要求', referenceIds=[c.reference['id']], feedback='保留前两镜，更换第三镜参考')
        await c.manager.repair(c.owner, plan['id'], request, c.session)
        # Lost response / duplicate click never launches a second repair.
        await c.manager.repair(c.owner, plan['id'], request, c.session)
        repaired = await wait(c)
        assert repaired['status'] == 'succeeded' and repaired['steps'][3]['status'] == 'completed'
        assert len(c.provider.calls) == 5 and c.provider.calls[-1]['prompt'] == '第三镜新要求'
        assert c.provider.calls[-1]['referenceIds'] == [c.reference['id']]
        assert old_task.read_bytes() == before_task
        board = c.manager.board.snapshot(c.owner)['storyboard']
        assert [item['id'] for item in board['shots']] == [item['id'] for item in old_board['shots']]
        assert board['shots'][:2] == old_board['shots'][:2] and board['shots'][3] == old_board['shots'][3]
        assert repaired['steps'][2]['nodeId'] == failed['nodeId'] and repaired['steps'][2]['attempt'] == 1
        assert repaired['repairs'][0]['request']['feedback'] == request['feedback']
        assert repaired['repairs'][0]['before']['taskId'] == failed['taskId']
        with pytest.raises(ProjectError, match='无需继续'):
            await c.manager.resume(c.owner, plan['id'], c.session)
        assert len(c.provider.calls) == 5
        assert len(c.manager.board.snapshot(c.owner)['storyboard']['shots']) == 4
        await c.manager.repair(c.owner, plan['id'], request, c.session)
        assert len(c.provider.calls) == 5
        await close(c)
    asyncio.run(run())


@pytest.mark.parametrize('mode', ['text_to_video', 'image_to_video'])
def test_video_repair_switches_supported_mode_and_keeps_original_receipt(tmp_path, media, mode):
    c = context(tmp_path, media)
    async def run():
        c.provider.failures.add('原视频')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '换方式', 'shots': [
            {'title': '首镜', 'videoPrompt': '原视频', 'referenceIds': [c.reference['id']]}]}, c.models, c.session)
        plan = await wait(c)
        old = deepcopy(plan['steps'][0])
        refs = [] if mode == 'text_to_video' else [c.reference['id']]
        await c.manager.repair(c.owner, plan['id'], command(c, plan, old, mode=mode, referenceIds=refs, prompt='新要求'), c.session)
        repaired = await wait(c)
        assert repaired['status'] == 'succeeded', repaired['error']
        assert c.provider.calls[-1]['referenceIds'] == refs and len(c.provider.calls) == 2
        assert repaired['steps'][0]['nodeId'] == old['nodeId']
        assert read_generation_task(c.directory / 'tasks' / (old['taskId'] + '.json'))['referenceIds'] == [c.reference['id']]
        await close(c)
    asyncio.run(run())


def test_only_narration_is_regenerated_and_completed_video_is_unchanged(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '原短片', 'shots': [
            {'title': '开场', 'imagePrompt': '关键帧', 'videoPrompt': '视频', 'narration': '原旁白'}]}, c.models, c.session)
        plan = await wait(c)
        original = deepcopy(plan['steps'][:2])
        visual = c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected']['visual']
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][2], prompt='只修改旁白'), c.session)
        result = await wait(c)
        assert result['status'] == 'succeeded' and result['steps'][:2] == original
        assert sorted(item['kind'] for item in c.provider.calls[:-1]) == ['audio', 'image', 'video']
        assert c.provider.calls[-1]['kind'] == 'audio'
        assert c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected']['visual'] == visual
        await close(c)
    asyncio.run(run())


def test_repairing_keyframe_keeps_completed_video_and_marks_it_for_review(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '保留下游', 'shots': [
            {'title': '开场', 'imagePrompt': '原关键帧', 'videoPrompt': '已完成视频'}]}, c.models, c.session)
        plan = await wait(c)
        previous_video = deepcopy(plan['steps'][1])
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], prompt='新关键帧'), c.session)
        result = await wait(c)
        assert result['status'] == 'succeeded', result['error']
        assert len(c.provider.calls) == 3 and result['steps'][1]['taskId'] == previous_video['taskId']
        assert result['steps'][1]['needsReview'] and result['steps'][1]['assetId'] == previous_video['assetId']
        shot = c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]
        assert 'needsReview' not in shot and shot['selected']['visual'] == previous_video['assetId']
        assert result['steps'][0]['assetId'] in shot['candidates']['visual']
        task = read_generation_task(c.directory / 'tasks' / (result['steps'][0]['taskId'] + '.json'))
        assert task['storyboardAdoption']['reason'] == 'downstream_kept'
        await close(c)
    asyncio.run(run())


def test_pending_dependency_uses_repaired_keyframe_only_after_explicit_resume(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        c.provider.failures.add('原关键帧')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '续做依赖', 'shots': [
            {'title': '首镜', 'imagePrompt': '原关键帧', 'videoPrompt': '后续视频'}]}, c.models, c.session)
        plan = await wait(c)
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], prompt='更换关键帧'), c.session)
        repaired = await wait(c)
        assert repaired['status'] == 'stopped' and len(c.provider.calls) == 2
        await c.manager.resume(c.owner, plan['id'], c.session)
        result = await wait(c)
        assert result['status'] == 'succeeded', result['error']
        assert len(c.provider.calls) == 3 and c.provider.calls[-1]['referenceIds'] == [result['steps'][0]['assetId']]
        await close(c)
    asyncio.run(run())


def test_reuse_uploaded_result_continues_without_a_new_model_request(tmp_path):
    c = context(tmp_path)
    async def run():
        c.provider.failures.add('失败')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '上传接续', 'shots': [
            {'title': '原镜头', 'imagePrompt': '失败'}, {'title': '下一镜', 'imagePrompt': '下一镜'}]}, c.models, c.session)
        plan = await wait(c)
        request = command(c, plan, plan['steps'][0], action='reuse', assetId=c.reference['id'])
        await c.manager.repair(c.owner, plan['id'], request, c.session)
        result = await wait(c)
        assert result['steps'][0]['assetId'] == c.reference['id'] and len(c.provider.calls) == 2
        node = next(item for item in c.generation.canvas.snapshot(c.owner)['canvas']['nodes'] if item['id'] == result['steps'][0]['nodeId'])
        assert node['role'] == 'generation' and node['assetId'] is None
        assert c.reference['id'] not in node['assetIds']
        assert c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected']['visual'] == c.reference['id']
        assert result['status'] == 'succeeded' and len(c.provider.calls) == 2
        assert len(list((c.directory / 'tasks').glob('*.json'))) == 2
        await close(c)
    asyncio.run(run())


@pytest.mark.parametrize('edit', ['plan', 'shot', 'node', 'foreign_step', 'foreign_asset', 'unknown', 'active', 'changed_after_authorization'])
def test_unsafe_or_stale_repairs_never_submit(tmp_path, edit):
    c = context(tmp_path)
    async def run():
        c.provider.failures.add('失败')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '安全边界', 'shots': [{'title': '原镜', 'imagePrompt': '失败'}]}, c.models, c.session)
        plan = await wait(c)
        step = plan['steps'][0]
        request = command(c, plan, step, prompt='新要求')
        if edit in {'plan', 'shot', 'node'}:
            request[{'plan': 'expectedRevision', 'shot': 'expectedShotRevision', 'node': 'expectedNodeRevision'}[edit]] += 1
        if edit == 'foreign_step': request['stepId'] = str(uuid4())
        if edit == 'foreign_asset': request.update(action='reuse', prompt=None, assetId=str(uuid4()))
        if edit in {'unknown', 'active'}:
            task = read_generation_task(c.directory / 'tasks' / (step['taskId'] + '.json'))
            task.update(phase='submit', recovery='review', status='running' if edit == 'active' else 'interrupted', errorDetails=None)
            write_json(c.directory / 'tasks' / (step['taskId'] + '.json'), task)
        if edit == 'changed_after_authorization':
            request['action'] = 'revise'
            await c.manager.repair(c.owner, plan['id'], request, c.session)
            c.generation.canvas.patch(c.owner, step['nodeId'], {'prompt': '用户又改了'}, c.session)
            await c.manager.resume(c.owner, plan['id'], c.session)
            result = await wait(c)
            assert result['status'] == 'blocked' and '变化' in result['error']
        else:
            with pytest.raises(ProjectError):
                await c.manager.repair(c.owner, plan['id'], request, c.session)
            assert len(c.manager.list(c.owner)[0]['repairs']) == 0
        assert len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_repair_limits_apply_to_new_commands_and_resume_without_automatic_retry(tmp_path):
    c = context(tmp_path)
    async def run():
        c.provider.failures.add('失败')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '有限重试', 'shots': [{'title': '原镜', 'imagePrompt': '失败'}]}, c.models, c.session)
        plan = await wait(c)
        for _ in range(3):
            c.provider.failures.add('失败')
            await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0]), c.session)
            plan = await wait(c)
            assert plan['status'] == 'blocked'
        assert len(c.provider.calls) == 4
        with pytest.raises(ProjectError, match='限制'):
            await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0]), c.session)
        with pytest.raises(ProjectError, match='限制'):
            await c.manager.resume(c.owner, plan['id'], c.session)
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], action='reuse', assetId=c.reference['id']), c.session)
        assert (await wait(c))['status'] == 'succeeded' and len(c.provider.calls) == 4
        await close(c)
    asyncio.run(run())


def test_deadline_stops_plan_but_keeps_late_result_as_candidate(tmp_path, monkeypatch):
    c = context(tmp_path)
    async def run():
        c.provider.failures.add('失败')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '时限', 'shots': [{'title': '原镜', 'imagePrompt': '失败'}]}, c.models, c.session)
        plan = await wait(c)
        monkeypatch.setattr('museshow.application.production.MAX_REPAIR_SECONDS', .5)
        c.provider.gate.clear()
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], prompt='修复'), c.session)
        result = await wait(c)
        assert result['status'] == 'stopped' and '20 分钟' in result['error']
        c.provider.gate.set()
        await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
        task = next(item for item in c.generation.canvas.snapshot(c.owner)['tasks'] if item['prompt'] == '修复')
        assert task['canvasAdoption']['reason'] == 'plan_paused'
        with pytest.raises(ProjectError, match='时限'):
            await c.manager.resume(c.owner, plan['id'], c.session)
        assert len(c.provider.calls) == 2
        await close(c)
    asyncio.run(run())


def test_repair_api_rejects_invalid_input_session_and_reused_operation_id(tmp_path):
    c = context(tmp_path)
    plan, _ = c.manager._prepare(c.owner, str(uuid4()), {'title': 'API', 'shots': [{'title': '镜头', 'imagePrompt': '原要求'}]}, c.models, c.session)
    c.manager._initialize(c.owner, plan)
    plan.update(status='stopped')
    c.manager._save(c.owner, plan)
    plan = c.manager.list(c.owner)[0]
    request = command(c, plan, plan['steps'][0], action='revise', prompt='新要求')
    route = f'/api/projects/{c.owner}/production-plans/{plan["id"]}/repairs'
    with TestClient(create_app(c.store, generation_provider=c.provider), headers={
            'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}) as client:
        assert client.post(route, json={**request, 'mode': 'not_supported'}).status_code == 422
        assert client.post(route, json=request, headers={'X-MuseShow-Session': str(uuid4())}).status_code == 409
        response = client.post(route, json=request)
        assert response.status_code == 202 and response.json()['status'] == 'stopped'
        assert client.post(route, json=request).status_code == 202
        assert client.post(route, json={**request, 'prompt': '重复标识不同要求'}).status_code == 409
        assert client.get(f'/api/projects/{c.owner}/production-plans').json()[0]['repairs'][0]['request']['prompt'] == '新要求'
        assert c.provider.calls == []


def test_revise_survives_restart_and_only_runs_after_explicit_continue(tmp_path):
    c = context(tmp_path)
    async def run():
        c.provider.failures.add('原要求')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '重启', 'shots': [{'title': '原镜', 'imagePrompt': '原要求'}]}, c.models, c.session)
        plan = await wait(c)
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], action='revise', prompt='重启后修复'), c.session)
        await close(c)
        c.generation = Generation(c.store, c.generation.configs, c.provider)
        c.manager = Production(c.store, c.generation)
        await c.generation.start(); await c.manager.start()
        assert c.manager.jobs == {} and len(c.provider.calls) == 1
        await c.manager.resume(c.owner, plan['id'], c.session)
        result = await wait(c)
        assert result['status'] == 'succeeded' and c.provider.calls[-1]['prompt'] == '重启后修复'
        assert len(c.provider.calls) == 2
        await close(c)
    asyncio.run(run())


def test_reuse_recovers_partial_local_adoption_without_reposting_or_overwriting_history(tmp_path, monkeypatch):
    c = context(tmp_path)
    async def run():
        c.provider.failures.add('失败')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '本地写入恢复', 'shots': [{'title': '原镜', 'imagePrompt': '失败'}]}, c.models, c.session)
        plan = await wait(c)
        original = c.directory / 'tasks' / (plan['steps'][0]['taskId'] + '.json')
        original_bytes = original.read_bytes()
        adopt = c.manager.board.adopt_asset
        def fail_once(*args):
            monkeypatch.setattr(c.manager.board, 'adopt_asset', adopt)
            raise OSError('local write interrupted')
        monkeypatch.setattr(c.manager.board, 'adopt_asset', fail_once)
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], action='reuse', assetId=c.reference['id']), c.session)
        assert (await wait(c))['status'] == 'blocked'
        await c.manager.resume(c.owner, plan['id'], c.session)
        result = await wait(c)
        assert result['status'] == 'succeeded', result['error']
        assert len(c.provider.calls) == 1 and original.read_bytes() == original_bytes
        assert c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected']['visual'] == c.reference['id']
        await close(c)
    asyncio.run(run())


def test_stopped_unsubmitted_repair_cannot_be_posted_during_startup(tmp_path):
    c = context(tmp_path)
    async def run():
        c.provider.failures.add('失败')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '启动保护', 'shots': [{'title': '原镜', 'imagePrompt': '失败'}]}, c.models, c.session)
        plan = await wait(c)
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], action='revise', prompt='尚未提交修复'), c.session)
        # Leave a durable accepted-but-unsubmitted receipt, as after a crash.
        c.generation.limit = asyncio.Semaphore(0)
        await c.manager.resume(c.owner, plan['id'], c.session)
        for _ in range(200):
            if c.generation.jobs:
                break
            await asyncio.sleep(.01)
        await c.manager.stop(c.owner, plan['id'], c.session)
        await close(c)
        c.generation = Generation(c.store, c.generation.configs, c.provider)
        c.manager = Production(c.store, c.generation)
        await c.generation.start(); await c.manager.start()
        assert c.generation.jobs == c.manager.jobs == {} and len(c.provider.calls) == 1
        plan = c.manager.list(c.owner)[0]
        task = read_generation_task(c.directory / 'tasks' / (plan['steps'][0]['taskId'] + '.json'))
        assert task['phase'] == 'queued' and task['status'] == 'interrupted'
        await c.manager.resume(c.owner, plan['id'], c.session)
        assert (await wait(c))['status'] == 'succeeded'
        assert len(c.provider.calls) == 2
        await close(c)
    asyncio.run(run())


def test_confirmed_remote_failure_allows_video_repair_without_resubmitting_old_task(tmp_path, media):
    c = context(tmp_path, media)
    calls = []
    def handle(request):
        calls.append(request)
        posts = sum(item.method == 'POST' for item in calls)
        if request.method == 'POST':
            return httpx.Response(200, json={'id': 'remote-' + str(posts)})
        if request.url.host == 'cdn.test':
            return httpx.Response(200, content=media[0])
        if posts == 1:
            return httpx.Response(200, json={'status': 'failed', 'error': {'code': 'InputImageSensitiveContentDetected.PrivacyInformation'}})
        return httpx.Response(200, json={'status': 'succeeded', 'content': {'video_url': 'https://cdn.test/video'}})
    c.generation.provider = VolcengineGeneration(c.store, httpx.MockTransport(handle), poll_interval=0)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '远端确认', 'shots': [
            {'title': '原镜', 'videoPrompt': '原视频', 'referenceIds': [c.reference['id']]}]}, c.models, c.session)
        plan = await wait(c)
        receipt = read_generation_task(c.directory / 'tasks' / (plan['steps'][0]['taskId'] + '.json'))
        assert receipt['errorDetails']['providerStatus'] == 'failed'
        assert c.generation.recovery(receipt, c.directory) == 'retry'
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], mode='text_to_video'), c.session)
        result = await wait(c)
        assert result['status'] == 'succeeded', result['error']
        assert sum(item.method == 'POST' for item in calls) == 2
        assert sum(str(item.url).endswith('remote-1') for item in calls) == 1
        await close(c)
    asyncio.run(run())


def test_reuse_can_complete_unsubmitted_step_without_a_generation_receipt(tmp_path):
    c = context(tmp_path)
    async def run():
        plan, _ = c.manager._prepare(c.owner, str(uuid4()), {'title': '直接复用', 'shots': [{'title': '首镜', 'imagePrompt': '原要求'}]}, c.models, c.session)
        c.manager._initialize(c.owner, plan)
        plan['status'] = 'stopped'; c.manager._save(c.owner, plan)
        plan = c.manager.list(c.owner)[0]
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], action='reuse', assetId=c.reference['id']), c.session)
        result = await wait(c)
        assert result['status'] == 'succeeded', result['error']
        assert c.provider.calls == [] and not (c.directory / 'tasks').exists()
        assert result['steps'][0]['assetId'] == c.reference['id']
        await close(c)
    asyncio.run(run())


def test_repair_history_keeps_original_outputs_and_user_selected_basis(tmp_path):
    c = context(tmp_path)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '历史保留', 'shots': [{'title': '首镜', 'imagePrompt': '原要求'}]}, c.models, c.session)
        plan = await wait(c)
        old_output = plan['steps'][0]['assetId']
        c.generation.canvas.patch(c.owner, plan['steps'][0]['nodeId'], {'assetIds': [old_output, c.reference['id']], 'assetId': c.reference['id']}, c.session)
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], prompt='修复'), c.session)
        assert (await wait(c))['status'] == 'succeeded'
        for node in c.generation.canvas.snapshot(c.owner)['canvas']['nodes']:
            c.generation.canvas.remove(c.owner, node['id'], c.session)
        for shot in c.manager.board.snapshot(c.owner)['storyboard']['shots']:
            c.manager.board.change(c.owner, shot['id'], shot['revision'], c.session, remove=True)
        for asset_id in (old_output, c.reference['id']):
            with pytest.raises(ProjectError, match='引用'):
                c.generation.canvas.assets.delete(c.owner, asset_id, c.session)
        await close(c)
    asyncio.run(run())
