"""A recoverable checkpoint for deleting a file and its canvas recovery metadata."""

from copy import deepcopy
import hashlib
import json

from opendirector.domain.canvas import CanvasState
from opendirector.domain.projects import identifier
from opendirector.infrastructure.local_projects import child, read_json, write_json

JOURNAL = '.opendirector-asset-deletion.json'


def deletion_state(inventory, canvas, dependencies):
    value = json.dumps([inventory, canvas, dependencies], sort_keys=True, separators=(',', ':')).encode()
    return hashlib.sha256(value).hexdigest()


def recover_deletion(directory):
    journal = child(directory, JOURNAL)
    if not journal.exists():
        return
    value = read_json(journal)
    asset_id = identifier(value['assetId'])
    # File removal is the commit point. Before it, restore the original metadata;
    # after it, finish the new metadata. A checkpoint remains if recovery fails.
    side = 'before' if child(child(directory, 'assets'), asset_id).exists() else 'after'
    for name in ('assets.json', 'canvas.json'):
        saved = value[side][name]
        if saved is not None:
            write_json(child(directory, name), saved)
    journal.unlink()


def delete_asset(directory, asset_id, inventory, canvas, *, clear_history):
    before = {'assets.json': inventory, 'canvas.json': canvas}
    after = deepcopy(before)
    after['assets.json'].pop(asset_id)
    if canvas is not None:
        updated = after['canvas.json']
        if clear_history:
            updated['history'] = {'undo': [], 'redo': [], 'receipts': []}
        updated['knownAssetIds'] = [key for key in updated.get('knownAssetIds', []) if key != asset_id]
        # Multi-version families are protected by dependency validation.
        updated['assetGroups'] = {key: group for key, group in updated.get('assetGroups', {}).items() if asset_id not in group['assetIds']}
        updated['revision'] += 1
        after['canvas.json'] = CanvasState.model_validate(updated).model_dump(mode='json')
    journal = child(directory, JOURNAL)
    write_json(journal, {'assetId': asset_id, 'before': before, 'after': after})
    try:
        for name in ('assets.json', 'canvas.json'):
            if after[name] is not None:
                write_json(child(directory, name), after[name])
        child(child(directory, 'assets'), asset_id).unlink(missing_ok=True)
    except BaseException:
        recover_deletion(directory)
        raise
    # A cleanup failure can be recovered on the next access without restoring
    # a now-missing file or leaving stale history accessible.
    journal.unlink()
