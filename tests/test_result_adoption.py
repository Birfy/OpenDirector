import asyncio
from copy import deepcopy
import io
from pathlib import Path
import subprocess
import shutil
from uuid import uuid4
import wave

import pytest

from museshow.application.production import Production
from museshow.infrastructure.generation_results import GenerationResults
from museshow.infrastructure.local_projects import read_json
from museshow.application.generation import Generation
from test_production import setup


async def started(provider):
    for _ in range(200):
        if provider.calls:
            return
        await asyncio.sleep(.01)
    raise AssertionError('Generation did not start')


async def settled(generation):
    await asyncio.gather(*(job.future for job in list(generation.jobs.values())))


def image(generation, owner, session, name, *, source='upload'):
    from PIL import Image
    data = io.BytesIO()
    Image.new('RGB', (12, 10), 'blue').save(data, 'PNG')
    return generation.canvas.assets.import_file(owner, str(uuid4()), name + '.png', data.getvalue(), session, source=source)


def audio_bytes():
    data = io.BytesIO()
    with wave.open(data, 'wb') as stream:
        stream.setnchannels(1); stream.setsampwidth(2); stream.setframerate(8000)
        stream.writeframes(b'\0\0' * 8000)
    return data.getvalue()


def require_media(*, video=False):
    if not shutil.which('ffprobe') or (video and not shutil.which('ffmpeg')):
        pytest.skip('media fixtures require local FFmpeg tools')


