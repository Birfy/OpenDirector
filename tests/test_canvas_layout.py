"""Layout is presentation state: no generation, input edits, or implicit moves."""
from copy import deepcopy
from itertools import combinations
import io
from pathlib import Path
from uuid import uuid4

from fastapi.testclient import TestClient
from PIL import Image
import pytest

from opendirector.domain.canvas import CanvasNode, CanvasState
from opendirector.domain.canvas_layout import CANVAS_LIMIT, KINDS, NODE_WIDTH, ROW_GAP, SLOT_WIDTH, arrange, node_height
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.canvas import CanvasProjects
from opendirector.infrastructure.local_projects import write_json
from opendirector_api.main import create_app
from test_canvas_generation import node, project


def positions(nodes):
    return [{key: node[key] for key in ('id', 'x', 'y')} for node in nodes]


def test_automatic_lanes_append_after_deletion_without_following_dragged_positions(project):
    _, owner, session, canvas = project
    first = {kind: node(canvas, owner, session, kind) for kind in KINDS}
    assert [first[kind]['y'] for kind in KINDS] == sorted(first[kind]['y'] for kind in KINDS)
    assert len({item['y'] for item in first.values()}) == 4
    canvas.patch(owner['id'], first['image']['id'], {'x': 400000, 'y': -500}, session)
    second = node(canvas, owner, session)
    assert second['x'] == first['image']['x'] + SLOT_WIDTH
    assert second['y'] == first['image']['y']
    canvas.remove(owner['id'], second['id'], session)
    restarted = CanvasProjects(canvas.store)
    third = node(restarted, owner, session)
    assert third['x'] == second['x'] + SLOT_WIDTH
    current = restarted.snapshot(owner['id'])['canvas']
    moved = next(item for item in current['nodes'] if item['id'] == first['image']['id'])
    assert (moved['x'], moved['y']) == (400000, -500)


def test_auto_append_avoids_manual_nodes_in_another_lane_and_preserves_explicit_creation(project):
    _, owner, session, canvas = project
    obstacle = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'text', 'x': 40, 'y': 440}, session)
    added = node(canvas, owner, session)
    assert added['y'] == obstacle['y'] and added['x'] == obstacle['x'] + SLOT_WIDTH
    explicit = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'video', 'x': -70, 'y': 23}, session)
    assert (explicit['x'], explicit['y']) == (-70, 23)
    assert canvas.create(owner['id'], {'id': explicit['id'], 'kind': 'video', 'x': -70, 'y': 23}, session) == explicit


def test_legacy_coordinates_are_not_rewritten_when_opened_and_projection_uses_lanes(project):
    _, owner, session, canvas = project
    old = CanvasNode(id=uuid4(), kind='text', x=-500, y=630).model_dump(mode='json')
    path = Path(owner['path']) / 'canvas.json'
    legacy = {'version': 1, 'revision': 3, 'nodes': [old], 'knownAssetIds': []}
    write_json(path, legacy)
    before = path.read_bytes()
    assert canvas.snapshot(owner['id'])['canvas']['nodes'] == [old]
    assert path.read_bytes() == before
    canvas.assets.import_file(owner['id'], str(uuid4()), '上传.txt', b'hello', session)
    projected = canvas.snapshot(owner['id'])['canvas']
    assert projected['nodes'][0] == old
    assert projected['nodes'][1]['y'] == projected['layout']['rows']['text']
    assert projected['nodes'][1]['x'] == 40 + SLOT_WIDTH


