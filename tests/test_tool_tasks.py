import asyncio
import base64
import io
import json
import subprocess
from uuid import uuid4

import httpx
import pytest
from PIL import Image

from museshow.application.tool_tasks import ToolTasks
from museshow.domain.projects import ProjectError
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.local_projects import LocalProjects, child
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.model_adapters import OpenAIImages, adapter_for, capabilities_of

ZIMAGE = ('image', 'http://gpu:8210/v1', 'Tongyi-MAI/Z-Image-Turbo')
H3 = ('video', 'http://gpu:8010/v1', 'MiniMaxAI/MiniMax-H3')
TTS = ('audio', 'http://gpu:8220/v1', 'Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice')
CHAT = ('agent', 'http://gpu:8100/v1', 'Qwen/Qwen3-30B-A3B')
SAM3 = ('vision', 'http://gpu:8230/v1', 'facebook/sam3')


def png(size=(64, 48), color='blue', mode='RGB'):
    out = io.BytesIO()
    Image.new(mode, size, color).save(out, 'PNG')
    return out.getvalue()


def mp4(seconds=1, size='64x36'):
    return subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', f'testsrc=size={size}:rate=24', '-t', str(seconds),
                           '-pix_fmt', 'yuv420p', '-f', 'mp4', '-movflags', 'frag_keyframe+empty_moov', 'pipe:1'],
                          capture_output=True, check=True).stdout


