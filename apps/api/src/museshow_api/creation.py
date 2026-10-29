"""New-format project endpoints; existing workspace routes are not switched."""
from uuid import UUID
import re
from urllib.parse import quote, unquote

from fastapi import APIRouter, Header, Query, Request
from fastapi.responses import Response, StreamingResponse
from starlette.background import BackgroundTask
from starlette.concurrency import run_in_threadpool

from museshow.application.creation_assets import CreationAssets
from museshow.domain.creation.assets import Asset, UploadInfo
from museshow.domain.creation.base import MediaKind
from museshow.domain.creation.commands import Command, CommandReceipt
from museshow.domain.creation.project import ProjectSnapshot
from museshow.domain.projects import ProjectError
from museshow.infrastructure.creation_projects import CreationProjects
from museshow_api.models import Session


def creation_routes(projects: CreationProjects):
    router = APIRouter(prefix='/api/creation', tags=['Unified creation projects'])
    assets = CreationAssets(projects)

    @router.get('/projects')
    def list_projects():
        return projects.list_projects()

    @router.get('/projects/{project_id}', response_model=ProjectSnapshot)
    def snapshot(project_id: UUID):
        return projects.snapshot(project_id)

    @router.post('/projects/{project_id}/open', response_model=ProjectSnapshot)
    def open_project(project_id: UUID, x_museshow_session: UUID = Header()):
        return projects.open(project_id, str(x_museshow_session))

    @router.put('/sessions/{session_id}')
    def heartbeat(session_id: UUID, value: Session):
        projects.heartbeat(str(session_id), value.projectId)
        return {'ok': True}

    @router.delete('/sessions/{session_id}')
    def release(session_id: UUID):
        projects.local.release(str(session_id))
        return {'ok': True}

    @router.post('/projects/{project_id}/commands', response_model=CommandReceipt)
    def execute(project_id: UUID, value: Command, x_museshow_session: UUID | None = Header(default=None)):
        # Source is selected by the trusted entrypoint, never by a payload flag.
        if value.projectId != project_id:
            raise ProjectError('命令不属于当前工程。')
        return projects.execute(value, session=str(x_museshow_session) if x_museshow_session else None)

    @router.get('/projects/{project_id}/receipts/{command_id}', response_model=CommandReceipt)
    def receipt(project_id: UUID, command_id: UUID):
        return projects.receipt(project_id, command_id)

    @router.get('/projects/{project_id}/changes')
    def changes(project_id: UUID, after: int = Query(default=0, ge=0), limit: int = Query(default=100, ge=1, le=200)):
        # Durable pull outbox only; SSE and client subscriptions belong to C09.
        return projects.changes(project_id, after=after, limit=limit)

    @router.put('/projects/{project_id}/uploads/{handle_id}', response_model=UploadInfo)
    async def upload(project_id: UUID, handle_id: UUID, request: Request,
                     x_museshow_session: UUID = Header(), x_asset_name: str = Header(max_length=4096),
                     x_asset_kind: MediaKind | None = Header(default=None)):
        writer = await run_in_threadpool(assets.uploads.begin, project_id, handle_id, str(x_museshow_session),
                                        unquote(x_asset_name), expected_kind=x_asset_kind)
        try:
            async for chunk in request.stream():
                await run_in_threadpool(writer.write, chunk)
            return await run_in_threadpool(writer.finish)
        finally:
            # Also runs on ClientDisconnect and cancelled request bodies.
            writer.abort()

    @router.get('/projects/{project_id}/uploads/{handle_id}', response_model=UploadInfo)
    def upload_info(project_id: UUID, handle_id: UUID, x_museshow_session: UUID = Header()):
        return assets.uploads.info(project_id, handle_id, str(x_museshow_session))

    @router.delete('/projects/{project_id}/uploads/{handle_id}', response_model=UploadInfo)
    def cancel_upload(project_id: UUID, handle_id: UUID, x_museshow_session: UUID = Header()):
        return assets.uploads.cancel(project_id, handle_id, str(x_museshow_session))

    @router.get('/projects/{project_id}/assets', response_model=list[Asset])
    def list_assets(project_id: UUID):
        return assets.list(project_id)

    @router.get('/projects/{project_id}/assets/{asset_id}', response_model=Asset)
    def describe_asset(project_id: UUID, asset_id: UUID):
        return assets.get(project_id, asset_id)

    @router.get('/projects/{project_id}/assets/{asset_id}/content')
    def content(project_id: UUID, asset_id: UUID, range_header: str | None = Header(default=None, alias='Range'),
                if_none_match: str | None = Header(default=None, alias='If-None-Match')):
        stream, asset = assets.open_media(project_id, asset_id)
        size, etag = asset.metadata.size, '"' + asset.fingerprint + '"'
        headers = {'Accept-Ranges': 'bytes', 'ETag': etag, 'Cache-Control': 'private, no-cache',
                   'X-Content-Type-Options': 'nosniff',
                   'Content-Disposition': ('attachment' if asset.kind == 'file' else 'inline')
                       + "; filename*=utf-8''" + quote(asset.name, safe='')}
        if range_header is None and if_none_match == etag:
            stream.close()
            return Response(status_code=304, headers=headers)
        start, end = 0, size - 1
        if range_header is not None:
            try:
                match = re.fullmatch(r'bytes=(\d*)-(\d*)', range_header) if len(range_header) <= 128 else None
                if match is None or not any(match.groups()) or not size:
                    raise ValueError()
                first, last = match.groups()
                if first:
                    start, end = int(first), min(int(last), size - 1) if last else size - 1
                else:
                    suffix = int(last)
                    if suffix <= 0:
                        raise ValueError()
                    start = max(0, size - suffix)
                if start > end or start >= size:
                    raise ValueError()
            except ValueError:
                stream.close()
                return Response(status_code=416, headers={**headers, 'Content-Range': f'bytes */{size}'})
            headers['Content-Range'] = f'bytes {start}-{end}/{size}'
        headers['Content-Length'] = str(end - start + 1)
        async def chunks():
            try:
                stream.seek(start)
                remaining = end - start + 1
                while remaining > 0:
                    data = await run_in_threadpool(stream.read, min(1024 * 1024, remaining))
                    if not data:
                        break
                    remaining -= len(data)
                    yield data
            finally:
                stream.close()
        return StreamingResponse(chunks(), status_code=206 if range_header else 200,
            media_type=asset.metadata.mimeType, headers=headers, background=BackgroundTask(stream.close))

    return router
