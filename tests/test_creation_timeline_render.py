"""Timeline render publication validates the saved source and real output files."""
import subprocess
from uuid import uuid4

import pytest

from opendirector.application.creation_tool_assets import CreationToolAssets
from opendirector.domain.creation.assets import AssetProvenance
from opendirector.application.creation_canvas import asset_ref
from opendirector.infrastructure.creation_projects import CreationProjects
from opendirector.infrastructure.local_projects import LocalProjects
from test_creation_canvas_service import project, send, ver


def clip(seconds=2, size='64x64'):
    return subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', f'color=blue:s={size}:r=24',
        '-t', str(seconds), '-threads', '1', '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
        '-movflags', 'frag_keyframe+empty_moov', '-f', 'mp4', 'pipe:1'], check=True, capture_output=True).stdout


def prepared(project):
    store, pid, session = project
    assets = CreationToolAssets(store)
    def imported(name, data):
        record = assets.import_file(pid, uuid4(), name, data, session, provenance=AssetProvenance(source="upload"))
        return assets.assets.get(pid, record['id'])
    source, output = imported('source.mp4', clip(4)), imported('render.mp4', clip())
    doc_id, item_id = uuid4(), uuid4()
    document = dict(id=doc_id, projectId=pid, kind='timeline', data=dict(width=64, height=64, fps=24, tracks=[
        dict(id='visual', title='Visual', kind='visual', clips=[dict(id='clip', inPoint=0, outPoint=4, speed=2,
            resource=dict(asset=asset_ref(source), title='Source', durationSeconds=4))])]))
    assert send(store, pid, 'creation.batch', session=session, operations=[
        dict(type='editor.create', payload=dict(document=document)),
        dict(type='canvas.show', payload=dict(item=dict(id=item_id, projectId=pid, kind='timeline',
            binding=dict(role='editor', objectRef=dict(id=doc_id, kind='timeline'))))) ]).status == 'applied'
    snapshot = store.snapshot(pid)
    item, doc = snapshot.canvasItems[0], snapshot.editorDocuments[0]
    versions = [ver('canvas_item', item), ver('editor_document', doc), ver('asset', output)]
    payload = dict(itemId=item.id, editorId=doc.id, asset=asset_ref(output), outputId=uuid4(), title='Rendered')
    return source, output, versions, payload


@pytest.mark.parametrize('actor', ['ui', 'agent'])
def test_publish_replay_reopen_and_undo(project, actor):
    from opendirector.domain.creation.commands import parse_command
    store, pid, session = project
    source, output, versions, payload = prepared(project)
    command = parse_command(dict(commandId=uuid4(), projectId=pid, type='timeline.publishRender', expectedVersions=versions, payload=payload))
    receipt = store.execute(command, session=session, source=actor)
    assert receipt.status == 'applied', receipt
    assert store.execute(command, session=session, source=actor) == receipt
    snapshot = store.snapshot(pid)
    asset = next(a for a in snapshot.assets if a.id == output.id)
    assert asset.provenance.source == 'rendered'
    assert asset.provenance.editorDocumentId == snapshot.editorDocuments[0].id
    assert asset.provenance.editorRevision == snapshot.editorDocuments[0].revision == 1
    assert asset.provenance.sources == (asset_ref(source),)
    assert snapshot.canvasItems[-1].binding.objectRef.assetId == output.id
    assert not snapshot.jobs and not snapshot.results
    assert CreationProjects(LocalProjects(store.local.repository)).snapshot(pid) == snapshot
    current_versions = [*[ver('canvas_item', i) for i in snapshot.canvasItems], *[ver('asset', a) for a in snapshot.assets],
                        *[ver('editor_document', d) for d in snapshot.editorDocuments]]
    undo = send(store, pid, 'history.undo', session=session, versions=current_versions, targetCommandId=receipt.commandId)
    assert undo.status == 'applied', undo
    assert sum(i.visible for i in store.snapshot(pid).canvasItems) == 1
    assert next(a for a in store.snapshot(pid).assets if a.id == output.id).provenance.source == "rendered"


@pytest.mark.parametrize('change', ['stale', 'locked', 'size', 'duration', 'missing', 'missing_source'])
def test_rejected_render_does_not_publish_or_change_provenance(project, change):
    store, pid, session = project
    _, output, versions, payload = prepared(project)
    before = store.snapshot(pid)
    if change == 'stale':
        doc = before.editorDocuments[0].model_dump(mode='json')
        doc['data']['tracks'][0]['clips'][0]['speed'] = 1
        assert send(store, pid, 'editor.save', session=session, versions=versions, document=doc).status == 'applied'
    elif change == 'locked':
        item = before.canvasItems[0]
        assert send(store, pid, 'canvas.update', session=session, versions=versions, itemId=item.id, locked=True).status == 'applied'
        versions[0] = ver('canvas_item', store.snapshot(pid).canvasItems[0])
    elif change in {'size', 'duration'}:
        assets = CreationToolAssets(store)
        record = assets.import_file(pid, uuid4(), 'invalid.mp4', clip(3 if change == 'duration' else 2, '128x64' if change == 'size' else '64x64'), session, provenance=AssetProvenance(source='upload'))
        output = assets.assets.get(pid, record['id'])
        payload['asset'] = asset_ref(output)
        versions[-1] = ver('asset', output)
    else:
        missing = before.assets[0] if change == 'missing_source' else output
        (store.root / before.project.name / missing.path).unlink()
    before = store.snapshot(pid)
    receipt = send(store, pid, 'timeline.publishRender', session=session, versions=versions, **payload)
    assert receipt.status == 'rejected', receipt
    assert store.snapshot(pid) == before


def test_timeline_rejects_clip_beyond_actual_duration_even_when_client_claims_longer(project):
    store, pid, session = project
    _, _, versions, _ = prepared(project)
    before = store.snapshot(pid)
    document = before.editorDocuments[0].model_dump(mode='json')
    document['data']['tracks'][0]['clips'][0].update(outPoint=5, resource={**document['data']['tracks'][0]['clips'][0]['resource'], 'durationSeconds': 9})
    receipt = send(store, pid, 'editor.save', session=session, versions=versions, document=document)
    assert receipt.status == 'rejected'
    assert store.snapshot(pid) == before
