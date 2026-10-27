"""Candidate review must never silently adopt, rebase feedback, or generate."""
import asyncio
from copy import deepcopy
from uuid import uuid4

import pytest
from fastapi.testclient import TestClient

from museshow.agent.production_tools import describe
from museshow.application.production_review import ProductionReview
from museshow.domain.projects import ProjectError
from museshow_api.main import create_app
from test_production_repairs import close, command, context, image, media, wait


def keep_request(state, asset, **changes):
    return {'id': str(uuid4()), 'stepId': state['step']['id'], **state['versions'],
            'assetId': asset['id'], 'assetFingerprint': asset['fingerprint'], 'feedback': '保留旧版，候选太暗', **changes}


async def produce(c, **shot):
    await c.manager.submit(c.owner, str(uuid4()), {'title': '比较与修复', 'shots': [{'title': '首镜', **shot}]}, c.models, c.session)
    return await wait(c)


def test_keep_feedback_is_version_bound_idempotent_persistent_and_readable_by_agent(tmp_path):
    c = context(tmp_path)
    async def run():
        plan = await produce(c, imagePrompt='原要求')
        review = ProductionReview(c.manager)
        step = plan['steps'][0]
        before = deepcopy(c.generation.canvas.snapshot(c.owner))
        board = deepcopy(c.manager.board.snapshot(c.owner))
        state = review.read(c.owner, plan['id'], step['id'])
        asset = next(asset for asset in state['assets'] if asset['id'] == step['assetId'])
        request = keep_request(state, asset)
        updated = review.keep(c.owner, plan['id'], request, c.session)
        assert updated['plan']['revision'] == state['plan']['revision'] + 1
        assert updated['feedback'][0]['fingerprint'] == asset['fingerprint']
        assert review.keep(c.owner, plan['id'], request, c.session) == updated
        assert c.generation.canvas.snapshot(c.owner) == before
        assert c.manager.board.snapshot(c.owner) == board and len(c.provider.calls) == 1
        observed = describe(c.manager, c.owner, plan['id'], step['id'])
        assert observed['feedback'][0]['action'] == 'keep_current'
        assert observed['feedback'][0]['reviewedFingerprint'] == asset['fingerprint']
        assert ProductionReview(c.manager).read(c.owner, plan['id'], step['id'])['feedback'] == updated['feedback']
        with pytest.raises(ProjectError, match='标识'):
            review.keep(c.owner, plan['id'], {**request, 'feedback': '不同内容'}, c.session)
        await close(c)
    asyncio.run(run())


@pytest.mark.parametrize('change', ['plan', 'node', 'shot', 'fingerprint', 'foreign', 'disk'])
def test_feedback_rejects_stale_or_unrelated_content_without_writes(tmp_path, change):
    c = context(tmp_path)
    async def run():
        plan = await produce(c, imagePrompt='原要求')
        review = ProductionReview(c.manager)
        state = review.read(c.owner, plan['id'], plan['steps'][0]['id'])
        asset = next(item for item in state['assets'] if item['id'] == state['step']['assetId'])
        request = keep_request(state, asset)
        if change in ('plan', 'node', 'shot'):
            request[{'plan': 'expectedRevision', 'node': 'expectedNodeRevision', 'shot': 'expectedShotRevision'}[change]] += 1
        elif change == 'fingerprint':
            request['assetFingerprint'] = 'sha256:' + '0' * 64
        elif change == 'foreign':
            request.update(assetId=c.reference['id'], assetFingerprint=c.reference['fingerprint'])
        else:
            (c.directory / 'assets' / asset['id']).write_bytes(b'changed')
        with pytest.raises(ProjectError) as failure:
            review.keep(c.owner, plan['id'], request, c.session)
        assert failure.value.status == 409
        assert c.manager.read(c.owner, plan['id'])['feedback'] == [] and len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


