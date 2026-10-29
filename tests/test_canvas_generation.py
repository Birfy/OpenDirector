import asyncio
import base64
import io
import json
from pathlib import Path
import shutil
import subprocess
from uuid import uuid4

import httpx
from PIL import Image
import pytest

from museshow.application.generation import Generation
from museshow.domain.projects import ProjectError
from museshow.infrastructure.asset_catalog import AssetCatalog
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.local_projects import read_json, write_json
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.volcengine import VolcengineGeneration


def png():
    out = io.BytesIO()
    Image.new('RGB', (16, 12)).save(out, 'PNG')
    return out.getvalue()


@pytest.fixture
def project(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    value = store.create('画布测试', str(uuid4()), session)
    return store, value, session, CanvasProjects(store)


def node(canvas, project, session, kind='image'):
    return canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)


def test_canvas_versions_revision_and_remove_preserve_assets(project):
    store, value, session, canvas = project
    item = node(canvas, value, session, 'text')
    asset = canvas.save_text(value['id'], item['id'], str(uuid4()), '剧本', '剧本.md', session)
    item = canvas.snapshot(value['id'])['canvas']['nodes'][0]
    moved = canvas.patch(value['id'], item['id'], {'x': 150, 'expectedRevision': 1}, session)
    assert moved['revision'] == item['revision']
    before = canvas.snapshot(value['id'])['canvas']['revision']
    unchanged = {'prompt': moved['prompt'], 'x': moved['x'], 'expectedRevision': moved['revision']}
    assert canvas.patch(value['id'], item['id'], unchanged, session) == moved
    assert canvas.snapshot(value['id'])['canvas']['revision'] == before
    assert unchanged['expectedRevision'] == moved['revision']
    changed = canvas.patch(value['id'], item['id'], {'title': '新版', 'expectedRevision': item['revision']}, session)
    with pytest.raises(ProjectError, match='内容已变化'):
        canvas.patch(value['id'], item['id'], {'title': '旧版', 'expectedRevision': item['revision']}, session)
    second = canvas.assets.import_file(value['id'], str(uuid4()), '新版.md', b'new', session)
    assert canvas.attach(value['id'], item['id'], second['id'], session, expected_revision=item['revision']) is False
    current = canvas.snapshot(value['id'])['canvas']['nodes'][0]
    assert current['assetId'] == asset['id'] and current['revision'] == changed['revision']
    assert current['assetIds'] == [asset['id'], second['id']]
    with pytest.raises(ProjectError):
        canvas.assets.delete(value['id'], asset['id'], session)
    canvas.remove(value['id'], item['id'], session)
    assert canvas.snapshot(value['id'])['canvas']['nodes'] == []
    assert store.asset(value['id'], asset['id'])[0] == '剧本'.encode()
    restored = canvas.create(value['id'], {'id': str(uuid4()), 'kind': 'text', 'assetIds': [asset['id']], 'assetId': asset['id']}, session)
    assert restored['assetId'] == asset['id']


def test_legacy_projection_once_and_bad_canvas_is_preserved(project):
    store, value, session, canvas = project
    aid = str(uuid4())
    store.save_asset(value['id'], aid, {'name': 'old.txt', 'type': 'text/plain', 'fingerprint': aid}, b'old', session)
    state = canvas.snapshot(value['id'])['canvas']
    assert len(state['nodes']) == 1
    canvas.remove(value['id'], state['nodes'][0]['id'], session)
    store.remove_asset(value['id'], aid, session)
    assert store.asset(value['id'], aid)[0] == b'old'
    assert canvas.snapshot(value['id'])['canvas']['nodes'] == []
    path = Path(value['path']) / 'canvas.json'
    path.write_text('{"nodes":"broken"}')
    with pytest.raises(ProjectError):
        canvas.snapshot(value['id'])
    assert path.read_text() == '{"nodes":"broken"}'


