"""Generation receipt identity and execution state, independent of adoption."""

from typing import Literal

from pydantic import BaseModel, ConfigDict, Field

from opendirector.domain.projects import ProjectError


FailureStage = Literal['prepare', 'submit', 'poll', 'download', 'check', 'save', 'adopt', 'cancel']


class ResultCheck(BaseModel):
    model_config = ConfigDict(extra='forbid')
    status: Literal['passed', 'failed']
    facts: dict = Field(default_factory=dict)
    message: str
    humanReviewRequired: bool = True


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
