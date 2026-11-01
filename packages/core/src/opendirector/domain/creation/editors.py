"""Typed retained editors. AssetRef replaces transient src/data/blob URLs."""
from typing import Annotated, Literal
from uuid import UUID

from pydantic import Field, StrictBool, StrictFloat, StrictInt, StrictStr, model_validator

from .assets import AssetRef
from .base import Contract, Identifier, NonNegative, Number, Point, Positive, PositiveInt, ProjectEntity, unique

Color = Annotated[str, Field(pattern=r'^#[0-9a-fA-F]{6}$')]
Unit = Annotated[float, Field(strict=True, ge=0, le=1)]


class TimelineResource(Contract):
    asset: AssetRef
    title: str = Field(max_length=255)
    durationSeconds: Positive | None = None

    @model_validator(mode='after')
    def media(self):
        if self.asset.kind not in {'image', 'video', 'audio'}:
            raise ValueError('Timeline resources must be image, video or audio')
        return self


class TimelineClip(Contract):
    id: Identifier
    resource: TimelineResource
    start: NonNegative | None = None
    inPoint: NonNegative
    outPoint: Positive
    speed: Positive = 1
    volume: Unit = 1
    muted: bool = False

    @model_validator(mode='after')
    def source_interval(self):
        if self.outPoint <= self.inPoint:
            raise ValueError('Source out point must follow the in point')
        if self.resource.asset.kind != 'image' and self.resource.durationSeconds is not None and self.outPoint > self.resource.durationSeconds + 1e-6:
            raise ValueError('Clip exceeds known source duration')
        return self

    def duration(self):
        return (self.outPoint - self.inPoint) / self.speed


class TimelineTrack(Contract):
    id: Identifier
    kind: Literal['visual', 'audio']
    title: str = Field(max_length=255)
    muted: bool = False
    clips: tuple[TimelineClip, ...] = ()

    @model_validator(mode='after')
    def placement(self):
        intervals = []
        for clip in self.clips:
            media = clip.resource.asset.kind
            if self.kind == 'visual':
                if media not in {'image', 'video'} or clip.start is not None:
                    raise ValueError('Visual placement follows clip order')
                if media == 'image' and (clip.inPoint != 0 or clip.speed != 1):
                    raise ValueError('Images use display duration, not source trim or speed')
            else:
                if media != 'audio' or clip.start is None:
                    raise ValueError('Audio clips need an explicit start and audio source')
                intervals.append((clip.start, clip.start + clip.duration()))
        intervals.sort()
        if any(current[0] < previous[1] - 1e-6 for previous, current in zip(intervals, intervals[1:])):
            raise ValueError('Clips on the same audio track cannot overlap')
        return self


class TimelineData(Contract):
    fps: PositiveInt
    width: PositiveInt
    height: PositiveInt
    tracks: tuple[TimelineTrack, ...] = Field(min_length=1)
    importedAssets: tuple[TimelineResource, ...] = ()

    @model_validator(mode='after')
    def tracks_and_clips(self):
        unique([track.id for track in self.tracks], 'timeline track IDs')
        unique([clip.id for track in self.tracks for clip in track.clips], 'timeline clip IDs')
        if sum(track.kind == 'visual' for track in self.tracks) != 1:
            raise ValueError('A timeline requires exactly one visual track')
        return self


class SubjectLibrarySource(Contract):
    """Frozen import provenance; subsequent editing never follows the library."""
    itemId: UUID
    revision: int = Field(ge=1, strict=True)
    importId: UUID