@pytest.mark.parametrize('problem', [None, 'future_version', 'wrong_identity', 'invalid_json'])
def test_legacy_task_read_preserves_snapshot_and_rejects_invalid_receipts(project, problem):
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://ark.test/api/plan/v3', 'seedream', 'private')
    item = node(canvas, value, session)
    canvas.patch(value['id'], item['id'], {'prompt': '原始要求'}, session)
    manager = Generation(store, configs)
    request = {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': 2}
    task, _, _ = manager._prepare(value['id'], item['id'], request, session)
    path = Path(value['path']) / 'tasks' / (task['id'] + '.json')
    legacy = read_json(path)
    legacy.pop('schemaVersion')
    # Success without canvas selection is valid and does not imply a quality
    # review, storyboard adoption, or permission to replay generation.
    legacy.update(status='succeeded', adopted=False, assetId=str(uuid4()))
    if problem == 'future_version': legacy['schemaVersion'] = 2
    if problem == 'wrong_identity': legacy['id'] = str(uuid4())
    if problem == 'invalid_json': path.write_text('{broken', encoding='utf-8')
    else: write_json(path, legacy)
    before = path.read_bytes()
    if problem:
        with pytest.raises(ProjectError, match='原文件已保留'):
            canvas.snapshot(value['id'])
        with pytest.raises(ProjectError):
            manager._prepare(value['id'], item['id'], request, session)
        with pytest.raises(ProjectError):
            canvas.task_write(value['id'], task, value['path'])
    else:
        expected = {'schemaVersion': 1, **legacy}
        assert canvas.snapshot(value['id'])['tasks'] == [expected]
        assert canvas.snapshot(value['id'])['tasks'] == [expected]
        duplicate, _, config = manager._prepare(value['id'], item['id'], request, session)
        assert duplicate == expected and config is None and manager.jobs == {}
    assert path.read_bytes() == before


def test_background_generation_idempotence_stale_output_and_close(project):
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://ark.test/api/plan/v3', 'seedream', 'private')
    item = node(canvas, value, session)
    item = canvas.patch(value['id'], item['id'], {'prompt': '生成图片'}, session)

    class Provider:
        calls = 0
        def __init__(self): self.gate = asyncio.Event()
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            self.calls += 1
            await self.gate.wait()
            return 'png', png()

    async def run():
        nonlocal item
        provider = Provider()
        manager = Generation(store, configs, provider)
        request = {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision']}
        task = await manager.submit(value['id'], item['id'], request, session)
        await manager.submit(value['id'], item['id'], request, session)
        item = canvas.patch(value['id'], item['id'], {'prompt': '已修改', 'expectedRevision': item['revision']}, session)
        store.release(session)  # Accepted tasks outlive browser edit leases.
        provider.gate.set()
        await asyncio.gather(*(job.future for job in manager.jobs.values()))
        snapshot = canvas.snapshot(value['id'])
        assert provider.calls == 1
        assert snapshot['tasks'][0]['status'] == 'succeeded'
        assert snapshot['tasks'][0]['adopted'] is False
        assert snapshot['canvas']['nodes'][0]['assetId'] is None
        asset = snapshot['assets'][0]
        assert asset['generationTaskId'] == task['id'] and asset['modelConfigId'] == config['id']
        assert asset['source'] == 'generated'
        store.open(value['id'], session)
        queued = await manager.submit(value['id'], item['id'], {**request, 'id': str(uuid4()), 'expectedRevision': item['revision']}, session)
        await manager.close()
        assert next(t for t in canvas.snapshot(value['id'])['tasks'] if t['id'] == queued['id'])['status'] == 'interrupted'
    asyncio.run(run())


@pytest.mark.parametrize('watermark', [False, True])
def test_volc_plan_protocol_download_and_video_resume(project, watermark):
    store, value, _, _ = project
    calls = []
    def handle(request):
        calls.append(request)
        if request.url.host == 'cdn.test':
            assert 'authorization' not in request.headers and 'x-api-key' not in request.headers
            return httpx.Response(200, content=b'result')
        assert request.headers['authorization'] == 'Bearer private'
        if request.method == 'DELETE': return httpx.Response(204)
        if request.url.path.endswith('/images/generations'):
            data = json.loads(request.content)
            assert data['size'] == '2K' and data['model'] == 'seedream'
            assert data['watermark'] is watermark
            return httpx.Response(200, json={'data': [{'url': 'https://cdn.test/output'}]})
        if request.method == 'POST':
            assert json.loads(request.content)['duration'] == 5
            assert json.loads(request.content)['watermark'] is watermark
            return httpx.Response(200, json={'id': 'provider-task'})
        return httpx.Response(200, json={'status': 'succeeded', 'content': {'video_url': 'https://cdn.test/output'}})
    async def run():
        provider = VolcengineGeneration(store, httpx.MockTransport(handle), poll_interval=0)
        config = {'url': 'https://ark.test/api/plan/v3', 'modelId': 'seedream', 'apiKey': 'private'}
        task = {'kind': 'image', 'prompt': '画面', 'referenceIds': [], 'projectId': value['id'], 'parameters': {'size': '2K', 'watermark': watermark}}
        submitted = []
        async def saved(external_id): submitted.append(external_id)
        assert await provider.generate(config, task, saved) == ('png', b'result')
        task.update(kind='video', parameters={'duration': 5, 'watermark': watermark})
        assert await provider.generate(config, task, saved) == ('mp4', b'result')
        assert submitted == ['provider-task']
        before = sum(r.method == 'POST' for r in calls)
        task['externalTaskId'] = 'provider-task'
        await provider.generate(config, task, saved)
        assert sum(r.method == 'POST' for r in calls) == before
        await provider.cancel(config, 'provider-task')
        assert all('/api/plan/v3/' in r.url.path for r in calls if r.url.host == 'ark.test')
    asyncio.run(run())


@pytest.mark.parametrize('complete', [True, False])
def test_volc_tts_requires_complete_ndjson(project, complete):
    store, value, _, _ = project
    def handle(request):
        assert str(request.url) == 'https://openspeech.test/api/v3/plan/tts/unidirectional'
        assert request.headers['x-api-resource-id'] == 'seed-tts-2.0'
        assert request.headers['x-api-key'] == 'private' and 'authorization' not in request.headers
        assert json.loads(request.content)['req_params']['text'] == '你好'
        data = json.dumps({'code': 0, 'data': base64.b64encode(b'audio').decode()}) + '\n'
        if complete: data += '{"code":20000000}\n'
        return httpx.Response(200, text=data)
    async def run():
        provider = VolcengineGeneration(store, httpx.MockTransport(handle))
        config = {'url': 'https://openspeech.test/api/v3/plan', 'modelId': 'doubao-seed-tts-2.0', 'apiKey': 'private'}
        task = {'kind': 'audio', 'prompt': '你好', 'referenceIds': [], 'projectId': value['id'], 'parameters': {'speaker': 'voice'}}
        if complete:
            assert await provider.generate(config, task, None) == ('mp3', b'audio')
        else:
            with pytest.raises(ProjectError, match='未完整返回'):
                await provider.generate(config, task, None)
    asyncio.run(run())


@pytest.mark.skipif(not shutil.which('ffmpeg'), reason='media fixtures require ffmpeg')
@pytest.mark.parametrize('kind,suffix', [('audio', 'mp3'), ('video', 'mp4')])
def test_real_media_import_probes_metadata(project, tmp_path, kind, suffix):
    store, value, session, _ = project
    file = tmp_path / ('fixture.' + suffix)
    source = ['-f', 'lavfi', '-i', 'sine=frequency=440:duration=0.2'] if kind == 'audio' else ['-f', 'lavfi', '-i', 'color=c=blue:s=32x24:d=0.2', '-pix_fmt', 'yuv420p']
    subprocess.run(['ffmpeg', '-v', 'error', *source, str(file)], check=True)
    asset = AssetCatalog(store).import_file(value['id'], str(uuid4()), file.name, file.read_bytes(), session)
    assert asset['kind'] == kind and asset['durationMs'] > 0
    if kind == 'video': assert (asset['width'], asset['height']) == (32, 24)
    else: assert asset['sampleRate'] > 0 and asset['channels'] == 1


def test_cancel_task_protects_inputs_then_releases_node(project):
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://test.example', 'image', 'private')
    item = node(canvas, value, session)
    item = canvas.patch(value['id'], item['id'], {'prompt': '图片'}, session)
    class Provider:
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            await asyncio.Event().wait()
    async def run():
        manager = Generation(store, configs, Provider())
        task = await manager.submit(value['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision']}, session)
        with pytest.raises(ProjectError, match='取消'):
            canvas.remove(value['id'], item['id'], session)
        await manager.cancel(value['id'], task['id'], session)
        assert canvas.snapshot(value['id'])['tasks'][0]['status'] == 'cancelled'
        canvas.remove(value['id'], item['id'], session)
        await manager.close()
    asyncio.run(run())


def test_canvas_api_checks_session_type_and_creates_no_orphan(project):
    from fastapi.testclient import TestClient
    from museshow_api.main import create_app
    store, value, session, _ = project
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}
    with TestClient(create_app(store), headers=headers) as client:
        url = f'/api/projects/{value["id"]}/canvas/nodes'
        nid = str(uuid4())
        assert client.post(url, json={'id': nid, 'kind': 'image'}, headers={'X-MuseShow-Session': str(uuid4())}).status_code == 409
        assert client.post(url, json={'id': nid, 'kind': 'image'}).status_code == 200
        assert client.put(url + '/' + nid + '/file', content=b'text', headers={'X-Asset-Name': 'wrong.txt', 'X-Asset-Id': str(uuid4())}).status_code == 400
        assert client.get(f'/api/projects/{value["id"]}/canvas').json()['assets'] == []
        uploaded = client.put(url + '/' + nid + '/file', content=png(), headers={'X-Asset-Name': 'frame.png', 'X-Asset-Id': str(uuid4())})
        assert uploaded.status_code == 200
        assert client.delete(url + '/' + nid).status_code == 204
        snapshot = client.get(f'/api/projects/{value["id"]}/canvas').json()
        assert snapshot['canvas']['nodes'] == [] and len(snapshot['assets']) == 1