@pytest.fixture
def project(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    value = store.create('工具测试', str(uuid4()), session)
    return store, value['id'], session


def configure(store, *models):
    configs = ModelConfigs(store.repository)
    for kind, url, model in models:
        configs.save(kind, url, model, '', connection_type='self_hosted', protocol='vllm_omni' if kind in {'video', 'vision'} else 'openai')
    return configs


def upload(store, project_id, session, name, data):
    asset_id = str(uuid4())
    CanvasProjects(store).assets.import_file(project_id, asset_id, name, data, session)
    return asset_id


def images_server(calls, color='red'):
    def handle(request):
        assert request.url.path == '/v1/images/edits'
        body = request.read()
        calls.append(body)
        size = body.split(b'name="size"\r\n\r\n', 1)[1].split(b'\r\n', 1)[0].decode()
        width, height = map(int, size.split('x'))
        return httpx.Response(200, json={'data': [{'b64_json': base64.b64encode(png((width, height), color)).decode()}]})
    return handle


def run(store, configs, transport, project_id, session, value):
    async def go():
        tools = ToolTasks(store, configs, CanvasProjects(store).assets, transport=transport, poll_interval=0)
        try:
            task = await tools.submit(project_id, {'id': str(uuid4()), 'boxes': [], 'parameters': {}, **value}, session)
            await asyncio.gather(*tools.jobs.values(), return_exceptions=True)
            return tools.get(project_id, task['id'])
        finally:
            await tools.close()
    return asyncio.run(go())


def output_image(store, project_id, task, index=0):
    with store.transaction() as db:
        directory = store._owner(db, project_id)
    return Image.open(io.BytesIO(child(child(directory, 'assets'), task['outputs'][index]['id']).read_bytes())).convert('RGB')


def test_adapters_declare_capabilities_from_profiles_not_operations():
    def config(kind, url, model, protocol='openai'):
        return {'kind': kind, 'url': url, 'modelId': model, 'protocol': protocol, 'connectionType': 'self_hosted'}
    assert capabilities_of(config(*ZIMAGE)) == {'image.generate', 'image.edit'}
    assert capabilities_of(config(*H3, protocol='vllm_omni')) == {'video.generate', 'video.first_frame', 'video.edit'}
    assert capabilities_of(config(*TTS)) == {'audio.speech'}
    assert capabilities_of(config(*CHAT)) == {'text.chat'}
    assert capabilities_of(config(*SAM3, protocol='vllm_omni')) == {'image.segment', 'video.matting'}
    assert capabilities_of(config('video', 'https://ark.cn-beijing.volces.com/api/plan/v3', 'doubao-seedance-2.0', None)) == set()
    # vLLM-Omni renders free sizes on the 16-pixel latent grid; OpenAI picks its nearest fixed size.
    assert adapter_for(config(*ZIMAGE)).size(4000, 2000) == (1536, 768)
    assert OpenAIImages().size(1600, 900) == (1536, 1024)


def test_catalog_reports_availability_by_capability(project):
    store, _, _ = project
    empty = ToolTasks(store, ModelConfigs(store.repository), None).catalog()
    tools = {item['id']: item for item in empty['tools']}
    assert not tools['outpaint']['available'] and '图生图' in tools['outpaint']['reason']
    assert tools['audio-separation']['available'] and not tools['video-edit']['available']
    # Local recipes need no model at all.
    assert tools['image-hd']['available'] and tools['video-upscale']['available']
    configured = ToolTasks(store, configure(store, ZIMAGE, H3, TTS, CHAT), None).catalog()
    tools = {item['id']: item for item in configured['tools']}
    assert tools['outpaint']['available'] and tools['dynamic-poster']['available'] and tools['video-subtitle-erasure']['available']
    assert tools['outpaint']['models']['image.edit'][0]['label'] == 'Z-Image-Turbo'
    assert not tools['cutout']['available'] and '主体抠图' in tools['cutout']['reason']
    assert not tools['layer-decompose']['available'] and '图像分割' in tools['layer-decompose']['reason']
    assert {'image.edit', 'video.first_frame', 'audio.speech', 'text.chat'} <= set(configured['capabilities'])
    assert any(field['key'] == 'preset' and field['options'] for field in tools['image-presets']['fields'])


def test_outpaint_keeps_original_pixels_and_returns_requested_size(project):
    store, project_id, session = project
    configs = configure(store, ZIMAGE)
    source = upload(store, project_id, session, 'blue.png', png((64, 48), 'blue'))
    calls = []
    task = run(store, configs, httpx.MockTransport(images_server(calls)), project_id, session,
               {'tool': 'outpaint', 'sourceAssetIds': [source],
                'parameters': {'left': 0.5, 'right': 0.5, 'top': 0, 'bottom': 0, 'outputWidth': 128, 'outputHeight': 48, 'prompt': '海边'}})
    assert task['status'] == 'succeeded', task['error']
    assert b'name="strength"' in calls[0] and '海边'.encode() in calls[0]
    image = output_image(store, project_id, task)
    assert image.size == (128, 48)
    assert image.getpixel((64, 24))[2] > 200 and image.getpixel((2, 24))[0] > 200  # original centre, drawn border


def test_inpainting_only_changes_the_masked_region(project):
    store, project_id, session = project
    configs = configure(store, ZIMAGE)
    source = upload(store, project_id, session, 'blue.png', png((64, 64), 'blue'))
    mask = Image.new('RGBA', (64, 64), (0, 0, 0, 0))
    mask.paste((255, 255, 255, 255), (40, 40, 64, 64))
    out = io.BytesIO()
    mask.save(out, 'PNG')
    mask_id = upload(store, project_id, session, 'mask.png', out.getvalue())
    task = run(store, configs, httpx.MockTransport(images_server([])), project_id, session,
               {'tool': 'inpainting-remove', 'sourceAssetIds': [source], 'maskAssetId': mask_id})
    assert task['status'] == 'succeeded', task['error']
    image = output_image(store, project_id, task)
    assert image.getpixel((5, 5)) == (0, 0, 255) and image.getpixel((60, 60))[0] > 200


def test_presets_return_one_output_per_shot_and_local_hd_needs_no_model(project):
    store, project_id, session = project
    configs = configure(store, ZIMAGE)
    source = upload(store, project_id, session, 'blue.png', png())
    calls = []
    task = run(store, configs, httpx.MockTransport(images_server(calls)), project_id, session,
               {'tool': 'image-presets', 'sourceAssetIds': [source], 'parameters': {'preset': 'storyboard'}})
    assert task['status'] == 'succeeded' and len(task['outputs']) == 4 and len(calls) == 4
    task = run(store, configs, None, project_id, session,
               {'tool': 'image-hd', 'sourceAssetIds': [source], 'parameters': {'kind': 'normal', 'resolution': '2K'}})
    assert task['status'] == 'succeeded' and output_image(store, project_id, task).size == (2048, 1536)


def test_submission_rejects_tools_without_a_capable_model(project):
    store, project_id, session = project
    source = upload(store, project_id, session, 'blue.png', png())
    tools = ToolTasks(store, configure(store, TTS), CanvasProjects(store).assets)
    for tool, message in (('outpaint', '没有可用的「图生图/图片编辑」模型'), ('layer-decompose', '图像分割')):
        with pytest.raises(ProjectError, match=message):
            asyncio.run(tools.submit(project_id, {'id': str(uuid4()), 'tool': tool, 'sourceAssetIds': [source], 'parameters': {}}, session))
    with pytest.raises(ProjectError, match='类型与工具不匹配'):
        asyncio.run(ToolTasks(store, configure(store, ZIMAGE), CanvasProjects(store).assets).submit(
            project_id, {'id': str(uuid4()), 'tool': 'video-upscale', 'sourceAssetIds': [source], 'parameters': {}}, session))


def video_server(log, *, hold=False):
    clip = mp4(1)

    def handle(request):
        log.append((request.method, request.url.path))
        if request.method == 'POST':
            body = request.read()
            assert b'fl2va' in body and b'name="input_reference"' in body
            return httpx.Response(200, json={'id': 'video_1', 'status': 'queued'})
        if request.method == 'DELETE':
            return httpx.Response(200, json={'id': 'video_1', 'status': 'cancelled'})
        if request.url.path.endswith('/content'):
            return httpx.Response(200, content=clip, headers={'content-type': 'video/mp4'})
        return httpx.Response(200, json={'id': 'video_1', 'status': 'in_progress' if hold else 'completed'})
    return handle


def test_dynamic_poster_runs_first_frame_video_and_cancel_reaches_the_service(project):
    store, project_id, session = project
    configs = configure(store, H3)
    source = upload(store, project_id, session, 'poster.png', png((64, 36)))
    log = []
    task = run(store, configs, httpx.MockTransport(video_server(log)), project_id, session,
               {'tool': 'dynamic-poster', 'sourceAssetIds': [source], 'parameters': {'prompt': '霓虹闪烁'}})
    assert task['status'] == 'succeeded', task['error']
    assert task['outputs'][0]['kind'] == 'video' and ('GET', '/v1/videos/video_1/content') in log

    async def cancel():
        log.clear()
        tools = ToolTasks(store, configs, CanvasProjects(store).assets, transport=httpx.MockTransport(video_server(log, hold=True)), poll_interval=0.01)
        task = await tools.submit(project_id, {'id': str(uuid4()), 'tool': 'dynamic-poster', 'sourceAssetIds': [source], 'parameters': {}}, session)
        while not any(method == 'GET' for method, _ in log):
            await asyncio.sleep(0.01)
        return await tools.cancel(project_id, task['id'], session)
    cancelled = asyncio.run(cancel())
    assert cancelled['status'] == 'cancelled' and ('DELETE', '/v1/videos/video_1') in log


def sound_mp4(seconds, *, channels=2, size='64x36'):
    return subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', f'testsrc=size={size}:rate=24', '-f', 'lavfi', '-i',
                           f'sine=frequency=440:sample_rate=48000', '-t', str(seconds), '-ac', str(channels), '-pix_fmt', 'yuv420p',
                           '-c:a', 'aac', '-f', 'mp4', '-movflags', 'frag_keyframe+empty_moov', 'pipe:1'],
                          capture_output=True, check=True).stdout


