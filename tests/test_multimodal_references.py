"""Four configured adapters: real payloads, reference identity and recovery."""
import asyncio
import base64
from copy import deepcopy
import io
import json
import shutil
import subprocess
from uuid import uuid4
import wave

from fastapi.testclient import TestClient
import httpx
from PIL import Image
import pytest

from museshow.application.generation import Generation
from museshow.domain.input_rules import MAX_REFERENCES, input_rules
from museshow.domain.projects import ProjectError
from museshow.domain.references import project_content
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.canvas_versions import apply_version, node_history
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.generation_errors import provider_failure
from museshow.integrations.reference_inputs import generation_references, reference_content, request_size
from museshow.integrations.volcengine import VolcengineGeneration
from museshow_api.main import create_app
from test_chat import completion, events

BASE = 'https://ark.cn-beijing.volces.com/api/plan/v3'


def config(kind='video'):
    return {'kind': kind, 'modelId': {'video': 'doubao-seedance-2.0', 'image': 'doubao-seedream-5.0-pro', 'agent': 'deepseek-flash'}[kind],
            'url': 'https://api.deepseek.com' if kind == 'agent' else BASE, 'apiKey': 'private'}


@pytest.fixture
def media(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4()); project = store.create('四类参考', str(uuid4()), session)
    canvas = CanvasProjects(store); owner = project['id']
    def add(name, data):
        return canvas.import_file(owner, str(uuid4()), name, data, session, str(uuid4()))
    buf = io.BytesIO(); Image.new('RGB', (640, 640), 'teal').save(buf, 'PNG')
    image = add('场景.png', buf.getvalue())
    buf = io.BytesIO()
    with wave.open(buf, 'wb') as wav:
        wav.setparams((1, 2, 24000, 0, 'NONE', 'not compressed')); wav.writeframes(b'\0\0' * 72000)
    audio = add('节奏.wav', buf.getvalue())
    text = add('说明.md', '保留几何构图'.encode())
    return store, owner, session, canvas, image, audio, text


def task(owner, refs=(), **changes):
    return {'kind': 'video', 'projectId': owner, 'prompt': '按参考创作', 'referenceIds': [a['id'] for a in refs],
            'videoMode': 'reference', 'parameters': {'duration': 5, 'ratio': '16:9', 'generate_audio': True}, **changes}


def test_profiles_bind_both_endpoint_and_exact_model():
    assert input_rules(config('image'))['maxImages'] == 10
    assert input_rules(config())['maxAudios'] == 3
    assert input_rules({**config(), 'url': 'https://other.test/api/plan/v3'})['videoModes'] == ['first_frame']
    assert input_rules({**config(), 'modelId': 'my-seedance-2.0-lookalike'})['videoModes'] == ['first_frame']


def test_reference_mapping_deduplicates_without_losing_inline_positions(media):
    store, owner, _, _, image, audio, text = media
    content = [{'type': 'text', 'text': '先按'}, {'type': 'reference', 'assetId': audio['id'], 'name': audio['name']},
        {'type': 'text', 'text': '的节奏，再用'}, {'type': 'reference', 'assetId': image['id'], 'name': image['name']},
        {'type': 'text', 'text': '\n以及'}, {'type': 'reference', 'assetId': audio['id'], 'name': audio['name']}]
    prompt, ids = project_content(content)
    prepared = generation_references(store, task(owner, prompt=prompt, promptContent=content, referenceIds=ids), config())
    assert prompt in prepared['prompt'] and prompt.count('参考1') == 2
    assert len(prepared['images']) == len(prepared['audios']) == 1
    assert [(entry['kind'], entry['role'], entry['number']) for entry in prepared['manifest']] == [('audio', 'reference_audio', 1), ('image', 'reference_image', 1)]
    assert base64.b64decode(prepared['audios'][0].split(',')[1]) == store.asset(owner, audio['id'])[0]


def test_chat_audio_and_video_only_send_metadata_and_never_encode_bytes(media, monkeypatch):
    store, owner, _, _, image, audio, text = media
    original = store.asset
    video = {'id': str(uuid4()), 'name': '未知内容.mp4', 'type': 'video/mp4', 'kind': 'video', 'fingerprint': 'fixture', 'durationMs': 5000}
    monkeypatch.setattr(store, 'asset', lambda o, i: (b'private-video-bytes', video) if i == video['id'] else original(o, i))
    manifest = []
    blocks = reference_content(store, owner, {'text': '使用素材制作', 'assets': [audio, video, text, image]}, manifest=manifest)
    serialized = json.dumps(blocks, ensure_ascii=False)
    assert 'private-video-bytes' not in serialized and 'data:audio' not in serialized and 'video_url' not in serialized
    assert '未提供音画内容' in serialized and video['id'] in serialized and '5000' in serialized
    assert [entry['transmission'] for entry in manifest] == ['metadata', 'metadata', 'content', 'content']
    assert sum(block['type'] == 'image_url' for block in blocks) == 1


