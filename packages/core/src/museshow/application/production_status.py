"""Read-only production facts shared by chat, tools and project context.

Execution, generated output, current selection and delivery are different facts.
Nothing in this projection recovers tasks, adopts candidates or changes inputs.
"""
from museshow.domain.production import MAX_STEP_ATTEMPTS
from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import child
from museshow.infrastructure.storyboard import read_storyboard
from museshow.infrastructure.timeline import TimelineProjects


STATES = {'pending': '待制作', 'waiting': '等待上游', 'queued': '等待生成', 'generating': '生成中',
          'adopting': '正在采用', 'adopted': '已采用', 'candidate': '候选待确认', 'retained': '已保留当前版本',
          'completed': '已完成，当前采用已变化', 'failed': '生成失败', 'review': '待核对', 'cancelled': '本地已取消',
          'rejected': '输入校验未通过，尚未生成'}
PHASES = {'prepare': '准备输入', 'submit': '提交生成', 'poll': '等待模型结果', 'download': '下载结果',
          'save': '保存结果', 'check': '检查文件', 'adopt': '采用结果'}


def step_progress(step, plan, nodes, tasks, shots, assets):
    task = tasks.get(step.get('taskId')) or step.get('task')
    node = nodes.get(step.get('nodeId'))
    shot = shots.get(step['shotId'])
    asset_id = step.get('assetId') or (task or {}).get('assetId')
    generated = bool(asset_id) or step['status'] == 'completed'
    role = 'audio' if step.get('kind') == 'audio' else 'visual'
    intermediate = step.get('kind') == 'image' and any(
        item.get('kind') == 'video' and item['shotId'] == step['shotId'] for item in plan['steps'])
    selected = bool(asset_id and node and node['assetId'] == asset_id and
                    (intermediate or (shot and shot['selected'][role] == asset_id)))
    kept = any(event['request']['stepId'] == step['id'] and event['request']['assetId'] == asset_id
               and assets.get(asset_id, {}).get('fingerprint') == event['request']['assetFingerprint']
               for event in plan.get('feedback', []))
    task_status = (task or {}).get('status')
    held = (task or {}).get('canvasAdoption') or {}
    diagnosis = step.get('errorDetails') or (task or {}).get('errorDetails') or {}
    next_action = ''
    if step.get('needsReview'):
        state, next_action = 'review', '上游已变化，请核对该镜头并明确修改要求。'
    elif task_status in {'queued', 'running'}:
        state = 'queued' if task_status == 'queued' else 'generating'
        next_action = PHASES.get(task.get('phase'), '等待模型结果')
    elif generated and not selected and diagnosis.get('category') == 'local' and diagnosis.get('stage') in {'save', 'adopt'}:
        state, next_action = 'review', '素材已生成，本地保存或采用需要核对；恢复原任务，不重新生成。'
    elif generated:
        if selected:
            state = 'adopted'
        elif step['status'] == 'completed':
            state, next_action = 'completed', '历史成果已保留，当前采用以画布和分镜为准。'
        elif kept:
            state = 'retained'
        elif plan['status'] in {'queued', 'running'} and held.get('reason') not in {
                'candidate_only', 'node_changed', 'reference_changed', 'shot_changed', 'model_changed', 'node_missing'}:
            state, next_action = 'adopting', '文件已生成，正在核对采用条件。'
        else:
            state, next_action = 'candidate', '在历史版本中应用到画布后确认分镜采用，或告诉助手保留当前版本。'
    elif task_status == 'interrupted' or (task or {}).get('recovery') == 'review':
        state, next_action = 'review', '核对原任务与已有结果；提交结果不明时不会重新生成。'
    elif task_status == 'cancelled':
        state, next_action = 'cancelled', '本地已取消，供应商取消与费用仍需核对。'
    elif step.get('error') and not task:
        state, next_action = ('review', '已有素材的本地采用需要核对，不会重新生成。') if step.get('reuseAssetId') else ('rejected', '调整输入或模型后再提交；尚未发起模型生成。')
    elif task_status == 'failed':
        state, next_action = 'failed', '查看失败原因，再明确重试或修改要求。'
    elif step.get('dependency') and next((item for item in plan['steps'] if item['id'] == step['dependency']), {}).get('status') != 'completed':
        state, next_action = 'waiting', '等待上游素材完成并确认。'
    else:
        state = 'pending'
    # Completed reuse can select an existing source without making it a version
    # of the generator. Its storyboard selection remains the authoritative fact.
    if step['status'] == 'completed' and step.get('reuseAssetId') and shot and shot['selected'][role] == asset_id:
        state, selected = 'adopted', True
    return {'id': step['id'], 'shotId': step['shotId'], 'nodeId': step.get('nodeId'), 'kind': step.get('kind'),
            'title': step['title'], 'shotTitle': (f"{shot['number']:02d} {shot['title']}" if shot and shot.get('number') else step['title']),
            'state': state, 'status': STATES[state], 'generated': generated, 'adopted': selected,
            'assetId': asset_id, 'taskId': step.get('taskId'), 'nextAction': next_action,
            'error': step.get('error') or (task or {}).get('error'),
            'errorDetails': diagnosis or None,
            'technicalCheck': (task or {}).get('technicalCheck'), 'adoption': (task or {}).get('storyboardAdoption')}


