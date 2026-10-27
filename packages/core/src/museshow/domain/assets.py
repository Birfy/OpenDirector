"""Project asset contracts. Creative documents and selection are separate objects."""

from datetime import datetime
from typing import Annotated, Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, TypeAdapter, model_validator

from museshow.domain.input_rules import MAX_REFERENCES
from museshow.domain.references import ReferenceContent

MAX_ASSET_BYTES = 50 * 1024 * 1024
MAX_TEXT_BYTES = 1024 * 1024
AssetPurpose = Literal["reference", "document", "character", "scene", "keyframe", "shot_video", "narration", "music", "sound_effect"]
PURPOSES = {
    "text": {"reference", "document"},
    "image": {"reference", "character", "scene", "keyframe"},
    "video": {"reference", "shot_video"},
    "audio": {"reference", "narration", "music", "sound_effect"},
    "other": {"reference"},
}


class GenerationInputs(BaseModel):
    """Original inputs for agent-saved text, which has no media task receipt."""
    model_config = ConfigDict(extra='forbid')
    promptContent: ReferenceContent | None = None
    prompt: str = Field(max_length=20000)
    referenceIds: list[UUID] = Field(default_factory=list, max_length=MAX_REFERENCES)
    referenceFingerprints: dict[UUID, str] = Field(default_factory=dict)
    modelName: str = Field(max_length=200)
    modelURL: str = Field(max_length=2048)


class AssetBase(BaseModel):
    model_config = ConfigDict(extra="forbid")

    schemaVersion: Literal[1] = 1
    id: UUID
    projectId: UUID | None
    name: str = Field(min_length=1, max_length=255)
    type: str = Field(max_length=255)
    size: int = Field(ge=0, le=MAX_ASSET_BYTES)
    fingerprint: str = Field(max_length=1000)
    fingerprintAliases: list[str] = Field(default_factory=list, max_length=8)
    path: str
    createdAt: datetime | None
    source: Literal["upload", "manual", "generated", "legacy"]
    scope: Literal["project", "attachment"]
    initialPlacement: Literal['canvas', 'library'] = 'canvas'
    revision: int = Field(default=1, ge=1)
    purpose: AssetPurpose = "reference"
    referenceIds: list[UUID] = Field(default_factory=list, max_length=MAX_REFERENCES)
    generationTaskId: UUID | None = None
    modelConfigId: UUID | None = None
    agentRunId: UUID | None = None
    generationInputs: GenerationInputs | None = None
    productionPlanId: UUID | None = None
    productionStepId: UUID | None = None
    shotId: UUID | None = None

    @model_validator(mode="after")
    def validate_identity(self):
        if self.path != f"assets/{self.id}":
            raise ValueError("Asset paths must be relative to their stable ID")
        if self.purpose not in PURPOSES[self.kind]:
            raise ValueError("Purpose does not match asset kind")
        if self.id in self.referenceIds or len(self.referenceIds) != len(set(self.referenceIds)):
            raise ValueError("Asset references must be unique and cannot reference self")
        return self


class TextAsset(AssetBase):
    kind: Literal["text"] = "text"
    format: Literal["plain", "markdown"]
    encoding: Literal["utf-8"] | None = None


class ImageAsset(AssetBase):
    kind: Literal["image"] = "image"
    width: int | None = Field(default=None, gt=0)
    height: int | None = Field(default=None, gt=0)


class VideoAsset(AssetBase):
    kind: Literal["video"] = "video"
    width: int | None = Field(default=None, gt=0)
    height: int | None = Field(default=None, gt=0)
    durationMs: int | None = Field(default=None, ge=0)
    frameRate: float | None = Field(default=None, gt=0, allow_inf_nan=False)
    hasAudio: bool | None = None


class AudioAsset(AssetBase):
    kind: Literal["audio"] = "audio"
    durationMs: int | None = Field(default=None, ge=0)
    sampleRate: int | None = Field(default=None, gt=0)
    channels: int | None = Field(default=None, gt=0)


class LegacyAsset(AssetBase):
    """Read-only compatibility for historical attachments such as PDFs."""

    kind: Literal["other"] = "other"


ProjectAsset = Annotated[TextAsset | ImageAsset | VideoAsset | AudioAsset | LegacyAsset, Field(discriminator="kind")]
asset_adapter = TypeAdapter(ProjectAsset)


def attachment(value: dict) -> dict:
    """Keep the existing conversation attachment contract independent of catalog metadata."""
    return {key: value[key] for key in ("id", "name", "type", "size", "fingerprint")}


def fingerprint_matches(asset, value):
    return value == asset['fingerprint'] or value in asset.get('fingerprintAliases', [])


def canonical_fingerprints(value, records):
    """Normalize comparison values without rewriting immutable generation evidence."""
    if isinstance(value, list):
        return [canonical_fingerprints(item, records) for item in value]
    if isinstance(value, dict):
        result = {key: canonical_fingerprints(item, records) for key, item in value.items()}
        asset = records.get(value.get('assetId'))
        if asset and value.get('fingerprint') and fingerprint_matches(asset, value['fingerprint']):
            result['fingerprint'] = asset['fingerprint']
        return result
    return value
