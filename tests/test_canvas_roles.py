"""Canvas purpose locks survive replacement, retries, history and API entry points."""
from copy import deepcopy
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from opendirector.application.generation import Generation
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.canvas import CanvasProjects
from opendirector.infrastructure.canvas_versions import apply_version, node_history
from opendirector.infrastructure.model_configs import ModelConfigs
from opendirector_api.main import create_app
from test_canvas_generation import project, node, png


def current(canvas, owner, node_id):
    return canvas._node(canvas.snapshot(owner['id'])['canvas'], node_id)


def undo(canvas, owner, session, direction='undo'):
    entry = canvas.snapshot(owner['id'])['canvas']['history'][direction]
    return canvas.history(owner['id'], direction, entry['id'], str(uuid4()), session)


def test_upload_locks_only_on_success_and_replacement_retains_files_and_purpose(project):
    store, owner, session, canvas = project
    item = node(canvas, owner, session)
    canvas.patch(owner['id'], item['id'], {'prompt': '尚未提交的生成草稿'}, session)
    with pytest.raises(ProjectError):
        canvas.upload(owner['id'], item['id'], str(uuid4()), 'wrong.txt', b'text', session)
    assert current(canvas, owner, item['id'])['role'] == 'empty'
    assert canvas.assets.list(owner['id']) == []
    with pytest.raises(ProjectError, match='确认清除'):
        canvas.upload(owner['id'], item['id'], str(uuid4()), 'first.png', png(), session)
    canvas.patch(owner['id'], item['id'], {'prompt': ''}, session)
    first = canvas.upload(owner['id'], item['id'], str(uuid4()), 'first.png', png(), session)
    locked = current(canvas, owner, item['id'])
    assert locked['role'] == 'material' and locked['prompt'] == ''
    with pytest.raises(ProjectError, match='内容已变化'):
        canvas.upload(owner['id'], item['id'], str(uuid4()), 'stale.png', png(), session, expected_revision=1)
    second = canvas.upload(owner['id'], item['id'], str(uuid4()), 'second.png', png(), session, expected_revision=locked['revision'])
    assert current(canvas, owner, item['id'])['assetId'] == second['id']
    undo(canvas, owner, session)
    assert current(canvas, owner, item['id'])['assetId'] == first['id']
    undo(canvas, owner, session, 'redo')
    assert current(canvas, owner, item['id'])['role'] == 'material'
    assert store.asset(owner['id'], first['id'])[0] == png()
    history = node_history(canvas, owner['id'], item['id'])
    assert all(v['prompt'] is None and v['referenceIds'] == [] for v in history['versions'])
    apply_version(canvas, owner['id'], item['id'], first['id'], history['node']['revision'], first['fingerprint'], session)
    assert current(canvas, owner, item['id'])['role'] == 'material'


@pytest.mark.parametrize('changes', [{'prompt': '要求'}, {'referenceIds': ['reference']}, {'modelConfigId': 'model'}, {'role': 'empty'}])
def test_material_cannot_accept_generation_inputs_or_change_purpose(project, changes):
    _, owner, session, canvas = project
    item = node(canvas, owner, session)
    asset = canvas.upload(owner['id'], item['id'], str(uuid4()), 'image.png', png(), session)
    changes = {key: [asset['id']] if key == 'referenceIds' else str(uuid4()) if key == 'modelConfigId' else value for key, value in changes.items()}
    before = canvas.snapshot(owner['id'])
    with pytest.raises(ProjectError):
        canvas.patch(owner['id'], item['id'], changes, session)
    assert canvas.snapshot(owner['id']) == before


def test_manual_text_is_material_and_cannot_be_overwritten_by_agent(project):
    store, owner, session, canvas = project
    item = node(canvas, owner, session, 'text')
    first = canvas.save_text(owner['id'], item['id'], str(uuid4()), '正文一', 'text.md', session, remember=True)
    second = canvas.save_text(owner['id'], item['id'], str(uuid4()), '正文二', 'text.md', session, remember=True)
    assert current(canvas, owner, item['id'])['role'] == 'material'
    with pytest.raises(ProjectError, match='素材节点'):
        canvas.save_text(owner['id'], item['id'], str(uuid4()), 'AI 替换', 'text.md', session,
                         agent_run={'id': str(uuid4()), 'modelConfigId': str(uuid4()), 'referenceIds': []})
    undo(canvas, owner, session)
    assert current(canvas, owner, item['id'])['assetId'] == first['id']
    assert store.asset(owner['id'], second['id'])[0].decode() == '正文二'