def edit_server(bodies):
    clips = {}

    def handle(request):
        if request.method == 'POST':
            body = request.read()
            bodies.append(body)
            # Like H3, return the requested frame count at 24 fps.
            clips[f'edit_{len(bodies)}'] = sound_mp4(int(mask_part(body, 'num_frames')) / 24)
            assert b'name="source_video"' in body and b'name="video_noise_mask"' in body and b'name="audio_noise_mask"' in body
            return httpx.Response(200, json={'id': f'edit_{len(bodies)}', 'status': 'queued'})
        if request.url.path.endswith('/content'):
            return httpx.Response(200, content=clips[request.url.path.split('/')[-2]], headers={'content-type': 'video/mp4'})
        return httpx.Response(200, json={'id': 'edit', 'status': 'completed'})
    return handle


def mask_part_raw(body, name):
    return body.split(f'name="{name}"'.encode(), 1)[1].split(b'\r\n\r\n', 1)[1].split(b'\r\n--', 1)[0]


def mask_part(body, name):
    return json.loads(body.split(f'name="{name}"'.encode(), 1)[1].split(b'\r\n\r\n', 1)[1].split(b'\r\n--', 1)[0])


def test_h3_edit_masks_follow_its_frame_and_audio_grids():
    from museshow.domain.capabilities import EditMask
    from museshow.integrations.model_adapters import VllmOmniVideo
    frames = VllmOmniVideo.frames(5)
    assert frames == 124 and VllmOmniVideo.canvas(1920, 1080) == (1344, 736)
    picture = VllmOmniVideo.picture_mask(EditMask(1.0, None, 2, 3), frames)
    assert len(picture) == frames and picture[47] == [[0.0]] and picture[48] == [[1.0]] and picture[72] == [[0.0]]
    sound = VllmOmniVideo.sound_mask(EditMask(1.0, None, 2, 3), frames)
    assert len(sound) == round(frames * 5 / 3) and sound[0] == 0.0 and sum(sound) > 0
    assert VllmOmniVideo.picture_mask(None, frames) == 0.0 and VllmOmniVideo.picture_mask(EditMask(0.7), frames) == 0.7


