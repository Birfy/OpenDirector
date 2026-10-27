"""Presentation-only lane geometry and automatic node placement."""
from math import ceil
from typing import Annotated, Literal

from pydantic import BaseModel, ConfigDict, Field, model_validator

from museshow.domain.projects import ProjectError

KINDS = ('text', 'image', 'video', 'audio')
CANVAS_LIMIT = 1_000_000
NODE_WIDTH = 320
SLOT_WIDTH = 384
ORIGIN_X = 40
ROW_GAP = 64
Coordinate = Annotated[float, Field(ge=-CANVAS_LIMIT, le=CANVAS_LIMIT, allow_inf_nan=False)]
Height = Annotated[float, Field(gt=0, le=100_000, allow_inf_nan=False)]


class CanvasLayout(BaseModel):
    model_config = ConfigDict(extra='forbid')
    rows: dict[Literal['text', 'image', 'video', 'audio'], Coordinate] = Field(
        default_factory=lambda: dict(zip(KINDS, (80, 440, 1160, 1880))))
    nextSlots: dict[Literal['text', 'image', 'video', 'audio'], Annotated[int, Field(ge=0, le=10000)]] = Field(
        default_factory=lambda: dict.fromkeys(KINDS, 0))

    @model_validator(mode='after')
    def complete_lanes(self):
        if set(self.rows) != set(KINDS) or set(self.nextSlots) != set(KINDS):
            raise ValueError('All four canvas lanes are required')
        # These are placement hints, not containers. Absent kinds can share an
        # anchor after compaction; new kinds may append below the existing work.
        return self


def node_height(node, records, measured=None, *, reserve=False):
    asset = records.get(node.get('assetId')) or {}
    if node['kind'] in {'image', 'video'}:
        width, height = asset.get('width'), asset.get('height')
        estimated = ceil(NODE_WIDTH * height / width) + 44 if width and height else (620 if reserve else 264)
    else:
        estimated = 120 if node['kind'] == 'audio' and asset else 264
    return max(estimated, measured or 0)


def append_position(state, kind, records, asset_id=None):
    """Allocate logical slots, never deriving the append point from dragged X."""
    layout = state['layout']
    start = max(layout['nextSlots'][kind], sum(node['kind'] == kind for node in state['nodes']))
    y = layout['rows'][kind]
    if not any(node['kind'] == kind for node in state['nodes']) and any(
            node['kind'] != kind and layout['rows'][node['kind']] == y for node in state['nodes']):
        # A previously absent kind must not share an occupied compacted row.
        # Append a new row without moving manually positioned existing nodes;
        # the next explicit arrangement restores the usual type order.
        y = max(node['y'] + node_height(node, records) for node in state['nodes']) + ROW_GAP
        if y > CANVAS_LIMIT:
            raise ProjectError('新增类别没有可用空间，请先使用整理画布。', 409)
        layout['rows'][kind] = y
    height = node_height({'kind': kind, 'assetId': asset_id}, records, reserve=True)
    bounds = [(node['x'], node['y'], node_height(node, records)) for node in state['nodes']]
    for slot in range(start, int((CANVAS_LIMIT - ORIGIN_X - NODE_WIDTH) // SLOT_WIDTH) + 1):
        x = ORIGIN_X + slot * SLOT_WIDTH
        if all(x + NODE_WIDTH + 32 <= nx or nx + NODE_WIDTH + 32 <= x or y + height + 48 <= ny or ny + nh + 48 <= y
               for nx, ny, nh in bounds):
            layout['nextSlots'][kind] = slot + 1
            return {'x': x, 'y': y}
    raise ProjectError('当前分区没有可用位置，请先使用整理画布。', 409)


def arrange(state, records, heights):
    y = 80
    rows, slots = {}, {}
    for kind in KINDS:
        group = [node for node in state['nodes'] if node['kind'] == kind]
        rows[kind], slots[kind] = y, len(group)
        if not group:
            continue
        for index, node in enumerate(group):
            node.update(x=ORIGIN_X + index * SLOT_WIDTH, y=y)
        # Arrange what is visible now; an empty/failed node is a short placeholder,
        # not a future portrait result. Only automatic allocation reserves space.
        y += max([264, *(node_height(node, records, heights.get(node['id'])) for node in group)]) + ROW_GAP
    state['layout'] = CanvasLayout(rows=rows, nextSlots=slots).model_dump(mode='json')
