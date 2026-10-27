import asyncio
import json
import time
from types import SimpleNamespace
from uuid import uuid4

from fastapi.testclient import TestClient
import httpx
import pytest

from museshow.agent.loop import AgentLoop, SCHEMAS
from museshow.agent.production_tools import describe
from museshow.domain.projects import ProjectError
from museshow.infrastructure.execution import read_generation_task
from museshow.infrastructure.local_projects import read_json, write_json
from museshow.integrations.chat_completions import ChatCompletions
from museshow_api.main import create_app
from test_agent_canvas import sse
from test_production_repairs import command, context, close, media, wait


def current(payload):
    message = next(item for item in reversed(payload['messages']) if item['role'] == 'user' and isinstance(item['content'], str) and item['content'].startswith('当前项目状态（数据）：'))
    return json.loads(message['content'].split('\n', 1)[1])


def last_result(payload):
    return json.loads(next(item['content'] for item in reversed(payload['messages']) if item['role'] == 'tool'))


def tool_reply(name, value, call_id):
    return httpx.Response(200, text=sse({'reasoning_content': 'private-repair-reasoning'}) + sse({'tool_calls': [
        {'index': 0, 'id': call_id, 'function': {'name': name, 'arguments': json.dumps(value)}}]}) + sse(finish='tool_calls'))


def final_reply(text):
    return httpx.Response(200, text=sse({'content': text}) + sse(finish='stop'))


def wait_plan(client, owner, status):
    for _ in range(300):
        plan = client.get(f'/api/projects/{owner}/production-plans').json()[0]
        if plan['status'] == status:
            return plan
        time.sleep(.01)
    raise AssertionError(f'Expected {status}, got {plan["status"]}: {plan["error"]}')


def test_chat_adds_four_narrations_in_one_bounded_plan_without_extra_turn(tmp_path, media):
    c = context(tmp_path, media)
    async def initial():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '原四镜', 'shots': [
            {'title': str(i), 'videoPrompt': '原视频' + str(i)} for i in range(4)
        ]}, c.models, c.session)
        assert (await wait(c))['status'] == 'succeeded'
        await close(c)
    asyncio.run(initial())
    before = c.manager.board.snapshot(c.owner)['storyboard']
    agent = c.generation.configs.save('agent', 'https://chat.test', 'deepseek-flash', 'private')
    calls = []
    def handle(request):
        payload = json.loads(request.content)
        calls.append(payload)
        if len(calls) == 1:
            state = current(payload)
            return tool_reply('start_production_plan', {'title': '四镜补旁白', 'shots': [
                {'title': shot['title'], 'shotId': shot['id'], 'expectedRevision': shot['revision'], 'narration': f'第{i + 1}镜旁白。'}
                for i, shot in enumerate(state['shots'])]}, 'narrations')
        assert last_result(payload)['status'] == 'queued'
        return final_reply('四镜旁白已登记，后台将完成生成及采用。')
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}
    with TestClient(create_app(c.store, ChatCompletions(httpx.MockTransport(handle)), c.provider), headers=headers) as client:
        reply_id = str(uuid4())
        response = client.post(f'/api/data/{c.owner}/chat', json={'id': reply_id, 'modelId': agent['id'],
            'text': '请为现有四个镜头分别补一段旁白，保留画面与原声。'})
        assert '"error": null' in response.text, response.text
        result = wait_plan(client, c.owner, 'succeeded')
        assert len(result['steps']) == 4 and all(step['kind'] == 'audio' for step in result['steps'])
        board = client.get(f'/api/projects/{c.owner}/storyboard').json()['storyboard']
        assert len(board['shots']) == 4 and board['orderRevision'] == before['orderRevision']
        for old, new in zip(before['shots'], board['shots']):
            assert old['id'] == new['id'] and old['selected']['visual'] == new['selected']['visual']
            assert old['originalAudioMode'] == new['originalAudioMode'] and new['selected']['audio']
        assert len(c.provider.calls) == 8 and len(calls) == 2
        record = read_json(c.directory / 'agent-runs' / (reply_id + '.json'))
        assert record['status'] == 'complete' and len(record['steps']) == 1


