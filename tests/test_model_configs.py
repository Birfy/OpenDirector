import json
import os
from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.local_projects import LocalProjects, empty_conversation
from opendirector.infrastructure.model_configs import ModelConfigs
from opendirector_api.main import create_app


@pytest.fixture
def api(tmp_path):
    store = LocalProjects(tmp_path)
    headers = {"X-OpenDirector-Request": "1", "X-OpenDirector-Session": str(uuid4())}
    with TestClient(create_app(store), headers=headers) as client:
        yield client, store


def payload(kind="agent", **changes):
    return {"kind": kind, "url": "https://models.example/v1", "modelId": "demo-model", "apiKey": "test-secret", **changes}


def test_four_categories_survive_restart_without_exposing_secrets(api):
    client, store = api
    configs = []
    for kind in ("agent", "image", "video", "audio", "agent"):
        response = client.post("/api/model-configs", json=payload(kind))
        assert response.status_code == 200
        assert "test-secret" not in response.text
        assert set(response.json()) == {"id", "kind", "url", "modelId", "inputRules", "connectionType", "protocol", "authMode", "videoAdapter", "videoCapabilities"}
        configs.append(response.json())
    assert len({item["id"] for item in configs}) == 5
    assert client.get("/api/model-configs").json() == configs
    assert ModelConfigs(store.repository).list() == configs
    assert not store.root.exists()
    path = store.state_dir / "models.json"
    assert json.loads(path.read_text())["models"][0]["apiKey"] == "test-secret"
    if os.name == "posix":
        assert path.stat().st_mode & 0o777 == 0o600
        assert path.parent.stat().st_mode & 0o777 == 0o700


def test_edit_preserves_blank_key_and_stable_id_then_delete(api):
    client, store = api
    config = client.post("/api/model-configs", json=payload()).json()
    path = f"/api/model-configs/{config['id']}"
    response = client.patch(path, json=payload(modelId="edited", apiKey=""))
    assert response.status_code == 200
    assert response.json()["id"] == config["id"]
    assert response.json()["modelId"] == "edited"
    file = store.state_dir / "models.json"
    assert json.loads(file.read_text())["models"][0]["apiKey"] == "test-secret"
    assert client.patch(path, json=payload(apiKey="replacement-secret")).status_code == 200
    assert json.loads(file.read_text())["models"][0]["apiKey"] == "replacement-secret"
    before = file.read_bytes()
    assert client.patch(path, json=payload("image")).status_code == 400
    assert file.read_bytes() == before
    assert client.delete(path).status_code == 204
    assert client.get("/api/model-configs").json() == []
    assert client.patch(path, json=payload()).status_code == 404


def test_validation_and_save_failures_preserve_file_and_hide_request_values(api, monkeypatch):
    from opendirector.infrastructure import model_configs

    client, store = api
    config = client.post("/api/model-configs", json=payload()).json()
    path = store.state_dir / "models.json"
    before = path.read_bytes()
    for changes in ({"url": "file:///private"}, {"url": "https://user:test-secret@models.example"},
                    {"url": "https://models.example?key=test-secret"}, {"modelId": "  "},
                    {"apiKey": ""}, {"kind": "unknown"}, {"modelId": None}):
        response = client.post("/api/model-configs", json=payload(**changes))
        assert response.status_code in {400, 422}
        assert "test-secret" not in response.text
        assert path.read_bytes() == before

    def fail_write(*args):
        raise OSError("simulated disk failure")

    monkeypatch.setattr(model_configs, "write_json", fail_write)
    assert client.patch(f"/api/model-configs/{config['id']}", json=payload(modelId="unsaved")).status_code == 503
    assert path.read_bytes() == before
    assert client.delete(f"/api/model-configs/{config['id']}").status_code == 503
    assert client.get("/api/model-configs").json()[0]["modelId"] == "demo-model"


def test_corrupt_configuration_is_reported_without_overwriting(tmp_path):
    store = ModelConfigs(tmp_path)
    store.path.write_text('{"version":1,"models":[{"apiKey":"private"}]}')
    before = store.path.read_bytes()
    for operation in (store.list, lambda: store.save("agent", "https://example.com", "new", "new-secret")):
        with pytest.raises(ProjectError, match="原文件未覆盖") as failure:
            operation()
        assert "private" not in str(failure.value)
        assert store.path.read_bytes() == before


def test_project_selections_and_history_survive_config_changes(api):
    client, store = api
    config = client.post("/api/model-configs", json=payload()).json()
    project_id = str(uuid4())
    client.post("/api/projects", json={"id": project_id, "name": "模型选择"})
    # Legacy JSON omits the new field and still loads normally.
    legacy = empty_conversation()
    legacy.pop("modelSelections")
    legacy["model"] = "openai"
    legacy["messages"] = [{"id": str(uuid4()), "role": "assistant", "text": "历史回复", "assets": [],
                           "model": "openai", "thinking": "auto", "status": "complete"}]
    (store.root / "模型选择" / "conversation.json").write_text(json.dumps(legacy))
    value = client.get(f"/api/data/{project_id}/conversation").json()
    assert value["modelSelections"] == {}
    assert "model" not in value
    value["modelSelections"] = {"agent": config["id"], "image": None}
    assert client.put(f"/api/data/{project_id}/conversation", json={**value, "model": "openai"}).status_code == 200
    assert "model" not in json.loads((store.root / "模型选择" / "conversation.json").read_text())
    assert client.patch(f"/api/model-configs/{config['id']}", json=payload(modelId="changed", apiKey="")).status_code == 200
    assert client.delete(f"/api/model-configs/{config['id']}").status_code == 204
    assert client.get(f"/api/data/{project_id}/conversation").json() == value
    assert "test-secret" not in (store.root / "模型选择" / "conversation.json").read_text()


