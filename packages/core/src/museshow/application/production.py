"""Finite durable production, reusing generation receipts instead of LLM polling."""
import asyncio
import hashlib
import re
import time
from datetime import datetime, timezone
from uuid import UUID, uuid5

from museshow.domain.references import project_content, reference_content
from museshow.domain.canvas import CanvasNode
from museshow.domain.input_rules import input_rules
from museshow.domain.storyboard import Shot
from museshow.domain.generation import GenerationError, GenerationFailure
from museshow.domain.production import MAX_PRODUCTION_CONCURRENCY, MAX_REPAIR_SECONDS, MAX_STEP_ATTEMPTS, ProductionRequest
from museshow.application.production_repairs import ProductionRepairs
from museshow.domain.projects import ProjectError, identifier
from museshow.infrastructure.local_projects import child
from museshow.infrastructure.execution import read_generation_task, read_production_plan, write_production_plan
from museshow.infrastructure.storyboard import read_storyboard
from museshow.infrastructure.canvas_assets import require_current_assets
from museshow.infrastructure.adoption import node_basis, shot_basis


def semantic_title(title, number):
    """Remove repeated presentation prefixes, without stripping years/names."""
    title = title.strip()
    prefix = re.compile(rf'^(?:(?:第\s*[0-9一二三四五六七八九十百]+\s*(?:镜头|镜|幕|场))|(?:(?:镜头|分镜)\s*\d+)|0*{number}(?=\s|[.、:：|｜]))[\s.、:：|｜-]*')
    while match := prefix.match(title):
        rest = title[match.end():].strip()
        if not rest:
            break
        title = rest
    return title


