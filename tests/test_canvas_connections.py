"""Connections edit live node inputs; executed and historical inputs stay frozen."""
import asyncio
from copy import deepcopy
from pathlib import Path
import shutil
import subprocess
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from museshow.domain.projects import ProjectError
from museshow.infrastructure.canvas_versions import node_history
from museshow_api.main import create_app
from test_canvas_generation import png
from test_canvas_version_application import restore
from test_inline_references import document
from test_production_repairs import context, close
from test_multimodal_references import media


def snapshot(c):
    return c.generation.canvas.snapshot(c.owner)


def current(c, key):
    return next(node for node in snapshot(c)['canvas']['nodes'] if node['id'] == key)


def source(c):
    return next(node for node in snapshot(c)['canvas']['nodes'] if node['assetId'] == c.reference['id'])


def connect(c, origin, target=None, **changes):
    value = {'sourceId': origin['id'], 'assetId': origin['assetId'], 'targetId': target['id'] if target else str(uuid4()),
             **({'expectedRevision': target['revision']} if target else {'kind': 'image', 'x': 500, 'y': 50, 'modelConfigId': c.models['image']})}
    return c.generation.canvas.connect(c.owner, {**value, **changes}, c.session)


def undo(c, direction='undo'):
    entry = snapshot(c)['canvas']['history'][direction]
    return c.generation.canvas.history(c.owner, direction, entry['id'], str(uuid4()), c.session)


async def generate(c, target):
    node = current(c, target['id'])
    task = await c.generation.submit(c.owner, node['id'], {'id': str(uuid4()), 'modelConfigId': c.models['image'], 'expectedRevision': node['revision'],
        'inputs': {'prompt': node['prompt'] or '绘制画面', 'promptContent': node['promptContent'], 'referenceIds': node['referenceIds']}}, c.session)
    await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
    return task


