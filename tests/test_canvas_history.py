"""Undo edits without rewinding immutable files, generation, or other projects."""
from copy import deepcopy
import json
from pathlib import Path
from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from museshow.domain.projects import ProjectError
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.local_projects import read_json, write_json
from museshow_api.main import create_app
from test_canvas_generation import project, png


def create(canvas, owner, session, kind='text', **fields):
    return canvas.create(owner['id'], {'id': str(uuid4()), 'kind': kind, **fields}, session, remember=True)


def step(canvas, owner, session, direction='undo', **kwargs):
    state = canvas.snapshot(owner['id'])['canvas']
    entry = state['history'][direction]
    return canvas.history(owner['id'], direction, kwargs.get('entry_id', entry['id']), kwargs.get('request_id', str(uuid4())), session)


def comparable(nodes):
    return [{key: value for key, value in node.items() if key not in {'assetIds', 'revision'}} for node in nodes]


def test_mixed_edits_undo_and_redo_in_order_keep_saved_text_and_monotonic_revisions(project):
    store, owner, session, canvas = project
    expected = [[]]
    item = create(canvas, owner, session, x=-300, y=600)
    expected.append(deepcopy(canvas.snapshot(owner['id'])['canvas']['nodes']))
    canvas.patch(owner['id'], item['id'], {'title': '新标题', 'draft': '新文本'}, session, remember=True)
    expected.append(deepcopy(canvas.snapshot(owner['id'])['canvas']['nodes']))
    asset = canvas.save_text(owner['id'], item['id'], str(uuid4()), '新文本', '剧本.md', session, remember=True)
    expected.append(deepcopy(canvas.snapshot(owner['id'])['canvas']['nodes']))
    canvas.patch(owner['id'], item['id'], {'x': 1800, 'y': -100}, session, remember=True)
    expected.append(deepcopy(canvas.snapshot(owner['id'])['canvas']['nodes']))
    state = canvas.snapshot(owner['id'])['canvas']
    canvas.arrange(owner['id'], state['revision'], session)
    expected.append(deepcopy(canvas.snapshot(owner['id'])['canvas']['nodes']))
    canvas.remove(owner['id'], item['id'], session, remember=True)
    expected.append([])
    version = expected[-2][0]['revision']
    canvas = CanvasProjects(store)  # Persist both stacks across reopen.
    for nodes in reversed(expected[:-1]):
        restored = step(canvas, owner, session)
        assert comparable(restored['nodes']) == comparable(nodes)
        if restored['nodes']:
            assert restored['nodes'][0]['revision'] >= version
            version = restored['nodes'][0]['revision']
    assert restored['history']['undo'] is None
    assert store.asset(owner['id'], asset['id'])[0] == '新文本'.encode()
    for nodes in expected[1:]:
        restored = step(canvas, owner, session, 'redo')
        assert comparable(restored['nodes']) == comparable(nodes)
        if restored['nodes']:
            assert restored['nodes'][0]['revision'] >= version
            version = restored['nodes'][0]['revision']
    assert restored['history']['redo'] is None
    assert restored['nodes'] == []


def test_new_edit_discards_redo_but_noop_and_failed_edits_do_not(project):
    _, owner, session, canvas = project
    item = create(canvas, owner, session)
    canvas.patch(owner['id'], item['id'], {'prompt': 'first'}, session, remember=True)
    undone = step(canvas, owner, session)
    assert undone['nodes'][0]['revision'] == 3
    canvas.patch(owner['id'], item['id'], {'prompt': ''}, session, remember=True)
    assert canvas.snapshot(owner['id'])['canvas'] == undone
    with pytest.raises(ProjectError):
        canvas.patch(owner['id'], item['id'], {'prompt': 'bad', 'expectedRevision': 1}, session, remember=True)
    assert canvas.snapshot(owner['id'])['canvas'] == undone
    canvas.patch(owner['id'], item['id'], {'x': 900}, session, remember=True)
    changed = canvas.snapshot(owner['id'])['canvas']
    assert changed['history']['redo'] is None
    assert changed['history']['undo']['label'] == '移动节点'
    assert changed['nodes'][0]['revision'] == 3