def can_resume(step, item, task):
    if step.get('needsReview') or step.get('adoptionPolicy', 'if_current') == 'candidate_only' or item['state'] in {'completed', 'retained', 'waiting'}:
        return False
    if item['state'] == 'adopted':
        return step['status'] != 'completed' and task.get('status') == 'succeeded'
    held = (task.get('canvasAdoption') or {}).get('reason') or (task.get('storyboardAdoption') or {}).get('reason')
    local = item['state'] == 'review' and (item['errorDetails'] or {}).get('category') == 'local'
    if item['generated'] and not local and held not in {'plan_paused', 'awaiting_plan'}:
        return False
    return task.get('recovery') != 'retry' or step.get('attempt', 0) < MAX_STEP_ATTEMPTS - 1


def plan_progress(plan, nodes, tasks, shots, assets, delivery, *, other_running=False):
    steps = [step_progress(step, plan, nodes, tasks, shots, assets) for step in plan['steps']]
    repair = plan.get('repairRun')
    if not repair and plan.get('repairs') and plan['status'] not in {'queued', 'running'}:
        repair = {'stepId': plan['repairs'][-1]['request']['stepId']}
    scope = [item for item in steps if not repair or item['id'] == repair['stepId']]
    generated = sum(item['generated'] for item in scope)
    adopted = sum(item['adopted'] for item in scope)
    candidates = sum(item['state'] == 'candidate' for item in steps)
    active = [item for item in steps if item['state'] in {'generating', 'queued', 'adopting'}]
    issues = [item for item in steps if item['state'] in {'failed', 'review', 'cancelled', 'rejected'}]
    running = plan['status'] in {'queued', 'running'}
    if running:
        label = '制作中' if plan['status'] == 'running' else '等待制作'
    elif active:
        label = '已停止推进，已提交任务仍在处理'
    elif issues:
        label = '有步骤需要核对'
    elif candidates:
        label = '候选待确认'
    elif all(item['state'] in {'adopted', 'completed', 'retained'} for item in scope):
        label = '本次修复已处理' if repair else '本次制作已处理'
    else:
        label = '已停止后续制作' if plan['status'] == 'stopped' else '等待核对后继续'
    actions = ['stop'] if running else []
    # Continue may reconcile the same accepted receipt. It never means accepting
    # a candidate-only result or refreshing authorization after user edits.
    resumable = any(can_resume(step, item, tasks.get(step.get('taskId')) or step.get('task') or {})
                    for step, item in zip(plan['steps'], steps))
    if not running and plan['status'] != 'succeeded' and not other_running and resumable:
        actions.append('resume')
    if plan['status'] != 'succeeded' and any((tasks.get(step.get('taskId')) or step.get('task') or {}).get('status') in {'queued', 'running'} for step in plan['steps']):
        actions.append('cancel')
    work_title = f"{scope[0]['title']}修复" if repair and scope else '本次制作'
    work_states = {item['state'] for item in scope}
    work_label = ('已采用' if adopted == len(scope) else
                  '制作中' if work_states & {'queued', 'generating', 'adopting'} else
                  '需要处理' if work_states & {'failed', 'rejected'} else
                  '待核对' if work_states & {'review', 'cancelled'} else
                  '候选待确认' if 'candidate' in work_states else
                  '已处理' if work_states <= {'adopted', 'completed', 'retained'} else '待制作')
    next_action = ('其他计划正在制作；本计划待处理项已保留。' if other_running and not running else
                   issues[0]['nextAction'] if issues else
                   '打开对应步骤的历史版本，确认候选或明确保留当前版本。' if candidates else
                   '后台按依赖继续推进。' if running else
                   '可以核对现有任务后按原设置继续。' if 'resume' in actions else
                   '可在时间线预览并导出当前分镜。' if delivery['ready'] else
                   '可在时间线草稿预览已就绪镜头；完整导出仍需补齐素材。' if delivery['previewAvailable'] else
                   '请补齐分镜所缺的素材。')
    text = f"{plan['title']}\n{label} · {work_title}（{work_label}）：已生成 {generated}/{len(scope)} 项，已采用 {adopted}/{len(scope)} 项"
    if candidates:
        text += f'\n候选 {candidates} 份待确认。'
    if issues and issues[0]['error']:
        text += '\n' + issues[0]['error']
    if any((tasks.get(step.get('taskId')) or step.get('task') or {}).get('status') == 'cancelled' for step in plan['steps']):
        text += '\n本地生成已取消；供应商是否取消及费用请以控制台为准。'
    return {'planId': plan['id'], 'title': plan['title'], 'revision': plan.get('revision'), 'status': plan['status'], 'label': label, 'text': text,
            'operationId': ((plan.get('repairRun') or {}).get('repairId') or
                            plan['repairs'][-1]['request']['id'] if plan.get('repairs') else None),
            'work': {'title': work_title, 'label': work_label, 'generated': generated, 'adopted': adopted, 'total': len(scope), 'unit': '项'},
            'completed': generated, 'total': len(scope), 'unit': '项', 'candidateCount': candidates,
            'activeCount': len(active), 'issueCount': len(issues), 'nextAction': next_action,
            'errorDetails': (next((item['errorDetails'] for item in issues if item['errorDetails']), None) or plan.get('errorDetails')) if issues else None,
            'steps': steps, 'actions': actions, 'delivery': delivery}