def test_create_connect_duplicate_disconnect_and_undo_are_atomic(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    origin = source(c)
    target = connect(c, origin)
    assert target['role'] == 'generation' and target['taskId'] is None
    assert target['promptContent'][0]['nodeId'] == origin['id']
    assert snapshot(c)['edges'][0]['state'] == 'pending' and not c.provider.calls
    before = deepcopy(snapshot(c)['canvas'])
    connect(c, origin, current(c, target['id']))
    assert snapshot(c)['canvas'] == before
    undo(c)
    assert not any(node['id'] == target['id'] for node in snapshot(c)['canvas']['nodes'])
    undo(c, 'redo')
    node = current(c, target['id'])
    body = document(c.reference, '前文\n', '中间') + document(c.reference, '', '\n后文')
    canvas.patch(c.owner, node['id'], {'promptContent': body}, c.session, remember=True)
    node = current(c, node['id'])
    canvas.disconnect(c.owner, node['id'], origin['id'], node['revision'], c.session)
    result = current(c, node['id'])
    assert result['referenceIds'] == []
    assert ''.join(part['text'] for part in result['promptContent']) == '前文\n中间\n后文'
    assert not snapshot(c)['edges']
    undo(c)
    assert current(c, node['id'])['promptContent'] == body


@pytest.mark.parametrize('problem', ['material_target', 'unsupported', 'stale_source', 'stale_target', 'model_missing'])
def test_rejected_connection_never_leaves_partial_edits(tmp_path, problem):
    c = context(tmp_path); canvas = c.generation.canvas
    origin = source(c)
    target = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image', 'modelConfigId': c.models['image']}, c.session)
    changes = {}
    if problem == 'material_target': target = origin
    elif problem == 'unsupported': changes['kind'] = 'audio'; target = None
    elif problem == 'stale_source': changes['assetId'] = str(uuid4())
    elif problem == 'stale_target': changes['expectedRevision'] = 123
    else: changes['modelConfigId'] = str(uuid4()); target = None
    before = snapshot(c)
    with pytest.raises(ProjectError): connect(c, origin, target, **changes)
    assert snapshot(c) == before and not c.provider.calls


def test_material_replacement_follows_all_mentions_and_one_undo_restores_them(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    origin = source(c); target = connect(c, origin)
    body = document(c.reference, '首段\n使用', '继续') + document(c.reference, '\n再次', '结束')
    canvas.patch(c.owner, target['id'], {'promptContent': body}, c.session)
    second = canvas.upload(c.owner, origin['id'], str(uuid4()), '替换.png', png(), c.session)
    updated = current(c, target['id'])
    assert updated['referenceIds'] == [second['id']]
    assert [part['text'] for part in updated['promptContent'] if part['type'] == 'text'] == [part['text'] for part in body if part['type'] == 'text']
    assert all(part['assetId'] == second['id'] and part['nodeId'] == origin['id'] for part in updated['promptContent'] if part['type'] == 'reference')
    undo(c)
    assert current(c, origin['id'])['assetId'] == c.reference['id']
    assert current(c, target['id'])['promptContent'] == body
    undo(c, 'redo')
    assert current(c, target['id'])['referenceIds'] == [second['id']]


def test_unpositioned_agent_context_can_disconnect_without_erasing_prompt(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    origin = source(c)
    target = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image', 'modelConfigId': c.models['image'],
        'prompt': '保留原始要求\n下一行', 'referenceIds': [origin['assetId']]}, c.session)
    before = snapshot(c)['canvas']
    connect(c, origin, target)
    assert snapshot(c)['canvas'] == before
    canvas.disconnect(c.owner, target['id'], origin['id'], target['revision'], c.session)
    result = current(c, target['id'])
    assert result['prompt'] == '保留原始要求\n下一行' and not result['referenceIds']
    assert result['promptContent'] is None


def test_running_task_keeps_snapshot_and_returns_candidate_after_upstream_change(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    async def run():
        origin = source(c); target = connect(c, origin)
        c.provider.gate.clear()
        task = await c.generation.submit(c.owner, target['id'], {'id': str(uuid4()), 'expectedRevision': target['revision'], 'modelConfigId': c.models['image']}, c.session)
        frozen = deepcopy(task['inputSnapshot'])
        replacement = canvas.upload(c.owner, origin['id'], str(uuid4()), '新参考.png', png(), c.session)
        assert current(c, target['id'])['referenceIds'] == [replacement['id']]
        c.provider.gate.set()
        await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
        saved = next(item for item in snapshot(c)['tasks'] if item['id'] == task['id'])
        assert saved['status'] == 'succeeded' and saved['inputSnapshot'] == frozen
        assert saved['referenceIds'] == [c.reference['id']] and not saved['adopted']
        assert current(c, target['id'])['assetId'] is None
        assert snapshot(c)['edges'][0]['state'] == 'pending' and len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_cycle_self_reference_and_historical_application_follow_current_outputs(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    async def run():
        a = connect(c, source(c)); await generate(c, a)
        a1 = current(c, a['id'])
        b = connect(c, a1); await generate(c, b)
        b1 = current(c, b['id'])
        third = connect(c, b1)
        connect(c, b1, current(c, a['id']))
        await generate(c, a)
        a2 = current(c, a['id'])
        assert a2['assetId'] != a1['assetId']
        edges = {(edge['sourceId'], edge['targetId']): edge['state'] for edge in snapshot(c)['edges']}
        assert edges[(a['id'], b['id'])] == 'pending' and edges[(b['id'], a['id'])] == 'current'
        assert current(c, third['id'])['referenceIds'] == [b1['assetId']]
        frozen = {path: path.read_bytes() for path in (c.directory / 'tasks').glob('*.json')}
        restored = restore(c, b['id'], b1['assetId'])
        assert restored['referenceIds'] == [a2['assetId']]
        history = node_history(canvas, c.owner, b['id'])
        assert history['versions'][0]['applied']
        assert history['versions'][0]['referenceIds'] == [a1['assetId']]
        assert {path: path.read_bytes() for path in frozen} == frozen
        connect(c, a2, current(c, a['id']))
        await generate(c, a)
        a3 = current(c, a['id'])
        assert a3['assetId'] in a3['referenceIds']
        assert next(edge for edge in snapshot(c)['edges'] if edge['sourceId'] == edge['targetId'] == a['id'])['state'] == 'pending'
        await close(c)
    asyncio.run(run())


def test_deleted_source_keeps_invalid_body_and_restoring_reconnects(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    origin = source(c); target = connect(c, origin)
    canvas.remove(c.owner, origin['id'], c.session, remember=True)
    assert current(c, target['id'])['referenceIds'] == [origin['assetId']]
    assert not snapshot(c)['edges']
    before = snapshot(c)
    with pytest.raises(ProjectError):
        connect(c, origin, current(c, target['id']))
    assert snapshot(c) == before
    undo(c)
    assert snapshot(c)['edges'][0]['sourceId'] == origin['id']
    canvas.remove(c.owner, origin['id'], c.session, remember=True)
    restored = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image', 'assetId': origin['assetId'], 'assetIds': [origin['assetId']]}, c.session, remember=True)
    assert restored['id'] == origin['id']
    assert snapshot(c)['edges'][0]['sourceId'] == origin['id']


def test_connection_endpoints_and_material_upload_guard(tmp_path):
    c = context(tmp_path); canvas = c.generation.canvas
    origin = source(c)
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}
    with TestClient(create_app(c.store), headers=headers) as client:
        response = client.post(f'/api/projects/{c.owner}/canvas/connections', json={
            'sourceId': origin['id'], 'assetId': origin['assetId'], 'targetId': str(uuid4()),
            'kind': 'image', 'x': 500, 'y': 100, 'modelConfigId': c.models['image']})
        assert response.status_code == 200
        target = response.json()
        with pytest.raises(ProjectError, match='生成节点'):
            canvas.upload(c.owner, target['id'], str(uuid4()), '禁止静默替换.png', png(), c.session)
        removed = client.request('DELETE', f'/api/projects/{c.owner}/canvas/nodes/{target["id"]}/references/{origin["id"]}', json={'expectedRevision': target['revision']})
        assert removed.status_code == 200 and removed.json()['referenceIds'] == []
        assert not snapshot(c)['tasks']


def test_supported_incomplete_audio_input_uses_existing_draft_and_shared_rules(media):
    from museshow.infrastructure.model_configs import ModelConfigs
    from museshow.integrations.reference_inputs import generation_references
    store, owner, session, canvas, image, audio, _ = media
    model = ModelConfigs(store.repository).save('video', 'https://ark.cn-beijing.volces.com/api/plan/v3', 'doubao-seedance-2.0', 'test')
    nodes = canvas.snapshot(owner)['canvas']['nodes']
    origin = next(node for node in nodes if node['assetId'] == audio['id'])
    target = canvas.connect(owner, {'sourceId': origin['id'], 'assetId': audio['id'], 'targetId': str(uuid4()),
        'kind': 'video', 'x': 1200, 'y': 50, 'modelConfigId': model['id'], 'videoMode': 'reference'}, session)
    assert target['role'] == 'generation' and target['referenceIds'] == [audio['id']]
    with pytest.raises(ProjectError, match='搭配'):
        generation_references(store, {**target, 'projectId': owner}, model)
    before = canvas.snapshot(owner)
    with pytest.raises(ProjectError, match='不支持'):
        canvas.patch(owner, target['id'], {'videoMode': 'first_frame'}, session)
    assert canvas.snapshot(owner) == before
    source_image = next(node for node in nodes if node['assetId'] == image['id'])
    target = canvas.connect(owner, {'sourceId': source_image['id'], 'assetId': image['id'], 'targetId': target['id'], 'expectedRevision': target['revision']}, session)
    prepared = generation_references(store, {**target, 'projectId': owner}, model)
    assert len(prepared['images']) == len(prepared['audios']) == 1
    assert not canvas.snapshot(owner)['tasks']


def test_chat_resolves_current_versions_but_never_rewrites_sent_history(tmp_path):
    import httpx
    from test_chat import setup, completion, events
    from museshow.infrastructure.canvas import CanvasProjects
    from museshow.integrations.chat_completions import ChatCompletions
    provider = ChatCompletions(httpx.MockTransport(lambda _: httpx.Response(200, text=completion())))
    store, _, model, headers, _ = setup(tmp_path, provider)
    session = headers['X-MuseShow-Session']
    owner = store.create('聊天版本跟随', str(uuid4()), session)['id']
    canvas = CanvasProjects(store)
    node = canvas.create(owner, {'id': str(uuid4()), 'kind': 'image'}, session)
    first = canvas.upload(owner, node['id'], str(uuid4()), '第一版.png', png(), session)
    body = document(first, '使用', '绘制\n保留换行')
    body[1]['nodeId'] = node['id']
    with TestClient(create_app(store, provider), headers=headers) as client:
        def send():
            return client.post(f'/api/data/{owner}/chat', json={'id': str(uuid4()), 'modelId': model['id'], 'content': body, 'text': '', 'assets': [first['id']]})
        original = events(send())[-1]['conversation']['messages'][-2]
        second = canvas.upload(owner, node['id'], str(uuid4()), '第二版.png', png(), session)
        messages = events(send())[-1]['conversation']['messages']
        assert messages[0] == original and original['content'][1]['assetId'] == first['id']
        assert messages[-2]['content'][1]['assetId'] == second['id']
        assert messages[-2]['content'][0] == body[0] and messages[-2]['content'][2] == body[2]
        assert messages[-2]['referenceInputs'][0]['assetId'] == second['id']


def test_port_geometry_arrow_direction_and_live_inline_projection(tmp_path):
    root = Path(__file__).resolve().parents[1]
    bundler = root / ('apps/web/node_modules/@esbuild/win32-x64/esbuild.exe' if __import__('os').name == 'nt' else 'apps/web/node_modules/.bin/esbuild')
    if not shutil.which('node') or not bundler.exists():
        pytest.skip('Install frontend dependencies for geometry checks')
    entry = tmp_path / 'entry.ts'
    entry.write_text('\n'.join(f'export * from {str(root / "apps/web/src/features" / path)!r};' for path in [
        'canvas/useCanvasConnections.ts', 'canvas/edgePath.ts', 'references/content.ts']))
    bundle = tmp_path / 'geometry.cjs'
    subprocess.run([str(bundler), str(entry), '--bundle', '--platform=node', '--format=cjs', f'--outfile={bundle}'], check=True, capture_output=True)
    script = tmp_path / 'geometry-check.cjs'
    script.write_text("""
const assert = require('node:assert/strict');
const {nearestPort, edgePath, currentReferences} = require('./geometry.cjs');
const source = {id: 'A', assetId: 'v1', draft: null, x: 0, y: 0};
const size = {width: 320, height: 260};
assert.equal(nearestPort({x: 160, y: 130}, [source], () => size, 24), null);
for (const [side, x, y] of [['top',160,0],['right',320,130],['bottom',160,260],['left',0,130]]) {
  assert.equal(nearestPort({x,y},[source],()=>size,24).side,side);
}
assert.equal(nearestPort({x: 320, y: 130}, [{...source, assetId: null}], () => size, 24), null);
const a = {...source, ...size}, b = {...a, x: 500};
assert.match(edgePath(a,b), /^M320,130 /);
assert.match(edgePath(b,a), /^M500,130 /);
assert.notEqual(edgePath(a,b,true),edgePath(b,a,true));
assert.match(edgePath(a,a), /^M320,130 C450,130 /);
const body = [{type:'text',text:'前文\\n'}, {type:'reference',nodeId:'A',assetId:'v1',name:'旧图',fingerprint:'old'}, {type:'text',text:'\\n后文'}];
const original = JSON.stringify(body);
const result = currentReferences(body,[{nodeId:'A',id:'v2',name:'新图',fingerprint:'new'}]);
assert.equal(result[1].assetId,'v2');
assert.equal(result[1].nodeId,'A');
assert.deepEqual(result[0],body[0]);assert.deepEqual(result[2],body[2]);
assert.equal(JSON.stringify(body),original);
assert.deepEqual(currentReferences(body,[]),body);
""")
    subprocess.run(['node', str(script)], check=True, capture_output=True)