def test_smart_layout_orders_types_and_uses_portrait_metadata_and_measured_heights(project):
    _, owner, session, canvas = project
    created = [canvas.create(owner['id'], {'id': str(uuid4()), 'kind': kind, 'x': 100 - i * 100, 'y': i * 5}, session)
               for i, kind in enumerate(('audio', 'image', 'video', 'text', 'image'))]
    stream = io.BytesIO(); Image.new('RGB', (90, 160)).save(stream, 'PNG')
    asset = canvas.assets.import_file(owner['id'], str(uuid4()), 'portrait.png', stream.getvalue(), session)
    canvas.attach(owner['id'], created[1]['id'], asset['id'], session)
    before = canvas.snapshot(owner['id'])
    old = deepcopy(before['canvas']['nodes'])
    arranged = canvas.arrange(owner['id'], before['canvas']['revision'], session, {created[2]['id']: 1500})
    assert [item['id'] for item in arranged['nodes']] == [item['id'] for item in old]
    for prior, new in zip(old, arranged['nodes']):
        assert {k: v for k, v in prior.items() if k not in ('x', 'y')} == {k: v for k, v in new.items() if k not in ('x', 'y')}
        assert new['y'] == arranged['layout']['rows'][new['kind']]
    images = [item for item in arranged['nodes'] if item['kind'] == 'image']
    assert images[1]['x'] - images[0]['x'] == SLOT_WIDTH
    rows = arranged['layout']['rows']
    assert rows['video'] >= rows['image'] + node_height(images[0], {asset['id']: asset}) + ROW_GAP
    assert rows['audio'] >= rows['video'] + 1500 + ROW_GAP
    assert canvas.snapshot(owner['id'])['assets'] == before['assets']
    assert canvas.arrange(owner['id'], arranged['revision'], session, {created[2]['id']: 1500}) == arranged


@pytest.mark.parametrize('measured', [None, 264, 290])
def test_empty_video_does_not_reserve_portrait_space_above_audio_when_arranged(project, measured):
    _, owner, session, canvas = project
    video = node(canvas, owner, session, 'video')
    node(canvas, owner, session, 'audio')
    state = canvas.snapshot(owner['id'])['canvas']
    arranged = canvas.arrange(owner['id'], state['revision'], session, {video['id']: measured} if measured else {})
    rows = arranged['layout']['rows']
    assert rows['audio'] - rows['video'] == (measured or 264) + 64


@pytest.mark.parametrize('kinds', [group for size in range(1, 5) for group in combinations(KINDS, size)])
def test_smart_layout_skips_missing_kinds_without_leading_or_middle_blank_rows(kinds):
    state = CanvasState(nodes=[CanvasNode(id=uuid4(), kind=kind, x=-200, y=900) for kind in reversed(kinds)]).model_dump(mode='json')
    arrange(state, {}, {})
    ordered = sorted(state['nodes'], key=lambda node: KINDS.index(node['kind']))
    assert [node['y'] for node in ordered] == [80 + index * (264 + ROW_GAP) for index in range(len(kinds))]
    assert all(node['x'] == 40 for node in ordered)
    assert CanvasState.model_validate(state).model_dump(mode='json') == state


@pytest.mark.parametrize('existing,new_kind', [(('text', 'video'), 'image'), (('video',), 'text'), (('image', 'audio'), 'video')])
def test_adding_a_missing_kind_after_compaction_does_not_overlap_or_move_existing_nodes(project, existing, new_kind):
    _, owner, session, canvas = project
    for kind in existing:
        node(canvas, owner, session, kind)
    before = canvas.snapshot(owner['id'])['canvas']
    compact = canvas.arrange(owner['id'], before['revision'], session)
    prior = positions(compact['nodes'])
    added = node(canvas, owner, session, new_kind)
    current = canvas.snapshot(owner['id'])['canvas']
    assert positions(current['nodes'][:-1]) == prior
    assert added['y'] >= max(item['y'] + 264 for item in prior) + ROW_GAP
    assert current['history']['undo'] == compact['history']['undo']
    # Refreshing and arranging again must accept the hints and sort by kind.
    refreshed = CanvasProjects(canvas.store).snapshot(owner['id'])['canvas']
    rearranged = canvas.arrange(owner['id'], refreshed['revision'], session)
    ordered = sorted(rearranged['nodes'], key=lambda item: KINDS.index(item['kind']))
    assert [item['y'] for item in ordered] == [80 + index * (264 + ROW_GAP) for index in range(len(ordered))]


