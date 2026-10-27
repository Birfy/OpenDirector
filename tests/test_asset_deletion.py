"""Issue #16: explicit history disposal without bypassing business retention."""

from copy import deepcopy
from pathlib import Path
from uuid import uuid4

import pytest

from museshow.domain.assets import attachment
from museshow.domain.projects import ProjectError
from museshow.infrastructure import asset_deletion
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.local_projects import LocalProjects, read_json, write_json
from test_project_assets import project_api, png


def removed_upload(project_api):
    client, store, project = project_api
    canvas = CanvasProjects(store)
    session = client.headers['X-MuseShow-Session']
    asset = canvas.import_file(project['id'], str(uuid4()), 'source.png', png(), session, str(uuid4()))
    node = canvas.snapshot(project['id'])['canvas']['nodes'][0]
    canvas.remove_many(project['id'], [{'id': node['id'], 'expectedRevision': node['revision'], 'expectedTaskId': node['taskId']}], session)
    return client, store, project, canvas, asset


def preview(client, project, asset):
    response = client.get(f'/api/projects/{project["id"]}/assets/{asset["id"]}/deletion')
    assert response.status_code == 200, response.text
    return response.json()


def delete(client, project, asset, impact, clear=True):
    return client.request('DELETE', f'/api/projects/{project["id"]}/assets/{asset["id"]}', json={'expectedState': impact['state'], 'clearHistory': clear})


@pytest.mark.parametrize('direction', ['undo', 'redo', 'both'])
def test_removed_asset_can_be_deleted_with_explicit_history_confirmation(project_api, direction):
    client, store, project, canvas, asset = removed_upload(project_api)
    session = client.headers['X-MuseShow-Session']
    if direction != 'undo':
        entry = canvas.snapshot(project['id'])['canvas']['history']['undo']
        canvas.history(project['id'], 'undo', entry['id'], str(uuid4()), session)
        if direction == 'redo':
            entry = canvas.snapshot(project['id'])['canvas']['history']['undo']
            canvas.history(project['id'], 'undo', entry['id'], str(uuid4()), session)
        else:
            # Restore/remove once more, then undo both operations: the file is
            # retained in both stacks while its node is absent from the canvas.
            entry = canvas.snapshot(project['id'])['canvas']['history']['redo']
            canvas.history(project['id'], 'redo', entry['id'], str(uuid4()), session)
            node = canvas.create(project['id'], {'id': str(uuid4()), 'kind': 'image', 'assetId': asset['id'], 'assetIds': [asset['id']]}, session, remember=True)
            canvas.remove(project['id'], node['id'], session, remember=True)
            for _ in range(2):
                entry = canvas.snapshot(project['id'])['canvas']['history']['undo']
                canvas.history(project['id'], 'undo', entry['id'], str(uuid4()), session)
    path = Path(project['path'])
    before = {name: (path / name).read_bytes() for name in ('assets.json', 'canvas.json')}
    impact = preview(client, project, asset)
    assert impact['blockers'] == [] and sum(impact['history'].values()) > 0
    assert before == {name: (path / name).read_bytes() for name in before}  # Preview/cancel do not write.
    rejected = delete(client, project, asset, impact, clear=False)
    assert rejected.status_code == 409 and rejected.json()['code'] == 'asset_retained_by_history'
    response = delete(client, project, asset, impact)
    assert response.status_code == 204, response.text
    assert delete(client, project, asset, impact).status_code == 204  # Lost response/retry.
    assert not (path / 'assets' / asset['id']).exists()
    state = read_json(path / 'canvas.json')
    assert state['history'] == {'undo': [], 'redo': [], 'receipts': []}
    assert asset['id'] not in state['knownAssetIds']
    assert all(asset['id'] not in group['assetIds'] for group in state['assetGroups'].values())
    assert canvas.snapshot(project['id'])['canvas']['nodes'] == []
    reopened = CanvasProjects(LocalProjects(store.repository)).snapshot(project['id'])
    assert reopened['assets'] == [] and reopened['canvas']['history'] == {'undo': None, 'redo': None}


