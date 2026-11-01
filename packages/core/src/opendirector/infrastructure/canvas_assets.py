"""Current logical sources are independent of their canvas presentation."""
from opendirector.domain.canvas import CanvasNode
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.local_projects import child, read_json


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
    def content_available(node):
        file = child(child(directory, 'assets'), str(node.assetId))
        try:
            return file.is_file() and (node.kind != 'text' or bool(file.read_bytes().decode('utf-8-sig').strip()))
        except (OSError, UnicodeDecodeError):
            return False
    return {str(node.assetId) for value in logical_nodes(state)
            if (node := CanvasNode.model_validate(value)).assetId is not None and str(node.assetId) in ids
            and not (node.kind == 'text' and node.draft is not None)
            and content_available(node)}


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
            if not node.get('logicalNodeId') and key not in active and set(group['assetIds']) <= members:
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


def require_node_references(directory, node, *, retained=()):
    """Pinned references validate the immutable file, following references validate current owners."""
    from hashlib import sha256
    from opendirector.domain.assets import fingerprint_matches
    fixed = {part['assetId']: part for part in node.get('promptContent') or []
             if part['type'] == 'reference' and part.get('binding') == 'asset'}
    if fixed:
        records = read_json(child(directory, 'assets.json'))
        for key, part in fixed.items():
            file = child(child(directory, 'assets'), key)
            asset = records.get(key)
            if not asset or not file.is_file() or not fingerprint_matches(asset, part.get('fingerprint')) or asset['fingerprint'] != 'sha256:' + sha256(file.read_bytes()).hexdigest():
                raise ProjectError('固定参考素材缺失或内容已改变，请核对指定版本。', 409)
    require_current_assets(directory, [key for key in node['referenceIds'] if key not in fixed], retained=retained)
    # Current source identity is not permission to read changed on-disk bytes.
    records = read_json(child(directory, 'assets.json')) if node['referenceIds'] else {}
    for key in node['referenceIds']:
        if key in retained:
            continue  # Editing an existing unavailable source is distinct from execution.
        asset = records.get(key, {})
        expected = asset.get('fingerprint', '')
        file = child(child(directory, 'assets'), key)
        if not file.is_file() or expected.startswith('sha256:') and expected != 'sha256:' + sha256(file.read_bytes()).hexdigest():
            raise ProjectError('参考素材文件缺失或内容已改变，请重新核对来源。', 409)
