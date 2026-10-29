"""Inline bindings survive chat, generation, history and scoped repair boundaries."""
import asyncio
from copy import deepcopy
from uuid import UUID, uuid4, uuid5

import httpx
import pytest
from fastapi.testclient import TestClient
from pydantic import ValidationError

from museshow.domain.canvas import CanvasNode
from museshow.domain.references import project_content
from museshow.domain.input_rules import MAX_REFERENCES
from museshow.integrations.reference_inputs import generation_references
from museshow.infrastructure.canvas_versions import apply_version, node_history
from museshow.integrations.chat_completions import ChatCompletions, reference_content
from museshow.integrations.volcengine import VolcengineGeneration
from museshow_api.main import create_app
from museshow_api.models import ChatRequest
from test_chat import completion, events, setup
from canvas_helpers import close, context


def document(asset, text='参考', suffix='完成修改'):
    return [{'type': 'text', 'text': text},
            {'type': 'reference', 'assetId': asset['id'], 'name': asset['name'], 'fingerprint': asset['fingerprint'],
             **({'nodeId': str(uuid5(UUID(asset['projectId']), asset['id']))} if asset.get('projectId') else {})},
            {'type': 'text', 'text': suffix}]


def test_document_projection_is_ordered_deduplicated_and_speech_excludes_labels():
    a, b = {'id': str(uuid4()), 'name': '同名.png', 'fingerprint': 'a'}, {'id': str(uuid4()), 'name': '同名.png', 'fingerprint': 'b'}
    content = document(a, '我想把', '中的字改掉') + document(b, '，保留', '，再对比') + document(a, '', '。')
    text, ids = project_content(content)
    assert ids == [a['id'], b['id']]
    assert text.count('参考1：') == 2 and text.count('参考2：') == 1
    assert project_content(content, speech=True)[0] == '我想把中的字改掉，保留，再对比。'
    node = CanvasNode(id=uuid4(), kind='image', prompt='stale', referenceIds=[], promptContent=content)
    assert node.prompt == text and list(map(str, node.referenceIds)) == ids
    with pytest.raises(ValidationError):
        ChatRequest(id=uuid4(), modelId=uuid4(), text='mismatch', content=content, assets=[b['id'], a['id']])
    with pytest.raises(ValueError):
        project_content([{'type': 'text', 'text': 'a' * 20000}, *document(a)])
    with pytest.raises(ValueError):
        project_content([document({'id': str(uuid4()), 'name': 'a', 'fingerprint': ''})[1] for _ in range(MAX_REFERENCES + 1)])


def test_chat_saves_inline_positions_and_provider_receives_bound_reference(tmp_path):
    calls = []
    def handler(request):
        import json
        calls.append(json.loads(request.content))
        return httpx.Response(200, text=completion())
    store, _, model, headers, _ = setup(tmp_path, ChatCompletions(httpx.MockTransport(handler)))
    owner = store.create('引用聊天', str(uuid4()), headers['X-MuseShow-Session'])['id']
    asset_id = str(uuid4())
    store.save_asset(owner, asset_id, {'name': '说明.md', 'type': 'text/markdown', 'fingerprint': 'original'}, '原始说明'.encode(), headers['X-MuseShow-Session'])
    asset = store.asset(owner, asset_id)[1]
    content = document(asset, '请修改', '中的名字')
    content[1]['nodeId'] = str(uuid5(UUID(owner), asset_id))
    with TestClient(create_app(store, ChatCompletions(httpx.MockTransport(handler))), headers=headers) as client:
        response = client.post(f'/api/data/{owner}/chat', json={'id': str(uuid4()), 'modelId': model['id'], 'text': 'ignored', 'content': content, 'assets': [asset_id]})
        assert response.status_code == 200
        saved = events(response)[-1]['conversation']
        user = saved['messages'][-2]
        assert user['content'] == content and user['text'] == project_content(content)[0]
        assert saved.get('draftContent') is None and saved['assets'] == []
        blocks = calls[0]['messages'][-1]['content']
        assert blocks[0]['text'] == user['text']
        assert f'参考1：{asset["name"]}' in blocks[1]['text'] and asset_id in blocks[1]['text']
        assert blocks[2]['text'].endswith('原始说明')
        before = deepcopy(store.conversation(owner))
        bad = client.post(f'/api/data/{owner}/chat', json={'id': str(uuid4()), 'modelId': model['id'], 'text': '', 'content': content, 'assets': []})
        assert bad.status_code == 422 and store.conversation(owner) == before
        assert len(calls) == 1


