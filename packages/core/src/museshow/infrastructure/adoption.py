"""Input checks for adopting a completed canvas result.

Callers hold the project transaction from checking through committing. Revisions,
titles, coordinates and unrelated roles are deliberately not creative inputs.
"""
import hashlib
from copy import deepcopy

from museshow.domain.projects import ProjectError
from museshow.domain.assets import fingerprint_matches, canonical_fingerprints
from museshow.infrastructure.local_projects import child


REASONS = {
    'candidate_only': '此任务只保存候选，尚未自动采用。',
    'legacy': '旧任务缺少完整输入依据，请人工核对并选择候选。',
    'node_missing': '原画布节点已移除，已有结果仍保存在项目中。',
    'node_changed': '节点的生成输入或当前素材已变化，未替换你的选择。',
    'reference_changed': '参考素材内容已变化或缺失，结果仅保存为候选。',
    'model_changed': '模型配置已变化，结果仅保存为候选。',
    'canvas_held': '画布候选尚未采用，未替换当前选择。',
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


def reason(task, directory, node, records, configs):
    if task.get('adoptionPolicy') == 'candidate_only':
        return 'candidate_only'
    snapshot = task.get('inputSnapshot')
    if snapshot is None:
        return 'legacy'
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
    try:
        model = configs.resolve(task['modelConfigId'], 'agent' if task['kind'] == 'text' else task['kind'])
        if model['url'] != task['baseURL'] or model['modelId'] != task['model']:
            return 'model_changed'
    except ProjectError:
        return 'model_changed'
    return None
