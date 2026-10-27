"""Dependency/concurrency contracts, using gates rather than timing benchmarks."""
import asyncio
from copy import deepcopy
from uuid import uuid4

import pytest
from pydantic import ValidationError

from museshow.application.generation import Generation
from museshow.application.production import Production
from museshow.domain.production import ProductionRequest
from test_production_repairs import context, close, media, wait


async def until(predicate):
    async with asyncio.timeout(10):
        while not predicate():
            await asyncio.sleep(.01)


def controlled(c):
    original = c.provider.generate
    gates, calls, active = {}, [], set()
    c.provider.peak = 0

    async def generate(config, task, submitted):
        key = task['prompt']
        calls.append(deepcopy(task))
        active.add(key)
        c.provider.peak = max(c.provider.peak, len(active))
        try:
            await gates.setdefault(key, asyncio.Event()).wait()
            return await original(config, task, submitted)
        finally:
            active.discard(key)

    c.provider.generate = generate
    return gates, calls, active


def test_dependencies_dispatch_while_other_video_is_waiting(tmp_path, media):
    c = context(tmp_path, media)
    gates, calls, active = controlled(c)

    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '依赖并行', 'shots': [
            {'title': '一', 'imagePrompt': '图一', 'videoPrompt': '视频一', 'narration': '旁白一'},
            {'title': '二', 'imagePrompt': '图二', 'videoPrompt': '视频二', 'referenceShot': 1},
        ]}, c.models, c.session)
        await until(lambda: {'图一', '旁白一'} <= set(active))
        assert len(calls) == 2  # Audio does not wait for its shot's image/video.
        gates['图一'].set()
        await until(lambda: '视频一' in active)
        assert '图二' not in active  # Both slots occupied.
        gates['旁白一'].set()
        await until(lambda: '图二' in active)
        assert '视频一' in active  # No barrier at the previous shot's video.
        first = c.manager.list(c.owner)[0]['steps'][0]['assetId']
        assert next(t for t in calls if t['prompt'] == '图二')['referenceIds'] == [first]
        gates['图二'].set()
        await until(lambda: '视频二' in active)
        assert next(t for t in calls if t['prompt'] == '视频二')['referenceIds'] != [first]
        gates['视频一'].set(); gates['视频二'].set()
        result = await wait(c)
        assert result['status'] == 'succeeded', result['error']
        assert c.provider.peak == 2 and len(calls) == 5
        assert all(step['status'] == 'completed' for step in result['steps'])
        board = c.manager.board.snapshot(c.owner)['storyboard']
        assert all(shot['selected']['visual'] for shot in board['shots'])
        assert board['shots'][0]['selected']['audio']
        await close(c)

    asyncio.run(run())


@pytest.mark.parametrize('candidate_only', [False, True])
def test_failed_or_held_branch_does_not_block_independent_branch(tmp_path, candidate_only):
    c = context(tmp_path)
    if not candidate_only:
        c.provider.failures.add('失败图')

    async def run():
        plan, _ = c.manager._prepare(c.owner, str(uuid4()), {'title': '分支隔离', 'shots': [
            {'title': '受阻', 'imagePrompt': '失败图'},
            {'title': '依赖受阻', 'imagePrompt': '不应提交', 'referenceShot': 1},
            {'title': '独立', 'imagePrompt': '独立图'},
        ]}, c.models, c.session)
        if candidate_only:
            plan['steps'][0]['adoptionPolicy'] = 'candidate_only'
            c.manager._save(c.owner, plan)
        c.manager._launch(c.owner, plan)
        result = await wait(c)
        assert result['status'] == 'blocked'
        assert result['steps'][0]['error']
        assert result['steps'][1]['taskId'] is None
        assert result['steps'][2]['status'] == 'completed'
        assert {t['prompt'] for t in c.provider.calls} == {'失败图', '独立图'}
        before = len(c.provider.calls)
        if not candidate_only:
            await c.manager.resume(c.owner, plan['id'], c.session)
            result = await wait(c)
            assert result['status'] == 'succeeded', result['error']
            assert len(c.provider.calls) == before + 2  # Failed parent and its child only.
        await close(c)

    asyncio.run(run())