@pytest.mark.parametrize('edit,held', [
    ('prompt', 'node_changed'), ('reference', 'node_changed'), ('selection', 'node_changed'),
    ('model', 'model_changed'), ('reference_bytes', 'reference_changed'),
    ('move_and_title', None), ('reference_rename', None), ('restore_inputs', None),
    ('candidate_only', 'candidate_only'), ('unrelated_board', None),
])
def test_manual_result_compares_inputs_and_preserves_current_selection(tmp_path, edit, held):
    store, session, project, config, generation, provider = setup(tmp_path)
    owner = project['id']
    old, alternate = [image(generation, owner, session, name, source='generated') for name in ('old', 'alternate')]
    reference = image(generation, owner, session, 'reference')
    node = generation.canvas.create(owner, {'id': str(uuid4()), 'kind': 'image',
        'assetId': old['id'], 'assetIds': [old['id']]}, session)
    generation.canvas.attach(owner, node['id'], alternate['id'], session, adopt=False)
    async def run():
        provider.gate.clear()
        receipt = await generation.submit(owner, node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': config['id'], 'inputs': {'prompt': '原要求', 'referenceIds': [reference['id']]}}, session,
            adoption_policy='candidate_only' if edit == 'candidate_only' else 'if_current')
        await started(provider)
        changes = {'prompt': '新要求'} if edit in {'prompt', 'restore_inputs'} else {'referenceIds': [alternate['id']]} if edit == 'reference' else {'assetId': alternate['id']} if edit == 'selection' else {'x': -30, 'title': '改名'} if edit == 'move_and_title' else {}
        if changes:
            generation.canvas.patch(owner, node['id'], changes, session)
        if edit == 'restore_inputs': generation.canvas.patch(owner, node['id'], {'prompt': '原要求'}, session)
        if edit == 'model': generation.configs.save('image', 'https://changed.test', 'other', 'private', config['id'])
        if edit == 'reference_bytes': (Path(project['path']) / reference['path']).write_bytes(b'changed externally')
        if edit == 'unrelated_board': (Path(project['path']) / 'storyboard.json').write_text('{broken', encoding='utf-8')
        if edit == 'reference_rename':
            generation.canvas.assets.update(owner, reference['id'], {'expectedRevision': 1, 'name': '参考改名.png', 'purpose': 'reference', 'referenceIds': []}, session)
        before = deepcopy(generation.canvas.snapshot(owner)['canvas']['nodes'])
        provider.gate.set()
        await settled(generation)
        snapshot = generation.canvas.snapshot(owner)
        task = next(item for item in snapshot['tasks'] if item['id'] == receipt['id'])
        result = next(item for item in snapshot['canvas']['nodes'] if item['id'] == node['id'])
        previous = next(item for item in before if item['id'] == node['id'])
        assert task['status'] == 'succeeded' and task['technicalCheck']['status'] == 'passed'
        assert task['technicalCheck']['facts']['width'] == 16 and task['technicalCheck']['humanReviewRequired']
        assert task['assetId'] in result['assetIds']
        assert task['canvasAdoption']['reason'] == held
        assert result['assetId'] == (previous['assetId'] if held else task['assetId'])
        assert result['prompt'] == previous['prompt'] and result['referenceIds'] == previous['referenceIds']
        assert result['title'] == previous['title'] and result['x'] == previous['x']
        before_repeat = deepcopy(snapshot)
        generation.adopt_result(owner, receipt['id'])
        assert generation.canvas.snapshot(owner) == before_repeat
        assert len(provider.calls) == 1
        await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('edit,held', [
    ('node_prompt', 'node_changed'), ('node_selection', 'node_changed'),
    ('shot_description', 'shot_changed'), ('node_reference', 'node_changed'),
    ('shot_selection', 'shot_changed'), ('script_bytes', 'script_changed'),
    ('other_shot', None), ('title_and_order', None), ('other_role', None),
    ('pause', 'plan_paused'), ('pause_resume', None), ('pause_then_edit', 'node_changed'),
])
def test_plan_result_preserves_both_views_and_rechecks_original_basis(tmp_path, edit, held):
    if edit == 'other_role': require_media()
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    owner = project['id']
    old, alternate = [image(generation, owner, session, name) for name in ('old', 'alternate')]
    first = manager.board.create(owner, {'id': str(uuid4()), 'title': '当前镜头', 'description': '原画面', 'expectedOrderRevision': 0}, session)['shots'][0]
    board = manager.board.adopt_asset(owner, first['id'], first['revision'], 'visual', old['id'], session)
    first = board['shots'][0]
    second = manager.board.create(owner, {'id': str(uuid4()), 'title': '其他镜头', 'expectedOrderRevision': board['orderRevision'], 'afterId': first['id']}, session)['shots'][1]
    script = generation.canvas.save_text(owner, str(uuid4()), str(uuid4()), '原剧本', '剧本.md', session, create=True)
    async def run():
        provider.gate.clear()
        plan = await manager.submit(owner, str(uuid4()), {'title': '受保护制作', 'scriptAssetId': script['id'], 'scriptFingerprint': script['fingerprint'],
            'shots': [{'shotId': first['id'], 'expectedRevision': first['revision'], 'title': first['title'], 'imagePrompt': '原生成要求'}]}, {'image': config['id']}, session)
        await started(provider)
        running = manager.list(owner)[0]
        step = running['steps'][0]
        if edit in {'pause', 'pause_resume', 'pause_then_edit'}:
            await manager.stop(owner, plan['id'], session)
        if edit == 'node_prompt': generation.canvas.patch(owner, step['nodeId'], {'prompt': '用户新要求'}, session)
        if edit == 'node_selection': generation.canvas.patch(owner, step['nodeId'], {'assetIds': [alternate['id']], 'assetId': alternate['id']}, session)
        if edit in {'shot_description', 'other_shot'}:
            target = first if edit == 'shot_description' else second
            manager.board.change(owner, target['id'], target['revision'], session, fields={'description': '用户新描述'})
        if edit == 'node_reference': generation.canvas.patch(owner, step['nodeId'], {'referenceIds': [alternate['id']]}, session)
        if edit == 'shot_selection': manager.board.adopt_asset(owner, first['id'], first['revision'], 'visual', alternate['id'], session)
        if edit == 'script_bytes': (Path(project['path']) / script['path']).write_bytes(b'changed script')
        if edit == 'title_and_order':
            manager.board.change(owner, first['id'], first['revision'], session, fields={'title': '新标题'})
            board = manager.board.snapshot(owner)['storyboard']
            manager.board.reorder(owner, {'expectedOrderRevision': board['orderRevision'], 'shotIds': [second['id'], first['id']]}, session)
        if edit == 'other_role':
            audio = generation.canvas.assets.import_file(owner, str(uuid4()), '用户旁白.wav', audio_bytes(), session)
            manager.board.adopt_asset(owner, first['id'], first['revision'], 'audio', audio['id'], session)
        provider.gate.set()
        await settled(generation)
        await asyncio.gather(*list(manager.jobs.values()))
        if edit in {'pause_resume', 'pause_then_edit'}:
            paused = generation.canvas.snapshot(owner)['tasks'][0]
            assert paused['canvasAdoption']['reason'] == 'plan_paused'
            assert next(item for item in generation.canvas.snapshot(owner)['canvas']['nodes'] if item['id'] == step['nodeId'])['assetId'] is None
            if edit == 'pause_then_edit': generation.canvas.patch(owner, step['nodeId'], {'prompt': '暂停后的新要求'}, session)
            await manager.resume(owner, plan['id'], session)
            await asyncio.gather(*list(manager.jobs.values()))
        task = generation.canvas.snapshot(owner)['tasks'][0]
        current_plan = manager.list(owner)[0]
        assert task['status'] == 'succeeded' and task['canvasAdoption']['reason'] == held
        board = manager.board.snapshot(owner)['storyboard']
        shot = next(item for item in board['shots'] if item['id'] == first['id'])
        assert task['assetId'] in shot['candidates']['visual']
        expected = (alternate['id'] if edit == 'shot_selection' else old['id']) if held else task['assetId']
        assert shot['selected']['visual'] == expected
        assert current_plan['status'] == ('stopped' if edit == 'pause' else 'blocked' if held else 'succeeded')
        if edit == 'other_role': assert shot['selected']['audio'] == audio['id']
        if edit == 'title_and_order':
            assert board['shots'][0]['id'] == second['id'] and shot['title'] == '新标题'
        assert len(provider.calls) == 1
        # Rechecking a saved candidate never manufactures another asset or job.
        unchanged = generation.canvas.snapshot(owner)
        generation.adopt_result(owner, task['id'])
        assert len(generation.canvas.assets.list(owner)) == len(unchanged['assets'])
        assert len(provider.calls) == 1
        await manager.close(); await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('edit_during_generation', [False, True])
