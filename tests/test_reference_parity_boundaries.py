"""Direct service/API writes obey the same type and version boundaries as the UI."""
from copy import deepcopy
from uuid import uuid4

import pytest

from museshow.domain.projects import ProjectError
from museshow.domain.references import project_content
from test_workspace_documents import workspace, document
from canvas_helpers import context, close, media
from test_creation_generation_service import anyio_backend


def test_workspace_replacement_cannot_change_kind_or_overwrite_previous_state(workspace):
    _, documents, pid, session = workspace
    saved = documents.save(pid, document(pid), 0, session)
    changed = deepcopy(saved['document'])
    changed['nodes'][0]['type'] = 'video'
    with pytest.raises(ProjectError, match='不能改变'):
        documents.save(pid, changed, saved['revision'], session)
    assert documents.read(pid) == saved


@pytest.mark.anyio
async def test_real_files_cannot_convert_empty_or_populated_node_types(tmp_path, media):
    c = context(tmp_path, media)
    canvas = c.generation.canvas
    png = c.store.asset(c.owner, c.reference['id'])[0]
    for kind, valid_name, valid_bytes, wrong_name, wrong_bytes in [
        ('image', 'image.png', png, 'video.mp4', media[0]),
        ('video', 'video.mp4', media[0], 'image.png', png),
        ('audio', 'audio.wav', media[1], 'image.png', png),
    ]:
        node = canvas.create(c.owner, dict(id=str(uuid4()), kind=kind), c.session)
        for populated in [False, True]:
            if populated:
                canvas.upload(c.owner, node['id'], str(uuid4()), valid_name, valid_bytes, c.session, discard_inputs=True)
            before = canvas.snapshot(c.owner)
            with pytest.raises(ProjectError):
                canvas.upload(c.owner, node['id'], str(uuid4()), wrong_name, wrong_bytes, c.session, discard_inputs=True)
            assert canvas.snapshot(c.owner) == before
    await close(c)


def test_structured_context_keeps_intent_without_sending_tail_frame_or_reading_labels():
    a, b = str(uuid4()), str(uuid4())
    parts = [dict(type='reference', assetId=a, name='首帧'), dict(type='reference', assetId=b, name='尾帧', transmission='context_only'), dict(type='text', text='\n实际正文')]
    prompt, ids = project_content(parts)
    assert ids == [a] and '尾帧' not in prompt
    assert parts[1]['assetId'] == b  # Immutable evidence retains the unused intent.
    assert project_content(parts, speech=True)[0] == '实际正文'


@pytest.mark.anyio
async def test_workspace_sources_reuse_canonical_assets_with_independent_logical_owners(tmp_path):
    c = context(tmp_path)
    canvas = c.generation.canvas
    original = c.reference
    identifiers = []
    before_assets = canvas.snapshot(c.owner)['assets']
    for _ in range(2):
        node = canvas.create(c.owner, dict(id=str(uuid4()), logicalNodeId=str(uuid4()), kind='image'), c.session)
        result = canvas.bind_reference_source(c.owner, node['id'], original['id'], original['fingerprint'], node['revision'], c.session, discard_inputs=True)
        assert result['asset']['id'] == original['id']
        assert result['node']['role'] == 'material'
        identifiers.append(result['node']['id'])
    snapshot = canvas.snapshot(c.owner)
    assert snapshot['assets'] == before_assets
    assert set(identifiers) <= {node['id'] for node in snapshot['referenceSources'] if node['assetId'] == original['id']}
    before = deepcopy(snapshot)
    with pytest.raises(ProjectError):
        canvas.bind_reference_source(c.owner, identifiers[0], original['id'], 'sha256:' + '0' * 64, snapshot['canvas']['nodes'][0]['revision'], c.session)
    assert canvas.snapshot(c.owner) == before
    await close(c)


def test_hidden_source_replacement_and_title_keep_identity_and_current_version(tmp_path):
    from museshow.infrastructure.asset_catalog import AssetCatalog
    from museshow.infrastructure.canvas import CanvasProjects
    from museshow.infrastructure.local_projects import LocalProjects
    store = LocalProjects(tmp_path)
    pid, session = str(uuid4()), str(uuid4())
    store.create('Hidden sources', pid, session)
    catalog, canvas = AssetCatalog(store), CanvasProjects(store)
    imported = catalog.import_file(pid, str(uuid4()), 'first.md', b'first', session, as_reference=True)['asset']
    source_id = imported['nodeId']
    before = canvas.snapshot(pid)
    assert not before['canvas']['nodes']
    source = next(node for node in before['referenceSources'] if node['id'] == source_id)
    second = canvas.save_text(pid, source_id, str(uuid4()), 'second', 'second.md', session, expected_revision=source['revision'])
    snapshot = canvas.snapshot(pid)
    assert not snapshot['canvas']['nodes']
    source = next(node for node in snapshot['referenceSources'] if node['id'] == source_id)
    assert source['assetId'] == second['id']
    assert second['id'] in snapshot['availableAssetIds'] and imported['id'] not in snapshot['availableAssetIds']
    canvas.patch(pid, source_id, dict(title='Renamed hidden source', expectedRevision=source['revision']), session)
    latest = next(node for node in canvas.snapshot(pid)['referenceSources'] if node['id'] == source_id)
    assert latest['title'] == 'Renamed hidden source'
    canvas.bind_reference_source(pid, source_id, imported['id'], imported['fingerprint'], latest['revision'], session)
    restored = canvas.snapshot(pid)
    assert not restored['canvas']['nodes']
    assert imported['id'] in restored['availableAssetIds'] and second['id'] not in restored['availableAssetIds']