def test_agent_text_is_generation_and_manual_edit_upload_are_rejected(project):
    _, owner, session, canvas = project
    config = ModelConfigs(canvas.store.repository).save('agent', 'https://writer.test', 'writer', 'private')
    item = node(canvas, owner, session, 'text')
    canvas.save_text(owner['id'], item['id'], str(uuid4()), '模型正文', 'text.md', session,
        agent_run={'id': str(uuid4()), 'modelConfigId': config['id'], 'referenceIds': [],
                   'inputs': {'prompt': '创作剧本', 'referenceIds': [], 'referenceFingerprints': {}, 'modelName': 'writer', 'modelURL': config['url']}})
    before = canvas.snapshot(owner['id'])
    assert current(canvas, owner, item['id'])['role'] == 'generation'
    with pytest.raises(ProjectError, match='生成节点'):
        canvas.save_text(owner['id'], item['id'], str(uuid4()), '手动修改', 'text.md', session)
    with pytest.raises(ProjectError, match='生成节点'):
        canvas.upload(owner['id'], item['id'], str(uuid4()), 'text.md', b'replacement', session)
    with pytest.raises(ProjectError, match='生成节点'):
        canvas.patch(owner['id'], item['id'], {'draft': '修改正文'}, session)
    assert canvas.snapshot(owner['id']) == before
    assert node_history(canvas, owner['id'], item['id'])['versions'][0]['prompt'] == '创作剧本'


def test_rejected_generation_does_not_lock_but_accepted_cancelled_task_does(project):
    store, owner, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://image.test', 'image-model', 'private')
    item = node(canvas, owner, session)
    class Provider:
        def validate(self, kind, config): pass
    manager = Generation(store, configs, Provider())
    value = {'id': str(uuid4()), 'expectedRevision': 1, 'modelConfigId': config['id']}
    with pytest.raises(ProjectError, match='请输入'):
        manager._prepare(owner['id'], item['id'], value, session)
    assert current(canvas, owner, item['id'])['role'] == 'empty'
    assert canvas.snapshot(owner['id'])['tasks'] == []
    task, pinned, _ = manager._prepare(owner['id'], item['id'], {**value, 'inputs': {'prompt': '画一朵花'}}, session)
    assert current(canvas, owner, item['id'])['role'] == 'generation'
    canvas.task_write(owner['id'], {**task, 'status': 'cancelled'}, pinned)
    with pytest.raises(ProjectError, match='生成节点'):
        canvas.upload(owner['id'], item['id'], str(uuid4()), 'image.png', png(), session)
    assert CanvasProjects(store).snapshot(owner['id'])['canvas']['nodes'][0]['role'] == 'generation'


def test_material_generation_rejected_before_task_or_provider_submission(project):
    store, owner, session, canvas = project
    item = node(canvas, owner, session)
    canvas.upload(owner['id'], item['id'], str(uuid4()), 'image.png', png(), session)
    config = ModelConfigs(store.repository).save('image', 'https://image.test', 'image-model', 'private')
    manager = Generation(store, ModelConfigs(store.repository))
    before = canvas.snapshot(owner['id'])
    with pytest.raises(ProjectError, match='素材节点'):
        manager._prepare(owner['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'],
            'expectedRevision': current(canvas, owner, item['id'])['revision'], 'inputs': {'prompt': '改图'}}, session)
    assert canvas.snapshot(owner['id']) == before


