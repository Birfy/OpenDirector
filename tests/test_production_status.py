"""Production progress is a projection, never an execution or adoption command."""
import asyncio
from copy import deepcopy
from uuid import uuid4

import pytest

from museshow.agent.production_tools import describe
from museshow.application.production_chat import ProductionChat
from museshow.application.production_review import ProductionReview
from museshow.domain.projects import ProjectError
from museshow.infrastructure.canvas_versions import apply_version, node_history
from museshow.infrastructure.local_projects import read_json, write_json
from test_production_repairs import context, close, command, media, wait


async def produce(c, count=1):
    await c.manager.submit(c.owner, str(uuid4()), {'title': '六镜分镜与修复', 'shots': [
        {'title': f'镜头{i + 1}', 'imagePrompt': f'起势{i}', 'videoPrompt': f'动作{i}', 'narration': f'旁白{i}'}
        for i in range(count)
    ]}, c.models, c.session)
    plan = await wait(c)
    assert plan['status'] == 'succeeded', plan['error']
    return plan


def apply(c, node_id, asset_id):
    state = node_history(c.generation.canvas, c.owner, node_id)
    version = next(v for v in state['versions'] if v['asset']['id'] == asset_id)
    return apply_version(c.generation.canvas, c.owner, node_id, asset_id, state['node']['revision'],
                         version['asset']['fingerprint'], c.session)


def test_six_ready_shots_image_candidate_and_new_video_have_independent_progress(tmp_path, media):
    c = context(tmp_path, media)
    chat = ProductionChat(c.store, c.manager)
    async def run():
        plan = await produce(c, 6)
        first = chat.read(c.owner)
        image_step, video_step = plan['steps'][12:14]
        image_v1 = image_step['assetId']
        await c.manager.repair(c.owner, plan['id'], command(c, plan, image_step,
            prompt='双手抱树，树仍扎根', adoptionPolicy='candidate_only'), c.session)
        plan = await wait(c)
        image_step = plan['steps'][12]
        image_v2 = image_step['assetId']
        candidate = chat.read(c.owner)['messages'][-1]['snapshot']
        assert candidate['delivery']['readyShots'] == candidate['delivery']['totalShots'] == 6
        assert candidate['delivery']['previewAvailable'] and candidate['candidateCount'] == 1
        assert candidate['work']['generated'] == candidate['work']['total'] == 1
        assert candidate['work']['adopted'] == 0 and candidate['activeCount'] == 0
        assert candidate['issueCount'] == 0 and candidate['label'] == '候选待确认'
        assert candidate['actions'] == []  # Continuing cannot choose a candidate-only result.
        # Current policy: an historical candidate is applied before new use.
        apply(c, image_step['nodeId'], image_v2)
        plan = c.manager.read(c.owner, plan['id'])
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][13],
            prompt='从扎根起势到拔出', referenceIds=[image_v2], mode='image_to_video'), c.session)
        plan = await wait(c)
        video_step = plan['steps'][13]
        # The user can keep displaying v1 while the adopted video retains v2.
        apply(c, image_step['nodeId'], image_v1)
        files = {path: path.read_bytes() for path in (c.directory / 'tasks').glob('*.json')}
        before_board = c.manager.board.snapshot(c.owner)['storyboard']
        before_calls = len(c.provider.calls)
        progress = c.manager.progress(c.owner)['plans'][0]
        assert progress['delivery']['ready'] and progress['delivery']['readyShots'] == 6
        assert progress['work'] == {'title': '05 ' + video_step['title'] + '修复', 'label': '已采用', 'generated': 1, 'adopted': 1, 'total': 1, 'unit': '项'}
        assert progress['candidateCount'] == 1 and progress['issueCount'] == 0
        assert progress['completed'] == progress['total'] == 1
        difference, = progress['referenceDifferences']
        assert difference['asset']['id'] == image_v2 and difference['currentAssetId'] == image_v1
        assert difference['usedVersion'] == 2 and difference['currentVersion'] == 1
        assert difference['videoAssetId'] == video_step['assetId']
        messages = chat.read(c.owner)
        assert len(messages['messages']) > len(first['messages'])
        assert sum(m['current'] for m in messages['messages']) == 1
        assert chat.read(c.owner) == messages and ProductionChat(c.store, c.manager).read(c.owner) == messages
        assert describe(c.manager, c.owner, plan['id'])['progress'] == progress
        assert all(path.read_bytes() == data for path, data in files.items())
        assert c.manager.board.snapshot(c.owner)['storyboard'] == before_board and len(c.provider.calls) == before_calls
        # Explicit version selection only switches the source and future inputs.
        apply(c, image_step['nodeId'], image_v2)
        assert c.manager.progress(c.owner)['plans'][0]['referenceDifferences'] == []
        assert c.manager.board.snapshot(c.owner)['storyboard'] == before_board
        assert all(path.read_bytes() == data for path, data in files.items())
        state = c.generation.canvas.snapshot(c.owner)['canvas']
        c.generation.canvas.history(c.owner, 'undo', state['history']['undo']['id'], str(uuid4()), c.session)
        assert c.manager.progress(c.owner)['plans'][0]['referenceDifferences'][0]['currentAssetId'] == image_v1
        assert len(c.provider.calls) == before_calls
        await close(c)
    asyncio.run(run())


