from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from museshow.infrastructure.local_projects import LocalProjects, empty_conversation
from museshow_api.main import create_app


@pytest.fixture
def api(tmp_path):
    store = LocalProjects(tmp_path)
    headers = {"X-MuseShow-Request": "1", "X-MuseShow-Session": str(uuid4())}
    with TestClient(create_app(store), headers=headers) as client:
        yield client, store


def test_api_creates_and_restores_project_and_assets(api):
    client, store = api
    assert client.get("/api/health").json() == {"status": "ok"}
    assert client.get("/api/projects").json() == {"projects": [], "warnings": []}
    assert not store.root.exists()
    project_id, asset_id = str(uuid4()), str(uuid4())
    response = client.post("/api/projects", json={"id": project_id, "name": "接口项目"})
    assert response.status_code == 200
    asset = {"id": asset_id, "name": "sample.txt", "type": "text/plain", "size": 4, "fingerprint": "source"}
    assert client.put(f"/api/data/{project_id}/assets/{asset_id}", content=b"data", headers={"X-Asset-Name": "sample.txt", "X-Asset-Type": "text/plain", "X-Asset-Fingerprint": "source"}).status_code == 200
    conversation = {**empty_conversation(), "draft": "接口草稿", "assets": [asset]}
    assert client.put(f"/api/data/{project_id}/conversation", json=conversation).status_code == 200
    assert client.get(f"/api/data/{project_id}/conversation").json() == conversation
    assert client.get(f"/api/data/{project_id}/assets/{asset_id}").content == b"data"
    session = client.headers["x-museshow-session"]
    assert client.delete(f"/api/sessions/{session}").status_code == 200
    assert client.patch(f"/api/projects/{project_id}", json={"name": "新名称", "expectedName": "接口项目"}).status_code == 200
    assert client.get(f"/api/data/{project_id}/assets/{asset_id}").content == b"data"
    listing = client.get("/api/projects").json()
    assert listing["projects"] == [{"id": project_id, "name": "新名称", "path": str(store.root / "新名称")}]
    assert listing["warnings"] == []


def test_cross_site_and_unmarked_requests_cannot_access_files(api):
    client, _ = api
    assert client.get("/api/projects", headers={"Origin": "https://untrusted.example"}).status_code == 403
    assert client.get("/api/projects", headers={"X-MuseShow-Request": ""}).status_code == 403
    assert client.get("/api/projects", headers={"Host": "untrusted.example"}).status_code == 403


def test_invalid_conversation_request_does_not_overwrite_saved_content(api):
    client, _ = api
    project_id = str(uuid4())
    assert client.post("/api/projects", json={"id": project_id, "name": "valid"}).status_code == 200
    conversation = {**empty_conversation(), "draft": "原有草稿"}
    assert client.put(f"/api/data/{project_id}/conversation", json=conversation).status_code == 200
    assert client.put(f"/api/data/{project_id}/conversation", json={"draft": "invalid"}).status_code == 422
    assert client.get(f"/api/data/{project_id}/conversation").json() == conversation


def test_session_close_flushes_before_release_and_rejects_late_saves(api):
    client, store = api
    project_id = str(uuid4())
    client.post("/api/projects", json={"id": project_id, "name": "页面关闭"})
    session = client.headers["x-museshow-session"]
    conversation = {**empty_conversation(), "draft": "离开页面前的最新草稿"}
    response = client.post(f"/api/sessions/{session}/close", json={"projectId": project_id, "conversation": conversation})
    assert response.status_code == 200
    assert response.json() == {'ok': True, 'draftSaved': True}
    assert client.put(f"/api/data/{project_id}/conversation", json=empty_conversation()).status_code == 409
    assert store.conversation(project_id) == conversation
    assert client.post(f"/api/projects/{project_id}/open", headers={"X-MuseShow-Session": str(uuid4())}).status_code == 200


