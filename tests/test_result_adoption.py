import asyncio
from copy import deepcopy
import io
from pathlib import Path
import subprocess
import shutil
from uuid import uuid4
import wave

import pytest

from museshow.infrastructure.generation_results import GenerationResults
from canvas_helpers import setup


async def started(provider):
    for _ in range(200):
        if provider.calls:
            return
        await asyncio.sleep(.01)
    raise AssertionError('Generation did not start')


async def settled(generation):
    await asyncio.gather(*(job.future for job in list(generation.jobs.values())))


def image(generation, owner, session, name, *, source='upload'):
    from PIL import Image
    data = io.BytesIO()
    Image.new('RGB', (12, 10), 'blue').save(data, 'PNG')
    return generation.canvas.assets.import_file(owner, str(uuid4()), name + '.png', data.getvalue(), session, source=source)


def audio_bytes():
    data = io.BytesIO()
    with wave.open(data, 'wb') as stream:
        stream.setnchannels(1); stream.setsampwidth(2); stream.setframerate(8000)
        stream.writeframes(b'\0\0' * 8000)
    return data.getvalue()


def require_media(*, video=False):
    if not shutil.which('ffprobe') or (video and not shutil.which('ffmpeg')):
        pytest.skip('media fixtures require local FFmpeg tools')


@pytest.mark.parametrize('edit,held', [
    ('prompt', 'node_changed'), ('reference', 'node_changed'), ('selection', 'node_changed'),
    ('model', 'model_changed'), ('reference_bytes', 'reference_changed'),
    ('move_and_title', None), ('reference_rename', None), ('restore_inputs', None),
    ('candidate_only', 'candidate_only'), ('unrelated_board', None),
])
def test_manual_result_compares_inputs_and_preserves_current_selection(tmp_path, edit, held):
    store, session, project, config, generation, provider = setup(tmp_path)
    owner = project['id']
    old, alternate = [image(generation, owner, session, name, source='generated') for name in ('old', 'alternate')]
    reference = image(generation, owner, session, 'reference')
    node = generation.canvas.create(owner, {'id': str(uuid4()), 'kind': 'image',
        'assetId': old['id'], 'assetIds': [old['id']]}, session)
    generation.canvas.attach(owner, node['id'], alternate['id'], session, adopt=False)
    async def run():
        provider.gate.clear()
        receipt = await generation.submit(owner, node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': config['id'], 'inputs': {'prompt': '原要求', 'referenceIds': [reference['id']]}}, session,
            adoption_policy='candidate_only' if edit == 'candidate_only' else 'if_current')
        await started(provider)
        changes = {'prompt': '新要求'} if edit in {'prompt', 'restore_inputs'} else {'referenceIds': [alternate['id']]} if edit == 'reference' else {'assetId': alternate['id']} if edit == 'selection' else {'x': -30, 'title': '改名'} if edit == 'move_and_title' else {}
        if changes:
            generation.canvas.patch(owner, node['id'], changes, session)
        if edit == 'restore_inputs': generation.canvas.patch(owner, node['id'], {'prompt': '原要求'}, session)
        if edit == 'model': generation.configs.save('image', 'https://changed.test', 'other', 'private', config['id'])
        if edit == 'reference_bytes': (Path(project['path']) / reference['path']).write_bytes(b'changed externally')
        if edit == 'unrelated_board': (Path(project['path']) / 'storyboard.json').write_text('{broken', encoding='utf-8')
        if edit == 'reference_rename':
            generation.canvas.assets.update(owner, reference['id'], {'expectedRevision': 1, 'name': '参考改名.png', 'purpose': 'reference', 'referenceIds': []}, session)
        before = deepcopy(generation.canvas.snapshot(owner)['canvas']['nodes'])
        provider.gate.set()
        await settled(generation)
        snapshot = generation.canvas.snapshot(owner)
        task = next(item for item in snapshot['tasks'] if item['id'] == receipt['id'])
        result = next(item for item in snapshot['canvas']['nodes'] if item['id'] == node['id'])
        previous = next(item for item in before if item['id'] == node['id'])
        assert task['status'] == 'succeeded' and task['technicalCheck']['status'] == 'passed'
        assert task['technicalCheck']['facts']['width'] == 16 and task['technicalCheck']['humanReviewRequired']
        assert task['assetId'] in result['assetIds']
        assert task['canvasAdoption']['reason'] == held
        assert result['assetId'] == (previous['assetId'] if held else task['assetId'])
        assert result['prompt'] == previous['prompt'] and result['referenceIds'] == previous['referenceIds']
        assert result['title'] == previous['title'] and result['x'] == previous['x']
        before_repeat = deepcopy(snapshot)
        generation.adopt_result(owner, receipt['id'])
        assert generation.canvas.snapshot(owner) == before_repeat
        assert len(provider.calls) == 1
        await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('edit_during_generation', [False, True])
