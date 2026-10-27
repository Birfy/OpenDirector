"""Production observations and thin adapters to the shared business operations."""
import asyncio

from pydantic import BaseModel, ConfigDict, Field
from typing import Literal
from uuid import UUID

from museshow.domain.production import MAX_REPAIR_SECONDS, MAX_STEP_ATTEMPTS, CandidateFeedbackInputs, ProductionRepairInputs
from museshow.application.production_review import ProductionReview
from museshow.domain.projects import ProjectError


class Arguments(BaseModel):
    model_config = ConfigDict(extra='forbid')


class ListPlans(Arguments):
    shotId: UUID | None = None
    offset: int = Field(default=0, ge=0)
    limit: int = Field(default=10, ge=1, le=20)


class ReadPlan(Arguments):
    planId: UUID
    stepId: UUID | None = Field(default=None, description='可只查询一个步骤；省略时返回该计划的全部步骤')


class RepairStep(ProductionRepairInputs):
    planId: UUID


class KeepCandidate(CandidateFeedbackInputs):
    planId: UUID


class ControlPlan(Arguments):
    planId: UUID
    expectedRevision: int = Field(ge=1)
    action: Literal['resume', 'stop', 'cancel']


SCHEMAS = {
    'list_production_plans': (ListPlans, '分页读取当前项目的制作计划，可按镜头筛选；包括旧计划，不仅是最近一份。'),
    'get_production_plan': (ReadPlan, '读取一次具体计划／步骤的当前版本、生成输入、任务错误、候选、采用状态与修复反馈；不等待或轮询。修复前必须读取。'),
    'repair_production_step': (RepairStep, '仅按用户明确要求原地修复已存在的一个步骤。使用读取到的计划、镜头和节点版本；复用 C06，保留其他成果。保留当前采用版本时使用 candidate_only。返回登记状态，不代表生成完成。'),
    'keep_production_candidate': (KeepCandidate, '仅在用户明确决定保留当前版本、不采用某候选时记录决定。先读取步骤和候选文件指纹，保留当前画布与分镜，不生成、不删除历史候选。'),
    'control_production_plan': (ControlPlan, '按用户要求继续原计划、停止后续制作，或同时取消已提交任务。使用最新计划版本；resume 不修改原输入，不能代替更换参考或提示词。'),
}
WRITES = {'repair_production_step', 'keep_production_candidate', 'control_production_plan'}


def basis_summary(value):
    if not value:
        return None
    result = {key: value[key] for key in ('references', 'script') if key in value}
    node, shot = value.get('node'), value.get('shot')
    if node:
        result['node'] = {key: node.get(key) for key in ('kind', 'modelConfigId', 'referenceIds', 'videoMode', 'assetId')}
        result['node'].update(prompt=node['prompt'][:4000], promptTruncated=len(node['prompt']) > 4000,
            draftPreview=(node.get('draft') or '')[:4000], draftTruncated=len(node.get('draft') or '') > 4000)
    if shot:
        result['shot'] = {key: shot.get(key) for key in ('selected', 'originalAudioMode', 'legacyVisualChoices')}
        result['shot']['description'] = shot['description'][:4000]
        result['shot']['descriptionTruncated'] = len(shot['description']) > 4000
    return result


def task_summary(task, *, include_inputs=True):
    if task is None:
        return None
    fields = ('id', 'nodeId', 'kind', 'status', 'assetId', 'error', 'errorDetails', 'phase', 'recovery', 'resumeAllowed',
              'technicalCheck', 'canvasAdoption', 'storyboardAdoption', 'adoptionPolicy', 'productionPlanId', 'productionStepId', 'shotId')
    result = {key: task.get(key) for key in fields}
    if include_inputs:
        result['inputSnapshot'] = basis_summary(task.get('inputSnapshot'))
        result['videoMode'] = task.get('videoMode', 'first_frame')
        result['referenceInputs'] = task.get('referenceInputs')
    return result


