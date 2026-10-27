"""Scoped, versioned production edits; execution remains in Production/Generation.

The plan checkpoint is the write-ahead authorization. No canvas inputs, task
snapshots or outputs are rewritten when accepting a repair command.
"""
from copy import deepcopy
from datetime import datetime, timezone

from museshow.domain.canvas import CanvasNode
from museshow.domain.references import project_content, reference_content
from museshow.domain.production import MAX_STEP_ATTEMPTS, ProductionRepairCommand
from museshow.domain.projects import ProjectError
from museshow.infrastructure.adoption import decision, fingerprints, node_basis, reason, references_match, shot_basis, verify_review_asset
from museshow.infrastructure.execution import read_generation_task, read_production_plan
from museshow.infrastructure.local_projects import child
from museshow.infrastructure.storyboard import read_storyboard
from museshow.infrastructure.canvas_assets import require_current_assets


class ProductionRepairs:
    def __init__(self, production):
        self.production = production
        self.store, self.generation = production.store, production.generation

    def _settled(self, directory, step):
        """An unknown submission is never permission for another paid attempt."""
        if not step['taskId']:
            return
        path = child(child(directory, 'tasks'), step['taskId'] + '.json')
        if not path.exists():
            return  # Durable allocation, before Generation accepted the task.
        task = read_generation_task(path)
        job = self.generation.jobs.get(task['id'])
        recovery = self.generation.recovery(task, directory)
        if (job and not job.future.done()) or task['status'] in {'queued', 'running'} or recovery not in {'done', 'retry', 'submit'}:
            raise ProjectError('原任务仍在进行或结果尚待核对，请先恢复／核对原任务；未创建新的生成尝试。', 409)

    @staticmethod
    def _dependents(plan, step_id):
        affected = {step_id}
        for item in plan['steps']:  # Dependencies always point to earlier steps.
            if item['dependency'] in affected:
                affected.add(item['id'])
        return [item for item in plan['steps'] if item['id'] in affected and item['id'] != step_id]

    def prepare(self, owner, plan_id, value, session):
        request = ProductionRepairCommand.model_validate(value).model_dump(mode='json')
        if request['adoptionTarget'] != 'auto' and request['action'] != 'reuse':
            raise ProjectError('采用目标仅适用于已有版本的采用。')
        manager, generation = self.production, self.generation
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner, session)
            path = manager._path(owner, plan_id, session)
            if not path.is_file():
                raise ProjectError('制作计划不存在。', 404)
            plan = read_production_plan(path)
            if any(item['request']['id'] == request['id'] for item in plan['feedback']):
                raise ProjectError('操作标识已用于候选反馈。', 409)
            previous = next((item for item in plan['repairs'] if item['request']['id'] == request['id']), None)
            if previous:
                if previous['request'] != request:
                    raise ProjectError('修复操作标识已使用，请重新读取计划。', 409)
                return plan, False
            if plan['revision'] != request['expectedRevision']:
                raise ProjectError('制作计划已变化，请重新读取后修复。', 409)
            if plan_id in manager.jobs or any(item['status'] in {'queued', 'running'} for item in manager.list(owner)):
                raise ProjectError('请先停止后续制作，等待当前计划停下后再局部修复。', 409)
            if plan['repairRun']:
                current = next(item for item in plan['steps'] if item['id'] == plan['repairRun']['stepId'])
                self._settled(directory, current)
            step = next((item for item in plan['steps'] if item['id'] == request['stepId']), None)
            if step is None:
                raise ProjectError('修复步骤不属于当前计划。', 404)
            self._settled(directory, step)
            state = read_storyboard(directory)
            shot = next((item for item in state['shots'] if item['id'] == step['shotId']), None)
            if shot is None or shot['revision'] != request['expectedShotRevision']:
                raise ProjectError('修复镜头已变化或被移除，请重新读取。', 409)
            canvas = generation.canvas._read(directory)
            node = next((item for item in canvas['nodes'] if item['id'] == step['nodeId']), None)
            if (node['revision'] if node else None) != request['expectedNodeRevision']:
                raise ProjectError('修复节点已变化，请重新读取后核对。', 409)
            if node and node['taskId'] and node['taskId'] != step['taskId']:
                self._settled(directory, {'taskId': node['taskId']})
            if node is None and any(item['nodeId'] == step['nodeId'] for item in generation.canvas._tasks(directory)):
                raise ProjectError('原节点已被移除，不会通过修复重新创建。', 409)
            if any(item['nodeId'] == step['nodeId'] and item['status'] in {'queued', 'running'} for item in generation.canvas._tasks(directory)):
                raise ProjectError('节点仍在生成，请先核对该任务。', 409)
            if plan['scriptAssetId']:
                manager._script(owner, plan['scriptAssetId'], plan['scriptFingerprint'])
            records = generation.canvas.assets._records(directory, owner)
            if request['action'] == 'reuse' and request['adoptionTarget'] == 'storyboard':
                require_current_assets(directory, [request['assetId']], retained=[shot['selected']['audio' if step['kind'] == 'audio' else 'visual']])
            if request['reviewedAssetId']:
                verify_review_asset(directory, records, node, shot, step['kind'], request['reviewedAssetId'], request['reviewedFingerprint'])
            before = deepcopy(step)
            candidate = deepcopy(step)
            if request['action'] != 'reuse' and (step['taskId'] or step['assetId']):
                candidate['attempt'] += 1
            if request['action'] != 'reuse' and candidate['attempt'] >= MAX_STEP_ATTEMPTS:
                raise ProjectError('该步骤已达到初始生成后最多再尝试 3 次的限制，未提交生成；可复用已有素材。', 409)
            if request['mode'] and step['kind'] != 'video':
                raise ProjectError('生成方式切换仅适用于视频步骤。', 409)
            if request['mode']:
                candidate['videoMode'] = request['mode'] if request['mode'] in {'reference', 'continuation'} else 'first_frame'
            if request['prompt'] is not None:
                candidate['prompt'] = project_content(request['promptContent'], speech=step['kind'] == 'audio')[0] if request.get('promptContent') is not None else request['prompt']
                candidate['promptContent'] = request.get('promptContent')
            if request['referenceIds'] is not None or request['mode']:
                candidate['referenceIds'] = request['referenceIds'] if request['referenceIds'] is not None else []
                candidate['dependency'] = None  # Explicit references replace inherited keyframes.
                candidate['baseReferenceIds'] = candidate['referenceIds'][:]
            if candidate.get('promptContent') is not None:
                content = candidate['promptContent']
                if request.get('promptContent') is None and (request['referenceIds'] is not None or request['mode']):
                    content = [part for part in content if part['type'] == 'text' or part['assetId'] in candidate['referenceIds']]
                candidate['promptContent'] = reference_content(candidate['prompt'], candidate['referenceIds'], records, content)
                try:
                    candidate['prompt'], candidate['referenceIds'] = project_content(candidate['promptContent'], speech=step['kind'] == 'audio')
                except ValueError:
                    raise ProjectError('生成要求过长或参考数量超出限制，未提交生成。') from None
                if request['referenceIds'] is not None or request['mode']:
                    candidate['baseReferenceIds'] = candidate['referenceIds'][:]
            references = candidate['referenceIds']
            if request['action'] != 'reuse':
                require_current_assets(directory, references)
            if request['mode'] or request['referenceIds'] is not None:
                images = [asset_id for asset_id in references if records.get(asset_id, {}).get('kind') == 'image']
                if request['mode'] == 'text_to_video' and images:
                    raise ProjectError('文生视频不能包含首帧图片参考。', 409)
                if request['mode'] == 'image_to_video' and len(images) != 1:
                    raise ProjectError('图生视频需要指定一张已有图片作为首帧。', 409)
                if request['mode'] == 'continuation' and sum(records.get(asset_id, {}).get('kind') == 'video' for asset_id in references) != 1:
                    raise ProjectError('接续生成需要指定一段要接续的上一段视频。', 409)
            model = candidate['model'] or plan['models'][step['kind']]
            if request['action'] != 'reuse':
                config = generation.configs.resolve(request['modelConfigId'] or model['id'], step['kind'])
                generation.provider.validate(step['kind'], config)
                candidate['model'] = {key: config[key] for key in ('id', 'url', 'modelId')}
            basis_node = node or CanvasNode(id=step['nodeId'], kind=step['kind'], title=step['title'],
                prompt=step['prompt'], referenceIds=step['referenceIds'], videoMode=step.get('videoMode', 'first_frame')).model_dump(mode='json')
            if request['action'] != 'reuse':
                planned = {**basis_node, 'prompt': candidate['prompt'], 'promptContent': candidate.get('promptContent'), 'referenceIds': references, 'videoMode': candidate.get('videoMode', 'first_frame')}
                generation.canvas._check_assets(planned, records)
                if hasattr(generation.provider, 'prepare_inputs'):
                    generation.provider.prepare_inputs(owner, planned, config)
                elif hasattr(generation.provider, 'validate_inputs'):
                    generation.provider.validate_inputs(owner, planned)
            else:
                asset = records.get(request['assetId'])
                if asset is None or asset['kind'] != step['kind'] or not references_match(directory, records, {asset['id']: asset['fingerprint']}):
                    raise ProjectError('请选择当前项目中类型匹配且文件完整的已有素材。', 409)
                if asset['source'] != 'generated':
                    require_current_assets(directory, [asset['id']])
            candidate.update(taskId=None, assetId=None, status='pending', error=None, errorDetails=None, repairId=request['id'], needsReview=False,
                reuseAssetId=request['assetId'], adoptionPolicy=request['adoptionPolicy'], shotBasis=None, inputBasis={'node': node_basis(basis_node), 'nodeTaskId': basis_node['taskId'],
                    'nodeExists': node is not None, 'shot': shot_basis(shot), 'references': fingerprints(records, basis_node['referenceIds'])})
            if request['action'] == 'reuse':
                candidate['inputBasis']['assetFingerprint'] = records[request['assetId']]['fingerprint']
            pending, review = [], []
            candidate['preserveStoryboardSelection'] = False
            for dependent in self._dependents(plan, step['id']):
                path = child(child(directory, 'tasks'), dependent['taskId'] + '.json') if dependent['taskId'] else None
                if dependent['status'] == 'completed' or (path and path.exists()):
                    review.append(dependent['id'])
                    if (step['kind'] == 'image' and dependent['kind'] == 'video' and dependent['shotId'] == step['shotId']
                            and dependent['status'] == 'completed' and shot['selected']['visual'] == dependent['assetId']):
                        candidate['preserveStoryboardSelection'] = True
                else:
                    pending.append(dependent['id'])
                    dependent_shot = next((item for item in state['shots'] if item['id'] == dependent['shotId']), None)
                    if dependent_shot is None:
                        raise ProjectError('受影响的下游镜头已被移除，请先核对。', 409)
                    # Freeze here, not after the slow generation: later edits
                    # remain protected by C05 when this dependent is submitted.
                    dependent['shotBasis'] = shot_basis(dependent_shot)
            if request['action'] == 'reuse' and request['adoptionTarget'] != 'auto':
                candidate['preserveStoryboardSelection'] = request['adoptionTarget'] == 'canvas'
            plan['repairs'].append({'request': request, 'createdAt': datetime.now(timezone.utc).isoformat(),
                'before': before, 'after': deepcopy(candidate), 'pendingStepIds': pending, 'reviewStepIds': review,
                'preservedStepIds': [item['id'] for item in plan['steps'] if item['id'] not in {step['id'], *pending}]})
            step.update(candidate)
            plan.update(status='stopped' if request['action'] == 'revise' else 'queued', error=None, errorDetails=None,
                repairRun={'repairId': request['id'], 'stepId': step['id'], 'deadline': None})
            manager._save(owner, plan)  # Authorization and history committed together.
            generation.paused_plans.discard(plan_id)
            return plan, request['action'] != 'revise'

    def reuse(self, owner, plan, step):
        """Replayable local adoption using C05 guards, never a fake model task."""
        generation = self.generation
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner)
            records = generation.canvas.assets._records(directory, owner)
            basis, asset_id = step['inputBasis'], step['reuseAssetId']
            if not references_match(directory, records, {asset_id: basis['assetFingerprint']}):
                raise ProjectError('复用的素材文件已变化，未采用。', 409)
            state = generation.canvas._read(directory)
            node = next((item for item in state['nodes'] if item['id'] == step['nodeId']), None)
            if node is None:
                if basis['nodeExists']:
                    raise ProjectError('原节点已移除，未采用。', 409)
                node = CanvasNode(id=step['nodeId'], **{key: basis['node'][key] for key in ('kind', 'prompt', 'referenceIds')},
                    videoMode=step.get('videoMode', 'first_frame'),
                    title=step['title'], **generation.canvas.next_position(state, step['kind'], records, asset_id)).model_dump(mode='json')
            if node['taskId'] != basis['nodeTaskId'] and not (node['taskId'] is None and node['assetId'] == asset_id):
                raise ProjectError('节点已有其他任务，未采用复用素材。', 409)
            # This operation is authorized by the repair checkpoint, not a
            # generation receipt. Use identical content/selection guards.
            operation = {'id': None, 'productionPlanId': plan['id'], 'productionStepId': step['id'], 'shotId': step['shotId'],
                'nodeId': step['nodeId'], 'kind': step['kind'], 'assetId': asset_id, 'prompt': step['prompt'],
                'videoMode': step.get('videoMode', 'first_frame'),
                'referenceIds': step['referenceIds'], 'inputSnapshot': {**basis,
                    'script': {'assetId': plan['scriptAssetId'], 'fingerprint': plan['scriptFingerprint']}}}
            held = reason(operation, directory, {**node, 'taskId': None}, records, read_storyboard(directory), None,
                plan['id'] in generation.paused_plans, check_model=False)
            if held:
                raise ProjectError(decision(held)['message'] + ' 未采用复用素材。', 409)
            # Uploaded/manual material stays on its own source node. Reusing it
            # selects that source for the shot, without converting a generator
            # or inserting an upload into its generation history.
            if records[asset_id]['source'] == 'generated':
                if not any(item['id'] == node['id'] for item in state['nodes']):
                    generation.canvas.create(owner, node, None)
                generation.canvas.attach(owner, node['id'], asset_id)
                generation.canvas.patch(owner, node['id'], {'taskId': None}, None)
            else:
                require_current_assets(directory, [asset_id])
            board = generation.board.snapshot(owner)['storyboard']
            shot = next(item for item in board['shots'] if item['id'] == step['shotId'])
            if not step['preserveStoryboardSelection']:
                generation.board.adopt_asset(owner, shot['id'], shot['revision'], 'audio' if step['kind'] == 'audio' else 'visual', asset_id, None)
            else:
                generation.board.record_candidate(owner, shot['id'], 'visual', asset_id)
            step['assetId'] = asset_id

    def completed(self, owner, plan, step):
        """Only unsubmitted dependents change; completed output stays selected."""
        if not step['repairId']:
            return
        event = next(item for item in plan['repairs'] if item['request']['id'] == step['repairId'])
        with self.store.transaction():
            for dependent in plan['steps']:
                if dependent['id'] in event['pendingStepIds']:
                    if dependent['baseReferenceIds'] is None:
                        parent = next(item for item in plan['steps'] if item['id'] == dependent['dependency'])
                        old = event['before']['assetId'] if parent['id'] == step['id'] else parent['assetId']
                        dependent['baseReferenceIds'] = [value for value in dependent['referenceIds'] if value != old]
                    dependent.update(taskId=None, status='pending')
                elif dependent['id'] in event['reviewStepIds']:
                    dependent['needsReview'] = True
