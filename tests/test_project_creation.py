import asyncio
import json
from pathlib import Path
from uuid import uuid4

from fastapi.testclient import TestClient
import httpx
import pytest

from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import LocalProjects, empty_conversation, read_json
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.chat_completions import ChatCompletions
from museshow_api.main import create_app
from museshow_api.models import ProjectFromMessage
from museshow_api.project_creation import ProjectCreation


def sse(delta=None, finish=None):
    return 'data: ' + json.dumps({'choices': [{'delta': delta or {}, 'finish_reason': finish}]}) + '\n\n'


def setup(tmp_path):
    store = LocalProjects(tmp_path)
    configs = ModelConfigs(tmp_path)
    config = configs.save('agent', 'https://api.deepseek.com', 'deepseek-flash', 'private-key')
    session = str(uuid4())
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}
    value = {**empty_conversation(), 'id': str(uuid4()), 'turnId': str(uuid4()), 'modelId': config['id'],
             'draft': '请为雨后江南小镇写一段开场剧本并保存到画布', 'thinking': 'high',
             'modelSelections': {'agent': config['id'], 'image': None}}
    value.pop('messages')
    return store, configs, session, headers, value


def test_first_message_keeps_references_and_runs_project_tools_once(tmp_path):
    store, _, session, headers, value = setup(tmp_path)
    asset_id = str(uuid4())
    metadata = {'name': 'reference.md', 'type': 'text/markdown', 'fingerprint': 'source'}
    store.save_asset('scratch', asset_id, metadata, b'reference notes', session)
    value['assets'] = [{**metadata, 'id': asset_id, 'size': 15}]
    calls = []

    def handler(request):
        payload = json.loads(request.content)
        calls.append(payload)
        if 'tools' not in payload:
            assert payload['thinking'] == {'type': 'disabled'}
            return httpx.Response(200, text=sse({'content': '“雨后/江南:小镇”'}) + sse(finish='stop'))
        if len(calls) == 2:
            tool = {'index': 0, 'id': 'write-script', 'function': {'name': 'save_text_asset',
                    'arguments': json.dumps({'name': '开场.md', 'text': '# 雨后江南'})}}
            return httpx.Response(200, text=sse({'tool_calls': [tool]}) + sse(finish='tool_calls'))
        return httpx.Response(200, text=sse({'content': '剧本已放到画布。'}) + sse(finish='stop'))

    provider = ChatCompletions(httpx.MockTransport(handler))
    with TestClient(create_app(store, provider), headers=headers) as client:
        response = client.post('/api/projects/from-message', json=value)
        assert response.status_code == 200
        project = response.json()
        assert project['name'] == '雨后 江南 小镇'
        saved = store.conversation(project['id'])
        assert saved == {key: item for key, item in value.items() if key not in {'id', 'turnId', 'modelId'}} | {'messages': []}
        assert store.asset(project['id'], asset_id)[0] == b'reference notes'
        assert store._inventory(store.state_dir / 'scratch') == {}
        assert client.post('/api/projects/from-message', json=value).json() == project
        assert len(calls) == 1
        turn = {'id': value['turnId'], 'modelId': value['modelId'], 'text': saved['draft'],
                'assets': [asset_id], 'thinking': saved['thinking'], 'modelSelections': saved['modelSelections']}
        response = client.post(f'/api/data/{project["id"]}/chat', json=turn)
        assert '剧本已放到画布。' in response.text and '"error": null' in response.text
        assert calls[1]['reasoning_effort'] == 'max'
        assert calls[1]['messages'][-1]['content'][1]['text'].endswith('reference notes')
        canvas = client.get(f'/api/projects/{project["id"]}/canvas').json()
        assert any(asset['name'] == '开场.md' for asset in canvas['assets'])
        before = store.conversation(project['id'])
        assert client.post('/api/projects/from-message', json=value).json() == project
        assert client.post(f'/api/data/{project["id"]}/chat', json=turn).status_code == 409
        assert store.conversation(project['id']) == before
        assert len(calls) == 3
        assert 'private-key' not in response.text


@pytest.mark.parametrize('failure', ['timeout', 'error', 'empty'])
def test_naming_failure_falls_back_without_losing_message(tmp_path, monkeypatch, failure):
    store, configs, session, _, value = setup(tmp_path)

    class Provider:
        async def stream(self, config, payload):
            if failure == 'timeout':
                await asyncio.Event().wait()
            if failure == 'error':
                raise ProjectError('供应商拒绝请求', 502)
            yield {'type': 'delta', 'text': ''}

    creation = ProjectCreation(store, configs, Provider())
    monkeypatch.setattr(creation, 'NAME_TIMEOUT', .02)
    result = asyncio.run(creation.create(ProjectFromMessage(**value), session))
    assert result['name'] == value['draft'][:28]
    assert store.conversation(result['id'])['draft'] == value['draft']