class SubjectData(Contract):
    description: str = Field(default='', max_length=20000,
        description='User-facing annotation only; not subject media or a generation reference')
    category: str = Field(default='', max_length=100)
    main: AssetRef | None = None
    auxiliaries: tuple[AssetRef, ...] = Field(default=(), max_length=3)
    voice: AssetRef | None = None
    librarySource: SubjectLibrarySource | None = None

    @model_validator(mode='after')
    def source_roles(self):
        if self.main and self.main.kind not in {'image', 'video'}:
            raise ValueError('Subject main source must be image or video')
        if any(asset.kind != 'image' for asset in self.auxiliaries) or self.voice and self.voice.kind != 'audio':
            raise ValueError('Invalid subject auxiliary or voice source')
        if not self.main and (self.auxiliaries or self.voice):
            raise ValueError('Subject auxiliary sources require a main source')
        if self.main and self.main.kind == 'video' and (self.auxiliaries or self.voice):
            raise ValueError('Video subjects cannot contain auxiliary images or independent audio')
        unique([asset.assetId for asset in (self.main, *self.auxiliaries, self.voice) if asset], 'subject sources')
        return self


class StackData(Contract):
    nodeIds: tuple[UUID, ...] = ()
    activeIndex: int = Field(default=0, strict=True, ge=0)

    @model_validator(mode='after')
    def selection(self):
        unique(self.nodeIds, 'stack node IDs')
        if self.activeIndex >= max(1, len(self.nodeIds)):
            raise ValueError('Stack selection is outside its items')
        return self


class ToolField(Contract):
    name: str = Field(min_length=1, max_length=200)
    values: tuple[str, ...]


class PaletteProvenance(Contract):
    paletteId: Identifier
    version: PositiveInt


class PaletteData(Contract):
    name: str | None = Field(default=None, max_length=255)
    sourceImage: AssetRef | None = None

    @model_validator(mode='after')
    def image(self):
        if self.sourceImage and self.sourceImage.kind != 'image':
            raise ValueError('Palette source must be an image')
        return self


class ToolData(Contract):
    kind: Literal['camera', 'style', 'palette', 'camera_motion']
    fields: tuple[ToolField, ...] = ()
    provenance: PaletteProvenance | None = None
    palette: PaletteData | None = None


class MaskStroke(Contract):
    mode: Literal['erase', 'restore']
    size: Annotated[float, Field(strict=True, ge=1, le=4096)]
    points: tuple[Point, ...] = Field(min_length=1, max_length=200000)


class LayerContentBase(Contract):
    width: Annotated[int, Field(strict=True, ge=1, le=8192)]
    height: Annotated[int, Field(strict=True, ge=1, le=8192)]

    @model_validator(mode='after')
    def pixel_limit(self):
        if self.width * self.height > 16777216:
            raise ValueError('Layer content exceeds the existing pixel limit')
        return self


class ImageLayerContent(LayerContentBase):
    kind: Literal['image']
    asset: AssetRef

    @model_validator(mode='after')
    def image(self):
        if self.asset.kind != 'image':
            raise ValueError('Image layers require image assets')
        return self


class TextLayerContent(LayerContentBase):
    kind: Literal['text']
    text: str = Field(max_length=10000)
    color: Color
    fontSize: Annotated[float, Field(strict=True, ge=4, le=1000)]


class RectangleLayerContent(LayerContentBase):
    kind: Literal['rectangle']
    color: Color


LayerContent = Annotated[ImageLayerContent | TextLayerContent | RectangleLayerContent, Field(discriminator='kind')]


class ImageLayer(Contract):
    id: Identifier
    name: str = Field(max_length=200)
    visible: bool = True
    locked: bool = False
    opacity: Unit = 1
    x: Number = 0
    y: Number = 0
    width: Annotated[float, Field(strict=True, gt=0, le=8192)]
    height: Annotated[float, Field(strict=True, gt=0, le=8192)]
    rotation: Number = 0
    flipX: bool = False
    flipY: bool = False
    content: LayerContent
    mask: tuple[MaskStroke, ...] = Field(default=(), max_length=2000)


class LayerData(LayerContentBase):
    background: str = Field(default='transparent', pattern=r'^(transparent|#[0-9a-fA-F]{6})$')
    layers: tuple[ImageLayer, ...] = Field(default=(), max_length=40)

    @model_validator(mode='after')
    def limits(self):
        if self.width * self.height > 16777216:
            raise ValueError('Layer canvas exceeds the existing pixel limit')
        unique([layer.id for layer in self.layers], 'layer IDs')
        if sum(len(stroke.points) for layer in self.layers for stroke in layer.mask) > 200000:
            raise ValueError('Layer masks exceed the existing point limit')
        return self


