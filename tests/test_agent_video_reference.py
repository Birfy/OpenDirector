"""A chat edit must reach the video provider with the original instructions and media."""
import io
import json
import time
from types import SimpleNamespace
from uuid import uuid4

from fastapi.testclient import TestClient
import httpx
from PIL import Image
import pytest

from museshow.agent.video_edits import video_edit_request
from museshow.domain.references import project_content
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.chat_completions import ChatCompletions
from museshow.integrations.providers import GenerationProviders
from museshow_api.main import create_app
from test_agent_canvas import sse
from test_multimodal_references import small_video


def reply_tool(name, args, call_id):
    return httpx.Response(200, text=sse({'tool_calls': [{'index': 0, 'id': call_id,
        'function': {'name': name, 'arguments': json.dumps(args)}}]}) + sse(finish='tool_calls'))


def fixture(tmp_path, small_video, hosted=True):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    owner = store.create('视频编辑', str(uuid4()), session)['id']
    canvas = CanvasProjects(store)
    video = canvas.import_file(owner, str(uuid4()), '原片.mp4', small_video, session, str(uuid4()))
    image = io.BytesIO()
    Image.new('RGB', (64, 64), 'red').save(image, 'PNG')
    photo = canvas.import_file(owner, str(uuid4()), '角色.png', image.getvalue(), session, str(uuid4()))
    configs = ModelConfigs(store.repository)
    agent = configs.save('agent', 'https://chat.test', 'chat', 'private')
    model = configs.save('video', 'http://localhost:8091/v1', 'FastH3-Omni', '', connection_type='self_hosted') if hosted else configs.save(
        'video', 'https://ark.cn-beijing.volces.com/api/plan/v3', 'doubao-seedance-2.0', 'private')
    sources = {n['assetId']: n for n in canvas.snapshot(owner)['canvas']['nodes']}
    def ref(asset):
        return {'type': 'reference', 'assetId': asset['id'], 'name': asset['name'],
                'nodeId': sources[asset['id']]['id'], 'fingerprint': asset['fingerprint']}
    content = [{'type': 'text', 'text': '请将视频'}, ref(video),
               {'type': 'text', 'text': '中的人物替换为'}, ref(photo),
               {'type': 'text', 'text': '，保持原视频动作、背景和运镜，仅替换人物。'}]
    return SimpleNamespace(**locals())


