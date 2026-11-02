from typing import Literal
from uuid import UUID

from pydantic import model_validator, BaseModel, ConfigDict, Field, SecretStr

from opendirector.domain.creation.editors import ToolDraftBinding
from opendirector.domain.input_rules import MAX_REFERENCES, VideoMode
from opendirector.domain.references import ReferenceContent, project_content
from opendirector.domain.assets import AssetPurpose
from opendirector.domain.canvas import NodeKind
from opendirector.domain.canvas_layout import CANVAS_LIMIT, Coordinate, Height
from opendirector.domain.video_capabilities import VideoAdapter, VideoCapabilities


class Model(BaseModel):
    model_config = ConfigDict(extra="forbid")


class ProjectCreate(Model):
    id: UUID
    name: str = Field(min_length=1, max_length=100)


class ProjectRename(Model):
    name: str = Field(min_length=1, max_length=100)
    expectedName: str


class Session(Model):
    projectId: UUID


class Asset(Model):
    id: UUID
    name: str = Field(max_length=255)
    type: str = Field(max_length=255)
    size: int = Field(ge=0, le=50 * 1024 * 1024)
    fingerprint: str = Field(max_length=1000)


class TextAssetCreate(Model):
    id: UUID
    name: str = Field(min_length=1, max_length=255)
    text: str = Field(max_length=1024 * 1024)


class AssetUpdate(Model):
    expectedRevision: int = Field(ge=1)
    name: str = Field(min_length=1, max_length=255)
    purpose: AssetPurpose
    referenceIds: list[UUID] = Field(default_factory=list, max_length=64)


class AssetProbe(Model):
    expectedRevision: int = Field(ge=1)


class AssetDelete(Model):
    expectedState: str = Field(pattern=r'^[0-9a-f]{64}$')
    clearHistory: bool = False


class AssetSelection(Model):
    assetIds: list[UUID] = Field(min_length=1, max_length=100)


class AssetBatchDelete(AssetDelete, AssetSelection):
    pass


class CanvasReferenceSelection(Model):
    nodeId: UUID
    assetId: UUID
    fingerprint: str = Field(min_length=1, max_length=1000)


class ChatReferenceValidation(Model):
    content: ReferenceContent
    selections: list[CanvasReferenceSelection] = Field(min_length=1, max_length=500)

    @model_validator(mode='after')
    def valid_content(self):
        project_content(self.content)
        if len({selection.nodeId for selection in self.selections}) != len(self.selections):
            raise ValueError('Duplicate canvas selection')
        return self


class Message(Model):
    referenceInputs: list[dict] = Field(default_factory=list, max_length=MAX_REFERENCES)
    content: ReferenceContent | None = Field(default=None, exclude_if=lambda value: value is None)
    id: UUID
    role: Literal["user", "assistant"]
    text: str = Field(max_length=200000)
    assets: list[Asset] = Field(max_length=MAX_REFERENCES)
    model: str = Field(max_length=200)
    thinking: Literal["auto", "low", "medium", "high"]
    status: Literal["complete", "streaming", "stopped", "interrupted"]
    source: Literal["preview", "model"] = "preview"

    @model_validator(mode="after")
    def inline_references(self):
        if self.content is not None:
            self.text, ids = project_content(self.content)
            actual = [str(item.id) for item in self.assets]
            if ids != actual:
                raise ValueError("正文引用与参考资产不一致")
        return self


class Draft(Model):
    draftContent: ReferenceContent | None = Field(default=None, exclude_if=lambda value: value is None)
    draft: str = Field(max_length=20000)
    assets: list[Asset] = Field(max_length=MAX_REFERENCES)
    thinking: Literal["auto", "low", "medium", "high"]
    modelSelections: dict[Literal["agent", "image", "video", "audio"], UUID | None] = Field(default_factory=dict)

    @model_validator(mode="after")
    def inline_references(self):
        if self.draftContent is not None:
            self.draft, ids = project_content(self.draftContent)
            actual = [str(item.id) for item in self.assets]
            if ids != actual:
                raise ValueError("正文引用与参考资产不一致")
        return self


class Conversation(Draft):
    messages: list[Message] = Field(max_length=10000)
    # Accept old conversation files, but only modelSelections is saved/returned.
    model: str = Field(default="auto", max_length=100, exclude=True)


class ProjectFromMessage(Draft):
    id: UUID
    turnId: UUID
    modelId: UUID


