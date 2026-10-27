"""Shared input checks for canvas selection and storyboard adoption.

Callers hold the project transaction from checking through committing. Revisions,
titles, coordinates and unrelated roles are deliberately not creative inputs.
"""
import hashlib
import time
from copy import deepcopy

from museshow.domain.projects import ProjectError
from museshow.domain.assets import fingerprint_matches, canonical_fingerprints
from museshow.infrastructure.execution import read_production_plan
from museshow.infrastructure.local_projects import child
from museshow.domain.references import reference_content


REASONS = {
    'candidate_only': '此任务只保存候选，尚未自动采用。',
    'plan_paused': '后续制作已暂停，返回结果仅保存为候选。',
    'plan_missing': '原制作计划或步骤已变化，结果仅保存为候选。',
    'plan_changed': '计划中的生成要求已变化，结果仅保存为候选。',
    'legacy': '旧任务缺少完整输入依据，请人工核对并选择候选。',
    'node_missing': '原画布节点已移除，已有结果仍保存在项目中。',
    'node_changed': '节点的生成输入或当前素材已变化，未替换你的选择。',
    'reference_changed': '参考素材内容已变化或缺失，结果仅保存为候选。',
    'model_changed': '模型配置已变化，结果仅保存为候选。',
    'shot_changed': '相关镜头的输入或当前素材已变化，未替换你的选择。',
    'script_changed': '剧本依据已变化或缺失，结果仅保存为候选。',
    'awaiting_plan': '候选已保存，等待制作计划核对后采用。',
    'canvas_held': '画布候选尚未采用，分镜也未自动替换。',
    'downstream_kept': '下游视频已完成并保留为当前画面；新关键帧仅作为候选，下游需要人工复核。',
}


def decision(reason=None):
    return {'status': 'candidate' if reason else 'adopted', 'reason': reason,
            'message': REASONS[reason] if reason else '已采用生成结果。'}


def node_basis(node):
    basis = {key: node[key] for key in ('kind', 'prompt', 'modelConfigId', 'referenceIds', 'draft', 'assetId')}
    if node['kind'] == 'video':
        basis['videoMode'] = node.get('videoMode', 'first_frame')
    if node.get('promptContent') is not None:
        basis['promptContent'] = node['promptContent']
    return deepcopy(basis)


def fingerprints(records, ids):
    return {asset_id: records[asset_id]['fingerprint'] for asset_id in ids}


def shot_basis(shot):
    return deepcopy({key: shot[key] for key in ('description', 'selected', 'originalAudioMode', 'legacyVisualChoices')})


def references_match(directory, records, expected):
    for asset_id, fingerprint in expected.items():
        asset = records.get(asset_id)
        if asset is None or not fingerprint_matches(asset, fingerprint):
            return False
        try:
            data = child(child(directory, 'assets'), asset_id).read_bytes()
        except OSError:
            return False
        if 'sha256:' + hashlib.sha256(data).hexdigest() != asset['fingerprint']:
            return False
    return True


def verify_review_asset(directory, records, node, shot, kind, asset_id, fingerprint):
    role = 'audio' if kind == 'audio' else 'visual'
    choices = set(node['assetIds'] if node else []) | set(shot['candidates'][role])
    asset = records.get(asset_id)
    if asset_id not in choices or not asset or asset['kind'] != kind or not references_match(directory, records, {asset_id: fingerprint}):
        raise ProjectError('所评价的候选已变化、缺失或不属于此步骤，请重新核对。', 409)


def reason(task, directory, node, records, board, configs, paused, *, check_model=True, submission=False):
    if not submission and task.get('adoptionPolicy') == 'candidate_only':
        return 'candidate_only'
    snapshot = task.get('inputSnapshot')
    if snapshot is None:
        return 'legacy'
    if task.get('productionPlanId'):
        path = child(child(directory, 'production-plans'), task['productionPlanId'] + '.json')
        if not path.exists():
            return 'plan_missing'
        plan = read_production_plan(path)
        step = next((item for item in plan['steps'] if item['id'] == task.get('productionStepId')), None)
        if not step or step['taskId'] != task['id'] or step['shotId'] != task['shotId']:
            return 'plan_missing'
        def creative_input(value):
            content = reference_content(value['prompt'], value['referenceIds'], records, value.get('promptContent'))
            return ''.join(part['text'] if part['type'] == 'text' else '\ufffc' + part['assetId'] for part in content)
        if step['referenceIds'] != task['referenceIds'] or creative_input(step) != creative_input(task) or step.get('videoMode', 'first_frame') != task.get('videoMode', 'first_frame'):
            return 'plan_changed'
        run = plan.get('repairRun')
        expired = run and run['deadline'] is not None and run['deadline'] <= time.time()
        if paused or expired or plan['status'] not in {'queued', 'running'}:
            return 'plan_paused'
        script = snapshot.get('script')
        if script != {'assetId': plan['scriptAssetId'], 'fingerprint': plan.get('scriptFingerprint')}:
            return 'script_changed'
        if script['assetId'] and not references_match(directory, records, {script['assetId']: script['fingerprint']}):
            return 'script_changed'
        shot = next((item for item in board['shots'] if item['id'] == task['shotId']), None)
        expected = snapshot.get('shot')
        if expected is None:
            return 'legacy'
        role = 'audio' if task['kind'] == 'audio' else 'visual'
        if shot is None or shot['description'] != expected['description']:
            return 'shot_changed'
        allowed = {expected['selected'][role]}
        if task.get('assetId'):
            allowed.add(task['assetId'])
        if shot['selected'][role] not in allowed:
            return 'shot_changed'
        if role == 'visual' and shot['selected'][role] != task.get('assetId') and (shot['originalAudioMode'] != expected['originalAudioMode'] or shot['legacyVisualChoices'] != expected['legacyVisualChoices']):
            return 'shot_changed'
    if node is None:
        return 'node_missing'
    current, expected = (canonical_fingerprints(item, records) for item in (node_basis(node), snapshot['node']))
    changed = [key for key in current.keys() | expected.keys() if key != 'assetId' and current.get(key, 'first_frame' if key == 'videoMode' else None) != expected.get(key, 'first_frame' if key == 'videoMode' else None)]
    if current['assetId'] == task.get('assetId') and current['draft'] is None:
        changed = [key for key in changed if key != 'draft']  # Our own text adoption clears the original draft.
    if node['taskId'] != task['id'] or changed:
        return 'node_changed'
    if current['assetId'] not in {expected['assetId'], task.get('assetId')}:
        return 'node_changed'
    if not references_match(directory, records, snapshot['references']):
        return 'reference_changed'
    if not check_model:
        return None  # Explicit local reuse has no provider configuration.
    try:
        model = configs.resolve(task['modelConfigId'], 'agent' if task['kind'] == 'text' else task['kind'])
        if model['url'] != task['baseURL'] or model['modelId'] != task['model']:
            return 'model_changed'
    except ProjectError:
        return 'model_changed'
    return None