def test_restart_queries_known_video_id_without_resubmitting(project):
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('video', 'https://ark.test/api/plan/v3', 'seedance', 'private')
    item = node(canvas, value, session, 'video')
    item = canvas.patch(value['id'], item['id'], {'prompt': '视频'}, session)
    class Provider:
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            assert task['externalTaskId'] == 'known-provider-id'
            raise ProjectError('供应商任务已失败。', 502)
    async def run():
        manager = Generation(store, configs, Provider())
        task, pinned, _ = manager._prepare(value['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision']}, session)
        task.update(status='running', externalTaskId='known-provider-id')
        canvas.task_write(value['id'], task, pinned)
        store.release(session)
        await manager.start()
        await asyncio.gather(*(job.future for job in manager.jobs.values()))
        receipt = canvas.snapshot(value['id'])['tasks'][0]
        assert receipt['status'] == 'failed' and receipt['externalTaskId'] == 'known-provider-id'
        assert canvas.snapshot(value['id'])['assets'] == []
        await manager.close()
    asyncio.run(run())


def test_missing_ffprobe_rejects_media_before_creating_paid_task(project, monkeypatch):
    from museshow.media import probe
    store, value, session, canvas = project
    config = ModelConfigs(store.repository).save('video', 'https://ark.test/api/plan/v3', 'seedance', 'private')
    item = node(canvas, value, session, 'video')
    item = canvas.patch(value['id'], item['id'], {'prompt': '视频'}, session)
    monkeypatch.setattr(probe.shutil, 'which', lambda _: None)
    manager = Generation(store, ModelConfigs(store.repository))
    with pytest.raises(ProjectError, match='ffprobe'):
        manager._prepare(value['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision']}, session)
    assert canvas.snapshot(value['id'])['tasks'] == []