@pytest.mark.parametrize('first_call', ['video', 'image_fallback', 'new_plan'])
def test_chat_edit_keeps_video_connection_original_prompt_and_actual_multipart(tmp_path, small_video, first_call):
    c = fixture(tmp_path, small_video)
    requests, chats = [], []
    def handle_generation(request):
        requests.append(request)
        if request.method == 'POST':
            assert request.url.path == '/v1/videos'
            assert request.content.count(b'name="input_references"') == 2
            assert small_video in request.content
            assert c.image.getvalue() in request.content
            assert '保持原视频动作、背景和运镜'.encode() in request.content
            assert '虚构夜店新剧情'.encode() not in request.content
            return httpx.Response(200, json={'id': 'video-edit-existing'})
        if request.url.path.endswith('/content'):
            return httpx.Response(200, content=small_video)
        return httpx.Response(200, json={'id': 'video-edit-existing', 'status': 'completed'})
    wrong = {'kind': 'video', 'name': '人物替换', 'prompt': '虚构夜店新剧情',
             'referenceIds': [c.photo['id']], 'videoMode': 'first_frame'}
    def handle_chat(request):
        payload = json.loads(request.content)
        chats.append(payload)
        if len(chats) == 1:
            context = next(m['content'] for m in payload['messages'] if isinstance(m['content'], str) and m['content'].startswith('当前项目状态（数据）：'))
            bound = json.loads(context.split('\n', 1)[1])['videoEditRequest']
            assert bound['sourceVideoIds'] == [c.video['id']]
            assert bound['promptContent'] == c.content
            assert '本期不接通视频文件' not in payload['messages'][0]['content']
            if first_call == 'image_fallback':
                return reply_tool('generate_asset', {**wrong, 'kind': 'image'}, 'bad-image')
            if first_call == 'new_plan':
                return reply_tool('start_production_plan', {'title': '重新构思的剧情', 'shots': [
                    {'title': '新镜头', 'videoPrompt': '虚构夜店新剧情', 'referenceIds': [c.photo['id']]}]}, 'bad-plan')
            return reply_tool('generate_asset', wrong, 'edit')
        result = json.loads(payload['messages'][-1]['content'])
        if 'error' in result:
            assert '引用原视频' in result['error']
            return reply_tool('generate_asset', wrong, 'edit')
        assert result['referenceIds'] == [c.video['id'], c.photo['id']]
        assert result['videoMode'] == 'reference'
        return httpx.Response(200, text=sse({'content': '已保留原视频和原始替换要求，提交参考生成。'}) + sse(finish='stop'))
    provider = GenerationProviders(c.store, httpx.MockTransport(handle_generation), poll_interval=0)
    app = create_app(c.store, ChatCompletions(httpx.MockTransport(handle_chat)), provider)
    with TestClient(app, headers={'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}) as client:
        response = client.post(f'/api/data/{c.owner}/chat', json={'id': str(uuid4()), 'modelId': c.agent['id'],
            'text': 'ignored', 'content': c.content, 'assets': [c.video['id'], c.photo['id']],
            'modelSelections': {'video': c.model['id']}})
        assert response.status_code == 200 and '"error": null' in response.text, response.text
        for _ in range(200):
            state = client.get(f'/api/projects/{c.owner}/canvas').json()
            if state['tasks'] and state['tasks'][0]['status'] not in {'queued', 'running'}:
                break
            time.sleep(.01)
        assert len(state['tasks']) == 1
        task = state['tasks'][0]
        assert task['status'] == 'succeeded', task.get('error')
        assert task['prompt'] == project_content(c.content)[0]
        assert task['promptContent'] == c.content
        assert task['referenceIds'] == [c.video['id'], c.photo['id']]
        assert task['referenceInputs']['references'][0]['role'] == 'reference_video'
        node = next(n for n in state['canvas']['nodes'] if n['id'] == task['nodeId'])
        assert node['referenceIds'] == task['referenceIds'] and node['assetId'] == task['assetId']
        assert len(state['canvas']['nodes']) == 3
        assert sum(r.method == 'POST' for r in requests) == 1


def test_edit_with_unsupported_selected_model_does_not_downgrade_or_submit(tmp_path, small_video):
    c = fixture(tmp_path, small_video, hosted=False)
    calls = []
    def handle_chat(request):
        calls.append(request)
        if len(calls) == 1:
            return reply_tool('generate_asset', {'kind': 'video', 'prompt': '新场景', 'referenceIds': [c.photo['id']]}, 'bad-edit')
        result = json.loads(json.loads(request.content)['messages'][-1]['content'])
        assert '所选视频模型不支持视频参考' in result['error']
        return httpx.Response(200, text=sse({'content': '请选择支持视频参考的模型，尚未提交生成。'}) + sse(finish='stop'))
    app = create_app(c.store, ChatCompletions(httpx.MockTransport(handle_chat)), GenerationProviders(c.store,
        httpx.MockTransport(lambda _: pytest.fail('Must not call a media provider'))))
    with TestClient(app, headers={'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}) as client:
        result = client.post(f'/api/data/{c.owner}/chat', json={'id': str(uuid4()), 'modelId': c.agent['id'],
            'text': 'ignored', 'content': c.content, 'assets': [c.video['id'], c.photo['id']], 'modelSelections': {'video': c.model['id']}})
        assert '尚未提交生成' in result.text
        state = client.get(f'/api/projects/{c.owner}/canvas').json()
        assert not state['tasks'] and len(state['canvas']['nodes']) == 2


@pytest.mark.parametrize('text,expected', [
    ('请替换原视频中的人物，保留动作', True),
    ('Replace the person using the attached character image', True),
    ('分析视频风格，暂不生成', False),
    ('不要参考原视频，修改文字后生成全新场景', False),
    ('编辑成多镜：请制作一份分镜脚本', False),
])
def test_edit_intent_uses_current_user_words_only(text, expected):
    turn = SimpleNamespace(conversation={'messages': [
        {'role': 'user', 'text': '替换人物', 'assets': [{'id': 'old', 'type': 'video/mp4'}]},
        {'role': 'assistant', 'text': '已经替换', 'assets': []},
        {'role': 'user', 'text': text, 'assets': [{'id': 'current', 'type': 'video/mp4', 'name': '替换编辑.mp4'}]},
        {'role': 'assistant', 'text': '', 'assets': []}]})
    result = video_edit_request(turn)
    assert bool(result) == expected
    if result:
        assert result['sourceVideoIds'] == ['current'] and result['prompt'] == text