@pytest.mark.parametrize('kind', ['video', 'audio'])
def test_feedback_repair_produces_candidate_then_reuses_without_extra_generation(tmp_path, media, kind):
    c = context(tmp_path, media)
    async def run():
        plan = await produce(c, **({'videoPrompt': '原视频'} if kind == 'video' else {'imagePrompt': '原画面', 'narration': '原旁白'}))
        step = next(item for item in plan['steps'] if item['kind'] == kind)
        old_asset = step['assetId']
        old_node = c.generation.canvas._node(c.generation.canvas.snapshot(c.owner)['canvas'], step['nodeId'])
        role = 'audio' if kind == 'audio' else 'visual'
        review = ProductionReview(c.manager)
        state = review.read(c.owner, plan['id'], step['id'])
        asset = next(item for item in state['assets'] if item['id'] == old_asset)
        repair = command(c, plan, step, prompt='修复候选', feedback='对旧版的具体反馈', adoptionPolicy='candidate_only',
            reviewedAssetId=asset['id'], reviewedFingerprint=asset['fingerprint'])
        await c.manager.repair(c.owner, plan['id'], repair, c.session)
        repaired = await wait(c)
        state = review.read(c.owner, plan['id'], step['id'])
        candidate = next(item for item in state['tasks'] if item['id'] == state['step']['taskId'])['assetId']
        assert candidate != old_asset and state['node']['assetId'] == old_asset
        assert state['shot']['selected'][role] == old_asset and state['feedback'][0]['assetId'] == old_asset
        assert state['node']['id'] == old_node['id'] and state['step']['kind'] == kind
        calls = len(c.provider.calls)
        selected = next(item for item in state['assets'] if item['id'] == candidate)
        retained = review.keep(c.owner, plan['id'], keep_request(state, selected), c.session)
        assert retained['node']['assetId'] == old_asset and len(c.provider.calls) == calls
        repaired = c.manager.read(c.owner, plan['id'])
        step = next(item for item in repaired['steps'] if item['kind'] == kind)
        await c.manager.repair(c.owner, plan['id'], command(c, repaired, step, action='reuse', assetId=candidate,
            reviewedAssetId=candidate, reviewedFingerprint=selected['fingerprint'], feedback='采用此候选'), c.session)
        await wait(c)
        final = review.read(c.owner, plan['id'], step['id'])
        assert final['node']['assetId'] == final['shot']['selected'][role] == candidate
        assert len(c.provider.calls) == calls
        assert [item['decision'] for item in final['feedback']] == ['regenerate', 'keep_current', 'reuse']
        await close(c)
    asyncio.run(run())


def test_review_api_is_scoped_read_only_and_feedback_uses_edit_lease(tmp_path):
    c = context(tmp_path)
    async def prepare():
        plan = await produce(c, imagePrompt='原要求')
        await close(c)
        return plan
    plan = asyncio.run(prepare())
    step = plan['steps'][0]
    endpoint = f'/api/projects/{c.owner}/production-plans/{plan["id"]}'
    with TestClient(create_app(c.store, generation_provider=c.provider), headers={
            'X-MuseShow-Request': '1', 'X-MuseShow-Session': c.session}) as client:
        image(c.generation, c.owner, c.session, '尚未投影到画布的参考')
        receipt = c.directory / 'production-plans' / (plan['id'] + '.json')
        before = receipt.read_bytes()
        canvas_before = (c.directory / 'canvas.json').read_bytes()
        state = client.get(endpoint + '/steps/' + step['id']).json()
        assert receipt.read_bytes() == before and state['tasks'][0]['prompt'] == '原要求'
        assert (c.directory / 'canvas.json').read_bytes() == canvas_before
        assert 'private' not in str(state) and 'baseURL' not in str(state)
        assert client.get(endpoint + '/steps/' + str(uuid4())).status_code == 404
        assert client.get(f'/api/projects/{uuid4()}/production-plans/{plan["id"]}/steps/{step["id"]}').status_code == 404
        asset = next(item for item in state['assets'] if item['id'] == step['assetId'])
        request = keep_request(state, asset)
        assert client.post(endpoint + '/feedback', json=request, headers={'X-MuseShow-Session': str(uuid4())}).status_code == 409
        assert client.post(endpoint + '/feedback', json={**request, 'assetFingerprint': 'invalid'}).status_code == 422
        assert client.post(endpoint + '/feedback', json=request).status_code == 200
        assert client.post(endpoint + '/feedback', json=request).status_code == 200
        assert len(c.provider.calls) == 1