def test_explicit_keep_resolves_candidate_without_changing_current_assets(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        plan = await produce(c)
        old = deepcopy(c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected'])
        step = plan['steps'][2]
        await c.manager.repair(c.owner, plan['id'], command(c, plan, step,
            prompt='新的旁白', adoptionPolicy='candidate_only'), c.session)
        plan = await wait(c)
        review = ProductionReview(c.manager)
        state = review.read(c.owner, plan['id'], step['id'])
        asset = next(a for a in state['assets'] if a['id'] == plan['steps'][2]['assetId'])
        before_keep = deepcopy(c.manager.board.snapshot(c.owner))
        review.keep(c.owner, plan['id'], {'id': str(uuid4()), 'stepId': step['id'], **state['versions'],
            'assetId': asset['id'], 'assetFingerprint': asset['fingerprint'], 'feedback': '保留旧版旁白'}, c.session)
        progress = c.manager.progress(c.owner)['plans'][0]
        assert progress['candidateCount'] == 0 and progress['issueCount'] == 0
        assert progress['label'] == '本次修复已处理'
        assert progress['steps'][2]['state'] == 'retained' and progress['actions'] == []
        assert c.manager.board.snapshot(c.owner) == before_keep and len(c.provider.calls) == 4
        assert before_keep['storyboard']['shots'][0]['selected'] == old
        await close(c)
    asyncio.run(run())


def test_new_plan_does_not_hide_old_failure_or_enable_its_stale_buttons(tmp_path):
    c = context(tmp_path)
    chat = ProductionChat(c.store, c.manager)
    async def run():
        c.provider.failures.add('失败要求')
        old = await c.manager.submit(c.owner, str(uuid4()), {'title': '同名计划', 'shots': [
            {'title': '受阻镜头', 'imagePrompt': '失败要求'}]}, c.models, c.session)
        await wait(c)
        first = chat.read(c.owner)['messages'][0]
        c.provider.gate.clear()
        new = await c.manager.submit(c.owner, str(uuid4()), {'title': '同名计划', 'shots': [
            {'title': '新镜头', 'imagePrompt': '新图'}]}, c.models, c.session)
        for _ in range(200):
            if len(c.provider.calls) == 2: break
            await asyncio.sleep(.01)
        during = chat.read(c.owner)
        blocked = next(m for m in during['messages'] if m['planId'] == old['id'] and m['current'])
        assert 'resume' not in blocked['snapshot']['actions'] and blocked['snapshot']['issueCount'] == 1
        assert '其他计划正在制作' in blocked['snapshot']['nextAction']
        c.provider.gate.set()
        await wait(c)
        records = chat.read(c.owner)['messages']
        current = [m for m in records if m['current']]
        assert {m['planId'] for m in current} == {old['id'], new['id']}
        older = next(m for m in current if m['planId'] == old['id'])
        assert older['snapshot']['issueCount'] == 1 and 'resume' in older['snapshot']['actions']
        # The current message for an older plan remains actionable.
        request = {'id': str(uuid4()), 'messageId': older['id'], 'action': 'resume'}
        await chat.act(c.owner, request, c.session)
        await chat.close(); await asyncio.gather(*list(c.manager.jobs.values()))
        final = chat.read(c.owner)
        assert not next(m for m in final['messages'] if m['id'] == first['id'])['current']
        with pytest.raises(ProjectError, match='已失效'):
            await chat.act(c.owner, {'id': str(uuid4()), 'messageId': first['id'], 'action': 'resume'}, c.session)
        count = len(c.provider.calls)
        await chat.act(c.owner, request, c.session)
        assert len(c.provider.calls) == count == 3
        await close(c)
    asyncio.run(run())


def test_unknown_submission_and_partial_project_do_not_claim_preview_or_retry(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        c.provider.gate.clear()
        await c.manager.submit(c.owner, str(uuid4()), {'title': '中断核对', 'shots': [
            {'title': '一', 'videoPrompt': '原任务'}, {'title': '二', 'videoPrompt': '原任务二'}]}, c.models, c.session)
        for _ in range(200):
            if len(c.provider.calls) == 2: break
            await asyncio.sleep(.01)
        await close(c)
        progress = c.manager.progress(c.owner)['plans'][0]
        assert progress['issueCount'] == 2 and progress['candidateCount'] == 0
        assert not progress['delivery']['previewAvailable'] and not progress['delivery']['exportAvailable']
        assert all(item['state'] == 'review' for item in progress['steps'])
        assert '不会重新生成' in progress['nextAction']
        before = len(c.provider.calls)
        ProductionChat(c.store, c.manager).read(c.owner)
        assert len(c.provider.calls) == before
    asyncio.run(run())


def test_rejected_input_is_not_reported_as_provider_generation_failure(tmp_path):
    c = context(tmp_path)
    async def run():
        plan, _ = c.manager._prepare(c.owner, str(uuid4()), {'title': '校验拒绝', 'shots': [
            {'title': '一', 'imagePrompt': '原要求'}]}, c.models, c.session)
        # Change the model after authorization, before accepting a paid request.
        c.generation.configs.save('image', 'https://changed.test', 'different', 'private', c.models['image'])
        c.manager._launch(c.owner, plan)
        await wait(c)
        progress = c.manager.progress(c.owner)['plans'][0]
        assert progress['steps'][0]['state'] == 'rejected'
        assert progress['work']['generated'] == 0 and not c.provider.calls
        assert '尚未生成' in progress['steps'][0]['status']
        await close(c)
    asyncio.run(run())


def test_saved_result_waiting_for_storyboard_can_resume_without_new_generation(tmp_path, monkeypatch):
    c = context(tmp_path)
    async def run():
        def interrupted(owner, plan, step, task):
            raise ProjectError('协调器在分镜采用前中断', 409)
        with monkeypatch.context() as patch:
            patch.setattr(c.manager, '_finish_step', interrupted)
            plan = await c.manager.submit(c.owner, str(uuid4()), {'title': '保存后继续', 'shots': [
                {'title': '一', 'imagePrompt': '原要求'}]}, c.models, c.session)
            await wait(c)
        progress = c.manager.progress(c.owner)['plans'][0]
        assert progress['candidateCount'] == 1 and progress['actions'] == ['resume']
        assert progress['work']['generated'] == 1
        await c.manager.resume(c.owner, plan['id'], c.session)
        assert (await wait(c))['status'] == 'succeeded' and len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_missing_source_is_explained_without_guessing_or_mutating_history(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        plan = await produce(c)
        image_step = plan['steps'][0]
        c.generation.canvas.remove(c.owner, image_step['nodeId'], c.session)
        assert c.manager.progress(c.owner)['plans'][0]['referenceDifferences'] == []  # Hidden remains a current source.
        # Simulate a lost logical source identity, rather than ordinary hiding.
        path = c.directory / 'canvas.json'
        raw = read_json(path)
        raw['assetGroups'].pop(image_step['nodeId'])
        write_json(path, raw)
        before = {path: path.read_bytes() for path in c.directory.rglob('*.json')}
        progress = c.manager.progress(c.owner)['plans'][0]
        difference, = progress['referenceDifferences']
        assert difference['sourceNodeId'] is None and difference['asset']['id'] == image_step['assetId']
        assert difference['available'] and progress['delivery']['ready']
        assert '原参考来源已缺失' in difference['message']
        assert {path: path.read_bytes() for path in before} == before
        assert len(c.provider.calls) == 3
        await close(c)
    asyncio.run(run())


def test_missing_selected_file_disables_delivery_without_discarding_progress(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        plan = await produce(c)
        (c.directory / 'assets' / plan['steps'][1]['assetId']).unlink()
        progress = c.manager.progress(c.owner)['plans'][0]
        assert progress['delivery']['readyShots'] == 0 and progress['delivery']['totalShots'] == 1
        assert not progress['delivery']['previewAvailable'] and not progress['delivery']['exportAvailable']
        assert any('原文件缺失' in problem for problem in progress['delivery']['problems'])
        assert progress['work']['generated'] == 3 and len(c.provider.calls) == 3
        await close(c)
    asyncio.run(run())


def test_generated_output_with_failed_local_adoption_remains_actionable(tmp_path, monkeypatch):
    c = context(tmp_path)
    async def run():
        def fail(*args, **kwargs):
            raise OSError('simulated local adoption failure')
        with monkeypatch.context() as patch:
            patch.setattr(c.manager.board, 'adopt_asset', fail)
            plan = await c.manager.submit(c.owner, str(uuid4()), {'title': '本地采用失败', 'shots': [
                {'title': '一', 'imagePrompt': '原要求'}]}, c.models, c.session)
            await wait(c)
        progress = c.manager.progress(c.owner)['plans'][0]
        assert progress['work']['generated'] == 1 and progress['work']['adopted'] == 0
        assert progress['issueCount'] == 1 and progress['candidateCount'] == 0
        assert progress['steps'][0]['state'] == 'review' and progress['actions'] == ['resume']
        assert '不重新生成' in progress['nextAction']
        await c.manager.resume(c.owner, plan['id'], c.session)
        assert (await wait(c))['status'] == 'succeeded' and len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_partial_delivery_names_preview_scope_without_enabling_full_export(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        plan = await produce(c, 2)
        source = c.directory / 'assets' / plan['steps'][4]['assetId']
        original = source.read_bytes()
        source.unlink()
        files = {path: path.read_bytes() for path in c.directory.rglob('*.json')}
        progress = c.manager.progress(c.owner)['plans'][0]
        delivery = progress['delivery']
        assert delivery['readyShots'] == 1 and delivery['totalShots'] == 2
        assert delivery['previewAvailable'] and delivery['partialPreview']
        assert not delivery['ready'] and not delivery['exportAvailable']
        assert delivery['previewShots'] == [{'shotId': plan['shots'][0]['id'], 'number': 1, 'title': '镜头1'}]
        assert delivery['previewDurationFrames'] > 0 and '完整片长待定' in delivery['text']
        assert '草稿预览' in progress['nextAction']
        journal = ProductionChat(c.store, c.manager).read(c.owner)
        assert journal['messages'][-1]['snapshot']['delivery'] == delivery
        assert describe(c.manager, c.owner, plan['id'])['progress']['delivery'] == delivery
        assert all(path.read_bytes() == data for path, data in files.items())
        # Corrupt saved adjustments must not be bypassed by a partial projection.
        timeline = c.directory / 'timeline.json'
        timeline.write_text('{"version":999}')
        blocked = c.manager.progress(c.owner)['delivery']
        assert not blocked['previewAvailable'] and not blocked['exportAvailable']
        assert blocked['previewShots'] == [] and blocked['previewDurationFrames'] == 0
        assert timeline.read_text() == '{"version":999}'
        timeline.unlink()
        source.write_bytes(original)
        complete = c.manager.progress(c.owner)['delivery']
        assert complete['ready'] and complete['previewAvailable'] and complete['exportAvailable']
        assert not complete['partialPreview'] and len(complete['previewShots']) == 2
        assert len(c.provider.calls) == 6
        await close(c)
    asyncio.run(run())
