"""Frame-based playback and saved adjustments to the storyboard sequence."""

from typing import Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, model_validator

AudioTrack = Literal["original", "narration"]


class TrackMutes(BaseModel):
    model_config = ConfigDict(extra="forbid")
    original: bool = False
    narration: bool = False


class TimelineClip(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: UUID
    shotId: UUID
    title: str = Field(min_length=1, max_length=255)
    assetId: UUID
    kind: Literal["image", "video", "audio"]
    track: Literal["visual", "original", "narration"]
    startFrame: int = Field(ge=0)
    durationFrames: int = Field(gt=0)
    sourceInFrame: int = Field(default=0, ge=0)
    sourceOutFrame: int | None = Field(default=None, gt=0)
    muted: bool = False
    muteOverride: bool = False

    @model_validator(mode="after")
    def valid_media(self):
        if (self.track == "visual") != (self.kind in {"image", "video"}):
            raise ValueError("Track and media kind differ")
        if self.kind == "image":
            if self.sourceInFrame or self.sourceOutFrame is not None or self.muted:
                raise ValueError("Images have no source time or audio")
        elif self.sourceOutFrame is None or self.sourceOutFrame - self.sourceInFrame != self.durationFrames:
            raise ValueError("Source interval must match clip duration")
        if self.track == "visual" and self.muted:
            raise ValueError("Original audio is controlled on its own track")
        return self


class TimelineState(BaseModel):
    model_config = ConfigDict(extra="forbid")
    version: Literal[1] = 1
    revision: int = Field(default=0, ge=0)
    frameRate: Literal[30] = 30
    sourceStoryboardRevision: int | None = Field(default=None, ge=0)
    trackMutes: TrackMutes = Field(default_factory=TrackMutes)
    clips: list[TimelineClip] = Field(default_factory=list, max_length=1500)

    @model_validator(mode="after")
    def valid_sequence(self):
        if len({clip.id for clip in self.clips}) != len(self.clips):
            raise ValueError("Duplicate clip")
        visuals = [clip for clip in self.clips if clip.track == "visual"]
        if len(visuals) > 500 or len({clip.shotId for clip in visuals}) != len(visuals):
            raise ValueError("Invalid shot sequence")
        cursor = 0
        for clip in visuals:
            if clip.startFrame != cursor:
                raise ValueError("Visual clips must be contiguous and ordered")
            cursor += clip.durationFrames
        slots = {clip.shotId: clip for clip in visuals}
        used = set()
        for clip in self.clips:
            if clip.track == "visual":
                continue
            visual = slots.get(clip.shotId)
            key = (clip.shotId, clip.track)
            if not visual or key in used or clip.startFrame != visual.startFrame or clip.durationFrames > visual.durationFrames:
                raise ValueError("Audio must fit its shot")
            if clip.track == "original" and (visual.kind != "video" or clip.assetId != visual.assetId or clip.durationFrames != visual.durationFrames):
                raise ValueError("Original audio must follow its video")
            used.add(key)
        if self.clips and self.sourceStoryboardRevision is None:
            raise ValueError("A sequence must record its source revision")
        return self


def media_frames(duration_ms, fps=30):
    return (duration_ms * fps + 999) // 1000