def test_background_outputs_survive_field_undo_without_adding_history(project):
    _, owner, session, canvas = project
    item = create(canvas, owner, session, 'image')
    canvas.patch(owner['id'], item['id'], {'prompt': 'new prompt'}, session, remember=True)
    history = canvas.snapshot(owner['id'])['canvas']['history']
    asset = canvas.assets.import_file(owner['id'], str(uuid4()), '生成.png', png(), session, source='generated')
    canvas.attach(owner['id'], item['id'], asset['id'])  # Background completion.
    snapshot = canvas.snapshot(owner['id'])
    assert snapshot['canvas']['history'] == history
    undone = step(canvas, owner, session)
    assert undone['nodes'][0]['prompt'] == ''
    assert undone['nodes'][0]['assetId'] == asset['id']
    assert undone['nodes'][0]['assetIds'] == [asset['id']]
    assert undone['nodes'][0]['revision'] > snapshot['canvas']['nodes'][0]['revision']
    assert canvas.snapshot(owner['id'])['assets'] == snapshot['assets']
    # Undoing creation cannot silently remove a newly adopted background result.
    with pytest.raises(ProjectError, match='相关节点已变化'):
        step(canvas, owner, session)


def test_conflict_is_atomic_and_unrelated_fields_do_not_conflict(project):
    _, owner, session, canvas = project
    item = create(canvas, owner, session)
    canvas.patch(owner['id'], item['id'], {'prompt': 'user'}, session, remember=True)
    canvas.patch(owner['id'], item['id'], {'prompt': 'agent'}, None)  # Background edit.
    path = Path(owner['path']) / 'canvas.json'
    before = path.read_bytes()
    with pytest.raises(ProjectError, match='相关节点已变化'):
        step(canvas, owner, session)
    assert path.read_bytes() == before
    canvas.patch(owner['id'], item['id'], {'prompt': 'user', 'draft': 'background draft'}, None)
    undone = step(canvas, owner, session)
    assert undone['nodes'][0]['draft'] == 'background draft' and undone['nodes'][0]['prompt'] == ''


def test_asset_selection_references_and_model_undo_preserve_all_versions(project):
    store, owner, session, canvas = project
    from museshow.infrastructure.model_configs import ModelConfigs
    config = ModelConfigs(store.repository).save('image', 'https://model.test', 'image', 'test')
    item = create(canvas, owner, session, 'image')
    a, b = [canvas.assets.import_file(owner['id'], str(uuid4()), name, png(), session, source='generated') for name in ('a.png', 'b.png')]
    canvas.attach(owner['id'], item['id'], a['id'])
    canvas.attach(owner['id'], item['id'], b['id'], adopt=False)
    canvas.patch(owner['id'], item['id'], {'assetId': b['id'], 'draft': None, 'referenceIds': [a['id']], 'modelConfigId': config['id']}, session, remember=True)
    undone = step(canvas, owner, session)
    assert undone['nodes'][0]['assetId'] == a['id']
    assert undone['nodes'][0]['assetIds'] == [a['id'], b['id']]
    assert undone['nodes'][0]['referenceIds'] == [] and undone['nodes'][0]['modelConfigId'] == config['id']
    redone = step(canvas, owner, session, 'redo')
    assert redone['nodes'][0]['assetId'] == b['id']
    assert redone['nodes'][0]['referenceIds'] == [b['id']]  # Self-reference follows the displayed version.


