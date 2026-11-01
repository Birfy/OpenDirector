"""Global, cross-canvas library items.

Distinct from `creation.assets.Asset`, which is project-scoped and physically
lives at `projects/<id>/assets/<assetId>`. A library item is a *backup*: it owns
its own bytes under `projects/.opendirector/library/blobs/<sha256>` and shares no
mutable state with any canvas. See docs/ASSET-LIBRARY-DESIGN.md (L1 / L4).
"""
from typing import Annotated, Literal
from uuid import UUID

from pydantic import Field, model_validator

from .base import Contract, MediaKind, NonNegative, Revision

# Library storage keys are date-based and stable; names carry the human label.
LibraryName = Annotated[str, Field(min_length=1, max_length=255)]

LibraryMediaKind = Literal['image', 'video', 'audio', 'file']
LibraryState = Literal['active', 'trashed']
LibraryKind = Literal['asset', 'subject']


class LibraryOrigin(Contract):
    """Provenance only. Never an owning reference back into a canvas."""

    type: Literal['upload', 'canvas']
    projectId: UUID | None = None
    nodeId: UUID | None = None
    assetId: UUID | None = None

    @model_validator(mode='after')
    def canvas_origin_identifies_its_project(self):
        if self.type == 'canvas' and self.projectId is None:
            raise ValueError('Canvas-origin items must record their source project')
        if self.type == 'upload' and self.projectId is not None:
            raise ValueError('Uploaded items have no source project')
        return self


class LibraryMediaMetadata(Contract):
    mimeType: str = Field(min_length=1, max_length=255)
    size: int = Field(ge=0, strict=True)
    width: int | None = Field(default=None, ge=1, strict=True)
    height: int | None = Field(default=None, ge=1, strict=True)
    durationSeconds: NonNegative | None = None

    @model_validator(mode='after')
    def dimensions_together(self):
        if (self.width is None) != (self.height is None):
            raise ValueError('Media dimensions must be supplied together')
        return self


class LibrarySubjectSnapshot(Contract):
    """Frozen SubjectData with every referenced media replaced by its blob."""

    description: str = Field(default='', max_length=20000)
    category: str = Field(default='', max_length=100)
    main: str | None = Field(default=None, pattern=r'^[0-9a-f]{64}$')
    auxiliaries: tuple[str, ...] = Field(default=(), max_length=3)
    voice: str | None = Field(default=None, pattern=r'^[0-9a-f]{64}$')

    @model_validator(mode='after')
    def auxiliaries_require_main(self):
        if not self.main and (self.auxiliaries or self.voice):
            raise ValueError('Subject auxiliaries and voice require a main source')
        return self


class LibraryItem(Contract):
    id: UUID
    kind: LibraryKind
    state: LibraryState = 'active'
    name: LibraryName
    revision: Revision = 1
    createdAt: str
    trashedAt: str | None = None
    # Asset payload.
    blob: str | None = Field(default=None, pattern=r'^[0-9a-f]{64}$')
    # Subject payload: blobs are referenced through the snapshot.
    subject: LibrarySubjectSnapshot | None = None
    # Shared descriptive facts. Subject items also carry a preview blob.
    mediaKind: LibraryMediaKind | None = None
    metadata: LibraryMediaMetadata | None = None
    preview: str | None = Field(default=None, pattern=r'^[0-9a-f]{64}$')
    origin: LibraryOrigin

    @model_validator(mode='after')
    def payload_matches_kind(self):
        if self.kind == 'asset':
            if self.blob is None or self.mediaKind is None:
                raise ValueError('Asset items require a blob and media kind')
            if self.mediaKind == 'file' and self.subject is not None:
                raise ValueError('Asset items never carry a subject snapshot')
            if self.subject is not None:
                raise ValueError('Asset items never carry a subject snapshot')
        else:
            if self.subject is None:
                raise ValueError('Subject items require a subject snapshot')
            if self.blob is not None:
                raise ValueError('Subject items reference blobs through their snapshot')
            if self.mediaKind is not None:
                raise ValueError('Subject items are not media files')
        if (self.state == 'trashed') != (self.trashedAt is not None):
            raise ValueError('Trashed items record when they were trashed')
        return self

    def blob_refs(self) -> set[str]:
        """Every content hash this item keeps alive."""
        found: set[str] = set()
        if self.blob:
            found.add(self.blob)
        if self.preview:
            found.add(self.preview)
        if self.subject is not None:
            if self.subject.main:
                found.add(self.subject.main)
            found.update(self.subject.auxiliaries)
            if self.subject.voice:
                found.add(self.subject.voice)
        return found


class LibraryIndex(Contract):
    version: Literal[1] = 1
    revision: Revision = 1
    items: dict[UUID, LibraryItem] = Field(default_factory=dict, max_length=100000)

    @model_validator(mode='after')
    def keys_match_ids(self):
        for key, item in self.items.items():
            if str(key) != str(item.id):
                raise ValueError('Library index keys must equal item IDs')
        return self

    def referenced(self) -> set[str]:
        """Hashes still held by at least one item, whatever its state.

        Trashed items keep their bytes until they are purged, so restoration
        never needs to re-read a canvas.
        """
        found: set[str] = set()
        for item in self.items.values():
            found.update(item.blob_refs())
        return found

    def active_refs(self) -> set[str]:
        found: set[str] = set()
        for item in self.items.values():
            if item.state == 'active':
                found.update(item.blob_refs())
        return found