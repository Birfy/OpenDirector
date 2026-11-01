"""History describes immutable output inputs without a production service."""
import asyncio
from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.canvas_versions import node_history
from opendirector_api.main import create_app
from canvas_helpers import context, close


async def generated(c, prompt, references=()):
    node = c.generation.canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image'}, c.session)
    task = await c.generation.submit(c.owner, node['id'], {'id': str(uuid4()), 'expectedRevision': node['revision'],
        'modelConfigId': c.models['image'], 'inputs': {'prompt': prompt, 'referenceIds': list(references)}}, c.session)
    await asyncio.gather(*(job.future for job in c.generation.jobs.values()))
    task = next(item for item in c.generation.canvas.snapshot(c.owner)['tasks'] if item['id'] == task['id'])
    assert task['status'] == 'succeeded'
    return node, task


def test_history_is_read_only_pins_generation_inputs_and_rejects_upload(tmp_path):
    c = context(tmp_path)
    async def run():
        node, task = await generated(c, '生成时的要求', [c.reference['id']])
        canvas = c.generation.canvas
        canvas.patch(c.owner, node['id'], {'prompt': '后来修改的草稿', 'referenceIds': []}, c.session)
        uploaded = canvas.assets.import_file(c.owner, str(uuid4()), '上传.png', c.store.asset(c.owner, c.reference['id'])[0], c.session)
        with pytest.raises(ProjectError, match='生成节点'):
            canvas.attach(c.owner, node['id'], uploaded['id'], c.session)
        before = {p: p.read_bytes() for p in c.directory.rglob('*.json')}
        state = node_history(canvas, c.owner, node['id'])
        assert {p: p.read_bytes() for p in before} == before
        assert state['node']['prompt'] == '后来修改的草稿' and not state['running']
        original, = state['versions']
        assert original['prompt'] == '生成时的要求' and original['referenceIds'] == [c.reference['id']]
        assert original['referenceFingerprints'][c.reference['id']] == c.reference['fingerprint']
        assert original['asset']['id'] == task['assetId'] and len(c.provider.calls) == 1
        await close(c)
    asyncio.run(run())


def test_unrecorded_history_never_infers_inputs_and_endpoint_is_project_scoped(tmp_path):
    c = context(tmp_path)
    canvas = c.generation.canvas
    node = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image',
        'assetId': c.reference['id'], 'assetIds': [c.reference['id']]}, c.session)
    state = node_history(canvas, c.owner, node['id'])
    assert state['versions'][0]['prompt'] is None and state['versions'][0]['referenceIds'] == []
    other = c.store.create('另一个项目', str(uuid4()), str(uuid4()))
    with TestClient(create_app(c.store, generation_provider=c.provider)) as client:
        headers = {'X-OpenDirector-Request': '1'}
        response = client.get(f'/api/projects/{c.owner}/canvas/nodes/{node["id"]}/versions', headers=headers)
        assert response.status_code == 200 and response.json() == state
        assert 'apiKey' not in response.text and 'private' not in response.text
        assert client.get(f'/api/projects/{other["id"]}/canvas/nodes/{node["id"]}/versions', headers=headers).status_code == 404


def test_missing_generation_record_is_unknown_instead_of_copying_mutable_node(tmp_path):
    c = context(tmp_path)
    async def run():
        node, task = await generated(c, '原要求')
        (c.directory / 'tasks' / (task['id'] + '.json')).unlink()
        history = node_history(c.generation.canvas, c.owner, node['id'])
        assert history['versions'][0]['recorded'] is False
        assert history['versions'][0]['prompt'] is None and history['versions'][0]['referenceIds'] == []
        await close(c)
    asyncio.run(run())