def test_first_project_and_draft_restore_preserve_document(tmp_path):
    store, _, model, headers, _ = setup(tmp_path, None)
    session = headers['X-MuseShow-Session']
    asset_id = str(uuid4())
    store.save_asset('scratch', asset_id, {'name': '参考.txt', 'type': 'text/plain', 'fingerprint': 'original'}, b'notes', session)
    asset = store.asset('scratch', asset_id)[1]
    content = document(asset)
    provider = ChatCompletions(httpx.MockTransport(lambda _: httpx.Response(200, text=completion('引用项目'))))
    with TestClient(create_app(store, provider), headers=headers) as client:
        attachment = {key: asset[key] for key in ('id', 'name', 'size', 'type', 'fingerprint')}
        response = client.post('/api/projects/from-message', json={'id': str(uuid4()), 'turnId': str(uuid4()), 'modelId': model['id'],
            'draft': 'stale', 'draftContent': content, 'assets': [attachment], 'thinking': 'auto'})
        assert response.status_code == 200
        owner = response.json()['id']
        saved = client.get(f'/api/data/{owner}/conversation').json()
        assert saved['draftContent'] == content and saved['draft'] == project_content(content)[0]
        assert saved['assets'] == [attachment] and store.asset(owner, asset_id)[0] == b'notes'
        assert client.patch(f'/api/data/{owner}/draft', json={'draft': '旧客户端编辑', 'assets': [], 'thinking': 'auto'}).status_code == 200
        saved = client.get(f'/api/data/{owner}/conversation').json()
        assert saved['draft'] == '旧客户端编辑' and saved.get('draftContent') is None


def test_generation_history_and_atomic_apply_restore_document_and_undo(tmp_path):
    c = context(tmp_path)
    async def run():
        canvas = c.generation.canvas
        content = document(c.reference, '按', '生成')
        node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image'}, c.session)
        async def generate(doc, text):
            current = canvas._node(canvas.snapshot(c.owner)['canvas'], node['id'])
            task = await c.generation.submit(c.owner, node['id'], {'id': str(uuid4()), 'expectedRevision': current['revision'],
                'modelConfigId': c.models['image'], 'inputs': {'prompt': text, 'promptContent': doc, 'referenceIds': []}}, c.session)
            await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
            return task
        first = await generate(content, 'stale')
        assert first['promptContent'] == content
        assert first['referenceIds'] == [c.reference['id']] and first['prompt'] == project_content(content)[0]
        assert first['inputSnapshot']['node']['promptContent'] == content
        await generate(None, '第二版')
        history = node_history(canvas, c.owner, node['id'])
        assert history['versions'][0]['promptContent'] == content
        before = deepcopy(history['node'])
        receipts = {p: p.read_bytes() for p in (c.directory / 'tasks').glob('*.json')}
        original = history['versions'][0]
        applied = apply_version(canvas, c.owner, node['id'], original['asset']['id'], before['revision'], original['asset']['fingerprint'], c.session)
        assert applied['promptContent'] == content and applied['referenceIds'] == [c.reference['id']]
        state = canvas.snapshot(c.owner)['canvas']
        undone = canvas.history(c.owner, 'undo', state['history']['undo']['id'], str(uuid4()), c.session)
        restored = canvas._node(undone, node['id'])
        assert restored['promptContent'] == before['promptContent'] and restored['assetId'] == before['assetId']
        assert {p: p.read_bytes() for p in receipts} == receipts and len(c.provider.calls) == 2
        canvas.patch(c.owner, node['id'], {'promptContent': content}, c.session)
        changed = canvas.patch(c.owner, node['id'], {'prompt': '旧接口修改', 'referenceIds': []}, c.session)
        assert changed['prompt'] == '旧接口修改' and changed['promptContent'] is None
        await close(c)
    asyncio.run(run())