def test_text_generation_clears_empty_draft_and_preserves_later_prompt_edits(tmp_path, edit_during_generation):
    _, session, project, _, generation, provider = setup(tmp_path)
    config = generation.configs.save('agent', 'https://chat.test', 'text', 'private')
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': 'text', 'draft': '原草稿'}, session)
    async def text(config, task, submitted):
        provider.calls.append(task['id'])
        await provider.gate.wait()
        return 'md', b'generated text'
    provider.generate = text
    async def run():
        provider.gate.clear()
        receipt = await generation.submit(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': config['id'], 'inputs': {'prompt': '写剧本'}}, session)
        await started(provider)
        if edit_during_generation:
            generation.canvas.patch(project['id'], node['id'], {'prompt': '用户正在修改的生成要求'}, session)
        provider.gate.set(); await settled(generation)
        snapshot = generation.canvas.snapshot(project['id'])
        result = next(item for item in snapshot['canvas']['nodes'] if item['id'] == node['id'])
        task = next(item for item in snapshot['tasks'] if item['id'] == receipt['id'])
        assert task['assetId'] in result['assetIds']
        if edit_during_generation:
            assert result['draft'] is None and result['prompt'] == '用户正在修改的生成要求' and result['assetId'] is None
            assert task['canvasAdoption']['reason'] == 'node_changed'
        else:
            assert result['draft'] is None and result['assetId'] == task['assetId']
            generation.adopt_result(project['id'], task['id'])
            assert generation.canvas.snapshot(project['id']) == snapshot
        await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('kind,suffix', [('video', 'mp4'), ('audio', 'wav'), ('text', 'md')])
def test_technical_check_records_facts_without_creative_quality_claim(tmp_path, kind, suffix):
    if kind in {'audio', 'video'}: require_media(video=kind == 'video')
    _, session, project, _, generation, provider = setup(tmp_path)
    if kind == 'video':
        path = tmp_path / 'clip.mp4'
        subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=32x24:d=0.2', '-pix_fmt', 'yuv420p', str(path)], check=True)
        data = path.read_bytes()
    else:
        data = audio_bytes() if kind == 'audio' else b'script'
    config = generation.configs.save('agent' if kind == 'text' else kind, 'https://model.test', kind, 'private')
    async def generate(config, task, submitted):
        provider.calls.append(task['id'])
        return suffix, data
    provider.generate = generate
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)
    async def run():
        await generation.submit(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': config['id'], 'inputs': {'prompt': '原要求'}}, session)
        await settled(generation)
        task = generation.canvas.snapshot(project['id'])['tasks'][0]
        assert task['status'] == 'succeeded' and task['technicalCheck']['status'] == 'passed'
        facts = task['technicalCheck']['facts']
        assert facts['kind'] == kind and facts['size'] == len(data)
        if kind == 'video': assert facts['width'] == 32 and facts['hasAudio'] is False and facts['durationMs'] > 0
        if kind == 'audio': assert facts['sampleRate'] == 8000 and facts['channels'] == 1 and facts['durationMs'] == 1000
        assert task['technicalCheck']['humanReviewRequired'] is True
        await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('wrong_kind', [False, True])
def test_invalid_result_is_kept_for_diagnostics_and_never_resubmitted(tmp_path, wrong_kind):
    _, session, project, config, generation, provider = setup(tmp_path)
    data = b'invalid image'
    kind = 'image'
    if wrong_kind:
        saved = image(generation, project['id'], session, 'valid')
        data = generation.store.asset(project['id'], saved['id'])[0]
        kind = 'text'
        config = generation.configs.save('agent', 'https://chat.test', 'text', 'private')
    async def invalid(config, task, submitted):
        provider.calls.append(task['id'])
        return 'png', data
    provider.generate = invalid
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)
    async def run():
        receipt = await generation.submit(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
            'modelConfigId': config['id'], 'inputs': {'prompt': '原要求'}}, session)
        await settled(generation)
        for _ in range(2):
            task = next(item for item in generation.canvas.snapshot(project['id'])['tasks'] if item['id'] == receipt['id'])
            assert task['status'] == 'failed' and task['technicalCheck']['status'] == 'failed'
            assert task['errorDetails']['stage'] == 'check' and task['assetId'] is None
            assert GenerationResults(project['path'], task['id']).data()[1] == data
            await generation.recover(project['id'], task['id'], session)
            await settled(generation)
        assert len(provider.calls) == 1
        await generation.close()
    asyncio.run(run())


def test_legacy_task_without_input_basis_is_readable_but_candidate_only(tmp_path):
    _, session, project, config, generation, provider = setup(tmp_path)
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    task, directory, private = generation._prepare(project['id'], node['id'], {'id': str(uuid4()),
        'expectedRevision': 1, 'modelConfigId': config['id'], 'inputs': {'prompt': '旧要求'}}, session)
    task.pop('inputSnapshot'); task.pop('adoptionPolicy')
    generation.canvas.task_write(project['id'], task, directory)
    path = Path(directory) / 'tasks' / (task['id'] + '.json')
    before = path.read_bytes()
    assert generation.canvas.snapshot(project['id'])['tasks'][0]['id'] == task['id']
    assert path.read_bytes() == before
    async def run():
        generation._launch(task, directory, private)
        await settled(generation)
        snapshot = generation.canvas.snapshot(project['id'])
        result = snapshot['tasks'][0]
        assert result['status'] == 'succeeded' and result['canvasAdoption']['reason'] == 'legacy'
        assert snapshot['canvas']['nodes'][0]['assetId'] is None
        assert result['assetId'] in snapshot['canvas']['nodes'][0]['assetIds'] and len(provider.calls) == 1
        await generation.close()
    asyncio.run(run())