def test_partial_reshoot_redraws_only_its_window(project):
    store, project_id, session = project
    configs = configure(store, H3)
    source = upload(store, project_id, session, 'clip.mp4', sound_mp4(6))
    bodies = []
    task = run(store, configs, httpx.MockTransport(edit_server(bodies)), project_id, session,
               {'tool': 'video-partial-reshoot', 'sourceAssetIds': [source],
                'parameters': {'prompt': '换成雨夜', 'startMs': 2000, 'endMs': 3000}})
    assert task['status'] == 'succeeded', task['error']
    assert len(bodies) == 1 and abs(task['outputs'][0]['durationMs'] - 6000) < 300
    picture, sound = mask_part(bodies[0], 'video_noise_mask'), mask_part(bodies[0], 'audio_noise_mask')
    assert picture[0] == [[0.0]] and any(frame == [[1.0]] for frame in picture) and 0 < sum(sound) < len(sound)


def test_long_video_edit_runs_piecewise_and_subtitles_default_to_the_bottom_band(project):
    store, project_id, session = project
    configs = configure(store, H3)
    source = upload(store, project_id, session, 'long.mp4', sound_mp4(20))
    bodies = []
    task = run(store, configs, httpx.MockTransport(edit_server(bodies)), project_id, session,
               {'tool': 'video-edit', 'sourceAssetIds': [source], 'parameters': {'prompt': '把垃圾桶换成花坛'}})
    assert task['status'] == 'failed' and '框选' in task['error']
    task = run(store, configs, httpx.MockTransport(edit_server(bodies)), project_id, session,
               {'tool': 'video-edit', 'sourceAssetIds': [source], 'parameters': {'prompt': '把垃圾桶换成花坛'},
                'boxes': [{'x': 32, 'y': 0, 'width': 32, 'height': 36}]})
    assert task['status'] == 'succeeded', task['error']
    region = mask_part(bodies[0], 'video_noise_mask')
    assert len(bodies) == 2 and region[0][0] == 0.0 and region[0][-1] == 1.0 and mask_part(bodies[0], 'audio_noise_mask') == 0.0
    assert abs(task['outputs'][0]['durationMs'] - 20000) < 500
    bodies.clear()
    clip = upload(store, project_id, session, 'clip.mp4', sound_mp4(5))
    task = run(store, configs, httpx.MockTransport(edit_server(bodies)), project_id, session,
               {'tool': 'video-subtitle-erasure', 'sourceAssetIds': [clip], 'parameters': {'confirmed': True}})
    band = mask_part(bodies[0], 'video_noise_mask')
    assert task['status'] == 'succeeded' and band[0] == [0.0] and band[-1] == [1.0]
    assert b'name="negative_prompt"' in bodies[0] and b'continues the surrounding scene' in bodies[0]
    assert b'subtitles' not in mask_part_raw(bodies[0], 'prompt')


def test_video_prompts_are_translated_only_when_a_chat_model_is_connected():
    from museshow.application.tool_operations import ToolContext

    async def chat(request):
        return 'The girl turns toward the sea'

    def context(chat_model):
        return ToolContext(sources=[], mask=None, boxes=[], parameters={}, image_model=None, video_model=None,
                           progress=None, chat_model=chat_model)
    assert asyncio.run(context(chat).video_prompt('女孩转身望向大海', 'Keep it.')) == 'The girl turns toward the sea. Keep it.'
    assert asyncio.run(context(None).video_prompt('女孩转身望向大海', 'Keep it.')) == '女孩转身望向大海. Keep it.'
    assert asyncio.run(context(chat).video_prompt('', 'Keep it.')) == 'Keep it.'


