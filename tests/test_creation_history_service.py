from uuid import uuid4

from opendirector.application.creation_history import CreationHistory
from opendirector.domain.creation.commands import parse_command
from opendirector.infrastructure.creation_projects import CreationProjects
from opendirector.infrastructure.local_projects import LocalProjects
from test_creation_canvas_service import project, media, send, text_material, ver


def test_field_scoped_undo_preserves_other_fields_and_rejects_same_field_conflict(project):
    store, pid, session = project
    item, _ = media(project)
    command = parse_command(dict(commandId=uuid4(), projectId=pid, type='canvas.move',
        expectedVersions=[ver('canvas_item', item)], payload=dict(items=[dict(itemId=item.id, position=dict(x=50, y=25))])))
    assert store.execute(command, session=session).status == 'applied'
    moved = store.snapshot(pid).canvasItems[0]
    assert send(store, pid, 'canvas.update', session=session, versions=[ver('canvas_item', moved)], itemId=item.id, title='New title').status == 'applied'
    edited = store.snapshot(pid).canvasItems[0]
    assert send(store, pid, 'history.undo', session=session, versions=[ver('canvas_item', edited)], targetCommandId=command.commandId).status == 'applied'
    undone = store.snapshot(pid).canvasItems[0]
    assert undone.title == 'New title' and undone.position.x == 0
    assert send(store, pid, 'history.redo', session=session, versions=[ver('canvas_item', undone)], targetCommandId=command.commandId).status == 'applied'
    redone = store.snapshot(pid).canvasItems[0]
    assert redone.title == 'New title' and redone.position.x == 50
    assert send(store, pid, 'canvas.move', session=session, versions=[ver('canvas_item', redone)], items=[dict(itemId=item.id, position=dict(x=90, y=25))]).status == 'applied'
    newer = store.snapshot(pid).canvasItems[0]
    receipt = send(store, pid, 'history.undo', session=session, versions=[ver('canvas_item', newer)], targetCommandId=command.commandId)
    assert receipt.status == 'rejected'
    assert store.snapshot(pid).canvasItems[0].position.x == 90


def deletion(project, asset, preview):
    store, pid, session = project
    snapshot = store.snapshot(pid)
    return parse_command(dict(commandId=uuid4(), projectId=pid, type='asset.delete',
        expectedVersions=[ver('asset', asset), *[ver('canvas_item', i) for i in snapshot.canvasItems if str(i.id) in preview['hiddenItemIds']]],
        expectedPreview=preview['fingerprint'], payload=dict(assetIds=[asset.id], clearHistory=preview['clearsAllUndoRedo'])))


def test_delete_preview_protects_visible_and_undo_then_clears_only_canvas_undo(project):
    store, pid, session = project
    item, asset = text_material(project)
    history = CreationHistory(store)
    assert not history.delete_preview(pid, [asset.id], True)['canDelete']
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', item)], itemId=item.id).status == 'applied'
    assert not history.delete_preview(pid, [asset.id])['canDelete']
    preview = history.delete_preview(pid, [asset.id], True)
    assert preview['canDelete']
    command = deletion(project, asset, preview)
    receipt = store.execute(command, session=session)
    assert receipt.status == 'applied', receipt
    snapshot = store.snapshot(pid)
    assert not snapshot.assets and snapshot.canvasItems[0].binding.role == 'empty'
    assert not (store.root / 'Unified' / asset.path).exists()
    assert not history.operations(pid)
    assert store.execute(command, session=session) == receipt


def test_delete_expired_preview_and_restart_after_publication(project):
    store, pid, session = project
    item, asset = text_material(project)
    history = CreationHistory(store)
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', item)], itemId=item.id).status == 'applied'
    preview = history.delete_preview(pid, [asset.id], True)
    command = deletion(project, asset, preview)
    hidden = store.snapshot(pid).canvasItems[0]
    assert send(store, pid, 'canvas.update', session=session, versions=[ver('canvas_item', hidden)], itemId=item.id, title='New').status == 'applied'
    assert store.execute(command, session=session).status == 'rejected'
    assert (store.root / 'Unified' / asset.path).exists()
    command = deletion(project, asset, history.delete_preview(pid, [asset.id], True))
    def crash(stage):
        if stage == 'published':
            raise OSError('Injected crash before file deletion')
    store._checkpoint = crash
    import pytest
    with pytest.raises(OSError):
        store.execute(command, session=session)
    restarted = CreationProjects(LocalProjects(store.local.repository))
    assert not restarted.snapshot(pid).assets
    assert not (store.root / 'Unified' / asset.path).exists()
    assert restarted.execute(command, session=session).status == 'applied'


def test_asset_list_uses_hidden_current_and_history_usage_is_authoritative(project):
    store, pid, session = project
    item, asset = text_material(project)
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', item)], itemId=item.id).status == 'applied'
    listing = CreationHistory(store).asset_list(pid)
    assert listing['items'][0]['asset'].id == asset.id
    assert not listing['items'][0]['owners'][0]['visible']
    assert listing['items'][0]['usage']['used']