class Production:
    def __init__(self, store, generation):
        self.store, self.generation = store, generation
        self.board = generation.board
        self.jobs = {}
        self.stopping = set()
        self.repairs = ProductionRepairs(self)

    def _path(self, owner, plan_id, session=None):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(owner), session)
            return child(child(directory, 'production-plans'), identifier(plan_id) + '.json')

    def list(self, owner):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(owner))
            folder = child(directory, 'production-plans')
            values = [read_production_plan(child(folder, path.name)) for path in folder.glob('*.json')] if folder.exists() else []
            return sorted(values, key=lambda value: value['createdAt'], reverse=True)

    def read(self, owner, plan_id, session=None, *, expected_revision=None):
        with self.store.transaction():
            path = self._path(owner, plan_id, session)
            if not path.is_file():
                raise ProjectError('制作计划不在当前项目中。', 404)
            plan = read_production_plan(path)
            if expected_revision is not None and plan['revision'] != expected_revision:
                raise ProjectError('制作计划已变化，请重新读取并核对后操作。', 409)
            return plan

    def progress(self, owner, plans=None):
        from museshow.application.production_status import project_progress
        return project_progress(self, owner, plans)

    def view(self, owner, plan):
        """Join current task receipts for display without changing plan checkpoints."""
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(owner))
            board = read_storyboard(directory)
            positions = {shot['id']: (index + 1, shot['title']) for index, shot in enumerate(board['shots'])}
            steps = []
            for step in plan['steps']:
                task = None
                if step['taskId']:
                    path = child(child(directory, 'tasks'), step['taskId'] + '.json')
                    if path.exists():
                        receipt = read_generation_task(path)
                        task = {key: receipt.get(key) for key in ('id', 'status', 'error', 'errorDetails', 'externalTaskId', 'technicalCheck', 'canvasAdoption', 'storyboardAdoption')}
                position = positions.get(step['shotId'])
                label = {'image': '关键帧', 'video': '视频', 'audio': '旁白'}[step['kind']]
                title = f'{position[0]:02d} {semantic_title(position[1], step["shot"])}｜{label}' if position else step['title']
                steps.append({**step, 'title': title, 'task': task})
            return {**plan, 'steps': steps}

    def _script(self, owner, asset_id, fingerprint=None):
        data, asset = self.store.asset(owner, asset_id)
        asset = self.generation.canvas.assets._record(owner, asset_id, asset)
        actual = 'sha256:' + hashlib.sha256(data).hexdigest()
        if asset.get('kind') != 'text':
            raise ProjectError('制作计划的剧本必须是当前项目中的文本资产。', 409)
        if actual != asset['fingerprint'] or (fingerprint and actual != fingerprint):
            raise ProjectError('剧本内容与引用版本不一致，请重新读取并核对；未开始生成。', 409)
        return actual

    def _save(self, owner, plan):
        with self.store.transaction():
            write_production_plan(self._path(owner, plan['id']), plan)

    def _prepare(self, owner, plan_id, request, selections, session):
        specification = ProductionRequest.model_validate(request).model_dump(mode='json')
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner, session)
            path = self._path(owner, plan_id, session)
            if path.exists():
                return read_production_plan(path), False
            if any(plan['status'] in {'queued', 'running'} for plan in self.list(owner)):
                raise ProjectError('项目已有制作计划，请先停止或完成当前计划。', 409)
            state = read_storyboard(directory)
            existing = {shot['id']: shot for shot in state['shots']}
            if len(state['shots']) + sum(not shot['shotId'] for shot in specification['shots']) > 500:
                raise ProjectError('镜头数量已达上限。', 409)
            if specification['scriptAssetId']:
                self._script(owner, specification['scriptAssetId'], specification['scriptFingerprint'])
            canvas = self.generation.canvas.snapshot(owner)
            require_current_assets(directory, [asset_id for shot in specification['shots'] for asset_id in shot['referenceIds']])
            if specification['scriptAssetId']:
                require_current_assets(directory, [specification['scriptAssetId']])
            steps, shots, models = [], [], {}
            for index, shot in enumerate(specification['shots'], 1):
                current = existing.get(shot['shotId']) if shot['shotId'] else None
                if shot['shotId'] and (current is None or current['revision'] != shot['expectedRevision']):
                    raise ProjectError('指定镜头已变化或被移除，请重新读取后核对。', 409)
                shot_id = current['id'] if current else str(uuid5(UUID(plan_id), f'shot:{index}'))
                title = current['title'] if current else semantic_title(shot['title'], index)
                shots.append({'id': shot_id, 'title': title, 'description': current['description'] if current else shot['description'],
                              'revision': current['revision'] if current else None, 'existing': current is not None,
                              'basis': shot_basis(current or Shot(id=shot_id, title=title, description=shot['description']).model_dump(mode='json'))})
                image_step = None
                for kind, field, label in [('image', 'imagePrompt', '关键帧'), ('video', 'videoPrompt', '视频'), ('audio', 'narration', '旁白')]:
                    prompt = shot[field].strip()
                    if not prompt:
                        continue
                    config_id = selections.get(kind) if kind in selections else next((value['id'] for value in self.generation.configs.list() if value['kind'] == kind), None)
                    if not config_id:
                        raise ProjectError(f'请先选择{label}模型，再开始制作计划。', 409)
                    config = self.generation.configs.resolve(config_id, kind)
                    self.generation.provider.validate(kind, config)
                    models[kind] = {key: config[key] for key in ('id', 'url', 'modelId')}
                    step_title = f'{title}｜{label}'
                    refs = [] if kind == 'audio' else list(shot['referenceIds'])
                    if kind == 'image' and not input_rules(config)['maxImages']:
                        # A text-only image model draws the keyframe from its prompt; the
                        # shot's reference images still guide the video step.
                        kinds = {asset['id']: asset['kind'] for asset in canvas['assets']}
                        refs = [ref for ref in refs if kinds.get(ref) != 'image']
                    candidate = CanvasNode(id=uuid5(UUID(plan_id), f'{shot_id}:{kind}'), kind=kind, title=step_title, prompt=prompt, referenceIds=refs,
                        videoMode=(shot['videoMode'] or input_rules(config)['videoModes'][0]) if kind == 'video' else 'first_frame').model_dump(mode='json')
                    self.generation.canvas._check_assets(candidate, {asset['id']: asset for asset in canvas['assets']})
                    continuing = kind == 'video' and shot['videoMode'] == 'continuation'
                    if hasattr(self.generation.provider, 'prepare_inputs'):
                        # A continuation's source video is the previous shot's result, produced later.
                        if continuing:
                            self.generation.provider.prepare_inputs(owner, candidate, config, complete=False)
                        else:
                            self.generation.provider.prepare_inputs(owner, candidate, config)
                    elif hasattr(self.generation.provider, 'validate_inputs'):
                        self.generation.provider.validate_inputs(owner, candidate)
                    step_id = str(uuid5(UUID(plan_id), f'step:{shot_id}:{kind}'))
                    reference_id = shots[shot['referenceShot'] - 1]['id'] if shot['referenceShot'] else None
                    dependency = image_step if kind == 'video' else (next((step['id'] for step in steps if step['shotId'] == reference_id and step['kind'] == 'image'), None) if kind == 'image' else None)
                    if continuing:
                        dependency = next(step['id'] for step in steps if step['shotId'] == shots[index - 2]['id'] and step['kind'] == 'video')
                    steps.append({'id': step_id, 'shot': index, 'shotId': shot_id, 'kind': kind, 'title': step_title, 'prompt': prompt,
                                  'referenceIds': refs, 'videoMode': candidate['videoMode'], 'baseReferenceIds': refs[:], 'dependency': dependency, 'nodeId': candidate['id'],
                                  'taskId': None, 'assetId': None, 'status': 'pending', 'attempt': 0})
                    if kind == 'image':
                        image_step = step_id
            plan = {'schemaVersion': 1, 'revision': 1, 'id': plan_id, 'title': specification['title'], 'status': 'queued', 'error': None,
                    'watermark': not self.generation.settings.get()['removeWatermark'] if any(step['kind'] in {'image', 'video'} for step in steps) else True,
                    'createdAt': datetime.now(timezone.utc).isoformat(), 'models': models, 'shots': shots, 'steps': steps,
                    'scriptAssetId': specification['scriptAssetId'], 'scriptFingerprint': specification['scriptFingerprint'], 'baseOrderRevision': state['orderRevision'],
                    'afterId': state['shots'][-1]['id'] if state['shots'] else None, 'batch': 0}
            path.parent.mkdir(exist_ok=True)
            write_production_plan(path, plan)
            return plan, True

    def _launch(self, owner, plan):
        previous = self.jobs.get(plan['id'])
        if previous and not previous.done():
            return
        future = asyncio.create_task(self._run(owner, plan['id']))
        self.jobs[plan['id']] = future
        def done(completed):
            if self.jobs.get(plan['id']) is completed:
                self.jobs.pop(plan['id'], None)
            if not completed.cancelled():
                completed.exception()
        future.add_done_callback(done)

    async def submit(self, owner, plan_id, request, selections, session):
        plan, launch = await asyncio.to_thread(self._prepare, owner, plan_id, request, selections, session)
        if launch:
            self._launch(owner, plan)
        return plan

    async def repair(self, owner, plan_id, request, session):
        plan, launch = await asyncio.to_thread(self.repairs.prepare, owner, plan_id, request, session)
        if launch:
            self._launch(owner, plan)
        return plan

    def _initialize(self, owner, plan):
        with self.store.transaction():
            # Legacy inline scripts are materialized once through the same
            # canvas save path. Never infer equivalence from text or filenames.
            if plan.get('script') and not plan['scriptAssetId']:
                asset_id = str(uuid5(UUID(plan['id']), 'script'))
                asset = next((item for item in self.generation.canvas.assets.list(owner) if item['id'] == asset_id), None)
                if asset is None:
                    self.generation.canvas.save_text(owner, str(uuid5(UUID(plan['id']), 'script-node')), asset_id,
                        plan['script'], re.sub(r'[<>:"/\\|?*\x00-\x1f]', '_', plan['title']) + '｜剧本.md', None, create=True)
                plan['scriptAssetId'] = asset_id
                plan['scriptFingerprint'] = 'sha256:' + hashlib.sha256(plan['script'].encode('utf-8')).hexdigest()
                self._save(owner, plan)
            if plan['scriptAssetId']:
                fingerprint = self._script(owner, plan['scriptAssetId'], plan.get('scriptFingerprint'))
                if not plan.get('scriptFingerprint'):
                    plan['scriptFingerprint'] = fingerprint
                    self._save(owner, plan)
            created, after_id = 0, plan['afterId']
            for shot in plan['shots']:
                state = self.board.snapshot(owner)['storyboard']
                previous = next((item for item in state['shots'] if item['id'] == shot['id']), None)
                if shot['revision'] is not None:
                    if previous is None:
                        raise ProjectError('计划镜头已被移除，不会重新创建。', 409)
                    if not shot.get('existing'):
                        created += 1
                        after_id = shot['id']
                    continue
                if previous is None:
                    expected = plan['baseOrderRevision'] + created
                    self.board.create(owner, {'id': shot['id'], 'title': shot['title'], 'description': shot['description'],
                        'expectedOrderRevision': expected, 'afterId': after_id}, None)
                created += 1
                after_id = shot['id']
                shot['revision'] = previous['revision'] if previous else 1
                self._save(owner, plan)

    async def _accept_step(self, owner, plan, step):
        """Only the coordinator changes plan checkpoints or adopts results."""
        if step['needsReview']:
            raise ProjectError('该步骤的上游素材已修复，请先核对并显式修复此步骤；未重做已有成果。', 409)
        if step['reuseAssetId']:
            self.repairs.reuse(owner, plan, step)
            self._complete_step(owner, plan, step)
            return
        if step['taskId'] is None:
            dependency = next((item for item in plan['steps'] if item['id'] == step['dependency']), None)
            if dependency and (dependency['status'] != 'completed' or not dependency['assetId'] or dependency['needsReview']):
                raise ProjectError('上游步骤尚未完成或需要复核，未提交下游生成。', 409)
            base = step['baseReferenceIds'] if step['baseReferenceIds'] is not None else step['referenceIds']
            model_config = step.get('model') or plan['models'][step['kind']]
            text_only = step['kind'] == 'image' and not input_rules({**model_config, 'kind': 'image'})['maxImages']
            refs = ([dependency['assetId']] if dependency and not text_only else []) + base
            if step['kind'] == 'video' and dependency and step.get('videoMode', 'first_frame') == 'first_frame':
                refs = [dependency['assetId']]
            step['referenceIds'] = list(dict.fromkeys(refs))
            if step.get('promptContent') is not None:
                records = {asset['id']: asset for asset in self.generation.canvas.assets.list(owner)}
                positioned = [part for part in step['promptContent'] if part['type'] == 'text' or part['assetId'] in step['referenceIds']]
                step['promptContent'] = reference_content(step['prompt'], step['referenceIds'], records, positioned)
                step['prompt'], step['referenceIds'] = project_content(step['promptContent'], speech=step['kind'] == 'audio')
            step['taskId'] = str(uuid5(UUID(step['id']), f'task:{step["attempt"]}'))
            step['status'] = 'submitting'
            self._save(owner, plan)
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner)
            task_path = child(child(directory, 'tasks'), step['taskId'] + '.json')
            task = read_generation_task(task_path) if task_path.exists() else None
        if task is None:
            model = step['model'] or plan['models'][step['kind']]
            config = self.generation.configs.resolve(model['id'], step['kind'])
            if any(config[key] != model[key] for key in ('url', 'modelId')):
                raise ProjectError('模型配置已变化，计划暂停；请恢复原配置或重新规划。', 409)
            current = self.generation.canvas.snapshot(owner)
            node = next((item for item in current['canvas']['nodes'] if item['id'] == step['nodeId']), None)
            task = await self.generation.submit(owner, step['nodeId'], {'id': step['taskId'], 'expectedRevision': node['revision'] if node else 1,
                'modelConfigId': config['id'], 'inputs': {'prompt': step['prompt'], 'promptContent': step.get('promptContent'), 'title': step['title'], 'referenceIds': step['referenceIds'], 'videoMode': step.get('videoMode', 'first_frame')}}, None,
                create=None if node else {'kind': step['kind']},
                adoption_policy=step['adoptionPolicy'],
                production={'productionPlanId': plan['id'], 'productionStepId': step['id'], 'shotId': step['shotId']})
        elif task['status'] != 'succeeded':
            task = await self.generation.recover(owner, task['id'])
        step['status'] = 'submitted'
        self._save(owner, plan)
        return task

    async def _wait_task(self, owner, task):
        """Observe one receipt; cancelling this waiter never cancels generation."""
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner)
            task_path = child(child(directory, 'tasks'), task['id'] + '.json')
        while task['status'] in {'queued', 'running'}:
            job = self.generation.jobs.get(task['id'])
            if job:
                await asyncio.shield(job.future)
            else:
                await asyncio.sleep(1)
            task = read_generation_task(task_path)
        if task['status'] != 'succeeded':
            if task.get('errorDetails'):
                raise GenerationError(GenerationFailure.model_validate(task['errorDetails']), 409, task.get('error'))
            raise ProjectError(task.get('error') or '生成未完成，请核对后重试。', 409)
        return task

    def _finish_step(self, owner, plan, step, task):
        step['assetId'] = task['assetId']
        try:
            task = self.generation.adopt_result(owner, task['id'])
        except (ProjectError, OSError) as failure:
            raise GenerationError(GenerationFailure(category='local', stage='adopt',
                message='素材已生成，但分镜采用失败。', suggestion='请保留已有素材，核对镜头是否被修改或移除后再采用。'),
                getattr(failure, 'status', 502)) from None
        self._save(owner, plan)  # Keep the candidate identity even if adoption is held.
        if task['storyboardAdoption']['status'] != 'adopted' and task['storyboardAdoption']['reason'] != 'downstream_kept':
            raise ProjectError('未自动设为分镜当前素材。' + task['storyboardAdoption']['message'] + ' 新结果已保存在分镜候选中，未继续下游制作。', 409)
        self._complete_step(owner, plan, step)

    def _complete_step(self, owner, plan, step):
        shot = next(shot for shot in plan['shots'] if shot['id'] == step['shotId'])
        current = next(item for item in self.board.snapshot(owner)['storyboard']['shots'] if item['id'] == shot['id'])
        shot['revision'] = current['revision']
        if shot.get('basis'):
            role = 'audio' if step['kind'] == 'audio' else 'visual'
            selected = step['inputBasis']['shot']['selected'][role] if step['preserveStoryboardSelection'] else step['assetId']
            shot['basis']['selected'][role] = selected
            if role == 'visual':
                shot['basis']['originalAudioMode'] = current['originalAudioMode']
                shot['basis']['legacyVisualChoices'] = current['legacyVisualChoices']
        for dependent in plan['steps']:
            if dependent['dependency'] == step['id'] and dependent['shotId'] == step['shotId'] and dependent['shotBasis'] and dependent['taskId'] is None:
                role = 'audio' if step['kind'] == 'audio' else 'visual'
                dependent['shotBasis']['selected'][role] = step['inputBasis']['shot']['selected'][role] if step['preserveStoryboardSelection'] else step['assetId']
                if role == 'visual':
                    dependent['shotBasis']['originalAudioMode'] = current['originalAudioMode']
                    dependent['shotBasis']['legacyVisualChoices'] = current['legacyVisualChoices']
        step['status'] = 'completed'
        step.update(error=None, errorDetails=None)
        self.repairs.completed(owner, plan, step)
        self._save(owner, plan)

    def _step_failed(self, owner, plan, step, failure):
        step['error'] = str(failure) if isinstance(failure, ProjectError) else '步骤处理失败，已有成果保留，请核对后继续。'
        step['errorDetails'] = failure.details.model_dump(mode='json') if isinstance(failure, GenerationError) else None
        if plan['error'] is None:
            plan.update(error=step['error'], errorDetails=step['errorDetails'])
        self._save(owner, plan)

    async def _schedule(self, owner, plan, steps):
        """Bounded dependency dispatch; all state merges stay in this coroutine.

        A failed branch is attempted once per explicit run. Other ready branches
        drain before the plan becomes blocked, preserving their adoption rights.
        """
        active = {}
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner)
            attempted = {step['id'] for step in steps if step.get('error') and not step['reuseAssetId']
                         and (not step['taskId'] or not child(child(directory, 'tasks'), step['taskId'] + '.json').is_file())}
        by_id = {step['id']: step for step in plan['steps']}
        dispatched = 0
        try:
            while True:
                for step in steps:
                    if len(active) >= MAX_PRODUCTION_CONCURRENCY:
                        break
                    if step['status'] == 'completed' or step['id'] in attempted:
                        continue
                    dependency = by_id.get(step['dependency'])
                    # Existing receipts are always reconciled; a failed parent
                    # cannot justify abandoning an already accepted child task.
                    if not step['taskId'] and dependency and (dependency['status'] != 'completed' or dependency['needsReview']):
                        continue
                    attempted.add(step['id'])
                    if dispatched % 4 == 0:
                        plan['batch'] += 1
                        self._save(owner, plan)
                    dispatched += 1
                    try:
                        task = await self._accept_step(owner, plan, step)
                    except (ProjectError, OSError, ValueError) as failure:
                        self._step_failed(owner, plan, step, failure)
                        continue
                    if task is not None:
                        active[asyncio.create_task(self._wait_task(owner, task))] = step
                if not active:
                    break
                done, _ = await asyncio.wait(active, return_when=asyncio.FIRST_COMPLETED)
                for future in list(active):  # Stable completion order for simultaneous receipts.
                    if future not in done:
                        continue
                    step = active.pop(future)
                    try:
                        self._finish_step(owner, plan, step, future.result())
                    except (ProjectError, OSError, ValueError) as failure:
                        self._step_failed(owner, plan, step, failure)
        finally:
            # Shielded generation jobs remain recoverable after stop/shutdown.
            for future in active:
                future.cancel()
            await asyncio.gather(*active, return_exceptions=True)

    async def _run(self, owner, plan_id):
        plan = read_production_plan(self._path(owner, plan_id))
        try:
            plan.update(status='running', error=None, errorDetails=None)
            self._save(owner, plan)
            self._initialize(owner, plan)
            remaining = [step for step in plan['steps'] if step['status'] != 'completed']
            repair_run = plan['repairRun']
            if repair_run:
                if repair_run['deadline'] is None:
                    repair_run['deadline'] = time.time() + MAX_REPAIR_SECONDS
                    self._save(owner, plan)
                remaining = [step for step in remaining if step['id'] == repair_run['stepId']]
            if repair_run:
                budget = repair_run['deadline'] - time.time()
                if budget <= 0:
                    raise TimeoutError
                async with asyncio.timeout(budget):
                    await self._schedule(owner, plan, remaining)
                if all(step['status'] == 'completed' for step in remaining):
                    plan['repairRun'] = None
            else:
                await self._schedule(owner, plan, remaining)
            if all(step['status'] == 'completed' for step in plan['steps']):
                plan.update(status='succeeded', error=None, errorDetails=None)
            elif any(step.get('error') for step in remaining):
                failed = next(step for step in remaining if step.get('error'))
                plan.update(status='blocked', error=failed['error'], errorDetails=failed['errorDetails'])
            elif not repair_run:
                plan.update(status='blocked', error='上游步骤尚未完成或需要复核，请核对对应步骤；已有成果保留。')
            else:
                plan.update(status='stopped', error='本次局部修复已完成，其余步骤保持不变；可核对后继续后续制作。')
        except TimeoutError:
            with self.store.transaction():
                self.generation.paused_plans.add(plan_id)
                plan.update(status='stopped', error='本次局部制作已达到 20 分钟时限，已停止后续操作；已提交任务仍可核对，返回结果仅保留候选。')
        except asyncio.CancelledError:
            plan.update(status='stopped' if plan_id in self.stopping else 'interrupted', error='后续制作已停止；已提交任务仍可能继续，可查看任务详情。' if plan_id in self.stopping else '服务中断，重启后将核对已有任务与成果。')
        except (ProjectError, OSError, ValueError) as failure:
            plan.update(status='blocked', error=str(failure) if isinstance(failure, ProjectError) else '计划保存或参数处理失败，请检查项目后继续。')
            plan['errorDetails'] = failure.details.model_dump(mode='json') if isinstance(failure, GenerationError) else None
        except Exception:
            plan.update(status='blocked', error='制作计划处理失败，已有成果保留，请核对后继续。')
        finally:
            self._save(owner, plan)
            self.stopping.discard(plan_id)

    async def stop(self, owner, plan_id, session, cancel_tasks=False, *, expected_revision=None):
        with self.store.transaction():
            self.read(owner, plan_id, session, expected_revision=expected_revision)
            path = self._path(owner, plan_id, session)
            self.stopping.add(plan_id)
            self.generation.paused_plans.add(plan_id)
        job = self.jobs.get(plan_id)
        if job:
            job.cancel()
            await asyncio.gather(job, return_exceptions=True)
        plan = read_production_plan(path)
        if plan['status'] != 'succeeded':
            # Stopping after a provider rejection must not erase its diagnosis.
            if not plan.get('errorDetails'):
                plan['error'] = '后续制作已停止。已提交的生成任务默认继续；可单独取消。'
            plan['status'] = 'stopped'
            self._save(owner, plan)
        if cancel_tasks:
            active = [step for step in self.view(owner, plan)['steps']
                      if step['task'] and step['task']['status'] in {'queued', 'running'}]
            for step in active:
                await self.generation.cancel(owner, step['taskId'], session)
            if plan['status'] != 'succeeded' and not plan.get('errorDetails'):
                plan['error'] = ('后续制作已停止，取消结果请查看任务状态；远端任务及费用请在供应商控制台核对。'
                                 if active else '后续制作已停止，当前没有可取消的进行中任务。')
                self._save(owner, plan)
        self.stopping.discard(plan_id)
        return plan

    async def resume(self, owner, plan_id, session, *, expected_revision=None):
        with self.store.transaction():
            plan = self.read(owner, plan_id, session, expected_revision=expected_revision)
            if plan['status'] in {'queued', 'running', 'succeeded'}:
                raise ProjectError('当前计划无需继续。', 409)
            if any(item['status'] in {'queued', 'running'} for item in self.list(owner)):
                raise ProjectError('项目已有其他制作计划，请先处理。', 409)
            if plan['repairRun'] and plan['repairRun']['deadline'] is not None and plan['repairRun']['deadline'] <= time.time():
                raise ProjectError('本次局部制作已达到 20 分钟时限，请先核对已有任务或创建新的修复操作。', 409)
            board = self.board.snapshot(owner)['storyboard']
            created = sum(shot['revision'] is not None and not shot.get('existing') for shot in plan['shots'])
            plan['baseOrderRevision'] = board['orderRevision'] - created
            for shot in plan['shots']:
                current = next((item for item in board['shots'] if item['id'] == shot['id']), None)
                if shot['revision'] is not None and current is None:
                    raise ProjectError('计划镜头已被移除，请重新规划以保留用户修改。', 409)
                if current:
                    shot['revision'] = current['revision']
            for step in plan['steps']:
                step.update(error=None, errorDetails=None)
                if step['status'] == 'completed' or not step['taskId']:
                    continue
                with self.store.transaction() as db:
                    directory = self.store._owner(db, owner)
                    task_path = child(child(directory, 'tasks'), step['taskId'] + '.json')
                    task = read_generation_task(task_path) if task_path.exists() else None
                if task and self.generation.recovery(task, directory) == 'retry':
                    if step['attempt'] + 1 >= MAX_STEP_ATTEMPTS:
                        raise ProjectError('该步骤已达到初始生成后最多再尝试 3 次的限制，请复用已有素材。', 409)
                    if step['inputBasis']:
                        node = self.generation.canvas._node(self.generation.canvas._read(directory), step['nodeId'])
                        original = (task.get('inputSnapshot') or {}).get('node')
                        if original != node_basis(node) or node['taskId'] != task['id']:
                            raise ProjectError('局部修复后节点输入或当前选择已变化，未重新提交生成。', 409)
                        step['inputBasis'].update(node=node_basis(node), nodeTaskId=node['taskId'], nodeExists=True)
                    step.update(taskId=None, status='pending', attempt=step['attempt'] + 1)
            plan.update(status='queued', error=None, errorDetails=None)
            self._save(owner, plan)
            self.generation.paused_plans.discard(plan_id)
        self._launch(owner, plan)
        return plan

    async def start(self):
        for project in (await asyncio.to_thread(self.store.list_projects))['projects']:
            for plan in self.list(project['id']):
                if plan['status'] in {'queued', 'running', 'interrupted'}:
                    self._launch(project['id'], plan)

    async def close(self):
        jobs = list(self.jobs.values())
        for job in jobs:
            job.cancel()
        await asyncio.gather(*jobs, return_exceptions=True)
