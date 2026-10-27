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
    assert client.post(f"/api/sessions/{session}/close", json={"projectId": project_id, "conversation": conversation}).status_code == 200
    assert client.put(f"/api/data/{project_id}/conversation", json=empty_conversation()).status_code == 409
    assert store.conversation(project_id) == conversation
    assert client.post(f"/api/projects/{project_id}/open", headers={"X-MuseShow-Session": str(uuid4())}).status_code == 200
