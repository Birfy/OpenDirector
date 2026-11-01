"""Project asset inventory, sharing file/session transactions with chat attachments."""

from datetime import datetime, timezone
import hashlib
from pathlib import PurePath
from uuid import UUID, uuid5

from pydantic import ValidationError

from opendirector.domain.assets import MAX_ASSET_BYTES, asset_adapter
from opendirector.domain.canvas import CanvasNode, CanvasState
from opendirector.domain.projects import ProjectError, identifier
from opendirector.domain.generation import GenerationError, GenerationFailure
from opendirector.infrastructure.canvas_assets import require_current_assets, current_asset_ids, logical_nodes
from opendirector.infrastructure.local_projects import child, read_json, write_json
from opendirector.infrastructure.asset_dependencies import asset_dependencies, dependency_context
from opendirector.infrastructure.asset_deletion import delete_asset, deletion_state
from opendirector.infrastructure.model_configs import ModelConfigs
from opendirector.integrations.asset_metadata import inspect_asset, legacy_kind
from opendirector.media.probe import probe


def asset_name(name: str) -> str:
    name = name.strip()
    if not name or len(name) > 255 or any(ord(c) < 32 or c in "/\\" for c in name):
        raise ProjectError("资产名称不能为空，最长 255 字符，且不能包含路径或控制字符。")
    return name