def test_chat_records_keep_current_decision_without_generation_or_selection_changes(tmp_path, media):
    c = context(tmp_path, media)
    async def initial():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '候选决定', 'shots': [
            {'title': '开场', 'videoPrompt': '原视频', 'narration': '原旁白'}]}, c.models, c.session)
        plan = await wait(c)
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][1],
            prompt='新的旁白', adoptionPolicy='candidate_only'), c.session)
        plan = await wait(c)
        await close(c)
        return plan
    plan = asyncio.run(initial())
    before = c.manager.board.snapshot(c.owner)
    calls = []
    agent = c.generation.configs.save('agent', 'https://chat.test', 'deepseek-flash', 'private')
    def handle(request):
        payload = json.loads(request.content); calls.append(payload)
        if len(calls) == 1:
            return tool_reply('get_production_plan', {'planId': plan['id'], 'stepId': plan['steps'][1]['id']}, 'read-decision')
        if len(calls) == 2:
            observed = last_result(payload); step = observed['steps'][0]
            asset = next(a for a in observed['assets'] if a['id'] == step['task']['assetId'])
            return tool_reply('keep_production_candidate', {'planId': plan['id'], 'stepId': step['id'], **step['repairVersions'],
                'assetId': asset['id'], 'assetFingerprint': asset['fingerprint'], 'feedback': '保留原旁白，不采用这份候选'}, 'keep-decision')
        assert '没有重新生成' in last_result(payload)['message']
        return final_reply('已保留原旁白；新候选留在历史中。')
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}
    with TestClient(create_app(c.store, ChatCompletions(httpx.MockTransport(handle)), c.provider), headers=headers) as client:
        reply_id = str(uuid4())
        response = client.post(f'/api/data/{c.owner}/chat', json={'id': reply_id, 'modelId': agent['id'],
            'text': '保留原旁白，不采用这份新候选。'})
        assert '"error": null' in response.text, response.text
        progress = client.get(f'/api/projects/{c.owner}/production-chat').json()['messages'][-1]['snapshot']
        assert progress['candidateCount'] == 0 and progress['issueCount'] == 0
        assert progress['label'] == '本次修复已处理'
        assert client.get(f'/api/projects/{c.owner}/storyboard').json() == before
        assert len(c.provider.calls) == 3 and len(calls) == 3
        record = read_json(c.directory / 'agent-runs' / (reply_id + '.json'))
        assert record['status'] == 'complete' and [step['name'] for step in record['steps']] == ['get_production_plan', 'keep_production_candidate']