class ChatRequest(Model):
    content: ReferenceContent | None = Field(default=None, exclude_if=lambda value: value is None)
    id: UUID
    modelId: UUID
    text: str = Field(max_length=20000)
    assets: list[UUID] = Field(default_factory=list, max_length=MAX_REFERENCES)
    thinking: Literal["auto", "low", "medium", "high"] = "auto"
    modelSelections: dict[Literal["agent", "image", "video", "audio"], UUID | None] = Field(default_factory=dict)
    selectedNodeId: UUID | None = None

    @model_validator(mode="after")
    def inline_references(self):
        if self.content is not None:
            self.text, ids = project_content(self.content)
            actual = [str(item) for item in self.assets]
            if ids != actual:
                raise ValueError("正文引用与参考资产不一致")
        return self


class NodeCreate(Model):
    title: str = Field(default="", max_length=255)
    logicalNodeId: str | None = Field(default=None, min_length=1, max_length=255, exclude_if=lambda value: value is None)
    sourceRole: str | None = Field(default=None, max_length=100, exclude_if=lambda value: value is None)

    id: UUID
    kind: NodeKind
    x: Coordinate | None = None
    y: Coordinate | None = None
    assetId: UUID | None = None


class CanvasConnect(Model):
    sourceId: UUID
    assetId: UUID
    targetId: UUID
    expectedRevision: int | None = Field(default=None, ge=1)
    kind: NodeKind | None = None
    x: Coordinate = 40
    y: Coordinate = 40
    modelConfigId: UUID | None = None
    videoMode: VideoMode = 'first_frame'


class CanvasDisconnect(Model):
    expectedRevision: int = Field(ge=1)


class NodePatch(Model):
    videoMode: VideoMode | None = None
    promptContent: ReferenceContent | None = None
    expectedRevision: int = Field(ge=1)
    x: float | None = Field(default=None, ge=-CANVAS_LIMIT, le=CANVAS_LIMIT, allow_inf_nan=False)
    y: float | None = Field(default=None, ge=-CANVAS_LIMIT, le=CANVAS_LIMIT, allow_inf_nan=False)
    title: str | None = Field(default=None, max_length=255)
    prompt: str | None = Field(default=None, max_length=20000)
    draft: str | None = Field(default=None, max_length=1024 * 1024)
    modelConfigId: UUID | None = None
    referenceIds: list[UUID] | None = Field(default=None, max_length=MAX_REFERENCES)
    assetId: UUID | None = None


class ApplyCanvasVersion(Model):
    assetId: UUID
    expectedRevision: int = Field(ge=1)
    fingerprint: str = Field(pattern=r'^sha256:[0-9a-f]{64}$')


class NodeMove(Model):
    id: UUID
    expectedX: Coordinate
    expectedY: Coordinate
    x: Coordinate
    y: Coordinate


class NodeRemoval(Model):
    id: UUID
    expectedRevision: int = Field(ge=1)
    expectedTaskId: UUID | None


class CanvasMove(Model):
    nodes: list[NodeMove] = Field(min_length=1, max_length=500)


class CanvasRemove(Model):
    nodes: list[NodeRemoval] = Field(min_length=1, max_length=500)


class CanvasArrange(Model):
    expectedRevision: int = Field(ge=0)
    heights: dict[UUID, Height] = Field(default_factory=dict, max_length=500)


class CanvasHistoryAction(Model):
    id: UUID
    entryId: UUID


class NodeText(Model):
    id: UUID
    name: str = Field(min_length=1, max_length=255)
    text: str = Field(max_length=1024 * 1024)
    expectedRevision: int | None = Field(default=None, ge=1)
    discardInputs: bool = False


class GenerationInputs(Model):
    videoMode: VideoMode = 'first_frame'
    promptContent: ReferenceContent | None = None
    prompt: str = Field(max_length=20000)
    referenceIds: list[UUID] = Field(default_factory=list, max_length=MAX_REFERENCES)
    title: str = Field(default="", max_length=255)
    durationSeconds: float | None = Field(default=None, ge=1, le=60, allow_inf_nan=False)
    aspectRatio: str | None = Field(default=None, pattern=r'^\d{1,2}:\d{1,2}$')
    resolution: str | None = Field(default=None, pattern=r'^(?:自动|[A-Za-z0-9][A-Za-z0-9_.-]{0,23})$')
    voice: str | None = Field(default=None, pattern=r'^[A-Za-z0-9_.-]{1,64}$')
    thinking: Literal['auto', 'low', 'medium', 'high'] | None = None
    maxTokens: int | None = Field(default=None, ge=1, le=32768, strict=True)


