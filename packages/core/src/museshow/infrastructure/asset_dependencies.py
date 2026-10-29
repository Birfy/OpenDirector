"""Explain business retention separately from canvas undo/redo retention."""

from museshow.domain.storyboard import shot_asset_ids
from museshow.infrastructure.canvas_history import referenced_assets
from museshow.infrastructure.canvas_assets import logical_nodes
from museshow.infrastructure.execution import read_generation_task, read_production_plan
from museshow.infrastructure.local_projects import child, read_json


def content_uses(content, asset_id):
    return any(part.get('type') == 'reference' and part.get('assetId') == asset_id for part in content or [])


def dependency_context(store, directory, owner):
    from museshow.infrastructure.storyboard import read_storyboard

    canvas_path = child(directory, 'canvas.json')
    tasks, plans = child(directory, 'tasks'), child(directory, 'production-plans')
    return {'canvas': read_json(canvas_path) if canvas_path.exists() else {},
            'inventory': store._inventory(directory),
            'conversation': store._conversation(directory) if owner != 'scratch' else None,
            'shots': read_storyboard(directory)['shots'] if owner != 'scratch' else [],
            'tasks': [read_generation_task(child(tasks, path.name)) for path in sorted(tasks.glob('*.json'))] if tasks.exists() else [],
            'plans': [read_production_plan(child(plans, path.name)) for path in sorted(plans.glob('*.json'))] if plans.exists() else []}


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
    for shot in context['shots']:
        if asset_id in shot_asset_ids(shot):
            add('shot', shot['id'], f'分镜「{shot["title"]}」')

    for task in context['tasks']:
        snapshot = task.get('inputSnapshot') or {}
        if asset_id in task.get('referenceIds', []) or asset_id in snapshot.get('references', {}):
            add('task', task['id'], '生成任务的输入记录')
        elif asset_id == task.get('assetId') and task['status'] != 'succeeded':
            add('task', task['id'], '尚未完成的生成任务结果')

    for plan in context['plans']:
        used = asset_id == plan.get('scriptAssetId')
        used |= any(asset_id in (item['request']['assetId'], item['nodeAssetId'], item['shotAssetId']) for item in plan['feedback'])
        for repair in plan['repairs']:
            used |= asset_id == repair['request']['reviewedAssetId']
            for item in (repair['before'], repair['after']):
                basis = item.get('inputBasis') or {}
                node, shot = basis.get('node') or {}, basis.get('shot') or {}
                used |= asset_id in [*item['referenceIds'], *(item.get('baseReferenceIds') or []), item['assetId'], item.get('reuseAssetId'),
                                     *node.get('referenceIds', []), node.get('assetId'), *shot.get('referenceIds', []), *shot.get('selected', {}).values()]
        if plan.get('status') != 'succeeded':
            used |= any(asset_id in step.get('referenceIds', []) or asset_id == step.get('assetId') for step in plan.get('steps', []))
        if used:
            add('plan', plan['id'], '制作计划及修复记录')
    return {'blockers': blockers, 'history': history}
