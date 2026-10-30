"""Scoped user history, immutable configuration versions and dependency queries."""
from copy import deepcopy
from uuid import UUID, uuid5

from museshow.application.creation_canvas import CreationCanvas, current_asset, resolve_reference, visible_item_ids, validate_frame_reference_limit
from museshow.domain.creation.base import Contract, digest
from museshow.domain.creation.project import ProjectSnapshot, asset_references
from museshow.domain.creation.validation import ContractError

EDITABLE = {'canvasItems', 'generationSpecs', 'references', 'editorDocuments'}
ABSENT = object()
UNDOABLE = {'creation.batch', 'canvas.show', 'canvas.hide', 'canvas.move', 'canvas.update', 'canvas.configure',
    'canvas.materialize', 'canvas.attachEditor', 'generationSpec.update', 'generationSpec.restore',
    'reference.add', 'reference.update', 'reference.remove', 'result.select', 'editor.save', 'generationSpec.setPrompt'}


class Preview(Contract):
    snapshot: ProjectSnapshot
    assetIds: tuple[UUID, ...]
    clearHistory: bool


def fields(before, after):
    """Nested field paths prevent undoing one edit from clobbering another."""
    if isinstance(before, dict) and isinstance(after, dict):
        for key in before.keys() | after.keys():
            if key == 'revision':
                continue
            if key not in before or key not in after:
                yield (key,), before.get(key, ABSENT), after.get(key, ABSENT)
            else:
                for path, old, new in fields(before[key], after[key]):
                    yield (key, *path), old, new
    elif before != after:
        yield (), before, after


def at(value, path):
    for key in path:
        if not isinstance(value, dict):
            return ABSENT
        value = value.get(key, ABSENT)
    return value


def put(value, path, content):
    for key in path[:-1]:
        value = value.setdefault(key, {})
    if content is ABSENT:
        value.pop(path[-1], None)
    else:
        value[path[-1]] = deepcopy(content)