def test_chat_repairs_third_shot_using_real_tool_roundtrip_and_reports_acceptance(tmp_path):
    c = context(tmp_path)
    async def initial():
        c.provider.failures.add('三')
        await c.manager.submit(c.owner, str(uuid4()), {'title': '四镜短片', 'shots': [
            {'title': title, 'imagePrompt': title} for title in ('一', '二', '三', '四')]}, c.models, c.session)
        result = await wait(c)
        await close(c)
        return result
    initial_plan = asyncio.run(initial())
    before = c.manager.board.snapshot(c.owner)['storyboard']
    agent = c.generation.configs.save('agent', 'https://chat.test', 'deepseek-flash', 'private-agent-key')
    calls = []
    def handle(request):
        payload = json.loads(request.content)
        calls.append(payload)
        if len(calls) == 1:
            state = current(payload)
            return tool_reply('list_production_plans', {'shotId': state['shots'][2]['id']}, 'locate')
        if len(calls) == 2:
            plan = last_result(payload)['plans'][0]
            return tool_reply('get_production_plan', {'planId': plan['id'], 'stepId': initial_plan['steps'][2]['id']}, 'inspect')
        if len(calls) == 3:
            plan = last_result(payload)
            step = plan['steps'][0]
            assert step['task']['errorDetails']['category'] == 'reference'
            assert step['shot']['number'] == 3
            return tool_reply('repair_production_step', {'planId': plan['id'], 'stepId': step['id'], **step['repairVersions'],
                'action': 'regenerate', 'prompt': '第三镜换参考后的要求', 'referenceIds': [c.reference['id']],
                'feedback': '只更换第三镜参考，保留前两镜'}, 'repair')
        result = last_result(payload)
        assert result['status'] == 'queued' and '尚未生成完成' in result['message']
        return final_reply('已登记第三镜的局部制作，前两镜保持不变。生成完成后可在画布查看。')
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}
    with TestClient(create_app(c.store, ChatCompletions(httpx.MockTransport(handle)), c.provider), headers=headers) as client:
        c.provider.gate.clear()
        reply_id = str(uuid4())
        response = client.post(f'/api/data/{c.owner}/chat', json={'id': reply_id, 'modelId': agent['id'],
            'text': '第三镜换这张参考图继续，保留前两镜', 'assets': [c.reference['id']]})
        assert '"error": null' in response.text and '局部制作已登记' in response.text
        events = [json.loads(line[6:]) for line in response.text.splitlines() if line.startswith('data: {')]
        observed = [event for event in events if event.get('name') == 'get_production_plan' and event['status'] != 'running']
        assert len(observed) == 1 and observed[0]['status'] == 'complete' and 'error' not in observed[0]
        assert 'private-agent-key' not in response.text and 'private-repair-reasoning' not in response.text
        client.portal.call(c.provider.gate.set)
        result = wait_plan(client, c.owner, 'succeeded')
        assert len(c.provider.calls) == 5 and len(calls) == 4
        assert result['id'] == initial_plan['id'] and result['steps'][2]['nodeId'] == initial_plan['steps'][2]['nodeId']
        assert result['steps'][3]['status'] == 'completed'
        board = client.get(f'/api/projects/{c.owner}/storyboard').json()['storyboard']
        assert board['shots'][:2] == before['shots'][:2] and board['shots'][3] == before['shots'][3] and len(board['shots']) == 4
        assert result['repairs'][0]['request']['feedback'] == '只更换第三镜参考，保留前两镜'
        record = read_json(c.directory / 'agent-runs' / (reply_id + '.json'))
        assert record['status'] == 'complete' and len(record['steps']) == 3