def test_generation_limits_modes_and_audio_combinations_preserve_inputs(media):
    store, owner, _, _, image, audio, text = media
    nine = [image] * 9
    # Different asset IDs are counted; repeated mentions are not.
    assert len(generation_references(store, task(owner, nine), config())['images']) == 1
    with pytest.raises(ProjectError, match='搭配'):
        generation_references(store, task(owner, [audio]), config())
    with pytest.raises(ProjectError, match='暂不支持'):
        generation_references(store, task(owner, [image, audio], videoMode='first_frame'), config())
    with pytest.raises(ProjectError, match='暂不支持'):
        generation_references(store, task(owner, [audio], kind='image'), config('image'))
    original = task(owner, [image, audio])
    saved = deepcopy(original)
    with pytest.raises(ProjectError, match='尚未接通素材参考模式'):
        generation_references(store, original, {**config(), 'url': 'https://other.test'})
    assert original == saved


def test_ten_images_survive_api_generation_history_and_undo(media):
    store, owner, session, canvas, image, _, _ = media
    images = [image] + [canvas.import_file(owner, str(uuid4()), f'图{i}.png', store.asset(owner, image['id'])[0], session, str(uuid4())) for i in range(9)]
    refs = [a['id'] for a in images]
    manager = Generation(store, ModelConfigs(store.repository))
    model = manager.configs.save('image', BASE, config('image')['modelId'], 'private')
    node = canvas.create(owner, {'id': str(uuid4()), 'kind': 'image'}, session)
    value = {'id': str(uuid4()), 'expectedRevision': 1, 'modelConfigId': model['id'], 'inputs': {'prompt': '十图融合', 'referenceIds': refs}}
    receipt, directory, _ = manager._prepare(owner, node['id'], value, session)
    assert receipt['referenceIds'] == refs and len(receipt['referenceInputs']['references']) == 10
    assert receipt['referenceInputs']['profile'] == 'seedream-5.0-pro'
    canvas.task_write(owner, {**receipt, 'status': 'cancelled'}, directory)
    extra = canvas.import_file(owner, str(uuid4()), '第十一图.png', store.asset(owner, image['id'])[0], session, str(uuid4()))
    target = canvas.create(owner, {'id': str(uuid4()), 'kind': 'image'}, session)
    before = canvas.snapshot(owner)
    with pytest.raises(ProjectError, match='最多使用 10'):
        manager._prepare(owner, target['id'], {**value, 'id': str(uuid4()), 'inputs': {'prompt': '超限', 'referenceIds': refs + [extra['id']]}}, session)
    assert canvas.snapshot(owner) == before
    # Draft and API models permit >8 references; provider limits remain separate.
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}
    with TestClient(create_app(store), headers=headers) as client:
        response = client.patch(f'/api/data/{owner}/draft', json={'draft': '对比这些图', 'assets': [{k: a[k] for k in ('id', 'name', 'type', 'size', 'fingerprint')} for a in images], 'thinking': 'auto'})
        assert response.status_code == 200
        assert len(client.get(f'/api/data/{owner}/conversation').json()['assets']) == 10


def test_real_adapter_encodes_reference_roles_and_resume_never_reads_sources(media, monkeypatch):
    store, owner, _, _, image, audio, _ = media
    calls = []
    def handler(request):
        if request.method == 'POST':
            calls.append(json.loads(request.content)); return httpx.Response(200, json={'id': 'remote-existing'})
        if request.url.host == 'download.test':
            assert 'authorization' not in request.headers; return httpx.Response(200, content=b'output')
        return httpx.Response(200, json={'status': 'succeeded', 'content': {'video_url': 'https://download.test/result'}})
    provider = VolcengineGeneration(store, httpx.MockTransport(handler), poll_interval=0)
    value = task(owner, [image, audio]); ids = []
    async def submitted(external): ids.append(external)
    assert asyncio.run(provider.generate(config(), value, submitted)) == ('mp4', b'output')
    assert ids == ['remote-existing']
    assert [(block['type'], block.get('role')) for block in calls[0]['content']] == [('text', None), ('image_url', 'reference_image'), ('audio_url', 'reference_audio')]
    assert 'video_url' not in json.dumps(calls[0])
    monkeypatch.setattr(store, 'asset', lambda *_: pytest.fail('Remote recovery must not reread references'))
    assert asyncio.run(provider.generate(config(), {**value, 'externalTaskId': ids[0]}, submitted)) == ('mp4', b'output')
    assert len(calls) == 1


