"""Version restore, eligibility and preserved downstream selections as one flow."""
import asyncio
from copy import deepcopy
from types import SimpleNamespace
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from museshow.agent.loop import AgentLoop
from museshow.domain.projects import ProjectError
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.canvas_versions import apply_version, node_history
from museshow.infrastructure.timeline import TimelineProjects
from museshow_api.main import create_app
from test_production_repairs import close, command, context, media, wait


def restore(c, node_id, asset_id, **changes):
    history = node_history(c.generation.canvas, c.owner, node_id)
    version = next(item for item in history['versions'] if item['asset']['id'] == asset_id)
    return apply_version(c.generation.canvas, c.owner, node_id, asset_id,
        changes.get('revision', history['node']['revision']), changes.get('fingerprint', version['asset']['fingerprint']), c.session)


async def generate(c, node_id, kind, prompt, references=()):
    node = c.generation.canvas._node(c.generation.canvas.snapshot(c.owner)['canvas'], node_id)
    task = await c.generation.submit(c.owner, node_id, {'id': str(uuid4()), 'expectedRevision': node['revision'],
        'modelConfigId': c.models[kind], 'inputs': {'prompt': prompt, 'referenceIds': list(references)}}, c.session)
    await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
    return task


@pytest.mark.parametrize('kind', ['text', 'image', 'video', 'audio'])
def test_restore_is_atomic_undoable_and_never_generates_or_rewrites_receipts(tmp_path, media, kind):
    c = context(tmp_path, media)
    if kind == 'text':
        c.models['text'] = c.generation.configs.save('agent', 'https://model.test', 'writer', 'private')['id']
        async def text(config, task, submitted):
            c.provider.calls.append(deepcopy(task))
            return 'md', task['prompt'].encode()
        c.provider.generate = text
    async def run():
        canvas = c.generation.canvas
        node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': kind, 'title': '保留标题', 'x': 800, 'y': 600}, c.session)
        refs = [c.reference['id']] if kind in {'image', 'video', 'text'} else []
        await generate(c, node['id'], kind, '原始要求', refs)
        old_id = canvas._node(canvas.snapshot(c.owner)['canvas'], node['id'])['assetId']
        await generate(c, node['id'], kind, '第二版要求')
        canvas.patch(c.owner, node['id'], {'prompt': '未生成草稿'}, c.session)
        before = deepcopy(canvas._node(canvas.snapshot(c.owner)['canvas'], node['id']))
        receipts = {path: path.read_bytes() for path in (c.directory / 'tasks').glob('*.json')}
        result = restore(c, node['id'], old_id)
        assert result['assetId'] == old_id and result['prompt'] == '原始要求'
        assert result['referenceIds'] == refs and result['modelConfigId'] == c.models[kind] and result['draft'] is None
        assert (result['x'], result['y'], result['title'], result['taskId']) == (800, 600, '保留标题', before['taskId'])
        assert len(c.provider.calls) == 2 and {path: path.read_bytes() for path in receipts} == receipts
        history = canvas.snapshot(c.owner)['canvas']['history']
        assert history['undo']['label'] == '应用历史版本'
        undone = canvas.history(c.owner, 'undo', history['undo']['id'], str(uuid4()), c.session)
        after_undo = canvas._node(undone, node['id'])
        assert all(after_undo[key] == before[key] for key in ('assetId', 'prompt', 'referenceIds', 'modelConfigId', 'draft'))
        redone = canvas.history(c.owner, 'redo', undone['history']['redo']['id'], str(uuid4()), c.session)
        assert canvas._node(redone, node['id'])['assetId'] == old_id
        assert next(v for v in node_history(canvas, c.owner, node['id'])['versions'] if v['asset']['id'] == old_id)['applied']
        if kind == 'text':
            assert c.store.asset(c.owner, old_id)[0].decode() == '原始要求'
        await close(c)
    asyncio.run(run())


def test_generated_node_rejects_upload_and_missing_model_keeps_original_label(tmp_path):
    c = context(tmp_path)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '原始模型', 'shots': [{'title': '镜头', 'imagePrompt': '原始提示'}]}, c.models, c.session)
        plan = await wait(c); step = plan['steps'][0]; canvas = c.generation.canvas
        old = step['assetId']
        upload = canvas.assets.import_file(c.owner, str(uuid4()), '上传.png', c.store.asset(c.owner, c.reference['id'])[0], c.session)
        with pytest.raises(ProjectError, match='生成节点'):
            canvas.attach(c.owner, step['nodeId'], upload['id'], c.session)
        assert canvas._node(canvas.snapshot(c.owner)['canvas'], step['nodeId'])['assetId'] == old
        c.generation.configs.save('image', 'https://other.test', 'changed-model', 'private', c.models['image'])
        version = next(v for v in node_history(canvas, c.owner, step['nodeId'])['versions'] if v['asset']['id'] == old)
        assert version['modelName'] == 'seedream' and version['applicableModelConfigId'] is None
        assert restore(c, step['nodeId'], old)['modelConfigId'] is None
        c.generation.configs.delete(c.models['image'])
        assert restore(c, step['nodeId'], old)['assetId'] == old
        await close(c)
    asyncio.run(run())