def reference_differences(board, nodes, assets, tasks, directory):
    result = []
    owners = {}
    for node in nodes.values():
        for asset_id in node['assetIds']:
            owners.setdefault(asset_id, []).append(node)
    for number, shot in enumerate(board['shots'], 1):
        visual = assets.get(shot['selected']['visual'])
        if not visual or visual['kind'] != 'video':
            continue
        task = tasks.get(visual.get('generationTaskId'))
        if not task:
            task = next((item for item in tasks.values() if item.get('assetId') == visual['id']), None)
        inputs = visual.get('generationInputs') or {}
        references = task.get('referenceIds', []) if task else inputs.get('referenceIds', [])
        recorded = (task or {}).get('promptContent') or inputs.get('promptContent') or []
        for asset_id in references:
            asset = assets.get(asset_id)
            if not asset or asset['kind'] != 'image':
                continue
            bound_id = next((part.get('nodeId') for part in recorded if part.get('assetId') == asset_id), None)
            sources = owners.get(asset_id, [])
            source = nodes.get(bound_id) if bound_id else sources[0] if len(sources) == 1 else None
            if source and asset_id not in source['assetIds']:
                source = None
            if source and source['assetId'] == asset_id:
                continue
            current = assets.get(source['assetId']) if source else None
            result.append({'shotId': shot['id'], 'title': f"{number:02d} {shot['title']}", 'videoAssetId': visual['id'],
                'asset': asset, 'sourceNodeId': source['id'] if source else None, 'sourceRevision': source['revision'] if source else None,
                'usedVersion': source['assetIds'].index(asset_id) + 1 if source and asset_id in source['assetIds'] else None,
                'currentAssetId': current['id'] if current else None, 'currentName': current['name'] if current else None,
                'currentVersion': source['assetIds'].index(current['id']) + 1 if source and current and current['id'] in source['assetIds'] else None,
                'available': child(child(directory, 'assets'), asset_id).is_file(),
                'message': '已采用视频使用的关键帧与来源当前版本不同。' if source else '已采用视频的原参考来源已缺失或无法唯一定位，请核对。'})
    return result


