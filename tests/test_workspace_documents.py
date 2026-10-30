"""Current frontend payloads persist in the same MuseShow project directory."""
from copy import deepcopy
from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import LocalProjects, read_json
from museshow.infrastructure.workspace_documents import WorkspaceDocuments
from museshow_api.main import create_app


def document(project_id):
    return dict(version=1, id=project_id, title='未命名画布',
                nodes=[dict(id='image', type='image', data=dict(src='data:image/png;base64,YQ=='))], edges=[],
                viewport=dict(x=0, y=0, zoom=1), settings={})


@pytest.fixture
def workspace(tmp_path):
    store = LocalProjects(tmp_path)
    project_id, session = str(uuid4()), str(uuid4())
    store.create('未命名画布', project_id, session)
    return store, WorkspaceDocuments(store), project_id, session


def test_workspace_is_file_authoritative_and_reopens_after_restart(workspace):
    store, documents, project_id, session = workspace
    assert documents.read(project_id)['document'] is None
    saved = documents.save(project_id, document(project_id), 0, session)
    path = store.root / '未命名画布' / documents.filename
    assert read_json(path) == saved
    restarted = WorkspaceDocuments(LocalProjects(store.repository))
    assert restarted.read(project_id) == saved
    assert documents.save(project_id, document(project_id), 0, session) == saved


def test_stale_writes_and_closed_sessions_never_overwrite_files(workspace):
    store, documents, project_id, session = workspace
    saved = documents.save(project_id, document(project_id), 0, session)
    changed = {**document(project_id), 'edges': [dict(id='new-edge')]}
    with pytest.raises(ProjectError, match='画布已变化'):
        documents.save(project_id, changed, 0, session)
    store.release(session)
    with pytest.raises(ProjectError, match='会话已过期'):
        documents.save(project_id, changed, 1, session)
    assert documents.read(project_id) == saved


def test_project_rename_moves_workspace_and_preserves_identity_and_content(workspace):
    store, documents, project_id, session = workspace
    saved = documents.save(project_id, document(project_id), 0, session)
    store.release(session)
    store.rename(project_id, '斗破苍穹', '未命名画布')
    assert not (store.root / '未命名画布').exists()
    assert (store.root / '斗破苍穹' / documents.filename).is_file()
    reopened = documents.read(project_id)
    assert reopened['document'] == {**saved['document'], 'title': '斗破苍穹'}
    store.open(project_id, session)
    updated = documents.save(project_id, reopened['document'], reopened['revision'], session)
    assert read_json(store.root / '斗破苍穹' / documents.filename) == updated


def test_text_about_blob_urls_is_not_treated_as_transient_media(workspace):
    _, documents, project_id, session = workspace
    value = document(project_id)
    value['nodes'][0]['data']['prompt'] = 'blob: 只是正文说明'
    assert documents.save(project_id, value, 0, session)['document'] == value


def test_shared_media_wire_format_survives_save_and_reopen(workspace):
    _, documents, project_id, session = workspace
    value = {**document(project_id), 'version': 2, 'mediaSources': ['data:image/png;base64,YQ==']}
    value['nodes'][0]['data']['src'] = 'opendesign-media:0'
    saved = documents.save(project_id, value, 0, session)
    assert documents.read(project_id) == saved
    assert saved['document'] == value
    for invalid in ['opendesign-media:1', 'opendesign-media:-1', 'opendesign-media:0.5', 'opendesign-media:00']:
        changed = deepcopy(value)
        changed['nodes'][0]['data']['src'] = invalid
        with pytest.raises(ProjectError): documents.save(project_id, changed, 1, session)
        assert documents.read(project_id) == saved


@pytest.mark.parametrize('sources', [[], ['blob:temporary'], ['https://example.com/image.png'], [None]])
def test_invalid_shared_media_table_preserves_saved_project(workspace, sources):
    _, documents, project_id, session = workspace
    saved = documents.save(project_id, document(project_id), 0, session)
    invalid = {**document(project_id), 'version': 2, 'mediaSources': sources}
    with pytest.raises(ProjectError): documents.save(project_id, invalid, 1, session)
    assert documents.read(project_id) == saved


@pytest.mark.parametrize('problem', ['scope', 'blob', 'version', 'corrupt'])
def test_invalid_input_or_corrupt_file_preserves_existing_bytes(workspace, problem):
    store, documents, project_id, session = workspace
    documents.save(project_id, document(project_id), 0, session)
    path = store.root / '未命名画布' / documents.filename
    value = deepcopy(document(project_id))
    if problem == 'scope': value['id'] = str(uuid4())
    elif problem == 'blob': value['nodes'][0]['data']['src'] = 'blob:temporary'
    elif problem == 'version': value['version'] = 99
    else: path.write_text('{broken', encoding='utf-8')
    before = path.read_bytes()
    with pytest.raises(ProjectError): documents.save(project_id, value, 1, session)
    assert path.read_bytes() == before


def test_workspace_api_requires_scope_version_and_lease(workspace):
    store, _, project_id, session = workspace
    with TestClient(create_app(store), headers={'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}) as client:
        path = f'/api/projects/{project_id}/workspace'
        assert client.get(path).json()['document'] is None
        value = dict(revision=0, document=document(project_id))
        saved = client.put(path, json=value)
        assert saved.status_code == 200 and saved.json()['revision'] == 1
        assert client.get(path).json() == saved.json()
        assert client.put(path, json={**value, 'revision': -1}).status_code == 422
        assert client.put(path, json=value, headers={'X-MuseShow-Session': str(uuid4())}).status_code == 409
        assert client.put(path, json=value, headers={'Origin': 'https://untrusted.example'}).status_code == 403
