"""An explicitly requested, finite shot production plan."""

from typing import Literal
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, StrictBool, model_validator

from museshow.domain.input_rules import MAX_REFERENCES, VideoMode
from museshow.domain.references import ReferenceContent, project_content

from museshow.domain.generation import GenerationFailure


# These describe execution only. A successful plan is not a quality review or
# an exported film; asset candidates and storyboard adoption remain separate.
ProductionStatus = Literal['queued', 'running', 'succeeded', 'blocked', 'stopped', 'interrupted']
StepStatus = Literal['pending', 'submitting', 'submitted', 'completed']
ProductionKind = Literal['image', 'video', 'audio']
# Initial attempt plus at most three explicit retries/repairs. No automatic
# generation retry is introduced by these limits.
MAX_STEP_ATTEMPTS = 4
MAX_REPAIR_SECONDS = 20 * 60
MAX_PRODUCTION_CONCURRENCY = 2


class _Record(BaseModel):
    model_config = ConfigDict(extra='forbid')


class PlannedShot(_Record):
    id: UUID
    title: str
    description: str
    revision: int | None = Field(default=None, ge=1)
    existing: bool = False
    basis: dict | None = None  # Relevant creative inputs, not the shot revision.


class ProductionModel(_Record):
    id: UUID
    url: str
    modelId: str


class ProductionStep(_Record):
    videoMode: VideoMode = 'first_frame'
    id: UUID
    shot: int = Field(ge=1)
    shotId: UUID
    kind: ProductionKind
    title: str
    prompt: str
    promptContent: ReferenceContent | None = None
    referenceIds: list[UUID]
    dependency: UUID | None
    nodeId: UUID
    taskId: UUID | None
    assetId: UUID | None
    status: StepStatus
    error: str | None = None
    errorDetails: GenerationFailure | None = None
    # (step ID, attempt) is the stable attempt identity; taskId identifies its
    # accepted generation receipt. Do not add a second, competing attempt ID.
    attempt: int = Field(default=0, ge=0)
    baseReferenceIds: list[UUID] | None = None
    model: ProductionModel | None = None
    repairId: UUID | None = None
    inputBasis: dict | None = None
    shotBasis: dict | None = None
    reuseAssetId: UUID | None = None
    needsReview: bool = False
    preserveStoryboardSelection: bool = False
    adoptionPolicy: Literal['if_current', 'candidate_only'] = 'if_current'


class ProductionStepVersion(_Record):
    stepId: UUID
    expectedRevision: int = Field(ge=1)
    expectedShotRevision: int = Field(ge=1)
    expectedNodeRevision: int | None = Field(default=None, ge=1)


class ProductionRepairInputs(ProductionStepVersion):
    """Shared API/tool inputs; callers supply the durable operation identity."""
    adoptionTarget: Literal['auto', 'canvas', 'storyboard'] = Field(default='auto', description='仅 reuse 可指定：canvas 只切换画布版本，storyboard 明确采用到分镜；auto 保留原有规则')
    action: Literal['revise', 'regenerate', 'reuse']
    promptContent: ReferenceContent | None = None
    prompt: str | None = Field(default=None, min_length=1, max_length=20000)
    referenceIds: list[UUID] | None = Field(default=None, max_length=MAX_REFERENCES)
    mode: Literal['text_to_video', 'image_to_video', 'reference', 'continuation'] | None = None
    modelConfigId: UUID | None = None
    assetId: UUID | None = None
    feedback: str = Field(default='', max_length=2000)
    adoptionPolicy: Literal['if_current', 'candidate_only'] = Field(default='if_current',
        description='if_current 在原输入仍有效时采用；candidate_only 保留当前版本，只生成新候选，核对后人工选择')
    reviewedAssetId: UUID | None = None
    reviewedFingerprint: str | None = Field(default=None, pattern=r'^sha256:[0-9a-f]{64}$')

    @model_validator(mode='after')
    def valid_repair(self):
        if self.referenceIds is not None and len(set(self.referenceIds)) != len(self.referenceIds):
            raise ValueError('Duplicate reference')
        if self.promptContent is not None:
            self.prompt, ids = project_content(self.promptContent)
            self.referenceIds = [UUID(value) for value in dict.fromkeys([*ids, *map(str, self.referenceIds or [])])]
            if len(self.referenceIds) > MAX_REFERENCES:
                raise ValueError(f'参考数量超过系统上限 {MAX_REFERENCES}')
        if (self.reviewedAssetId is None) != (self.reviewedFingerprint is None):
            raise ValueError('Feedback requires both reviewed asset and content fingerprint')
        if self.prompt is not None and not self.prompt.strip():
            raise ValueError('Empty generation prompt')
        if self.action == 'reuse':
            if self.adoptionPolicy != 'if_current' or self.assetId is None or any(value is not None for value in (self.prompt, self.promptContent, self.referenceIds, self.mode, self.modelConfigId)):
                raise ValueError('Reuse requires an asset and cannot change generation inputs')
        elif self.assetId is not None:
            raise ValueError('Only reuse accepts an asset')
        elif self.action == 'revise' and all(value is None for value in (self.prompt, self.promptContent, self.referenceIds, self.mode, self.modelConfigId)):
            raise ValueError('Revise requires changed inputs')
        return self