def test_stop_holds_two_late_results_and_reuses_them_on_resume(tmp_path):
    c = context(tmp_path)
    gates, calls, active = controlled(c)

    async def run():
        plan = await c.manager.submit(c.owner, str(uuid4()), {'title': '并行暂停', 'shots': [
            {'title': str(i), 'imagePrompt': str(i)} for i in range(4)
        ]}, c.models, c.session)
        await until(lambda: len(active) == 2)
        await c.manager.stop(c.owner, plan['id'], c.session)
        for gate in gates.values():
            gate.set()
        await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
        assert len(calls) == 2
        assert all(not shot['selected']['visual'] for shot in c.manager.board.snapshot(c.owner)['storyboard']['shots'])
        tasks = c.generation.canvas.snapshot(c.owner)['tasks']
        assert all(task['canvasAdoption']['reason'] == 'plan_paused' for task in tasks)
        await c.manager.resume(c.owner, plan['id'], c.session)
        await until(lambda: len(calls) == 4)
        for gate in gates.values():
            gate.set()
        result = await wait(c)
        assert result['status'] == 'succeeded', result['error']
        assert len(calls) == len({t['id'] for t in calls}) == 4
        await close(c)

    asyncio.run(run())


@pytest.mark.parametrize('edit', ['none', 'visual_selection', 'node_prompt'])
def test_same_shot_simultaneous_video_audio_preserves_user_choices(tmp_path, media, edit):
    c = context(tmp_path, media)
    gates, calls, active = controlled(c)

    async def run():
        plan = await c.manager.submit(c.owner, str(uuid4()), {'title': '同镜并发', 'shots': [
            {'title': '同镜', 'videoPrompt': '视频', 'narration': '旁白'},
        ]}, c.models, c.session)
        await until(lambda: len(active) == 2)
        if edit == 'visual_selection':
            shot = c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]
            c.manager.board.adopt_asset(c.owner, shot['id'], shot['revision'], 'visual', c.reference['id'], c.session)
        elif edit == 'node_prompt':
            step = c.manager.list(c.owner)[0]['steps'][0]
            c.generation.canvas.patch(c.owner, step['nodeId'], {'prompt': '用户新要求'}, c.session)
        gates['视频'].set(); gates['旁白'].set()
        result = await wait(c)
        shot = c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]
        assert shot['selected']['audio'] == result['steps'][1]['assetId']
        if edit == 'none':
            assert result['status'] == 'succeeded', result['error']
            assert shot['selected']['visual'] == result['steps'][0]['assetId']
            assert shot['originalAudioMode'] == 'keep'
        else:
            assert result['status'] == 'blocked'
            assert shot['selected']['visual'] == (c.reference['id'] if edit == 'visual_selection' else None)
            assert result['steps'][0]['assetId']  # Candidate kept.
        assert len(calls) == 2
        await close(c)

    asyncio.run(run())


def test_restart_reconciles_two_remote_receipts_without_resubmitting(tmp_path, media):
    c = context(tmp_path, media)
    submitted_ids, recovered_ids = [], []
    gates = asyncio.Event()
    async def generate(config, task, submitted):
        if task['externalTaskId']:
            recovered_ids.append(task['id'])
            return 'mp4', media[0]
        submitted_ids.append(task['id'])
        await submitted('remote-' + task['id'])
        await gates.wait()
        return 'mp4', media[0]
    c.provider.generate = generate

    async def run():
        plan = await c.manager.submit(c.owner, str(uuid4()), {'title': '重启核对', 'shots': [
            {'title': str(i), 'videoPrompt': str(i)} for i in range(2)
        ]}, c.models, c.session)
        await until(lambda: len(submitted_ids) == 2 and all(
            t['externalTaskId'] for t in c.generation.canvas.snapshot(c.owner)['tasks']))
        await close(c)
        generation = Generation(c.store, c.generation.configs, c.provider)
        manager = Production(c.store, generation)
        await generation.start(); await manager.start(); await manager.start()
        await asyncio.gather(*list(manager.jobs.values()))
        result = manager.read(c.owner, plan['id'])
        assert result['status'] == 'succeeded', result['error']
        assert len(submitted_ids) == 2 and set(recovered_ids) == set(submitted_ids)
        assert len(generation.canvas.snapshot(c.owner)['assets']) == 3
        await manager.close(); await generation.close()

    asyncio.run(run())


