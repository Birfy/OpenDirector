"""Export authoritative input/output schemas for HTTP, Agent and TypeScript."""
from .base import Contract
from .canvas import CanvasItem, CanvasItemBase, MediaRole, NodeCapabilities, RoleAction
from .commands import Command, CommandReceipt, ProjectEvent, Query
from .editors import EditorDocument
from .generation import ExecutionParameters, GenerationSpec, InputSnapshot, Job, PromptPart, Reference, ResultVersion
from .models import ModelConfigPublic, ModelConfigWrite, ModelKind, VideoMode
from .project import ProjectSnapshot, ViewState


class CreationContracts(Contract):
    project: ProjectSnapshot
    canvasItem: CanvasItem
    generationSpec: GenerationSpec
    reference: Reference
    editorDocument: EditorDocument
    command: Command
    receipt: CommandReceipt
    query: Query
    event: ProjectEvent
    job: Job
    result: ResultVersion
    snapshot: InputSnapshot
    executionParameters: ExecutionParameters
    promptPart: PromptPart
    publicModel: ModelConfigPublic
    writeModel: ModelConfigWrite
    capabilities: NodeCapabilities
    viewState: ViewState


ALIASES = {
    'CanvasItem': CanvasItem, 'GenerationSpec': GenerationSpec, 'Reference': Reference,
    'EditorDocument': EditorDocument, 'Command': Command, 'ExecutionParameters': ExecutionParameters,
    'PromptPart': PromptPart, 'MediaRole': MediaRole, 'RoleAction': RoleAction,
    'ModelKind': ModelKind, 'VideoMode': VideoMode,
}
