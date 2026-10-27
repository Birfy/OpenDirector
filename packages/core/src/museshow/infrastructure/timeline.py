"""Project playable shots without changing saved storyboard adjustments.

Missing shots remain in preview coverage with unknown timing. Persistence and
full export must reject snapshot problems rather than save this partial view.
"""

from uuid import UUID, uuid5

from museshow.domain.projects import ProjectError, identifier
from museshow.domain.timeline import TimelineState, media_frames
from museshow.infrastructure.asset_catalog import AssetCatalog
from museshow.infrastructure.local_projects import child, read_json, write_json
from museshow.infrastructure.storyboard import read_storyboard


def read_timeline(directory):
    path = child(directory, "timeline.json")
    try:
        value = read_json(path) if path.exists() else {}
        # Existing snapshots did not distinguish inherited and explicitly set mutes.
        for clip in value.get("clips", []):
            if clip.get("track") == "original" and "muteOverride" not in clip:
                clip["muteOverride"] = True
        return TimelineState.model_validate(value).model_dump(mode="json")
    except (ValueError, TypeError, KeyError, AttributeError):
        raise ProjectError("时间线文件格式无效或版本不受支持，原文件已保留。", 409) from None


class TimelineProjects:
    def __init__(self, store):
        self.store, self.assets = store, AssetCatalog(store)

    @staticmethod
    def _check_board(directory, board, records, *, start_number=1):
        problems, probes = [], {}
        for index, shot in enumerate(board["shots"], start_number):
            label = f"镜头 {index}「{shot['title']}」"
            visual = records.get(shot["selected"]["visual"])
            if shot["legacyVisualChoices"] or not visual or visual["kind"] not in {"image", "video"}:
                problems.append(f"{label}：请在分镜板采用一份图片或视频主画面。")
                continue
            for asset in [visual, *([records.get(shot["selected"]["audio"])] if shot["selected"]["audio"] else [])]:
                if not asset or not child(child(directory, "assets"), asset["id"]).is_file():
                    problems.append(f"{label}：采用素材的原文件缺失。")
                    continue
                if asset != visual and asset["kind"] != "audio":
                    problems.append(f"{label}：旁白素材类型无效。")
                if asset["kind"] == "video" and (asset["hasAudio"] is None or not asset["durationMs"]):
                    probes[asset["id"]] = asset["revision"]
                    problems.append(f"{label}：正在等待检测视频时长和音轨。")
                elif asset["kind"] == "audio" and not asset["durationMs"]:
                    problems.append(f"{label}：旁白时长未知，请重新导入音频。")
        return problems, probes

    def _snapshot(self, directory, project_id, saved=None):
        saved = read_timeline(directory) if saved is None else saved
        board = read_storyboard(directory)
        records = self.assets._records(directory, project_id)
        problems, probes, coverage = [], {}, []
        for number, shot in enumerate(board["shots"], 1):
            missing, pending = self._check_board(directory, {"shots": [shot]}, records, start_number=number)
            problems.extend(missing)
            probes.update(pending)
            coverage.append({"shotId": shot["id"], "number": number, "title": shot["title"],
                             "available": not missing, "problems": missing,
                             "startFrame": None, "durationFrames": None})
        state = TimelineState(revision=saved["revision"], sourceStoryboardRevision=board["revision"],
                              trackMutes=saved["trackMutes"]).model_dump(mode="json")
        previous = {(item["shotId"], item["track"], item["assetId"]): item for item in saved["clips"]}
        cursor, warnings = 0, []
        for shot, entry in zip(board["shots"], coverage):
            if not entry["available"]:
                continue
            visual = records[shot["selected"]["visual"]]
            old = previous.get((shot["id"], "visual", visual["id"]))
            duration = media_frames(visual["durationMs"]) if visual["kind"] == "video" else old["durationFrames"] if old else 90

            def clip(asset, track, length, muted=False):
                old = previous.get((shot["id"], track, asset["id"]))
                override = bool(old and old["muteOverride"])
                return {"id": old["id"] if old else str(uuid5(UUID(shot["id"]), f"{track}:{asset['id']}")),
                        "shotId": shot["id"], "title": shot["title"], "assetId": asset["id"],
                        "kind": asset["kind"] if track == "visual" else "audio", "track": track,
                        "startFrame": cursor, "durationFrames": length, "sourceInFrame": 0,
                        "sourceOutFrame": None if asset["kind"] == "image" else length,
                        "muted": old["muted"] if old and (track == "narration" or override) else muted,
                        "muteOverride": override}

            state["clips"].append(clip(visual, "visual", duration))
            if visual["kind"] == "video" and visual["hasAudio"]:
                state["clips"].append(clip(visual, "original", duration, shot["originalAudioMode"] == "mute"))
            if shot["selected"]["audio"]:
                audio = records[shot["selected"]["audio"]]
                length = media_frames(audio["durationMs"])
                state["clips"].append(clip(audio, "narration", min(duration, length)))
                if length > duration:
                    warnings.append(f"{shot['title']}：旁白超出镜头，仅播放镜头范围内的部分。")
            entry.update(startFrame=cursor, durationFrames=duration)
            cursor += duration
        return {"timeline": TimelineState.model_validate(state).model_dump(mode="json"), "assets": list(records.values()),
                "storyboardRevision": board["revision"], "problems": problems, "warnings": warnings,
                "preview": {"partial": bool(problems), "availableShots": sum(entry["available"] for entry in coverage),
                            "totalShots": len(coverage), "durationFrames": cursor, "shots": coverage},
                "probes": [{"id": aid, "revision": revision} for aid, revision in probes.items()]}

    def snapshot(self, project_id):
        with self.store.transaction() as db:
            return self._snapshot(self.store._owner(db, identifier(project_id)), project_id)

    def patch(self, project_id, expected_revision, expected_storyboard_revision, session, *, track=None, muted=None, clip_id=None, fields=None):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            snapshot = self._snapshot(directory, project_id)
            state = snapshot["timeline"]
            if state["revision"] != expected_revision or snapshot["storyboardRevision"] != expected_storyboard_revision:
                raise ProjectError("分镜板或时间线已变化，当前修改未保存，请重新读取后核对。", 409, code="revision_conflict")
            if snapshot["problems"]:
                raise ProjectError("请先处理分镜素材问题，已有时间线调整已保留。", 409)
            if track:
                state["trackMutes"][track] = muted
            else:
                clip = next((item for item in state["clips"] if item["id"] == identifier(clip_id)), None)
                if not clip:
                    raise ProjectError("片段不存在，请重新读取时间线。", 404)
                if not fields or any(value is None for value in fields.values()):
                    raise ProjectError("请提供有效的片段设置。")
                if "muted" in fields:
                    if clip["track"] == "visual":
                        raise ProjectError("请在原声或旁白轨道设置静音。")
                    clip["muted"], clip["muteOverride"] = fields["muted"], True
                if "durationFrames" in fields:
                    if clip["kind"] != "image" or not 3 <= fields["durationFrames"] <= 108000:
                        raise ProjectError("图片时长应在 0.1 至 3600 秒之间。")
                    clip["durationFrames"] = fields["durationFrames"]
            state["revision"] += 1
            updated = self._snapshot(directory, project_id, saved=state)
            write_json(child(directory, "timeline.json"), updated["timeline"])
            return updated
