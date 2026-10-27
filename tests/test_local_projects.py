import json
import shutil
from pathlib import Path
from uuid import uuid4

import pytest

from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import LocalProjects, empty_conversation, read_json
from museshow.infrastructure.rename import rename_path


@pytest.fixture
def store(tmp_path):
    return LocalProjects(tmp_path)


def create(store, name="测试项目", session=None):
    return store.create(name, str(uuid4()), session)


def test_projects_directory_is_lazy_and_independent_of_working_directory(tmp_path, monkeypatch):
    other = tmp_path / "other"
    other.mkdir()
    monkeypatch.chdir(other)
    store = LocalProjects(tmp_path)
    assert store.list_projects() == {"projects": [], "warnings": []}
    assert not (tmp_path / "projects").exists()
    project = create(store)
    assert Path(project["path"]).parent == tmp_path / "projects"
    assert not (other / "projects").exists()


@pytest.mark.parametrize("name", ["", "../逃逸", "CON", "abc.", "a:b", "a\x00b", ".museshow-reserved"])
def test_invalid_names_never_create_projects(store, name):
    with pytest.raises(ProjectError):
        create(store, name)
    assert not store.root.exists()


def test_create_and_rename_conflicts_preserve_existing_directories(store):
    project = create(store, "Film")
    marker = Path(project["path"]) / "keep.txt"
    marker.write_text("keep")
    create(store, "已有名称")
    for operation in (lambda: create(store, "film"),
                      lambda: store.rename(project["id"], "已有名称", "Film"),
                      lambda: store.rename(project["id"], "新名称", "过期名称")):
        with pytest.raises(ProjectError):
            operation()
    assert marker.read_text() == "keep"
    assert {item["name"] for item in store.list_projects()["projects"]} == {"Film", "已有名称"}


def test_create_is_idempotent_and_project_list_is_complete_and_sorted(store):
    first = create(store)
    assert store.create(first["name"], first["id"])["path"] == first["path"]
    for index in range(22):
        create(store, f"项目-{index}")
    listed = store.list_projects()["projects"]
    assert len(listed) == 23
    assert [item["name"] for item in listed] == sorted((item["name"] for item in listed), key=lambda name: (name.casefold(), name))
    store.open(first["id"], str(uuid4()))
    assert store.list_projects()["projects"] == listed


def test_conversation_and_original_media_survive_service_restart_and_rename(store, tmp_path):
    session = str(uuid4())
    project = create(store, session=session)
    asset_id = str(uuid4())
    metadata = {"name": "参考.png", "type": "image/png", "fingerprint": "source"}
    store.save_asset(project["id"], asset_id, metadata, b"original bytes", session)
    value = {**empty_conversation(), "draft": "未发送草稿", "assets": [{**metadata, "id": asset_id, "size": 14}]}
    store.save_conversation(project["id"], value, session)
    store.release(session)
    renamed = store.rename(project["id"], "新的名称", project["name"])
    restarted = LocalProjects(tmp_path)
    assert restarted.conversation(project["id"]) == value
    assert restarted.asset(project["id"], asset_id)[0] == b"original bytes"
    assert renamed["id"] == project["id"]
    assert not Path(project["path"]).exists()
    assert read_json(Path(renamed["path"]) / "project.json")["name"] == "新的名称"


def test_edit_session_protects_project_until_release_or_expiry(store):
    session = str(uuid4())
    project = create(store, session=session)
    for operation in (lambda: store.rename(project["id"], "新名称", project["name"]),
                      lambda: store.open(project["id"], str(uuid4()))):
        with pytest.raises(ProjectError):
            operation()
    store.release(session)
    with pytest.raises(ProjectError, match="已关闭"):
        store.save_conversation(project["id"], empty_conversation(), session)
    store.open(project["id"], session)
    with store.transaction() as db:
        db.execute("UPDATE sessions SET expires=0")
    assert store.rename(project["id"], "新名称", project["name"])["name"] == "新名称"


def test_case_only_rename_updates_actual_directory_entry(store):
    project = create(store, "Film")
    renamed = store.rename(project["id"], "film", "Film")
    assert Path(renamed["path"]).name == "film"
    assert [item.name for item in Path(renamed["path"]).parent.iterdir()] == ["film"]


def test_native_rename_never_replaces_even_an_empty_destination(tmp_path):
    source, target = tmp_path / "source", tmp_path / "target"
    source.mkdir()
    target.mkdir()
    (source / "keep").write_text("original")
    with pytest.raises((ProjectError, OSError)):
        rename_path(source, target)
    assert (source / "keep").read_text() == "original"
    assert target.is_dir()