class Vector3(Contract):
    x: Number
    y: Number
    z: Number


class StageTransform(Contract):
    position: Vector3
    rotation: Vector3
    scale: Vector3

    @model_validator(mode='after')
    def positive_scale(self):
        if min(self.scale.x, self.scale.y, self.scale.z) <= 0:
            raise ValueError('Stage scale must be positive')
        return self


class TransformFrame(Contract):
    id: Identifier
    time: NonNegative
    value: StageTransform


class StageMotion(Contract):
    preset: Literal['idle', 'walk', 'run', 'wave']
    speed: Positive
    amount: Unit


class MotionClip(Contract):
    id: Identifier
    start: NonNegative
    duration: Positive
    motion: StageMotion


class StageObject(StageTransform):
    id: Identifier
    kind: Literal['person', 'box', 'sphere']
    name: str = Field(max_length=255)
    color: Color
    keyframes: tuple[TransformFrame, ...] = ()
    motionClips: tuple[MotionClip, ...] = ()


class StageCamera(Contract):
    position: Vector3
    target: Vector3
    fov: Annotated[float, Field(strict=True, gt=0, lt=180)]

    @model_validator(mode='after')
    def direction(self):
        if self.position == self.target:
            raise ValueError('Camera position and target must differ')
        return self


class CameraFrame(Contract):
    id: Identifier
    time: NonNegative
    value: StageCamera


class CameraRig(Contract):
    id: Identifier
    name: str = Field(max_length=255)
    pose: StageCamera
    keyframes: tuple[CameraFrame, ...] = ()


class StageShot(Contract):
    id: Identifier
    cameraId: Identifier
    start: NonNegative
    duration: Positive


def check_frames(frames, duration):
    unique([frame.id for frame in frames], 'keyframe IDs')
    unique([frame.time for frame in frames], 'keyframe times')
    if any(frame.time > duration for frame in frames):
        raise ValueError('Keyframe exceeds stage duration')


def check_intervals(items, duration):
    unique([item.id for item in items], 'interval IDs')
    ordered = sorted(items, key=lambda item: item.start)
    if any(item.start + item.duration > duration + 1e-8 for item in ordered):
        raise ValueError('Interval exceeds stage duration')
    if any(a.start + a.duration > b.start + 1e-8 for a, b in zip(ordered, ordered[1:])):
        raise ValueError('Stage intervals cannot overlap')


class DirectorData(Contract):
    background: Color
    grid: bool = True
    duration: Positive
    aspectRatio: Literal['16:9', '9:16', '1:1', '4:3', '3:4'] = '16:9'
    cameras: tuple[CameraRig, ...] = Field(min_length=1)
    activeCameraId: Identifier
    cameraSource: Literal['camera', 'storyboard'] = 'camera'
    shots: tuple[StageShot, ...] = ()
    objects: tuple[StageObject, ...] = ()

    @model_validator(mode='after')
    def stage_relations(self):
        camera_ids = [camera.id for camera in self.cameras]
        unique(camera_ids, 'camera IDs')
        unique([obj.id for obj in self.objects], 'stage object IDs')
        if self.activeCameraId not in camera_ids or any(shot.cameraId not in camera_ids for shot in self.shots):
            raise ValueError('Stage references an unknown camera')
        check_intervals(self.shots, self.duration)
        if self.cameraSource == 'storyboard' and not self.shots:
            raise ValueError('Local camera-shot playback needs shots')
        for camera in self.cameras:
            check_frames(camera.keyframes, self.duration)
        for obj in self.objects:
            check_frames(obj.keyframes, self.duration)
            check_intervals(obj.motionClips, self.duration)
        return self


