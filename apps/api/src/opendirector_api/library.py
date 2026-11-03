"""Global library and read-only project sources for independent media imports.

Browsing reads saved project state without taking an editing lease; source
preparation verifies bytes and preserves node identity until confirmation.
"""
from uuid import UUID
from typing import Literal

from fastapi import APIRouter, Query, Request
from fastapi.responses import Response
from pydantic import BaseModel, Field
from starlette.concurrency import run_in_threadpool

from opendirector.application.library import Library
from opendirector.application.subject_library import SubjectLibrary
from opendirector.application.canvas_sources import CanvasSources
from opendirector.media import thumbnails

# Node revisions cover the asset fingerprint, so a revision-addressed URL never
# changes content and browsers may keep it instead of refetching megabytes.
MEDIA_CACHE = 'private, max-age=31536000, immutable'


class LibrarySelection(BaseModel):
    itemIds: list[UUID] = Field(min_length=1, max_length=1000)


class LibraryRename(BaseModel):
    name: str = Field(min_length=1, max_length=255)


class CanvasImport(BaseModel):
    projectId: UUID
    assetId: UUID
    name: str | None = Field(default=None, max_length=255)


class SubjectImport(BaseModel):
    projectId: UUID
    nodeId: UUID
    name: str = Field(min_length=1, max_length=255)
    description: str = Field(default='', max_length=20000)
    category: str = Field(default='', max_length=100)
    main: str | None = None
    auxiliaries: list[str] = Field(default_factory=list, max_length=3)
    voice: str | None = None
    preview: str | None = None


class SubjectSelection(BaseModel):
    id: UUID
    revision: int = Field(ge=1, strict=True)


class SubjectPreparation(BaseModel):
    items: list[SubjectSelection] = Field(min_length=1, max_length=100)


class SubjectBackup(BaseModel):
    projectId: UUID
    nodeId: UUID


class CanvasSourcePreparation(BaseModel):
    nodeId: str = Field(min_length=1, max_length=200)
    revision: str = Field(pattern=r'^[0-9a-f]{64}$')
    slot: Literal['main', 'auxiliary', 'voice'] = 'main'
    subject: bool = True


class SubjectMediaPreparation(BaseModel):
    revision: int = Field(ge=1, strict=True)
    slot: Literal['main', 'auxiliary', 'voice'] = 'main'