def test_attachment_only_and_conflicting_names_create_distinct_directories(tmp_path):
    store, _, session, headers, value = setup(tmp_path)
    store.create('新项目', str(uuid4()))

    class Provider:
        async def stream(self, config, payload):
            yield {'type': 'delta', 'text': 'CON'}  # A reserved Windows filename.

    with TestClient(create_app(store, Provider()), headers=headers) as client:
        first = client.post('/api/projects/from-message', json=value).json()
        assert first['name'] == '新项目 (2)'
        asset_id = str(uuid4())
        store.save_asset('scratch', asset_id, {'name': 'a.txt', 'type': 'text/plain', 'fingerprint': 'a'}, b'abc', session)
        attachment = {'id': asset_id, 'name': 'a.txt', 'type': 'text/plain', 'fingerprint': 'a', 'size': 3}
        second = client.post('/api/projects/from-message', json={**value, 'id': str(uuid4()), 'turnId': str(uuid4()), 'draft': '', 'assets': [attachment]}).json()
        assert second['name'].startswith('新项目 ')
        assert store.conversation(second['id'])['assets'] == [attachment]
        assert len(list(store.root.iterdir())) == 3


def test_invalid_input_and_old_scratch_chat_do_not_create_project(tmp_path):
    store, _, _, headers, value = setup(tmp_path)

    class Provider:
        async def stream(self, config, payload):
            pytest.fail('Invalid input must never call the paid model')
            yield

    with TestClient(create_app(store, Provider()), headers=headers) as client:
        assert client.post('/api/projects/from-message', json={**value, 'draft': '  '}).status_code == 400
        assert client.post('/api/projects/from-message', json={**value, 'modelId': str(uuid4())}).status_code == 409
        missing = {'id': str(uuid4()), 'name': 'missing.txt', 'type': 'text/plain', 'size': 1, 'fingerprint': 'missing'}
        assert client.post('/api/projects/from-message', json={**value, 'assets': [missing]}).status_code == 404
        assert client.get('/api/data/scratch/conversation').status_code == 422
        assert client.post('/api/data/scratch/chat', json={'id': value['turnId'], 'modelId': value['modelId'], 'text': '你好'}).status_code == 422
        assert not store.root.exists()


def test_creation_rollback_keeps_staged_files_for_retry(tmp_path, monkeypatch):
    from museshow.infrastructure import local_projects
    store, configs, session, _, value = setup(tmp_path)
    asset_id = str(uuid4())
    metadata = {'name': 'a.txt', 'type': 'text/plain', 'fingerprint': 'a'}
    store.save_asset('scratch', asset_id, metadata, b'abc', session)
    value['assets'] = [{**metadata, 'id': asset_id, 'size': 3}]
    original = local_projects.write_json

    def fail(path, content):
        if path.name == 'conversation.json':
            raise OSError('disk full')
        original(path, content)

    class Provider:
        async def stream(self, config, payload):
            yield {'type': 'delta', 'text': '重试项目'}

    creation = ProjectCreation(store, configs, Provider())
    monkeypatch.setattr(local_projects, 'write_json', fail)
    with pytest.raises(OSError):
        asyncio.run(creation.create(ProjectFromMessage(**value), session))
    assert list(store.root.iterdir()) == []
    assert store.asset('scratch', asset_id)[0] == b'abc'
    monkeypatch.setattr(local_projects, 'write_json', original)
    project = asyncio.run(creation.create(ProjectFromMessage(**value), session))
    assert store.asset(project['id'], asset_id)[0] == b'abc'
    assert len(list(store.root.iterdir())) == 1


def test_concurrent_creation_uses_one_naming_request(tmp_path):
    store, configs, session, _, value = setup(tmp_path)
    calls = []

    async def run():
        started, release = asyncio.Event(), asyncio.Event()

        class Provider:
            async def stream(self, config, payload):
                calls.append(payload)
                started.set()
                await release.wait()
                yield {'type': 'delta', 'text': '同一个项目'}

        creation = ProjectCreation(store, configs, Provider())
        request = ProjectFromMessage(**value)
        first = asyncio.create_task(creation.create(request, session))
        await started.wait()
        with pytest.raises(ProjectError, match='正在创建'):
            await creation.create(request, session)
        release.set()
        project = await first
        assert await creation.create(request, session) == project
        assert len(calls) == 1

    asyncio.run(run())


def test_restart_discards_only_legacy_scratch_history(tmp_path):
    store = LocalProjects(tmp_path)
    scratch = store.state_dir / 'scratch'
    scratch.mkdir()
    (scratch / 'conversation.json').write_text('{"messages":["旧对话"]}')
    (scratch / 'keep.txt').write_text('staged data')
    project = store.create('保留项目', str(uuid4()))
    before = read_json(Path(project['path']) / 'conversation.json')
    LocalProjects(tmp_path)
    assert not (scratch / 'conversation.json').exists()
    assert (scratch / 'keep.txt').read_text() == 'staged data'
    assert store.conversation(project['id']) == before
