"""Creation defaults and confirmed upload transitions share live-reference history."""
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from opendirector.domain.projects import ProjectError
from opendirector.application.generation import Generation
from opendirector.infrastructure.canvas import CanvasProjects
from opendirector.infrastructure.canvas_versions import apply_version, node_history
from opendirector.infrastructure.model_configs import ModelConfigs
from opendirector_api.main import create_app
from test_canvas_generation import project, png
from test_canvas_roles import current, undo
from test_multimodal_references import media


@pytest.mark.parametrize('kind,model_kind', [('text', 'agent'), ('image', 'image'), ('video', 'video'), ('audio', 'audio')])
def test_blank_creation_persists_first_matching_default_without_locking_or_tasks(project, kind, model_kind):
    store, owner, session, canvas = project
    configs = ModelConfigs(store.repository)
    first = configs.save(model_kind, 'https://models.test', 'first', 'test')
    configs.save(model_kind, 'https://models.test', 'second', 'test')
    item = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': kind}, session, remember=True)
    assert item['modelConfigId'] == first['id'] and item['role'] == 'empty'
    assert CanvasProjects(store).snapshot(owner['id'])['canvas']['nodes'][0] == item
    assert canvas.snapshot(owner['id'])['tasks'] == []


def test_confirmed_upload_clears_inputs_and_undo_redo_restores_whole_transition(project):
    store, owner, session, canvas = project
    config = ModelConfigs(store.repository).save('image', 'https://image.test', 'image', 'test')
    source = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    asset = canvas.upload(owner['id'], source['id'], str(uuid4()), 'source.png', png(), session)
    target = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    target = canvas.connect(owner['id'], {'sourceId': source['id'], 'assetId': asset['id'],
        'targetId': target['id'], 'expectedRevision': target['revision']}, session)
    assert target['role'] == 'empty' and target['modelConfigId'] == config['id']
    canvas.patch(owner['id'], target['id'], {'promptContent': [*target['promptContent'], {'type': 'text', 'text': '\n保留这段要求'}]}, session)
    previous = current(canvas, owner, target['id'])
    before = canvas.snapshot(owner['id'])
    with pytest.raises(ProjectError) as rejected:
        canvas.upload(owner['id'], target['id'], str(uuid4()), 'replacement.png', png(), session)
    assert rejected.value.code == 'discard_confirmation_required'
    assert canvas.snapshot(owner['id']) == before
    for name, data, revision in [('wrong.txt', b'wrong', previous['revision']), ('ok.png', png(), previous['revision'] - 1)]:
        with pytest.raises(ProjectError):
            canvas.upload(owner['id'], target['id'], str(uuid4()), name, data, session,
                          discard_inputs=True, expected_revision=revision)
        assert canvas.snapshot(owner['id']) == before
    uploaded = canvas.upload(owner['id'], target['id'], str(uuid4()), 'replacement.png', png(), session,
                            discard_inputs=True, expected_revision=previous['revision'])
    result = current(canvas, owner, target['id'])
    assert result['role'] == 'material' and result['assetId'] == uploaded['id']
    assert result['prompt'] == '' and result['promptContent'] is None and not result['referenceIds']
    assert result['modelConfigId'] is None and result['videoMode'] == 'first_frame'
    assert not canvas.snapshot(owner['id'])['edges']
    undo(canvas, owner, session)
    restored = current(canvas, owner, target['id'])
    for key in ('role', 'assetId', 'prompt', 'promptContent', 'referenceIds', 'modelConfigId', 'x', 'y'):
        assert restored[key] == previous[key]
    assert canvas.snapshot(owner['id'])['edges'][0]['sourceId'] == source['id']
    assert uploaded['id'] in restored['assetIds']  # Files and their history stay retained.
    undo(canvas, owner, session, 'redo')
    assert current(canvas, owner, target['id'])['role'] == 'material'
    assert not canvas.snapshot(owner['id'])['tasks']