def test_shutdown_only_interrupts_jobs_owned_by_this_manager(project):
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://test.example', 'image', 'private')
    item = node(canvas, value, session)
    item = canvas.patch(value['id'], item['id'], {'prompt': '当前任务'}, session)
    other = store.create('其他项目', str(uuid4()), str(uuid4()))
    # Its receipt belongs to another service instance, not this manager.
    foreign = {'id': str(uuid4()), 'nodeId': str(uuid4()), 'kind': 'image', 'status': 'queued'}
    canvas.task_write(other['id'], foreign, other['path'])
    foreign_path = Path(other['path']) / 'tasks' / (foreign['id'] + '.json')
    before = foreign_path.read_bytes()

    class Provider:
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            await asyncio.Event().wait()

    async def run():
        manager = Generation(store, configs, Provider())
        task = await manager.submit(value['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision']}, session)
        await manager.close()
        assert canvas.snapshot(value['id'])['tasks'][0]['id'] == task['id']
        assert canvas.snapshot(value['id'])['tasks'][0]['status'] == 'interrupted'
        assert canvas.snapshot(other['id'])['tasks'] == [{'schemaVersion': 1, **foreign}]
        assert foreign_path.read_bytes() == before
    asyncio.run(run())


def test_text_generation_uses_chat_reference_limit_and_saved_parameters(project):
    store, value, session, _ = project
    image_id = str(uuid4())
    # Historical chat attachments use the chat reference size limit (32 MB),
    # rather than the 8 MB limit of the media generation adapters.
    data = b'\x89PNG\r\n\x1a\n' + b'0' * (9 * 1024 * 1024)
    store.save_asset(value['id'], image_id, {'name': 'reference.png', 'type': 'image/png', 'fingerprint': image_id}, data, session)
    def handler(request):
        payload = json.loads(request.content)
        assert payload['reasoning_effort'] == 'low' and payload['max_tokens'] == 100
        blocks = payload['messages'][-1]['content']
        assert len(blocks) == 2 and blocks[1]['type'] == 'image_url'
        return httpx.Response(200, text='data: {"choices":[{"delta":{"content":"图片描述"},"finish_reason":"stop"}]}\n\n')
    async def run():
        provider = VolcengineGeneration(store, httpx.MockTransport(handler))
        config = {'url': 'https://api.deepseek.com', 'modelId': 'chat', 'apiKey': 'private'}
        task = {'kind': 'text', 'projectId': value['id'], 'prompt': '描述参考图', 'referenceIds': [image_id], 'parameters': {'thinking': 'low', 'max_tokens': 100}}
        assert await provider.generate(config, task, None) == ('md', '图片描述'.encode())
    asyncio.run(run())