def test_history_apply_preserves_plan_shot_timeline_and_existing_reference_but_blocks_new_use(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        canvas = c.generation.canvas
        await c.manager.submit(c.owner, str(uuid4()), {'title': '完整制作', 'shots': [
            {'title': '原镜头', 'imagePrompt': '首帧一', 'videoPrompt': '视频', 'narration': '旁白'}]}, c.models, c.session)
        plan = await wait(c); step = plan['steps'][0]; old = step['assetId']
        await c.manager.repair(c.owner, plan['id'], command(c, plan, step, prompt='首帧二', adoptionPolicy='candidate_only'), c.session)
        plan = await wait(c); candidate = plan['steps'][0]['assetId']
        other = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image', 'prompt': '使用旧版', 'referenceIds': [old]}, c.session)
        board_before = c.manager.board.snapshot(c.owner)['storyboard']
        timeline_before = TimelineProjects(c.store).snapshot(c.owner)
        saved = {p: p.read_bytes() for p in [*(c.directory / 'production-plans').glob('*.json'), *(c.directory / 'tasks').glob('*.json')]}
        restore(c, step['nodeId'], candidate)
        assert c.manager.board.snapshot(c.owner)['storyboard'] == board_before
        assert TimelineProjects(c.store).snapshot(c.owner) == timeline_before
        assert {p: p.read_bytes() for p in saved} == saved
        canvas.patch(c.owner, other['id'], {'title': '已有引用可继续保存'}, c.session)
        new_node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image'}, c.session)
        with pytest.raises(ProjectError, match='不是有效的当前版本'):
            canvas.patch(c.owner, new_node['id'], {'referenceIds': [old]}, c.session)
        calls = len(c.provider.calls)
        with pytest.raises(ProjectError, match='不是有效的当前版本'):
            await generate(c, other['id'], 'image', '新的生成', [old])
        assert len(c.provider.calls) == calls
        shot = c.manager.board.create(c.owner, {'id': str(uuid4()), 'title': '新镜头', 'expectedOrderRevision': board_before['orderRevision']}, c.session)['shots'][0]
        with pytest.raises(ProjectError, match='不是有效的当前版本'):
            c.manager.board.adopt_asset(c.owner, shot['id'], shot['revision'], 'visual', old, c.session)
        c.manager.board.adopt_asset(c.owner, shot['id'], shot['revision'], 'visual', candidate, c.session)
        state = canvas.snapshot(c.owner)
        assert candidate in state['availableAssetIds'] and old not in state['availableAssetIds'] and old not in state['listedAssetIds']
        turn = SimpleNamespace(owner=c.owner, selected_shot_id=None, selected_node_id=None, selections={})
        observed = AgentLoop(c.store, c.generation.configs, c.generation, None)._project(turn)
        assert old not in {a['id'] for a in observed['assets']} and candidate in {a['id'] for a in observed['assets']}
        await close(c)
    asyncio.run(run())


@pytest.mark.parametrize('failure', ['revision', 'fingerprint', 'file_missing', 'file_changed', 'wrong_node', 'active', 'unsettled'])
def test_failed_restore_never_partially_writes(tmp_path, failure):
    c = context(tmp_path)
    canvas = c.generation.canvas
    node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image', 'assetId': c.reference['id'], 'assetIds': [c.reference['id']]}, c.session)
    kwargs = {}
    if failure == 'revision': kwargs['revision'] = node['revision'] + 1
    if failure == 'fingerprint': kwargs['fingerprint'] = 'sha256:' + '0' * 64
    if failure == 'file_missing': (c.directory / c.reference['path']).unlink()
    if failure == 'file_changed': (c.directory / c.reference['path']).write_bytes(b'changed')
    if failure == 'wrong_node':
        canvas.patch(c.owner, node['id'], {'assetId': None}, c.session)
        state = canvas._read(c.directory); target = canvas._node(state, node['id']); target['assetIds'] = []; canvas._write(c.directory, state)
    if failure in {'active', 'unsettled'}:
        canvas.task_write(c.owner, {'id': str(uuid4()), 'nodeId': node['id'], 'kind': 'image', 'status': 'running' if failure == 'active' else 'interrupted',
            'recovery': 'remote' if failure == 'active' else 'review'}, str(c.directory))
    before = {p: p.read_bytes() for p in c.directory.rglob('*.json')}
    with pytest.raises(ProjectError):
        if failure == 'wrong_node':
            apply_version(canvas, c.owner, node['id'], c.reference['id'], canvas._node(canvas._read(c.directory), node['id'])['revision'], c.reference['fingerprint'], c.session)
        else:
            restore(c, node['id'], c.reference['id'], **kwargs)
    assert {p: p.read_bytes() for p in before} == before


def test_history_reference_restoration_does_not_apply_reference_nodes_and_missing_reference_remains_editable(tmp_path):
    c = context(tmp_path)
    async def run():
        canvas = c.generation.canvas
        node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image'}, c.session)
        await generate(c, node['id'], 'image', '有参考的版本', [c.reference['id']])
        first = canvas._node(canvas.snapshot(c.owner)['canvas'], node['id'])['assetId']
        await generate(c, node['id'], 'image', '无参考的版本')
        reference_node = next(n for n in canvas.snapshot(c.owner)['canvas']['nodes'] if n['assetId'] == c.reference['id'])
        canvas.remove(c.owner, reference_node['id'], c.session)
        restore(c, node['id'], first)
        assert c.reference['id'] in canvas.snapshot(c.owner)['availableAssetIds']
        assert c.reference['id'] not in canvas.snapshot(c.owner)['visibleAssetIds']
        with c.store.transaction():
            raw = c.store._inventory(c.directory); raw.pop(c.reference['id'])
            from museshow.infrastructure.local_projects import write_json
            write_json(c.directory / 'assets.json', raw)
        restore(c, node['id'], first)
        canvas.patch(c.owner, node['id'], {'prompt': '保留缺失引用，修改草稿'}, c.session)
        canvas.patch(c.owner, node['id'], {'referenceIds': [c.reference['id'], first]}, c.session)
        canvas.patch(c.owner, node['id'], {'referenceIds': []}, c.session)
        await close(c)
    asyncio.run(run())


def test_removed_nodes_keep_one_listing_and_all_history_after_undo_window_expires(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'text'}, c.session, remember=True)
    first = canvas.save_text(c.owner, node['id'], str(uuid4()), '第一版', '一.md', c.session)
    second = canvas.save_text(c.owner, node['id'], str(uuid4()), '第二版', '二.md', c.session)
    canvas.remove(c.owner, node['id'], c.session, remember=True)
    other = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'text'}, c.session)
    for index in range(55):
        canvas.patch(c.owner, other['id'], {'title': str(index)}, c.session, remember=True)
    canvas = CanvasProjects(c.store)
    state = canvas.snapshot(c.owner)
    assert first['id'] not in state['listedAssetIds'] and second['id'] in state['listedAssetIds']
    returned = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'text', 'assetId': second['id'], 'assetIds': [second['id']]}, c.session, remember=True)
    assert returned['assetIds'] == [first['id'], second['id']]
    assert len(node_history(canvas, c.owner, returned['id'])['versions']) == 2
    assert first['id'] not in canvas.snapshot(c.owner)['listedAssetIds']
    restore(c, returned['id'], first['id'])
    canvas.remove(c.owner, returned['id'], c.session, remember=True)
    state = CanvasProjects(c.store).snapshot(c.owner)
    assert first['id'] in state['listedAssetIds'] and second['id'] not in state['listedAssetIds']