def test_feedback_history_keeps_evaluated_and_current_files_after_removing_nodes(tmp_path):
    c = context(tmp_path)
    async def run():
        plan = await produce(c, imagePrompt='原要求')
        step = plan['steps'][0]
        review = ProductionReview(c.manager)
        state = review.read(c.owner, plan['id'], step['id'])
        old_asset = next(item for item in state['assets'] if item['id'] == step['assetId'])
        c.generation.canvas.patch(c.owner, step['nodeId'], {'assetIds': [old_asset['id'], c.reference['id']]}, c.session)
        state = review.read(c.owner, plan['id'], step['id'])
        review.keep(c.owner, plan['id'], keep_request(state, c.reference), c.session)
        c.generation.canvas.remove(c.owner, step['nodeId'], c.session)
        shot = c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]
        c.manager.board.change(c.owner, shot['id'], shot['revision'], c.session, remove=True)
        for asset in (old_asset, c.reference):
            with pytest.raises(ProjectError, match='引用'):
                c.generation.canvas.assets.delete(c.owner, asset['id'], c.session)
        assert len(review.read(c.owner, plan['id'], step['id'])['feedback']) == 1
        await close(c)
    asyncio.run(run())


def test_feedback_and_repairs_reject_cross_used_operation_ids_and_wrong_review_versions(tmp_path):
    c = context(tmp_path)
    async def run():
        plan = await produce(c, imagePrompt='原要求')
        step = plan['steps'][0]
        review = ProductionReview(c.manager)
        state = review.read(c.owner, plan['id'], step['id'])
        asset = next(item for item in state['assets'] if item['id'] == step['assetId'])
        request = keep_request(state, asset)
        review.keep(c.owner, plan['id'], request, c.session)
        plan = c.manager.read(c.owner, plan['id'])
        with pytest.raises(ProjectError, match='标识'):
            await c.manager.repair(c.owner, plan['id'], command(c, plan, step, id=request['id']), c.session)
        with pytest.raises(ProjectError, match='候选已变化'):
            await c.manager.repair(c.owner, plan['id'], command(c, plan, step, reviewedAssetId=asset['id'], reviewedFingerprint='sha256:' + '0' * 64), c.session)
        repair = command(c, plan, step, action='revise', prompt='仅修改未生成')
        await c.manager.repair(c.owner, plan['id'], repair, c.session)
        state = review.read(c.owner, plan['id'], step['id'])
        with pytest.raises(ProjectError, match='标识'):
            review.keep(c.owner, plan['id'], keep_request(state, asset, id=repair['id']), c.session)
        assert len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_running_plan_feedback_is_read_only_until_stopped(tmp_path):
    c = context(tmp_path)
    async def run():
        plan = await produce(c, imagePrompt='原要求')
        review = ProductionReview(c.manager)
        state = review.read(c.owner, plan['id'], plan['steps'][0]['id'])
        asset = next(item for item in state['assets'] if item['id'] == state['step']['assetId'])
        plan['status'] = 'running'; c.manager._save(c.owner, plan)
        state = review.read(c.owner, plan['id'], state['step']['id'])
        with pytest.raises(ProjectError, match='停止后续制作'):
            review.keep(c.owner, plan['id'], keep_request(state, asset), c.session)
        assert len(c.provider.calls) == 1
        plan['status'] = 'stopped'; c.manager._save(c.owner, plan)
        await close(c)
    asyncio.run(run())