def test_audio_separation_is_local(project):
    store, project_id, session = project
    configs = configure(store)
    clip = upload(store, project_id, session, 'clip.mp4', sound_mp4(2))
    task = run(store, configs, None, project_id, session,
               {'tool': 'audio-separation', 'sourceAssetIds': [clip], 'parameters': {'mode': 'all'}})
    assert task['status'] == 'succeeded', task['error']
    assert [item['kind'] for item in task['outputs']] == ['audio', 'video']
    task = run(store, configs, None, project_id, session,
               {'tool': 'audio-separation', 'sourceAssetIds': [clip], 'parameters': {'mode': 'voice'}})
    assert task['status'] == 'succeeded' and task['outputs'][0]['kind'] == 'audio'
    mono = upload(store, project_id, session, 'mono.mp4', sound_mp4(2, channels=1))
    task = run(store, configs, None, project_id, session,
               {'tool': 'audio-separation', 'sourceAssetIds': [mono], 'parameters': {'mode': 'backgroundSound'}})
    assert task['status'] == 'failed' and '单声道' in task['error']
    with pytest.raises(ProjectError, match='音轨分离'):
        asyncio.run(ToolTasks(store, configs, CanvasProjects(store).assets).submit(
            project_id, {'id': str(uuid4()), 'tool': 'audio-separation', 'sourceAssetIds': [clip], 'parameters': {'mode': 'soundEffects'}}, session))


def test_interrupted_tasks_are_reported_after_restart(project):
    store, project_id, session = project
    tools = ToolTasks(store, configure(store), CanvasProjects(store).assets)
    with store.transaction() as db:
        directory = store._owner(db, project_id)
    task_id = str(uuid4())
    folder = child(directory, 'tool-tasks')
    folder.mkdir(exist_ok=True)
    (folder / f'{task_id}.json').write_text(json.dumps({'id': task_id, 'status': 'running', 'tool': 'outpaint'}))
    assert tools.get(project_id, task_id)['status'] == 'interrupted'


def test_qwen_image_edits_with_condition_images_on_its_grid_without_strength():
    from museshow.domain.capabilities import ImageRequest
    from museshow.domain.input_rules import input_rules
    config = {'kind': 'image', 'url': 'http://gpu:8210/v1', 'modelId': 'Qwen/Qwen-Image-2.1', 'protocol': 'openai', 'connectionType': 'self_hosted'}
    rules = input_rules(config)
    assert rules['profile'] == 'vllm-omni-qwen-image' and rules['maxImages'] == 4 and 'image' in rules['allowedKinds']
    adapter = adapter_for(config)
    assert adapter.capabilities == {'image.generate', 'image.edit', 'image.cutout'} and adapter.size(1366, 768) == (1376, 768)
    calls = []
    adapter.transport = httpx.MockTransport(images_server(calls))
    result = asyncio.run(adapter.image(config, ImageRequest(prompt='换成黄色雨衣', width=1000, height=600, image=png(), strength=0.7,
                                                            references=(png(color='red'),) * 5)))
    body = calls[0]
    assert result.suffix == 'png' and body.count(b'name="image"') == 4 and b'name="strength"' not in body
    assert b'name="size"\r\n\r\n992x608' in body


def test_cutout_keeps_original_pixels_with_the_model_matte(project):
    store, project_id, session = project
    configs = ModelConfigs(store.repository)
    configs.save('image', 'http://gpu:8210/v1', 'Qwen/Qwen-Image-2.1', '', connection_type='self_hosted', protocol='openai')
    source = upload(store, project_id, session, 'blue.png', png((64, 48), 'blue'))
    bodies = []

    def matte(request):
        bodies.append(request.read())
        layer = Image.new('RGBA', (64, 48), (0, 0, 0, 0))
        layer.paste((200, 200, 200, 255), (16, 8, 48, 40))
        out = io.BytesIO()
        layer.save(out, 'PNG')
        return httpx.Response(200, json={'data': [{'b64_json': base64.b64encode(out.getvalue()).decode()}]})
    task = run(store, configs, httpx.MockTransport(matte), project_id, session, {'tool': 'cutout', 'sourceAssetIds': [source]})
    assert task['status'] == 'succeeded', task['error']
    assert b'name="background"' in bodies[0] and b'RGBA' in bodies[0]
    with store.transaction() as db:
        directory = store._owner(db, project_id)
    image = Image.open(io.BytesIO(child(child(directory, 'assets'), task['outputs'][0]['id']).read_bytes()))
    assert image.mode == 'RGBA' and image.getpixel((32, 24)) == (0, 0, 255, 255) and image.getpixel((2, 2))[3] == 0


