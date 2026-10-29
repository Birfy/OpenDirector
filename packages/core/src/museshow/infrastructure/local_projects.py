"""Projects discovered from repository/projects; SQLite only coordinates edits and renames."""

from contextlib import contextmanager
import json
import os
from pathlib import Path
import sqlite3
import tempfile
import time
from uuid import uuid4

from filelock import FileLock, Timeout

from museshow.domain.projects import ProjectError, identifier, project_name, suggested_project_name
from museshow.infrastructure.rename import rename_path


def empty_conversation() -> dict:
    return {"messages": [], "draft": "", "assets": [], "thinking": "auto", "modelSelections": {}}


def child(directory: Path, name: str) -> Path:
    path = directory / name
    if path.is_symlink():
        raise ProjectError("项目内部文件不能是符号链接。", 409)
    return path


def read_json(path: Path):
    if path.is_symlink():
        raise ProjectError("不能读取符号链接项目文件。", 409)
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, value) -> None:
    if path.is_symlink():
        raise ProjectError("不能覆盖符号链接项目文件。", 409)
    fd, temporary = tempfile.mkstemp(prefix=".museshow-", suffix=".tmp", dir=path.parent)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as stream:
            json.dump(value, stream, ensure_ascii=False, indent=2)
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(temporary, path)
    finally:
        if os.path.exists(temporary):
            os.unlink(temporary)