def summary(plan, progress=None):
    return {**{key: plan[key] for key in ('id', 'revision', 'title', 'status', 'error', 'errorDetails', 'scriptAssetId', 'scriptFingerprint')},
        'progress': {key: value for key, value in progress.items() if key != 'steps'} if progress else None,
        'completedSteps': sum(item['status'] == 'completed' for item in plan['steps']), 'totalSteps': len(plan['steps']),
        'steps': [{key: step[key] for key in ('id', 'shotId', 'nodeId', 'kind', 'status', 'taskId', 'needsReview', 'error', 'errorDetails')} for step in plan['steps']]}


def describe(production, owner, plan_id, step_id=None):
    with production.store.transaction():
        plan = production.read(owner, plan_id)
        steps = [step for step in plan['steps'] if step_id is None or step['id'] == step_id]
        if not steps:
            raise ProjectError('步骤不属于指定制作计划。', 404)
        snapshot = production.generation.canvas.snapshot(owner)
        board = production.board.snapshot(owner)['storyboard']
        nodes = {node['id']: node for node in snapshot['canvas']['nodes']}
        tasks = {task['id']: task for task in snapshot['tasks']}
        shots = {shot['id']: (index + 1, shot) for index, shot in enumerate(board['shots'])}
        planned_shots = {shot['id']: shot for shot in plan['shots']}
        details, related_assets = [], {plan['scriptAssetId']}
        for step in steps:
            node = nodes.get(step['nodeId'])
            position, shot = shots.get(step['shotId'], (None, None))
            task = tasks.get(step['taskId'])
            current_node = None if node is None else {key: node[key] for key in ('id', 'revision', 'kind', 'role', 'title', 'modelConfigId', 'referenceIds', 'videoMode', 'assetId', 'assetIds', 'taskId')}
            if current_node is not None:
                current_node.update(prompt=node['prompt'][:4000], promptTruncated=len(node['prompt']) > 4000)
                related_assets.update(node['assetIds'] + node['referenceIds'])
            current_shot = None if shot is None else {key: shot[key] for key in ('id', 'revision', 'title', 'candidates', 'selected', 'originalAudioMode')}
            if shot:
                current_shot.update(number=position, description=shot['description'][:4000], descriptionTruncated=len(shot['description']) > 4000)
                related_assets.update([*shot['candidates']['visual'], *shot['candidates']['audio']])
            model = step['model'] or plan['models'][step['kind']]
            related_assets.update([step['assetId'], *step['referenceIds']])
            details.append({**{key: step[key] for key in ('id', 'shotId', 'nodeId', 'kind', 'status', 'attempt', 'assetId', 'taskId',
                'referenceIds', 'videoMode', 'baseReferenceIds', 'dependency', 'needsReview', 'adoptionPolicy', 'error', 'errorDetails')},
                'title': f'{position:02d} {shot["title"]}' if shot else step['title'],
                'prompt': step['prompt'][:4000], 'promptTruncated': len(step['prompt']) > 4000,
                'model': {key: model[key] for key in ('id', 'modelId')},
                'inputBasis': basis_summary(step['inputBasis'] or {'shot': step['shotBasis'] or planned_shots[step['shotId']]['basis']}),
                'task': task_summary(task), 'node': current_node, 'shot': current_shot,
                'repairVersions': {'expectedRevision': plan['revision'], 'expectedShotRevision': shot['revision'] if shot else None,
                                   'expectedNodeRevision': node['revision'] if node else None}})
        history = [event for event in plan['repairs'] if step_id is None or event['request']['stepId'] == step_id]
        feedback = []
        for event in history[-10:]:
            before = event['before']
            related_assets.add(before['assetId'])
            related_assets.add(event['request']['reviewedAssetId'])
            feedback.append({'id': event['request']['id'], 'createdAt': event['createdAt'],
                'stepId': event['request']['stepId'], 'action': event['request']['action'], 'feedback': event['request']['feedback'],
                'reviewedAssetId': event['request']['reviewedAssetId'], 'reviewedFingerprint': event['request']['reviewedFingerprint'],
                'adoptionPolicy': event['request']['adoptionPolicy'], 'previousTaskId': before['taskId'], 'previousAssetId': before['assetId'],
                **{key: event[key] for key in ('pendingStepIds', 'reviewStepIds', 'preservedStepIds')}})
        kept = [event for event in plan['feedback'] if step_id is None or event['request']['stepId'] == step_id]
        for event in kept[-10:]:
            request = event['request']
            related_assets.add(request['assetId'])
            feedback.append({'id': request['id'], 'createdAt': event['createdAt'], 'stepId': request['stepId'],
                'action': 'keep_current', 'feedback': request['feedback'], 'reviewedAssetId': request['assetId'],
                'reviewedFingerprint': request['assetFingerprint']})
        feedback = sorted(feedback, key=lambda event: event['createdAt'])[-10:]
        asset_fields = ('id', 'name', 'kind', 'fingerprint', 'referenceIds', 'generationTaskId', 'productionPlanId', 'productionStepId', 'shotId',
                        'width', 'height', 'durationMs', 'hasAudio', 'sampleRate', 'channels')
        progress = next(item for item in production.progress(owner)['plans'] if item['planId'] == plan_id)
        return {**summary(plan, progress), 'progress': progress, 'steps': details, 'feedback': feedback, 'feedbackCount': len(history) + len(kept),
            'assets': [{**{key: asset[key] for key in asset_fields if key in asset},
                        'onCanvas': asset['id'] in snapshot['visibleAssetIds']}
                       for asset in snapshot['assets'] if asset['id'] in related_assets],
            'repairRun': plan['repairRun'], 'limits': {'maxStepAttempts': MAX_STEP_ATTEMPTS, 'maxRepairSeconds': MAX_REPAIR_SECONDS},
            'observation': '这是已保存状态的单次读取。生成成功、当前采用和内容质量复核分别判断；读取不会恢复或重新提交任务。'}


