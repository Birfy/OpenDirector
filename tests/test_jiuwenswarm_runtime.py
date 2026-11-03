"""Real child pipes and authoritative project writes; model execution is simulated."""
import asyncio
import json
import os
from pathlib import Path
import sys
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from opendirector.agent import jiuwenswarm as swarm
from opendirector.agent.catalog import model_choices
from opendirector.agent.context import RunContext
from opendirector.agent.runtime import AgentRuntimes, runtime_readiness
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.creation_projects import CreationProjects
from opendirector.infrastructure.local_projects import LocalProjects
from opendirector.infrastructure.model_configs import ModelConfigs
from opendirector_api.main import create_app

FAKE = r'''
import json, os, sys
from pathlib import Path
request = json.loads(sys.stdin.readline())
request_id = request['request_id']
session = None
sequence = 0
mode = os.getenv('SWARM_TEST_MODE', 'success')
def emit(kind, **fields):
 global sequence
 record = dict(schema_version='0.1', type=kind, request_id=request_id,
               session_id=session, sequence=sequence, **fields)
 if mode == 'sequence': record['sequence'] += 1
 if mode == 'request': record['request_id'] = 'foreign'
 print(json.dumps(record), flush=True)
 sequence += 1
if request['type'] == 'query':
 operation = request['operation']
 data = dict(schema_version='0.1', features={name: True for name in
     ('host_tools', 'cancel', 'stable_event_fields', 'custom_agent')}) if operation == 'protocol.capabilities' else dict(models=[
     dict(selection_key='local-model#0', display_name='Local model', is_default=True)])
 if mode == 'unsupported': data['features'] = {}
 if mode == 'malformed_features': data['features'] = []
 if mode == 'unconfigured' and operation == 'model.list': data['models'] = []
 if mode == 'query_failed' and operation == 'model.list':
  emit('query_result', operation=operation, status='failed', exit_code=1, error=dict(code='RUNTIME_FAILED'))
  raise SystemExit(1)
 emit('query_result', operation=operation, status='completed', exit_code=0, data=data, error=None)
 raise SystemExit()
assert '--run-jsonl' in sys.argv
assert request['model'] == 'local-model#0'
assert request['agent']['tools'][:4] == ['read_project', 'read', 'command_schema', 'execute_command']
assert {'skill_tool', 'bash', 'read_file', 'write_file'} <= set(request['agent']['tools'])
assert request['workspace']['cwd'] == str(Path.cwd())
assert request['skills'] == [] and request['mcp'] == []
assert 'thinking' not in request
session = 'owned-session'
emit('event', event_type='run.started', payload={})
emit('event', event_type='future.observation', payload=['unknown payload'])
if mode == 'native':
 for kind, status in [('chat.tool_call', 'started'), ('chat.tool_result', 'failed')]:
  emit('event', event_type=kind, payload={'tool':dict(call_id='native-check', name='bash', arguments={'command':'false'}, status=status, result={'success':False, 'error':'test failure'})})
if mode == 'cancel':
 Path(os.environ['SWARM_STARTED']).write_text(str(os.getpid()))
 control = json.loads(sys.stdin.readline())
 assert control == dict(schema_version='0.1', type='cancel', request_id=request_id)
 Path(os.environ['SWARM_CANCELLED']).write_text('cancelled')
 emit('result', status='cancelled', exit_code=130, error={'code':'CANCELLED'})
 raise SystemExit(130)
if mode == 'interaction':
 emit('event', event_type='interaction.requested', payload={'interaction_id':'permission'})
 control = json.loads(sys.stdin.readline())
 assert control['type'] == 'cancel'
 raise SystemExit(130)
arguments = dict(type='asset.writeText', payload=dict(name='swarm.md', text='Saved through shared tools'))
for index in range(2):
 emit('event', event_type='host_tool.requested', payload=dict(call_id='write-once', name='execute_command', arguments=arguments))
 if mode == 'pending':
  control = json.loads(sys.stdin.readline())
  assert control['type'] == 'cancel'
  Path(os.environ['SWARM_CANCELLED']).write_text('cancelled')
  emit('result', status='cancelled', exit_code=130, error={'code':'CANCELLED'})
  raise SystemExit(130)
 result = json.loads(sys.stdin.readline())
 assert result['session_id'] == session and result['request_id'] == request_id
 assert result['result']['status'] == 'applied'
 if index == 0: first = result
 else: assert result == first
if mode == 'conflict':
 arguments['payload']['text'] = 'Conflicting input'
 emit('event', event_type='host_tool.requested', payload=dict(call_id='write-once', name='execute_command', arguments=arguments))
 assert 'error' in json.loads(sys.stdin.readline())
emit('event', event_type='chat.delta', payload={'text':'Saved.'})
emit('event', event_type='chat.final', payload={'text':'Saved.'})
if mode == 'missing': raise SystemExit()
if mode == 'session': session = 'foreign-session'
code = 1 if mode == 'failed' else 0
emit('result', status='failed' if code else 'completed', exit_code=code,
     output='Saved.', error={'code':'TEST_FAILURE'} if code else None)
if mode == 'duplicate': emit('result', status='completed', exit_code=0, error=None)
raise SystemExit(1 if mode == 'exit' else code)
'''


