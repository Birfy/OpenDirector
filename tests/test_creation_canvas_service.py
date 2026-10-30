"""Real committed commands: no alternate graph and no visible execution nodes."""
from uuid import uuid4

import pytest

from museshow.application.creation_canvas import CreationCanvas, asset_ref, resolved_inputs
from museshow.domain.creation.commands import parse_command
from museshow.infrastructure.creation_projects import CreationProjects
from museshow.infrastructure.local_projects import LocalProjects


@pytest.fixture
def project(tmp_path):
    store = CreationProjects(LocalProjects(tmp_path))
    project_id = uuid4()
    assert send(store, project_id, 'project.create', name='Unified').status == 'applied'
    session = str(uuid4())
    store.open(project_id, session)
    return store, project_id, session


def send(store, project_id, kind, *, session=None, versions=(), **payload):
    command = parse_command(dict(commandId=uuid4(), projectId=project_id, type=kind,
                                expectedVersions=versions, payload=payload))
    return store.execute(command, session=session)


def ver(kind, obj):
    return dict(objectType=kind, id=obj.id, revision=obj.revision)


def media(project, kind='text', title='Source', purpose='draft'):
    store, project_id, session = project
    spec_id, item_id = uuid4(), uuid4()
    receipt = send(store, project_id, 'creation.batch', session=session, operations=[
        dict(type='generationSpec.create', payload=dict(spec=dict(id=spec_id, projectId=project_id, kind=kind, purpose=purpose))),
        dict(type='canvas.show', payload=dict(item=dict(id=item_id, projectId=project_id, kind=kind, title=title,
            binding=dict(role='empty', draftSpec=dict(id=spec_id)) if purpose == 'draft' else dict(role='generation', objectRef=dict(id=spec_id)))))])
    assert receipt.status == 'applied', receipt
    snapshot = store.snapshot(project_id)
    return next(i for i in snapshot.canvasItems if i.id == item_id), next(s for s in snapshot.generationSpecs if s.id == spec_id)


def text_material(project, title='Source', text='v1'):
    store, project_id, session = project
    item, _ = media(project, title=title)
    receipt = send(store, project_id, 'asset.writeText', session=session, name=title+'.md', text=text)
    assert receipt.status == 'applied'
    asset = store.snapshot(project_id).assets[-1]
    receipt = send(store, project_id, 'canvas.materialize', session=session, versions=[ver('canvas_item', item)], itemId=item.id, asset=asset_ref(asset))
    assert receipt.status == 'applied', receipt
    return store.snapshot(project_id).canvasItems[-1], asset


def test_hidden_follow_source_reopens_with_stable_identity_and_duplicate_reference_is_noop(project):
    store, pid, session = project
    source, asset = text_material(project)
    target, spec = media(project)
    ref = dict(id=uuid4(), projectId=pid, binding='follow_current', source=dict(id=source.id), targetSpecId=spec.id)
    receipt = send(store, pid, 'reference.add', session=session,
        versions=[ver('generation_spec', spec), ver('canvas_item', target)], reference=ref)
    assert receipt.status == 'applied', receipt
    current = store.snapshot(pid)
    assert current.canvasItems[-1].binding.role == 'generation'
    assert resolved_inputs(current, spec.id)[0].asset.assetId == asset.id
    ref['id'] = uuid4()
    spec = current.generationSpecs[-1]
    assert send(store, pid, 'reference.add', session=session, versions=[ver('generation_spec', spec)], reference=ref).status == 'noop'
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', source)], itemId=source.id).status == 'applied'
    reloaded = CreationProjects(LocalProjects(store.local.repository))
    current = reloaded.snapshot(pid)
    assert not current.canvasItems[0].visible
    assert resolved_inputs(current, spec.id)[0].asset.assetId == asset.id
    hidden = current.canvasItems[0]
    assert send(reloaded, pid, 'canvas.show', session=session, versions=[ver('canvas_item', hidden)], item=hidden).status == 'applied'
    assert len(reloaded.snapshot(pid).canvasItems) == 2