def test_rejected_generation_preserves_inputs_and_creates_no_node(project):
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://ark.test/api/plan/v3', 'seedream', 'private')
    item = node(canvas, value, session)
    item = canvas.patch(value['id'], item['id'], {'prompt': '原输入'}, session)
    manager = Generation(store, configs)
    before = canvas.snapshot(value['id'])
    request = {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision'],
               'inputs': {'prompt': '新输入', 'referenceIds': [str(uuid4())]}}
    with pytest.raises(ProjectError, match='不存在'):
        manager._prepare(value['id'], item['id'], request, session)
    assert canvas.snapshot(value['id']) == before
    with pytest.raises(ProjectError):
        manager._prepare(value['id'], str(uuid4()), {**request, 'expectedRevision': 1}, session, create={'kind': 'image'})
    assert canvas.snapshot(value['id']) == before
    good = {**request, 'inputs': {'prompt': '本次输入', 'referenceIds': []}}
    task, _, _ = manager._prepare(value['id'], item['id'], good, session)
    accepted = canvas.snapshot(value['id'])
    current = accepted['canvas']['nodes'][0]
    assert current['prompt'] == task['prompt'] == '本次输入'
    assert current['revision'] == task['inputRevision']
    with pytest.raises(ProjectError, match='等待或取消'):
        manager._prepare(value['id'], item['id'], {**good, 'id': str(uuid4()), 'expectedRevision': current['revision'], 'inputs': {'prompt': '误覆盖'}}, session)
    assert canvas.snapshot(value['id']) == accepted
    with pytest.raises(ProjectError, match='内容已变化'):
        manager._prepare(value['id'], item['id'], {**good, 'id': str(uuid4())}, session)
    assert canvas.snapshot(value['id']) == accepted


def test_audio_reference_is_not_appended_to_spoken_body(project):
    store, value, session, _ = project
    asset = AssetCatalog(store).import_file(value['id'], str(uuid4()), '创作说明.md', '年轻女声，温暖。第二镜：不要合并。'.encode(), session)
    from museshow.integrations.reference_inputs import generation_references
    prepared = generation_references(store, {'kind': 'audio', 'projectId': value['id'], 'prompt': '雨，终于停了。', 'referenceIds': [asset['id']]}, {'url': 'https://speech.test', 'modelId': 'seed-tts-2.0'})
    assert prepared['prompt'] == '雨，终于停了。' and prepared['images'] == []