@pytest.fixture
def cli(tmp_path, monkeypatch):
    from contextlib import nullcontext
    monkeypatch.setattr(swarm, 'execution_environment', lambda roots: nullcontext(None))
    import opendirector_api.agent as api_agent
    async def empty_skills(*args):
        return []
    monkeypatch.setattr(api_agent, 'skills', empty_skills)
    path = tmp_path / 'jiuwenswarm-process'
    path.write_text(f'#!{sys.executable}\n' + FAKE)
    path.chmod(0o755)
    monkeypatch.setattr(swarm, 'executable', lambda: str(path))
    return path


def test_native_tool_activity_and_host_deduplication(cli, tmp_path, monkeypatch):
    monkeypatch.setenv('SWARM_TEST_MODE', 'native')
    with TestClient(create_app(LocalProjects(tmp_path)), headers={'X-OpenDirector-Request': '1', 'X-OpenDirector-Session': str(uuid4())}) as client:
        root = create(client)
        final = events(client.post(root + '/assistant/turns', json=dict(id=str(uuid4()),
            runtime='jiuwenswarm', runtimeModel='local-model#0', text='Save a plan')))[-1]
        assert final['error'] is None
        activities = final['conversation']['messages'][-1]['tools']
        assert len(activities) == 2
        assert activities[0]['name'] == 'bash' and activities[0]['status'] == 'failed'
        assert 'test failure' in activities[0]['result']
        assert activities[1]['name'] == 'execute_command' and activities[1]['status'] == 'complete'


@pytest.mark.parametrize('payload', [{}, {'tool': {'name':'bash', 'call_id':'id', 'arguments':{}, 'status':'unknown'}},
    {'tool': {'name':'bash', 'call_id':'', 'arguments':{}, 'status':'started'}}])
def test_malformed_native_tool_activity(payload):
    with pytest.raises(ProjectError, match='协议'):
        swarm.native_tool_event('chat.tool_call', payload)


def test_host_tool_observations_do_not_duplicate_gateway_receipts():
    assert swarm.native_tool_event('chat.tool_call', {'tool':{'name':'execute_command'}}) is None


def test_native_completion_preserves_start_arguments():
    started = swarm.native_tool_event('chat.tool_call', {'tool':dict(name='bash', call_id='run',
        arguments='{"command":"ffprobe clip.mp4"}', status='started')})
    completed = swarm.native_tool_event('chat.tool_result', {'tool':dict(name='bash', call_id='run',
        arguments=None, status='completed', result='ok')}, started)
    assert completed['arguments'] == started['arguments'] == {'command':'ffprobe clip.mp4'}


def test_native_skill_library_uses_copies_and_cleans_private_config(tmp_path, monkeypatch):
    data = tmp_path / 'native'
    (data / 'config').mkdir(parents=True)
    (data / 'config/config.yaml').write_text('model: native-secret')
    (data / 'config/.env').write_text('MODEL_KEY=native-secret')
    skill = tmp_path / 'project/agent-runs/turn/work/.agents/skills/example'
    skill.mkdir(parents=True)
    (skill / 'SKILL.md').write_text('Skill snapshot')
    monkeypatch.setenv('JIUWENSWARM_DATA_DIR', str(data))
    with swarm.execution_environment([skill]) as env:
        private = Path(env['JIUWENSWARM_DATA_DIR'])
        assert not private.is_relative_to(tmp_path / 'project')
        assert (private / 'config/config.yaml').read_text() == 'model: native-secret'
        assert (private / 'config/config.yaml').stat().st_mode & 0o777 == 0o600
        mapped = private / 'agent/workspace/skills/example/SKILL.md'
        assert mapped.read_text() == 'Skill snapshot' and not mapped.is_symlink()
        mapped.write_text('Native local change')
    assert not private.exists()
    assert (skill / 'SKILL.md').read_text() == 'Skill snapshot'
    assert (data / 'config/config.yaml').read_text() == 'model: native-secret'
    assert not list((tmp_path / 'project').rglob('config.yaml'))