def box_mask(size, box):
    mask = Image.new('L', size, 0)
    mask.paste(255, box)
    out = io.BytesIO()
    mask.save(out, 'PNG')
    return base64.b64encode(out.getvalue()).decode()


def segmentation_server(log, answers, *, edits=None):
    """SAM 3 image endpoint answering per prompt (or per box when the prompt is empty), plus optional image edits."""
    def handle(request):
        body = request.read()
        if request.url.path == '/v1/images/edits' and edits is not None:
            return images_server(edits)(httpx.Request('POST', request.url, content=body, headers=request.headers))
        assert request.url.path == '/v1/images/segmentations'
        field = lambda name: body.split(f'name="{name}"\r\n\r\n'.encode(), 1)[1].split(b'\r\n', 1)[0].decode() if f'name="{name}"'.encode() in body else ''
        key = field('prompt') or field('boxes')
        log.append(key)
        return httpx.Response(200, json={'width': 64, 'height': 48, 'mask_format': 'png', 'data': [
            {'score': score, 'box': list(box), 'mask': box_mask((64, 48), box)} for score, box in answers.get(key, [])]})
    return handle


def output_rgba(store, project_id, task, index=0):
    with store.transaction() as db:
        directory = store._owner(db, project_id)
    return Image.open(io.BytesIO(child(child(directory, 'assets'), task['outputs'][index]['id']).read_bytes())).convert('RGBA')


def test_vision_models_default_to_the_vllm_omni_protocol(project):
    store, _, _ = project
    saved = ModelConfigs(store.repository).save('vision', 'http://gpu:8230/v1', 'facebook/sam3', '', connection_type='self_hosted')
    assert saved['protocol'] == 'vllm_omni' and saved['inputRules']['profile'] == 'vllm-omni-segmentation'
    with pytest.raises(ProjectError, match='不兼容'):
        ModelConfigs(store.repository).save('vision', 'http://gpu:8230/v1', 'facebook/sam3', '', connection_type='self_hosted', protocol='openai')


def test_layer_decompose_splits_distinct_objects_and_fills_the_background(project):
    store, project_id, session = project
    source = upload(store, project_id, session, 'blue.png', png())
    log, edits = [], []
    # "person" and "animal" find the same region; it becomes one layer.
    answers = {'person': [(0.9, (0, 0, 32, 48))], 'animal': [(0.6, (0, 0, 32, 48))], 'vehicle': [(0.8, (40, 10, 60, 30))]}
    transport = httpx.MockTransport(segmentation_server(log, answers, edits=edits))
    task = run(store, configure(store, SAM3, ZIMAGE), transport, project_id, session,
               {'tool': 'layer-decompose', 'sourceAssetIds': [source], 'parameters': {'mode': 'smart'}})
    assert task['status'] == 'succeeded', task['error']
    assert [item['title'] for item in task['outputs']] == ['背景', '图层 1 · 人物', '图层 2 · 交通工具']
    assert log[:3] == ['person', 'animal', 'vehicle'] and len(edits) == 1
    background, person, vehicle = (output_rgba(store, project_id, task, index) for index in range(3))
    # The background is redrawn (red) under the layers and keeps the source elsewhere.
    assert background.getpixel((10, 20))[:3] == (255, 0, 0) and background.getpixel((46, 44))[:3] == (0, 0, 255)
    assert person.getpixel((10, 20)) == (0, 0, 255, 255) and person.getpixel((50, 20))[3] == 0
    assert vehicle.getpixel((50, 20))[3] == 255 and vehicle.getpixel((10, 20))[3] == 0