async def execute(production, turn, name, value, operation_id):
    if production is None:
        raise ProjectError('制作计划服务未启动。', 409)
    if name == 'list_production_plans':
        plans = await asyncio.to_thread(production.list, turn.owner)
        progress = await asyncio.to_thread(production.progress, turn.owner, plans)
        by_id = {item['planId']: item for item in progress['plans']}
        if value['shotId']:
            plans = [plan for plan in plans if any(shot['id'] == value['shotId'] for shot in plan['shots'])]
        offset, limit = value['offset'], value['limit']
        return {'total': len(plans), 'delivery': progress['delivery'], 'plans': [summary(plan, by_id[plan['id']]) for plan in plans[offset:offset + limit]],
                'nextOffset': offset + limit if offset + limit < len(plans) else None}
    if name == 'get_production_plan':
        return await asyncio.to_thread(describe, production, turn.owner, value['planId'], value['stepId'])
    if name == 'keep_production_candidate':
        request = {key: item for key, item in {**value, 'id': operation_id}.items() if key != 'planId'}
        await asyncio.to_thread(ProductionReview(production).keep, turn.owner, value['planId'], request, turn.session)
        return {'planId': value['planId'], 'stepId': value['stepId'], 'message': '已记录保留当前版本；该候选已处理，历史文件保留，没有重新生成。'}
    if name == 'repair_production_step':
        plan = await production.repair(turn.owner, value['planId'], {key: item for key, item in {**value, 'id': operation_id}.items() if key != 'planId'}, turn.session)
        notice = ('修改要求已保存，尚未开始生成；可按原设置继续。' if value['action'] == 'revise' else
                  '素材复用已登记，正在核对并采用。' if value['action'] == 'reuse' else
                  '局部制作已登记；当前版本会保留，新结果仅作为候选。' if value['adoptionPolicy'] == 'candidate_only' else
                  '局部制作已登记，只处理指定步骤；素材尚未生成完成。')
        return {'status': plan['status'], 'planId': plan['id'], 'stepId': value['stepId'], 'message': notice}
    action = value['action']
    if action == 'resume':
        plan = await production.resume(turn.owner, value['planId'], turn.session, expected_revision=value['expectedRevision'])
        notice = '已按原设置登记继续制作，正在核对已有任务与结果。'
    else:
        plan = await production.stop(turn.owner, value['planId'], turn.session, action == 'cancel', expected_revision=value['expectedRevision'])
        notice = '后续制作已停止；已提交任务默认继续，返回结果按候选保留。' if action == 'stop' else '后续制作已停止并处理了取消请求；远端取消结果与费用仍需核对。'
    return {'status': plan['status'], 'planId': plan['id'], 'message': notice}