class AssetCatalog:
    def __init__(self, store):
        self.store = store

    def _record(self, owner: str, asset_id: str, value: dict):
        try:
            identifier(asset_id)
            if "schemaVersion" not in value:
                kind = legacy_kind(value["name"], value["type"])
                value = {**value, "schemaVersion": 1, "kind": kind, "projectId": None if owner == 'scratch' else owner,
                         "path": f"assets/{asset_id}", "createdAt": None, "source": "legacy", "scope": "attachment"}
                if kind == "text":
                    value["format"] = "markdown" if PurePath(value["name"]).suffix.lower() == ".md" else "plain"
            record = asset_adapter.validate_python(value).model_dump(mode="json")
            if record["id"] != asset_id or record["projectId"] != (None if owner == 'scratch' else owner):
                raise ValueError("Asset identity differs from inventory")
            return record
        except (ValidationError, ValueError, TypeError, KeyError):
            raise ProjectError("资产清单格式无效或版本不受支持，原文件未修改。", 409) from None

    def _records(self, directory, owner):
        return {key: self._record(owner, key, value) for key, value in self.store._inventory(directory).items()}

    def list(self, project_id: str):
        identifier(project_id)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id)
            return list(self._records(directory, project_id).values())

    def import_file(self, project_id: str, asset_id: str, name: str, data: bytes, session: str | None, *, source="upload", generation=None, agent_run=None, expected_kind=None, as_reference=False, reuse_asset_id=None, target_node_id=None):
        if project_id != 'scratch' or not as_reference:
            identifier(project_id)
        identifier(asset_id)
        name = asset_name(name)
        if len(data) > MAX_ASSET_BYTES:
            raise ProjectError("素材超过 50 MB。", 413)
        try:
            attributes = inspect_asset(name, data)
            if expected_kind is not None and attributes['kind'] != expected_kind:
                raise ProjectError('文件类型与节点不匹配。')
        except ProjectError as failure:
            if generation:
                raise GenerationError(GenerationFailure(category='local' if failure.status == 409 else 'provider',
                    stage='check', message=str(failure), suggestion='已有生成结果已保留，请检查文件或本地媒体工具；不会重新提交生成。'), failure.status) from None
            raise
        value = {"id": asset_id, "projectId": None if project_id == 'scratch' else project_id, "name": name, "size": len(data),
                 "fingerprint": "sha256:" + hashlib.sha256(data).hexdigest(), "path": f"assets/{asset_id}",
                 "createdAt": datetime.now(timezone.utc), "source": source, "scope": "project",
                 "initialPlacement": 'library' if as_reference else 'canvas',
                 "purpose": "document" if attributes["kind"] == "text" else "reference", **attributes}
        if generation:
            value.update(generationTaskId=generation["id"], modelConfigId=generation["modelConfigId"], referenceIds=generation["referenceIds"])
        if agent_run:
            value.update(source="generated", agentRunId=agent_run["id"], modelConfigId=agent_run["modelConfigId"], referenceIds=agent_run["referenceIds"])
            value['generationInputs'] = agent_run.get('inputs')
        value = asset_adapter.validate_python(value).model_dump(mode="json")
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            inventory = self._records(directory, project_id)
            if as_reference and project_id != 'scratch':
                from opendirector.infrastructure.canvas import CanvasProjects
                CanvasProjects(self.store)._sync(directory, project_id)
            if asset_id in inventory:
                existing = inventory[asset_id]
                file = child(child(directory, 'assets'), asset_id)
                if existing['name'] != name or (not as_reference and existing['source'] != source) or not file.exists() or file.read_bytes() != data:
                    raise ProjectError('资产标识已使用，请使用新标识创建资产，原文件未覆盖。', 409)
                if as_reference:
                    if not existing['fingerprint'].startswith('sha256:'):
                        existing.update({**attributes, 'fingerprintAliases': [*existing.get('fingerprintAliases', []), existing['fingerprint']][-8:], 'fingerprint': value['fingerprint']})
                        raw = self.store._inventory(directory)
                        raw[asset_id] = existing
                        write_json(child(directory, 'assets.json'), raw)
                    if existing.get('initialPlacement') == 'library':
                        self.register_reference(directory, project_id, existing)
                    if project_id != 'scratch' and asset_id not in current_asset_ids(directory):
                        raise ProjectError('历史非当前版本不能直接作为参考，请先应用为当前版本。', 409)
                    self.validate_reference_upload(directory, project_id, target_node_id, existing, data)
                    return self.reference_result(directory, existing, True)
                return existing
            if as_reference:
                eligible = set(inventory) if project_id == 'scratch' else current_asset_ids(directory)
                matches = []
                for key in sorted(eligible):
                    existing = inventory.get(key)
                    if not existing or existing['size'] != len(data):
                        continue
                    if existing['fingerprint'].startswith('sha256:') and existing['fingerprint'] != value['fingerprint']:
                        continue
                    file = child(child(directory, 'assets'), key)
                    if not file.is_file():
                        continue
                    content_hash = 'sha256:' + hashlib.sha256(file.read_bytes()).hexdigest()
                    if existing['fingerprint'].startswith('sha256:') and existing['fingerprint'] != content_hash:
                        continue
                    if content_hash == value['fingerprint']:
                        upgraded = {key: item for key, item in attributes.items() if existing.get(key) is None}
                        existing.update(upgraded)
                        if not existing['fingerprint'].startswith('sha256:'):
                            existing['fingerprintAliases'] = [*existing.get('fingerprintAliases', []), existing['fingerprint']][-8:]
                            existing['fingerprint'] = content_hash
                            upgraded['fingerprint'] = content_hash
                        if upgraded:
                            raw = self.store._inventory(directory)
                            raw[key] = existing
                            write_json(child(directory, 'assets.json'), raw)
                        matches.append(existing)
                if reuse_asset_id:
                    value = next((item for item in matches if item['id'] == reuse_asset_id), None)
                    if value is None:
                        raise ProjectError('所选复用来源已变化，请重新上传并选择。', 409, code='revision_conflict')
                elif len(matches) > 1:
                    path = child(directory, 'canvas.json')
                    state = read_json(path) if path.exists() else {}
                    return {'asset': None, 'matches': [self.reference_result(directory, item, True, state=state)['asset'] for item in matches], 'reused': False}
                elif matches:
                    value = matches[0]
                self.validate_reference_upload(directory, project_id, target_node_id, value, data)
                if value['id'] in inventory:
                    return self.reference_result(directory, value, True)
            self.store._write_asset(directory, asset_id, value, data)
            if as_reference:
                self.register_reference(directory, project_id, value)
                return self.reference_result(directory, value, False)
            return value

    @staticmethod
    def reference_result(directory, asset, reused, *, state=None):
        if state is None:
            path = child(directory, 'canvas.json')
            state = read_json(path) if path.exists() else {}
        node = next((node for node in logical_nodes(state) if node['assetId'] == asset['id']), None)
        visible = any(item['assetId'] == asset['id'] for item in state.get('nodes', []))
        return {'asset': {**asset, 'onCanvas': visible, **({'nodeId': node['id'], 'nodeTitle': node['title']} if node else {})}, 'matches': [], 'reused': reused}

    def validate_reference_upload(self, directory, owner, target_id, asset, data):
        from opendirector.integrations.reference_inputs import generation_references, reference_content
        overrides = {asset['id']: (data, asset)}
        if not target_id:
            reference_content(self.store, owner, {'text': '', 'assets': [{'id': asset['id']}]}, overrides=overrides)
            return
        from opendirector.infrastructure.canvas import CanvasProjects
        canvas = CanvasProjects(self.store)
        node = canvas._node(canvas._read(directory), target_id)
        if node['role'] == 'material' or node['kind'] == 'audio':
            raise ProjectError('此节点不支持上传生成参考。', 409, code='role_restricted')
        if not node['modelConfigId']:
            raise ProjectError('请先选择生成模型，再上传参考。')
        config = ModelConfigs(self.store.repository).resolve(node['modelConfigId'], 'agent' if node['kind'] == 'text' else node['kind'])
        task = {**node, 'projectId': owner, 'referenceIds': list(dict.fromkeys([*node['referenceIds'], asset['id']]))}
        generation_references(self.store, task, config, overrides=overrides, complete=False)

    @staticmethod
    def register_reference(directory, owner, asset):
        if owner == 'scratch':
            return
        path = child(directory, 'canvas.json')
        state = CanvasState.model_validate(read_json(path) if path.exists() else {}).model_dump(mode='json')
        if any(asset['id'] in group['assetIds'] for group in state['assetGroups'].values()):
            return
        node = CanvasNode(id=uuid5(UUID(owner), asset['id']), kind=asset['kind'], role='material', title=asset['name'],
                          assetId=asset['id'], assetIds=[asset['id']]).model_dump(mode='json')
        state['assetGroups'][node['id']] = {**{key: node[key] for key in ('role', 'assetId', 'assetIds')}, 'node': node}
        state['knownAssetIds'] = sorted(set(state['knownAssetIds']) | {asset['id']})
        state['revision'] += 1
        write_json(path, state)

    def update(self, project_id: str, asset_id: str, changes: dict, session: str):
        identifier(project_id)
        identifier(asset_id)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            inventory = self._records(directory, project_id)
            current = inventory.get(asset_id)
            if current is None:
                raise ProjectError("资产不存在。", 404)
            if current["revision"] != changes["expectedRevision"]:
                raise ProjectError("资产信息已变化，请刷新后再编辑。", 409)
            value = {**current, "name": asset_name(changes["name"]), "purpose": changes["purpose"],
                     "referenceIds": changes["referenceIds"], "revision": current["revision"] + 1, "scope": "project"}
            try:
                value = asset_adapter.validate_python(value).model_dump(mode="json")
            except ValidationError:
                raise ProjectError("资产用途或引用无效。") from None
            for reference in value["referenceIds"]:
                if reference not in inventory:
                    raise ProjectError("关联资产不存在，请刷新后重新选择。", 409)
            require_current_assets(directory, value['referenceIds'], retained=current['referenceIds'])
            # References describe dependencies; prevent cycles that cannot be resolved.
            pending, visited = list(value["referenceIds"]), set()
            while pending:
                reference = pending.pop()
                if reference == asset_id:
                    raise ProjectError("资产引用不能形成循环。", 409)
                if reference not in visited:
                    visited.add(reference)
                    if reference not in inventory:
                        raise ProjectError("已有资产引用缺失，请先修复关联后再编辑。", 409)
                    pending.extend(inventory[reference]["referenceIds"])
            raw = self.store._inventory(directory)
            raw[asset_id] = value
            write_json(child(directory, "assets.json"), raw)
            return value

    def deletion_preview(self, project_id: str, asset_id: str, session: str):
        identifier(project_id)
        identifier(asset_id)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            return self._batch_deletion(directory, project_id, [asset_id])

    def usage(self, project_id, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            context = dependency_context(self.store, directory, project_id)
            return {key: {'used': bool((impact := asset_dependencies(self.store, directory, project_id, key, context=context))['blockers']),
                          'reasons': list(dict.fromkeys(item['label'] for item in impact['blockers']))}
                    for key in self._records(directory, project_id)}

    def _batch_deletion(self, directory, project_id, asset_ids):
        ids = list(dict.fromkeys(identifier(key) for key in asset_ids))
        if not 1 <= len(ids) <= 100:
            raise ProjectError('请选择 1 至 100 个资产。')
        inventory = self.store._inventory(directory)
        self._records(directory, project_id)
        if any(key not in inventory for key in ids):
            raise ProjectError('部分资产已删除，请重新读取资产列表。', 409, code='revision_conflict')
        path = child(directory, 'canvas.json')
        canvas = read_json(path) if path.exists() else None
        context = dependency_context(self.store, directory, project_id)
        impacts = {key: asset_dependencies(self.store, directory, project_id, key, context=context) for key in ids}
        impact = {'assetIds': ids, 'blockers': [{**item, 'label': f'「{inventory[key]["name"]}」：{item["label"]}'}
                                              for key, value in impacts.items() for item in value['blockers']],
                  'history': {direction: sum(value['history'][direction] for value in impacts.values()) for direction in ('undo', 'redo')}}
        impact['state'] = deletion_state(inventory, canvas, impact)
        return impact

    def batch_deletion_preview(self, project_id, asset_ids, session):
        with self.store.transaction() as db:
            return self._batch_deletion(self.store._owner(db, identifier(project_id), session), project_id, asset_ids)

    def delete_many(self, project_id, asset_ids, expected_state, clear_history, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            impact = self._batch_deletion(directory, project_id, asset_ids)
            retained = self.authorize_deletion(impact, expected_state, clear_history)
            deleted, failed = [], []
            for index, asset_id in enumerate(impact['assetIds']):
                inventory = self.store._inventory(directory)
                path = child(directory, 'canvas.json')
                canvas = read_json(path) if path.exists() else None
                try:
                    delete_asset(directory, asset_id, inventory, canvas, clear_history=retained)
                    retained = False
                    deleted.append(asset_id)
                except (OSError, ProjectError):
                    failed.append({'id': asset_id, 'message': f'「{inventory.get(asset_id, {}).get("name", asset_id)}」删除未完成，请检查文件占用、目录权限及磁盘状态。'})
                    from opendirector.infrastructure.asset_deletion import JOURNAL
                    if child(directory, JOURNAL).exists():
                        failed.extend({'id': key, 'message': '上一步需要恢复，本次未继续删除。'} for key in impact['assetIds'][index + 1:])
                        break
            return {'deleted': deleted, 'failed': failed}

    def delete(self, project_id: str, asset_id: str, session: str, *, expected_state=None, clear_history=False):
        identifier(project_id)
        identifier(asset_id)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            # A repeated successful DELETE is harmless, including a lost response.
            if asset_id not in self.store._inventory(directory):
                return
            impact = self._batch_deletion(directory, project_id, [asset_id])
            retained = self.authorize_deletion(impact, expected_state, clear_history)
            path = child(directory, 'canvas.json')
            delete_asset(directory, asset_id, self.store._inventory(directory), read_json(path) if path.exists() else None, clear_history=retained)

    @staticmethod
    def authorize_deletion(impact, expected_state, clear_history):
        if impact['blockers']:
            labels = '、'.join(dict.fromkeys(item['label'] for item in impact['blockers']))
            raise ProjectError(f'资产仍被以下对象使用：{labels}。请先处理对应引用，历史记录中的资产会保留。', 409, code='asset_in_use')
        if expected_state is not None and expected_state != impact['state']:
            raise ProjectError('项目状态已变化，请重新检查删除影响并确认。', 409, code='revision_conflict')
        retained = any(impact['history'].values())
        if retained and not clear_history:
            raise ProjectError('资产仍用于画布撤销或重做。请确认删除并清空当前项目的画布撤销记录。', 409, code='asset_retained_by_history')
        if clear_history and expected_state is None:
            raise ProjectError('请先检查删除影响，再确认清空画布撤销记录。', 409, code='revision_conflict')
        return retained

    def probe_video_audio(self, project_id: str, asset_id: str, expected_revision: int, session: str):
        """Enrich old video metadata without holding the project lock during ffprobe."""
        identifier(project_id)
        identifier(asset_id)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            asset = self._records(directory, project_id).get(asset_id)
            if asset is None or asset["kind"] != "video":
                raise ProjectError("请选择当前项目中的视频资产。", 404)
            if asset["revision"] != expected_revision:
                raise ProjectError("视频信息已变化，请重新读取后检测。", 409)
            if asset["hasAudio"] is not None and asset["durationMs"]:
                return asset
            data = child(child(directory, "assets"), asset_id).read_bytes()
        suffix = PurePath(asset["name"]).suffix.lower()
        result = probe(data, suffix if suffix in {".mp4", ".mov", ".webm"} else ".mp4", "video")
        with self.store.transaction() as db:
            current_directory = self.store._owner(db, project_id, session)
            if current_directory != directory:
                raise ProjectError("项目位置已变化，检测结果未保存。", 409)
            records = self._records(directory, project_id)
            current = records.get(asset_id)
            if current is None or current["revision"] != expected_revision or child(child(directory, "assets"), asset_id).read_bytes() != data:
                raise ProjectError("视频或资产信息已变化，检测结果未保存。", 409)
            updated = {**current, **result, "revision": current["revision"] + 1}
            raw = self.store._inventory(directory)
            raw[asset_id] = updated
            write_json(child(directory, "assets.json"), raw)
            return updated