def test_undo_first_upload_restores_empty_and_redo_retains_material_purpose(project):
    store, owner, session, canvas = project
    item = canvas.create(owner['id'], {'id': str(uuid4()), 'kind': 'image'}, session, remember=True)
    asset = canvas.upload(owner['id'], item['id'], str(uuid4()), 'image.png', png(), session)
    undo(canvas, owner, session)
    retained = current(canvas, owner, item['id'])
    assert retained['role'] == 'empty' and retained['assetId'] is None
    undo(canvas, owner, session)  # Undo node creation after undoing its upload.
    assert canvas.snapshot(owner['id'])['canvas']['nodes'] == []
    undo(canvas, owner, session, 'redo')
    assert current(canvas, owner, item['id'])['role'] == 'empty'
    undo(canvas, owner, session, 'redo')
    assert current(canvas, owner, item['id'])['role'] == 'material'
    assert current(canvas, owner, item['id'])['assetId'] == asset['id']
    canvas.remove(owner['id'], item['id'], session, remember=True)
    undo(canvas, owner, session)
    assert CanvasProjects(store).snapshot(owner['id'])['canvas']['nodes'][0]['role'] == 'material'


@pytest.mark.parametrize('poll_before_retry', [False, True])
def test_retry_saved_text_after_canvas_write_failure_retains_one_node(project, monkeypatch, poll_before_retry):
    _, owner, session, canvas = project
    item = node(canvas, owner, session, 'text')
    asset_id = str(uuid4())
    write = canvas._write
    def fail_once(*args):
        monkeypatch.setattr(canvas, '_write', write)
        raise OSError('interrupted node commit')
    monkeypatch.setattr(canvas, '_write', fail_once)
    with pytest.raises(OSError):
        canvas.save_text(owner['id'], item['id'], asset_id, '已保存文件', 'text.md', session)
    if poll_before_retry:
        canvas.snapshot(owner['id'])
    canvas.save_text(owner['id'], item['id'], asset_id, '已保存文件', 'text.md', session)
    state = canvas.snapshot(owner['id'])
    assert len(state['canvas']['nodes']) == 1
    assert state['canvas']['nodes'][0]['id'] == item['id']
    assert state['canvas']['nodes'][0]['role'] == 'material'
    assert len(state['assets']) == 1


def test_replacement_preserves_submitted_reference_snapshot(project):
    store, owner, session, canvas = project
    source, target = node(canvas, owner, session), node(canvas, owner, session)
    original = canvas.upload(owner['id'], source['id'], str(uuid4()), 'original.png', png(), session)
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://image.test', 'image-model', 'private')
    class Provider:
        def validate(self, kind, config): pass
    task, _, _ = Generation(store, configs, Provider())._prepare(owner['id'], target['id'], {
        'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': 1,
        'inputs': {'prompt': '参考制作', 'referenceIds': [original['id']]}}, session)
    receipt = deepcopy(task)
    canvas.upload(owner['id'], source['id'], str(uuid4()), 'replacement.png', png(), session)
    assert canvas.snapshot(owner['id'])['tasks'] == [receipt]
    assert task['referenceIds'] == [original['id']]
    assert store.asset(owner['id'], original['id'])[0] == png()


def test_api_rejects_upload_and_text_write_on_generated_node_without_orphan_assets(project):
    store, owner, session, canvas = project
    item = node(canvas, owner, session, 'text')
    config = ModelConfigs(store.repository).save('agent', 'https://writer.test', 'writer', 'private')
    canvas.save_text(owner['id'], item['id'], str(uuid4()), 'AI 正文', 'text.md', session,
        agent_run={'id': str(uuid4()), 'modelConfigId': config['id'], 'referenceIds': []})
    before = canvas.snapshot(owner['id'])
    root = f'/api/projects/{owner["id"]}/canvas/nodes/{item["id"]}'
    with TestClient(create_app(store), headers={'X-OpenDirector-Request': '1', 'X-OpenDirector-Session': session}) as client:
        response = client.put(root + '/file', content=b'replace', headers={'X-Asset-Name': 'new.txt', 'X-Asset-Id': str(uuid4())})
        assert response.status_code == 409 and '生成节点' in response.text
        response = client.put(root + '/text', json={'id': str(uuid4()), 'name': 'new.md', 'text': 'replace'})
        assert response.status_code == 409
    assert canvas.snapshot(owner['id']) == before