def test_undo_material_binding_restores_empty_without_deleting_immutable_asset(project):
    store, pid, session = project
    item, asset = text_material(project)
    materialize = next(record for record in store.history(pid) if record.command.type == 'canvas.materialize')
    assert send(store, pid, 'history.undo', session=session, versions=[ver('canvas_item', item)], targetCommandId=materialize.command.commandId).status == 'applied'
    snapshot = store.snapshot(pid)
    assert snapshot.canvasItems[0].binding.role == 'empty'
    assert snapshot.assets[0] == asset
    empty = snapshot.canvasItems[0]
    assert send(store, pid, 'history.redo', session=session, versions=[ver('canvas_item', empty)], targetCommandId=materialize.command.commandId).status == 'applied'
    assert store.snapshot(pid).canvasItems[0].binding.role == 'material'


def test_reference_remove_undo_retains_identity_and_monotonic_revision(project):
    store, pid, session = project
    source, _ = text_material(project)
    target, spec = media(project)
    reference_id = uuid4()
    assert send(store, pid, 'reference.add', session=session, versions=[ver('canvas_item', target), ver('generation_spec', spec)],
        reference=dict(id=reference_id, projectId=pid, targetSpecId=spec.id, binding='follow_current', source=dict(id=source.id))).status == 'applied'
    ref = store.snapshot(pid).references[0]
    remove = parse_command(dict(commandId=uuid4(), projectId=pid, type='reference.remove', expectedVersions=[ver('reference', ref)], payload=dict(referenceId=ref.id)))
    assert store.execute(remove, session=session).status == 'applied'
    inactive = store.snapshot(pid).references[0]
    assert not inactive.active and inactive.revision == 2
    assert send(store, pid, 'history.undo', session=session, versions=[ver('reference', inactive)], targetCommandId=remove.commandId).status == 'applied'
    revived = store.snapshot(pid).references[0]
    assert revived.active and revived.id == ref.id and revived.revision == 3
    # A pre-removal actor cannot mutate the revived reference with revision 1.
    assert send(store, pid, 'reference.remove', session=session, versions=[ver('reference', ref)], referenceId=ref.id).status == 'rejected'


def test_stack_document_retains_hidden_material_even_after_clearing_undo(project):
    store, pid, session = project
    item, asset = text_material(project)
    assert send(store, pid, 'canvas.hide', session=session, versions=[ver('canvas_item', item)], itemId=item.id).status == 'applied'
    assert send(store, pid, 'editor.create', session=session,
        document=dict(id=uuid4(), projectId=pid, kind='stack', data=dict(nodeIds=[item.id]))).status == 'applied'
    preview = CreationHistory(store).delete_preview(pid, [asset.id], True)
    assert not preview['canDelete']
    assert any(reason['type'] == 'editor_document' for reason in preview['usage'][0]['reasons'])


def test_asset_list_batches_history_and_tool_dependencies_without_stale_usage(project, monkeypatch):
    from opendirector.infrastructure.creation_projects import durable_json
    import opendirector.application.creation_history as history_module

    store, pid, session = project
    item, material = text_material(project)
    assert send(store, pid, 'canvas.hide', session=session,
                versions=[ver('canvas_item', item)], itemId=item.id).status == 'applied'
    for name in ['Tool input', 'Unused']:
        assert send(store, pid, 'asset.writeText', session=session, name=name + '.md', text=name).status == 'applied'
    snapshot = store.snapshot(pid)
    tool_input, unused = snapshot.assets[-2:]
    task_id = str(uuid4())
    folder = store.root / 'Unified' / 'tool-tasks'
    folder.mkdir()
    ledger = folder / f'{task_id}.json'
    durable_json(ledger, dict(id=task_id, sourceAssetIds=[str(tool_input.id)], outputs=[]))
    loads, history_reads, ledger_reads = [], [], []
    load, history, read = store._load, store.history, history_module.read_json
    def loading(*args, **kwargs):
        loads.append(1)
        return load(*args, **kwargs)
    def records(*args, **kwargs):
        history_reads.append(1)
        return history(*args, **kwargs)
    def reading(path):
        ledger_reads.append(path)
        return read(path)
    monkeypatch.setattr(store, '_load', loading)
    monkeypatch.setattr(store, 'history', records)
    monkeypatch.setattr(history_module, 'read_json', reading)
    service = CreationHistory(store)
    listing = service.asset_list(pid)
    assert len(history_reads) == 1 and len(loads) == 2
    assert ledger_reads == [ledger]
    assert listing['eventCursor'] == snapshot.eventCursor
    assert [row['asset'].id for row in listing['items']] == [unused.id, tool_input.id, material.id]
    rows = {row['asset'].id: row for row in listing['items']}
    assert rows[material.id]['owners'] == [dict(itemId=item.id, visible=False)]
    assert rows[material.id]['usage']['hiddenItemIds'] == [str(item.id)]
    assert any(reason['type'] == 'undo_history' for reason in rows[material.id]['usage']['reasons'])
    assert rows[tool_input.id]['usage']['reasons'] == [dict(type='tool_task', id=task_id)]
    assert not rows[unused.id]['usage']['used']
    assert service.asset_list(pid, usage='unused')['total'] == 1
    page = service.asset_list(pid, usage='used', offset=1, limit=1)
    assert page['total'] == 2 and page['items'][0]['asset'].id == material.id
    assert service.asset_list(pid, text='TOOL')['items'][0]['asset'].id == tool_input.id
    # Re-read the independent ledger on the next request, even at the same cursor.
    durable_json(ledger, dict(id=task_id, sourceAssetIds=[], outputs=[]))
    refreshed = service.asset_list(pid, usage='unused')
    assert refreshed['eventCursor'] == listing['eventCursor']
    assert {row['asset'].id for row in refreshed['items']} == {tool_input.id, unused.id}
