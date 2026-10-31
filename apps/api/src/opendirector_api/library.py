"""Global cross-canvas library endpoints (docs/ASSET-LIBRARY-DESIGN.md §6).

Canvas browsing is deliberately NOT reimplemented here: the frontend projects
existing project endpoints read-only, so the canvas view can never drift from
the canvas itself (invariant L3).
"""
from uuid import UUID

from fastapi import APIRouter, Query, Request
from fastapi.responses import Response
from pydantic import BaseModel, Field
from starlette.concurrency import run_in_threadpool

from opendirector.application.library import Library
from opendirector.application.subject_library import SubjectLibrary


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


def library_routes(projects):
    router = APIRouter(prefix='/api/library', tags=['Global asset library'])
    library = Library(projects)
    subjects = SubjectLibrary(projects)

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
