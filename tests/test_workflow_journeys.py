"""Cross-module recovery and delivery journeys; paid requests stay observable."""
import asyncio
from copy import deepcopy
import hashlib
import json
import subprocess
from uuid import uuid4

import httpx
import pytest

from museshow.application.exports import Exports
from museshow.application.generation import Generation
from museshow.application.production import Production
from museshow.application.production_chat import ProductionChat
from museshow.application.production_review import ProductionReview
from museshow.domain.projects import ProjectError
from museshow.infrastructure.timeline import TimelineProjects
from museshow.integrations.volcengine import VolcengineGeneration
from test_production_repairs import context, close, command, media, wait
from test_production_scheduling import until


def file_hashes(directory):
    return {path.name: hashlib.sha256(path.read_bytes()).hexdigest()
            for path in (directory / 'assets').iterdir() if path.is_file()}


async def restart(c):
    await close(c)
    c.generation = Generation(c.store, c.generation.configs, c.generation.provider)
    c.manager = Production(c.store, c.generation)
    await c.generation.start()
    await c.manager.start()
    await wait(c)


def test_four_shot_repair_restart_late_candidate_and_export_journey(tmp_path, media, monkeypatch):
    c = context(tmp_path, media)
    async def run():
        script = c.generation.canvas.save_text(c.owner, str(uuid4()), str(uuid4()),
            '四镜：入场、对峙、转折、收尾。', '唯一剧本.md', c.session, create=True)
        c.provider.failures.add('第三镜原参考被拒绝')
        specification = {'title': '联合恢复与交付', 'scriptAssetId': script['id'], 'scriptFingerprint': script['fingerprint'],
            'shots': [{'title': f'场景{i}', 'imagePrompt': '第三镜原参考被拒绝' if i == 3 else f'画面{i}',
                       'videoPrompt': f'视频{i}', 'narration': f'旁白{i}', 'referenceIds': [c.reference['id']]} for i in range(1, 5)]}
        plan_id = str(uuid4())
        await c.manager.submit(c.owner, plan_id, specification, c.models, c.session)
        blocked = await wait(c)
        assert blocked['status'] == 'blocked' and len(c.provider.calls) == 11
        original = deepcopy(c.manager.board.snapshot(c.owner)['storyboard'])
        assert [bool(s['selected']['visual']) for s in original['shots']] == [True, True, False, True]
        draft = TimelineProjects(c.store).snapshot(c.owner)
        assert [s['number'] for s in draft['preview']['shots'] if s['available']] == [1, 2, 4]
        chat = ProductionChat(c.store, c.manager)
        old_message = chat.read(c.owner)['messages'][-1]
        baseline_tasks = {path: path.read_bytes() for path in (c.directory / 'tasks').glob('*.json')}
        baseline_files = file_hashes(c.directory)
        failed_image = blocked['steps'][6]
        request = command(c, blocked, failed_image, prompt='第三镜更换参考，树仍扎根', referenceIds=[c.reference['id']], feedback='只改第三镜')
        await c.manager.repair(c.owner, plan_id, request, c.session)
        await c.manager.repair(c.owner, plan_id, request, c.session)
        repaired = await wait(c)
        assert repaired['status'] == 'stopped' and len(c.provider.calls) == 12
        assert c.provider.calls[-1]['referenceIds'] == [c.reference['id']]
        # The video is saved, but local storyboard adoption fails once.
        adopt = c.manager.board.adopt_asset
        def fail_third_video(*args, **kwargs):
            if args[1] == original['shots'][2]['id']:
                raise OSError('simulated failure between canvas and storyboard adoption')
            return adopt(*args, **kwargs)
        with monkeypatch.context() as patch:
            patch.setattr(c.manager.board, 'adopt_asset', fail_third_video)
            await c.manager.resume(c.owner, plan_id, c.session)
            interrupted = await wait(c)
        assert interrupted['status'] == 'blocked' and len(c.provider.calls) == 13
        saved_video = interrupted['steps'][7]
        assert saved_video['assetId'] and saved_video['errorDetails']['stage'] == 'adopt'
        assert c.manager.progress(c.owner)['plans'][0]['steps'][7]['state'] == 'review'
        before_restart = file_hashes(c.directory)
        await restart(c)
        await c.manager.resume(c.owner, plan_id, c.session)
        complete = await wait(c)
        assert complete['status'] == 'succeeded' and len(c.provider.calls) == 13
        assert complete['steps'][7]['taskId'] == saved_video['taskId']
        assert file_hashes(c.directory) == before_restart
        assert all(path.read_bytes() == data for path, data in baseline_tasks.items())
        board = deepcopy(c.manager.board.snapshot(c.owner)['storyboard'])
        assert [s['id'] for s in board['shots']] == [s['id'] for s in original['shots']]
        assert all(board['shots'][i] == original['shots'][i] for i in (0, 1, 3))
        assert all(file_hashes(c.directory)[key] == value for key, value in baseline_files.items())
        # A stopped repair returns late. The same candidate survives reopening.
        c.provider.gate.clear()
        audio = complete['steps'][5]
        repair = command(c, complete, audio, prompt='第二镜更短旁白', adoptionPolicy='candidate_only')
        await c.manager.repair(c.owner, plan_id, repair, c.session)
        await until(lambda: len(c.provider.calls) == 14)
        await c.manager.stop(c.owner, plan_id, c.session)
        c.provider.gate.set()
        await asyncio.gather(*(job.future for job in list(c.generation.jobs.values())))
        late = c.manager.board.snapshot(c.owner)['storyboard']
        assert [shot['selected'] for shot in late['shots']] == [shot['selected'] for shot in board['shots']]
        assert all(late['shots'][i] == board['shots'][i] for i in (0, 2, 3))
        assert set(late['shots'][1]['candidates']['audio']) > set(board['shots'][1]['candidates']['audio'])
        board = deepcopy(late)
        await restart(c)
        progress = c.manager.progress(c.owner)['plans'][0]
        assert progress['delivery']['readyShots'] == 4 and progress['delivery']['exportAvailable']
        assert progress['candidateCount'] == 1 and progress['work']['generated'] == 1 and progress['work']['adopted'] == 0
        review = ProductionReview(c.manager)
        state = review.read(c.owner, plan_id, audio['id'])
        candidate_id = state['step']['assetId'] or next(t['assetId'] for t in state['tasks'] if t['id'] == state['step']['taskId'])
        candidate = next(a for a in state['assets'] if a['id'] == candidate_id)
        keep = {'id': str(uuid4()), 'stepId': audio['id'], **state['versions'], 'assetId': candidate_id,
                'assetFingerprint': candidate['fingerprint'], 'feedback': '保留旧旁白，不采用新候选'}
        review.keep(c.owner, plan_id, keep, c.session)
        review.keep(c.owner, plan_id, keep, c.session)
        assert c.manager.progress(c.owner)['plans'][0]['candidateCount'] == 0
        assert c.manager.board.snapshot(c.owner)['storyboard'] == board
        assert candidate_id in file_hashes(c.directory)
        current_chat = ProductionChat(c.store, c.manager)
        records = current_chat.read(c.owner)
        assert current_chat.read(c.owner) == records
        assert sum(m['current'] for m in records['messages']) == 1
        with pytest.raises(ProjectError, match='失效'):
            await current_chat.act(c.owner, {'id': str(uuid4()), 'messageId': old_message['id'], 'action': 'resume'}, c.session)
        # Replaying the original submission cannot create another film or task.
        await c.manager.submit(c.owner, plan_id, specification, c.models, c.session)
        assert len(c.provider.calls) == len({t['id'] for t in c.provider.calls}) == 14
        assert sum(a['kind'] == 'text' for a in c.generation.canvas.assets.list(c.owner)) == 1
        exports = Exports(c.store)
        snapshot = exports.timeline.snapshot(c.owner)
        assert not snapshot['problems'] and not snapshot['preview']['partial']
        export = {'id': str(uuid4()), 'name': '联合验收.mp4', 'expectedRevision': snapshot['timeline']['revision'],
                  'expectedStoryboardRevision': snapshot['storyboardRevision']}
        task = await exports.submit(c.owner, export, c.session)
        await asyncio.gather(*list(exports.jobs.values()))
        assert exports.list(c.owner)[0]['status'] == 'succeeded'
        path = exports.download(c.owner, task['id'])
        probe = json.loads(subprocess.check_output(['ffprobe', '-v', 'error', '-show_streams', '-of', 'json', str(path)]))
        frames = sum(clip['durationFrames'] for clip in snapshot['timeline']['clips'] if clip['track'] == 'visual')
        assert int(next(s['nb_frames'] for s in probe['streams'] if s['codec_type'] == 'video')) == frames
        subprocess.run(['ffmpeg', '-v', 'error', '-i', str(path), '-f', 'null', '-'], check=True)
        assert c.manager.board.snapshot(c.owner)['storyboard'] == board
        assert len(c.provider.calls) == 14
        await exports.close(); await close(c)
    asyncio.run(run())


