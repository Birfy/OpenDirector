"""Atomic local storyboard operations shared by user interfaces and future tools."""

from copy import deepcopy

from pydantic import ValidationError

from museshow.domain.projects import ProjectError, identifier
from museshow.domain.storyboard import Shot, StoryboardState, shot_asset_ids
from museshow.infrastructure.asset_catalog import AssetCatalog
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.canvas_assets import current_asset_ids, require_current_assets
from museshow.infrastructure.local_projects import child, read_json, write_json


def read_storyboard(directory):
    path = child(directory, "storyboard.json")
    try:
        return StoryboardState.model_validate(read_json(path) if path.exists() else {}).model_dump(mode="json")
    except (ValueError, TypeError, KeyError):
        raise ProjectError("分镜文件格式无效或版本不受支持，原文件已保留。", 409) from None


class StoryboardProjects:
    def __init__(self, store):
        self.store, self.assets = store, AssetCatalog(store)

    def snapshot(self, project_id):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id))
            CanvasProjects(self.store)._sync(directory, project_id)
            return {"storyboard": read_storyboard(directory), "assets": list(self.assets._records(directory, project_id).values()),
                    "availableAssetIds": sorted(current_asset_ids(directory))}

    @staticmethod
    def _shot(state, shot_id):
        shot = next((item for item in state["shots"] if item["id"] == shot_id), None)
        if shot is None:
            raise ProjectError("镜头已移除，请重新读取分镜。", 404)
        return shot

    @staticmethod
    def _version(actual, expected):
        if actual != expected:
            raise ProjectError("分镜已被修改，请保留当前输入并重新核对后保存。", 409, code="revision_conflict")

    @staticmethod
    def _write(directory, state):
        state["revision"] += 1
        try:
            value = StoryboardState.model_validate(state).model_dump(mode="json")
        except ValidationError:
            raise ProjectError("镜头数据无效或数量已达上限。", 409) from None
        write_json(child(directory, "storyboard.json"), value)
        return value

    @staticmethod
    def _check_assets(shot, records):
        if any(asset_id not in records for asset_id in shot_asset_ids(shot)):
            raise ProjectError("关联资产不存在或不属于当前项目，请重新选择。", 409)
        for role, candidates in shot["candidates"].items():
            allowed = {"image", "video"} if role == "visual" else {"audio"}
            if any(records[asset_id]["kind"] not in allowed for asset_id in candidates):
                raise ProjectError("候选资产类型与用途不匹配。")

    def create(self, project_id, value, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = read_storyboard(directory)
            # A retried create never adds another shot or overwrites later edits.
            if any(shot["id"] == value["id"] for shot in state["shots"]):
                return state
            self._version(state["orderRevision"], value["expectedOrderRevision"])
            source = self._shot(state, value["sourceId"]) if value.get("sourceId") else None
            data = {**deepcopy(source), "id": value["id"], "revision": 1, "title": (source["title"][:252] + " 副本")} if source else {"id": value["id"], **{key: value[key] for key in ("title", "description") if key in value}}
            shot = Shot.model_validate(data).model_dump(mode="json")
            self._check_assets(shot, self.assets._records(directory, project_id))
            CanvasProjects(self.store)._sync(directory, project_id)
            if source:
                available = current_asset_ids(directory)
                shot['candidates'] = {role: [asset_id for asset_id in ids if asset_id in available or asset_id == shot['selected'][role]]
                                      for role, ids in shot['candidates'].items()}
                shot['legacyVisualChoices'] = [asset_id for asset_id in shot['legacyVisualChoices'] if asset_id in shot['candidates']['visual']]
            require_current_assets(directory, shot_asset_ids(shot))
            after_id = value.get("afterId")
            index = state["shots"].index(self._shot(state, after_id)) + 1 if after_id else 0
            state["shots"].insert(index, shot)
            state["orderRevision"] += 1
            return self._write(directory, state)

    def reorder(self, project_id, value, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = read_storyboard(directory)
            self._version(state["orderRevision"], value["expectedOrderRevision"])
            ids = value["shotIds"]
            records = {shot["id"]: shot for shot in state["shots"]}
            if len(ids) != len(records) or set(ids) != set(records):
                raise ProjectError("排序必须包含当前全部镜头，且不能重复。", 409)
            if ids == list(records):
                return state
            state["shots"] = [records[shot_id] for shot_id in ids]
            state["orderRevision"] += 1
            return self._write(directory, state)

    def adopt_asset(self, project_id, shot_id, expected_revision, kind, asset_id, session):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = read_storyboard(directory)
            shot = self._shot(state, shot_id)
            self._version(shot["revision"], expected_revision)
            CanvasProjects(self.store)._sync(directory, project_id)
            require_current_assets(directory, [asset_id] if asset_id else [], retained=[shot['selected'][kind]])
            candidate = deepcopy(shot)
            if asset_id is not None and asset_id not in candidate["candidates"][kind]:
                candidate["candidates"][kind].append(asset_id)
            candidate["selected"][kind] = asset_id
            if kind == "visual":
                candidate["legacyVisualChoices"] = []
                if asset_id != shot["selected"]["visual"]:
                    candidate["originalAudioMode"] = "keep"
            self._check_assets(candidate, self.assets._records(directory, project_id))
            Shot.model_validate(candidate)
            if candidate == shot:
                return state
            candidate["revision"] += 1
            shot.update(candidate)
            return self._write(directory, state)

    def record_candidate(self, project_id, shot_id, role, asset_id):
        """Keep a late result available without changing any user selection."""
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id)
            state = read_storyboard(directory)
            shot = next((item for item in state['shots'] if item['id'] == shot_id), None)
            if shot is None or asset_id in shot['candidates'][role]:
                return
            shot['candidates'][role].append(asset_id)
            self._check_assets(shot, self.assets._records(directory, project_id))
            shot['revision'] += 1
            self._write(directory, state)

    def change(self, project_id, shot_id, expected_revision, session, *, fields=None, association=None, adoption=None, original_audio=None, remove=False):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            state = read_storyboard(directory)
            shot = self._shot(state, identifier(shot_id))
            self._version(shot["revision"], expected_revision)
            if remove:
                state["shots"].remove(shot)
                state["orderRevision"] += 1
                return self._write(directory, state)
            next_shot = deepcopy(shot)
            records = self.assets._records(directory, project_id)
            CanvasProjects(self.store)._sync(directory, project_id)
            if fields:
                next_shot.update(fields)
                if "title" in fields and isinstance(fields["title"], str):
                    next_shot["title"] = fields["title"].strip()
            if association:
                kind, ids = association["kind"], association["assetIds"]
                require_current_assets(directory, ids, retained=shot['candidates'][kind])
                next_shot["candidates"][kind] = ids
                if next_shot["selected"][kind] not in ids:
                    next_shot["selected"][kind] = None
                    if kind == "visual":
                        next_shot["originalAudioMode"] = "keep"
                if kind == "visual":
                    next_shot["legacyVisualChoices"] = [choice for choice in next_shot["legacyVisualChoices"] if choice in ids]
            if adoption:
                kind, asset_id = adoption["kind"], adoption["assetId"]
                require_current_assets(directory, [asset_id] if asset_id else [], retained=[shot['selected'][kind]])
                if asset_id is not None and asset_id not in next_shot["candidates"][kind]:
                    raise ProjectError("请先将资产关联为该镜头的候选。", 409)
                next_shot["selected"][kind] = asset_id
                if kind == "visual":
                    next_shot["legacyVisualChoices"] = []
                    if shot["selected"]["visual"] != asset_id:
                        next_shot["originalAudioMode"] = "keep"
            if original_audio is not None:
                visual = records.get(shot["selected"]["visual"])
                if not visual or visual["kind"] != "video":
                    raise ProjectError("只有当前采用的视频可设置原声。", 409)
                if visual["hasAudio"] is not True:
                    raise ProjectError("视频无原声或音轨状态未知，请先检测视频音轨。", 409)
                next_shot["originalAudioMode"] = original_audio
            try:
                next_shot = Shot.model_validate(next_shot).model_dump(mode="json")
            except ValidationError:
                raise ProjectError("镜头字段或候选引用无效，请检查名称、描述及素材选择。") from None
            self._check_assets(next_shot, records)
            if next_shot == shot:
                return state
            next_shot["revision"] += 1
            shot.update(next_shot)
            return self._write(directory, state)