def test_layout_undo_preserves_background_content_edits_and_only_restores_positions_and_lane_state(project):
    _, owner, session, canvas = project
    initial = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'text', 'x': -200, 'y': -100}, session)
    before = canvas.snapshot(owner['id'])['canvas']
    arranged = canvas.arrange(owner['id'], before['revision'], session)
    assert CanvasProjects(canvas.store).snapshot(owner['id'])['canvas']['history'] == arranged['history']
    changed = canvas.patch(owner['id'], initial['id'], {'prompt': '排版后编辑的要求'}, session)
    current = canvas.snapshot(owner['id'])['canvas']
    undone = canvas.history(owner['id'], 'undo', current['history']['undo']['id'], str(uuid4()), session)
    assert positions(undone['nodes']) == positions(before['nodes'])
    assert undone['nodes'][0]['prompt'] == '排版后编辑的要求' and undone['nodes'][0]['revision'] == changed['revision']
    assert undone['layout'] == before['layout'] and undone['history']['undo'] is None
    with pytest.raises(ProjectError, match='编辑历史已变化'):
        canvas.history(owner['id'], 'undo', current['history']['undo']['id'], str(uuid4()), session)


def test_layout_writes_are_atomic_and_stale_requests_do_not_move_any_node(project, monkeypatch):
    _, owner, session, canvas = project
    node(canvas, owner, session, 'audio')
    state = canvas.snapshot(owner['id'])['canvas']
    path = Path(owner['path']) / 'canvas.json'
    before = path.read_bytes()
    with pytest.raises(ProjectError, match='画布已变化'):
        canvas.arrange(owner['id'], state['revision'] - 1, session)
    assert path.read_bytes() == before
    def disk_failure(*args): raise OSError('simulated disk failure')
    monkeypatch.setattr('opendirector.infrastructure.canvas.write_json', disk_failure)
    with pytest.raises(OSError): canvas.arrange(owner['id'], state['revision'], session)
    assert path.read_bytes() == before


def test_layout_api_validates_heights_versions_edit_lease_and_extended_coordinates(project):
    store, owner, session, _ = project
    endpoint = f'/api/projects/{owner["id"]}/canvas'
    headers = {'X-OpenDirector-Request': '1', 'X-OpenDirector-Session': session}
    with TestClient(create_app(store), headers=headers) as client:
        item = client.post(endpoint + '/nodes', json={'id': str(uuid4()), 'kind': 'audio', 'x': 200000, 'y': -100}).json()
        assert item['x'] == 200000
        state = client.get(endpoint).json()['canvas']
        body = {'expectedRevision': state['revision']}
        assert client.post(endpoint + '/arrange', json=body, headers={'X-OpenDirector-Session': str(uuid4())}).status_code == 409
        assert client.post(endpoint + '/arrange', json={**body, 'heights': {item['id']: -1}}).status_code == 422
        response = client.post(endpoint + '/arrange', json=body)
        assert response.status_code == 200 and response.json()['nodes'][0]['x'] == 40
        assert client.post(endpoint + '/arrange', json=body).status_code == 409
        assert client.post(endpoint + '/history/undo', json={'id': str(uuid4()), 'entryId': response.json()['history']['undo']['id']}).json()['nodes'][0]['x'] == 200000
        assert client.post(endpoint + '/nodes', json={'id': str(uuid4()), 'kind': 'text', 'x': CANVAS_LIMIT + 1, 'y': 0}).status_code == 422


def test_all_500_nodes_can_be_arranged_in_one_lane_with_equal_spacing():
    state = CanvasState(nodes=[CanvasNode(id=uuid4(), kind='image') for _ in range(500)]).model_dump(mode='json')
    arrange(state, {}, {})
    assert state['nodes'][-1]['x'] + NODE_WIDTH < CANVAS_LIMIT
    assert all(b['x'] - a['x'] == SLOT_WIDTH for a, b in zip(state['nodes'], state['nodes'][1:]))
    CanvasState.model_validate(state)