def test_video_mode_history_apply_and_inflight_guards(media):
    from museshow.infrastructure.adoption import node_basis, reason
    store, owner, session, canvas, image, _, _ = media
    model = ModelConfigs(store.repository).save('video', BASE, 'doubao-seedance-2.0', 'private')
    node = canvas.create(owner, {'id': str(uuid4()), 'kind': 'video'}, session)
    node = canvas.patch(owner, node['id'], {'videoMode': 'reference', 'prompt': '多图要求', 'referenceIds': [image['id']], 'modelConfigId': model['id']}, session, remember=True)
    snapshot = canvas.snapshot(owner)['canvas']
    undone = canvas.history(owner, 'undo', snapshot['history']['undo']['id'], str(uuid4()), session)
    assert canvas._node(undone, node['id'])['videoMode'] == 'first_frame'
    snapshot = canvas.snapshot(owner)['canvas']
    canvas.history(owner, 'redo', snapshot['history']['redo']['id'], str(uuid4()), session)
    manager = Generation(store, ModelConfigs(store.repository))
    value = canvas._node(canvas.snapshot(owner)['canvas'], node['id'])
    receipt, _, _ = manager._prepare(owner, node['id'], {'id': str(uuid4()), 'expectedRevision': value['revision'], 'modelConfigId': model['id']}, session)
    assert receipt['videoMode'] == receipt['inputSnapshot']['node']['videoMode'] == 'reference'
    # An intentional mode edit while generation runs must keep the late result a candidate.
    current = canvas._node(canvas.snapshot(owner)['canvas'], node['id'])
    changed = {**current, 'videoMode': 'first_frame'}
    directory = store.root / '四类参考'; records = canvas.assets._records(directory, owner)
    assert reason(receipt, directory, changed, records, manager.configs) == 'node_changed'


def test_reference_error_classification_is_specific_and_redacted():
    error = provider_failure({'error': {'code': 'InvalidParameter', 'message': 'reference_audio cannot be the only reference input https://private.test/?token=secret'}}, stage='submit', http_status=400, secrets=('secret',))
    assert error.details.category == 'reference' and '图片' in error.details.message
    assert 'private.test' not in str(error) and 'secret' not in str(error)
    ordinary = provider_failure({'error': {'code': 'InvalidParameter', 'message': 'invalid duration'}}, stage='submit', http_status=400)
    assert ordinary.details.category == 'input'
    with pytest.raises(ProjectError, match='请求过大'):
        request_size({'image': 'x' * 50}, 10)


@pytest.fixture(scope='module')
def small_video(tmp_path_factory):
    if not shutil.which('ffmpeg'):
        pytest.skip('FFmpeg is required for media history')
    path = tmp_path_factory.mktemp('reference-output') / 'output.mp4'
    subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=32x24:d=0.2', '-pix_fmt', 'yuv420p', str(path)], check=True)
    return path.read_bytes()


def test_history_application_restores_mode_and_references_atomically(media, small_video):
    store, owner, session, canvas, image, audio, _ = media
    manager = Generation(store, ModelConfigs(store.repository))
    model = manager.configs.save('video', BASE, 'doubao-seedance-2.0', 'private')
    node = canvas.create(owner, {'id': str(uuid4()), 'kind': 'video'}, session)
    versions = []
    for mode, refs in [('reference', [image['id'], audio['id']]), ('first_frame', [image['id']])]:
        current = canvas._node(canvas.snapshot(owner)['canvas'], node['id'])
        receipt, directory, _ = manager._prepare(owner, node['id'], {'id': str(uuid4()), 'expectedRevision': current['revision'], 'modelConfigId': model['id'],
            'inputs': {'prompt': f'{mode}要求', 'referenceIds': refs, 'videoMode': mode}}, session)
        asset = canvas.assets.import_file(owner, str(uuid4()), '结果.mp4', small_video, session, source='generated', generation=receipt)
        canvas.attach(owner, node['id'], asset['id'])
        canvas.task_write(owner, {**receipt, 'status': 'succeeded', 'assetId': asset['id'], 'adopted': True}, directory)
        versions.append(asset)
    history = node_history(canvas, owner, node['id'])
    assert [v['videoMode'] for v in history['versions']] == ['reference', 'first_frame']
    receipts = {p: p.read_bytes() for p in (store.root / '四类参考' / 'tasks').glob('*.json')}
    applied = apply_version(canvas, owner, node['id'], versions[0]['id'], history['node']['revision'], versions[0]['fingerprint'], session)
    assert applied['videoMode'] == 'reference' and applied['referenceIds'] == [image['id'], audio['id']]
    state = canvas.snapshot(owner)['canvas']
    undone = canvas.history(owner, 'undo', state['history']['undo']['id'], str(uuid4()), session)
    assert canvas._node(undone, node['id'])['videoMode'] == 'first_frame'
    assert {p: p.read_bytes() for p in receipts} == receipts