@pytest.mark.parametrize('state', ['expired', 'released', 'closed'])
def test_late_session_close_is_idempotent_and_preserves_the_new_window(api, state):
    from museshow.infrastructure.local_projects import read_json
    client, store = api
    project_id, session = str(uuid4()), client.headers['x-museshow-session']
    client.post('/api/projects', json={'id': project_id, 'name': '关闭幂等'})
    saved = {**empty_conversation(), 'draft': '已经保存的草稿'}
    client.put(f'/api/data/{project_id}/conversation', json=saved).raise_for_status()
    if state == 'expired':
        with store.transaction() as db:
            db.execute('UPDATE sessions SET expires=0 WHERE id=?', (session,))
    elif state == 'released':
        client.delete(f'/api/sessions/{session}').raise_for_status()
    else:
        client.post(f'/api/sessions/{session}/close', json={'projectId': project_id, 'conversation': saved}).raise_for_status()
    # A fresh window may already own the project before the old page exits.
    new_session = str(uuid4())
    client.post(f'/api/projects/{project_id}/open', headers={'X-MuseShow-Session': new_session}).raise_for_status()
    current = {**saved, 'draft': '新窗口保存的最新草稿'}
    client.put(f'/api/data/{project_id}/conversation', json=current, headers={'X-MuseShow-Session': new_session}).raise_for_status()
    before = read_json(store.root / '关闭幂等' / 'conversation.json')
    stale = {**saved, 'draft': '旧窗口草稿不得覆盖'}
    response = client.post(f'/api/sessions/{session}/close', json={'projectId': project_id, 'conversation': stale})
    assert response.status_code == 200
    assert response.json() == {'ok': True, 'draftSaved': False}
    assert store.conversation(project_id) == before == current
    assert client.put(f'/api/data/{project_id}/conversation', json=stale).status_code == 409
    client.put(f'/api/data/{project_id}/conversation', json=current, headers={'X-MuseShow-Session': new_session}).raise_for_status()


def test_close_for_previous_project_does_not_release_the_sessions_current_project(api):
    client, store = api
    old_id, new_id = str(uuid4()), str(uuid4())
    session = client.headers['x-museshow-session']
    client.post('/api/projects', json={'id': old_id, 'name': '旧项目'})
    client.post('/api/projects', json={'id': new_id, 'name': '当前项目'})
    response = client.post(f'/api/sessions/{session}/close', json={
        'projectId': old_id, 'conversation': {**empty_conversation(), 'draft': '延迟关闭'},
    })
    assert response.status_code == 200 and not response.json()['draftSaved']
    assert store.conversation(old_id) == empty_conversation()
    current = {**empty_conversation(), 'draft': '当前项目仍可保存'}
    client.put(f'/api/data/{new_id}/conversation', json=current).raise_for_status()
    assert store.conversation(new_id) == current


def test_expired_close_releases_only_its_expired_lease_without_saving(api):
    client, store = api
    project_id = str(uuid4())
    session = client.headers['x-museshow-session']
    client.post('/api/projects', json={'id': project_id, 'name': '过期关闭'})
    with store.transaction() as db:
        db.execute('UPDATE sessions SET expires=0 WHERE id=?', (session,))
    value = {**empty_conversation(), 'draft': '未授权草稿'}
    response = client.post(f'/api/sessions/{session}/close', json={'projectId': project_id, 'conversation': value})
    assert response.json() == {'ok': True, 'draftSaved': False}
    assert store.conversation(project_id) == empty_conversation()
    with store.transaction() as db:
        assert db.execute('SELECT 1 FROM sessions WHERE id=?', (session,)).fetchone() is None


def test_close_keeps_real_save_errors_and_the_live_lease(api, monkeypatch):
    from museshow.infrastructure import local_projects
    client, store = api
    project_id = str(uuid4())
    session = client.headers['x-museshow-session']
    client.post('/api/projects', json={'id': project_id, 'name': '关闭保存失败'})
    saved = {**empty_conversation(), 'draft': '保留草稿'}
    client.put(f'/api/data/{project_id}/conversation', json=saved).raise_for_status()
    invalid = {**saved, 'assets': [{'id': str(uuid4()), 'name': 'missing.txt', 'type': 'text/plain', 'size': 1, 'fingerprint': 'fixture'}]}
    path = f'/api/sessions/{session}/close'
    response = client.post(path, json={'projectId': project_id, 'conversation': invalid})
    assert response.status_code == 409 and '部分素材尚未保存' in response.json()['detail']
    assert store.conversation(project_id) == saved
    client.patch(f'/api/data/{project_id}/draft', json={
        'draft': '保存失败后仍可继续编辑', 'assets': [], 'thinking': 'auto', 'modelSelections': {},
    }).raise_for_status()
    def fail(*_):
        raise OSError('simulated disk failure')
    with monkeypatch.context() as patch:
        patch.setattr(local_projects, 'write_json', fail)
        response = client.post(path, json={'projectId': project_id, 'conversation': saved})
        assert response.status_code == 503
    assert store.conversation(project_id)['draft'] == '保存失败后仍可继续编辑'
    response = client.post(path, json={'projectId': project_id, 'conversation': saved})
    assert response.json() == {'ok': True, 'draftSaved': True}