def test_batch_upload_is_one_step_and_undo_redo_protects_files_and_order(project):
    store, owner, session, canvas = project
    first = create(canvas, owner, session)
    group = str(uuid4())
    a, b = [canvas.import_file(owner['id'], str(uuid4()), name, b'body', session, group) for name in ('a.txt', 'b.txt')]
    current = canvas.snapshot(owner['id'])['canvas']
    assert len(current['nodes']) == 3
    # Retrying the same file ID is idempotent.
    canvas.import_file(owner['id'], b['id'], 'b.txt', b'body', session, group)
    assert canvas.snapshot(owner['id'])['canvas'] == current
    with pytest.raises(ProjectError):
        canvas.import_file(owner['id'], str(uuid4()), 'bad.xyz', b'bad', session, group)
    undone = step(canvas, owner, session)
    assert [node['id'] for node in undone['nodes']] == [first['id']]
    assert len(canvas.snapshot(owner['id'])['canvas']['nodes']) == 1  # Poll cannot project them again.
    for asset in (a, b):
        with pytest.raises(ProjectError):
            canvas.assets.delete(owner['id'], asset['id'], session)
        assert store.asset(owner['id'], asset['id'])[0] == b'body'
    redone = step(canvas, owner, session, 'redo')
    assert comparable(redone['nodes']) == comparable(current['nodes'])


def test_removal_restores_same_node_order_and_history_expires_asset_protection(project):
    _, owner, session, canvas = project
    first, second = create(canvas, owner, session), create(canvas, owner, session)
    asset = canvas.save_text(owner['id'], first['id'], str(uuid4()), 'body', 'a.txt', session)
    canvas.remove(owner['id'], first['id'], session, remember=True)
    with pytest.raises(ProjectError):
        canvas.assets.delete(owner['id'], asset['id'], session)
    restored = step(canvas, owner, session)
    assert [n['id'] for n in restored['nodes']] == [first['id'], second['id']]
    step(canvas, owner, session, 'redo')
    for i in range(51):
        canvas.patch(owner['id'], second['id'], {'x': i}, session, remember=True)
    assert len(read_json(Path(owner['path']) / 'canvas.json')['history']['undo']) == 50
    canvas.assets.delete(owner['id'], asset['id'], session)  # No longer reachable from history.


def test_active_generation_prevents_node_removal_through_history(project, monkeypatch):
    _, owner, session, canvas = project
    item = create(canvas, owner, session)
    monkeypatch.setattr(canvas, '_tasks', lambda directory: [{'nodeId': item['id'], 'status': 'running'}])
    before = (Path(owner['path']) / 'canvas.json').read_bytes()
    with pytest.raises(ProjectError, match='正在生成'):
        step(canvas, owner, session)
    assert (Path(owner['path']) / 'canvas.json').read_bytes() == before


def test_retry_receipt_target_guard_project_isolation_and_compact_summary(project):
    store, owner, session, canvas = project
    item = create(canvas, owner, session)
    canvas.patch(owner['id'], item['id'], {'draft': 'x' * 50000}, session, remember=True)
    canvas.patch(owner['id'], item['id'], {'draft': 'new'}, session, remember=True)
    state = canvas.snapshot(owner['id'])['canvas']
    assert 'x' * 100 not in json.dumps(state)
    entry, request_id = state['history']['undo']['id'], str(uuid4())
    undone = step(canvas, owner, session, request_id=request_id)
    assert canvas.history(owner['id'], 'undo', entry, request_id, session) == undone
    with pytest.raises(ProjectError, match='编辑历史已变化'):
        canvas.history(owner['id'], 'undo', entry, str(uuid4()), session)
    with pytest.raises(ProjectError):
        canvas.history(owner['id'], 'undo', undone['history']['undo']['id'], str(uuid4()), str(uuid4()))
    other = store.create('other', str(uuid4()), session)
    assert canvas.snapshot(other['id'])['canvas']['history'] == {'undo': None, 'redo': None}
    assert CanvasProjects(store).snapshot(owner['id'])['canvas']['history'] == undone['history']