def test_audio_reference_first_message_can_create_project_and_chat(media):
    from museshow.integrations.chat_completions import ChatCompletions
    store, _, session, _, _, audio, _ = media
    data = store.asset(audio['projectId'], audio['id'])[0]
    scratch_id = str(uuid4())
    store.save_asset('scratch', scratch_id, {'name': '节奏.wav', 'type': 'audio/wav', 'fingerprint': 'fixture'}, data, session)
    attachment = store.asset('scratch', scratch_id)[1]
    model = ModelConfigs(store.repository).save('agent', 'https://api.deepseek.com', 'deepseek-flash', 'private')
    calls = []
    def handler(request):
        calls.append(json.loads(request.content)); return httpx.Response(200, text=completion('素材项目'))
    content = [{'type': 'reference', 'assetId': scratch_id, 'name': '节奏.wav', 'fingerprint': 'fixture'}, {'type': 'text', 'text': '\n请记录此素材'}]
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}
    with TestClient(create_app(store, ChatCompletions(httpx.MockTransport(handler))), headers=headers) as client:
        created = client.post('/api/projects/from-message', json={'id': str(uuid4()), 'turnId': str(uuid4()), 'modelId': model['id'],
            'draft': 'ignored', 'draftContent': content, 'assets': [{k: attachment[k] for k in ('id', 'name', 'type', 'size', 'fingerprint')}], 'thinking': 'auto'})
        assert created.status_code == 200
        owner = created.json()['id']
        from uuid import UUID, uuid5
        content[0]['nodeId'] = str(uuid5(UUID(owner), scratch_id))
        sent = client.post(f'/api/data/{owner}/chat', json={'id': str(uuid4()), 'modelId': model['id'], 'text': '', 'content': content, 'assets': [scratch_id]})
        user = events(sent)[-1]['conversation']['messages'][-2]
        assert user['content'] == content and user['referenceInputs'][0]['transmission'] == 'metadata'
        assert 'data:audio' not in json.dumps(calls)


def test_video_reference_rejection_is_atomic_before_task_creation(media, small_video):
    store, owner, session, canvas, image, _, _ = media
    video = canvas.import_file(owner, str(uuid4()), '已有视频.mp4', small_video, session, str(uuid4()))
    model = ModelConfigs(store.repository).save('video', BASE, 'doubao-seedance-2.0', 'private')
    manager = Generation(store, ModelConfigs(store.repository))
    node = canvas.create(owner, {'id': str(uuid4()), 'kind': 'video'}, session)
    before = canvas.snapshot(owner)
    with pytest.raises(ProjectError, match='当前模型不支持视频参考'):
        manager._prepare(owner, node['id'], {'id': str(uuid4()), 'expectedRevision': 1, 'modelConfigId': model['id'],
            'inputs': {'prompt': '参考视频制作', 'videoMode': 'reference', 'referenceIds': [image['id'], video['id']]}}, session)
    assert canvas.snapshot(owner) == before


@pytest.mark.parametrize(('count', 'seconds'), [(4, 3), (2, 8)])
def test_audio_count_and_total_duration_are_checked_together(media, count, seconds):
    store, owner, session, canvas, image, _, _ = media
    buf = io.BytesIO()
    with wave.open(buf, 'wb') as wav:
        wav.setparams((1, 2, 24000, 0, 'NONE', 'not compressed')); wav.writeframes(b'\0\0' * 24000 * seconds)
    audios = [canvas.import_file(owner, str(uuid4()), f'音频{i}.wav', buf.getvalue(), session, str(uuid4())) for i in range(count)]
    with pytest.raises(ProjectError, match='最多 3 段，总时长不超过 15 秒'):
        generation_references(store, task(owner, [image, *audios]), config())
