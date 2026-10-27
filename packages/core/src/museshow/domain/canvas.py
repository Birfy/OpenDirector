"""Canvas presentation and generation inputs; files remain project assets."""

from typing import Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, JsonValue, model_validator
from museshow.domain.input_rules import MAX_REFERENCES, VideoMode
from museshow.domain.references import ReferenceContent, project_content
from museshow.domain.canvas_layout import CANVAS_LIMIT, CanvasLayout
from museshow.domain.projects import ProjectError

NodeKind = Literal["text", "image", "video", "audio"]
NodeRole = Literal["empty", "material", "generation"]


def require_role(node, role):
    if node['role'] not in {'empty', role}:
        message = ('素材节点不能生成或接收参考，请新建生成节点。' if role == 'generation'
                   else '生成节点不能上传替换或直接编辑正文，请修改生成要求，或新建素材节点。')
        raise ProjectError(message, 409, code='role_restricted')


def lock_role(node, role):
    """Commit purpose on content writes, accepted generation or reference creation."""
    require_role(node, role)
    node['role'] = role
    if role == 'material':
        node.update(prompt='', promptContent=None, referenceIds=[], modelConfigId=None, taskId=None, videoMode='first_frame')
    else:
        node['draft'] = None


class CanvasNode(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: UUID
    kind: NodeKind
    role: NodeRole = 'empty'
    x: float = Field(default=40, ge=-CANVAS_LIMIT, le=CANVAS_LIMIT, allow_inf_nan=False)
    y: float = Field(default=40, ge=-CANVAS_LIMIT, le=CANVAS_LIMIT, allow_inf_nan=False)
    title: str = Field(default="", max_length=255)
    prompt: str = Field(default="", max_length=20000)
    promptContent: ReferenceContent | None = None
    videoMode: VideoMode = 'first_frame'
    draft: str | None = Field(default=None, max_length=1024 * 1024)
    modelConfigId: UUID | None = None
    referenceIds: list[UUID] = Field(default_factory=list, max_length=MAX_REFERENCES)
    assetIds: list[UUID] = Field(default_factory=list, max_length=1000)
    assetId: UUID | None = None
    taskId: UUID | None = None
    revision: int = Field(default=1, ge=1)

    @model_validator(mode="after")
    def references_are_unique(self):
        if self.promptContent is not None:
            self.prompt, ids = project_content(self.promptContent, speech=self.kind == "audio")
            self.referenceIds = [UUID(value) for value in ids]
        if len(set(self.referenceIds)) != len(self.referenceIds) or len(set(self.assetIds)) != len(self.assetIds):
            raise ValueError("Duplicate asset reference")
        if self.assetId is not None and self.assetId not in self.assetIds:
            raise ValueError("Selected asset must be an output")
        # Undo can retain archived files, but restores an unassigned node with no current output.
        if self.role == 'empty' and (self.assetId or self.taskId):
            raise ValueError('An empty node cannot have a current output or task')
        if self.role == 'material' and (self.prompt or self.promptContent or self.referenceIds or self.modelConfigId or self.taskId):
            raise ValueError('Material nodes cannot have generation inputs')
        if self.role == 'material' and self.videoMode != 'first_frame':
            raise ValueError('Material nodes cannot select a generation mode')
        if self.role == 'generation' and self.draft is not None:
            raise ValueError('Generated text can only be changed through generation')
        if self.kind != 'text' and self.draft is not None:
            raise ValueError('Only text nodes can have a text draft')
        if self.kind != 'video' and self.videoMode != 'first_frame':
            raise ValueError('Only video nodes can select a video mode')
        return self


EDITABLE_FIELDS = {'x', 'y', 'title', 'prompt', 'promptContent', 'videoMode', 'draft', 'modelConfigId', 'referenceIds', 'assetId', 'role'}


class NodeDelta(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: UUID
    before: dict[str, JsonValue]
    after: dict[str, JsonValue]

    @model_validator(mode="after")
    def editable_fields(self):
        if not self.before or self.before.keys() != self.after.keys() or not self.before.keys() <= EDITABLE_FIELDS:
            raise ValueError("History must contain matching editable fields")
        return self


class StoredNode(BaseModel):
    model_config = ConfigDict(extra="forbid")
    index: int = Field(ge=0, lt=500)
    node: CanvasNode


class CanvasCommand(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: UUID
    label: str = Field(min_length=1, max_length=100)
    changes: list[NodeDelta] = Field(default_factory=list, max_length=500)
    added: list[StoredNode] = Field(default_factory=list, max_length=500)
    removed: list[StoredNode] = Field(default_factory=list, max_length=500)
    layoutBefore: CanvasLayout | None = None
    layoutAfter: CanvasLayout | None = None


class HistoryReceipt(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: UUID
    direction: Literal['undo', 'redo']
    entryId: UUID


class CanvasHistory(BaseModel):
    model_config = ConfigDict(extra="forbid")
    undo: list[CanvasCommand] = Field(default_factory=list, max_length=50)
    redo: list[CanvasCommand] = Field(default_factory=list, max_length=50)
    receipts: list[HistoryReceipt] = Field(default_factory=list, max_length=100)


class AssetGroup(BaseModel):
    model_config = ConfigDict(extra='forbid')
    role: NodeRole
    assetId: UUID | None = None
    assetIds: list[UUID] = Field(default_factory=list, max_length=1000)
    node: CanvasNode | None = None


class CanvasState(BaseModel):
    model_config = ConfigDict(extra="forbid")
    version: Literal[1] = 1
    revision: int = Field(default=0, ge=0)
    nodes: list[CanvasNode] = Field(default_factory=list, max_length=500)
    knownAssetIds: list[UUID] = Field(default_factory=list, max_length=10000)
    layout: CanvasLayout = Field(default_factory=CanvasLayout)
    history: CanvasHistory = Field(default_factory=CanvasHistory)
    assetGroups: dict[UUID, AssetGroup] = Field(default_factory=dict, max_length=10000)

    @model_validator(mode="after")
    def nodes_are_unique(self):
        if len({node.id for node in self.nodes}) != len(self.nodes):
            raise ValueError("Duplicate canvas node")
        return self
