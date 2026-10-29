"""Current canvas persistence, alongside the future /api/creation contracts."""
from uuid import UUID

from fastapi import APIRouter, Header
from pydantic import BaseModel, ConfigDict, Field, JsonValue

from museshow.infrastructure.workspace_documents import WorkspaceDocuments


class WorkspaceWrite(BaseModel):
    model_config = ConfigDict(extra='forbid')
    revision: int = Field(ge=0, strict=True)
    document: dict[str, JsonValue]


def workspace_routes(store):
    router = APIRouter(prefix='/api/projects', tags=['Canvas workspace'])
    documents = WorkspaceDocuments(store)

    @router.get('/{project_id}/workspace')
    def read(project_id: UUID):
        return documents.read(str(project_id))

    @router.put('/{project_id}/workspace')
    def save(project_id: UUID, value: WorkspaceWrite, x_museshow_session: UUID = Header()):
        return documents.save(str(project_id), value.document, value.revision, str(x_museshow_session))

    return router
