import asyncio
import base64
import io
import json
import os
from pathlib import Path
import shutil
import subprocess
from uuid import UUID, uuid4, uuid5

import httpx
from PIL import Image
import pytest
from fastapi.testclient import TestClient

from museshow.application.generation import Generation
from museshow.infrastructure.generation_results import GenerationResults
from museshow.infrastructure.local_projects import LocalProjects, write_json
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.volcengine import VolcengineGeneration
from museshow_api.main import create_app


def png():
    stream = io.BytesIO()
    Image.new('RGB', (16, 12)).save(stream, 'PNG')
    return stream.getvalue()


@pytest.fixture
def context(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    project = store.create('恢复核对', str(uuid4()), session)
    return store, session, project, ModelConfigs(tmp_path)


@pytest.fixture
def video(tmp_path):
    if not shutil.which('ffmpeg'):
        pytest.skip('media fixture requires ffmpeg')
    path = tmp_path / 'fixture.mp4'
    subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=32x24:d=0.2',
                    '-pix_fmt', 'yuv420p', str(path)], check=True)
    return path.read_bytes()


def prepared(generation, project, session, config, kind='image'):
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)
    return generation._prepare(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
        'modelConfigId': config['id'], 'inputs': {'prompt': '制作测试素材'}}, session)


async def settled(generation):
    await asyncio.gather(*(job.future for job in list(generation.jobs.values())))


@pytest.mark.parametrize('kind', ['image', 'video', 'audio', 'text'])
def test_unknown_submission_is_never_reposted_on_restart_or_manual_recovery(context, kind):
    store, session, project, configs = context
    config = configs.save('agent' if kind == 'text' else kind, 'https://ark.test', 'seed-tts-2.0' if kind == 'audio' else kind, 'private')
    requests = []
    def handle(request):
        requests.append(request)
        raise httpx.ReadTimeout('connection lost after submission', request=request)
    provider = VolcengineGeneration(store, httpx.MockTransport(handle), retry_delays=(0, 0))
    async def run():
        first = Generation(store, configs, provider)
        task, pinned, private = prepared(first, project, session, config, kind)
        first._launch(task, pinned, private)
        await settled(first)
        task_id = task['id']
        assert first.canvas.snapshot(project['id'])['tasks'][0]['recovery'] == 'review'
        await first.close()
        restarted = Generation(store, configs, provider)
        await restarted.start()
        for _ in range(2):
            receipt = await restarted.recover(project['id'], task_id, session)
            assert receipt['id'] == task_id and receipt['recovery'] == 'review'
            assert receipt['status'] == 'interrupted' and not receipt['resumeAllowed']
        assert len(requests) == 1 and requests[0].method == 'POST'
        assert restarted.canvas.snapshot(project['id'])['assets'] == []
        await restarted.close()
    asyncio.run(run())


def test_known_video_requeries_same_id_after_exhausted_poll_retries(context, video):
    store, session, project, configs = context
    config = configs.save('video', 'https://ark.test', 'video', 'private')
    calls, healthy = [], False
    def handle(request):
        calls.append(request)
        if request.method == 'POST': return httpx.Response(200, json={'id': 'known-task'})
        if request.url.host == 'cdn.test': return httpx.Response(200, content=video)
        if not healthy: return httpx.Response(503, json={'error': {'code': 'InternalError'}})
        assert request.url.path.endswith('/known-task')
        return httpx.Response(200, json={'status': 'succeeded', 'content': {'video_url': 'https://cdn.test/result'}})
    provider = VolcengineGeneration(store, httpx.MockTransport(handle), poll_interval=0, retry_delays=(0, 0))
    async def run():
        nonlocal healthy
        generation = Generation(store, configs, provider)
        task, pinned, private = prepared(generation, project, session, config, 'video')
        generation._launch(task, pinned, private)
        await settled(generation)
        receipt = generation.canvas.snapshot(project['id'])['tasks'][0]
        assert receipt['externalTaskId'] == 'known-task' and receipt['recovery'] == 'remote'
        assert sum(call.method == 'POST' for call in calls) == 1
        assert sum(call.method == 'GET' for call in calls) == 3
        await generation.close()
        healthy = True
        restarted = Generation(store, configs, provider)
        await restarted.start()
        await asyncio.gather(*(restarted.recover(project['id'], task['id'], session) for _ in range(2)))
        await settled(restarted)
        snapshot = restarted.canvas.snapshot(project['id'])
        assert snapshot['tasks'][0]['status'] == 'succeeded' and snapshot['tasks'][0]['adopted']
        assert len(snapshot['assets']) == 1
        assert snapshot['assets'][0]['id'] == str(uuid5(UUID(task['id']), 'output'))
        assert sum(call.method == 'POST' for call in calls) == 1
        assert len(calls) == 6  # POST, 3 failed GETs, one query, one download.
        await restarted.close()
    asyncio.run(run())


