"""Shots organize creative intent and asset choices independently of canvas layout."""

from typing import Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, model_serializer, model_validator

MediaRole = Literal["visual", "audio"]
OriginalAudioMode = Literal["keep", "mute"]
RETIRED_SHOT_FIELDS = frozenset({"narration", "targetDurationMs", "shotSize", "cameraMovement"})


class ShotCandidates(BaseModel):
    model_config = ConfigDict(extra="forbid")
    visual: list[UUID] = Field(default_factory=list, max_length=2000)
    audio: list[UUID] = Field(default_factory=list, max_length=1000)


class ShotSelection(BaseModel):
    model_config = ConfigDict(extra="forbid")
    visual: UUID | None = None
    audio: UUID | None = None


class _ShotFields(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: UUID
    revision: int = Field(default=1, ge=1)
    title: str = Field(default="新镜头", min_length=1, max_length=255)
    description: str = Field(default="", max_length=20000)
    # Read-only compatibility: retain retired fields when saving existing projects.
    narration: str = Field(default="", max_length=20000)
    targetDurationMs: int = Field(default=6000, gt=0, le=3600000)
    shotSize: str = Field(default="", max_length=100)
    cameraMovement: str = Field(default="", max_length=100)

    @model_validator(mode="before")
    @classmethod
    def discard_removed_metadata(cls, value):
        # Read old projects without restoring removed storyboard features.
        if isinstance(value, dict):
            return {key: item for key, item in value.items() if key not in {"referenceIds", "needsReview"}}
        return value

    @model_serializer(mode="wrap")
    def preserve_existing_legacy_fields(self, handler):
        value = handler(self)
        for key in RETIRED_SHOT_FIELDS - self.model_fields_set:
            value.pop(key, None)
        return value

    @model_validator(mode="after")
    def valid_fields(self):
        if not self.title.strip():
            raise ValueError("Invalid title")
        return self


class Shot(_ShotFields):
    candidates: ShotCandidates = Field(default_factory=ShotCandidates)
    selected: ShotSelection = Field(default_factory=ShotSelection)
    originalAudioMode: OriginalAudioMode = "keep"
    legacyVisualChoices: list[UUID] = Field(default_factory=list, max_length=2)

    @model_validator(mode="after")
    def valid_choices(self):
        for role in ("visual", "audio"):
            candidates = getattr(self.candidates, role)
            if len(set(candidates)) != len(candidates):
                raise ValueError("Duplicate candidate")
            chosen = getattr(self.selected, role)
            if chosen is not None and chosen not in candidates:
                raise ValueError("Selected asset must be a candidate")
        if len(set(self.legacyVisualChoices)) != len(self.legacyVisualChoices) or any(choice not in self.candidates.visual for choice in self.legacyVisualChoices):
            raise ValueError("Legacy choices must be unique candidates")
        if self.legacyVisualChoices and self.selected.visual is not None:
            raise ValueError("Unresolved visual choice cannot be adopted")
        return self


class _LegacyCandidates(BaseModel):
    model_config = ConfigDict(extra="forbid")
    image: list[UUID] = Field(default_factory=list, max_length=1000)
    video: list[UUID] = Field(default_factory=list, max_length=1000)
    audio: list[UUID] = Field(default_factory=list, max_length=1000)


class _LegacySelection(BaseModel):
    model_config = ConfigDict(extra="forbid")
    image: UUID | None = None
    video: UUID | None = None
    audio: UUID | None = None


class _LegacyShot(_ShotFields):
    candidates: _LegacyCandidates = Field(default_factory=_LegacyCandidates)
    selected: _LegacySelection = Field(default_factory=_LegacySelection)

    @model_validator(mode="after")
    def valid_choices(self):
        for kind in ("image", "video", "audio"):
            candidates = getattr(self.candidates, kind)
            if len(set(candidates)) != len(candidates) or (getattr(self.selected, kind) is not None and getattr(self.selected, kind) not in candidates):
                raise ValueError("Invalid legacy candidates or adoption")
        return self


class _LegacyState(BaseModel):
    model_config = ConfigDict(extra="forbid")
    version: Literal[1]
    revision: int = Field(default=0, ge=0)
    orderRevision: int = Field(default=0, ge=0)
    shots: list[_LegacyShot] = Field(default_factory=list, max_length=500)


class StoryboardState(BaseModel):
    model_config = ConfigDict(extra="forbid")
    version: Literal[2] = 2
    revision: int = Field(default=0, ge=0)
    orderRevision: int = Field(default=0, ge=0)
    shots: list[Shot] = Field(default_factory=list, max_length=500)

    @model_validator(mode="before")
    @classmethod
    def upgrade_v1(cls, value):
        if not isinstance(value, dict) or value.get("version") != 1:
            return value
        legacy = _LegacyState.model_validate(value).model_dump(mode="json")
        shots = []
        for old in legacy["shots"]:
            choices = list(dict.fromkeys(asset_id for asset_id in (old["selected"]["image"], old["selected"]["video"]) if asset_id))
            shots.append({**old,
                "candidates": {"visual": list(dict.fromkeys([*old["candidates"]["image"], *old["candidates"]["video"]])), "audio": old["candidates"]["audio"]},
                "selected": {"visual": choices[0] if len(choices) == 1 else None, "audio": old["selected"]["audio"]},
                "legacyVisualChoices": choices if len(choices) > 1 else []})
        return {**legacy, "version": 2, "shots": shots}

    @model_validator(mode="after")
    def unique_shots(self):
        if len({shot.id for shot in self.shots}) != len(self.shots):
            raise ValueError("Duplicate shot")
        return self


def shot_asset_ids(shot):
    return [asset_id for ids in shot["candidates"].values() for asset_id in ids]