class GenerateNode(Model):
    logicalNodeId: str | None = Field(default=None, min_length=1, max_length=255)
    id: UUID
    modelConfigId: UUID
    expectedRevision: int = Field(ge=1)


    inputs: GenerationInputs | None = None


class ReferenceSourceBind(Model):
    assetId: UUID
    fingerprint: str = Field(pattern=r'^sha256:[0-9a-f]{64}$')
    expectedRevision: int = Field(ge=1)
    discardInputs: bool = False


class SessionClose(Model):
    projectId: UUID
    conversation: Conversation


class ModelConnection(Model):
    connectionType: Literal['api', 'self_hosted'] = 'api'
    protocol: Literal['openai', 'volcengine', 'vllm_omni', 'vllm_omni_segmentation'] | None = None
    authMode: Literal['none', 'bearer'] | None = None


class ModelConfigInput(ModelConnection):
    kind: Literal["agent", "image", "video", "audio", "vision"]
    url: str = Field(max_length=2048)
    modelId: str = Field(max_length=200)
    apiKey: SecretStr = SecretStr("")
    videoAdapter: VideoAdapter | None = None
    videoCapabilities: VideoCapabilities | None = None


class ModelBatchInput(ModelConfigInput):
    modelId: str = ""
    modelIds: list[str] = Field(min_length=1, max_length=200)
    configId: UUID | None = None


class ModelDiscoveryRequest(ModelConfigInput):
    modelId: str = Field(default="", max_length=200)
    configId: UUID | None = None


class AgentModelTest(ModelConfigInput):
    kind: Literal["agent"] = "agent"
    configId: UUID | None = None


class ModelCapabilityRequest(ModelConfigInput):
    configId: UUID | None = None
    source: Literal['preset', 'service'] = 'preset'


class ModelConfigPublic(ModelConnection):
    providerId: UUID | None = Field(default=None, exclude_if=lambda value: value is None)
    videoAdapter: VideoAdapter = 'auto'
    videoCapabilities: VideoCapabilities | None = None
    inputRules: dict = Field(default_factory=dict)
    id: UUID
    kind: Literal["agent", "image", "video", "audio", "vision"]
    url: str
    modelId: str


class ToolBox(Model):
    x: float = Field(ge=0, allow_inf_nan=False)
    y: float = Field(ge=0, allow_inf_nan=False)
    width: float = Field(gt=0, allow_inf_nan=False)
    height: float = Field(gt=0, allow_inf_nan=False)


class ToolTaskCreate(Model):
    draft: ToolDraftBinding | None = None
    id: UUID
    tool: str = Field(min_length=1, max_length=64, pattern=r'^[a-z0-9-]+$')
    sourceAssetIds: list[UUID] = Field(min_length=1, max_length=20)
    maskAssetId: UUID | None = None
    annotationAssetId: UUID | None = None
    boxes: list[ToolBox] = Field(default_factory=list, max_length=100)
    parameters: dict[str, str | float | int | bool] = Field(default_factory=dict, max_length=64)
    # Optional explicit model per capability; otherwise the first configured provider serves it.
    modelConfigIds: dict[str, UUID] = Field(default_factory=dict, max_length=8)
    canvas: 'ToolCanvasOrigin | None' = None

    @model_validator(mode='after')
    def bounded_parameters(self):
        if any(len(key) > 64 or (isinstance(value, str) and len(value) > 100_000) for key, value in self.parameters.items()):
            raise ValueError('parameters')
        return self


class ImageSelectionCreate(Model):
    sourceAssetId: UUID
    prompt: str = Field(default='', max_length=2000)
    boxes: list[ToolBox] = Field(default_factory=list, max_length=64)
    modelConfigId: UUID | None = None


class ToolCanvasOrigin(Model):
    nodeId: UUID
    sourceNodeIds: list[UUID] = Field(min_length=1, max_length=20)
    targetNodeId: UUID | None = None
    targetKind: Literal['image', 'video', 'audio'] | None = None
    targetTitle: str | None = Field(default=None, min_length=1, max_length=255)

    @model_validator(mode='after')
    def pending_target(self):
        values = (self.targetNodeId, self.targetKind, self.targetTitle)
        if any(value is not None for value in values):
            if not all(value is not None for value in values) or self.targetNodeId in self.sourceNodeIds:
                raise ValueError('pending result identity')
        return self


class ToolPlacement(Model):
    state: Literal['placed', 'unplaced']
    policy: Literal['if_current', 'explicit'] = 'if_current'
