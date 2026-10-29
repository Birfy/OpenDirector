"""The canvas runtime must not activate retired production services."""
from pathlib import Path
import time
from uuid import uuid4

from fastapi.testclient import TestClient
import httpx
import pytest

from museshow.agent.loop import TOOLS
from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import write_json
from museshow.integrations.volcengine import VolcengineGeneration
from museshow_api.main import create_app
from canvas_helpers import context


def test_only_canvas_services_are_exposed(tmp_path):
    c = context(tmp_path)
    app = create_app(c.store, generation_provider=c.provider)
    paths = app.openapi()['paths']
    retired = ('/storyboard', '/timeline', '/exports', '/production-plans', '/production-chat')
    assert not any(part in path for path in paths for part in retired)
    assert {tool['function']['name'] for tool in TOOLS} == {
        'read_project', 'read_text_asset', 'save_text_asset', 'generate_asset', 'get_generation_task'}
    with TestClient(app, headers={'X-MuseShow-Request': '1'}) as client:
        assert client.get('/api/health').status_code == 200
        assert client.get('/api/model-configs').status_code == 200
        assert client.get('/api/settings').status_code == 200
        for part in retired:
            assert client.get(f'/api/projects/{c.owner}{part}').status_code == 404
    assert not any((c.directory / name).exists() for name in (
        'storyboard.json', 'timeline.json', 'production-plans', 'production-chat.json', 'exports'))


def test_inactive_legacy_files_do_not_block_canvas_history_assets_or_rename(tmp_path):
    c = context(tmp_path)
    old_files = [c.directory / 'storyboard.json', c.directory / 'timeline.json',
                 c.directory / 'production-plans' / 'broken.json',
                 c.directory / 'exports' / 'old' / 'export.json']
    for path in old_files:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text('{broken', encoding='utf-8')
    node = c.generation.canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image',
        'assetId': c.reference['id']}, c.session)
    with TestClient(create_app(c.store, generation_provider=c.provider), headers={
        'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}) as client:
        assert client.get(f'/api/projects/{c.owner}/canvas/nodes/{node["id"]}/versions').status_code == 200
        assert client.get(f'/api/projects/{c.owner}/assets/usage').status_code == 200
    c.store.release(c.session)
    moved = c.store.rename(c.owner, '改名后', c.store.list_projects()['projects'][0]['name'])
    for path in old_files:
        assert (Path(moved['path']) / path.relative_to(c.directory)).read_text() == '{broken'


def test_active_canvas_task_still_blocks_rename(tmp_path):
    c = context(tmp_path)
    node = c.generation.canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image'}, c.session)
    task, _, _ = c.generation._prepare(c.owner, node['id'], {'id': str(uuid4()), 'expectedRevision': node['revision'],
        'modelConfigId': c.models['image'], 'inputs': {'prompt': '生成图片'}}, c.session)
    c.store.release(c.session)
    with pytest.raises(ProjectError, match='仍在生成资产'):
        c.store.rename(c.owner, '改名后', c.store.list_projects()['projects'][0]['name'])
    task['status'] = 'cancelled'
    write_json(c.directory / 'tasks' / f'{task["id"]}.json', task)
    assert c.store.rename(c.owner, '改名后', c.store.list_projects()['projects'][0]['name'])['name'] == '改名后'


def test_provider_error_remains_persisted_and_visible_without_production(tmp_path):
    c = context(tmp_path)
    secret = 'private-key-never-record'
    c.generation.configs.save('image', 'https://ark.test', 'image', secret, c.models['image'])
    requests = []
    def handle(request):
        requests.append(request)
        return httpx.Response(400, json={'error': {'code': 'InputImageSensitiveContentDetected.PrivacyInformation',
            'message': f'reference rejected {secret} https://cdn.test/output?signature=secret-signature'}},
            headers={'X-Request-Id': 'original-request-123'})
    provider = VolcengineGeneration(c.store, httpx.MockTransport(handle))
    with TestClient(create_app(c.store, generation_provider=provider), headers={
        'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}) as client:
        root = f'/api/projects/{c.owner}/canvas'
        node = client.post(root + '/nodes', json={'id': str(uuid4()), 'kind': 'image'}).json()
        response = client.post(root + f'/nodes/{node["id"]}/generate', json={
            'id': str(uuid4()), 'expectedRevision': node['revision'],
            'modelConfigId': c.models['image'], 'inputs': {'prompt': '参考图片'}})
        assert response.status_code == 200, response.text
        for _ in range(200):
            snapshot = client.get(root)
            receipt = snapshot.json()['tasks'][0]
            if receipt['status'] not in {'queued', 'running'}:
                break
            time.sleep(.01)
        assert receipt['status'] == 'failed' and len(requests) == 1
        assert receipt['errorDetails']['category'] == 'reference'
        assert receipt['errorDetails']['requestId'] == 'original-request-123'
        assert not snapshot.json()['assets'] or all(a['source'] != 'generated' for a in snapshot.json()['assets'])
        saved = (c.directory / 'tasks' / f'{receipt["id"]}.json').read_text()
        assert secret not in snapshot.text + saved and 'secret-signature' not in snapshot.text + saved