def test_text_generation_clears_empty_draft_and_preserves_later_prompt_edits(tmp_path, edit_during_generation):
    _, session, project, _, generation, provider = setup(tmp_path)
    config = generation.configs.save('agent', 'https://chat.test', 'text', 'private')
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': 'text', 'draft': '原草稿'}, session)
    async def text(config, task, submitted):
        provider.calls.append(task['id'])
        await provider.gate.wait()
        return 'md', b'generated text'
    provider.generate = text
    async def run():
        provider.gate.clear()
        receipt = await generation.submit(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': config['id'], 'inputs': {'prompt': '写剧本'}}, session)
        await started(provider)
        if edit_during_generation:
            generation.canvas.patch(project['id'], node['id'], {'prompt': '用户正在修改的生成要求'}, session)
        provider.gate.set(); await settled(generation)
        snapshot = generation.canvas.snapshot(project['id'])
        result = next(item for item in snapshot['canvas']['nodes'] if item['id'] == node['id'])
        task = next(item for item in snapshot['tasks'] if item['id'] == receipt['id'])
        assert task['assetId'] in result['assetIds']
        if edit_during_generation:
            assert result['draft'] is None and result['prompt'] == '用户正在修改的生成要求' and result['assetId'] is None
            assert task['canvasAdoption']['reason'] == 'node_changed'
        else:
            assert result['draft'] is None and result['assetId'] == task['assetId']
            generation.adopt_result(project['id'], task['id'])
            assert generation.canvas.snapshot(project['id']) == snapshot
        await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('kind,suffix', [('video', 'mp4'), ('audio', 'wav'), ('text', 'md')])
def test_technical_check_records_facts_without_creative_quality_claim(tmp_path, kind, suffix):
    if kind in {'audio', 'video'}: require_media(video=kind == 'video')
    _, session, project, _, generation, provider = setup(tmp_path)
    if kind == 'video':
        path = tmp_path / 'clip.mp4'
        subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=32x24:d=0.2', '-pix_fmt', 'yuv420p', str(path)], check=True)
        data = path.read_bytes()
    else:
        data = audio_bytes() if kind == 'audio' else b'script'
    config = generation.configs.save('agent' if kind == 'text' else kind, 'https://model.test', kind, 'private')
    async def generate(config, task, submitted):
        provider.calls.append(task['id'])
        return suffix, data
    provider.generate = generate
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)
    async def run():
        await generation.submit(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': config['id'], 'inputs': {'prompt': '原要求'}}, session)
        await settled(generation)
        task = generation.canvas.snapshot(project['id'])['tasks'][0]
        assert task['status'] == 'succeeded' and task['technicalCheck']['status'] == 'passed'
        facts = task['technicalCheck']['facts']
        assert facts['kind'] == kind and facts['size'] == len(data)
        if kind == 'video': assert facts['width'] == 32 and facts['hasAudio'] is False and facts['durationMs'] > 0
        if kind == 'audio': assert facts['sampleRate'] == 8000 and facts['channels'] == 1 and facts['durationMs'] == 1000
        assert task['technicalCheck']['humanReviewRequired'] is True
        await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('wrong_kind', [False, True])
def test_invalid_result_is_kept_for_diagnostics_and_never_resubmitted(tmp_path, wrong_kind):
    _, session, project, config, generation, provider = setup(tmp_path)
    data = b'invalid image'
    kind = 'image'
    if wrong_kind:
        saved = image(generation, project['id'], session, 'valid')
        data = generation.store.asset(project['id'], saved['id'])[0]
        kind = 'text'
        config = generation.configs.save('agent', 'https://chat.test', 'text', 'private')
    async def invalid(config, task, submitted):
        provider.calls.append(task['id'])
        return 'png', data
    provider.generate = invalid
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)
    async def run():
        receipt = await generation.submit(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': config['id'], 'inputs': {'prompt': '原要求'}}, session)
        await settled(generation)
        for _ in range(2):
            task = next(item for item in generation.canvas.snapshot(project['id'])['tasks'] if item['id'] == receipt['id'])
            assert task['status'] == 'failed' and task['technicalCheck']['status'] == 'failed'
            assert task['errorDetails']['stage'] == 'check' and task['assetId'] is None
            assert GenerationResults(project['path'], task['id']).data()[1] == data
            await generation.recover(project['id'], task['id'], session)
            await settled(generation)
        assert len(provider.calls) == 1
        await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('target', ['canvas', 'storyboard'])
def test_change_between_canvas_and_storyboard_commit_is_not_overwritten_on_resume(tmp_path, monkeypatch, target):
    _, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(generation.store, generation)
    owner = project['id']
    alternate = image(generation, owner, session, '用户选择')
    adopt = generation.adopt_result
    changed = False
    def concurrent_change(owner, task_id):
        nonlocal changed
        if not changed:
            changed = True
            task = generation.canvas.snapshot(owner)['tasks'][0]
            if target == 'canvas':
                generation.canvas.patch(owner, task['nodeId'], {'assetIds': [task['assetId'], alternate['id']], 'assetId': alternate['id']}, session)
            else:
                shot = manager.board.snapshot(owner)['storyboard']['shots'][0]
                manager.board.adopt_asset(owner, shot['id'], shot['revision'], 'visual', alternate['id'], session)
        return adopt(owner, task_id)
    monkeypatch.setattr(generation, 'adopt_result', concurrent_change)
    async def run():
        plan = await manager.submit(owner, str(uuid4()), {'title': '交错采用', 'shots': [{'title': '开场', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
        await asyncio.gather(*list(manager.jobs.values()))
        for _ in range(2):
            assert manager.list(owner)[0]['status'] == 'blocked'
            task = generation.canvas.snapshot(owner)['tasks'][0]
            node = next(node for node in generation.canvas.snapshot(owner)['canvas']['nodes'] if node['id'] == task['nodeId'])
            shot = manager.board.snapshot(owner)['storyboard']['shots'][0]
            assert task['assetId'] in node['assetIds'] and task['assetId'] in shot['candidates']['visual']
            assert node['assetId'] == (alternate['id'] if target == 'canvas' else task['assetId'])
            assert shot['selected']['visual'] == (alternate['id'] if target == 'storyboard' else None)
            await manager.resume(owner, plan['id'], session)
            await asyncio.gather(*list(manager.jobs.values()))
        assert len(provider.calls) == 1
        await manager.close(); await generation.close()
    asyncio.run(run())


def test_paused_candidate_stays_unselected_after_restart_until_explicit_continue(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    owner = project['id']
    async def run():
        provider.gate.clear()
        plan = await manager.submit(owner, str(uuid4()), {'title': '暂停跨重启', 'shots': [{'title': '开场', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
        await started(provider)
        await manager.stop(owner, plan['id'], session)
        provider.gate.set(); await settled(generation)
        before = generation.canvas.snapshot(owner)
        before_board = manager.board.snapshot(owner)['storyboard']
        await manager.close(); await generation.close()
        restarted_generation = Generation(store, generation.configs, provider)
        restarted = Production(store, restarted_generation)
        await restarted_generation.start(); await restarted.start()
        assert restarted_generation.canvas.snapshot(owner) == before
        assert restarted.board.snapshot(owner)['storyboard'] == before_board
        assert restarted.jobs == {} and before['tasks'][0]['canvasAdoption']['reason'] == 'plan_paused'
        await restarted.resume(owner, plan['id'], session)
        await asyncio.gather(*list(restarted.jobs.values()))
        assert restarted.list(owner)[0]['status'] == 'succeeded'
        complete = restarted_generation.canvas.snapshot(owner)
        assert complete['tasks'][0]['canvasAdoption']['status'] == complete['tasks'][0]['storyboardAdoption']['status'] == 'adopted'
        before_again = deepcopy(complete)
        restarted_generation.adopt_result(owner, complete['tasks'][0]['id'])
        assert restarted_generation.canvas.snapshot(owner) == before_again
        assert len(provider.calls) == 1
        await restarted.close(); await restarted_generation.close()
    asyncio.run(run())


def test_changes_to_pending_shot_block_its_submission_and_keep_completed_shot(tmp_path):
    _, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(generation.store, generation)
    owner = project['id']
    async def run():
        provider.gate.clear()
        await manager.submit(owner, str(uuid4()), {'title': '不扩大修改', 'shots': [
            {'title': '开场', 'imagePrompt': '雨'}, {'title': '结尾', 'imagePrompt': '晴', 'referenceShot': 1}]}, {'image': config['id']}, session)
        await started(provider)
        shot = manager.board.snapshot(owner)['storyboard']['shots'][1]
        manager.board.change(owner, shot['id'], shot['revision'], session, fields={'description': '用户新要求'})
        provider.gate.set()
        await asyncio.gather(*list(manager.jobs.values()))
        result = manager.list(owner)[0]
        assert result['status'] == 'blocked' and result['steps'][0]['status'] == 'completed'
        board = manager.board.snapshot(owner)['storyboard']
        assert board['shots'][0]['selected']['visual'] and board['shots'][1]['selected']['visual'] is None
        assert board['shots'][1]['description'] == '用户新要求' and len(provider.calls) == 1
        await manager.close(); await generation.close()
    asyncio.run(run())


def test_retry_does_not_capture_changed_selection_as_new_authorization(tmp_path):
    _, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(generation.store, generation)
    owner = project['id']
    alternate = image(generation, owner, session, '用户选择')
    async def run():
        provider.fail = True
        plan = await manager.submit(owner, str(uuid4()), {'title': '拒绝后修改', 'shots': [{'title': '开场', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
        await asyncio.gather(*list(manager.jobs.values()))
        node_id = manager.list(owner)[0]['steps'][0]['nodeId']
        generation.canvas.patch(owner, node_id, {'assetIds': [alternate['id']], 'assetId': alternate['id']}, session)
        await manager.resume(owner, plan['id'], session)
        await asyncio.gather(*list(manager.jobs.values()))
        assert manager.list(owner)[0]['status'] == 'blocked' and len(provider.calls) == 1
        assert next(node for node in generation.canvas.snapshot(owner)['canvas']['nodes'] if node['id'] == node_id)['assetId'] == alternate['id']
        await manager.close(); await generation.close()
    asyncio.run(run())


def test_image_video_and_audio_progress_without_invalidating_planned_adoptions(tmp_path):
    require_media(video=True)
    _, session, project, image_config, generation, provider = setup(tmp_path)
    manager = Production(generation.store, generation)
    owner = project['id']
    png = image(generation, owner, session, '参考')
    image_data = generation.store.asset(owner, png['id'])[0]
    video = tmp_path / 'pipeline.mp4'
    subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=32x24:d=0.2', '-pix_fmt', 'yuv420p', str(video)], check=True)
    configs = {kind: generation.configs.save(kind, 'https://model.test', kind, 'private')['id'] for kind in ('video', 'audio')}
    configs['image'] = image_config['id']
    async def generate(config, task, submitted):
        provider.calls.append(task['id'])
        return {'image': ('png', image_data), 'video': ('mp4', video.read_bytes()), 'audio': ('wav', audio_bytes())}[task['kind']]
    provider.generate = generate
    async def run():
        await manager.submit(owner, str(uuid4()), {'title': '完整单镜', 'shots': [{'title': '开场', 'imagePrompt': '关键帧', 'videoPrompt': '视频', 'narration': '你好'}]}, configs, session)
        await asyncio.gather(*list(manager.jobs.values()))
        plan = manager.list(owner)[0]
        assert plan['status'] == 'succeeded', plan['error']
        tasks = generation.canvas.snapshot(owner)['tasks']
        assert len(tasks) == len(provider.calls) == 3
        assert all(task['technicalCheck']['status'] == 'passed' and task['storyboardAdoption']['status'] == 'adopted' for task in tasks)
        shot = manager.board.snapshot(owner)['storyboard']['shots'][0]
        assert shot['selected']['visual'] == next(task['assetId'] for task in tasks if task['kind'] == 'video')
        assert shot['selected']['audio'] == next(task['assetId'] for task in tasks if task['kind'] == 'audio')
        assert len(shot['candidates']['visual']) == 2
        for step in plan['steps']:
            path = Path(project['path']) / 'tasks' / (step['taskId'] + '.json')
            assert read_json(path)['inputSnapshot']['shot'] is not None
        await manager.close(); await generation.close()
    asyncio.run(run())


def test_legacy_task_without_input_basis_is_readable_but_candidate_only(tmp_path):
    _, session, project, config, generation, provider = setup(tmp_path)
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    task, directory, private = generation._prepare(project['id'], node['id'], {'id': str(uuid4()),
        'expectedRevision': 1, 'modelConfigId': config['id'], 'inputs': {'prompt': '旧要求'}}, session)
    task.pop('inputSnapshot'); task.pop('adoptionPolicy')
    generation.canvas.task_write(project['id'], task, directory)
    path = Path(directory) / 'tasks' / (task['id'] + '.json')
    before = path.read_bytes()
    assert generation.canvas.snapshot(project['id'])['tasks'][0]['id'] == task['id']
    assert path.read_bytes() == before
    async def run():
        generation._launch(task, directory, private)
        await settled(generation)
        snapshot = generation.canvas.snapshot(project['id'])
        result = snapshot['tasks'][0]
        assert result['status'] == 'succeeded' and result['canvasAdoption']['reason'] == 'legacy'
        assert snapshot['canvas']['nodes'][0]['assetId'] is None
        assert result['assetId'] in snapshot['canvas']['nodes'][0]['assetIds'] and len(provider.calls) == 1
        await generation.close()
    asyncio.run(run())