@pytest.mark.parametrize('source', ['draft', 'message', 'node', 'asset', 'task', 'task_result', 'versions'])
def test_business_references_cannot_be_bypassed_by_clearing_history(project_api, source):
    client, store, project, canvas, asset = removed_upload(project_api)
    session = client.headers['X-MuseShow-Session']
    root = Path(project['path'])
    if source in {'draft', 'message'}:
        conversation = store.conversation(project['id'])
        if source == 'draft':
            conversation['assets'] = [attachment(asset)]
        else:
            conversation['messages'] = [{'id': str(uuid4()), 'role': 'user', 'text': '参考', 'assets': [attachment(asset)],
                                         'model': 'test', 'thinking': 'auto', 'status': 'complete', 'source': 'preview'}]
        store.save_conversation(project['id'], conversation, session)
    elif source == 'node':
        # A retained reference on another node remains a real dependency after source removal.
        state = read_json(root / 'canvas.json')
        saved = deepcopy(state['history']['undo'][0]['added'][0]['node'])
        saved.update(id=str(uuid4()), role='generation', title='下游', assetId=None, assetIds=[], referenceIds=[asset['id']])
        state['nodes'] = [saved]
        write_json(root / 'canvas.json', state)
    elif source == 'asset':
        other = canvas.assets.import_file(project['id'], str(uuid4()), 'output.txt', b'body', session)
        inventory = read_json(root / 'assets.json')
        inventory[other['id']]['referenceIds'] = [asset['id']]
        write_json(root / 'assets.json', inventory)
    elif source in {'task', 'task_result'}:
        tasks = root / 'tasks'
        tasks.mkdir()
        task_id = str(uuid4())
        write_json(tasks / f'{task_id}.json', {'id': task_id, 'nodeId': str(uuid4()), 'kind': 'image', 'status': 'interrupted',
                   'resumeAllowed': True, **({'assetId': asset['id']} if source == 'task_result' else
                   {'referenceIds': [asset['id']], 'inputSnapshot': {'references': {asset['id']: asset['fingerprint']}}})})
    else:
        other = canvas.assets.import_file(project['id'], str(uuid4()), 'other.png', png(), session)
        state = read_json(root / 'canvas.json')
        next(iter(state['assetGroups'].values()))['assetIds'].append(other['id'])
        write_json(root / 'canvas.json', state)
    impact = preview(client, project, asset)
    assert ('task' if source == 'task_result' else source) in {item['kind'] for item in impact['blockers']}
    before = (root / 'canvas.json').read_bytes()
    response = delete(client, project, asset, impact)
    assert response.status_code == 409 and response.json()['code'] == 'asset_in_use'
    assert before == (root / 'canvas.json').read_bytes()
    assert store.asset(project['id'], asset['id'])[0] == png()


def test_confirmation_is_invalidated_by_new_edit_and_requires_preflight(project_api):
    client, store, project, canvas, asset = removed_upload(project_api)
    impact = preview(client, project, asset)
    session = client.headers['X-MuseShow-Session']
    canvas.create(project['id'], {'id': str(uuid4()), 'kind': 'text'}, session, remember=True)
    before = (Path(project['path']) / 'canvas.json').read_bytes()
    response = delete(client, project, asset, impact)
    assert response.status_code == 409 and response.json()['code'] == 'revision_conflict'
    assert before == (Path(project['path']) / 'canvas.json').read_bytes()
    with pytest.raises(ProjectError, match='检查删除影响'):
        canvas.assets.delete(project['id'], asset['id'], session, clear_history=True)
    assert store.asset(project['id'], asset['id'])[0] == png()


def test_plain_deletion_preserves_unrelated_history(project_api):
    client, store, project = project_api
    session = client.headers['X-MuseShow-Session']
    canvas = CanvasProjects(store)
    canvas.create(project['id'], {'id': str(uuid4()), 'kind': 'text'}, session, remember=True)
    asset = canvas.assets.import_file(project['id'], str(uuid4()), 'unplaced.png', png(), session)
    impact = preview(client, project, asset)
    assert impact['history'] == {'undo': 0, 'redo': 0}
    old = read_json(Path(project['path']) / 'canvas.json')['history']
    assert delete(client, project, asset, impact, clear=False).status_code == 204
    assert read_json(Path(project['path']) / 'canvas.json')['history'] == old