def test_image_download_recovers_from_private_locator_without_resubmitting(context):
    store, session, project, configs = context
    config = configs.save('image', 'https://ark.test', 'image', 'private')
    calls, healthy = [], False
    locator = 'https://cdn.test/result?signature=private-download-token'
    def handle(request):
        calls.append(request)
        if request.method == 'POST': return httpx.Response(200, json={'data': [{'url': locator}]})
        assert 'authorization' not in request.headers
        if not healthy: raise httpx.ReadTimeout('download failed', request=request)
        return httpx.Response(200, content=png())
    provider = VolcengineGeneration(store, httpx.MockTransport(handle), retry_delays=(0, 0))
    async def run():
        nonlocal healthy
        generation = Generation(store, configs, provider)
        task, pinned, private = prepared(generation, project, session, config)
        generation._launch(task, pinned, private)
        await settled(generation)
        snapshot = generation.canvas.snapshot(project['id'])
        assert snapshot['tasks'][0]['recovery'] == 'download'
        assert 'private-download-token' not in json.dumps(snapshot)
        cache = GenerationResults(pinned, task['id'])
        if os.name == 'posix': assert (cache.directory / 'result.json').stat().st_mode & 0o777 == 0o600
        await generation.close()
        # Local download recovery does not depend on the selected model remaining configured.
        configs.save('image', 'https://changed.test', 'different-image', 'changed', config['id'])
        healthy = True
        restarted = Generation(store, configs, provider)
        await restarted.start()
        await settled(restarted)
        snapshot = restarted.canvas.snapshot(project['id'])
        assert len(snapshot['assets']) == 1 and snapshot['tasks'][0]['status'] == 'succeeded'
        assert sum(call.method == 'POST' for call in calls) == 1 and len(calls) == 5
        assert not cache.directory.exists()
        await restarted.close()
    asyncio.run(run())


@pytest.mark.parametrize('failure', ['save', 'before_attach', 'after_attach', 'receipt'])
def test_saved_results_recover_locally_without_duplicate_assets_or_adoption(context, monkeypatch, failure):
    store, session, project, configs = context
    config = configs.save('image', 'https://unused.test', 'image', 'private')
    class Provider:
        calls = 0
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            self.calls += 1
            return 'png', png()
    provider = Provider()
    async def run():
        generation = Generation(store, configs, provider)
        task, pinned, private = prepared(generation, project, session, config)
        with monkeypatch.context() as patch:
            if failure == 'save':
                def broken(*args, **kwargs): raise OSError('disk save failed')
                patch.setattr(generation.canvas.assets, 'import_file', broken)
            elif failure in {'before_attach', 'after_attach'}:
                attach = generation.canvas.attach
                def broken(*args, **kwargs):
                    if failure == 'after_attach': attach(*args, **kwargs)
                    raise OSError('attach interrupted')
                patch.setattr(generation.canvas, 'attach', broken)
            else:
                save = generation.canvas.task_write
                def broken(owner, value, directory):
                    if value['status'] == 'succeeded': raise OSError('receipt interrupted')
                    return save(owner, value, directory)
                patch.setattr(generation.canvas, 'task_write', broken)
            generation._launch(task, pinned, private)
            await settled(generation)
        before = generation.canvas.snapshot(project['id'])
        node_revision = next(node['revision'] for node in before['canvas']['nodes'] if node['id'] == task['nodeId'])
        await generation.close()
        restarted = Generation(store, configs, provider)
        await restarted.start()
        await settled(restarted)
        snapshot = restarted.canvas.snapshot(project['id'])
        assert snapshot['tasks'][0]['status'] == 'succeeded' and snapshot['tasks'][0]['adopted']
        assert len(snapshot['assets']) == 1 and provider.calls == 1
        node = next(node for node in snapshot['canvas']['nodes'] if node['id'] == task['nodeId'])
        assert node['assetIds'] == [snapshot['assets'][0]['id']]
        if failure in {'after_attach', 'receipt'}: assert node['revision'] == node_revision
        await restarted.recover(project['id'], task['id'], session)
        assert restarted.canvas.snapshot(project['id']) == snapshot
        await restarted.close()
    asyncio.run(run())


