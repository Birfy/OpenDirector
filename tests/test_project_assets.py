from io import BytesIO
import json
import shutil
from pathlib import Path
from uuid import uuid4

from fastapi.testclient import TestClient
import httpx
from PIL import Image
import pytest

from museshow.domain.assets import attachment, asset_adapter
from museshow.infrastructure.asset_catalog import AssetCatalog
from museshow.infrastructure.local_projects import LocalProjects, empty_conversation, read_json
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.chat_completions import ChatCompletions
from museshow_api.main import create_app


def png():
    data = BytesIO()
    Image.new('RGB', (12, 8), 'purple').save(data, format='PNG')
    return data.getvalue()


@pytest.fixture
def project_api(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    project = store.create('资产项目', str(uuid4()), session)
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}
    with TestClient(create_app(store), headers=headers) as client:
        yield client, store, project


def create_text(client, project_id, name='资料.md', text='# 创作资料'):
    value = {'id': str(uuid4()), 'name': name, 'text': text}
    response = client.post(f'/api/projects/{project_id}/assets/text', json=value)
    assert response.status_code == 200, response.text
    return response.json(), value


def update(client, project_id, asset, **changes):
    return client.patch(f'/api/projects/{project_id}/assets/{asset["id"]}', json={
        'expectedRevision': asset['revision'], 'name': asset['name'], 'purpose': asset['purpose'],
        'referenceIds': asset['referenceIds'], **changes,
    })


def test_text_and_image_import_are_typed_immutable_and_survive_restart_and_rename(project_api, tmp_path):
    client, store, project = project_api
    project_id = project['id']
    text, value = create_text(client, project_id)
    assert text['kind'] == 'text' and text['format'] == 'markdown' and text['encoding'] == 'utf-8'
    assert text['source'] == 'manual' and text['scope'] == 'project' and text['createdAt']
    # The same request is an idempotent retry, not another file or timestamp.
    assert client.post(f'/api/projects/{project_id}/assets/text', json=value).json() == text
    assert client.post(f'/api/projects/{project_id}/assets/text', json={**value, 'text': 'replacement'}).status_code == 409
    image_id, data = str(uuid4()), png()
    response = client.put(f'/api/projects/{project_id}/assets/{image_id}', content=data, headers={'X-Asset-Name': 'frame.png'})
    assert response.status_code == 200
    image = response.json()
    assert (image['kind'], image['width'], image['height'], image['type']) == ('image', 12, 8, 'image/png')
    assert image['path'] == f'assets/{image_id}' and image['size'] == len(data)
    assert client.get(f'/api/data/{project_id}/assets/{image_id}').content == data
    records = client.get(f'/api/projects/{project_id}/assets').json()
    assert records == [text, image]
    store.release(client.headers['X-MuseShow-Session'])
    renamed = store.rename(project_id, '改名后', project['name'])
    restarted = LocalProjects(tmp_path)
    assert AssetCatalog(restarted).list(project_id) == records
    assert (Path(renamed['path']) / text['path']).read_text() == value['text']
    assert restarted.asset(project_id, image_id)[0] == data


@pytest.mark.parametrize('name,data', [('bad.txt', b'\xff\xfe'), ('binary.txt', b'hello\x00world'), ('broken.png', b'\x89PNG\r\n\x1a\n'), pytest.param('movie.mp4', b'video', marks=pytest.mark.skipif(not shutil.which('ffprobe'), reason='invalid media probing requires ffprobe'))])
def test_rejected_import_does_not_create_a_file_or_inventory_record(project_api, name, data):
    client, _, project = project_api
    asset_id = str(uuid4())
    response = client.put(f'/api/projects/{project["id"]}/assets/{asset_id}', content=data, headers={'X-Asset-Name': name})
    assert response.status_code == 400
    assert read_json(Path(project['path']) / 'assets.json') == {}
    assert list((Path(project['path']) / 'assets').iterdir()) == []


def test_legacy_four_kinds_and_other_attachments_are_read_without_migration(project_api):
    client, store, project = project_api
    original = []
    for kind, name, media_type in [('text', 'old.md', 'text/markdown'), ('image', 'old.png', 'image/png'),
                                  ('video', 'old.mp4', 'video/mp4'), ('audio', 'old.wav', 'audio/wav'), ('other', 'old.pdf', 'application/pdf')]:
        asset_id = str(uuid4())
        metadata = {'name': name, 'type': media_type, 'fingerprint': asset_id}
        store.save_asset(project['id'], asset_id, metadata, b'legacy bytes', client.headers['X-MuseShow-Session'])
        original.append((asset_id, kind))
    path = Path(project['path']) / 'assets.json'
    before = path.read_bytes()
    response = client.get(f'/api/projects/{project["id"]}/assets')
    assert response.status_code == 200
    assert [(item['id'], item['kind']) for item in response.json()] == original
    for item in response.json():
        assert item['createdAt'] is None and item['source'] == 'legacy'
        asset_adapter.validate_python(item)
    assert path.read_bytes() == before
    # Retaining an old attachment upgrades only that record. A legacy upload
    # retry preserves enriched metadata and upgrades the content fingerprint.
    first = response.json()[0]
    retained = update(client, project['id'], first).json()
    assert retained['scope'] == 'project'
    assert client.put(f'/api/data/{project["id"]}/assets/{first["id"]}', content=b'legacy bytes', headers={
        'X-Asset-Name': first['name'], 'X-Asset-Type': first['type'], 'X-Asset-Fingerprint': first['fingerprint'],
    }).status_code == 200
    retried = read_json(path)[first['id']]
    assert retried['fingerprint'].startswith('sha256:')
    assert first['fingerprint'] in retried['fingerprintAliases']
    assert all(retried[key] == retained[key] for key in ('id', 'name', 'source', 'scope', 'revision', 'purpose'))