def test_provider_reference_numbering_and_audio_never_speaks_labels(tmp_path):
    c = context(tmp_path)
    provider = VolcengineGeneration(c.store)
    content = document(c.reference, '修改', '中的颜色')
    task = {'kind': 'image', 'projectId': c.owner, 'prompt': project_content(content)[0], 'promptContent': content, 'referenceIds': [c.reference['id']]}
    prepared = generation_references(c.store, task, {'url': 'https://model.test', 'modelId': 'seedream'})
    text, images = prepared['prompt'], prepared['images']
    assert '参考1：' in text and '对应第1张参考图片' in text and len(images) == 1
    prepared = generation_references(c.store, {**task, 'kind': 'audio'}, {'url': 'https://model.test', 'modelId': 'seed-tts-2.0'})
    text, images = prepared['prompt'], prepared['images']
    assert text == '修改中的颜色' and images == []
    blocks = reference_content(c.store, c.owner, {'text': 'stale', 'content': content, 'assets': [{'id': c.reference['id']}]})
    assert blocks[0]['text'] == project_content(content)[0] and blocks[2]['type'] == 'image_url'


def test_reference_document_changes_are_protected_by_existing_adoption_guard(tmp_path):
    from museshow.infrastructure.adoption import node_basis, reason
    c = context(tmp_path)
    content = document(c.reference)
    node = CanvasNode(id=uuid4(), kind='image', promptContent=content, modelConfigId=c.models['image']).model_dump(mode='json')
    task_id = str(uuid4()); node['taskId'] = task_id
    model = c.generation.configs.resolve(c.models['image'], 'image')
    task = {'id': task_id, 'kind': 'image', 'modelConfigId': c.models['image'], 'baseURL': model['url'],
            'model': 'seedream', 'inputSnapshot': {'node': node_basis(node), 'references': {c.reference['id']: c.reference['fingerprint']}}}
    records = c.generation.canvas.assets._records(c.directory, c.owner)
    assert reason(task, c.directory, node, records, c.generation.configs) is None
    changed = {**node, 'promptContent': None}
    assert reason(task, c.directory, changed, records, c.generation.configs) == 'node_changed'
    legacy = deepcopy(task); legacy['inputSnapshot']['node'].pop('promptContent')
    assert reason(legacy, c.directory, node, records, c.generation.configs) == 'node_changed'


def test_agent_tools_keep_original_chat_document_and_can_submit_structured_generation(tmp_path):
    from types import SimpleNamespace
    from museshow.agent.loop import AgentLoop, Generate
    c = context(tmp_path)
    config = c.generation.configs.save('agent', 'https://writer.test', 'writer-model', 'private')
    content = document(c.reference, '根据', '写剧本')
    turn = SimpleNamespace(id=str(uuid4()), owner=c.owner, session=c.session, config=config, selections=c.models,
        conversation={'messages': [{'text': project_content(content)[0], 'content': content, 'assets': [c.reference]}, {}]})
    async def run():
        loop = AgentLoop(c.store, c.generation.configs, c.generation, None)
        result = await loop.execute(turn, 'save_text_asset', {'name': '剧本.md', 'text': '剧本正文'}, str(uuid4()))
        history = node_history(c.generation.canvas, c.owner, result['nodeId'])
        assert history['versions'][0]['promptContent'] == content
        value = Generate(kind='image', prompt='fallback', promptContent=content).model_dump(mode='json')
        generated = await loop.execute(turn, 'generate_asset', value, str(uuid4()))
        await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
        history = node_history(c.generation.canvas, c.owner, generated['nodeId'])
        assert history['versions'][0]['promptContent'] == content
        assert history['versions'][0]['referenceIds'] == [c.reference['id']]
        await close(c)
    asyncio.run(run())
