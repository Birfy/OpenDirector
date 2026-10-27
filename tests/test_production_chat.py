import asyncio
from copy import deepcopy
from pathlib import Path
from uuid import uuid4
import time

import pytest
from fastapi.testclient import TestClient

from museshow.application.generation import Generation
from museshow.application.production import Production
from museshow.application.production_chat import ProductionChat
from museshow.application.production_status import project_progress
from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import LocalProjects, read_json, write_json
from museshow.infrastructure.model_configs import ModelConfigs
from museshow_api.main import create_app


@pytest.fixture
def feedback(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    project = store.create('制作对话', str(uuid4()), session)
    plan = {'id': str(uuid4()), 'title': '测试制作', 'status': 'running', 'error': None,
            'scriptAssetId': None,
            'shots': [{'id': str(uuid4())}], 'steps': [{'id': str(uuid4()), 'shot': 1,
                'title': '首镜视频', 'status': 'submitted', 'taskId': str(uuid4()),
                'task': {'id': str(uuid4()), 'status': 'running', 'error': None, 'errorDetails': None}}]}
    plan['steps'][0]['shotId'] = plan['shots'][0]['id']
    class Production:
        def __init__(self):
            self.store = store
            self.generation = Generation(store, ModelConfigs(tmp_path))
            self.plans = [plan]
            self.calls = []
            self.gate = asyncio.Event()
            self.gate.set()
            self.failure = None
        def list(self, owner): return deepcopy(self.plans)
        def view(self, owner, value): return deepcopy(value)
        def progress(self, owner, plans=None): return project_progress(self, owner, plans)
        async def stop(self, owner, plan_id, session, cancel_tasks=False):
            self.calls.append('cancel' if cancel_tasks else 'stop')
            await self.gate.wait()
            if self.failure: raise self.failure
            plan['status'] = 'stopped'
            if cancel_tasks: plan['steps'][0]['task']['status'] = 'cancelled'
            return deepcopy(plan)
        async def resume(self, owner, plan_id, session):
            self.calls.append('resume')
            await self.gate.wait()
            if self.failure: raise self.failure
            plan.update(status='running', error=None)
            return deepcopy(plan)
    production = Production()
    chat = ProductionChat(store, production)
    return store, session, project, plan, production, chat


def operation(message, kind='cancel'):
    return {'id': str(uuid4()), 'messageId': message['id'], 'action': kind}


def test_progress_updates_one_message_terminal_changes_append_without_poll_duplicates(feedback):
    store, session, project, plan, production, chat = feedback
    owner = project['id']
    conversation_path = Path(project['path']) / 'conversation.json'
    original = conversation_path.read_bytes()
    first = chat.read(owner)
    path = Path(project['path']) / 'production-chat.json'
    initial_bytes = path.read_bytes()
    assert chat.read(owner) == first and path.read_bytes() == initial_bytes
    plan['steps'][0]['status'] = 'completed'
    progressed = chat.read(owner)
    assert len(progressed['messages']) == 1
    assert progressed['messages'][0]['id'] == first['messages'][0]['id']
    assert progressed['messages'][0]['snapshot']['completed'] == 1
    plan['status'] = 'succeeded'
    finished = chat.read(owner)
    assert len(finished['messages']) == 2
    assert finished['messages'][-1]['snapshot']['actions'] == []
    assert chat.read(owner) == finished
    assert conversation_path.read_bytes() == original
    assert ProductionChat(store, production).read(owner) == finished


def test_empty_project_does_not_create_feedback_file(feedback):
    _, _, project, _, production, chat = feedback
    production.plans = []
    assert chat.read(project['id']) == {'version': 1, 'messages': []}
    assert not (Path(project['path']) / 'production-chat.json').exists()


def test_explicit_refresh_provides_fresh_buttons_without_running_production(feedback):
    _, session, project, _, production, chat = feedback
    first = chat.read(project['id'])['messages'][-1]
    refreshed = chat.refresh(project['id'], session)
    assert len(refreshed['messages']) == 2
    assert refreshed['messages'][-1]['id'] != first['id']
    assert '未重新提交生成' in refreshed['messages'][-1]['text']
    assert chat.read(project['id']) == refreshed
    async def run():
        with pytest.raises(ProjectError, match='已失效'):
            await chat.act(project['id'], operation(first), session)
        assert production.calls == []
    asyncio.run(run())


def test_action_consumes_buttons_is_idempotent_and_persists_cancel_result(feedback):
    store, session, project, _, production, chat = feedback
    owner = project['id']
    first = chat.read(owner)['messages'][0]
    request = operation(first)
    async def run():
        production.gate.clear()
        accepted = await chat.act(owner, request, session)
        assert [item['role'] for item in accepted['messages']] == ['assistant', 'user', 'assistant']
        assert accepted['messages'][-1]['pending']
        assert chat.read(owner)['messages'][-1]['pending']
        assert await chat.act(owner, request, session) == accepted
        with pytest.raises(ProjectError, match='已失效'):
            await chat.act(owner, operation(first), session)
        with pytest.raises(ProjectError, match='标识已使用'):
            await chat.act(owner, {**request, 'action': 'stop'}, session)
        production.gate.set()
        await chat.close()
        result = chat.read(owner)
        assert len(result['messages']) == 3 and not result['messages'][-1]['pending']
        assert '本地生成已取消' in result['messages'][-1]['snapshot']['text']
        assert result['messages'][-1]['snapshot']['actions'] == ['resume']
        assert production.calls == ['cancel']
        assert ProductionChat(store, production).read(owner) == result
        await chat.act(owner, request, session)
        assert production.calls == ['cancel']
    asyncio.run(run())


@pytest.mark.parametrize('failure', [ProjectError('镜头已被移除，请重新规划。', 409), RuntimeError('secret-provider-body')])
def test_action_failure_is_a_new_reply_with_safe_error_and_fresh_buttons(feedback, failure):
    _, session, project, plan, production, chat = feedback
    plan['status'] = 'blocked'
    plan['steps'][0]['task']['status'] = 'failed'
    production.failure = failure
    async def run():
        first = chat.read(project['id'])['messages'][0]
        await chat.act(project['id'], operation(first, 'resume'), session)
        await chat.close()
        result = chat.read(project['id'])
        assert len(result['messages']) == 3
        reply = result['messages'][-1]
        assert reply['error'] and not reply['pending']
        assert reply['snapshot']['actions'] == ['resume']
        assert reply['id'] != first['id']
        assert 'secret-provider-body' not in str(result)
        assert production.calls == ['resume']
    asyncio.run(run())


def test_state_changes_and_new_plans_reject_unpolled_old_buttons(feedback):
    _, session, project, plan, production, chat = feedback
    first = chat.read(project['id'])['messages'][0]
    plan['status'] = 'blocked'
    plan['error'] = '参考图被拒绝'
    plan['steps'][0]['task'].update(status='failed', error='参考图被拒绝')
    async def run():
        with pytest.raises(ProjectError, match='已失效'):
            await chat.act(project['id'], operation(first), session)
        latest = chat.read(project['id'])['messages'][-1]
        assert latest['snapshot']['actions'] == ['resume']
        production.plans = [{**deepcopy(plan), 'id': str(uuid4())}]
        with pytest.raises(ProjectError, match='已失效'):
            await chat.act(project['id'], operation(latest, 'resume'), session)
        assert production.calls == []
    asyncio.run(run())


def test_restart_observes_pending_action_without_replaying_it_and_keeps_chat_anchor(feedback):
    store, session, project, _, production, chat = feedback
    directory = Path(project['path'])
    conversation = read_json(directory / 'conversation.json')
    anchor = str(uuid4())
    conversation['messages'] = [{'id': anchor, 'role': 'assistant', 'text': '开始制作', 'status': 'complete',
                                  'assets': [], 'model': 'agent', 'thinking': 'auto', 'source': 'model'}]
    write_json(directory / 'conversation.json', conversation)
    async def run():
        production.gate.clear()
        first = chat.read(project['id'])['messages'][0]
        assert first['afterMessageId'] == anchor
        accepted = await chat.act(project['id'], operation(first), session)
        job = chat.jobs[accepted['messages'][-1]['id']]
        job.cancel()
        await asyncio.gather(job, return_exceptions=True)
        result = ProductionChat(store, production).read(project['id'])
        assert not result['messages'][-1]['pending']
        assert '需要核对' in result['messages'][-1]['text']
        assert production.calls == []
        assert all(item['afterMessageId'] == anchor for item in result['messages'])
        assert read_json(directory / 'conversation.json') == conversation
    asyncio.run(run())


def test_api_records_action_and_rejects_old_buttons_without_duplicate_generation(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    project = store.create('制作消息 API', str(uuid4()), session)
    config = ModelConfigs(tmp_path).save('image', 'https://example.test', 'image', 'private')
    class Provider:
        def __init__(self): self.calls = []
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            self.calls.append(task['id'])
            raise ProjectError('测试参考素材被拒绝。', 400)
    provider = Provider()
    generation = Generation(store, ModelConfigs(tmp_path), provider)
    manager = Production(store, generation)
    plan, _ = manager._prepare(project['id'], str(uuid4()), {'title': '消息测试', 'shots': [
        {'title': '首镜', 'imagePrompt': '角色'}]}, {'image': config['id']}, session)
    plan['status'] = 'blocked'
    manager._save(project['id'], plan)
    base = f'/api/projects/{project["id"]}/production-chat'
    with TestClient(create_app(store, generation_provider=provider), headers={
            'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}) as client:
        initial = client.get(base).json()
        request = operation(initial['messages'][-1], 'resume')
        response = client.post(base + '/actions', json=request)
        assert response.status_code == 202
        assert response.json()['messages'][-1]['pending']
        for _ in range(200):
            result = client.get(base).json()
            if not result['messages'][-1]['pending'] and result['messages'][-1]['snapshot']['status'] == 'blocked':
                break
            time.sleep(.01)
        assert any('测试参考素材被拒绝' in item.get('snapshot', {}).get('text', '') for item in result['messages'])
        assert len(provider.calls) == 1
        assert client.post(base + '/actions', json=request).status_code == 202
        assert client.post(base + '/actions', json=operation(initial['messages'][-1], 'resume')).status_code == 409
        refreshed = client.post(base + '/refresh')
        assert refreshed.status_code == 200
        assert '未重新提交生成' in refreshed.json()['messages'][-1]['text']
        assert len(provider.calls) == 1
        assert client.get(f'/api/data/{project["id"]}/conversation').status_code == 200
        path = Path(project['path']) / 'production-plans' / (plan['id'] + '.json')
        assert all('task' not in step for step in read_json(path)['steps'])