class ToolSelection(Contract):
    source: AssetRef
    width: PositiveInt
    height: PositiveInt
    mask: AssetRef | None = None
    boxes: tuple['SelectionBox', ...] = ()

    @model_validator(mode='after')
    def mask_image(self):
        if self.mask and self.mask.kind != 'image':
            raise ValueError('Tool mask must be an image asset')
        return self


class SelectionBox(Contract):
    x: Number
    y: Number
    width: Positive
    height: Positive


ToolId = Literal['layers', 'crop', 'smart-edit', 'outpaint', 'cutout', 'inpainting-remove', 'image-hd',
    'view-control', 'lighting', 'layer-decompose', 'panorama', 'product-replacement', 'multi-size',
    'dynamic-poster', 'ecommerce-main', 'image-presets', 'grid-split', 'composition', 'annotation',
    'video-edit', 'video-extend', 'video-partial-reshoot', 'video-upscale', 'video-frame-interpolation',
    'video-depth-capture', 'video-subtitle-erasure', 'video-matting', 'video-crop', 'video-translation',
    'extract-audio', 'audio-separation', 'video-trim', 'audio-trim', 'video-frame-capture', 'director-stage']


class MediaEditData(Contract):
    tool: ToolId
    sources: tuple[AssetRef, ...] = ()
    parameters: dict[Annotated[str, Field(min_length=1, max_length=100)],
                     Annotated[StrictStr, Field(max_length=20000)] | StrictBool | StrictInt | StrictFloat] = Field(default_factory=dict, max_length=100)
    selection: ToolSelection | None = None


class EditorInputConnection(Contract):
    """Assembly provenance binds a retained slot, never a generation spec."""
    id: UUID
    sourceId: UUID
    slotId: Identifier
    asset: AssetRef


class EditorDocumentBase(ProjectEntity):
    schemaVersion: Literal[1] = 1
    inputConnections: tuple[EditorInputConnection, ...] = ()

    @model_validator(mode='after')
    def assembly_connections(self):
        unique([value.id for value in self.inputConnections], 'assembly connection IDs')
        unique([value.sourceId for value in self.inputConnections], 'assembly source IDs')
        unique([value.slotId for value in self.inputConnections], 'assembly destination slots')
        if self.inputConnections and self.kind == 'subject' and self.data.main and self.data.main.kind == 'video' and (self.data.auxiliaries or self.data.voice):
            raise ValueError('Video subject assembly cannot contain auxiliary images or independent audio')
        for value in self.inputConnections:
            if self.kind == 'subject':
                source = self.data.main if value.slotId == 'main' else next(
                    (asset for asset in self.data.auxiliaries if str(asset.assetId) == value.slotId), None)
                allowed = {'image', 'video'}
            elif self.kind == 'timeline':
                clip = next((clip for track in self.data.tracks for clip in track.clips if clip.id == value.slotId), None)
                source = clip.resource.asset if clip else None
                allowed = {'image', 'video', 'audio'}
            else:
                raise ValueError('Only subject and timeline documents accept assembly connections')
            if source is None or source != value.asset or source.kind not in allowed:
                raise ValueError('Assembly connection must own an existing compatible retained slot')
        return self


class TimelineDocument(EditorDocumentBase):
    kind: Literal['timeline']
    data: TimelineData


class SubjectDocument(EditorDocumentBase):
    kind: Literal['subject']
    data: SubjectData


class LayerDocument(EditorDocumentBase):
    kind: Literal['layers']
    data: LayerData


class StackDocument(EditorDocumentBase):
    kind: Literal['stack']
    data: StackData


class ToolDocument(EditorDocumentBase):
    kind: Literal['tool']
    data: ToolData


class DirectorDocument(EditorDocumentBase):
    kind: Literal['director']
    data: DirectorData


class MediaEditDocument(EditorDocumentBase):
    kind: Literal['media_edit']
    data: MediaEditData


EditorDocument = Annotated[TimelineDocument | SubjectDocument | LayerDocument | StackDocument |
    ToolDocument | DirectorDocument | MediaEditDocument, Field(discriminator='kind')]