class CreationHistory:
    def __init__(self, projects):
        self.projects = projects

    def states(self, project_id):
        records = self.projects.history(project_id)
        cleared = records[0].snapshot.undoClearedThrough
        states = {}
        for record in reversed(records):
            if not record.event or record.event.cursor <= cleared:
                continue
            kind = record.command.type
            if kind in UNDOABLE and record.event.source in {'ui', 'agent'}:
                states[record.command.commandId] = 'applied'
            elif kind in {'history.undo', 'history.redo'}:
                states[record.command.payload.targetCommandId] = 'undone' if kind == 'history.undo' else 'applied'
        return states

    def operations(self, project_id):
        states = self.states(project_id)
        return [dict(commandId=r.command.commandId, type=r.command.type, state=states[r.command.commandId], cursor=r.snapshot.eventCursor)
                for r in self.projects.history(project_id) if r.command.commandId in states and r.command.type in UNDOABLE]

    def versions(self, project_id, spec_id):
        snapshot = self.projects.snapshot(project_id)
        spec = next((s for s in snapshot.generationSpecs if str(s.id) == str(spec_id)), None)
        if spec is None:
            raise ContractError('missing_object', '生成配置不存在。', UUID(str(spec_id)))
        configurations, last = [], None
        records = self.projects.history(project_id)
        accepted = {job_id: record.command.commandId for record in records for job_id in record.receipt.jobIds}
        for record in reversed(records):
            value = next((s for s in record.snapshot.generationSpecs if s.id == spec.id), None)
            if value is not None:
                refs = [r for r in record.snapshot.references if r.active and r.targetSpecId == spec.id]
                identity = dict(spec=value.model_dump(exclude={'revision', 'currentResultId'}),
                    references=[r.model_dump(exclude={'revision'}) for r in refs])
                if identity != last:
                    configurations.append(dict(commandId=record.command.commandId, spec=value,
                        references=refs))
                    last = identity
        return dict(spec=spec, configurations=list(reversed(configurations)),
            jobs=[dict(job=j, configurationCommandId=accepted.get(j.id)) for j in snapshot.jobs if j.inputSnapshot.spec.id == spec.id],
            results=[dict(result=r, job=next(j for j in snapshot.jobs if j.id == r.jobId), configurationCommandId=accepted.get(r.jobId))
                     for r in reversed(snapshot.results) if r.specId == spec.id])

    def execute(self, command, *, session=None, source='ui'):
        if command.type == 'asset.delete':
            return self._delete(command, session=session, source=source)
        def apply(before):
            if command.type == 'generationSpec.restore':
                return self._restore(before, command)
            states = self.states(command.projectId)
            expected = 'applied' if command.type == 'history.undo' else 'undone'
            target_id = command.payload.targetCommandId
            if states.get(target_id) != expected:
                raise ContractError('revision_conflict', '该操作不能撤销或重做，请刷新历史。', target_id)
            records = self.projects.history(command.projectId)
            target = next(r for r in records if r.command.commandId == target_id)
            prior = next((r.snapshot for r in records if r.command.commandId == target.previousHead), None)
            if prior is None or target.command.type not in UNDOABLE:
                raise ContractError('role_restricted', '该操作不属于可撤销编辑。', target_id)
            old, new = prior.model_dump(mode='json'), target.snapshot.model_dump(mode='json')
            data = before.model_dump(mode='json')
            undo = command.type == 'history.undo'
            for collection in EDITABLE:
                previous, following = ({o['id']: o for o in version[collection]} for version in (old, new))
                current = {o['id']: o for o in data[collection]}
                for key in previous.keys() | following.keys():
                    left, right = previous.get(key), following.get(key)
                    actual = current.get(key)
                    if left == right:
                        continue
                    if left is None and collection != 'references':
                        # Creation undo hides the display but keeps business
                        # identity, accepted jobs and generated result history.
                        if collection == 'canvasItems':
                            if actual is None or actual['visible'] != undo:
                                raise ContractError('revision_conflict', '节点显示状态已修改。', UUID(key))
                            actual['visible'] = not undo
                        continue
                    if left is None and collection == 'references':
                        if actual is None:
                            raise ContractError('missing_object', '参考历史已不存在。', UUID(key))
                        if actual['active'] != undo:
                            raise ContractError('revision_conflict', '参考关系已被后续操作修改。', UUID(key))
                        if {k: v for k, v in {**actual, 'active': True}.items() if k != 'revision'} != {k: v for k, v in right.items() if k != 'revision'}:
                            raise ContractError('revision_conflict', '参考内容已被后续编辑修改。', UUID(key))
                        actual['active'] = not undo
                        continue
                    if left is None or right is None:
                        removing = (left is None) == undo
                        expected_obj = right if left is None else left
                        if removing:
                            if actual is None or {k: v for k, v in actual.items() if k != 'revision'} != {k: v for k, v in expected_obj.items() if k != 'revision'}:
                                raise ContractError('revision_conflict', '参考关系已被后续编辑修改。', UUID(key))
                            data[collection].remove(actual)
                        else:
                            if actual is not None:
                                raise ContractError('revision_conflict', '参考关系已存在。', UUID(key))
                            data[collection].append({**expected_obj, 'revision': 1})
                        continue
                    if actual is None:
                        raise ContractError('missing_object', '历史对象已不存在。', UUID(key))
                    for path, old_value, new_value in fields(left, right):
                        if collection == 'generationSpecs' and path == ('purpose',) and undo and old_value == 'draft' and any(str(job.inputSnapshot.spec.id) == key for job in before.jobs):
                            continue  # Accepted execution is not undone with an earlier reference edit.
                        if collection == 'canvasItems' and path[0] == 'binding' and undo and left.get('binding', {}).get('role') == 'empty':
                            draft = left['binding'].get('draftSpec')
                            if draft and any(str(job.inputSnapshot.spec.id) == draft['id'] for job in before.jobs):
                                continue
                        expected_value, restore = (new_value, old_value) if undo else (old_value, new_value)
                        if at(actual, path) != expected_value:
                            raise ContractError('revision_conflict', '相关字段已被后续编辑修改，未覆盖新内容。', UUID(key))
                        put(actual, path, restore)
            return self._revisions(before, data)
        return self.projects.commit(command, apply, session=session, source=source)

    @staticmethod
    def _revisions(before, data):
        for collection in EDITABLE:
            old = {str(o.id): o.model_dump(mode='json') for o in getattr(before, collection)}
            for obj in data[collection]:
                previous = old.get(obj['id'])
                if previous:
                    obj['revision'] = previous['revision']
                    if obj != previous:
                        obj['revision'] += 1
        result = ProjectSnapshot.model_validate(data)
        validate_frame_reference_limit(result)
        return result

    def _restore(self, before, command):
        record = next((r for r in self.projects.history(command.projectId) if r.command.commandId == command.payload.commandId), None)
        current = next((s for s in before.generationSpecs if s.id == command.payload.specId), None)
        historic = next((s for s in record.snapshot.generationSpecs if s.id == command.payload.specId), None) if record else None
        if current is None or historic is None:
            raise ContractError('missing_object', '该配置历史不存在。', command.payload.specId)
        data = before.model_dump(mode='json')
        for item in before.canvasItems:
            owner = item.binding.objectRef if item.binding.role == 'generation' else item.binding.draftSpec if item.binding.role == 'empty' else None
            if owner and owner.id == current.id:
                CreationCanvas._editable(data, item.id)
        spec = next(s for s in data['generationSpecs'] if s['id'] == str(current.id))
        spec.update(historic.model_dump(mode='json', exclude={'revision', 'purpose', 'currentResultId'}))
        old_refs = {r.id: r for r in before.references if r.targetSpecId == current.id}
        refs = []
        for ref in record.snapshot.references:
            if not ref.active or ref.targetSpecId != current.id:
                continue
            values = [ref.model_dump(mode='json')]
            if command.payload.referencePolicy == 'pinned':
                values = [{**ref.model_dump(mode='json'), 'id': str(ref.id if index == 0 else uuid5(command.commandId, f'{ref.id}:{index}')),
                    'binding': 'pinned', 'source': value.asset.model_dump(mode='json')}
                    for index, value in enumerate(resolve_reference(record.snapshot, ref))]
            for value in values:
                previous = old_refs.get(UUID(value['id']))
                value.update(revision=previous.revision if previous else 1, order=len(refs))
                refs.append(value)
        restored_ids = {ref['id'] for ref in refs}
        retained = [{**ref, 'active': False} if ref['targetSpecId'] == str(current.id) and ref['id'] not in restored_ids else ref
                    for ref in data['references'] if ref['id'] not in restored_ids]
        data['references'] = retained + refs
        return self._revisions(before, data)

    def usage(self, snapshot, asset_id, *, include_history=True):
        asset_id = UUID(str(asset_id))
        reasons, hidden_owners = [], []
        visible = visible_item_ids(snapshot)
        def used(kind, obj):
            if any(r.assetId == asset_id for r in asset_references(obj)):
                reasons.append(dict(type=kind, id=str(obj.id)))
        for item in snapshot.canvasItems:
            if item.binding.role == 'generation' and item.binding.materialOverride and item.binding.materialOverride.assetId == asset_id:
                reasons.append(dict(type='visible_canvas_item' if item.id in visible else 'hidden_canvas_item', id=str(item.id)))
            if item.binding.role == 'material' and item.binding.objectRef.assetId == asset_id:
                if item.id in visible:
                    reasons.append(dict(type='visible_canvas_item', id=str(item.id)))
                else:
                    hidden_owners.append(str(item.id))
        for ref in snapshot.references:
            if not ref.active:
                continue
            try:
                if any(r.asset.assetId == asset_id for r in resolve_reference(snapshot, ref)):
                    reasons.append(dict(type='reference', id=str(ref.id)))
            except ContractError:
                # An unresolved relation is never evidence of unused media.
                reasons.append(dict(type='unresolved_reference', id=str(ref.id)))
        for kind, objects in [('editor_document', snapshot.editorDocuments), ('job', snapshot.jobs),
                               ('result', snapshot.results), ('asset_provenance', snapshot.assets)]:
            for obj in objects:
                if obj.id != asset_id:
                    used(kind, obj)
        for document in snapshot.editorDocuments:
            if document.kind == 'stack' and any(item.id in document.data.nodeIds and (asset := current_asset(snapshot, item)) is not None
                                              and asset.id == asset_id for item in snapshot.canvasItems):
                reasons.append(dict(type='editor_document', id=str(document.id)))
        records = self.projects.history(snapshot.project.id)
        historical_pins = {ref.id for record in records for ref in record.snapshot.references
                           if ref.binding == 'pinned' and ref.source.assetId == asset_id}
        for ref_id in historical_pins:
            if not any(ref.id == ref_id and ref.binding == 'pinned' and ref.source.assetId == asset_id for ref in snapshot.references):
                reasons.append(dict(type='configuration_history', id=str(ref_id)))
        if include_history:
            states = self.states(snapshot.project.id)
            by_id = {record.command.commandId: record for record in records}
            for record in records:
                if record.command.commandId in states and record.command.type in UNDOABLE:
                    references = list(asset_references(record.command.payload))
                    prior = by_id.get(record.previousHead)
                    for collection in EDITABLE:
                        previous = {o.id: o for o in getattr(prior.snapshot, collection)} if prior else {}
                        for obj in getattr(record.snapshot, collection):
                            if previous.get(obj.id) != obj:
                                references.extend(asset_references(obj))
                                if obj.id in previous:
                                    references.extend(asset_references(previous[obj.id]))
                    if any(ref.assetId == asset_id for ref in references):
                        reasons.append(dict(type='undo_history', id=str(record.command.commandId)))
        return dict(assetId=str(asset_id), used=bool(reasons), reasons=reasons, hiddenItemIds=hidden_owners)

    def delete_preview(self, project_id, asset_ids, clear_history=False):
        snapshot = self.projects.snapshot(project_id)
        ids = tuple(UUID(str(value)) for value in asset_ids)
        if not ids or len(ids) > 100 or len(set(ids)) != len(ids):
            raise ContractError('invalid_input', '删除选择必须为 1 至 100 个不同资产。')
        for asset_id in ids:
            if not any(a.id == asset_id for a in snapshot.assets):
                raise ContractError('missing_object', '素材已不存在。', asset_id)
        usage = [self.usage(snapshot, key, include_history=not clear_history) for key in ids]
        fingerprint = digest(Preview(snapshot=snapshot, assetIds=ids, clearHistory=clear_history))
        return dict(fingerprint=fingerprint, usage=usage, canDelete=not any(item['used'] for item in usage),
                    clearsAllUndoRedo=clear_history, hiddenItemIds=[key for item in usage for key in item['hiddenItemIds']])

    def _delete(self, command, *, session=None, source='ui'):
        replay = self.projects.replay(command)
        if replay:
            return replay
        from museshow.infrastructure.creation_files import AssetFileDelete
        snapshot = self.projects.snapshot(command.projectId)
        deleting = set(command.payload.assetIds)
        files = tuple(AssetFileDelete(assetId=a.id, fingerprint=a.fingerprint, size=a.metadata.size) for a in snapshot.assets if a.id in deleting)
        def apply(before):
            preview = self.delete_preview(command.projectId, command.payload.assetIds, command.payload.clearHistory)
            if preview['fingerprint'] != command.expectedPreview:
                raise ContractError('preview_expired', '素材使用情况已变化，请重新检查删除影响。')
            if not preview['canDelete']:
                raise ContractError('role_restricted', '素材仍被参考、任务、历史或编辑文档使用。')
            from museshow.infrastructure.creation_files import file_identity
            from museshow.infrastructure.local_projects import child
            with self.projects.local.transaction() as db:
                path = self.projects._find(db, command.projectId)[0]
            for deletion in files:
                file = child(child(path, 'assets'), str(deletion.assetId))
                if (file.exists() or file.is_symlink()) and file_identity(file) != (deletion.fingerprint, deletion.size):
                    raise ContractError('preview_expired', '本地素材文件已变化，请核对原文件后重新检查删除影响。', deletion.assetId)
            data = before.model_dump(mode='json')
            visible = visible_item_ids(before)
            data['assets'] = [a for a in data['assets'] if UUID(a['id']) not in deleting]
            for item in data['canvasItems']:
                binding = item['binding']
                if UUID(item['id']) not in visible and binding['role'] == 'material' and UUID(binding['objectRef']['assetId']) in deleting:
                    item['binding'] = dict(role='empty', draftSpec=None, manualText=None)
            if command.payload.clearHistory:
                data['undoClearedThrough'] = before.eventCursor
            return self._revisions(before, data)
        return self.projects.commit(command, apply, session=session, source=source, deletes=files)

    def asset_list(self, project_id, *, text='', usage='all', offset=0, limit=100):
        snapshot = self.projects.snapshot(project_id)
        current = {asset.id for item in snapshot.canvasItems if (asset := current_asset(snapshot, item)) is not None}
        current_results = {result.asset.assetId: spec.id for spec in snapshot.generationSpecs for result in snapshot.results if spec.currentResultId == result.id}
        current.update(current_results)
        visible = visible_item_ids(snapshot)
        historical = {r.asset.assetId for r in snapshot.results}
        historical.update(source.assetId for asset in snapshot.assets for source in asset.provenance.sources)
        order = {a.id: n for n, a in enumerate(snapshot.assets)}
        listed = []
        for asset in snapshot.assets:
            if asset.id in historical and asset.id not in current:
                continue
            if text.casefold() not in asset.name.casefold():
                continue
            status = self.usage(snapshot, asset.id)
            if usage != 'all' and status['used'] != (usage == 'used'):
                continue
            owners = [dict(itemId=i.id, visible=i.id in visible) for i in snapshot.canvasItems if (a := current_asset(snapshot, i)) is not None and a.id == asset.id]
            listed.append(dict(asset=asset, usage=status, owners=owners, specId=current_results.get(asset.id), createdOrder=order[asset.id]))
        listed.sort(key=lambda row: (-row['createdOrder'], row['asset'].name.casefold()))
        return dict(items=listed[offset:offset+limit], total=len(listed), eventCursor=snapshot.eventCursor)
