import asyncio
import base64
import io
import json
from uuid import uuid4

import httpx
from PIL import Image
import pytest

from museshow.application.generation import Generation
from museshow.domain.input_rules import input_rules
from museshow.domain.projects import ProjectError
from museshow.infrastructure.asset_catalog import AssetCatalog
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.providers import GenerationProviders
from test_production_repairs import close, context, wait

ZIMAGE = {'kind': 'image', 'url': 'http://gpu-box:8200/v1', 'modelId': 'Tongyi-MAI/Z-Image-Turbo', 'apiKey': 'token'}


def png():
    out = io.BytesIO()
    Image.new('RGB', (16, 12), 'blue').save(out, 'PNG')
    return out.getvalue()


def test_z_image_profile_is_text_only_and_routes_to_its_adapter():
    rules = input_rules(ZIMAGE)
    assert rules['profile'] == 'vllm-omni-image' and rules['allowedKinds'] == ['text'] and rules['maxImages'] == 0
    assert input_rules({**ZIMAGE, 'url': 'https://example.test/omni/v1', 'modelId': 'z-image-turbo'})['profile'] == 'vllm-omni-image'
    assert input_rules({**ZIMAGE, 'kind': 'video'})['profile'] == 'compatible'
    assert input_rules({**ZIMAGE, 'modelId': 'Tongyi-MAI/Z-Image'})['profile'] == 'compatible'
    providers = GenerationProviders(None)
    assert providers._profile_adapter(ZIMAGE) is providers.vllm_omni_image
    assert providers._profile_adapter({**ZIMAGE, 'protocol': 'openai', 'authMode': 'none'}) is providers.vllm_omni_image
    assert providers._profile_adapter({**ZIMAGE, 'modelId': 'other'}) is None
    with pytest.raises(ProjectError, match='只用于图片生成'):
        providers.vllm_omni_image.validate('video', ZIMAGE)


@pytest.fixture
def project(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    value = store.create('出图测试', str(uuid4()), session)
    return store, value, session, CanvasProjects(store)


def server(posts, reply, authorization='Bearer token'):
    def handle(request):
        assert request.headers.get('authorization') == authorization
        assert request.method == 'POST' and request.url.path == '/v1/images/generations'
        posts.append(json.loads(request.read()))
        return reply
    return handle


def run_image(project, reply, references=(), *, self_hosted=False):
    store, value, session, canvas = project
    configs = ModelConfigs(store.repository)
    config = (configs.save('image', ZIMAGE['url'], ZIMAGE['modelId'], '', connection_type='self_hosted') if self_hosted
              else configs.save('image', ZIMAGE['url'], ZIMAGE['modelId'], 'token'))
    posts = []

    async def run():
        manager = Generation(store, configs, GenerationProviders(store, httpx.MockTransport(server(posts, reply, None if self_hosted else 'Bearer token')), poll_interval=0))
        try:
            item = canvas.create(value['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
            task = await manager.submit(value['id'], item['id'], {'id': str(uuid4()), 'modelConfigId': config['id'],
                'expectedRevision': item['revision'], 'inputs': {'title': '', 'promptContent': None, 'prompt': '樱花校门前的少女',
                                                                 'referenceIds': list(references)}}, session)
            await asyncio.gather(*(job.future for job in manager.jobs.values()))
            return next(item for item in canvas.snapshot(value['id'])['tasks'] if item['id'] == task['id'])
        finally:
            await manager.close()

    return asyncio.run(run()), posts


def test_generates_a_16_9_png_with_text_references_inlined(project):
    store, value, session, _ = project
    note = AssetCatalog(store).import_file(value['id'], str(uuid4()), '角色设定.md', '黑色长发，红色领结'.encode(), session)
    reply = httpx.Response(200, json={'created': 0, 'data': [{'b64_json': base64.b64encode(png()).decode()}]})
    task, posts = run_image(project, reply, [note['id']])
    assert task['status'] == 'succeeded', (task['error'], task['errorDetails'])
    [payload] = posts
    assert {key: payload[key] for key in ('model', 'size', 'response_format', 'output_format')} == {
        'model': 'Tongyi-MAI/Z-Image-Turbo', 'size': '1344x768', 'response_format': 'b64_json', 'output_format': 'png'}
    assert '樱花校门前的少女' in payload['prompt'] and '黑色长发，红色领结' in payload['prompt']
    assert 'image' not in payload and 'watermark' not in payload
    asset = next(item for item in project[3].snapshot(value['id'])['assets'] if item['id'] == task['assetId'])
    assert asset['kind'] == 'image' and (asset['width'], asset['height']) == (16, 12)


def test_reference_images_are_rejected_before_any_request(project):
    store, value, session, _ = project
    picture = AssetCatalog(store).import_file(value['id'], str(uuid4()), '角色.png', png(), session)
    with pytest.raises(ProjectError, match='不支持参考图片'):
        run_image(project, httpx.Response(500), [picture['id']])


@pytest.mark.parametrize('reply', [
    httpx.Response(200, json={'data': [{'b64_json': base64.b64encode(b'GIF89a').decode()}]}),
    httpx.Response(200, json={'data': []}),
    httpx.Response(400, json={'error': {'message': 'size must be a multiple of 16'}}),
])
def test_bad_responses_fail_the_task(project, reply):
    task, posts = run_image(project, reply)
    assert task['status'] == 'failed' and len(posts) == 1 and task['assetId'] is None


def test_production_keyframes_skip_image_references_for_a_text_only_model(tmp_path):
    c = context(tmp_path)
    zimage = c.generation.configs.save('image', ZIMAGE['url'], ZIMAGE['modelId'], 'token')

    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '两镜', 'shots': [
            {'title': '一镜', 'imagePrompt': '樱花校门', 'referenceIds': [c.reference['id']]},
            {'title': '二镜', 'imagePrompt': '钟楼远景', 'referenceShot': 1}]}, {'image': zimage['id']}, c.session)
        plan = await wait(c)
        assert plan['status'] == 'succeeded', plan['error']
        # Neither the shot's picture nor the earlier keyframe reaches the text-only model.
        assert [step['referenceIds'] for step in plan['steps']] == [[], []]
        assert [task['referenceIds'] for task in c.provider.calls] == [[], []]
        await close(c)

    asyncio.run(run())


def test_self_hosted_config_without_a_key_sends_no_authorization(project):
    reply = httpx.Response(200, json={'data': [{'b64_json': base64.b64encode(png()).decode()}]})
    task, posts = run_image(project, reply, self_hosted=True)
    assert task['status'] == 'succeeded' and len(posts) == 1, (task['error'], task['errorDetails'])
