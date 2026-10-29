"""Explain business retention separately from canvas undo/redo retention."""

from museshow.infrastructure.canvas_history import referenced_assets
from museshow.infrastructure.canvas_assets import logical_nodes
from museshow.infrastructure.execution import read_generation_task
from museshow.infrastructure.local_projects import child, read_json


def content_uses(content, asset_id):
    return any(part.get('type') == 'reference' and part.get('assetId') == asset_id for part in content or [])


def dependency_context(store, directory, owner):
    canvas_path = child(directory, 'canvas.json')
    tasks = child(directory, 'tasks')
    return {'canvas': read_json(canvas_path) if canvas_path.exists() else {},
            'inventory': store._inventory(directory),
            'conversation': store._conversation(directory) if owner != 'scratch' else None,
            'tasks': [read_generation_task(child(tasks, path.name)) for path in sorted(tasks.glob('*.json'))] if tasks.exists() else []}


def asset_dependencies(store, directory, owner, asset_id, *, context=None):
    context = context or dependency_context(store, directory, owner)
    blockers = []

    def add(kind, object_id, label):
        blockers.append({'kind': kind, 'id': object_id, 'label': label})

    canvas = context['canvas']
    history = {direction: sum(asset_id in set(referenced_assets({direction: [command]}))
                              for command in canvas.get('history', {}).get(direction, []))
               for direction in ('undo', 'redo')}
    if owner == 'scratch':
        return {'blockers': blockers, 'history': history}

    conversation = context['conversation']
    if any(item['id'] == asset_id for item in conversation.get('assets', [])) or content_uses(conversation.get('draftContent'), asset_id):
        add('draft', owner, '助手聊天输入草稿')
    for message in conversation.get('messages', []):
        if any(item['id'] == asset_id for item in message.get('assets', [])) or content_uses(message.get('content'), asset_id):
            add('message', message['id'], '助手历史消息')
    for asset in context['inventory'].values():
        inputs = asset.get('generationInputs') or {}
        if asset_id in [*asset.get('referenceIds', []), *inputs.get('referenceIds', [])] or content_uses(inputs.get('promptContent'), asset_id):
            add('asset', asset['id'], f'资产「{asset["name"]}」的参考或生成记录')
    for node in canvas.get('nodes', []):
        if asset_id in [*node.get('assetIds', []), *node.get('referenceIds', [])] or content_uses(node.get('promptContent'), asset_id):
            add('node', node['id'], f'画布节点「{node.get("title") or "未命名"}」')
    visible = {node['id'] for node in canvas.get('nodes', [])}
    for node in logical_nodes(canvas):
        if node['id'] not in visible and (asset_id in node.get('referenceIds', []) or content_uses(node.get('promptContent'), asset_id)):
            add('node', node['id'], f'未展开节点「{node.get("title") or "未命名"}」的参考')
    for node_id, group in canvas.get('assetGroups', {}).items():
        if asset_id in group['assetIds'] and len(group['assetIds']) > 1:
            add('versions', node_id, '节点的资产版本历史')
    for task in context['tasks']:
        snapshot = task.get('inputSnapshot') or {}
        if asset_id in task.get('referenceIds', []) or asset_id in snapshot.get('references', {}):
            add('task', task['id'], '生成任务的输入记录')
        elif asset_id == task.get('assetId') and task['status'] != 'succeeded':
            add('task', task['id'], '尚未完成的生成任务结果')

    return {'blockers': blockers, 'history': history}
