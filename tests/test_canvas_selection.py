"""Batch canvas edits validate all targets and commit one undoable operation."""
from copy import deepcopy
from pathlib import Path
from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import read_json
from museshow_api.main import create_app
from test_canvas_generation import project
from test_canvas_history import step


def setup_nodes(project, count=3):
    _, owner, session, canvas = project
    nodes = [canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'text'}, session) for _ in range(count)]
    return owner, session, canvas, nodes


def moves(nodes, dx=100, dy=-50):
    return [{'id': node['id'], 'expectedX': node['x'], 'expectedY': node['y'], 'x': node['x'] + dx, 'y': node['y'] + dy} for node in nodes]


def removals(nodes):
    return [{'id': node['id'], 'expectedRevision': node['revision'], 'expectedTaskId': node['taskId']} for node in nodes]


def test_group_move_keeps_background_content_and_is_one_undo_step(project):
    owner, session, canvas, nodes = setup_nodes(project)
    pending = moves(nodes[:2])
    # A generation/input update arriving during the gesture must survive it.
    changed = canvas.patch(owner['id'], nodes[0]['id'], {'prompt': 'background result'}, None)
    before = deepcopy(canvas.snapshot(owner['id'])['canvas'])
    result = canvas.move_many(owner['id'], pending, session)
    assert result['revision'] == before['revision'] + 1
    assert result['history']['undo']['label'] == '移动 2 个节点'
    assert result['nodes'][0]['prompt'] == 'background result'
    assert result['nodes'][0]['revision'] == changed['revision']
    assert result['nodes'][2] == before['nodes'][2]
    for old, new in zip(before['nodes'][:2], result['nodes'][:2]):
        assert (new['x'], new['y']) == (old['x'] + 100, old['y'] - 50)
        assert new['revision'] == old['revision']
    assert step(canvas, owner, session)['nodes'] == before['nodes']
    assert step(canvas, owner, session, 'redo')['nodes'] == result['nodes']
    raw = read_json(Path(owner['path']) / 'canvas.json')
    assert len(raw['history']['undo']) == 1
    # A duplicate or delayed move cannot create another history entry.
    original = (Path(owner['path']) / 'canvas.json').read_bytes()
    with pytest.raises(ProjectError, match='位置已变化'):
        canvas.move_many(owner['id'], pending, session)
    assert (Path(owner['path']) / 'canvas.json').read_bytes() == original


def test_group_remove_restores_order_and_retains_files(project):
    store = project[0]
    owner, session, canvas, nodes = setup_nodes(project, 4)
    asset = canvas.save_text(owner['id'], nodes[0]['id'], str(uuid4()), 'keep me', 'script.txt', session)
    before = deepcopy(canvas.snapshot(owner['id'])['canvas'])
    targets = [before['nodes'][0], before['nodes'][2]]
    result = canvas.remove_many(owner['id'], removals(targets), session)
    assert result['revision'] == before['revision'] + 1
    assert [node['id'] for node in result['nodes']] == [nodes[1]['id'], nodes[3]['id']]
    assert result['history']['undo']['label'] == '移除 2 个节点'
    assert store.asset(owner['id'], asset['id'])[0] == b'keep me'
    with pytest.raises(ProjectError):
        canvas.assets.delete(owner['id'], asset['id'], session)
    assert canvas.snapshot(owner['id'])['canvas']['nodes'] == result['nodes']
    restored = step(canvas, owner, session)
    assert [node['id'] for node in restored['nodes']] == [node['id'] for node in before['nodes']]
    assert restored['nodes'][0]['assetId'] == asset['id']
    assert all(restored['nodes'][i]['revision'] > before['nodes'][i]['revision'] for i in (0, 2))
    assert step(canvas, owner, session, 'redo')['nodes'] == result['nodes']


@pytest.mark.parametrize('operation,failure', [
    ('move', 'missing'), ('move', 'duplicate'), ('move', 'stale_position'), ('move', 'invalid_position'),
    ('remove', 'missing'), ('remove', 'duplicate'), ('remove', 'stale_revision'), ('remove', 'stale_task'), ('remove', 'running'),
])
def test_batch_failure_never_partially_edits_or_records_history(project, monkeypatch, operation, failure):
    owner, session, canvas, nodes = setup_nodes(project)
    values = moves(nodes[:2]) if operation == 'move' else removals(nodes[:2])
    if failure == 'missing': values[1]['id'] = str(uuid4())
    elif failure == 'duplicate': values[1] = deepcopy(values[0])
    elif failure == 'stale_position': values[1]['expectedX'] += 1
    elif failure == 'invalid_position': values[1]['x'] = 1000001
    elif failure == 'stale_revision': values[1]['expectedRevision'] += 1
    elif failure == 'stale_task': values[1]['expectedTaskId'] = str(uuid4())
    else: monkeypatch.setattr(canvas, '_tasks', lambda directory: [{'nodeId': nodes[1]['id'], 'status': 'running'}])
    path = Path(owner['path']) / 'canvas.json'
    before = path.read_bytes()
    with pytest.raises(ProjectError):
        getattr(canvas, operation + '_many')(owner['id'], values, session)
    assert path.read_bytes() == before


def test_noop_batch_move_does_not_create_history_or_write(project):
    owner, session, canvas, nodes = setup_nodes(project)
    path = Path(owner['path']) / 'canvas.json'
    before = path.read_bytes()
    result = canvas.move_many(owner['id'], moves(nodes, 0, 0), session)
    assert result['history'] == {'undo': None, 'redo': None}
    assert path.read_bytes() == before


def test_batch_api_validation_and_edit_lease(project):
    store = project[0]
    owner, session, canvas, nodes = setup_nodes(project)
    endpoint = f'/api/projects/{owner["id"]}/canvas'
    with TestClient(create_app(store), headers={'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}) as client:
        before = (Path(owner['path']) / 'canvas.json').read_bytes()
        for route in ('move', 'remove'):
            assert client.post(endpoint + '/' + route, json={'nodes': []}).status_code == 422
        body = {'nodes': moves(nodes)}
        assert client.post(endpoint + '/move', json=body, headers={'X-MuseShow-Session': str(uuid4())}).status_code == 409
        assert client.post(endpoint + '/move', json={'nodes': [*moves(nodes), moves(nodes)[0]]}).status_code == 400
        assert client.post(endpoint + '/move', json={'nodes': [{**moves(nodes)[0], 'x': None}]}).status_code == 422
        assert (Path(owner['path']) / 'canvas.json').read_bytes() == before
        response = client.post(endpoint + '/move', json=body)
        assert response.status_code == 200, response.text
        current = response.json()
        response = client.post(endpoint + '/remove', json={'nodes': removals(current['nodes'])})
        assert response.status_code == 200 and response.json()['nodes'] == []
        history = response.json()['history']['undo']['id']
        restored = client.post(endpoint + '/history/undo', json={'id': str(uuid4()), 'entryId': history})
        assert restored.status_code == 200 and len(restored.json()['nodes']) == 3
