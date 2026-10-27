"""Asset-specific generation history. Never infer inputs from a mutable node."""

import hashlib

from museshow.domain.canvas import CanvasNode, lock_role
from museshow.domain.projects import ProjectError
from museshow.domain.references import project_content, reference_content
from museshow.infrastructure.canvas_assets import current_asset_ids, logical_nodes
from museshow.infrastructure.canvas_references import resolve_content, reference_index
from museshow.infrastructure.canvas_history import capture, record
from museshow.infrastructure.execution import read_production_plan
from museshow.infrastructure.local_projects import child, read_json
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.infrastructure.storyboard import read_storyboard


def version_records(node_id, asset_ids, records, tasks, *, directory=None, node=None, models=None):
    by_id = {task['id']: task for task in tasks}
    result = []
    for number, asset_id in enumerate(asset_ids, 1):
        asset = records.get(asset_id)
        if asset is None:
            continue
        task = by_id.get(asset.get('generationTaskId'))
        if not task or task.get('assetId') != asset_id:
            task = next((item for item in tasks if item.get('assetId') == asset_id and item['nodeId'] == node_id), None)
        uploaded = asset['source'] == 'upload'
        if uploaded:
            task = None
        inputs = asset.get('generationInputs') if not uploaded else None
        if not task and inputs:
            task = {'prompt': inputs['prompt'], 'promptContent': inputs.get('promptContent'), 'referenceIds': inputs['referenceIds'],
                'inputSnapshot': {'references': inputs['referenceFingerprints']},
                'modelConfigId': asset['modelConfigId'], 'model': inputs['modelName'], 'baseURL': inputs['modelURL']}
        result.append({'number': number, 'asset': asset,
            'recorded': uploaded or task is not None,
            'prompt': task.get('prompt') if task else None,
            'promptContent': task.get('promptContent') if task else None,
            'videoMode': task.get('videoMode', 'first_frame') if task else 'first_frame',
            'referenceIds': list(task.get('referenceIds', [])) if task else [],
            'referenceFingerprints': (task.get('inputSnapshot') or {}).get('references', {}) if task else {},
            'modelConfigId': task.get('modelConfigId') if task else None,
            'modelName': task.get('model') if task else None,
            'applicableModelConfigId': next((model['id'] for model in (models or []) if task
                and model['id'] == task.get('modelConfigId') and model['modelId'] == task.get('model')
                and model['kind'] == ('agent' if asset['kind'] == 'text' else asset['kind'])
                and model['url'] == task.get('baseURL')), None)})
        version = result[-1]
        if version['promptContent'] is not None:
            version['promptContent'] = reference_content(version['prompt'] or '', version['referenceIds'], records, version['promptContent'])
            version['prompt'], version['referenceIds'] = project_content(version['promptContent'], speech=asset['kind'] == 'audio')
    if directory is not None:
        path = child(directory, 'canvas.json')
        state = read_json(path) if path.exists() else {'nodes': []}
        index = reference_index(state)
        for version in result:
            version['available'] = child(child(directory, 'assets'), version['asset']['id']).is_file()
            version['applied'] = bool(node) and node['assetId'] == version['asset']['id']
            version['currentPromptContent'] = resolve_content(version.get('promptContent') or reference_content(version['prompt'] or '', version['referenceIds'], records), state, records, index=index)
    return result


def node_history(canvas, owner, node_id):
    with canvas.store.transaction() as db:
        directory = canvas.store._owner(db, owner)
        node = canvas._node(canvas._read(directory), node_id)
        records, tasks = canvas.assets._records(directory, owner), canvas._tasks(directory)
        production = None
        folder = child(directory, 'production-plans')
        plans = [read_production_plan(child(folder, f.name)) for f in folder.glob('*.json')]
        for plan in sorted(plans, key=lambda value: value['createdAt'], reverse=True):
            step = next((item for item in plan['steps'] if item['nodeId'] == node_id), None)
            if step:
                production = {'planId': plan['id'], 'stepId': step['id']}
                break
        versions = version_records(node_id, node['assetIds'], records, tasks, directory=directory, node=node, models=ModelConfigs(canvas.store.repository).list())
        unsettled = any(task['nodeId'] == node_id and (task['status'] in {'queued', 'running'}
            or (task['status'] != 'succeeded' and (task.get('recovery') == 'review'
                or (task.get('resumeAllowed') and task.get('recovery') not in {'retry', 'submit'})))) for task in tasks)
        active_plan = any(plan['status'] in {'queued', 'running'} and
            any(step['nodeId'] == node_id for step in plan['steps']) for plan in plans)
        state = canvas._read(directory)
        return {'node': node, 'nodes': logical_nodes(state), 'assets': list(records.values()),
            'versions': versions, 'production': production,
            'availableAssetIds': sorted(current_asset_ids(directory)), 'blocked': unsettled or active_plan,
            'running': any(task['nodeId'] == node_id and task['status'] in {'queued', 'running'} for task in tasks),
            'selectedByShots': [{'id': shot['id'], 'title': shot['title'], 'assetId': asset_id}
                for shot in read_storyboard(directory)['shots'] for asset_id in shot['selected'].values() if asset_id in node['assetIds']]}


def restored_fields(version):
    return {'assetId': version['asset']['id'], 'prompt': version['prompt'] or '',
            'videoMode': version.get('videoMode', 'first_frame'),
            'promptContent': version.get('promptContent'), 'referenceIds': version['referenceIds'], 'modelConfigId': version['applicableModelConfigId'], 'draft': None}


def apply_version(canvas, owner, node_id, asset_id, expected_revision, fingerprint, session):
    """Restore one result and its inputs in one undoable canvas write only."""
    with canvas.store.transaction() as db:
        directory = canvas.store._owner(db, owner, session)
        history = node_history(canvas, owner, node_id)
        node = history['node']
        if node['revision'] != expected_revision:
            raise ProjectError('节点内容已变化，请重新读取历史版本后再应用。', 409, code='revision_conflict')
        if history['blocked']:
            raise ProjectError('节点仍在制作或任务结果待核对，请先在节点或助手中处理任务。', 409)
        version = next((item for item in history['versions'] if item['asset']['id'] == asset_id), None)
        if version is None:
            raise ProjectError('历史版本不属于该节点，或资产记录已缺失。', 404)
        data, asset = canvas.store.asset(owner, asset_id)
        if asset['fingerprint'] != fingerprint or 'sha256:' + hashlib.sha256(data).hexdigest() != fingerprint:
            raise ProjectError('历史版本的文件已变化，请重新加载并核对。', 409)
        if node['kind'] == 'text':
            try:
                data.decode('utf-8-sig')
            except UnicodeDecodeError:
                raise ProjectError('历史文本无法读取，未修改节点。', 409) from None
        fields = restored_fields(version)
        if all(node[key] == value for key, value in fields.items()):
            return node
        state = canvas._read(directory)
        before = capture(state)
        target = canvas._node(state, node_id)
        if target['role'] == 'empty':
            lock_role(target, 'generation' if asset['source'] == 'generated' else 'material')
        target.update(CanvasNode.model_validate({**target, **fields, 'revision': target['revision'] + 1}).model_dump(mode='json'))
        record(state, before, '应用历史版本', records={asset['id']: asset for asset in history['assets']})
        canvas._write(directory, state)
        return target
