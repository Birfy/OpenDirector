"""History must describe the output's inputs, not the current generation draft."""
import asyncio
from copy import deepcopy
from pathlib import Path
from uuid import uuid4

from fastapi.testclient import TestClient
import pytest
from museshow.domain.projects import ProjectError

from museshow.application.production_review import ProductionReview
from museshow.infrastructure.canvas_versions import node_history
from museshow_api.main import create_app
from test_production_repairs import close, command, context, media, wait


def test_history_is_read_only_pins_generation_inputs_and_rejects_upload(tmp_path):
    c = context(tmp_path)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '历史', 'shots': [
            {'title': '镜头', 'imagePrompt': '生成时的要求', 'referenceIds': [c.reference['id']]}]}, c.models, c.session)
        plan = await wait(c)
        step = plan['steps'][0]
        canvas = c.generation.canvas
        canvas.patch(c.owner, step['nodeId'], {'prompt': '后来修改的草稿', 'referenceIds': []}, c.session)
        uploaded = canvas.assets.import_file(c.owner, str(uuid4()), '上传.png', c.store.asset(c.owner, c.reference['id'])[0], c.session)
        with pytest.raises(ProjectError, match='生成节点'):
            canvas.attach(c.owner, step['nodeId'], uploaded['id'], c.session)
        before = {p: p.read_bytes() for p in c.directory.rglob('*.json')}
        state = node_history(canvas, c.owner, step['nodeId'])
        assert {p: p.read_bytes() for p in before} == before
        assert state['production'] == {'planId': plan['id'], 'stepId': step['id']}
        assert state['node']['prompt'] == '后来修改的草稿' and not state['running']
        original, = state['versions']
        assert original['prompt'] == '生成时的要求' and original['referenceIds'] == [c.reference['id']]
        assert original['referenceFingerprints'][c.reference['id']] == c.reference['fingerprint']
        # The plan and ordinary canvas history use the same output-specific projection.
        reviewed = ProductionReview(c.manager).read(c.owner, plan['id'], step['id'])
        assert reviewed['history'] == state['versions']
        assert len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_unrecorded_history_never_infers_inputs_and_endpoint_is_project_scoped(tmp_path):
    c = context(tmp_path)
    canvas = c.generation.canvas
    node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image',
        'assetId': c.reference['id'], 'assetIds': [c.reference['id']]}, c.session)
    state = node_history(canvas, c.owner, node['id'])
    assert state['production'] is None and state['versions'][0]['prompt'] is None
    assert state['versions'][0]['referenceIds'] == []
    other = c.store.create('另一个项目', str(uuid4()), str(uuid4()))
    with TestClient(create_app(c.store, generation_provider=c.provider)) as client:
        headers = {'X-MuseShow-Request': '1'}
        response = client.get(f'/api/projects/{c.owner}/canvas/nodes/{node["id"]}/versions', headers=headers)
        assert response.status_code == 200 and response.json() == state
        assert 'apiKey' not in response.text and 'private' not in response.text
        assert client.get(f'/api/projects/{other["id"]}/canvas/nodes/{node["id"]}/versions', headers=headers).status_code == 404


def test_missing_generation_record_is_unknown_instead_of_copying_mutable_node(tmp_path):
    c = context(tmp_path)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '历史缺失', 'shots': [{'title': '镜头', 'imagePrompt': '原要求'}]}, c.models, c.session)
        plan = await wait(c); step = plan['steps'][0]
        (c.directory / 'tasks' / (step['taskId'] + '.json')).unlink()
        history = node_history(c.generation.canvas, c.owner, step['nodeId'])
        assert history['versions'][0]['recorded'] is False
        assert history['versions'][0]['prompt'] is None and history['versions'][0]['referenceIds'] == []
        await close(c)
    asyncio.run(run())


def test_explicit_canvas_adoption_preserves_shot_video_and_explicit_storyboard_adoption_is_separate(tmp_path, media):
    c = context(tmp_path, media)
    async def run():
        await c.manager.submit(c.owner, str(uuid4()), {'title': '画布与分镜', 'shots': [
            {'title': '镜头', 'imagePrompt': '原图', 'videoPrompt': '原视频', 'narration': '旁白'}]}, c.models, c.session)
        plan = await wait(c); step = plan['steps'][0]
        original = deepcopy(c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected'])
        await c.manager.repair(c.owner, plan['id'], command(c, plan, step, prompt='新的首帧', adoptionPolicy='candidate_only'), c.session)
        plan = await wait(c); step = plan['steps'][0]; new_asset = step['assetId']
        calls = len(c.provider.calls)
        before = {f: f.read_bytes() for f in (c.directory / 'tasks').glob('*.json')}
        await c.manager.repair(c.owner, plan['id'], command(c, plan, step, action='reuse', assetId=new_asset, adoptionTarget='canvas'), c.session)
        plan = await wait(c)
        assert c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected'] == original
        node = node_history(c.generation.canvas, c.owner, step['nodeId'])['node']
        assert node['assetId'] == new_asset and len(node['assetIds']) == 2
        assert {f: f.read_bytes() for f in before} == before and len(c.provider.calls) == calls
        await c.manager.repair(c.owner, plan['id'], command(c, plan, plan['steps'][0], action='reuse', assetId=new_asset, adoptionTarget='storyboard'), c.session)
        await wait(c)
        selected = c.manager.board.snapshot(c.owner)['storyboard']['shots'][0]['selected']
        assert selected['visual'] == new_asset and selected['audio'] == original['audio']
        assert len(c.provider.calls) == calls
        await close(c)
    asyncio.run(run())
