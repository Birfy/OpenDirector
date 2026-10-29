"""C02 shared contracts. Runtime storage/HTTP/Agent adoption is staged later.

The existing canvas format and registered API/tool set are intentionally
unchanged. Import these contracts explicitly when migrating an application
service; do not treat schema availability as an implemented operation.
"""
from .canvas import CanvasItem, CanvasItemBase, NodeCapabilities, node_capabilities, role_after
from .commands import Command, CommandReceipt, ProjectEvent, Query, parse_command
from .generation import GenerationSpec, InputSnapshot, Job, Reference, ResultVersion, validate_generation
from .models import ModelConfigPublic, ModelConfigWrite
from .project import Project, ProjectSnapshot, ViewState
from .validation import ContractError, validate_command

__all__ = ['CanvasItem', 'CanvasItemBase', 'Command', 'CommandReceipt', 'GenerationSpec', 'InputSnapshot',
           'Job', 'ModelConfigPublic', 'ModelConfigWrite', 'NodeCapabilities', 'Project', 'ProjectEvent',
           'ProjectSnapshot', 'Query', 'Reference', 'ResultVersion', 'ViewState', 'node_capabilities',
           'parse_command', 'role_after', 'validate_generation', 'ContractError', 'validate_command']