def test_chat_keeps_current_audio_generates_candidate_then_adopts_without_regeneration(tmp_path, media):
    c = context(tmp_path, media)
    async def initial():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '旁白修复', 'shots': [
            {'title': '开场', 'imagePrompt': '关键帧', 'videoPrompt': '视频', 'narration': '原旁白'}]}, c.models, c.session)
        plan = await wait(c)
        await close(c)
        return plan
    initial_plan = asyncio.run(initial())
    original = c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected'].copy()
    old_audio = initial_plan['steps'][2]['assetId']
    agent = c.generation.configs.save('agent', 'https://chat.test', 'deepseek-flash', 'private-agent-key')
    calls = []
    candidate = None
    def handle(request):
        nonlocal candidate
        payload = json.loads(request.content); calls.append(payload)
        cycle = (len(calls) - 1) % 3
        if cycle == 0:
            return tool_reply('get_production_plan', {'planId': initial_plan['id'], 'stepId': initial_plan['steps'][2]['id']}, f'read-{len(calls)}')
        if cycle == 1:
            plan = last_result(payload); step = plan['steps'][0]
            if len(calls) == 2:
                args = {'action': 'regenerate', 'prompt': '新的一天，就此出发。', 'adoptionPolicy': 'candidate_only', 'feedback': '保留当前版本，只重做旁白'}
            else:
                assert step['task']['status'] == 'succeeded' and step['task']['storyboardAdoption']['reason'] == 'candidate_only'
                candidate = step['task']['assetId']
                assert step['shot']['selected']['audio'] == old_audio and candidate in step['shot']['candidates']['audio']
                assert any(event['feedback'] == '保留当前版本，只重做旁白' for event in plan['feedback'])
                args = {'action': 'reuse', 'assetId': candidate, 'feedback': '采用新旁白'}
            return tool_reply('repair_production_step', {'planId': plan['id'], 'stepId': step['id'], **step['repairVersions'], **args}, f'repair-{len(calls)}')
        assert last_result(payload)['status'] == 'queued'
        return final_reply('已登记，只处理这一镜的旁白。')
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}
    with TestClient(create_app(c.store, ChatCompletions(httpx.MockTransport(handle)), c.provider), headers=headers) as client:
        c.provider.gate.clear()
        response = client.post(f'/api/data/{c.owner}/chat', json={'id': str(uuid4()), 'modelId': agent['id'], 'text': '保留当前版本，只重做开场旁白'})
        assert '"error": null' in response.text and '新结果仅作为候选' in response.text
        client.portal.call(c.provider.gate.set)
        result = wait_plan(client, c.owner, 'blocked')
        assert c.manager.read(c.owner, result['id'])['steps'][:2] == initial_plan['steps'][:2]
        assert sorted(task['kind'] for task in c.provider.calls[:-1]) == ['audio', 'image', 'video']
        assert c.provider.calls[-1]['kind'] == 'audio'
        snapshot = client.get(f'/api/projects/{c.owner}/canvas').json()
        node = next(item for item in snapshot['canvas']['nodes'] if item['id'] == result['steps'][2]['nodeId'])
        assert node['assetId'] == old_audio
        assert client.get(f'/api/projects/{c.owner}/storyboard').json()['storyboard']['shots'][0]['selected'] == original
        response = client.post(f'/api/data/{c.owner}/chat', json={'id': str(uuid4()), 'modelId': agent['id'], 'text': '采用刚才生成的新旁白'})
        assert '"error": null' in response.text
        result = wait_plan(client, c.owner, 'succeeded')
        assert len(c.provider.calls) == 4 and len(result['repairs']) == 2
        chosen = client.get(f'/api/projects/{c.owner}/storyboard').json()['storyboard']['shots'][0]['selected']
        assert chosen == {'visual': original['visual'], 'audio': candidate}


def turn_for(c, text='只修改原镜头的生成要求'):
    config = c.generation.configs.save('agent', 'https://chat.test', 'deepseek-flash', 'private-agent-key')
    return SimpleNamespace(owner=c.owner, session=c.session, directory=str(c.directory), id=str(uuid4()),
        config=c.generation.configs.resolve(config['id'], 'agent'), thinking='auto', selections=c.models,
        selected_node_id=None, selected_shot_id=None, stop=asyncio.Event(),
        conversation={'messages': [{'role': 'user', 'text': text, 'assets': []}, {'role': 'assistant', 'text': ''}]},
        payload={'messages': [{'role': 'user', 'content': text}]})


async def failed_plan(c):
    c.provider.failures.add('失败')
    await c.manager.submit(c.owner, str(uuid4()), {'title': '原计划', 'shots': [{'title': '首镜', 'imagePrompt': '失败'}]}, c.models, c.session)
    return await wait(c)