def test_cancelled_submit_finishes_acceptance_and_starts_durable_task(project):
    import threading
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://test.example', 'image', 'private')
    item = node(canvas, value, session)
    class Provider:
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            return 'png', png()
    async def run():
        manager = Generation(store, configs, Provider())
        entered, release = threading.Event(), threading.Event()
        original = manager._prepare
        def prepare(*args, **kwargs):
            entered.set()
            assert release.wait(5)
            return original(*args, **kwargs)
        manager._prepare = prepare
        call = asyncio.create_task(manager.submit(value['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': 1, 'inputs': {'prompt': '图'}}, session))
        while not entered.is_set():
            await asyncio.sleep(.01)
        call.cancel()
        with pytest.raises(asyncio.CancelledError):
            await call
        release.set()
        await asyncio.gather(*list(manager.accepting.values()))
        await asyncio.gather(*(job.future for job in list(manager.jobs.values())))
        assert canvas.snapshot(value['id'])['tasks'][0]['status'] == 'succeeded'
        await manager.close()
    asyncio.run(run())


def test_cancel_waits_for_inflight_running_receipt(project, monkeypatch):
    import threading
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = configs.save('image', 'https://test.example', 'image', 'private')
    item = canvas.patch(value['id'], node(canvas, value, session)['id'], {'prompt': '图片'}, session)
    class Provider:
        def validate(self, kind, config): pass
        async def generate(self, config, task, submitted):
            await asyncio.Event().wait()
    async def run():
        manager = Generation(store, configs, Provider())
        entered, release = threading.Event(), threading.Event()
        original = manager.canvas.task_write
        def slow_write(project_id, task, pinned):
            if task['status'] == 'running':
                entered.set()
                assert release.wait(5), 'Test did not release the running write'
            return original(project_id, task, pinned)
        monkeypatch.setattr(manager.canvas, 'task_write', slow_write)
        task = await manager.submit(value['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision']}, session)
        try:
            assert await asyncio.to_thread(entered.wait, 5)
            cancelling = asyncio.create_task(manager.cancel(value['id'], task['id'], session))
            await asyncio.sleep(0)  # Deliver cancellation while the worker is blocked.
            assert not cancelling.done()
            release.set()
            await asyncio.wait_for(cancelling, 5)
            assert canvas.snapshot(value['id'])['tasks'][0]['status'] == 'cancelled'
            canvas.remove(value['id'], item['id'], session)
        finally:
            release.set()
            await manager.close()
    asyncio.run(run())


def test_text_generation_parameters_are_frozen_without_becoming_node_fields(project):
    store, value, session, canvas = project
    item = node(canvas, value, session, 'text')
    configs = ModelConfigs(store.repository)
    config = configs.save('agent', 'https://ark.test/api/plan/v3', 'agent-model', 'private')
    manager = Generation(store, configs)
    request = {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision'],
               'inputs': {'prompt': '写一个故事', 'referenceIds': [], 'thinking': 'high', 'maxTokens': 1024}}
    task, _, _ = manager._prepare(value['id'], item['id'], request, session)
    assert task['parameters']['thinking'] == 'high'
    assert task['parameters']['max_tokens'] == 1024
    current = canvas.snapshot(value['id'])['canvas']['nodes'][0]
    assert current['prompt'] == '写一个故事'
    assert 'thinking' not in current and 'maxTokens' not in current
    repeated, _, _ = manager._prepare(value['id'], item['id'], {**request, 'inputs': {**request['inputs'], 'thinking': 'low', 'maxTokens': 2048}}, session)
    assert repeated['parameters']['thinking'] == 'high'
    assert repeated['parameters']['max_tokens'] == 1024


@pytest.mark.parametrize('thinking,tokens', [('invalid', 1024), ('auto', 0), ('auto', 32769), ('auto', True)])
def test_invalid_text_parameters_do_not_write_a_task(project, thinking, tokens):
    store, value, session, canvas = project
    item = node(canvas, value, session, 'text')
    configs = ModelConfigs(store.repository)
    config = configs.save('agent', 'https://ark.test/api/plan/v3', 'agent-model', 'private')
    manager = Generation(store, configs)
    with pytest.raises(ProjectError, match='Agent'):
        manager._prepare(value['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'], 'expectedRevision': item['revision'],
                        'inputs': {'prompt': '写一个故事', 'thinking': thinking, 'maxTokens': tokens}}, session)
    assert canvas.snapshot(value['id'])['tasks'] == []
    assert canvas.snapshot(value['id'])['canvas']['nodes'][0]['role'] == 'empty'