class LocalProjects:
    LEASE_SECONDS = 60

    def __init__(self, repository: Path):
        self.repository = repository.resolve()
        self.root = self.repository / "projects"
        self.state_dir = self.repository / ".museshow"
        self.state_dir.mkdir(parents=True, exist_ok=True)
        self.lock = FileLock(self.state_dir / "catalog.lock", timeout=15)
        self.database = self.state_dir / "catalog.sqlite3"
        self.warnings: list[str] = []
        with self.transaction() as db:
            db.executescript("""
                CREATE TABLE IF NOT EXISTS sessions (
                    id TEXT PRIMARY KEY, project_id TEXT NOT NULL, expires REAL NOT NULL,
                    path TEXT NOT NULL DEFAULT ''
                );
                CREATE TABLE IF NOT EXISTS renames (id TEXT PRIMARY KEY, operation TEXT NOT NULL);
            """)
            if "path" not in {row["name"] for row in db.execute("PRAGMA table_info(sessions)")}:
                db.execute("ALTER TABLE sessions ADD COLUMN path TEXT NOT NULL DEFAULT ''")
            # These obsolete tables contained configuration/index entries only.
            # Project directories and browser data are never removed or migrated.
            for table in ("settings", "roots", "projects"):
                db.execute(f"DROP TABLE IF EXISTS {table}")
            db.execute("DELETE FROM sessions WHERE expires<=?", (time.time(),))
            self._recover(db)
            # Unscoped chats have been replaced by project creation on first send.
            # Keep staged uploads available, but never import the old conversation.
            scratch = child(self.state_dir, "scratch")
            if scratch.is_dir():
                child(scratch, "conversation.json").unlink(missing_ok=True)

    @contextmanager
    def transaction(self):
        with self.lock:
            db = sqlite3.connect(self.database, timeout=15)
            db.row_factory = sqlite3.Row
            try:
                yield db
                db.commit()
            except BaseException:
                db.rollback()
                raise
            finally:
                db.close()

    def _check_root(self):
        if self.root.is_symlink() or self.root.resolve() != self.root:
            raise ProjectError("projects 不能是符号链接，请使用仓库内的项目文件夹。", 409)
        if self.root.exists() and not self.root.is_dir():
            raise ProjectError("仓库下的 projects 不是文件夹，请检查后重试。", 409)

    @staticmethod
    def _manifest(path: Path) -> dict:
        if path.is_symlink() or path.resolve() != path:
            raise ProjectError("项目目录位置已变化，请刷新页面后重试。", 409)
        manifest = read_json(child(path, "project.json"))
        if not isinstance(manifest, dict) or manifest.get("formatVersion") != 1:
            raise ProjectError("不支持该项目格式版本。", 409)
        identifier(manifest["id"])
        project_name(manifest["name"])
        return manifest

    @staticmethod
    def _describe(path, manifest):
        return {"id": manifest["id"], "name": path.name, "path": str(path)}

    def _scan(self):
        self._check_root()
        grouped: dict[str, list[dict]] = {}
        warnings = list(self.warnings)
        if self.root.is_dir():
            for path in self.root.iterdir():
                if path.is_symlink() or not path.is_dir() or path.name.startswith(".museshow-"):
                    continue
                manifest_path = path / "project.json"
                if not manifest_path.exists() and not manifest_path.is_symlink():
                    continue  # Ordinary directories are never initialized automatically.
                try:
                    project_name(path.name)
                    manifest = self._manifest(path)
                    if manifest.get("legacyImport") == "pending":
                        raise ProjectError("旧版数据导入未完成，原文件已保留。", 409)
                    grouped.setdefault(manifest["id"], []).append(self._describe(path, manifest))
                except (OSError, ValueError, KeyError, TypeError, ProjectError) as error:
                    warnings.append(f"项目“{path.name}”无法读取：{error}")
        conflicts = {key for key, values in grouped.items() if len(values) > 1}
        for key in sorted(conflicts):
            names = "、".join(sorted(item["name"] for item in grouped[key]))
            warnings.append(f"项目标识重复：{names}。请将重复的项目目录移出 projects 后刷新页面。")
        projects = [values[0] for key, values in grouped.items() if key not in conflicts]
        projects.sort(key=lambda item: (item["name"].casefold(), item["name"]))
        return projects, warnings, conflicts

    def list_projects(self):
        with self.transaction():
            projects, warnings, _ = self._scan()
            return {"projects": projects, "warnings": warnings}

    def _row(self, db, project_id: str):
        identifier(project_id)
        if db.execute("SELECT 1 FROM renames WHERE id=?", (project_id,)).fetchone():
            raise ProjectError("该项目的重命名尚未恢复，请重启服务后重试。", 409)
        projects, _, conflicts = self._scan()
        if project_id in conflicts:
            raise ProjectError("projects 中存在同标识项目，请移走重复目录并刷新页面。", 409)
        row = next((item for item in projects if item["id"] == project_id), None)
        if not row:
            raise ProjectError("项目不在 projects 中或项目文件无效，请刷新页面检查项目列表。", 404)
        return row

    @staticmethod
    def _conflict(parent: Path, name: str, source: Path | None = None):
        for entry in parent.iterdir():
            if entry.name.casefold() == name.casefold() and entry != source:
                raise ProjectError("该位置已有同名文件或文件夹，请使用其他名称。", 409)

    def resume_creation(self, project_id: str, turn_id: str, session: str):
        with self.transaction() as db:
            projects, _, conflicts = self._scan()
            if project_id in conflicts:
                raise ProjectError("该项目标识已被重复使用。", 409)
            project = next((item for item in projects if item["id"] == project_id), None)
            if project:
                if self._manifest(Path(project["path"])).get("firstTurnId") != turn_id:
                    raise ProjectError("该项目标识已经使用。", 409)
                self._open(db, project, session)
            return project

    def create(self, name: str, project_id: str, session: str | None = None, *, first_turn_id: str | None = None, draft: dict | None = None):
        name, project_id = project_name(name), identifier(project_id)
        with self.transaction() as db:
            projects, _, conflicts = self._scan()
            if project_id in conflicts:
                raise ProjectError("该项目标识已被重复使用。", 409)
            existing = next((item for item in projects if item["id"] == project_id), None)
            if existing:
                matches = (self._manifest(Path(existing["path"])).get("firstTurnId") == first_turn_id
                           if first_turn_id else existing["name"] == name)
                if not matches:
                    raise ProjectError("该项目标识已经使用。", 409)
                if session:
                    self._open(db, existing, session)
                return existing
            staged = []
            if draft is not None:
                source = self._owner(db, "scratch")
                inventory = self._inventory(source)
                for asset in draft["assets"]:
                    metadata = inventory.get(asset["id"])
                    if metadata is None or any(metadata.get(key) != asset[key] for key in ("name", "type", "size", "fingerprint")):
                        raise ProjectError("参考素材已变化，请重新添加后发送。", 409)
                    staged.append((asset["id"], metadata, child(child(source, "assets"), asset["id"]).read_bytes()))
            self.root.mkdir(exist_ok=True)  # Create lazily, only for a valid new project.
            if first_turn_id:
                base = suggested_project_name(name)
                occupied = {entry.name.casefold() for entry in self.root.iterdir()}
                name, suffix = base, 2
                while name.casefold() in occupied:
                    name = f"{base} ({suffix})"
                    suffix += 1
            self._conflict(self.root, name)
            directory = self.root / name
            directory.mkdir()  # Never merge into an existing directory.
            try:
                manifest = {"formatVersion": 1, "id": project_id, "name": name}
                if first_turn_id:
                    manifest["firstTurnId"] = identifier(first_turn_id)
                write_json(directory / "project.json", manifest)
                write_json(directory / "assets.json", {})
                (directory / "assets").mkdir()
                for asset_id, metadata, data in staged:
                    if metadata.get('schemaVersion'):
                        metadata = {**metadata, 'projectId': project_id}
                    self._write_asset(directory, asset_id, metadata, data)
                    if metadata.get('initialPlacement') == 'library':
                        from museshow.infrastructure.asset_catalog import AssetCatalog
                        AssetCatalog.register_reference(directory, project_id, metadata)
                write_json(directory / "conversation.json", {**empty_conversation(), **(draft or {})})
                project = self._describe(directory, manifest)
                if session:
                    self._open(db, project, session)
            except BaseException:
                # Only remove the exact files created here, never user directories.
                for asset_id, _, _ in staged:
                    child(directory / "assets", asset_id).unlink(missing_ok=True)
                for item in ("canvas.json", "assets", "assets.json", "conversation.json", "project.json"):
                    path = directory / item
                    try:
                        path.rmdir() if path.is_dir() else path.unlink(missing_ok=True)
                    except OSError:
                        pass
                try:
                    directory.rmdir()
                except OSError:
                    pass
                raise
            for asset_id, metadata, _ in staged:
                if metadata.get('schemaVersion'):
                    # Shared content-addressed staging may still be referenced
                    # by an unsent draft in another window. Copy into the
                    # project without consuming that window's source file.
                    continue
                try:
                    self._delete_asset(source, asset_id)
                except OSError:
                    pass  # The project owns a complete copy; cleanup can wait.
            return project

    def _open(self, db, project: dict, session: str):
        identifier(session)
        project_id = project["id"]
        if db.execute("SELECT 1 FROM sessions WHERE project_id=? AND id<>? AND expires>?", (project_id, session, time.time())).fetchone():
            raise ProjectError("该项目正在其他窗口中打开，请先关闭后再试。", 409)
        lease = db.execute("SELECT path FROM sessions WHERE id=? AND project_id=? AND expires>?", (session, project_id, time.time())).fetchone()
        if lease and lease["path"] != project["path"]:
            raise ProjectError("项目目录已在应用外改名或移动，请复制未保存内容并刷新页面。", 409)
        db.execute("INSERT INTO sessions(id,project_id,expires,path) VALUES (?,?,?,?) ON CONFLICT(id) DO UPDATE SET project_id=excluded.project_id,expires=excluded.expires,path=excluded.path", (session, project_id, time.time() + self.LEASE_SECONDS, project["path"]))

    def open(self, project_id: str, session: str):
        with self.transaction() as db:
            project = self._row(db, project_id)
            self._open(db, project, session)
            return project

    def heartbeat(self, session: str, project_id: str):
        with self.transaction() as db:
            self._open(db, self._row(db, project_id), session)

    def release(self, session: str):
        with self.transaction() as db:
            db.execute("DELETE FROM sessions WHERE id=?", (session,))

    def _closed(self, db, project_id: str):
        from museshow.infrastructure.execution import read_generation_task, read_production_plan

        if db.execute("SELECT 1 FROM sessions WHERE project_id=? AND expires>?", (project_id, time.time())).fetchone():
            raise ProjectError("请先保存并关闭项目，等待相关任务结束后再操作。", 409)
        try:
            with self.chat_lock(project_id):
                pass
        except Timeout:
            raise ProjectError("项目仍在生成回复，请先停止回复后再操作。", 409) from None
        directory = Path(self._row(db, project_id)["path"])
        tasks = child(directory, "tasks")
        if tasks.exists() and any(read_generation_task(child(tasks, path.name))["status"] in {"queued", "running"} for path in tasks.glob("*.json")):
            raise ProjectError("项目仍在生成资产，请等待或取消任务后再重命名。", 409)
        for name, pattern in (("production-plans", "*.json"), ("exports", "*/export.json")):
            folder = child(directory, name)
            if folder.exists():
                for path in folder.glob(pattern):
                    receipt = child(child(folder, path.parent.name), path.name) if name == "exports" else child(folder, path.name)
                    value = read_production_plan(receipt) if name == "production-plans" else read_json(receipt)
                    if value.get("status") in {"queued", "running"}:
                        raise ProjectError("项目仍在制作或导出，请等待或停止后再重命名。", 409)

    def rename(self, project_id: str, name: str, expected_name: str):
        name = project_name(name)
        with self.transaction() as db:
            row = self._row(db, project_id)
            self._closed(db, project_id)
            if row["name"] != expected_name:
                raise ProjectError("项目已在其他窗口中修改，请刷新列表后重试。", 409)
            old = Path(row["path"])
            if name == old.name:
                return row
            self._conflict(old.parent, name, old)
            operation = {"old": str(old), "new": str(old.parent / name),
                         "temporary": str(old.parent / f".museshow-rename-{uuid4()}"),
                         "before": self._manifest(old), "name": name}
            db.execute("INSERT INTO renames VALUES (?,?)", (project_id, json.dumps(operation, ensure_ascii=False)))
            db.commit()  # Persist recovery information before touching the directory.
            try:
                self._finish_rename(db, project_id, operation)
                db.commit()
            except BaseException:
                db.rollback()
                try:
                    location = self._rename_location(project_id, operation)
                    if location != old:
                        self._conflict(old.parent, old.name, location)
                        rename_path(location, old)
                    write_json(old / "project.json", operation["before"])
                    db.execute("DELETE FROM renames WHERE id=?", (project_id,))
                    db.commit()
                except (OSError, ValueError, KeyError, ProjectError):
                    db.rollback()  # Leave journal for next startup; never report partial success.
                raise
            return self._describe(Path(operation["new"]), {"id": project_id})

    def _rename_location(self, project_id, operation):
        locations = []
        for key in ("old", "temporary", "new"):
            path = Path(operation[key])
            if path.is_dir() and not path.is_symlink():
                try:
                    if self._manifest(path)["id"] == project_id and not any(path.samefile(other) for other in locations):
                        locations.append(path)
                except (OSError, ValueError, KeyError, ProjectError):
                    continue
        if len(locations) != 1:
            raise ProjectError("无法唯一定位重命名项目，原文件已保留，请检查项目目录。", 409)
        return locations[0]

    def _finish_rename(self, db, project_id, operation):
        location = self._rename_location(project_id, operation)
        target, temporary = Path(operation["new"]), Path(operation["temporary"])
        if str(location) != str(target):
            self._conflict(target.parent, target.name, location)
            if location != temporary:
                rename_path(location, temporary)
            # Second step also supports case-only renames on insensitive filesystems.
            self._conflict(target.parent, target.name, temporary)
            rename_path(temporary, target)
        manifest = {**operation["before"], "name": operation["name"]}
        write_json(target / "project.json", manifest)
        db.execute("DELETE FROM renames WHERE id=?", (project_id,))

    def _recover(self, db):
        for row in db.execute("SELECT * FROM renames").fetchall():
            try:
                operation = json.loads(row["operation"])
                if any(Path(operation[key]).parent != self.root for key in ("old", "new", "temporary")):
                    self.warnings.append(f"仓库外项目 {row['id']} 的旧重命名记录已保留，未自动迁移或修改文件。")
                    continue
                self._finish_rename(db, row["id"], operation)
                db.commit()
            except (OSError, ValueError, KeyError, ProjectError):
                db.rollback()
                self.warnings.append(f"项目 {row['id']} 的重命名需要恢复，相关文件已保留。")

    def _owner(self, db, owner: str, session: str | None = None) -> Path:
        if owner == "scratch":
            path = self.state_dir / "scratch"
            path.mkdir(exist_ok=True)
        else:
            row = self._row(db, owner)
            path = Path(row["path"])
            if session is not None:
                lease = db.execute("SELECT path FROM sessions WHERE id=? AND project_id=? AND expires>?", (session, owner, time.time())).fetchone()
                if not lease:
                    raise ProjectError("项目已关闭或会话已过期，请重新打开项目后保存。", 409)
                if lease["path"] != str(path):
                    raise ProjectError("项目目录已在应用外改名或移动，请复制未保存内容并刷新页面。", 409)
        from museshow.infrastructure.asset_deletion import recover_deletion
        recover_deletion(path)
        return path

    def conversation(self, owner: str):
        identifier(owner)
        with self.transaction() as db:
            return self._conversation(self._owner(db, owner))

    @staticmethod
    def _conversation(directory: Path):
        path = child(directory, "conversation.json")
        if not path.exists():
            raise ProjectError("项目对话文件缺失，已阻止自动覆盖，请检查项目目录或恢复备份。", 409)
        return read_json(path)

    def chat_lock(self, owner: str):
        identifier(owner)
        return FileLock(self.state_dir / f"chat-{owner}.lock", timeout=0, thread_local=False)

    def save_draft(self, owner: str, value: dict, session: str):
        with self.transaction() as db:
            directory = self._owner(db, owner, session)
            conversation = self._conversation(directory)
            self._save_conversation(db, owner, {**{key: item for key, item in conversation.items() if key != "draftContent"}, **value}, session)

    def begin_chat(self, owner: str, session: str, user: dict, reply: dict, expected_messages: list):
        with self.transaction() as db:
            directory = self._owner(db, owner, session)
            value = self._conversation(directory)
            if value["messages"] != expected_messages:
                raise ProjectError("对话已发生变化，请重新加载后发送。", 409)
            if any(message["id"] in {user["id"], reply["id"]} for message in value["messages"]):
                raise ProjectError("这条消息已经提交，请重新加载对话，不要重复发送。", 409)
            if len(value["messages"]) > 9998:
                raise ProjectError("对话消息已达上限，请在新项目中继续。", 409)
            for message in value["messages"]:
                if message["status"] == "streaming":
                    message["status"] = "interrupted"
            value["messages"].extend([user, reply])
            value["draft"], value["assets"] = "", []
            value.pop("draftContent", None)
            inventory = self._inventory(directory)
            if any(asset["id"] not in inventory for asset in user["assets"]):
                raise ProjectError("参考素材不存在，请重新添加后发送。", 409)
            write_json(child(directory, "conversation.json"), value)
            return str(directory), value

    def update_reply(self, owner: str, directory: str, reply_id: str, text: str, status: str):
        with self.transaction() as db:
            # An accepted generation may finish after pagehide released its lease.
            # Pin the directory and only change this reply, preserving newer drafts.
            path = self._owner(db, owner)
            if str(path) != directory:
                raise ProjectError("项目目录已变化，回复未写入其他位置。", 409)
            value = self._conversation(path)
            message = next((item for item in value["messages"] if item["id"] == reply_id), None)
            if message is None or message.get("source") != "model":
                raise ProjectError("回复记录已变化，请重新加载对话。", 409)
            message["text"], message["status"] = text, status
            write_json(child(path, "conversation.json"), value)
            return value

    def save_conversation(self, owner: str, value: dict, session: str):
        with self.transaction() as db:
            self._save_conversation(db, owner, value, session)

    def _save_conversation(self, db, owner: str, value: dict, session: str):
        path = self._owner(db, owner, session)
        current = self._conversation(path)
        if any(message.get("source") == "model" for message in current["messages"]):
            # Older clients and page-exit snapshots cannot overwrite server replies.
            value = {**value, "messages": current["messages"]}
        inventory = self._inventory(path)
        referenced = [*value["assets"], *(asset for message in value["messages"] for asset in message["assets"])]
        if any(asset["id"] not in inventory for asset in referenced):
            raise ProjectError("部分素材尚未保存，项目对话未覆盖，请重试。", 409)
        write_json(child(path, "conversation.json"), value)

    def close_with_conversation(self, project_id: str, value: dict, session: str):
        with self.transaction() as db:
            # Flush and release under one lock. Older in-flight saves arriving
            # afterwards fail their lease check instead of replacing this state.
            self._save_conversation(db, project_id, value, session)
            db.execute("DELETE FROM sessions WHERE id=?", (session,))

    @staticmethod
    def _inventory(path):
        file = child(path, "assets.json")
        value = read_json(file) if file.exists() else {}
        if not isinstance(value, dict):
            raise ProjectError("素材清单格式无效，原有文件未修改。", 409)
        return value

    def save_asset(self, owner: str, asset_id: str, metadata: dict, data: bytes, session: str):
        identifier(asset_id)
        if len(data) > 50 * 1024 * 1024:
            raise ProjectError("素材超过 50 MB。", 413)
        with self.transaction() as db:
            path = self._owner(db, owner, session)
            self._write_asset(path, asset_id, metadata, data)

    def _write_asset(self, path, asset_id: str, metadata: dict, data: bytes):
        assets = child(path, "assets")
        assets.mkdir(exist_ok=True)
        file = child(assets, asset_id)
        inventory = self._inventory(path)
        value = {**metadata, "id": asset_id, "size": len(data)}
        if asset_id in inventory:
            # Older upload clients may retry after the catalog enriched metadata.
            # Compare submitted fields without dropping the richer stored record.
            if any(inventory[asset_id].get(key) != item for key, item in value.items()):
                raise ProjectError("素材标识冲突，原素材未覆盖。", 409)
            if not file.is_file() or file.read_bytes() != data:
                raise ProjectError("素材文件缺失或内容不一致，原素材未覆盖。", 409)
            return
        created = not file.exists()
        if not created:
            if not file.is_file():
                raise ProjectError("素材文件缺失，请重新上传。", 409)
            if file.read_bytes() != data:
                raise ProjectError("素材文件已存在且内容不一致，原文件未覆盖。", 409)
        else:
            fd, temporary = tempfile.mkstemp(prefix=".museshow-", suffix=".upload", dir=assets)
            try:
                with os.fdopen(fd, "wb") as stream:
                    stream.write(data)
                    stream.flush()
                    os.fsync(stream.fileno())
                rename_path(Path(temporary), file)
            finally:
                if os.path.exists(temporary):
                    os.unlink(temporary)
        try:
            inventory[asset_id] = value
            write_json(child(path, "assets.json"), inventory)
        except BaseException:
            if created:
                file.unlink(missing_ok=True)
            raise

    def asset(self, owner: str, asset_id: str):
        identifier(asset_id)
        with self.transaction() as db:
            path = self._owner(db, owner)
            metadata = self._inventory(path).get(asset_id)
            if metadata is None:
                raise ProjectError("素材不存在。", 404)
            file = child(child(path, "assets"), asset_id)
            if not file.is_file():
                raise ProjectError("素材文件缺失。", 404)
            return file.read_bytes(), metadata

    def remove_asset(self, owner: str, asset_id: str, session: str):
        identifier(asset_id)
        with self.transaction() as db:
            self._owner(db, owner, session)  # Verifies the project session.
            # Detaching a reference never deletes a saved asset, including an
            # unsent upload. Permanent deletion belongs to the asset catalog.
            return

    def _delete_asset(self, path, asset_id):
        file = child(child(path, "assets"), asset_id)
        inventory = self._inventory(path)
        if asset_id not in inventory:
            return
        original = dict(inventory)
        inventory.pop(asset_id)
        write_json(child(path, "assets.json"), inventory)
        try:
            file.unlink(missing_ok=True)
        except OSError:
            write_json(child(path, "assets.json"), original)
            raise

