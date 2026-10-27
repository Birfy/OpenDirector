"""Field-scoped user edit history. Generation receipts and outputs never rewind."""
from copy import deepcopy
from uuid import NAMESPACE_URL, uuid4, uuid5
import json

from pydantic import ValidationError

from museshow.domain.canvas import CanvasCommand, CanvasNode, EDITABLE_FIELDS
from museshow.domain.canvas_layout import CanvasLayout
from museshow.domain.projects import ProjectError
from museshow.domain.assets import canonical_fingerprints


def migrate_history(state):
    """Read old layout undo once; the next atomic write stores the unified format."""
    legacy = state.pop('layoutUndo', None)
    if not legacy or 'history' in state:
        return state
    before, after = legacy['before'], legacy['after']
    old = {item['id']: item for item in before['positions']}
    current = {node['id']: {key: node[key] for key in ('id', 'x', 'y')} for node in state['nodes']}
    if current != {item['id']: item for item in after['positions']} or current.keys() != old.keys():
        return state
    command = {'id': str(uuid5(NAMESPACE_URL, json.dumps(legacy, sort_keys=True))), 'label': '整理画布',
               'changes': [{'id': key, 'before': {k: old[key][k] for k in ('x', 'y')},
                            'after': {k: current[key][k] for k in ('x', 'y')}} for key in current if current[key] != old[key]],
               'layoutBefore': CanvasLayout.model_validate(before['layout']).model_dump(mode='json'),
               'layoutAfter': CanvasLayout.model_validate(after['layout']).model_dump(mode='json')}
    state['history'] = {'undo': [CanvasCommand.model_validate(command).model_dump(mode='json')]}
    return state


def public_state(state):
    history = state['history']
    return {**{key: value for key, value in state.items() if key != 'assetGroups'}, 'history': {direction: {key: history[direction][-1][key] for key in ('id', 'label')}
                               if history[direction] else None for direction in ('undo', 'redo')}}


def capture(state):
    return deepcopy({key: state[key] for key in ('nodes', 'layout')})


def record(state, before, label, *, operation_id=None, layout=False, records=None):
    from museshow.infrastructure.canvas_references import sync_references
    sync_references(state, records)
    old, new = ({node['id']: node for node in value['nodes']} for value in (before, state))
    changes = []
    for key in old.keys() & new.keys():
        fields = sorted(field for field in EDITABLE_FIELDS if old[key][field] != new[key][field])
        if fields:
            changes.append({'id': key, 'before': {field: old[key][field] for field in fields},
                            'after': {field: new[key][field] for field in fields}})
    command = {'id': operation_id or str(uuid4()), 'label': label, 'changes': changes,
               'added': [{'index': index, 'node': node} for index, node in enumerate(state['nodes']) if node['id'] not in old],
               'removed': [{'index': index, 'node': node} for index, node in enumerate(before['nodes']) if node['id'] not in new],
               'layoutBefore': before['layout'] if layout else None, 'layoutAfter': state['layout'] if layout else None}
    if not (changes or command['added'] or command['removed'] or (layout and before['layout'] != state['layout'])):
        return
    command = CanvasCommand.model_validate(command).model_dump(mode='json')
    history = state['history']
    # Consecutive files in one upload gesture are one undo step. Only this
    # explicit operation ID merges; independent edits are never time-coalesced.
    if operation_id and history['undo'] and history['undo'][-1]['id'] == operation_id and not history['redo']:
        history['undo'][-1]['added'].extend(deepcopy(command['added']))
    else:
        history['undo'] = [*history['undo'], deepcopy(command)][-50:]
    history['redo'] = []


def replay(state, direction, entry_id, request_id, tasks, records=None):
    history = state['history']
    receipt = {'id': request_id, 'direction': direction, 'entryId': entry_id}
    previous = next((item for item in history['receipts'] if item['id'] == request_id), None)
    if previous:
        if previous != receipt:
            raise ProjectError('撤销请求标识已使用，请刷新后重试。', 409, code='revision_conflict')
        return False
    source, destination = (direction, 'redo' if direction == 'undo' else 'undo')
    if not history[source] or history[source][-1]['id'] != entry_id:
        raise ProjectError('编辑历史已变化，请刷新后重试。', 409, code='revision_conflict')
    command = history[source][-1]
    if records:
        command = canonical_fingerprints(command, records)
    undo = direction == 'undo'
    expected, target = ('after', 'before') if undo else ('before', 'after')
    nodes = {node['id']: node for node in state['nodes']}
    removing, inserting = (command['added'], command['removed']) if undo else (command['removed'], command['added'])
    active = {task['nodeId'] for task in tasks if task['status'] in {'queued', 'running'}}
    conflict = '相关节点已变化，无法撤销或重做；请先核对节点和生成结果。'
    for item in removing:
        saved, node = item['node'], nodes.get(item['node']['id'])
        ignored = {'revision', 'assetIds'} | ({'role'} if saved['role'] == 'empty' else set())
        if not node or any(canonical_fingerprints(node[key], records or {}) != value for key, value in saved.items() if key not in ignored) or not set(saved['assetIds']) <= set(node['assetIds']):
            raise ProjectError(conflict, 409, code='revision_conflict')
        if node['id'] in active:
            raise ProjectError('节点正在生成，请先等待或取消任务，再撤销或重做。', 409)
        # Keep revision monotonic even across remove/restore cycles.
        item['node'] = deepcopy(node)
    for item in inserting:
        if item['node']['id'] in nodes:
            raise ProjectError(conflict, 409, code='revision_conflict')
    for change in command['changes']:
        node = nodes.get(change['id'])
        if command['label'] == '应用历史版本' and change['id'] in active:
            raise ProjectError('节点正在生成，请先等待或取消任务，再撤销或重做历史版本应用。', 409)
        if not node or any(canonical_fingerprints(node[key], records or {}) != value for key, value in change[expected].items()):
            raise ProjectError(conflict, 409, code='revision_conflict')
    for change in command['changes']:
        node = nodes[change['id']]
        try:
            value = CanvasNode.model_validate({**node, **deepcopy(change[target])}).model_dump(mode='json')
        except ValidationError:
            raise ProjectError('编辑历史中的节点数据无效，原文件已保留。', 409) from None
        node.update(value)
        if change[target].keys() - {'x', 'y'}:
            node['revision'] += 1
    removed_ids = {item['node']['id'] for item in removing}
    state['nodes'] = [node for node in state['nodes'] if node['id'] not in removed_ids]
    for item in sorted(inserting, key=lambda item: item['index']):
        node = deepcopy(item['node'])
        node['revision'] += 1
        item['node']['revision'] = node['revision']
        state['nodes'].insert(min(item['index'], len(state['nodes'])), node)
    # Placement hints may have advanced because of a background/new node.
    # Never rewind those hints unless they still match this command's basis.
    if command['layoutBefore'] is not None and state['layout'] == command['layoutAfter' if undo else 'layoutBefore']:
        state['layout'] = deepcopy(command['layoutBefore' if undo else 'layoutAfter'])
    history[source].pop()
    history[destination].append(command)
    history['receipts'] = [*history['receipts'], receipt][-100:]
    return True


def referenced_assets(history):
    for command in [*history.get('undo', []), *history.get('redo', [])]:
        for change in command['changes']:
            for fields in (change['before'], change['after']):
                yield fields.get('assetId')
                yield from fields.get('referenceIds', [])
        for item in [*command['added'], *command['removed']]:
            yield from item['node']['assetIds']
            yield from item['node']['referenceIds']