@pytest.mark.parametrize('failure', ['assets.json', 'canvas.json', 'unlink'])
def test_failed_deletion_restores_file_inventory_and_history(project_api, monkeypatch, failure):
    client, store, project, canvas, asset = removed_upload(project_api)
    root = Path(project['path'])
    impact = preview(client, project, asset)
    before = {name: (root / name).read_bytes() for name in ('assets.json', 'canvas.json')}
    original_write = asset_deletion.write_json
    original_unlink = Path.unlink
    fired = False

    def write(path, value):
        nonlocal fired
        if not fired and path.name == failure:
            fired = True
            raise OSError('disk full')
        return original_write(path, value)

    def unlink(path, *args, **kwargs):
        if path.name == asset['id'] and failure == 'unlink':
            raise PermissionError('file in use')
        return original_unlink(path, *args, **kwargs)

    with monkeypatch.context() as patch:
        patch.setattr(asset_deletion, 'write_json', write)
        patch.setattr(Path, 'unlink', unlink)
        assert delete(client, project, asset, impact).status_code == 503
    assert before == {name: (root / name).read_bytes() for name in before}
    assert store.asset(project['id'], asset['id'])[0] == png()
    assert not (root / asset_deletion.JOURNAL).exists()


@pytest.mark.parametrize('checkpoint', ['assets.json', 'canvas.json', 'file_removed'])
def test_interrupted_deletion_recovers_before_and_after_file_commit(project_api, monkeypatch, checkpoint):
    client, store, project, canvas, asset = removed_upload(project_api)
    root = Path(project['path'])
    session = client.headers['X-MuseShow-Session']
    impact = preview(client, project, asset)
    original_unlink = Path.unlink
    original_write = asset_deletion.write_json

    def interrupted_write(path, value):
        original_write(path, value)
        if path.name == checkpoint:
            raise KeyboardInterrupt('process exited during metadata commit')

    def no_recovery(directory):
        if (directory / asset_deletion.JOURNAL).exists():
            raise KeyboardInterrupt('process stopped before recovery')

    def interrupted(path, *args, **kwargs):
        if path.name == asset_deletion.JOURNAL and checkpoint == 'file_removed':
            raise KeyboardInterrupt('process exited after file removal')
        return original_unlink(path, *args, **kwargs)

    with monkeypatch.context() as patch:
        patch.setattr(Path, 'unlink', interrupted)
        patch.setattr(asset_deletion, 'write_json', interrupted_write)
        patch.setattr(asset_deletion, 'recover_deletion', no_recovery)
        with pytest.raises(KeyboardInterrupt):
            canvas.assets.delete(project['id'], asset['id'], session, expected_state=impact['state'], clear_history=True)
    assert (root / asset_deletion.JOURNAL).exists()
    recovered = CanvasProjects(LocalProjects(store.repository)).snapshot(project['id'])
    if checkpoint == 'file_removed':
        assert recovered['assets'] == [] and recovered['canvas']['history']['undo'] is None
    else:
        assert [item['id'] for item in recovered['assets']] == [asset['id']]
        assert recovered['canvas']['history']['undo'] is not None
        assert (root / 'assets' / asset['id']).read_bytes() == png()
    assert not (root / asset_deletion.JOURNAL).exists()


def test_reference_added_after_preflight_blocks_deletion_without_clearing_history(project_api):
    client, store, project, canvas, asset = removed_upload(project_api)
    impact = preview(client, project, asset)
    before = (Path(project['path']) / 'canvas.json').read_bytes()
    store.save_draft(project['id'], {'assets': [attachment(asset)]}, client.headers['X-MuseShow-Session'])
    response = delete(client, project, asset, impact)
    assert response.status_code == 409 and response.json()['code'] == 'asset_in_use'
    assert before == (Path(project['path']) / 'canvas.json').read_bytes()
