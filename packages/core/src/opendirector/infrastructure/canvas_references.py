"""Live node references and immutable generation evidence share one document format."""
from copy import deepcopy

from opendirector.domain.references import project_content, reference_content
from opendirector.domain.projects import ProjectError
from opendirector.domain.assets import fingerprint_matches
from opendirector.infrastructure.canvas_assets import logical_nodes


def reference_index(state):
    nodes = {node['id']: node for node in logical_nodes(state)}
    owners = {asset: node for node in nodes.values() for asset in node['assetIds']}
    # Removed sources keep their identity, so restoring them restores the link.
    for key, group in state.get('assetGroups', {}).items():
        for asset in group['assetIds']:
            owners.setdefault(asset, {'id': key})
    return nodes, owners


def resolve_content(content, state, records, *, strict=False, index=None):
    nodes, owners = index if index is not None else reference_index(state)
    result = deepcopy(content)
    for part in result:
        if part['type'] != 'reference':
            continue
        if part.get('binding') == 'asset':
            asset = records.get(part['assetId'])
            if strict and (not asset or not fingerprint_matches(asset, part.get('fingerprint'))):
                raise ProjectError('固定参考素材缺失或内容已改变，请重新核对版本。', 409)
            part.pop('nodeId', None)
            continue
        owner = nodes.get(part.get('nodeId')) if part.get('nodeId') else owners.get(part['assetId'])
        if owner:
            part['nodeId'] = owner['id']
        source = nodes.get(part.get('nodeId'))
        asset = records.get(source['assetId']) if source and source.get('assetId') else None
        if asset and not (source['kind'] == 'text' and source.get('draft') is not None):
            name = (source['title'] or asset['name']) if part['assetId'] != asset['id'] else part['name']
            part.update(assetId=asset['id'], name=name, fingerprint=asset['fingerprint'])
        elif strict:
            raise ProjectError('参考源不存在或尚未保存，请重新选择参考素材。', 409)
    return result


def resolve_inputs(node, state, records, *, strict=False, index=None):
    if node.get('promptContent') is None:
        # Unpositioned API/Agent context has no user-authored inline labels.
        # Resolve its assets without injecting labels into the original prompt.
        content = resolve_content(reference_content('', node['referenceIds'], records), state, records, strict=strict, index=index)
        return {'prompt': node['prompt'], 'promptContent': None, 'referenceIds': project_content(content)[1]}
    content = reference_content(node['prompt'], node['referenceIds'], records, node.get('promptContent'))
    content = resolve_content(content, state, records, strict=strict, index=index)
    prompt, ids = project_content(content, speech=node['kind'] == 'audio')
    return {'prompt': prompt, 'promptContent': content if content or node.get('promptContent') is not None else None,
            'referenceIds': ids}


def sync_references(state, records=None):
    """Only current outputs drive following; never recurse through input changes."""
    if records is None:
        return
    index = reference_index(state)
    for node in logical_nodes(state):
        if not node['referenceIds'] and not node.get('promptContent'):
            continue
        value = resolve_inputs(node, state, records, index=index)
        if any(node.get(key) != item for key, item in value.items()):
            node.update(value)
            node['revision'] += 1


def edge_records(state, records, tasks):
    index = reference_index(state)
    nodes = index[0]
    by_task = {task['id']: task for task in tasks if task.get('id')}
    by_asset = {task['assetId']: task for task in tasks if task.get('assetId')}
    edges = []
    visible = {node['id'] for node in state['nodes']}
    for target in state['nodes']:
        if target['role'] == 'material':
            continue
        output = records.get(target['assetId'], {})
        task = by_task.get(output.get('generationTaskId')) or by_asset.get(target['assetId']) or {}
        inputs = output.get('generationInputs') or {}
        used = (task.get('inputSnapshot') or {}).get('references', inputs.get('referenceFingerprints', {}))
        recorded = bool(task or inputs)
        content = resolve_content(reference_content(target['prompt'], target['referenceIds'], records, target.get('promptContent')), state, records, index=index)
        seen = set()
        for part in content:
            source = nodes.get(part.get('nodeId')) if part['type'] == 'reference' else None
            if not source or source['id'] not in visible or source['id'] in seen:
                continue
            seen.add(source['id'])
            asset = records.get(source['assetId']) or {}
            current = bool(asset) and fingerprint_matches(asset, used.get(asset['id']))
            source_assets = set(source['assetIds'])
            original = next((key for key in used if key in source_assets), None)
            edges.append({'sourceId': source['id'], 'targetId': target['id'],
                          'state': 'current' if current else 'pending', 'recorded': recorded,
                          'assetId': source['assetId'], 'usedAssetId': original})
    return edges


def input_changes(state, records, tasks):
    by_asset = {task['assetId']: task for task in tasks if task.get('assetId')}
    changed = []
    for node in state['nodes']:
        asset = records.get(node['assetId']) or {}
        original = by_asset.get(node['assetId']) or asset.get('generationInputs')
        if not original:
            continue
        defaults = {'videoMode': 'first_frame', 'modelConfigId': asset.get('modelConfigId')}
        if any(node.get(key) != original.get(key, defaults.get(key)) for key in ('prompt', 'referenceIds', 'modelConfigId', 'videoMode')):
            changed.append(node['id'])
    return changed