def test_project_context_keeps_old_plan_discoverable_and_detail_is_read_only_and_bounded(tmp_path):
    c = context(tmp_path)
    async def run():
        original = await failed_plan(c)
        for index in range(11):
            await c.manager.submit(c.owner, str(uuid4()), {'title': f'后来的计划{index}', 'shots': [{'title': '新镜', 'imagePrompt': '新内容'}]}, c.models, c.session)
            await wait(c)
        turn = turn_for(c)
        turn.selected_node_id = original['steps'][0]['nodeId']
        loop = AgentLoop(c.store, c.generation.configs, c.generation, None); loop.production = c.manager
        snapshot = loop._project(turn)
        assert snapshot['productionPlans'][0]['id'] == original['id']
        assert snapshot['productionPlanCount'] == 12 and snapshot['productionPlansTruncated']
        page = await loop.execute(turn, 'list_production_plans', {'shotId': None, 'offset': 10, 'limit': 2}, str(uuid4()))
        assert page['total'] == 12 and original['id'] in [plan['id'] for plan in page['plans']]
        before = {path: path.read_bytes() for path in c.directory.glob('production-plans/*.json')}
        result = describe(c.manager, c.owner, original['id'])
        assert result['steps'][0]['task']['errorDetails']['category'] == 'reference'
        assert result['steps'][0]['repairVersions']['expectedRevision'] == original['revision']
        assert 'apiKey' not in json.dumps(result) and 'private-agent-key' not in json.dumps(snapshot)
        assert before == {path: path.read_bytes() for path in before} and len(c.provider.calls) == 12
        await close(c)
    asyncio.run(run())


@pytest.mark.parametrize('unsafe', ['foreign_plan', 'foreign_step', 'stale_node', 'stale_plan', 'unknown_submission', 'attempt_limit'])
def test_agent_repair_reuses_business_guards_instead_of_bypassing_them(tmp_path, unsafe):
    c = context(tmp_path)
    async def run():
        plan = await failed_plan(c)
        if unsafe == 'unknown_submission':
            path = c.directory / 'tasks' / (plan['steps'][0]['taskId'] + '.json')
            task = read_generation_task(path); task.update(phase='submit', status='interrupted', errorDetails=None)
            write_json(path, task)
        if unsafe == 'attempt_limit':
            plan['steps'][0]['attempt'] = 3; c.manager._save(c.owner, plan)
        value = command(c, plan, plan['steps'][0], prompt='明确的新要求')
        value.pop('id'); value['planId'] = plan['id']
        if unsafe == 'foreign_plan': value['planId'] = str(uuid4())
        if unsafe == 'foreign_step': value['stepId'] = str(uuid4())
        if unsafe in {'stale_node', 'stale_plan'}:
            value['expectedNodeRevision' if unsafe == 'stale_node' else 'expectedRevision'] += 1
        loop = AgentLoop(c.store, c.generation.configs, c.generation, None); loop.production = c.manager
        args = SCHEMAS['repair_production_step'][0].model_validate(value).model_dump(mode='json')
        with pytest.raises(ProjectError):
            await loop.execute(turn_for(c), 'repair_production_step', args, str(uuid4()))
        assert len(c.provider.calls) == 1 and len(c.manager.list(c.owner)[0]['repairs']) == 0
        await close(c)
    asyncio.run(run())


@pytest.mark.parametrize('name', ['generate_asset', 'save_text_asset', 'repair_production_step', 'set_shot_asset', 'start_production_plan'])
def test_bare_continue_never_authorizes_overwriting_a_selected_node(tmp_path, name):
    c = context(tmp_path)
    async def run():
        plan = await failed_plan(c)
        turn = turn_for(c, '好的，继续。')
        turn.selected_node_id = plan['steps'][0]['nodeId']; turn.selected_shot_id = plan['steps'][0]['shotId']
        loop = AgentLoop(c.store, c.generation.configs, c.generation, None); loop.production = c.manager
        before = c.generation.canvas.snapshot(c.owner)
        with pytest.raises(ProjectError, match='继续'):
            await loop.execute(turn, name, {'nodeId': turn.selected_node_id}, str(uuid4()))
        assert c.generation.canvas.snapshot(c.owner) == before and len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_bare_continue_can_resume_original_plan_but_stale_control_cannot(tmp_path):
    c = context(tmp_path)
    async def run():
        plan = await failed_plan(c)
        loop = AgentLoop(c.store, c.generation.configs, c.generation, None); loop.production = c.manager
        value = {'planId': plan['id'], 'expectedRevision': plan['revision'] - 1, 'action': 'resume'}
        with pytest.raises(ProjectError, match='已变化'):
            await loop.execute(turn_for(c, '继续'), 'control_production_plan', value, str(uuid4()))
        value['expectedRevision'] = plan['revision']
        result = await loop.execute(turn_for(c, '继续'), 'control_production_plan', value, str(uuid4()))
        assert result['status'] == 'queued' and '原设置' in result['message']
        completed = await wait(c)
        assert completed['status'] == 'succeeded' and completed['steps'][0]['prompt'] == '失败'
        assert len(c.provider.calls) == 2
        await close(c)
    asyncio.run(run())