def test_blank_rejected_and_batch_rolls_back_all_earlier_operations(project):
    store, pid, session = project
    source, _ = media(project)
    target, spec = media(project)
    before = store.snapshot(pid)
    receipt = send(store, pid, 'creation.batch', session=session,
        versions=[ver('canvas_item', target), ver('generation_spec', spec)], operations=[
            dict(type='canvas.update', payload=dict(itemId=target.id, title='Should roll back')),
            dict(type='reference.add', payload=dict(reference=dict(id=uuid4(), projectId=pid, binding='follow_current',
                source=dict(id=source.id), targetSpecId=spec.id)))])
    assert receipt.status == 'rejected'
    assert store.snapshot(pid) == before


def test_concurrent_move_and_locked_parent_do_not_overwrite_newer_state(project):
    store, pid, session = project
    item, _ = media(project)
    first = send(store, pid, 'canvas.move', session=session, versions=[ver('canvas_item', item)], items=[dict(itemId=item.id, position=dict(x=100, y=42))])
    assert first.status == 'applied'
    assert send(store, pid, 'canvas.move', session=session, versions=[ver('canvas_item', item)], items=[dict(itemId=item.id, position=dict(x=0, y=0))]).status == 'rejected'
    moved = store.snapshot(pid).canvasItems[0]
    assert moved.position.x == 100
    assert send(store, pid, 'canvas.update', session=session, versions=[ver('canvas_item', moved)], itemId=moved.id, locked=True).status == 'applied'
    locked = store.snapshot(pid).canvasItems[0]
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', locked)], itemId=locked.id).status == 'rejected'


@pytest.mark.parametrize('binding', ['follow_current', 'pinned'])
def test_frame_mode_limits_image_sources_even_when_hidden_and_rejects_over_limit_mode_switch(project, binding):
    from io import BytesIO
    from PIL import Image
    from museshow.application.creation_assets import CreationAssets
    store, pid, session = project
    assets = CreationAssets(store)
    sources = []
    for index in range(3):
        image = BytesIO()
        Image.new('RGB', (8, 8), (index * 40, 50, 80)).save(image, 'PNG')
        handle = uuid4()
        writer = assets.uploads.begin(pid, handle, session, f'frame-{index}.png', expected_kind='image')
        writer.write(image.getvalue()); writer.finish()
        assert send(store, pid, 'asset.import', session=session, uploadHandle=handle, name=f'frame-{index}.png', expectedKind='image').status == 'applied'
        asset = store.snapshot(pid).assets[-1]
        node_id = uuid4()
        assert send(store, pid, 'canvas.show', session=session,
            item=dict(id=node_id, projectId=pid, kind='image', binding=dict(role='material', objectRef=asset_ref(asset)))).status == 'applied'
        sources.append((node_id, asset))
    target, spec = media(project, 'video')
    def connect(index):
        current = store.snapshot(pid)
        node_id, asset = sources[index]
        ref = dict(id=uuid4(), projectId=pid, targetSpecId=spec.id, binding=binding,
            source=dict(id=node_id) if binding == 'follow_current' else asset_ref(asset), order=index)
        return send(store, pid, 'reference.add', session=session, reference=ref,
            versions=[ver('generation_spec', current.generationSpecs[-1]), ver('canvas_item', current.canvasItems[-1])])
    assert connect(0).status == 'applied'
    assert connect(1).status == 'applied'
    source = store.snapshot(pid).canvasItems[0]
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', source)], itemId=source.id).status == 'applied'
    before = store.snapshot(pid)
    rejected = connect(2)
    assert rejected.status == 'rejected' and '最多连接 2' in rejected.issues[0].message
    assert store.snapshot(pid) == before
    spec = before.generationSpecs[-1]
    reference_spec = spec.model_copy(update={'parameters': spec.parameters.model_copy(update={'videoMode': 'reference'})})
    assert send(store, pid, 'generationSpec.update', session=session, versions=[ver('generation_spec', spec)], spec=reference_spec).status == 'applied'
    assert connect(2).status == 'applied'
    current = store.snapshot(pid).generationSpecs[-1]
    rejected = send(store, pid, 'generationSpec.update', session=session, versions=[ver('generation_spec', current)],
        spec=current.model_copy(update={'parameters': current.parameters.model_copy(update={'videoMode': 'first_frame'})}))
    assert rejected.status == 'rejected' and '最多连接 2' in rejected.issues[0].message
    assert store.snapshot(pid).generationSpecs[-1].parameters.videoMode == 'reference'