def test_apply_endpoint_is_scoped_and_hidden_version_cannot_be_new_chat_attachment(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'text'}, c.session)
    old = canvas.save_text(c.owner, node['id'], str(uuid4()), '旧版', '旧.md', c.session)
    canvas.save_text(c.owner, node['id'], str(uuid4()), '新版', '新.md', c.session)
    other = c.store.create('另一个', str(uuid4()), str(uuid4()))
    c.generation.configs.save('agent', 'https://model.test', 'writer', 'private')
    with TestClient(create_app(c.store, generation_provider=c.provider), headers={'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}) as client:
        root = f'/api/projects/{c.owner}'
        value = {'assetId': old['id'], 'expectedRevision': canvas._node(canvas.snapshot(c.owner)['canvas'], node['id'])['revision'], 'fingerprint': old['fingerprint']}
        assert old['id'] not in {a['id'] for a in client.get(root + '/assets?current_only=true').json()}
        assert client.post(f'/api/projects/{other["id"]}/canvas/nodes/{node["id"]}/versions/apply', json=value).status_code in {404, 409}
        model = next(m for m in c.generation.configs.list() if m['kind'] == 'agent')
        response = client.post(f'/api/data/{c.owner}/chat', json={'id': str(uuid4()), 'modelId': model['id'], 'text': '参考旧版', 'assets': [old['id']]})
        assert response.status_code == 409 and '不是有效的当前版本' in response.text
        assert not c.store.conversation(c.owner)['messages']
        response = client.post(root + f'/canvas/nodes/{node["id"]}/versions/apply', json=value)
        assert response.status_code == 200, response.text
        assert old['id'] in {a['id'] for a in client.get(root + '/assets?current_only=true').json()}


def test_unknown_inputs_can_restore_result_even_after_shot_is_removed(tmp_path):
    c = context(tmp_path)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '缺失历史', 'shots': [{'title': '原镜头', 'imagePrompt': '原始输入'}]}, c.models, c.session)
        plan = await wait(c); step = plan['steps'][0]
        (c.directory / 'tasks' / (step['taskId'] + '.json')).unlink()
        shot = c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]
        c.manager.board.change(c.owner, shot['id'], shot['revision'], c.session, remove=True)
        c.generation.canvas.patch(c.owner, step['nodeId'], {'prompt': '草稿', 'referenceIds': [c.reference['id']]}, c.session)
        result = restore(c, step['nodeId'], step['assetId'])
        assert result['assetId'] == step['assetId'] and result['prompt'] == ''
        assert result['referenceIds'] == [] and result['modelConfigId'] is None
        assert not node_history(c.generation.canvas, c.owner, step['nodeId'])['versions'][0]['recorded']
        assert not c.manager.board.snapshot(c.owner)['storyboard']['shots']
        await close(c)
    asyncio.run(run())