def library_routes(projects):
    router = APIRouter(prefix='/api/library', tags=['Global asset library'])
    library = Library(projects)
    subjects = SubjectLibrary(projects)
    sources = CanvasSources(projects)

    @router.get('/subject-media')
    def subject_media_choices(slot: Literal['main', 'auxiliary', 'voice'] = 'main', query: str = Query(default='', max_length=255)):
        return subjects.media_choices(slot, query)

    @router.get('/canvases/{project_id}/sources')
    def canvas_sources(project_id: UUID):
        return sources.list(project_id)

    @router.post('/canvases/{project_id}/prepare')
    def prepare_canvas_source(project_id: UUID, value: CanvasSourcePreparation):
        return sources.prepare(project_id, value.nodeId, value.revision, value.slot, value.subject)

    @router.get('/canvases/{project_id}/nodes/{node_id}/media/{slot}')
    def canvas_source_media(project_id: UUID, node_id: str, slot: str, revision: str = Query(pattern=r'^[0-9a-f]{64}$'),
                            size: str = Query(default='', pattern=r'^(|thumb)$')):
        preview_key = f'{node_id}:{revision}:{slot}'
        if size == 'thumb':
            # Serving a grid must not read the megabytes behind each card, so an
            # already rendered preview answers before any media is loaded.
            known = thumbnails.lookup(preview_key)
            if known is not None:
                return Response(known, media_type='image/jpeg', headers={'Cache-Control': MEDIA_CACHE})
        data, value = sources.media(project_id, node_id, revision, slot)
        if size == 'thumb':
            rendered = thumbnails.preview(preview_key, data, value.get('kind') or '')
            if rendered:
                return Response(rendered, media_type='image/jpeg', headers={'Cache-Control': MEDIA_CACHE})
        src = value.get('src', '')
        mime = value.get('mimeType') or (src[5:].split(';', 1)[0] if src.startswith('data:') else 'application/octet-stream')
        return Response(data, media_type=mime, headers={'Cache-Control': MEDIA_CACHE})

    @router.post('/items/{item_id}/prepare-subject-media')
    def prepare_subject_media(item_id: UUID, value: SubjectMediaPreparation):
        return subjects.prepare_media(item_id, value.revision, value.slot)

    @router.get('/subjects')
    def list_subjects(query: str = ''):
        return subjects.list(query)

    @router.post('/subjects/prepare')
    def prepare_subjects(value: SubjectPreparation):
        return subjects.prepare([item.model_dump() for item in value.items])

    @router.post('/subjects/from-canvas')
    def backup_subject(value: SubjectBackup):
        return subjects.backup(value.projectId, value.nodeId)

    @router.get('/items/{item_id}/subject-media/{slot}')
    def subject_media(item_id: UUID, slot: str, revision: int = Query(ge=1)):
        data, mime = subjects.media(item_id, slot, revision)
        return Response(data, media_type=mime, headers={'Cache-Control': 'no-store'})

    @router.get('/items')
    def list_items(
        kind: str | None = Query(default=None),
        state: str = Query(default='active', pattern='^(active|trashed)$'),
        query: str = Query(default='', max_length=255),
        mediaKind: str | None = Query(default=None),
    ):
        return library.list(kind=kind, state=state, query=query, media_kind_value=mediaKind)

    @router.get('/items/{item_id}')
    def get_item(item_id: UUID):
        return library.get(item_id)

    @router.get('/items/{item_id}/content')
    def item_content(item_id: UUID):
        data, item = library.content(item_id)
        return Response(content=data, media_type=item.metadata.mimeType if item.metadata else 'application/octet-stream')

    @router.post('/items/upload')
    async def upload(request: Request, name: str = Query(min_length=1, max_length=255)):
        data = await request.body()
        mime = request.headers.get('content-type') or 'application/octet-stream'
        return await run_in_threadpool(library.upload, data, name, mime)

    @router.post('/items/from-canvas-inline')
    async def from_canvas_inline(
        request: Request,
        name: str = Query(min_length=1, max_length=255),
        project_id: UUID | None = Query(default=None),
        asset_id: UUID | None = Query(default=None),
    ):
        """Back up canvas media that lives inline (as a data: URL) in the project.

        New-format canvases keep some media embedded rather than in
        `assets/`, so there is no asset id to resolve. The browser already
        holds those bytes; this stores them as a library blob (invariant L1).
        """
        from opendirector.domain.creation.library import LibraryOrigin
        data = await request.body()
        mime = request.headers.get('content-type') or 'application/octet-stream'
        # A canvas origin must name its project; without one the entry is
        # simply recorded as an upload instead of failing validation later.
        origin = LibraryOrigin(
            type='canvas', projectId=project_id, assetId=asset_id,
        ) if project_id else None
        return await run_in_threadpool(
            lambda: library.upload(data, name, mime, origin=origin))

    @router.post('/items/from-canvas')
    async def from_canvas(value: CanvasImport):
        return await run_in_threadpool(
            library.add_from_canvas, value.projectId, value.assetId, value.name)

    @router.post('/items/from-subject')
    async def from_subject(value: SubjectImport):
        from opendirector.domain.creation.library import LibrarySubjectSnapshot
        snapshot = LibrarySubjectSnapshot(
            description=value.description, category=value.category,
            main=value.main, auxiliaries=tuple(value.auxiliaries), voice=value.voice,
        )
        return await run_in_threadpool(
            library.add_subject, value.projectId, value.nodeId, value.name, snapshot, value.preview)

    @router.patch('/items/{item_id}')
    async def rename_item(item_id: UUID, value: LibraryRename):
        return await run_in_threadpool(library.rename, item_id, value.name)

    @router.post('/items/trash')
    async def trash_items(value: LibrarySelection):
        return await run_in_threadpool(library.trash, value.itemIds)

    @router.post('/trash/restore')
    async def restore_items(value: LibrarySelection):
        return await run_in_threadpool(library.restore, value.itemIds)

    @router.delete('/trash')
    async def purge_all():
        return await run_in_threadpool(library.purge)

    @router.delete('/trash/{item_id}')
    async def purge_one(item_id: UUID):
        return await run_in_threadpool(library.purge, [item_id])

    return router
