"""Content-addressed storage for the global library.

Layout (under the repository state dir, never inside any project):

    projects/.opendirector/library/index.json
    projects/.opendirector/library/blobs/<sha256>

Blobs are keyed by content hash, so the same bytes stored twice occupy one
file (invariant L6). Deleting a library item only flips its state to 'trashed';
bytes are removed only when no item references them any more (invariant L5).
"""
import hashlib
import os
from datetime import datetime, timezone
from pathlib import Path
import tempfile
from uuid import UUID, uuid4

from filelock import FileLock

from opendirector.domain.creation.base import Fingerprint
from opendirector.domain.creation.library import (
    LibraryIndex, LibraryItem, LibraryMediaKind, LibraryMediaMetadata,
    LibraryOrigin, LibrarySubjectSnapshot,
)
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.local_projects import child, read_json, write_json

INDEX = 'index.json'
BLOBS = 'blobs'
LOCK = 'library.lock'
MAX_ITEMS = 100000

MEDIA_BY_MIME_PREFIX = (('image/', 'image'), ('video/', 'video'), ('audio/', 'audio'))


def media_kind(mime: str, name: str = '') -> LibraryMediaKind:
    lowered = (mime or '').lower()
    for prefix, kind in MEDIA_BY_MIME_PREFIX:
        if lowered.startswith(prefix):
            return kind
    return 'file'


def fingerprint(data: bytes) -> str:
    return 'sha256:' + hashlib.sha256(data).hexdigest()


def digest(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec='seconds').replace('+00:00', 'Z')


class LibraryStore:
    """Reads and writes the global library index and its blobs."""

    def __init__(self, state_dir: Path):
        self.root = Path(state_dir) / 'library'
        self.blobs = self.root / BLOBS
        self.index_path = self.root / INDEX
        self.root.mkdir(parents=True, exist_ok=True)
        self.blobs.mkdir(parents=True, exist_ok=True)
        self.lock = FileLock(self.root / LOCK, timeout=15)

    # -- index -------------------------------------------------------------

    def read(self) -> LibraryIndex:
        if not self.index_path.exists():
            return LibraryIndex()
        return LibraryIndex.model_validate(read_json(self.index_path))

    def write(self, index: LibraryIndex) -> None:
        write_json(self.index_path, index.model_dump(mode='json'))

    class _Transaction:
        def __init__(self, store):
            self.store = store
            self.index = None

        def __enter__(self):
            self.store.lock.acquire()
            try:
                self.index = self.store.read()
            except BaseException:
                self.store.lock.release()
                raise
            return self

        def __exit__(self, kind, value, traceback):
            try:
                if kind is None:
                    self.store.write(self.index)
            finally:
                self.store.lock.release()
            return False

        def commit_partial(self):
            """Persist the in-memory index before physical cleanup runs."""
            self.store.write(self.index)

    def transaction(self):
        return self._Transaction(self)

    # -- blobs -------------------------------------------------------------

    def blob_path(self, sha: str) -> Path:
        return child(self.blobs, sha)

    def has_blob(self, sha: str) -> bool:
        return self.blob_path(sha).exists()

    def put_blob(self, data: bytes) -> str:
        sha = digest(data)
        path = self.blob_path(sha)
        if path.exists():
            return sha
        fd, temporary = tempfile.mkstemp(prefix='.library-', suffix='.tmp', dir=self.blobs)
        try:
            with os.fdopen(fd, 'wb') as stream:
                stream.write(data)
                stream.flush()
                os.fsync(stream.fileno())
            os.replace(temporary, path)
        finally:
            if os.path.exists(temporary):
                os.unlink(temporary)
        return sha

    def read_blob(self, sha: str) -> bytes:
        path = self.blob_path(sha)
        if not path.exists():
            raise ProjectError('库素材已丢失，请重新导入。', 410)
        return path.read_bytes()

    def drop_blob(self, sha: str) -> None:
        self.blob_path(sha).unlink(missing_ok=True)

    def collect(self, index: LibraryIndex) -> list[str]:
        """Remove blob files that no item (active or trashed) still references.

        Must be called with a persisted index so a crash cannot orphan bytes.
        """
        keep = index.referenced()
        removed = []
        for path in self.blobs.iterdir():
            if not path.is_file() or path.name.startswith('.'):
                continue
            if path.name not in keep:
                path.unlink(missing_ok=True)
                removed.append(path.name)
        return removed

    # -- item construction -------------------------------------------------

    def new_asset(self, blob: str, name: str, mime: str, origin: LibraryOrigin,
                  metadata: LibraryMediaMetadata | None = None) -> LibraryItem:
        kind = media_kind(mime, name)
        facts = metadata or LibraryMediaMetadata(mimeType=mime or 'application/octet-stream', size=0)
        return LibraryItem(
            id=uuid4(), kind='asset', name=name, createdAt=now(), blob=blob,
            mediaKind=kind, metadata=facts, origin=origin,
        )

    def new_subject(self, name: str, subject: LibrarySubjectSnapshot, origin: LibraryOrigin,
                    preview: str | None = None) -> LibraryItem:
        return LibraryItem(
            id=uuid4(), kind='subject', name=name, createdAt=now(),
            subject=subject, preview=preview, origin=origin,
        )