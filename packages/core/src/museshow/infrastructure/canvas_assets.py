"""Current logical sources are independent of their canvas presentation."""
from museshow.domain.canvas import CanvasNode
from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import child, read_json


def logical_nodes(state):
    visible = {node['id']: node for node in state.get('nodes', [])}
    hidden = [group['node'] for key, group in state.get('assetGroups', {}).items()
              if key not in visible and group.get('node')]
    return [*visible.values(), *hidden]


def current_asset_ids(directory):
    path = child(directory, 'canvas.json')
    state = read_json(path) if path.exists() else {}
    inventory = child(directory, 'assets.json')
    ids = set(read_json(inventory)) if inventory.exists() else set()
    return {str(node.assetId) for value in logical_nodes(state)
            if (node := CanvasNode.model_validate(value)).assetId is not None and str(node.assetId) in ids
            and not (node.kind == 'text' and node.draft is not None)
            and child(child(directory, 'assets'), str(node.assetId)).is_file()}


def require_current_assets(directory, asset_ids, *, retained=()):
    rejected = set(asset_ids) - set(retained) - current_asset_ids(directory)
    if rejected:
        inventory = child(directory, 'assets.json')
        records = read_json(inventory) if inventory.exists() else {}
        if any(key in records and not child(child(directory, 'assets'), key).is_file() for key in rejected):
            raise ProjectError('参考素材文件缺失，请检查项目目录或重新上传。', 409)
        raise ProjectError('所选素材不是有效的当前版本。请先应用对应历史版本，或重新选择参考素材。', 409)


def remember_asset_groups(state):
    active = {node['id'] for node in state['nodes']}
    for node in state['nodes']:
        if not node['assetIds']:
            continue
        previous = state['assetGroups'].get(node['id'])
        if previous and previous['assetIds'] == node['assetIds']:
            state['assetGroups'][node['id']] = {**{key: node[key] for key in ('role', 'assetId', 'assetIds')}, 'node': dict(node)}
            continue
        members = set(node['assetIds'])
        # Re-adding a removed node transfers its family, rather than leaving
        # another independent listing of the old current version behind.
        for key, group in list(state['assetGroups'].items()):
            if key not in active and set(group['assetIds']) <= members:
                del state['assetGroups'][key]
        state['assetGroups'][node['id']] = {**{key: node[key] for key in ('role', 'assetId', 'assetIds')}, 'node': dict(node)}


def listed_asset_ids(state, records, tasks):
    """Hide archived siblings, but keep removed nodes' last versions restorable."""
    groups = state['assetGroups'].values()
    archived = {asset_id for group in groups for asset_id in group['assetIds']}
    archived.update(task['assetId'] for task in tasks if task.get('assetId'))
    active = {node['assetId'] for node in state['nodes'] if node['assetId']}
    active_owners = {node['id'] for node in state['nodes']}
    placed = {asset_id for node in state['nodes'] for asset_id in node['assetIds']}
    removed = {group['assetId'] for key, group in state['assetGroups'].items()
               if key not in active_owners and group['assetId'] and not set(group['assetIds']) & placed}
    return ((set(records) - archived) | active | removed) & set(records)
