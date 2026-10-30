"""Provider doubles exercise the real durable runtime, files and restart path."""
import asyncio
from uuid import UUID, uuid4

import pytest

from museshow.application.creation_canvas import resolved_inputs
from museshow.application.creation_generation import CreationGeneration
from museshow.application.generation import Generation
from museshow.domain.creation.commands import parse_command
from museshow.infrastructure.model_configs import ModelConfigs
from test_creation_canvas_service import project, media, send, text_material, ver


@pytest.fixture
def anyio_backend():
    return 'asyncio'


class Provider:
    def __init__(self):
        self.calls = []
        self.started = asyncio.Event()
        self.finish = asyncio.Event()

    def validate(self, kind, config):
        pass

    async def generate(self, config, task, submitted):
        self.calls.append(task)
        self.started.set()
        await self.finish.wait()
        return 'md', b'Actual generated text'


def runtime(project, provider):
    store, _, _ = project
    configs = ModelConfigs(store.local.repository)
    config = configs.save('agent', 'http://127.0.0.1:12345/v1', 'test-agent', '',
        connection_type='self_hosted', protocol='openai', auth_mode='none')
    legacy = Generation(store.local, configs, provider)
    return CreationGeneration(store, configs, legacy, provider), config


def configure(project, config):
    store, pid, session = project
    target, spec = media(project)
    changed = spec.model_copy(update={'prompt': 'Use the source', 'modelConfigId': UUID(config['id'])})
    assert send(store, pid, 'generationSpec.update', session=session, versions=[ver('generation_spec', spec)], spec=changed).status == 'applied'
    return target, store.snapshot(pid).generationSpecs[-1]


@pytest.mark.anyio
async def test_hidden_source_generation_frozen_history_restart_and_idempotent_command(project):
    store, pid, session = project
    provider = Provider()
    runner, config = runtime(project, provider)
    source, asset = text_material(project)
    target, spec = configure(project, config)
    ref_id = uuid4()
    assert send(store, pid, 'reference.add', session=session,
        versions=[ver('canvas_item', target), ver('generation_spec', spec)],
        reference=dict(id=ref_id, projectId=pid, binding='follow_current', source=dict(id=source.id), targetSpecId=spec.id)).status == 'applied'
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', source)], itemId=source.id).status == 'applied'
    snapshot = store.snapshot(pid)
    target, spec = snapshot.canvasItems[-1], snapshot.generationSpecs[-1]
    command = parse_command(dict(commandId=uuid4(), projectId=pid, type='generation.submit',
        expectedVersions=[ver('canvas_item', target), ver('generation_spec', spec)],
        payload=dict(specId=spec.id, expectedSpecRevision=spec.revision, originItemId=target.id)))
    receipt = await runner.execute(command, session=session)
    assert receipt.status == 'accepted', receipt
    await asyncio.wait_for(provider.started.wait(), 3)
    # Closing the canvas item is unrelated to the accepted task's lifetime.
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', target)], itemId=target.id).status == 'applied'
    provider.finish.set()
    await asyncio.gather(*(job.future for job in list(runner.jobs.values())))
    snapshot = store.snapshot(pid)
    assert snapshot.jobs[0].status == 'succeeded', snapshot.jobs[0]
    assert snapshot.jobs[0].adopted
    assert len(snapshot.results) == 1
    assert snapshot.jobs[0].inputSnapshot.references[0].asset.assetId == asset.id
    assert not any(i.visible for i in snapshot.canvasItems)
    assert (await runner.execute(command, session=session)) == receipt
    assert len(provider.calls) == 1
    await runner.close()
    from museshow.infrastructure.creation_projects import CreationProjects
    from museshow.infrastructure.local_projects import LocalProjects
    reopened = CreationProjects(LocalProjects(store.local.repository)).snapshot(pid)
    assert reopened == snapshot
    assert len(reopened.canvasItems) == 2  # No per-request execution node.


@pytest.mark.anyio
async def test_changed_intent_retains_candidate_without_overwriting_edits(project):
    store, pid, session = project
    provider = Provider()
    runner, config = runtime(project, provider)
    target, spec = configure(project, config)
    command = parse_command(dict(commandId=uuid4(), projectId=pid, type='generation.submit',
        expectedVersions=[ver('canvas_item', target), ver('generation_spec', spec)],
        payload=dict(specId=spec.id, expectedSpecRevision=spec.revision, originItemId=target.id)))
    assert (await runner.execute(command, session=session)).status == 'accepted'
    await asyncio.wait_for(provider.started.wait(), 3)
    current = store.snapshot(pid).generationSpecs[-1]
    assert send(store, pid, 'generationSpec.update', session=session, versions=[ver('generation_spec', current)],
        spec=current.model_copy(update={'prompt': 'My newer edit'})).status == 'applied'
    provider.finish.set()
    await asyncio.gather(*(j.future for j in list(runner.jobs.values())))
    snapshot = store.snapshot(pid)
    assert snapshot.jobs[0].status == 'succeeded', snapshot.jobs[0]
    assert not snapshot.jobs[0].adopted
    assert snapshot.generationSpecs[-1].prompt == 'My newer edit'
    assert snapshot.generationSpecs[-1].currentResultId is None
    assert len(snapshot.results) == len(snapshot.assets) == 1
    await runner.close()