def test_reference_creation_defaults_to_generation_and_cannot_upload_even_after_disconnect(project):
    store, owner, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('agent', 'https://writer.test', 'writer', 'test')
    source = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'text'}, session)
    asset = canvas.save_text(owner['id'], source['id'], str(uuid4()), '参考正文', 'source.md', session)
    target = canvas.connect(owner['id'], {'sourceId': source['id'], 'assetId': asset['id'],
        'targetId': str(uuid4()), 'kind': 'text', 'x': 400, 'y': 100}, session)
    assert target['role'] == 'generation' and target['modelConfigId'] == config['id']
    canvas.disconnect(owner['id'], target['id'], source['id'], target['revision'], session)
    with pytest.raises(ProjectError) as rejected:
        canvas.upload(owner['id'], target['id'], str(uuid4()), 'blocked.md', b'body', session, discard_inputs=True)
    assert rejected.value.code == 'role_restricted'
    assert current(CanvasProjects(store), owner, target['id'])['role'] == 'generation'


def test_reference_creation_selects_compatible_video_mode_and_rejects_no_model_atomically(media):
    store, owner, session, canvas, _, audio, _ = media
    configs = ModelConfigs(store.repository)
    configs.save('video', 'https://video.test', 'first-frame-only', 'test')
    model = configs.save('video', 'https://ark.cn-beijing.volces.com/api/plan/v3', 'doubao-seedance-2.0', 'test')
    origin = next(node for node in canvas.snapshot(owner)['canvas']['nodes'] if node['assetId'] == audio['id'])
    target = canvas.connect(owner, {'sourceId': origin['id'], 'assetId': audio['id'], 'targetId': str(uuid4()),
        'kind': 'video', 'x': 400, 'y': 100}, session)
    assert target['modelConfigId'] == model['id'] and target['videoMode'] == 'reference'
    assert target['role'] == 'generation'
    before = canvas.snapshot(owner)
    with pytest.raises(ProjectError):
        canvas.connect(owner, {'sourceId': origin['id'], 'assetId': audio['id'], 'targetId': str(uuid4()),
            'kind': 'audio', 'x': 400, 'y': 100}, session)
    assert canvas.snapshot(owner) == before


def test_reference_creation_checks_actual_file_constraints_but_existing_target_keeps_its_model(project):
    store, owner, session, canvas = project
    configs = ModelConfigs(store.repository)
    strict = configs.save('image', 'https://ark.cn-beijing.volces.com/api/plan/v3', 'doubao-seedream-5.0-pro', 'test')
    fallback = configs.save('image', 'https://image.test', 'compatible', 'test')
    source = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    asset = canvas.upload(owner['id'], source['id'], str(uuid4()), 'tiny.png', png(), session)
    target = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    assert target['modelConfigId'] == strict['id']
    before = canvas.snapshot(owner['id'])
    with pytest.raises(ProjectError, match='尺寸要求'):
        canvas.connect(owner['id'], {'sourceId': source['id'], 'assetId': asset['id'],
            'targetId': target['id'], 'expectedRevision': target['revision']}, session)
    assert canvas.snapshot(owner['id']) == before
    created = canvas.connect(owner['id'], {'sourceId': source['id'], 'assetId': asset['id'],
        'targetId': str(uuid4()), 'kind': 'image', 'x': 400, 'y': 100}, session)
    assert created['modelConfigId'] == fallback['id'] and created['role'] == 'generation'


def test_undo_first_upload_keeps_file_and_history_can_reapply_to_empty(project):
    _, owner, session, canvas = project
    node = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    asset = canvas.upload(owner['id'], node['id'], str(uuid4()), 'file.png', png(), session)
    undo(canvas, owner, session)
    history = node_history(canvas, owner['id'], node['id'])
    assert history['node']['role'] == 'empty' and len(history['versions']) == 1
    apply_version(canvas, owner['id'], node['id'], asset['id'], history['node']['revision'], asset['fingerprint'], session)
    assert current(canvas, owner, node['id'])['role'] == 'material'