@pytest.mark.parametrize('failure', ['query', 'download', 'unknown_submit'])
def test_remote_recovery_across_plan_restart_preserves_attempt_and_delivery(tmp_path, media, failure):
    c = context(tmp_path, media)
    calls, healthy = [], False
    def handle(request):
        calls.append((request.method, request.url.host, request.url.path))
        if request.method == 'POST':
            if failure == 'unknown_submit':
                raise httpx.ReadTimeout('connection lost after paid submission', request=request)
            return httpx.Response(200, json={'id': 'fixed-remote-task'})
        if request.url.host == 'cdn.test':
            if failure == 'download' and not healthy:
                raise httpx.ReadTimeout('download temporarily unavailable', request=request)
            return httpx.Response(200, content=media[0])
        assert request.url.path.endswith('/fixed-remote-task')
        if failure == 'query' and not healthy:
            return httpx.Response(503, json={'error': {'code': 'InternalError'}})
        return httpx.Response(200, json={'status': 'succeeded', 'content': {'video_url': 'https://cdn.test/video'}})
    c.generation.provider = VolcengineGeneration(c.store, httpx.MockTransport(handle), poll_interval=0, retry_delays=(0, 0))
    async def run():
        nonlocal healthy
        plan = await c.manager.submit(c.owner, str(uuid4()), {'title': '远端恢复联合验收', 'shots': [
            {'title': '开场', 'videoPrompt': '保留同一次远端请求'}]}, c.models, c.session)
        await wait(c)
        original = c.manager.read(c.owner, plan['id'])['steps'][0]
        assert sum(method == 'POST' for method, *_ in calls) == 1
        healthy = True
        await restart(c)
        if c.manager.read(c.owner, plan['id'])['status'] != 'succeeded':
            await c.manager.resume(c.owner, plan['id'], c.session)
            await wait(c)
        progress = c.manager.progress(c.owner)['plans'][0]
        current = c.manager.read(c.owner, plan['id'])['steps'][0]
        assert (current['taskId'], current['attempt']) == (original['taskId'], 0)
        assert sum(method == 'POST' for method, *_ in calls) == 1
        delivery = TimelineProjects(c.store).snapshot(c.owner)
        if failure == 'unknown_submit':
            assert progress['issueCount'] == 1 and not progress['delivery']['previewAvailable']
            assert delivery['timeline']['clips'] == []
            assert not current['assetId']
        else:
            assert progress['delivery']['exportAvailable'] and not delivery['problems']
            assert current['assetId'] == delivery['timeline']['clips'][0]['assetId']
            assert [n['assetIds'] for n in c.generation.canvas.snapshot(c.owner)['canvas']['nodes'] if n['id'] == current['nodeId']] == [[current['assetId']]]
        await close(c)
    asyncio.run(run())