def test_reference_checks_revision_conflicts_and_chat_detach_preserve_project_assets(project_api):
    client, store, project = project_api
    project_id = project['id']
    first, _ = create_text(client, project_id)
    second, _ = create_text(client, project_id, '另一份.txt')
    client.get(f'/api/projects/{project_id}/canvas')
    response = update(client, project_id, second, referenceIds=[first['id']])
    assert response.status_code == 200
    changed = response.json()
    assert changed['revision'] == 2
    assert update(client, project_id, second, name='stale.txt').status_code == 409
    assert update(client, project_id, first, referenceIds=[second['id']]).status_code == 409
    assert client.delete(f'/api/projects/{project_id}/assets/{first["id"]}').status_code == 409
    assert update(client, project_id, changed, referenceIds=[]).status_code == 200
    draft = {**empty_conversation(), 'assets': [attachment(first)]}
    assert client.patch(f'/api/data/{project_id}/draft', json={key: draft[key] for key in ('draft', 'assets', 'thinking', 'modelSelections')}).status_code == 200
    assert client.delete(f'/api/projects/{project_id}/assets/{first["id"]}').status_code == 409
    store.save_draft(project_id, {'assets': []}, client.headers['X-MuseShow-Session'])
    assert client.delete(f'/api/data/{project_id}/assets/{first["id"]}').status_code == 200
    assert store.asset(project_id, first['id'])[0]
    from museshow.infrastructure.canvas import CanvasProjects
    canvas = CanvasProjects(store)
    for node in canvas.snapshot(project_id)['canvas']['nodes']:
        if first['id'] in node['assetIds']:
            canvas.remove(project_id, node['id'], client.headers['X-MuseShow-Session'])
    assert client.delete(f'/api/projects/{project_id}/assets/{first["id"]}').status_code == 204
    assert client.get(f'/api/data/{project_id}/assets/{first["id"]}').status_code == 404


def test_failed_inventory_commit_cleans_new_file_and_delete_failure_restores_record(project_api, monkeypatch):
    client, store, project = project_api
    from museshow.infrastructure import local_projects
    asset, _ = create_text(client, project['id'])
    original = local_projects.write_json

    def fail_index(path, value):
        if path.name == 'assets.json':
            raise OSError('disk full')
        original(path, value)

    with monkeypatch.context() as patch:
        patch.setattr(local_projects, 'write_json', fail_index)
        response = client.put(f'/api/projects/{project["id"]}/assets/{uuid4()}', content=b'new', headers={'X-Asset-Name': 'new.txt'})
        assert response.status_code == 503
    assert [file.name for file in (Path(project['path']) / 'assets').iterdir()] == [asset['id']]
    old_unlink = Path.unlink

    def fail_unlink(path, *args, **kwargs):
        if path.name == asset['id']:
            raise PermissionError('in use')
        return old_unlink(path, *args, **kwargs)

    with monkeypatch.context() as patch:
        patch.setattr(Path, 'unlink', fail_unlink)
        assert client.delete(f'/api/projects/{project["id"]}/assets/{asset["id"]}').status_code == 503
    assert AssetCatalog(store).list(project['id']) == [asset]
    assert store.asset(project['id'], asset['id'])[0]


def test_typed_assets_can_be_referenced_in_chat_protocol_and_history_blocks_delete(project_api):
    original_client, store, project = project_api
    calls = []

    def provider(request):
        calls.append(json.loads(request.content))
        return httpx.Response(200, text='data: {"choices":[{"delta":{"content":"已读取资料"},"finish_reason":null}]}\n\ndata: {"choices":[{"delta":{},"finish_reason":"stop"}]}\n\ndata: [DONE]\n\n')

    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': original_client.headers['X-MuseShow-Session']}
    model = ModelConfigs(store.repository).save('agent', 'https://example.com/v1', 'chat', 'private')
    with TestClient(create_app(store, ChatCompletions(httpx.MockTransport(provider))), headers=headers) as client:
        text, _ = create_text(client, project['id'], text='真实参考资料')
        response = client.post(f'/api/data/{project["id"]}/chat', json={'id': str(uuid4()), 'modelId': model['id'], 'text': '读取', 'assets': [text['id']]})
        assert response.status_code == 200 and '已读取资料' in response.text
        assert calls[0]['messages'][-1]['content'][1]['text'].endswith('真实参考资料')
        assert 'schemaVersion' not in response.text
        assert client.delete(f'/api/projects/{project["id"]}/assets/{text["id"]}').status_code == 409


def test_asset_writes_require_the_edit_session_and_invalid_inventory_is_preserved(project_api):
    client, _, project = project_api
    endpoint = f'/api/projects/{project["id"]}/assets'
    text, _ = create_text(client, project['id'])
    stranger = {'X-MuseShow-Session': str(uuid4())}
    assert client.put(f'{endpoint}/{uuid4()}', content=b'data', headers={**stranger, 'X-Asset-Name': 'data.txt'}).status_code == 409
    assert client.patch(f'{endpoint}/{text["id"]}', headers=stranger, json={'name': 'other.txt', 'purpose': 'document', 'expectedRevision': 1}).status_code == 409
    assert client.delete(f'{endpoint}/{text["id"]}', headers=stranger).status_code == 409
    path = Path(project['path']) / 'assets.json'
    corrupt = {text['id']: {**text, 'path': '../outside'}}
    path.write_text(json.dumps(corrupt))
    before = path.read_bytes()
    assert client.get(endpoint).status_code == 409
    assert client.put(f'{endpoint}/{uuid4()}', content=b'data', headers={'X-Asset-Name': 'new.txt'}).status_code == 409
    assert path.read_bytes() == before