def project_progress(production, owner, plans=None):
    with production.store.transaction() as db:
        directory = production.store._owner(db, owner)
        plans = production.list(owner) if plans is None else plans
        canvas = production.generation.canvas
        nodes = {node['id']: node for node in canvas._read(directory)['nodes']}
        assets = canvas.assets._records(directory, owner)
        tasks = {task['id']: task for task in canvas._tasks(directory)}
        board = read_storyboard(directory)
        shots = {shot['id']: {**shot, 'number': index} for index, shot in enumerate(board['shots'], 1)}
        timeline = TimelineProjects(production.store)
        preview_shots, preview_frames = [], 0
        try:
            snapshot = timeline._snapshot(directory, owner)
            problems = snapshot['problems']
            coverage = snapshot['preview']
            ready_shots = coverage['availableShots']
            preview_shots = [{key: entry[key] for key in ('shotId', 'number', 'title')}
                             for entry in coverage['shots'] if entry['available']]
            preview_frames = coverage['durationFrames']
        except ProjectError as failure:
            problems, _ = timeline._check_board(directory, board, assets)
            ready_shots = sum(not timeline._check_board(directory, {'shots': [shot]}, assets)[0] for shot in board['shots'])
            problems = [*problems, str(failure)]
        ready = bool(shots) and not problems
        preview_available = bool(preview_shots)
        suffix = ('，可预览和导出。' if ready else
                  '；可草稿预览已就绪镜头，完整片长待定，完整导出仍需补齐或核对素材。' if preview_available else
                  '；暂无可预览区段，完整预览和导出仍需补齐或核对素材。')
        delivery = {'readyShots': ready_shots, 'totalShots': len(shots), 'ready': ready,
                    'previewAvailable': preview_available, 'partialPreview': preview_available and not ready,
                    'previewShots': preview_shots, 'previewDurationFrames': preview_frames,
                    'exportAvailable': ready, 'problems': problems,
                    'text': f'当前分镜：{ready_shots}/{len(shots)} 镜素材可用' + suffix,
                    'note': '草稿只拼接已就绪镜头，不代表完整片长；当前分镜可用不代表本次制作／修复已完成，也不代表已经导出；内容质量仍需人工确认。'}
        from museshow.infrastructure.canvas_assets import logical_nodes
        sources = {node['id']: node for node in logical_nodes(canvas._read(directory))}
        differences = reference_differences(board, sources, assets, tasks, directory)
        summaries = []
        for plan in plans:
            view = production.view(owner, plan)
            item = plan_progress(view, nodes, tasks, shots, assets, delivery,
                other_running=any(other['id'] != plan['id'] and other['status'] in {'queued', 'running'} for other in plans))
            item['referenceDifferences'] = differences if plan['id'] == plans[0]['id'] else [diff for diff in differences if diff['shotId'] in {shot['id'] for shot in plan['shots']}]
            summaries.append(item)
        return {'delivery': delivery, 'plans': summaries}