def test_proven_unsubmitted_queue_runs_once_but_legacy_unknown_state_does_not(context):
    store, session, project, configs = context
    config = configs.save('image', 'https://ark.test', 'image', 'private')
    calls = []
    def handle(request):
        calls.append(request)
        return httpx.Response(200, json={'data': [{'b64_json': base64.b64encode(png()).decode()}]})
    provider = VolcengineGeneration(store, httpx.MockTransport(handle))
    async def run():
        generation = Generation(store, configs, provider)
        task, _, _ = prepared(generation, project, session, config)
        legacy, pinned, _ = prepared(generation, project, session, config)
        for key in ('phase', 'recovery', 'schemaVersion'): legacy.pop(key)
        legacy['status'] = 'running'
        write_json(Path(pinned) / 'tasks' / (legacy['id'] + '.json'), legacy)
        await generation.start()
        await settled(generation)
        tasks = {item['id']: item for item in generation.canvas.snapshot(project['id'])['tasks']}
        assert tasks[task['id']]['status'] == 'succeeded'
        assert tasks[legacy['id']]['recovery'] == 'review' and not tasks[legacy['id']]['resumeAllowed']
        assert len(calls) == 1
        await generation.close()
    asyncio.run(run())


def test_temporary_query_and_download_failures_retry_reads_only(context, video):
    store, session, project, configs = context
    config = configs.save('video', 'https://ark.test', 'video', 'private')
    counts = {'submit': 0, 'poll': 0, 'download': 0}
    def handle(request):
        stage = 'submit' if request.method == 'POST' else 'download' if request.url.host == 'cdn.test' else 'poll'
        counts[stage] += 1
        if stage == 'submit': return httpx.Response(200, json={'id': 'same-task'})
        if counts[stage] == 1: return httpx.Response(503)
        if stage == 'poll': return httpx.Response(200, json={'status': 'succeeded', 'content': {'video_url': 'https://cdn.test/result'}})
        return httpx.Response(200, content=video)
    provider = VolcengineGeneration(store, httpx.MockTransport(handle), retry_delays=(0, 0))
    async def run():
        generation = Generation(store, configs, provider)
        task, pinned, private = prepared(generation, project, session, config, 'video')
        generation._launch(task, pinned, private)
        await settled(generation)
        assert generation.canvas.snapshot(project['id'])['tasks'][0]['status'] == 'succeeded'
        assert counts == {'submit': 1, 'poll': 2, 'download': 2}
        await generation.close()
    asyncio.run(run())


def test_recovery_api_checks_session_and_keeps_unknown_request_read_only(context):
    store, session, project, configs = context
    config = configs.save('image', 'https://unused.test', 'image', 'private')
    class Provider:
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            raise AssertionError('A request with unknown submission must not be repeated')
    provider = Provider()
    generation = Generation(store, configs, provider)
    task, pinned, _ = prepared(generation, project, session, config)
    task.update(status='interrupted', phase='submit')
    generation.canvas.task_write(project['id'], task, pinned)
    url = f'/api/projects/{project["id"]}/tasks/{task["id"]}/recover'
    with TestClient(create_app(store, generation_provider=provider), headers={
            'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}) as client:
        assert client.post(url, headers={'X-MuseShow-Session': str(uuid4())}).status_code == 409
        for _ in range(2):
            response = client.post(url)
            assert response.status_code == 200
            assert response.json()['id'] == task['id'] and response.json()['recovery'] == 'review'
        snapshot = client.get(f'/api/projects/{project["id"]}/canvas').json()
        assert snapshot['assets'] == [] and len(snapshot['tasks']) == 1
