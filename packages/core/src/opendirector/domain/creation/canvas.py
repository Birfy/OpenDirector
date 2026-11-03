"""Shared node inheritance and the independent media-role axis."""
from typing import Annotated, Literal
from uuid import UUID

from pydantic import Field, model_validator

from .assets import AssetRef
from .base import Contract, Identifier, Point, Positive, ProjectEntity, unique
from .generation import GenerationSpec, ResolvedReference, validate_generation
from .models import ModelConfigPublic

CanvasKind = Literal['text', 'image', 'video', 'audio', 'file', 'group', 'timeline', 'subject', 'stack', 'tool', 'external']
MediaRole = Literal['empty', 'material', 'generation']

AUDIO_CARD_SIZE = (300, 112)
MEDIA_CARD_MIN = (160, 120)


def media_card_size(kind, media_width, media_height, base_width, base_height):
    """Keep a media card's envelope in step with the pixels it presents.

    The long edge of the existing card is retained so a portrait clip does not
    jump to a landscape placeholder when an editor publishes its result.
    """
    if kind == 'audio':
        return AUDIO_CARD_SIZE
    if kind not in {'image', 'video'} or not media_width or not media_height:
        return base_width, base_height
    long_edge = max(base_width, base_height)
    ratio = media_width / media_height
    width = long_edge if ratio >= 1 else long_edge * ratio
    height = long_edge / ratio if ratio >= 1 else long_edge
    return max(MEDIA_CARD_MIN[0], int(width + 0.5)), max(MEDIA_CARD_MIN[1], int(height + 0.5))


class GenerationSpecRef(Contract):
    objectType: Literal['generation_spec'] = 'generation_spec'
    id: UUID


class EditorRef(Contract):
    objectType: Literal['editor_document'] = 'editor_document'
    id: UUID
    kind: Literal['timeline', 'subject', 'stack', 'tool', 'director', 'layers', 'image_crop', 'media_edit']


class EmptyBinding(Contract):
    role: Literal['empty']
    draftSpec: GenerationSpecRef | None = None
    manualText: str | None = Field(default=None, max_length=1024 * 1024)


class MaterialBinding(Contract):
    role: Literal['material']
    objectRef: AssetRef


class GenerationBinding(Contract):
    role: Literal['generation']
    objectRef: GenerationSpecRef
    materialOverride: AssetRef | None = None


MediaBinding = Annotated[EmptyBinding | MaterialBinding | GenerationBinding, Field(discriminator='role')]


class EditorBinding(Contract):
    role: Literal['editor']
    objectRef: EditorRef


class ContainerBinding(Contract):
    role: Literal['container']


class CanvasItemBase(ProjectEntity):
    kind: CanvasKind
    title: str = Field(default='', max_length=255)
    position: Point = Field(default_factory=Point)
    width: Positive = 352
    height: Positive = 198
    zIndex: int = Field(default=0, strict=True)
    locked: bool = False
    visible: bool = True
    parentId: UUID | None = None
    tags: tuple[Identifier, ...] = ()

    @model_validator(mode='after')
    def presentation(self):
        if self.parentId == self.id:
            raise ValueError('Canvas item cannot be its own group parent')
        unique(self.tags, 'canvas tags')
        return self


class MediaCanvasItem(CanvasItemBase):
    binding: MediaBinding
    editors: tuple[EditorRef, ...] = ()

    @model_validator(mode='after')
    def media_role(self):
        if self.binding.role == 'generation' and self.binding.materialOverride is not None and self.binding.materialOverride.kind != self.kind:
            raise ValueError('A generation node can only retain an explicit output of the same kind')
        if self.binding.role == 'material' and self.binding.objectRef.kind != self.kind:
            raise ValueError('Material asset kind differs from canvas item kind')
        if self.binding.role == 'empty' and self.binding.manualText is not None and self.kind != 'text':
            raise ValueError('Only an empty text node can hold a manual text draft')
        if self.kind == 'file' and (self.binding.role == 'generation' or self.binding.role == 'empty' and self.binding.draftSpec):
            raise ValueError('File nodes cannot configure model generation')
        allowed_editors = {'image': {'layers', 'image_crop', 'media_edit'}, 'video': {'media_edit'}, 'audio': {'media_edit'}}.get(self.kind, set())
        if any(editor.kind not in allowed_editors for editor in self.editors):
            raise ValueError('Editor kind is incompatible with the media node')
        unique([editor.id for editor in self.editors], 'node editor references')
        unique([editor.kind for editor in self.editors], 'node editor kinds')
        return self


class TextCanvasItem(MediaCanvasItem):
    kind: Literal['text']


class ImageCanvasItem(MediaCanvasItem):
    kind: Literal['image']


