"""Versioned JSON contracts for the new project format; no storage or UI code."""
from typing import Annotated, Literal
from uuid import UUID
import hashlib
import json

from pydantic import BaseModel, ConfigDict, Field

Number = Annotated[float, Field(strict=True, allow_inf_nan=False)]
NonNegative = Annotated[float, Field(strict=True, ge=0, allow_inf_nan=False)]
Positive = Annotated[float, Field(strict=True, gt=0, allow_inf_nan=False)]
Revision = Annotated[int, Field(strict=True, ge=1)]
PositiveInt = Annotated[int, Field(strict=True, ge=1)]
Identifier = Annotated[str, Field(min_length=1, max_length=100, pattern=r'\S')]
Fingerprint = Annotated[str, Field(pattern=r'^sha256:[0-9a-f]{64}$')]
Digest = Annotated[str, Field(pattern=r'^[0-9a-f]{64}$')]
MediaKind = Literal['text', 'image', 'video', 'audio', 'file']
GenerationKind = Literal['text', 'image', 'video', 'audio']


class Contract(BaseModel):
    model_config = ConfigDict(extra='forbid', frozen=True, allow_inf_nan=False,
                             json_schema_serialization_defaults_required=True)


class ProjectEntity(Contract):
    id: UUID
    projectId: UUID
    revision: Revision = 1


class ObjectVersion(Contract):
    objectType: Literal['project', 'asset', 'generation_spec', 'reference', 'canvas_item', 'editor_document', 'job', 'result']
    id: UUID
    revision: Revision


class Point(Contract):
    x: Number = 0
    y: Number = 0


def digest(value: Contract, *, exclude=None) -> str:
    """Stable normalized JSON identity. Persistence/idempotent replay is C03."""
    encoded = json.dumps(value.model_dump(mode='json', exclude=exclude), ensure_ascii=False, sort_keys=True,
                         separators=(',', ':'), allow_nan=False).encode()
    return hashlib.sha256(encoded).hexdigest()


def unique(values, label):
    if len(values) != len(set(values)):
        raise ValueError(f'Duplicate {label}')