def test_agent_text_inputs_remain_immutable_after_metadata_edits_and_keep_reference_files(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    canvas.snapshot(c.owner)  # Project the reference onto the canvas before use.
    config = c.generation.configs.save('agent', 'https://writer.test', 'writer-model', 'private')
    asset = canvas.save_text(c.owner, str(uuid4()), str(uuid4()), '剧本正文', '剧本.md', c.session, create=True,
        agent_run={'id': str(uuid4()), 'modelConfigId': config['id'], 'referenceIds': [c.reference['id']],
            'inputs': {'prompt': '以参考图创作剧本', 'referenceIds': [c.reference['id']],
                'referenceFingerprints': {c.reference['id']: c.reference['fingerprint']},
                'modelName': config['modelId'], 'modelURL': config['url']}})
    canvas.assets.update(c.owner, asset['id'], {'expectedRevision': asset['revision'], 'name': '改名.md', 'purpose': 'document', 'referenceIds': []}, c.session)
    snapshot = canvas.snapshot(c.owner)
    node = next(n for n in snapshot['canvas']['nodes'] if n['assetId'] == asset['id'])
    reference = next(n for n in snapshot['canvas']['nodes'] if n['assetId'] == c.reference['id'])
    canvas.remove(c.owner, reference['id'], c.session)
    version = node_history(canvas, c.owner, node['id'])['versions'][0]
    assert version['recorded'] and version['prompt'] == '以参考图创作剧本'
    assert version['referenceIds'] == [c.reference['id']] and version['modelName'] == 'writer-model'
    with pytest.raises(ProjectError, match='引用'):
        canvas.assets.delete(c.owner, c.reference['id'], c.session)
    assert restore(c, node['id'], asset['id'])['referenceIds'] == [c.reference['id']]


def test_copy_shot_keeps_current_selection_without_promoting_archived_candidates(tmp_path):
    c = context(tmp_path)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '复制镜头', 'shots': [{'title': '原镜头', 'imagePrompt': '当前图'}]}, c.models, c.session)
        plan = await wait(c); step = plan['steps'][0]
        await c.manager.repair(c.owner, plan['id'], command(c, plan, step, prompt='历史候选', adoptionPolicy='candidate_only'), c.session)
        await wait(c)
        before = c.manager.board.snapshot(c.owner)['storyboard']
        original = deepcopy(before['shots'][0])
        assert len(original['candidates']['visual']) == 2
        board = c.manager.board.create(c.owner, {'id': str(uuid4()), 'expectedOrderRevision': before['orderRevision'],
            'sourceId': original['id'], 'afterId': original['id']}, c.session)
        assert board['shots'][0] == original
        assert board['shots'][1]['selected'] == original['selected']
        assert board['shots'][1]['candidates']['visual'] == [original['selected']['visual']]
        assert len(c.provider.calls) == 2
        await close(c)
    asyncio.run(run())