@pytest.mark.parametrize("directory", [False, True])
def test_rename_without_noreplace_support_still_never_replaces(tmp_path, monkeypatch, directory):
    """NFS rejects RENAME_NOREPLACE with EINVAL; files fall back to link+unlink, directories to a checked rename."""
    import ctypes
    import errno

    from museshow.infrastructure import rename

    class Library:
        def __init__(self, *args, **kwargs):
            def unsupported(*arguments):
                ctypes.set_errno(errno.EINVAL)
                return -1
            self.renameat2 = self.renamex_np = unsupported

    monkeypatch.setattr(rename.ctypes, "CDLL", Library)
    source, target = tmp_path / "source", tmp_path / "target"
    if directory:
        source.mkdir()
        (source / "keep").write_text("original")
    else:
        source.write_text("original")
    rename_path(source, target)
    assert not source.exists() and ((target / "keep") if directory else target).read_text() == "original"
    if directory:
        source.mkdir()
    else:
        source.write_text("new")
    with pytest.raises(ProjectError, match="已存在"):
        rename_path(source, target)
    assert source.exists() and ((target / "keep") if directory else target).read_text() == "original"


def test_rename_rolls_back_if_manifest_write_fails(store, monkeypatch):
    from museshow.infrastructure import local_projects
    project = create(store)
    original = local_projects.write_json

    def fail_target(path, value):
        if path.parent.name == "目标名称" and path.name == "project.json":
            raise OSError("simulated full disk")
        return original(path, value)

    monkeypatch.setattr(local_projects, "write_json", fail_target)
    with pytest.raises(OSError):
        store.rename(project["id"], "目标名称", project["name"])
    assert Path(project["path"]).is_dir()
    assert store.list_projects()["projects"][0]["name"] == project["name"]
    with store.transaction() as db:
        assert db.execute("SELECT COUNT(*) FROM renames").fetchone()[0] == 0


@pytest.mark.parametrize("stage", ["old", "temporary", "new"])
def test_restart_recovers_rename_from_every_directory_stage(store, tmp_path, stage):
    project = create(store)
    old = Path(project["path"])
    operation = {"old": str(old), "temporary": str(old.parent / ".museshow-rename-test"), "new": str(old.parent / "恢复名称"),
                 "before": read_json(old / "project.json"), "name": "恢复名称"}
    with store.transaction() as db:
        db.execute("INSERT INTO renames VALUES (?,?)", (project["id"], json.dumps(operation)))
    if stage != "old":
        rename_path(old, Path(operation[stage]))
    restarted = LocalProjects(tmp_path)
    result = restarted.list_projects()["projects"][0]
    assert result["name"] == "恢复名称"
    assert result["path"] == operation["new"]
    assert restarted.warnings == []


def test_old_state_upgrade_preserves_disk_projects_and_ignores_old_index(store, tmp_path):
    project = create(store)
    incomplete = create(store, "未完成导入")
    pending_path = Path(incomplete["path"]) / "project.json"
    pending = {**read_json(pending_path), "legacyImport": "pending"}
    pending_path.write_text(json.dumps(pending))
    outside = tmp_path / "old-custom-root"
    outside.mkdir()
    marker = outside / "keep.txt"
    marker.write_text("user data")
    with store.transaction() as db:
        db.executescript("""
            DROP TABLE sessions;
            CREATE TABLE sessions (id TEXT PRIMARY KEY, project_id TEXT NOT NULL, expires REAL NOT NULL);
            CREATE TABLE settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);
            CREATE TABLE roots (path TEXT PRIMARY KEY);
            CREATE TABLE projects (id TEXT PRIMARY KEY, name TEXT, path TEXT, removed INTEGER);
        """)
        db.execute("INSERT INTO settings VALUES ('root', ?)", (str(outside),))
        db.execute("INSERT INTO roots VALUES (?)", (str(outside),))
        db.execute("INSERT INTO projects VALUES (?,?,?,1)", (project["id"], project["name"], project["path"]))
    restarted = LocalProjects(tmp_path)
    listing = restarted.list_projects()
    assert listing["projects"] == [project]
    assert "导入未完成" in listing["warnings"][0]
    assert read_json(pending_path) == pending
    assert Path(create(restarted, "新项目")["path"]).parent == store.root
    assert marker.read_text() == "user data"
    session = str(uuid4())
    restarted.open(project["id"], session)
    restarted.save_conversation(project["id"], {**empty_conversation(), "draft": "upgraded"}, session)
    assert restarted.conversation(project["id"])["draft"] == "upgraded"
    with restarted.transaction() as db:
        tables = {row["name"] for row in db.execute("SELECT name FROM sqlite_master WHERE type='table'")}
    assert tables == {"sessions", "renames"}


