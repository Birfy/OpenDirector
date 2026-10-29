"""New-format project endpoints; existing workspace routes are not switched."""
from uuid import UUID

from fastapi import APIRouter, Header, Query

from museshow.domain.creation.commands import Command, CommandReceipt
from museshow.domain.creation.project import ProjectSnapshot
from museshow.domain.projects import ProjectError
from museshow.infrastructure.creation_projects import CreationProjects
from museshow_api.models import Session


def creation_routes(projects: CreationProjects):
    router = APIRouter(prefix='/api/creation', tags=['Unified creation projects'])

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

    return router
