"""Canvas operations use the same project transaction as assets and conversations."""

from uuid import UUID, uuid5

from pydantic import ValidationError

from opendirector.domain.references import replace_inputs, reference_content, project_content

from opendirector.domain.canvas import CanvasNode, CanvasState, lock_role, require_role
from opendirector.domain.canvas_layout import append_position, arrange
from opendirector.infrastructure.canvas_history import capture, migrate_history, public_state, record, replay
from opendirector.infrastructure.canvas_assets import current_asset_ids, listed_asset_ids, remember_asset_groups, require_current_assets, require_node_references, logical_nodes
from opendirector.infrastructure.canvas_references import sync_references, resolve_content, resolve_inputs, edge_records, input_changes
from opendirector.infrastructure.model_configs import ModelConfigs
from opendirector.integrations.reference_inputs import generation_references
from opendirector.integrations.asset_metadata import inspect_asset
from opendirector.infrastructure.asset_catalog import asset_name
from opendirector.domain.projects import ProjectError, identifier
from opendirector.domain.input_rules import input_rules
from opendirector.infrastructure.asset_catalog import AssetCatalog
from opendirector.infrastructure.local_projects import child, read_json, write_json
from opendirector.infrastructure.execution import generation_task_record, read_generation_task


class CanvasProjects:
    def __init__(self, store):
        self.store, self.assets = store, AssetCatalog(store)

    def _read(self, directory):
        path = child(directory, "canvas.json")
        try:
            raw = migrate_history(read_json(path)) if path.exists() else {}
            state = CanvasState.model_validate(raw).model_dump(mode="json")
            remember_asset_groups(state)
            return state
        except (ValueError, TypeError, KeyError):
            raise ProjectError("画布文件格式无效，原文件已保留。", 409) from None

    def _write(self, directory, state):
        sync_references(state, self.store._inventory(directory))
        remember_asset_groups(state)
        state["revision"] += 1
        try:
            state = CanvasState.model_validate(state).model_dump(mode="json")
        except ValidationError:
            raise ProjectError("画布节点数据无效或数量已达上限。", 409) from None
        write_json(child(directory, "canvas.json"), state)
        return state

    def _sync(self, directory, owner):
        state = self._read(directory)
        records = self.assets._records(directory, owner)
        known = set(state["knownAssetIds"])
        for node in state["nodes"]:
            known.update(node["assetIds"])
        for group in state['assetGroups'].values():
            known.update(group['assetIds'])
        changed = False
        tasks = None
        for key, group in state['assetGroups'].items():
            asset = records.get(group['assetId'])
            if group.get('node') or not asset:
                continue
            inputs = {}
            if group['role'] == 'generation':
                if tasks is None:
                    tasks = {task.get('assetId'): task for task in self._tasks(directory) if task.get('assetId')}
                original = tasks.get(asset['id']) or asset.get('generationInputs') or {}
                inputs = {field: original[field] for field in ('prompt', 'promptContent', 'referenceIds', 'modelConfigId', 'videoMode') if field in original}
            group['node'] = CanvasNode(id=key, kind=asset['kind'], role=group['role'], title=asset['name'],
                                      assetId=asset['id'], assetIds=group['assetIds'], **inputs).model_dump(mode='json')
            changed = True
        for asset_id, asset in records.items():
            if asset_id in known or asset["kind"] == "other":
                continue
            # One-time projection also recovers an asset saved before a crash in layout commit.
            if asset.get('initialPlacement') != 'library' and len(state["nodes"]) >= 500:
                break
            node = CanvasNode(id=uuid5(UUID(owner), asset_id), kind=asset["kind"],
                role='generation' if asset['source'] == 'generated' else 'material',
                **self.next_position(state, asset['kind'], records, asset_id), title=asset["name"],
                assetId=asset_id, assetIds=[asset_id]).model_dump(mode="json")
            if asset.get('initialPlacement') == 'library':
                state['assetGroups'][node['id']] = {**{key: node[key] for key in ('role', 'assetId', 'assetIds')}, 'node': node}
            else:
                state['nodes'].append(node)
            known.add(asset_id)
            changed = True
        if set(state["knownAssetIds"]) != known:
            state["knownAssetIds"] = sorted(known)
            changed = True
        if changed:
            state = self._write(directory, state)
        return state, records

    @staticmethod
    def next_position(state, kind, records, asset_id=None):
        return append_position(state, kind, records, asset_id)

    def arrange(self, project_id, expected_revision, session, heights=None):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = self._read(directory)
            if state['revision'] != expected_revision:
                raise ProjectError('画布已变化，请刷新后再整理画布。', 409, code='revision_conflict')
            before = capture(state)
            arrange(state, self.assets._records(directory, project_id), heights or {})
            if before == capture(state):
                return public_state(state)
            record(state, before, '整理画布', layout=True)
            return public_state(self._write(directory, state))

    def history(self, project_id, direction, entry_id, request_id, session):
        if direction not in {'undo', 'redo'}:
            raise ProjectError('未知的画布历史操作。')
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = self._read(directory)
            records = self.assets._records(directory, project_id)
            if replay(state, direction, identifier(entry_id), identifier(request_id), self._tasks(directory), records):
                for node in state['nodes']:
                    self._check_assets(node, records, allow_missing_references=True)
                state = self._write(directory, state)
            return public_state(state)

    def snapshot(self, project_id):
        identifier(project_id)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id)
            state, records = self._sync(directory, project_id)
            tasks = self._tasks(directory)
            return {"canvas": public_state(state), "assets": list(records.values()), "tasks": tasks,
                    "edges": edge_records(state, records, tasks),
                    "inputChanges": input_changes(state, records, tasks),
                    "availableAssetIds": sorted(current_asset_ids(directory)),
                    "visibleAssetIds": sorted(node['assetId'] for node in state['nodes'] if node['assetId']),
                    "referenceSources": [{key: node[key] for key in ('id', 'title', 'assetId', 'kind', 'role', 'revision', 'sourceRole', 'logicalNodeId') if key in node} for node in logical_nodes(state) if node['assetId']],
                    "listedAssetIds": sorted(listed_asset_ids(state, records, tasks))}

    @staticmethod
    def _tasks(directory):
        tasks = child(directory, "tasks")
        if not tasks.exists():
            return []
        return [read_generation_task(child(tasks, path.name)) for path in sorted(tasks.glob("*.json"))]

    def create(self, project_id, value, session, *, remember=False):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state, records = self._sync(directory, project_id)
            previous = next((item for item in state["nodes"] if item['id'] == str(value['id'])), None)
            explicit = 'x' in value or 'y' in value
            if explicit and not all(key in value for key in ('x', 'y')):
                raise ProjectError('指定位置时请同时提供横向和纵向坐标。')
            value = dict(value)
            if value.get('assetId'):
                asset = records.get(value['assetId'])
                if asset is None:
                    raise ProjectError('节点引用的资产不存在。', 409)
                if asset['kind'] != value['kind']:
                    raise ProjectError('资产类型与节点不符。', 409)
                require_current_assets(directory, [asset['id']])
                value.setdefault('assetIds', [asset['id']])
                placed = next((item for item in state['nodes'] if item['assetId'] == asset['id']), None)
                if placed and previous is None:
                    return placed
                group = next((group for group in state['assetGroups'].values() if value['assetId'] in group['assetIds']), None)
                value['role'] = group['role'] if group else ('generation' if asset['source'] == 'generated' else 'material')
            elif not value.get('modelConfigId'):
                if previous:
                    value['modelConfigId'] = previous['modelConfigId']
                else:
                    self.default_configuration(value)
            node = CanvasNode.model_validate({**value, **({'x': previous['x'], 'y': previous['y']} if previous and not explicit else {})}).model_dump(mode='json')
            if previous:
                if previous != node:
                    raise ProjectError("节点标识已使用。", 409)
                return previous
            before = capture(state) if remember else None
            if node['assetId']:
                active_owners = {item['id'] for item in state['nodes']}
                restored = next(((key, group) for key, group in state['assetGroups'].items() if key not in active_owners
                                 and group['assetId'] == node['assetId']), None)
                if restored:
                    restored_id, group = restored
                    if group.get('node'):
                        node = dict(group['node'])
                        if explicit:
                            node.update(x=value['x'], y=value['y'])
                    node['id'] = restored_id
                    node['assetIds'] = [asset_id for asset_id in group['assetIds'] if asset_id in records]
            self._check_assets(node, records)
            require_node_references(directory, node)
            if not explicit:
                node.update(self.next_position(state, node['kind'], records, node['assetId']))
            state["nodes"].append(node)
            if remember:
                record(state, before, "添加节点")
            self._write(directory, state)
            return node

    @staticmethod
    def _node(state, node_id):
        node = next((item for item in state["nodes"] if item["id"] == node_id), None)
        if node is None:
            raise ProjectError("节点已移除，请从资产列表放回画布或选择其他节点。", 404)
        return node

    @staticmethod
    def _check_assets(node, records, *, allow_missing_references=False):
        if any(key not in records for key in node['assetIds']) or (not allow_missing_references and any(key not in records for key in node['referenceIds'])):
            raise ProjectError("节点引用的资产不存在。", 409)
        if any(records[key]["kind"] != node["kind"] for key in node["assetIds"]):
            raise ProjectError("资产类型与节点不符。", 409)

    @staticmethod
    def require_no_generation_inputs(node):
        if node['role'] == 'empty' and (node['prompt'].strip() or node['referenceIds']):
            raise ProjectError('请先确认清除生成要求和上游参考，再上传素材或编辑素材正文。', 409, code='discard_confirmation_required')

    def default_configuration(self, node, *, source=None, project_id=None):
        """Persist defaults using the same reference validation as submission."""
        if node.get('modelConfigId'):
            return
        kind = 'agent' if node['kind'] == 'text' else node['kind']
        models = [item for item in ModelConfigs(self.store.repository).list() if item['kind'] == kind]
        failure = None
        for model in models:
            rules = input_rules(model)
            if source and source['kind'] not in rules['allowedKinds']:
                continue
            modes = rules['videoModes'] if node['kind'] == 'video' else ['first_frame']
            for mode in modes:
                candidate = {**node, 'modelConfigId': model['id'], 'videoMode': mode}
                if source:
                    try:
                        self.validate_references(project_id, candidate)
                    except ProjectError as error:
                        failure = error
                        continue
                node.update(modelConfigId=model['id'], videoMode=mode)
                return
        if source:
            raise failure or ProjectError('没有支持此参考的模型配置，请配置兼容模型或选择其他节点类型。')

    def validate_references(self, project_id, node, *, previous=None):
        if not node['referenceIds']:
            return
        if previous and all(node[key] == previous[key] for key in ('referenceIds', 'modelConfigId', 'videoMode')):
            return
        if node['kind'] == 'audio':
            raise ProjectError('语音节点只接受朗读正文，不支持参考输入。')
        config = (ModelConfigs(self.store.repository).resolve(node['modelConfigId'], 'agent' if node['kind'] == 'text' else node['kind'])
                  if node['modelConfigId'] else {'kind': node['kind'], 'modelId': '', 'url': ''})
        retained_missing = set()
        for key in previous['referenceIds'] if previous else []:
            try:
                self.store.asset(project_id, key)
            except ProjectError as error:
                if error.status == 404 or '文件缺失' in str(error):
                    retained_missing.add(key)
                else:
                    raise
        checked = {**node, 'referenceIds': [key for key in node['referenceIds'] if key not in retained_missing], 'projectId': project_id}
        generation_references(self.store, checked, config, complete=False)

    def connect(self, project_id, value, session):
        """Create-and-connect or edit one target atomically; never submit a task."""
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = self._read(directory)
            records = self.assets._records(directory, project_id)
            source = self._node(state, value['sourceId'])
            if source['assetId'] != value['assetId'] or not source['assetId'] or source.get('draft') is not None:
                raise ProjectError('参考源版本已变化或尚未保存，请读取最新状态后重新连接。', 409, code='revision_conflict')
            self.store.asset(project_id, source['assetId'])
            target = next((node for node in state['nodes'] if node['id'] == value['targetId']), None)
            before = capture(state)
            created = target is None
            if created:
                if not value.get('kind'):
                    raise ProjectError('目标节点已移除，请刷新后重新连接。', 409)
                target = CanvasNode(id=value['targetId'], kind=value['kind'], x=value['x'], y=value['y'],
                                    role='generation', modelConfigId=value.get('modelConfigId'), videoMode=value.get('videoMode', 'first_frame')).model_dump(mode='json')
                state['nodes'].append(target)
            elif value.get('kind') or target['revision'] != value.get('expectedRevision'):
                raise ProjectError('目标节点已变化，请读取最新状态后重新连接。', 409, code='revision_conflict')
            require_role(target, 'generation')
            if not created:
                self.default_configuration(target)
            inputs = resolve_inputs(target, state, records)
            positioned = resolve_content(reference_content(inputs['prompt'], inputs['referenceIds'], records, inputs['promptContent']), state, records)
            if any(part.get('nodeId') == source['id'] for part in positioned):
                return target
            inputs['referenceIds'].append(source['assetId'])
            content = reference_content(inputs['prompt'], inputs['referenceIds'], records, inputs['promptContent'])
            target.update(promptContent=content)
            target.update(resolve_inputs(target, state, records, strict=True))
            if created and not target['modelConfigId']:
                self.default_configuration(target, source=source, project_id=project_id)
            elif target['modelConfigId']:
                self.validate_references(project_id, target)
            else:
                raise ProjectError('请先在详情中配置对应类别的生成模型。')
            target['revision'] += 1
            record(state, before, '添加节点并连接' if created else '添加参考', records=records)
            self._write(directory, state)
            return target

    def disconnect(self, project_id, target_id, source_id, expected_revision, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = self._read(directory)
            records = self.assets._records(directory, project_id)
            target = self._node(state, target_id)
            require_role(target, 'generation')
            if target['revision'] != expected_revision:
                raise ProjectError('目标节点已变化，请核对后再断开参考。', 409)
            before = capture(state)
            positioned = resolve_content(reference_content(target['prompt'], target['referenceIds'], records, target.get('promptContent')), state, records)
            removed = {part['assetId'] for part in positioned if part.get('nodeId') == source_id}
            if not removed:
                return target
            if target.get('promptContent') is None:
                prompt, ids, content = target['prompt'], [key for key in target['referenceIds'] if key not in removed], None
            else:
                content = [part for part in positioned if part.get('nodeId') != source_id]
                prompt, ids = project_content(content, speech=target['kind'] == 'audio')
            target.update(prompt=prompt, promptContent=content, referenceIds=ids, revision=target['revision'] + 1)
            record(state, before, '断开参考', records=records)
            self._write(directory, state)
            return target

    def expand_references(self, project_id, node_id, expected_revision, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state, records = self._sync(directory, project_id)
            target = self._node(state, node_id)
            if target['revision'] != expected_revision:
                raise ProjectError('参考已变化，请重新读取后再展开。', 409, code='revision_conflict')
            from opendirector.infrastructure.canvas_references import reference_index
            sources, _ = reference_index(state)
            content = resolve_content(reference_content(target['prompt'], target['referenceIds'], records, target.get('promptContent')), state, records, strict=True)
            visible = {node['id'] for node in state['nodes']}
            before = capture(state)
            for part in content:
                source = sources.get(part.get('nodeId')) if part['type'] == 'reference' else None
                if not source or source['id'] in visible:
                    continue
                self.store.asset(project_id, source['assetId'])
                self._check_assets(source, records)
                node = {**source, **self.next_position(state, source['kind'], records, source['assetId'])}
                state['nodes'].append(node)
                visible.add(node['id'])
            if before != capture(state):
                record(state, before, '展开参考')
                state = self._write(directory, state)
            return public_state(state)

    def patch(self, project_id, node_id, changes, session, *, remember=False):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state, records = self._sync(directory, project_id)
            node = (next((item for item in logical_nodes(state) if item['id'] == node_id), None)
                    if set(changes) <= {'title', 'expectedRevision'} else self._node(state, node_id))
            if node is None:
                raise ProjectError('参考来源不存在。', 404)
            expected = changes.get("expectedRevision", node["revision"])
            updates = {key: value for key, value in changes.items() if key != "expectedRevision"}
            if 'role' in updates and updates['role'] != node['role']:
                raise ProjectError('节点职责不能更改，请新建节点。', 409)
            if node['role'] == 'material' and any(updates.get(key) for key in ('prompt', 'promptContent', 'referenceIds', 'modelConfigId', 'taskId')):
                require_role(node, 'generation')
            if node['role'] == 'generation' and updates.get('draft') is not None:
                require_role(node, 'material')
            try:
                value = CanvasNode.model_validate(replace_inputs(node, updates, records)).model_dump(mode="json")
            except ValidationError:
                raise ProjectError("节点字段无效。") from None
            changed = {key for key in value if value[key] != node[key]}
            if not changed:
                return node
            content = bool(changed - {"x", "y"})
            if content and expected != node["revision"]:
                raise ProjectError("节点内容已变化，请读取最新状态后编辑。", 409, code='revision_conflict')
            value["revision"] = node["revision"] + int(content)
            self._check_assets(value, records, allow_missing_references=True)
            if set(value['referenceIds']) - set(node['referenceIds']) - records.keys():
                raise ProjectError('节点引用的资产不存在。', 409)
            require_node_references(directory, value, retained=node['referenceIds'])
            before = capture(state) if remember else None
            if changed & {'prompt', 'promptContent', 'referenceIds', 'modelConfigId', 'videoMode'}:
                value.update(resolve_inputs(value, {**state, 'nodes': [value if item['id'] == node_id else item for item in state['nodes']]}, records))
                self.validate_references(project_id, value, previous=node)
            node.update(value)
            if remember:
                record(state, before, "修改节点" if content else "移动节点", records=records)
            self._write(directory, state)
            return node

    def remove(self, project_id, node_id, session, *, remember=False):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state, _ = self._sync(directory, project_id)
            self._node(state, node_id)
            if any(task["nodeId"] == node_id and task["status"] in {"queued", "running"} for task in self._tasks(directory)):
                raise ProjectError("请先取消节点的生成任务，再移除节点。", 409)
            before = capture(state) if remember else None
            state["nodes"] = [node for node in state["nodes"] if node["id"] != node_id]
            if remember:
                record(state, before, "移除节点")
            self._write(directory, state)

    @staticmethod
    def _batch_nodes(state, values):
        ids = [item['id'] for item in values]
        if not 1 <= len(ids) <= 500 or len(set(ids)) != len(ids):
            raise ProjectError('请选择 1 至 500 个不同的节点。')
        by_id = {node['id']: node for node in state['nodes']}
        if any(key not in by_id for key in ids):
            raise ProjectError('部分节点已移除，请刷新后重试；本次操作未保存。', 409)
        return [by_id[key] for key in ids]

    def move_many(self, project_id, values, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = self._read(directory)
            nodes = self._batch_nodes(state, values)
            updates = []
            for node, value in zip(nodes, values):
                if (node['x'], node['y']) != (value['expectedX'], value['expectedY']):
                    raise ProjectError('部分节点的位置已变化，请重试；本次移动未保存。', 409)
                try:
                    updates.append(CanvasNode.model_validate({**node, 'x': value['x'], 'y': value['y']}).model_dump(mode='json'))
                except ValidationError:
                    raise ProjectError('节点位置无效；本次移动未保存。') from None
            if all(node == value for node, value in zip(nodes, updates)):
                return public_state(state)
            before = capture(state)
            for node, value in zip(nodes, updates):
                node.update(value)
            record(state, before, '移动节点' if len(nodes) == 1 else f'移动 {len(nodes)} 个节点')
            return public_state(self._write(directory, state))

    def remove_many(self, project_id, values, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = self._read(directory)
            nodes = self._batch_nodes(state, values)
            for node, value in zip(nodes, values):
                if node['revision'] != value['expectedRevision'] or node['taskId'] != value['expectedTaskId']:
                    raise ProjectError('部分节点的内容或任务已变化，请重试；本次移除未保存。', 409)
            ids = {node['id'] for node in nodes}
            if any(task['nodeId'] in ids and task['status'] in {'queued', 'running'} for task in self._tasks(directory)):
                raise ProjectError('所选节点中有正在生成的任务，请先等待或取消任务；本次未移除任何节点。', 409)
            before = capture(state)
            # Preserve one-time projections even for legacy nodes whose outputs
            # have not yet been added to knownAssetIds by a snapshot.
            state['knownAssetIds'] = sorted(set(state['knownAssetIds']).union(*(node['assetIds'] for node in nodes)))
            state['nodes'] = [node for node in state['nodes'] if node['id'] not in ids]
            record(state, before, '移除节点' if len(nodes) == 1 else f'移除 {len(nodes)} 个节点')
            return public_state(self._write(directory, state))

    def attach(self, project_id, node_id, asset_id, session=None, *, expected_revision=None, adopt=True, remember=False):
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            # Read before syncing: generated outputs belong on the requested node.
            state = self._read(directory)
            node = next((item for item in state['nodes'] if item['id'] == node_id), None)
            if node is None and not adopt:
                return False  # Leave the saved asset for the normal projection.
            if node is None:
                raise ProjectError('节点不存在，请刷新画布。', 404)
            records = self.assets._records(directory, project_id)
            asset = records.get(asset_id)
            if asset is None:
                raise ProjectError('节点引用的资产不存在。', 409)
            if asset['source'] != 'generated':
                self.require_no_generation_inputs(node)
            before = capture(state) if remember else None
            lock_role(node, 'generation' if asset['source'] == 'generated' else 'material')
            if node['assetId'] == asset_id and asset_id in node['assetIds']:
                self._check_assets(node, records)
                return True  # Reconcile an attach committed before its receipt.
            added = asset_id not in node['assetIds']
            if added:
                node["assetIds"].append(asset_id)
            adopted = adopt and (expected_revision is None or node["revision"] == expected_revision)
            if not added and not adopted:
                return False
            if adopted:
                node["assetId"] = asset_id
                node["draft"] = None
                node["revision"] += 1
            self._check_assets(node, records)
            self._retain_output(state, project_id, node_id, asset_id)
            if remember:
                record(state, before, "上传节点资产", records=records)
            self._write(directory, state)
            return adopted

    @staticmethod
    def _retain_output(state, project_id, node_id, asset_id):
        state['knownAssetIds'] = list(dict.fromkeys([*state['knownAssetIds'], asset_id]))
        group = state['assetGroups'].get(node_id)
        if group and not any(item['id'] == node_id for item in state['nodes']) and group.get('node'):
            node = group['node']
            group.update({key: node[key] for key in ('role', 'assetId', 'assetIds')})
        # A file saved before the owning node's commit may be projected by a
        # concurrent snapshot. Reconcile it instead of retaining two nodes.
        projection_id = str(uuid5(UUID(project_id), asset_id))
        state['nodes'] = [item for item in state['nodes'] if item['id'] == node_id or item['id'] != projection_id]

    def upload(self, project_id, node_id, asset_id, name, data, session, *, expected_revision=None, discard_inputs=False):
        """Validate purpose and kind before saving any uploaded file."""
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = self._read(directory)
            node = next((item for item in logical_nodes(state) if item['id'] == identifier(node_id)), None)
            if node is None:
                raise ProjectError('参考来源不存在。', 404)
            require_role(node, 'material')
            if not discard_inputs:
                self.require_no_generation_inputs(node)
            if expected_revision is not None and node['revision'] != expected_revision:
                raise ProjectError('节点内容已变化，请重新读取后替换文件。', 409, code='revision_conflict')
            before = capture(state)
            asset = self.assets.import_file(project_id, asset_id, name, data, session, expected_kind=node['kind'])
            lock_role(node, 'material')
            if asset['id'] not in node['assetIds']:
                node['assetIds'].append(asset['id'])
            node.update(assetId=asset['id'], draft=None, revision=node['revision'] + 1)
            self._retain_output(state, project_id, node_id, asset['id'])
            record(state, before, '上传节点资产', records=self.store._inventory(directory))
            self._write(directory, state)
            return asset

    def bind_reference_source(self, project_id, node_id, asset_id, fingerprint, expected_revision, session, *, discard_inputs=False):
        """Legacy workspace bridge: follow an existing canonical asset without copying it.

        This is a material-source operation, not generation adoption or a role
        conversion. The selected logical identity, including hidden sources, is retained.
        """
        from hashlib import sha256
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            state, records = self._sync(directory, project_id)
            node = next((item for item in logical_nodes(state) if item['id'] == node_id), None)
            if node is None:
                raise ProjectError('参考来源不存在。', 404)
            require_role(node, 'material')
            if node['revision'] != expected_revision:
                raise ProjectError('参考来源已变化，请刷新后重试。', 409, code='revision_conflict')
            if not discard_inputs:
                self.require_no_generation_inputs(node)
            asset = records.get(asset_id)
            if not asset or asset['kind'] != node['kind']:
                raise ProjectError('参考素材类型与逻辑来源不匹配。', 409)
            file = child(child(directory, 'assets'), asset_id)
            if not file.is_file() or asset['fingerprint'] != fingerprint or 'sha256:' + sha256(file.read_bytes()).hexdigest() != fingerprint:
                raise ProjectError('参考文件缺失或内容已改变。', 409)
            if node['assetId'] == asset_id:
                return dict(node=node, asset=asset)
            before = capture(state)
            lock_role(node, 'material')
            if asset_id not in node['assetIds']:
                node['assetIds'].append(asset_id)
            node.update(assetId=asset_id, revision=node['revision'] + 1)
            self._retain_output(state, project_id, node_id, asset_id)
            record(state, before, '更新工作区参考来源', records=records)
            self._write(directory, state)
            return dict(node=node, asset=asset)

    def save_text(self, project_id, node_id, asset_id, text, name, session, *, agent_run=None, create=False, expected_revision=None, remember=False, discard_inputs=False):
        # Validate before a new node or retained asset can be created.
        inspect_asset(asset_name(name), text.encode("utf-8"))
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            state = self._read(directory)
            records = self.assets._records(directory, project_id)
            node = next((item for item in logical_nodes(state) if item["id"] == node_id), None)
            if node is None and create:
                node = CanvasNode(id=node_id, kind="text", title=name, **self.next_position(state, 'text', records)).model_dump(mode="json")
                state["nodes"].append(node)
            if node is None or node["kind"] != "text":
                raise ProjectError("只能向有效文本节点保存文本。")
            if not agent_run and not discard_inputs:
                self.require_no_generation_inputs(node)
            before = capture(state) if remember else None
            lock_role(node, 'generation' if agent_run else 'material')
            if expected_revision is not None and node["revision"] != expected_revision:
                raise ProjectError("节点内容已变化，请重新读取后保存文本。", 409, code='revision_conflict')
            if any(task["nodeId"] == node_id and task["status"] in {"queued", "running"} for task in self._tasks(directory)):
                raise ProjectError("节点正在生成，请先等待或取消任务。", 409)
            if agent_run:
                inputs = agent_run.get('inputs') or {}
                node.update(replace_inputs(node, {'prompt': inputs.get('prompt', ''), 'promptContent': inputs.get('promptContent'),
                    'referenceIds': agent_run['referenceIds'], 'modelConfigId': agent_run['modelConfigId']}, records))
                require_node_references(directory, node)
            CanvasState.model_validate(state)
            asset = self.assets.import_file(project_id, asset_id, name, text.encode("utf-8"), session, source="generated" if agent_run else "manual", agent_run=agent_run, expected_kind="text")
            if asset_id not in node["assetIds"]:
                node["assetIds"].append(asset_id)
            node.update(assetId=asset_id, draft=None, revision=node["revision"] + 1)
            self._retain_output(state, project_id, node_id, asset_id)
            if remember:
                record(state, before, "保存文本", records=self.store._inventory(directory))
            self._write(directory, state)
            return asset

    def import_file(self, project_id, asset_id, name, data, session, operation_id):
        """Upload + place + history share a transaction; polling cannot project twice."""
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state, records = self._sync(directory, project_id)
            before = capture(state)
            asset = self.assets.import_file(project_id, asset_id, name, data, session)
            if asset_id in state['knownAssetIds']:
                return asset
            node = CanvasNode(id=uuid5(UUID(project_id), asset_id), kind=asset['kind'], title=asset['name'],
                              role='material',
                              assetId=asset_id, assetIds=[asset_id],
                              **self.next_position(state, asset['kind'], records, asset_id)).model_dump(mode='json')
            state['nodes'].append(node)
            state['knownAssetIds'].append(asset_id)
            record(state, before, '上传资产', operation_id=identifier(operation_id))
            self._write(directory, state)
            return asset

    def task_write(self, project_id, task, pinned):
        task = generation_task_record(task)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id)
            if str(directory) != pinned:
                raise ProjectError("项目目录已变化，请重新打开项目。", 409)
            folder = child(directory, "tasks")
            folder.mkdir(exist_ok=True)
            path = child(folder, identifier(task["id"]) + ".json")
            if path.exists():
                previous = read_generation_task(path)
                if previous["status"] not in {"queued", "running"} and not previous.get("resumeAllowed") and task["status"] in {"queued", "running"}:
                    return
            write_json(path, task)