def test_model_config_routes_keep_local_request_protection(api):
    client, _ = api
    assert client.get("/api/model-configs", headers={"Origin": "https://untrusted.example"}).status_code == 403
    assert client.post("/api/model-configs", json=payload(), headers={"X-OpenDirector-Request": ""}).status_code == 403


@pytest.mark.parametrize('kind', ['image', 'video'])
def test_segmentation_protocol_serves_both_tools_without_generation(api, kind):
    from opendirector.domain.creation.models import ModelConfigPublic, ModelSnapshot
    from opendirector.integrations.model_adapters import capabilities_of
    from opendirector.integrations.providers import GenerationProviders
    client, store = api
    response = client.post('/api/model-configs', json=payload(kind, protocol='vllm_omni_segmentation', modelId='facebook/sam3'))
    assert response.status_code == 200, response.text
    saved = response.json()
    assert saved['inputRules']['profile'] == 'vllm-omni-segmentation'
    assert saved['inputRules']['allowedKinds'] == [] and saved['inputRules']['videoModes'] == []
    assert ModelConfigs(store.repository).list() == [saved]
    public = ModelConfigPublic.model_validate(saved)
    ModelSnapshot(modelConfigId=public.id, **public.model_dump(exclude={'id', 'authMode', 'videoCapabilities'}))
    private = ModelConfigs(store.repository).resolve(saved['id'], kind)
    assert capabilities_of(private) == {'image.segment', 'video.matting'}
    with pytest.raises(ProjectError, match='视觉分割模型'):
        GenerationProviders(store).validate(kind, private)
    catalog = client.get('/api/tools').json()
    assert catalog['selectionPreview']['available']
    for capability in ('image.segment', 'video.matting'):
        assert catalog['capabilities'][capability][0]['id'] == saved['id']
    assert not any(saved['id'] == model['id'] for model in catalog['capabilities'].get('image.generate', []))
    normal = 'openai' if kind == 'image' else 'vllm_omni'
    changed = client.patch(f"/api/model-configs/{saved['id']}", json=payload(kind, protocol=normal, apiKey=''))
    assert changed.status_code == 200, changed.text
    assert changed.json()['id'] == saved['id'] and changed.json()['protocol'] == normal
    assert ModelConfigs(store.repository).resolve(saved['id'], kind)['apiKey'] == 'test-secret'


@pytest.mark.parametrize('kind', ['image', 'video'])
@pytest.mark.parametrize('segmentation', [False, True])
def test_legacy_sam_configuration_can_be_edited_in_media_category(api, kind, segmentation):
    client, store = api
    legacy = client.post('/api/model-configs', json=payload('vision', protocol='vllm_omni', modelId='facebook/sam3')).json()
    assert client.get('/api/tools').json()['selectionPreview']['available']
    protocol = 'vllm_omni_segmentation' if segmentation else 'openai' if kind == 'image' else 'vllm_omni'
    changed = client.patch(f"/api/model-configs/{legacy['id']}", json=payload(kind,
        protocol=protocol, modelId=legacy['modelId'], apiKey=''))
    assert changed.status_code == 200, changed.text
    assert changed.json()['id'] == legacy['id'] and changed.json()['kind'] == kind
    assert ModelConfigs(store.repository).resolve(legacy['id'], kind)['apiKey'] == 'test-secret'


def test_segmentation_rejects_generation_specific_configuration_and_wrong_categories(api):
    client, store = api
    for kind in ('agent', 'audio'):
        assert client.post('/api/model-configs', json=payload(kind, protocol='vllm_omni_segmentation')).status_code == 400
    assert client.post('/api/model-configs', json=payload('video', protocol='vllm_omni_segmentation', videoAdapter='fasth3')).status_code == 400
    assert ModelConfigs(store.repository).list() == []


@pytest.mark.parametrize('kind', ['image', 'video'])
def test_legacy_generation_boundary_rejects_sam_before_creating_a_task(tmp_path, kind):
    from canvas_helpers import setup
    store, session, project, _, generation, provider = setup(tmp_path)
    sam = generation.configs.save(kind, 'http://fixture.invalid/v1', 'sam3', '',
                                  connection_type='self_hosted', protocol='vllm_omni_segmentation')
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)
    with pytest.raises(ProjectError, match='视觉分割模型'):
        generation._prepare(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': sam['id'], 'inputs': {'prompt': 'generate'}}, session)
    assert provider.calls == []
    assert generation.canvas.snapshot(project['id'])['tasks'] == []