def test_local_engine_discovery_and_data_directory(tmp_path, monkeypatch):
    monkeypatch.delenv('OPENDIRECTOR_JIUWENSWARM_COMMAND', raising=False)
    monkeypatch.delenv('JIUWENSWARM_DATA_DIR', raising=False)
    monkeypatch.setattr(swarm, 'ROOT', tmp_path)
    monkeypatch.setattr(swarm.shutil, 'which', lambda _: None)
    local = tmp_path / '.toolchain/jiuwenswarm'
    cli = local / 'venv/bin/jiuwenswarm-process'
    cli.parent.mkdir(parents=True)
    cli.write_text('#!/bin/sh\n')
    cli.chmod(0o755)
    (local / 'run').write_text('legacy wrapper')
    (local / 'run').chmod(0o755)
    assert swarm.executable() == str(cli)
    assert swarm.data_directory(str(cli)) == local / 'data'


def create(client):
    pid = str(uuid4())
    root = '/api/creation/projects/' + pid
    assert client.post(root + '/commands', json=dict(type='project.create', projectId=pid,
        commandId=str(uuid4()), payload=dict(name='Swarm fixture'))).status_code == 200
    assert client.post(root + '/open').status_code == 200
    return root


def events(response):
    return [json.loads(line[6:]) for line in response.text.splitlines() if line.startswith('data: ')]


@pytest.mark.parametrize('mode', ['success', 'conflict', 'missing', 'session', 'duplicate', 'failed', 'exit'])
def test_shared_write_replay_provenance_and_failure_preserve_commits(cli, tmp_path, monkeypatch, mode):
    monkeypatch.setenv('SWARM_TEST_MODE', mode)
    local = LocalProjects(tmp_path)
    turn_id = str(uuid4())
    with TestClient(create_app(local), headers={'X-OpenDirector-Request': '1', 'X-OpenDirector-Session': str(uuid4())}) as client:
        root = create(client)
        response = client.post(root + '/assistant/turns', json=dict(id=turn_id,
            runtime='jiuwenswarm', runtimeModel='local-model#0', text='Save a plan'))
        assert response.status_code == 200, response.text
        stream = events(response)
        final = stream[-1]
        assert (final['error'] is None) == (mode in {'success', 'conflict'})
        assert final['conversation']['messages'][-1]['text'] == 'Saved.'
        snapshot = client.get(root).json()
        assert len(snapshot['assets']) == 1
        asset = snapshot['assets'][0]
        assert asset['provenance']['agentRuntime'] == 'jiuwenswarm'
        assert asset['provenance']['agentRunId'] == turn_id
        assert asset['provenance']['modelSnapshot'] is None
        assert (local.root / 'Swarm fixture' / asset['path']).read_text() == 'Saved through shared tools'
        assert client.get(root + '/changes').json()['events'][-1]['source'] == 'agent'
        activities = final['conversation']['messages'][-1]['tools']
        assert len(activities) == 1
        assert activities[0]['status'] == ('failed' if mode == 'conflict' else 'complete')


def test_catalog_readiness_and_early_rejection(cli, tmp_path, monkeypatch):
    assert asyncio.run(runtime_readiness('jiuwenswarm')) == 'ready'
    assert asyncio.run(model_choices('jiuwenswarm')) == [dict(id='local-model#0', label='Local model', efforts=[], isDefault=True)]
    monkeypatch.setenv('SWARM_TEST_MODE', 'unsupported')
    assert asyncio.run(runtime_readiness('jiuwenswarm')) == 'unsupported_version'
    monkeypatch.setenv('SWARM_TEST_MODE', 'malformed_features')
    assert asyncio.run(runtime_readiness('jiuwenswarm')) == 'unsupported_version'
    monkeypatch.setenv('SWARM_TEST_MODE', 'query_failed')
    assert asyncio.run(runtime_readiness('jiuwenswarm')) == 'unknown'
    with pytest.raises(ProjectError, match='查询失败') as error:
        asyncio.run(model_choices('jiuwenswarm'))
    assert error.value.code == 'runtime_query_failed'
    monkeypatch.setenv('SWARM_TEST_MODE', 'unconfigured')
    assert asyncio.run(runtime_readiness('jiuwenswarm')) == 'needs_configuration'
    with TestClient(create_app(LocalProjects(tmp_path)), headers={'X-OpenDirector-Request': '1', 'X-OpenDirector-Session': str(uuid4())}) as client:
        root = create(client)
        for options in [dict(skills=['character-replacement']), dict(thinking='high')]:
            response = client.post(root + '/assistant/turns', json=dict(id=str(uuid4()),
                runtime='jiuwenswarm', text='No write', **options))
            assert response.status_code == 409
        assert client.get(root + '/assistant').json()['messages'] == []
        draft = client.get(root + '/assistant').json()
        assert client.put(root + '/assistant/draft', json=dict(conversationId=draft['conversationId'],
            runtime='jiuwenswarm', harnessModels={'jiuwenswarm':'local-model#0'})).status_code == 200
        assert client.get(root + '/assistant').json()['harnessModels']['jiuwenswarm'] == 'local-model#0'


