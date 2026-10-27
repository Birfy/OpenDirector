"""Read-only batch preflight; selecting references never invokes a model."""
from museshow.domain.projects import ProjectError
from museshow.domain.assets import fingerprint_matches
from museshow.domain.references import project_content
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.canvas_assets import require_current_assets
from museshow.integrations.reference_inputs import reference_content


def validate_chat_references(store, owner, content, selections):
    canvas = CanvasProjects(store)
    with store.transaction() as db:
        directory = store._owner(db, owner)
        # Read without _sync: a preview must not create nodes or undo entries.
        state = canvas._read(directory)
        records = canvas.assets._records(directory, owner)
        nodes = {node['id']: node for node in state['nodes']}
        for selection in selections:
            node = nodes.get(selection['nodeId'])
            asset = records.get(selection['assetId'])
            if not node or node['assetId'] != selection['assetId'] or not asset or asset['fingerprint'] != selection['fingerprint']:
                raise ProjectError('框选素材或画布版本已变化，整批未插入，请重新框选。', 409)
            if node['kind'] == 'text' and node.get('draft') is not None:
                raise ProjectError('所选文本尚未保存，整批未插入，请先保存文本。', 409)
        text, ids = project_content(content)
        require_current_assets(directory, [*ids, *(selection['assetId'] for selection in selections)])
        # Bind every existing inline reference as well as newly selected ones.
        for part in content:
            if part['type'] == 'reference' and part.get('fingerprint') and (not records.get(part['assetId']) or not fingerprint_matches(records[part['assetId']], part['fingerprint'])):
                raise ProjectError('正文引用内容已变化，整批未插入，请核对原有参考。', 409)
        # Include already-mentioned selections when checking files; deduplication
        # must not hide a missing source just because it creates no new token.
        checked = list(dict.fromkeys([*ids, *(selection['assetId'] for selection in selections)]))
        reference_content(store, owner, {'text': text, 'content': content, 'assets': [{'id': asset_id} for asset_id in checked]})
        return {'ok': True}