def test_generic_generation_cannot_bypass_production_step_repair(tmp_path):
    c = context(tmp_path)
    async def run():
        plan = await failed_plan(c)
        loop = AgentLoop(c.store, c.generation.configs, c.generation, None); loop.production = c.manager
        turn = turn_for(c)
        node = next(node for node in c.generation.canvas.snapshot(c.owner)['canvas']['nodes'] if node['id'] == plan['steps'][0]['nodeId'])
        with pytest.raises(ProjectError, match='局部修复'):
            await loop.execute(turn, 'generate_asset', {'nodeId': node['id'], 'expectedRevision': node['revision'],
                'kind': 'image', 'prompt': '不通过原修复的新请求', 'referenceIds': []}, str(uuid4()))
        assert len(c.provider.calls) == 1 and c.manager.read(c.owner, plan['id'])['repairs'] == []
        await close(c)
    asyncio.run(run())


class ScriptProvider:
    def __init__(self, batches):
        self.batches, self.calls = batches, []
    async def stream(self, config, payload):
        self.calls.append(payload)
        index = len(self.calls) - 1
        batch = self.batches[min(index, len(self.batches) - 1)]
        if batch is None:
            yield {'type': 'delta', 'text': '已读取状态。'}
        yield {'type': 'assistant_message', 'message': {'role': 'assistant', 'content': '' if batch else '已读取状态。',
            'tool_calls': [{'id': f'{index}-{offset}', 'function': {'name': name, 'arguments': json.dumps(value)}} for offset, (name, value) in enumerate(batch or [])]}}


@pytest.mark.parametrize('limit', ['observation', 'writes', 'tools', 'rounds', 'repair_fallback'])
def test_production_tools_keep_bounded_decisions_and_never_poll_for_media(tmp_path, limit):
    c = context(tmp_path)
    async def run():
        plan = await failed_plan(c)
        read = ('get_production_plan', {'planId': plan['id']})
        if limit == 'observation': batches = [[read, read], None]
        elif limit == 'tools': batches = [[read] * 13]
        elif limit == 'rounds': batches = [[read]]
        else:
            args = command(c, plan, plan['steps'][0], action='revise', prompt='只保存修改')
            args.pop('id'); args['planId'] = plan['id']
            if limit == 'repair_fallback':
                args['expectedRevision'] += 1
                batches = [[('repair_production_step', args), ('generate_asset', {'kind': 'image', 'prompt': '改用新节点绕过'})], None]
            else:
                batches = [[('repair_production_step', args)] * 5, None]
        provider = ScriptProvider(batches)
        loop = AgentLoop(c.store, c.generation.configs, c.generation, provider); loop.production = c.manager
        turn = turn_for(c)
        async def collect(): return [event async for event in loop.stream(turn)]
        if limit in {'tools', 'rounds'}:
            with pytest.raises(ProjectError, match='上限'):
                await collect()
        else:
            events = await collect()
            errors = [event['error'] for event in events if event.get('error')]
            expected = {'observation': '未重复轮询', 'writes': '最多执行四次', 'repair_fallback': '不能改用新素材'}[limit]
            assert any(expected in error for error in errors)
        record = read_json(c.directory / 'agent-runs' / (turn.id + '.json'))
        assert len(record['steps']) <= 12 and len(provider.calls) <= 6 and len(c.provider.calls) == 1
        if limit == 'writes': assert len(c.manager.list(c.owner)[0]['repairs']) == 1
        await close(c)
    asyncio.run(run())