def test_layer_decompose_by_boxes_and_description_without_an_editor(project):
    store, project_id, session = project
    source = upload(store, project_id, session, 'blue.png', png())
    log = []
    # An exemplar box returns every similar object; only the enclosed one is kept.
    answers = {'[[40.0, 10.0, 60.0, 30.0]]': [(0.9, (0, 0, 20, 20)), (0.8, (41, 11, 59, 29))],
               'person': [(0.9, (0, 0, 32, 48))], 'dog': []}
    transport = httpx.MockTransport(segmentation_server(log, answers))
    configs = configure(store, SAM3)
    task = run(store, configs, transport, project_id, session,
               {'tool': 'layer-decompose', 'sourceAssetIds': [source], 'parameters': {'mode': 'boxes'},
                'boxes': [{'x': 40, 'y': 10, 'width': 20, 'height': 20}]})
    assert task['status'] == 'succeeded', task['error']
    assert [item['title'] for item in task['outputs']] == ['背景（未补全）', '图层 1 · 对象 1']
    layer = output_rgba(store, project_id, task, 1)
    assert layer.getpixel((50, 20))[3] == 255 and layer.getpixel((5, 5))[3] == 0
    assert output_rgba(store, project_id, task, 0).getpixel((50, 20))[3] == 0
    # Common Chinese subjects map to concepts without a chat model; other words need one.
    task = run(store, configs, transport, project_id, session,
               {'tool': 'layer-decompose', 'sourceAssetIds': [source], 'parameters': {'mode': 'description', 'prompt': '人物，狗'}})
    assert task['status'] == 'succeeded' and log[-2:] == ['person', 'dog']
    task = run(store, configs, transport, project_id, session,
               {'tool': 'layer-decompose', 'sourceAssetIds': [source], 'parameters': {'mode': 'description', 'prompt': '吉他'}})
    assert task['status'] == 'failed' and '吉他' in task['error']


def tracking_server(log, *, empty=False):
    def handle(request):
        body = request.read()
        assert request.url.path == '/v1/videos/segmentations'
        log.append(body.split(b'name="prompt"\r\n\r\n', 1)[1].split(b'\r\n', 1)[0].decode())
        # Left half of a 64x36 frame, column-major and starting with a background run.
        instance = {'id': 0, 'score': 0.9, 'box': [0, 0, 32, 36], 'mask': {'size': [36, 64], 'counts': [0, 32 * 36, 32 * 36]}}
        frames = [{'frame_index': index, 'instances': [] if empty else [instance]} for index in range(24)]
        return httpx.Response(200, json={'width': 64, 'height': 36, 'num_frames': 24, 'fps': 24.0, 'objects': [], 'frames': frames})
    return handle


def probe(path, entries):
    return json.loads(subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries', entries, '-of', 'json', str(path)],
                                     capture_output=True, check=True).stdout)['streams'][0]


def test_video_matting_keeps_the_tracked_subject_over_the_chosen_background(project, tmp_path):
    store, project_id, session = project
    source = upload(store, project_id, session, 'clip.mp4', sound_mp4(1))
    log = []
    configs = configure(store, SAM3)
    task = run(store, configs, httpx.MockTransport(tracking_server(log)), project_id, session,
               {'tool': 'video-matting', 'sourceAssetIds': [source], 'parameters': {'background': 'green'}})
    assert task['status'] == 'succeeded', task['error']
    assert log == ['person'] and task['outputs'][0]['type'] == 'video/mp4'
    with store.transaction() as db:
        directory = store._owner(db, project_id)
    path = child(child(directory, 'assets'), task['outputs'][0]['id'])
    frame = Image.open(io.BytesIO(subprocess.run(['ffmpeg', '-v', 'error', '-i', str(path), '-frames:v', '1', '-f', 'image2', '-c:v', 'png', 'pipe:1'],
                                                 capture_output=True, check=True).stdout)).convert('RGB')
    red, green, blue = frame.getpixel((58, 18))
    assert green > 200 and red < 60 and blue < 60  # The untracked right half is green screen.
    task = run(store, configs, httpx.MockTransport(tracking_server(log)), project_id, session,
               {'tool': 'video-matting', 'sourceAssetIds': [source], 'parameters': {'background': 'transparent', 'prompt': '狗'}})
    assert task['status'] == 'succeeded', task['error']
    assert log[-1] == 'dog' and task['outputs'][0]['type'] == 'video/webm'
    path = child(child(directory, 'assets'), task['outputs'][0]['id'])
    assert probe(path, 'stream_tags=alpha_mode').get('tags', {}).get('alpha_mode') == '1'
    task = run(store, configs, httpx.MockTransport(tracking_server(log, empty=True)), project_id, session,
               {'tool': 'video-matting', 'sourceAssetIds': [source], 'parameters': {'background': 'black'}})
    assert task['status'] == 'failed' and '没有识别到「人物」' in task['error']