class ProductionRepairCommand(ProductionRepairInputs):
    id: UUID


class CandidateFeedbackInputs(ProductionStepVersion):
    assetId: UUID
    assetFingerprint: str = Field(pattern=r'^sha256:[0-9a-f]{64}$')
    feedback: str = Field(default='', max_length=2000)


class CandidateFeedback(CandidateFeedbackInputs):
    id: UUID


class ProductionFeedback(_Record):
    request: CandidateFeedback
    createdAt: str
    nodeAssetId: UUID | None
    shotAssetId: UUID | None


class ProductionRepair(_Record):
    request: ProductionRepairCommand
    createdAt: str
    before: ProductionStep
    after: ProductionStep
    pendingStepIds: list[UUID]
    reviewStepIds: list[UUID]
    preservedStepIds: list[UUID]


class RepairRun(_Record):
    repairId: UUID
    stepId: UUID
    deadline: float | None = Field(default=None, gt=0, allow_inf_nan=False)


class ProductionPlan(_Record):
    schemaVersion: Literal[1] = 1
    watermark: StrictBool = True  # Legacy plans retain their original behavior.
    # Persisted checkpoint revision, not the storyboard or creative-input version.
    revision: int = Field(default=1, ge=1)
    id: UUID
    title: str
    status: ProductionStatus
    error: str | None
    errorDetails: GenerationFailure | None = None
    createdAt: str
    models: dict[ProductionKind, ProductionModel]
    shots: list[PlannedShot] = Field(min_length=1)
    steps: list[ProductionStep] = Field(min_length=1)
    script: str = ''  # Read old inline scripts only; new requests use an asset.
    scriptAssetId: UUID | None = None
    scriptFingerprint: str | None = Field(default=None, pattern=r'^sha256:[0-9a-f]{64}$')
    baseOrderRevision: int = Field(ge=0)
    afterId: UUID | None
    batch: int = Field(ge=0)
    repairs: list[ProductionRepair] = Field(default_factory=list)
    feedback: list[ProductionFeedback] = Field(default_factory=list)
    repairRun: RepairRun | None = None

    @model_validator(mode='after')
    def valid_links(self):
        if len({shot.id for shot in self.shots}) != len(self.shots):
            raise ValueError('Duplicate planned shot')
        previous = set()
        shot_ids = {shot.id for shot in self.shots}
        for step in self.steps:
            if step.id in previous or step.shot > len(self.shots) or step.shotId not in shot_ids:
                raise ValueError('Invalid step identity or shot')
            if step.kind not in self.models or (step.dependency is not None and step.dependency not in previous):
                raise ValueError('Invalid model or dependency')
            if step.status == 'completed' and step.assetId is None:
                raise ValueError('Completed step has no output')
            previous.add(step.id)
        repairs = {item.request.id: item for item in self.repairs}
        if len(repairs) != len(self.repairs) or any(item.request.stepId not in previous for item in self.repairs):
            raise ValueError('Invalid repair identity')
        feedback_ids = {item.request.id for item in self.feedback}
        if len(feedback_ids) != len(self.feedback) or feedback_ids & repairs.keys() or any(item.request.stepId not in previous for item in self.feedback):
            raise ValueError('Invalid feedback identity')
        if self.repairRun and (self.repairRun.repairId not in repairs or self.repairRun.stepId != repairs[self.repairRun.repairId].request.stepId):
            raise ValueError('Invalid repair scope')
        return self