def test_four_existing_shots_accept_audio_only_plan_preserving_visuals(tmp_path, media):
    c = context(tmp_path, media)

    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '原四镜', 'shots': [
            {'title': str(i), 'videoPrompt': '画面' + str(i)} for i in range(4)
        ]}, c.models, c.session)
        assert (await wait(c))['status'] == 'succeeded'
        before = c.manager.board.snapshot(c.owner)['storyboard']
        initial_nodes = deepcopy(c.generation.canvas.snapshot(c.owner)['canvas']['nodes'])
        plan_id = str(uuid4())
        request = {'title': '批量补旁白', 'shots': [
            {'title': shot['title'], 'shotId': shot['id'], 'expectedRevision': shot['revision'], 'narration': '旁白' + str(i)}
            for i, shot in enumerate(before['shots'])]}
        await c.manager.submit(c.owner, plan_id, request, c.models, c.session)
        # Duplicate submission does not register or launch a second batch.
        await c.manager.submit(c.owner, plan_id, request, c.models, c.session)
        await asyncio.gather(*list(c.manager.jobs.values()))
        result = c.manager.read(c.owner, plan_id)
        assert result['status'] == 'succeeded', result['error']
        after = c.manager.board.snapshot(c.owner)['storyboard']
        assert before['orderRevision'] == after['orderRevision']
        for old, new in zip(before['shots'], after['shots']):
            for key in ('id', 'title', 'description', 'originalAudioMode'):
                assert new[key] == old[key]
            assert new['selected']['visual'] == old['selected']['visual']
            assert new['selected']['audio']
        nodes = c.generation.canvas.snapshot(c.owner)['canvas']['nodes']
        assert all(node in nodes for node in initial_nodes)
        assert [t['kind'] for t in c.provider.calls].count('audio') == 4
        assert len(c.provider.calls) == 8
        await close(c)

    asyncio.run(run())


def test_audio_only_plan_cannot_create_empty_visual_shots():
    with pytest.raises(ValidationError):
        ProductionRequest.model_validate({'title': '无画面新镜头', 'shots': [{'title': '一', 'narration': '旁白'}]})


def test_finished_runner_entry_cannot_suppress_new_launch(tmp_path):
    c = context(tmp_path)
    async def run():
        plan, _ = c.manager._prepare(c.owner, str(uuid4()), {'title': '完成回调交错', 'shots': [
            {'title': '一', 'imagePrompt': '一'}]}, c.models, c.session)
        finished = asyncio.create_task(asyncio.sleep(0))
        await finished
        c.manager.jobs[plan['id']] = finished
        c.manager._launch(c.owner, plan)
        c.manager._launch(c.owner, plan)
        result = await wait(c)
        assert result['status'] == 'succeeded' and len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_production_and_manual_generation_share_global_limit(tmp_path):
    c = context(tmp_path)
    gates, calls, active = controlled(c)

    async def run():
        await c.generation.submit(c.owner, str(uuid4()), {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': c.models['image'], 'inputs': {'prompt': '手动生成'}}, c.session, create={'kind': 'image'})
        await until(lambda: len(active) == 1)
        await c.manager.submit(c.owner, str(uuid4()), {'title': '共享并发', 'shots': [
            {'title': str(i), 'imagePrompt': str(i)} for i in range(4)
        ]}, c.models, c.session)
        await until(lambda: len(c.generation.jobs) == 3 and len(active) == 2)
        assert len(calls) == 2  # The second plan receipt waits on the global slot.
        gates['手动生成'].set()
        await until(lambda: len(calls) == 3)
        async with asyncio.timeout(10):
            while c.manager.jobs:
                for gate in list(gates.values()):
                    gate.set()
                await asyncio.sleep(.01)
        assert c.manager.list(c.owner)[0]['status'] == 'succeeded'
        assert len(calls) == 5 and c.provider.peak == 2
        await close(c)

    asyncio.run(run())


def test_cancel_two_inflight_tasks_never_treats_unknown_submit_as_retry(tmp_path):
    c = context(tmp_path)
    gates, calls, active = controlled(c)

    async def run():
        plan = await c.manager.submit(c.owner, str(uuid4()), {'title': '取消并行任务', 'shots': [
            {'title': str(i), 'imagePrompt': str(i)} for i in range(2)
        ]}, c.models, c.session)
        await until(lambda: len(active) == 2)
        await c.manager.stop(c.owner, plan['id'], c.session, cancel_tasks=True)
        tasks = c.generation.canvas.snapshot(c.owner)['tasks']
        assert len(tasks) == 2 and all(t['status'] == 'cancelled' and t['recovery'] == 'review' for t in tasks)
        assert not c.generation.jobs
        await c.manager.resume(c.owner, plan['id'], c.session)
        result = await wait(c)
        assert result['status'] == 'blocked' and len(calls) == 2
        assert all(step['attempt'] == 0 and step['error'] for step in result['steps'])
        await close(c)

    asyncio.run(run())