def test_subject_reference_freezes_document_and_expands_assets(project):
    store, pid, session = project
    # Subject main images are real inspected uploads, not a synthetic subject asset.
    from PIL import Image
    from io import BytesIO
    from museshow.application.creation_assets import CreationAssets
    assets = CreationAssets(store)
    image = BytesIO()
    Image.new('RGB', (32, 32), 'blue').save(image, 'PNG')
    handle = uuid4()
    writer = assets.uploads.begin(pid, handle, session, 'subject.png', expected_kind='image')
    writer.write(image.getvalue())
    writer.finish()
    assert send(store, pid, 'asset.import', session=session, uploadHandle=handle, name='subject.png', expectedKind='image').status == 'applied'
    asset = store.snapshot(pid).assets[-1]
    doc_id, item_id = uuid4(), uuid4()
    assert send(store, pid, 'creation.batch', session=session, operations=[
        dict(type='editor.create', payload=dict(document=dict(id=doc_id, projectId=pid, kind='subject', data=dict(main=asset_ref(asset))))),
        dict(type='canvas.show', payload=dict(item=dict(id=item_id, projectId=pid, kind='subject', binding=dict(role='editor', objectRef=dict(id=doc_id, kind='subject')))))
    ]).status == 'applied'
    target, spec = media(project, 'image')
    receipt = send(store, pid, 'reference.add', session=session, versions=[ver('canvas_item', target), ver('generation_spec', spec)],
        reference=dict(id=uuid4(), projectId=pid, targetSpecId=spec.id, binding='follow_current', source=dict(id=item_id)))
    assert receipt.status == 'applied', receipt
    resolved = resolved_inputs(store.snapshot(pid), spec.id)
    assert resolved[0].documentVersion.id == doc_id
    assert resolved[0].subjectRole == 'main'
    assert len(store.snapshot(pid).assets) == 1


def test_hidden_group_projection_and_show_child_restore_ancestor_identity(project):
    store, pid, session = project
    child, asset = text_material(project)
    parent_id = uuid4()
    assert send(store, pid, 'creation.batch', session=session, versions=[ver('canvas_item', child)], operations=[
        dict(type='canvas.show', payload=dict(item=dict(id=parent_id, projectId=pid, kind='group'))),
        dict(type='canvas.update', payload=dict(itemId=child.id, parentId=parent_id))]).status == 'applied'
    parent = store.snapshot(pid).canvasItems[-1]
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', parent)], itemId=parent.id).status == 'applied'
    projection = CreationCanvas(store).projection(pid)
    assert not projection['visibleItemIds']
    assert set(projection['hiddenItemIds']) == {child.id, parent.id}
    snapshot = store.snapshot(pid)
    current_child, current_parent = snapshot.canvasItems
    assert send(store, pid, 'canvas.show', session=session, versions=[ver('canvas_item', current_child), ver('canvas_item', current_parent)], item=current_child).status == 'applied'
    assert set(CreationCanvas(store).projection(pid)['visibleItemIds']) == {child.id, parent.id}
    assert len(store.snapshot(pid).assets) == 1


def test_missing_and_blank_text_sources_are_unavailable_and_cannot_be_connected(project):
    store, pid, session = project
    source, asset = text_material(project, text='   ')
    target, spec = media(project)
    projection = CreationCanvas(store).projection(pid)
    assert not projection['capabilities'][str(source.id)].canUseAsReference
    receipt = send(store, pid, 'reference.add', session=session, versions=[ver('canvas_item', target), ver('generation_spec', spec)],
        reference=dict(id=uuid4(), projectId=pid, targetSpecId=spec.id, binding='follow_current', source=dict(id=source.id)))
    assert receipt.status == 'rejected'
    assert not store.snapshot(pid).references
    (store.root / 'Unified' / asset.path).unlink()
    assert not CreationCanvas(store).projection(pid)['capabilities'][str(source.id)].canExport