class ProductionShot(BaseModel):
    videoMode: VideoMode | None = Field(default=None, description='省略时按所选视频模型决定默认模式；reference 可接收该模型 inputRules 允许的图片、视频及音频参考；continuation 接续上一个镜头的视频，画面和声音连续，仅 vLLM-Omni MiniMax-H3 支持，且不生成本镜头关键帧')
    model_config = ConfigDict(extra='forbid')
    title: str = Field(min_length=1, max_length=180)
    shotId: UUID | None = Field(default=None, description='仅在用户授权为已有镜头制作素材时填写 read_project 返回的镜头 ID；新增时省略')
    expectedRevision: int | None = Field(default=None, ge=1)
    description: str = Field(default='', max_length=20000)
    imagePrompt: str = Field(default='', max_length=20000)
    videoPrompt: str = Field(default='', max_length=20000)
    narration: str = Field(default='', max_length=20000, description='只包含此镜头需要朗读的正文，不含声音风格、编号或制作说明')
    referenceIds: list[UUID] = Field(default_factory=list, max_length=MAX_REFERENCES)
    referenceShot: int | None = Field(default=None, ge=1, description='沿用前面第几个镜头的关键帧作为人物或场景参考，从 1 开始')

    @model_validator(mode='after')
    def visual_required(self):
        if (self.shotId is None) != (self.expectedRevision is None):
            raise ValueError('Existing shots require both ID and revision')
        if not self.imagePrompt.strip() and not self.videoPrompt.strip() and not (self.shotId and self.narration.strip()):
            raise ValueError('New shots need a visual; existing shots may request narration only')
        return self


class ProductionRequest(BaseModel):
    model_config = ConfigDict(extra='forbid')
    title: str = Field(min_length=1, max_length=180)
    scriptAssetId: UUID | None = Field(default=None, description='复用已保存的剧本资产；新剧本先调用 save_text_asset。仅生成素材时可省略')
    scriptFingerprint: str | None = Field(default=None, pattern=r'^sha256:[0-9a-f]{64}$', description='剧本的内容指纹，使用 save_text_asset、read_text_asset 或 read_project 返回的 fingerprint；不是资产元数据 revision')
    shots: list[ProductionShot] = Field(min_length=1, max_length=12)

    @model_validator(mode='after')
    def ordered_dependencies(self):
        if (self.scriptAssetId is None) != (self.scriptFingerprint is None):
            raise ValueError('Script references require both asset ID and content fingerprint')
        existing = [shot.shotId for shot in self.shots if shot.shotId]
        if len(existing) != len(set(existing)):
            raise ValueError('An existing shot can appear only once in a plan')
        for index, shot in enumerate(self.shots):
            if shot.videoMode == 'continuation' and (index == 0 or not shot.videoPrompt.strip() or shot.imagePrompt.strip()
                                                     or not self.shots[index - 1].videoPrompt.strip()):
                raise ValueError('A continuation shot needs a video prompt, no keyframe, and a previous shot with a video')
            if shot.referenceShot and not shot.imagePrompt.strip():
                raise ValueError('A keyframe dependency requires an image prompt')
            if shot.referenceShot and (shot.referenceShot > index or not self.shots[shot.referenceShot - 1].imagePrompt.strip()):
                raise ValueError('References must point to an earlier keyframe')
        return self