@pytest.mark.parametrize('mode', ['sequence', 'request'])
def test_malformed_query_identity_is_rejected(cli, monkeypatch, mode):
    monkeypatch.setenv('SWARM_TEST_MODE', mode)
    with pytest.raises(ProjectError, match='协议'):
        asyncio.run(swarm.query('protocol.capabilities'))


@pytest.mark.parametrize('mode', ['cancel', 'interaction'])
def test_stop_sends_protocol_cancel_and_collects_child(cli, tmp_path, monkeypatch, mode):
    started, cancelled = tmp_path / 'started', tmp_path / 'cancelled'
    monkeypatch.setenv('SWARM_TEST_MODE', mode)
    monkeypatch.setenv('SWARM_STARTED', str(started))
    monkeypatch.setenv('SWARM_CANCELLED', str(cancelled))
    runtimes = AgentRuntimes(CreationProjects(LocalProjects(tmp_path)), None, ModelConfigs(tmp_path))
    run = RunContext(runtime='jiuwenswarm', project_id=uuid4(), turn_id=uuid4(),
        session=str(uuid4()), directory=tmp_path, config=None, messages=[],
        selected_skills=[], runtime_model='local-model#0')
    async def consume():
        return [event async for event in runtimes.stream(run)]
    async def check():
        if mode == 'interaction':
            with pytest.raises(ProjectError, match='交互确认'):
                await consume()
            return
        task = asyncio.create_task(consume())
        async with asyncio.timeout(10):
            while not started.exists():
                await asyncio.sleep(.02)
        pid = int(started.read_text())
        task.cancel()
        with pytest.raises(asyncio.CancelledError):
            await task
        assert cancelled.read_text() == 'cancelled'
        with pytest.raises(ProcessLookupError):
            os.kill(pid, 0)
    asyncio.run(check())


def test_input_bounds_and_discovery(tmp_path, monkeypatch):
    with pytest.raises(ProjectError, match='1 MiB'):
        swarm.encode({'text': '字' * (1024 * 1024)})
    monkeypatch.setenv('OPENDIRECTOR_JIUWENSWARM_COMMAND', '/missing/swarm')
    assert swarm.executable() is None


def test_rejects_duplicate_keys_and_unfinished_lines():
    records = swarm.Records('test')
    for line in [b'{"sequence":0,"sequence":0}\n', b'{}', b'{"value":NaN}\n']:
        with pytest.raises(ProjectError):
            records.accept(line)


def test_cancel_waits_for_an_accepted_write_and_preserves_its_receipt(cli, tmp_path, monkeypatch):
    from opendirector.domain.creation.commands import parse_command
    monkeypatch.setenv('SWARM_TEST_MODE', 'pending')
    cancelled = tmp_path / 'cancelled'
    monkeypatch.setenv('SWARM_CANCELLED', str(cancelled))
    store = CreationProjects(LocalProjects(tmp_path))
    pid, session, turn = uuid4(), str(uuid4()), uuid4()
    assert store.execute(parse_command(dict(type='project.create', commandId=uuid4(), projectId=pid,
        payload=dict(name='Accepted write')))).status == 'applied'
    store.open(pid, session)
    runtimes = AgentRuntimes(store, None, ModelConfigs(tmp_path))
    original = runtimes.business.execute
    async def check():
        accepted, release = asyncio.Event(), asyncio.Event()
        async def delayed(*args, **kwargs):
            accepted.set()
            await release.wait()
            return await original(*args, **kwargs)
        monkeypatch.setattr(runtimes.business, 'execute', delayed)
        run = RunContext(runtime='jiuwenswarm', project_id=pid, turn_id=turn, session=session,
            directory=store.root / 'Accepted write', config=None, messages=[], selected_skills=[], runtime_model='local-model#0')
        async def consume():
            return [event async for event in runtimes.stream(run)]
        task = asyncio.create_task(consume())
        await asyncio.wait_for(accepted.wait(), 10)
        task.cancel()
        async with asyncio.timeout(10):
            while not cancelled.exists():
                await asyncio.sleep(.02)
        assert not task.done()
        release.set()
        with pytest.raises(asyncio.CancelledError):
            await task
    asyncio.run(check())
    assert len(store.snapshot(pid).assets) == 1
    assert store.snapshot(pid).assets[0].provenance.agentRuntime == 'jiuwenswarm'