def test_failed_history_write_does_not_move_cursor_or_edit_node(project, monkeypatch):
    _, owner, session, canvas = project
    item = create(canvas, owner, session)
    canvas.patch(owner['id'], item['id'], {'x': 900}, session, remember=True)
    path = Path(owner['path']) / 'canvas.json'
    before = path.read_bytes()
    def fail(*args): raise OSError('disk failure')
    monkeypatch.setattr('museshow.infrastructure.canvas.write_json', fail)
    with pytest.raises(OSError):
        step(canvas, owner, session)
    assert path.read_bytes() == before


def test_legacy_layout_undo_migrates_without_a_read_write_or_changing_identity(project):
    _, owner, session, canvas = project
    item = create(canvas, owner, session, x=-90, y=-50)
    state = read_json(Path(owner['path']) / 'canvas.json')
    state.pop('history')
    before = {'positions': [{'id': item['id'], 'x': item['x'], 'y': item['y']}], 'layout': deepcopy(state['layout'])}
    state['nodes'][0].update(x=40, y=80)
    after = {'positions': [{'id': item['id'], 'x': 40, 'y': 80}], 'layout': deepcopy(state['layout'])}
    state['layoutUndo'] = {'before': before, 'after': after}
    path = Path(owner['path']) / 'canvas.json'
    write_json(path, state)
    original = path.read_bytes()
    first = canvas.snapshot(owner['id'])['canvas']
    assert CanvasProjects(canvas.store).snapshot(owner['id'])['canvas']['history'] == first['history']
    assert path.read_bytes() == original
    undone = step(canvas, owner, session)
    assert (undone['nodes'][0]['x'], undone['nodes'][0]['y']) == (-90, -50)
    assert 'layoutUndo' not in read_json(path)
    step(canvas, owner, session, 'redo')


def test_manual_api_records_edit_save_upload_remove_and_enforces_lease(project):
    store, owner, session, _ = project
    endpoint = f'/api/projects/{owner["id"]}/canvas'
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}
    with TestClient(create_app(store), headers=headers) as client:
        item = client.post(endpoint + '/nodes', json={'id': str(uuid4()), 'kind': 'text'}).json()
        assert client.get(endpoint).json()['canvas']['history']['undo']['label'] == '添加节点'
        assert client.patch(endpoint + '/nodes/' + item['id'], json={'expectedRevision': 1, 'draft': 'draft'}).status_code == 200
        assert client.put(endpoint + '/nodes/' + item['id'] + '/text', json={'id': str(uuid4()), 'name': 'a.txt', 'text': 'body'}).status_code == 200
        assert client.get(endpoint).json()['canvas']['history']['undo']['label'] == '保存文本'
        assert client.put(endpoint + '/nodes/' + item['id'] + '/file', content=b'upload', headers={'X-Asset-Name': 'b.txt', 'X-Asset-Id': str(uuid4())}).status_code == 200
        state = client.get(endpoint).json()['canvas']
        assert state['history']['undo']['label'] == '上传节点资产'
        body = {'id': str(uuid4()), 'entryId': state['history']['undo']['id']}
        assert client.post(endpoint + '/history/undo', json=body, headers={'X-MuseShow-Session': str(uuid4())}).status_code == 409
        response = client.post(endpoint + '/history/undo', json=body)
        assert response.status_code == 200 and response.json()['nodes'][0]['assetId'] != state['nodes'][0]['assetId']
        assert client.post(endpoint + '/history/undo', json=body).json() == response.json()
        assert client.patch(endpoint + '/nodes/' + item['id'], json={'expectedRevision': 1, 'taskId': str(uuid4())}).status_code == 422
        assert client.delete(endpoint + '/nodes/' + item['id']).status_code == 204
        assert client.get(endpoint).json()['canvas']['history']['undo']['label'] == '移除节点'
        response = client.put(endpoint + '/files/' + str(uuid4()), content=b'import', headers={'X-Asset-Name': 'import.txt', 'X-Canvas-Operation': str(uuid4())})
        assert response.status_code == 200, response.text
        assert client.get(endpoint).json()['canvas']['history']['undo']['label'] == '上传资产'
