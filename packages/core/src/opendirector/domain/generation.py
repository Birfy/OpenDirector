"""Generation receipt identity and execution state, independent of adoption."""

from typing import Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field

from opendirector.domain.canvas import NodeKind
from opendirector.domain.projects import ProjectError


FailureStage = Literal['prepare', 'submit', 'poll', 'download', 'check', 'save', 'adopt', 'cancel']


class ResultCheck(BaseModel):
    model_config = ConfigDict(extra='forbid')
    status: Literal['passed', 'failed']
    facts: dict = Field(default_factory=dict)
    message: str
    humanReviewRequired: bool = True


class AdoptionDecision(BaseModel):
    model_config = ConfigDict(extra='forbid')
    status: Literal['adopted', 'candidate']
    reason: str | None = None
    message: str


class GenerationFailure(BaseModel):
    model_config = ConfigDict(extra='forbid', frozen=True)
    category: Literal['input', 'reference', 'authentication', 'permission', 'quota', 'rate_limit',
                      'temporary', 'submission_unknown', 'local', 'protocol', 'provider']
    stage: FailureStage
    message: str = Field(max_length=500)
    suggestion: str = Field(max_length=500)
    providerCode: str | None = Field(default=None, max_length=160)
    requestId: str | None = Field(default=None, max_length=200)
    httpStatus: int | None = Field(default=None, ge=100, le=599)
    providerStatus: Literal['failed', 'cancelled', 'expired'] | None = None


class GenerationError(ProjectError):
    def __init__(self, details: GenerationFailure, status=502, message=None):
        super().__init__(message or f'{details.message} {details.suggestion} 不会自动重新提交。', status)
        self.details = details


class GenerationReceipt(BaseModel):
    # Retain provider parameters and the existing input snapshot verbatim.
    model_config = ConfigDict(extra='allow')
    schemaVersion: Literal[1] = 1
    id: UUID
    nodeId: UUID
    kind: NodeKind
    status: Literal['queued', 'running', 'succeeded', 'failed', 'cancelled', 'interrupted']
    assetId: UUID | None = None
    adopted: bool = False  # Whether this result is the canvas node's selection.
    resumeAllowed: bool = False
    errorDetails: GenerationFailure | None = None
    phase: Literal['queued', 'submit', 'poll', 'download', 'save', 'adopt', 'complete'] | None = None
    recovery: Literal['submit', 'remote', 'download', 'local', 'review', 'retry', 'done'] | None = None
    adoptionPolicy: Literal['if_current', 'candidate_only'] | None = None
    inputSnapshot: dict | None = None
    technicalCheck: ResultCheck | None = None
    canvasAdoption: AdoptionDecision | None = None
