"""Narrow storyboard tools reuse the same version-checked UI operations."""
from uuid import UUID, uuid5

from pydantic import BaseModel, ConfigDict, Field

from museshow.domain.projects import ProjectError


class Arguments(BaseModel):
    model_config = ConfigDict(extra='forbid')


class CreateShot(Arguments):
    title: str = Field(min_length=1, max_length=255)
    description: str = Field(default='', max_length=20000)
    expectedOrderRevision: int = Field(ge=0)
    afterId: UUID | None = None


class EditShot(Arguments):
    shotId: UUID
    expectedRevision: int = Field(ge=1)
    title: str | None = Field(default=None, min_length=1, max_length=255)
    description: str | None = Field(default=None, max_length=20000)


class SetShotAsset(Arguments):
    shotId: UUID
    expectedRevision: int = Field(ge=1)
    kind: str = Field(pattern='^(visual|audio)$')
    assetId: UUID | None


class OrderShots(Arguments):
    expectedOrderRevision: int = Field(ge=0)
    shotIds: list[UUID] = Field(max_length=500)


SCHEMAS = {
    'create_storyboard_shot': (CreateShot, '按已授权的创作需求创建镜头；素材仍在画布生成。先读取项目获得顺序版本。'),
    'edit_storyboard_shot': (EditShot, '修改镜头标题或画面描述，必须使用读取到的最新镜头版本。'),
    'set_shot_asset': (SetShotAsset, '将已有画布素材关联并采用为主画面或旁白；null 表示取消采用。仅在用户授权编排或明确修改镜头时使用。'),
    'reorder_storyboard': (OrderShots, '按用户意图排列当前全部镜头，必须使用最新顺序版本和完整镜头列表。'),
}


def execute(board, turn, name, value, operation_id):
    if name == 'create_storyboard_shot':
        result = board.create(turn.owner, {**value, 'id': str(uuid5(UUID(operation_id), 'shot'))}, turn.session)
    elif name == 'edit_storyboard_shot':
        fields = {key: value[key] for key in ('title', 'description') if value[key] is not None}
        result = board.change(turn.owner, value['shotId'], value['expectedRevision'], turn.session, fields=fields)
    elif name == 'reorder_storyboard':
        result = board.reorder(turn.owner, value, turn.session)
    else:
        result = board.adopt_asset(turn.owner, value['shotId'], value['expectedRevision'], value['kind'], value['assetId'], turn.session)
    return {'status': 'succeeded', 'storyboardRevision': result['revision'], 'orderRevision': result['orderRevision'],
            'shots': [{key: shot[key] for key in ('id', 'title', 'revision', 'selected')} for shot in result['shots']]}