def test_applying_retained_upload_history_does_not_change_established_generation_purpose(project):
    store, owner, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://image.test', 'image', 'test')
    node = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    asset = canvas.upload(owner['id'], node['id'], str(uuid4()), 'file.png', png(), session)
    undo(canvas, owner, session)

    class Provider:
        def validate(self, kind, config): pass

    task, pinned, _ = Generation(store, configs, Provider())._prepare(owner['id'], node['id'], {
        'id': str(uuid4()), 'expectedRevision': current(canvas, owner, node['id'])['revision'],
        'modelConfigId': config['id'], 'inputs': {'prompt': '生成新图'}}, session)
    canvas.task_write(owner['id'], {**task, 'status': 'cancelled'}, pinned)
    history = node_history(canvas, owner['id'], node['id'])
    apply_version(canvas, owner['id'], node['id'], asset['id'], history['node']['revision'], asset['fingerprint'], session)
    assert current(canvas, owner, node['id'])['role'] == 'generation'
    with pytest.raises(ProjectError, match='生成节点'):
        canvas.upload(owner['id'], node['id'], str(uuid4()), 'blocked.png', png(), session, discard_inputs=True)


def test_api_confirmation_and_revision_errors_have_stable_codes(project):
    store, owner, session, canvas = project
    node = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image', 'prompt': '要求'}, session)
    endpoint = f'/api/projects/{owner["id"]}/canvas/nodes/{node["id"]}/file'
    headers = {'X-OpenDirector-Request': '1', 'X-OpenDirector-Session': session, 'X-Asset-Id': str(uuid4()), 'X-Asset-Name': 'file.png'}
    with TestClient(create_app(store), headers=headers) as client:
        rejected = client.put(endpoint, content=png())
        assert rejected.status_code == 409 and rejected.json()['code'] == 'discard_confirmation_required'
        result = client.put(endpoint, content=png(), headers={'X-Discard-Inputs': 'true', 'X-Node-Revision': str(node['revision'])})
        assert result.status_code == 200
        stale = client.put(endpoint, content=png(), headers={'X-Node-Revision': str(node['revision'])})
        assert stale.status_code == 409 and stale.json()['code'] == 'revision_conflict'


def test_manual_text_confirmation_clears_generation_inputs_and_is_undoable(project):
    store, owner, session, canvas = project
    model = ModelConfigs(store.repository).save('agent', 'https://writer.test', 'writer', 'test')
    source = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'text'}, session)
    asset = canvas.save_text(owner['id'], source['id'], str(uuid4()), '上游正文', 'source.md', session)
    target = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'text', 'prompt': '原生成要求'}, session)
    target = canvas.connect(owner['id'], {'sourceId': source['id'], 'assetId': asset['id'],
        'targetId': target['id'], 'expectedRevision': target['revision']}, session)
    before = canvas.snapshot(owner['id'])
    with pytest.raises(ProjectError) as error:
        canvas.save_text(owner['id'], target['id'], str(uuid4()), '手写正文', 'manual.md', session)
    assert error.value.code == 'discard_confirmation_required' and canvas.snapshot(owner['id']) == before
    saved = canvas.save_text(owner['id'], target['id'], str(uuid4()), '手写正文', 'manual.md', session,
        discard_inputs=True, expected_revision=target['revision'], remember=True)
    node = current(canvas, owner, target['id'])
    assert node['role'] == 'material' and node['assetId'] == saved['id'] and not node['referenceIds']
    assert node['prompt'] == '' and node['modelConfigId'] is None
    undo(canvas, owner, session)
    restored = current(canvas, owner, target['id'])
    assert restored['role'] == 'empty' and restored['promptContent'] == target['promptContent']
    assert restored['modelConfigId'] == model['id']


def test_whitespace_only_editor_does_not_require_discard_confirmation(project):
    _, owner, session, canvas = project
    target = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image',
        'promptContent': [{'type': 'text', 'text': ' \n '}]}, session)
    canvas.upload(owner['id'], target['id'], str(uuid4()), 'image.png', png(), session)
    assert current(canvas, owner, target['id'])['role'] == 'material'