def test_scan_uses_current_valid_immediate_directories_as_the_project_list(store, tmp_path):
    project = create(store)
    ordinary = store.root / "普通文件夹"
    ordinary.mkdir()
    shutil.copytree(project["path"], ordinary / "nested-project")
    (store.root / "ignore.txt").write_text("not a project")
    invalid = store.root / "损坏项目"
    invalid.mkdir()
    (invalid / "project.json").write_text("[]")
    listing = store.list_projects()
    assert listing["projects"] == [project]
    assert "损坏项目" in listing["warnings"][0]
    renamed = Path(project["path"]).with_name("手动改名")
    Path(project["path"]).rename(renamed)
    assert store.list_projects()["projects"] == [{**project, "name": "手动改名", "path": str(renamed)}]
    renamed.rename(tmp_path / "outside")
    assert store.list_projects()["projects"] == []
    with pytest.raises(ProjectError, match="不在 projects"):
        store.conversation(project["id"])
    assert not renamed.exists()
    shutil.move(str(tmp_path / "outside"), str(renamed))
    assert store.open(project["id"], str(uuid4()))["path"] == str(renamed)


def test_directory_moved_during_edit_cannot_receive_stale_writes(store):
    session = str(uuid4())
    project = create(store, session=session)
    value = {**empty_conversation(), "draft": "原有草稿"}
    store.save_conversation(project["id"], value, session)
    renamed = Path(project["path"]).with_name("外部改名")
    Path(project["path"]).rename(renamed)
    for operation in (lambda: store.save_conversation(project["id"], empty_conversation(), session),
                      lambda: store.heartbeat(session, project["id"])):
        with pytest.raises(ProjectError, match="应用外改名"):
            operation()
    assert read_json(renamed / "conversation.json") == value
    assert not Path(project["path"]).exists()


def test_copied_duplicate_ids_are_reported_and_neither_project_is_opened(store):
    project = create(store)
    shutil.copytree(project["path"], store.root / "复制项目")
    listing = store.list_projects()
    assert listing["projects"] == []
    assert "标识重复" in listing["warnings"][0]
    assert "复制项目" in listing["warnings"][0]
    with pytest.raises(ProjectError, match="同标识"):
        store.open(project["id"], str(uuid4()))
    with pytest.raises(ProjectError, match="重复使用"):
        store.create("另一个名称", project["id"])


def test_projects_root_is_not_replaced_when_it_is_a_file(store):
    store.root.write_text("keep")
    with pytest.raises(ProjectError, match="不是文件夹"):
        store.list_projects()
    with pytest.raises(ProjectError):
        create(store)
    assert store.root.read_text() == "keep"


def test_conversation_symlink_cannot_read_or_overwrite_an_external_file(store, tmp_path):
    session = str(uuid4())
    project = create(store, session=session)
    outside = tmp_path / "outside.json"
    outside.write_text('{"private":true}')
    conversation = Path(project["path"]) / "conversation.json"
    conversation.unlink()
    try:
        conversation.symlink_to(outside)
    except OSError:
        pytest.skip("Creating symlinks is not permitted on this host")
    with pytest.raises(ProjectError, match="符号链接"):
        store.conversation(project["id"])
    with pytest.raises(ProjectError):
        store.save_conversation(project["id"], empty_conversation(), session)
    assert outside.read_text() == '{"private":true}'


def test_missing_asset_does_not_overwrite_saved_conversation(store):
    session = str(uuid4())
    project = create(store, session=session)
    good = {**empty_conversation(), "draft": "原草稿"}
    store.save_conversation(project["id"], good, session)
    with pytest.raises(ProjectError, match="素材尚未保存"):
        store.save_conversation(project["id"], {**good, "draft": "新草稿", "assets": [{"id": str(uuid4())}]}, session)
    assert store.conversation(project["id"]) == good


def test_failed_asset_write_leaves_no_partial_file(store, monkeypatch):
    from museshow.infrastructure import local_projects
    session = str(uuid4())
    project = create(store, session=session)
    asset_id = str(uuid4())

    def fail_fsync(fd):
        raise OSError("simulated full disk")

    monkeypatch.setattr(local_projects.os, "fsync", fail_fsync)
    with pytest.raises(OSError):
        store.save_asset(project["id"], asset_id, {"name": "asset", "type": "text/plain", "fingerprint": "source"}, b"content", session)
    assert list((Path(project["path"]) / "assets").iterdir()) == []
    assert read_json(Path(project["path"]) / "assets.json") == {}


def test_missing_project_conversation_is_not_treated_as_empty(store):
    project = create(store)
    (Path(project["path"]) / "conversation.json").unlink()
    with pytest.raises(ProjectError, match="阻止自动覆盖"):
        store.conversation(project["id"])