class VideoCanvasItem(MediaCanvasItem):
    kind: Literal['video']


class AudioCanvasItem(MediaCanvasItem):
    kind: Literal['audio']


class FileCanvasItem(MediaCanvasItem):
    kind: Literal['file']


class EditorCanvasItem(CanvasItemBase):
    binding: EditorBinding

    @model_validator(mode='after')
    def document_kind(self):
        expected = 'director' if self.kind == 'external' else self.kind
        if self.binding.objectRef.kind != expected:
            raise ValueError('Editor document kind differs from canvas item kind')
        return self


class SubjectCanvasItem(EditorCanvasItem):
    kind: Literal['subject']


class TimelineCanvasItem(EditorCanvasItem):
    kind: Literal['timeline']


class StackCanvasItem(EditorCanvasItem):
    kind: Literal['stack']


class ToolCanvasItem(EditorCanvasItem):
    kind: Literal['tool']


class DirectorCanvasItem(EditorCanvasItem):
    kind: Literal['external']


class GroupCanvasItem(CanvasItemBase):
    kind: Literal['group']
    binding: ContainerBinding = Field(default_factory=lambda: ContainerBinding(role='container'))


CanvasItem = Annotated[TextCanvasItem | ImageCanvasItem | VideoCanvasItem | AudioCanvasItem | FileCanvasItem |
    SubjectCanvasItem | TimelineCanvasItem | StackCanvasItem | ToolCanvasItem | DirectorCanvasItem | GroupCanvasItem,
    Field(discriminator='kind')]

RoleAction = Literal['configure_generation', 'save_manual_text', 'upload_material', 'add_reference', 'accept_generation', 'select_result']


def role_after(role: MediaRole, action: RoleAction, *, accepted=True) -> MediaRole:
    """Pure transition guard. Only a successfully committed action locks purpose.

    C06 performs version checks and atomic writes. Clients cannot set a role.
    History replay is separate: undoing the initial accepted write may restore
    the original empty binding without deleting its retained asset or task.
    """
    allowed = {
        'configure_generation': ({'empty', 'generation'}, None),
        'save_manual_text': ({'empty', 'material'}, 'material'),
        'upload_material': ({'empty', 'material'}, 'material'),
        'add_reference': ({'empty', 'generation'}, 'generation'),
        'accept_generation': ({'empty', 'generation'}, 'generation'),
        'select_result': ({'generation'}, None),
    }
    if action not in allowed or role not in allowed[action][0]:
        raise ValueError('Operation is incompatible with the node role')
    return allowed[action][1] if accepted and allowed[action][1] else role


class NodeCapabilities(Contract):
    canEdit: bool
    canConfigureGeneration: bool
    canGenerate: bool
    canAcceptReferences: bool
    canUseAsReference: bool
    canPlay: bool
    canExport: bool
    canReplaceMaterial: bool


def node_capabilities(item: CanvasItem, *, spec: GenerationSpec | None = None,
                      model: ModelConfigPublic | None = None, references: tuple[ResolvedReference, ...] = (),
                      assetAvailable=False) -> NodeCapabilities:
    """UI projection only; commands must still enforce roles and versions."""
    role = item.binding.role
    editable = not item.locked
    configure = editable and item.kind in {'text', 'image', 'video', 'audio'} and (role in {'empty', 'generation'} or item.kind == 'text' and role == 'material')
    spec_ref = (item.binding.objectRef if role == 'generation' else item.binding.draftSpec if role == 'empty' else None)
    matching = spec is not None and spec_ref is not None and spec_ref.id == spec.id and spec.kind == item.kind
    generate = False
    if configure and matching and model is not None:
        try:
            validate_generation(spec, model, references)
            generate = True
        except ValueError:
            pass
    return NodeCapabilities(
        canEdit=editable and (role == 'editor' or role == 'material' and assetAvailable
                             or item.kind == 'text'
                             or role == 'generation' and item.kind in {'image', 'video', 'audio'} and assetAvailable),
        canConfigureGeneration=configure,
        canGenerate=generate,
        canAcceptReferences=configure and matching and model is not None
            and spec.modelConfigId == model.id and model.kind == ('agent' if item.kind == 'text' else item.kind)
            and bool(model.inputRules.allowedKinds),
        canUseAsReference=editable and assetAvailable and item.kind in {'text', 'image', 'video', 'audio'} and role in {'material', 'generation'},
        canPlay=assetAvailable and item.kind in {'video', 'audio'} or role == 'editor' and item.kind in {'timeline', 'external'},
        canExport=assetAvailable or role == 'editor',
        canReplaceMaterial=editable and role in {'empty', 'material'} and item.kind in {'text', 'image', 'video', 'audio', 'file'})
