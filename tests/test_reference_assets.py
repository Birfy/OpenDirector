"""Unified uploads, current logical sources and explicit canvas presentation."""
import asyncio
from concurrent.futures import ThreadPoolExecutor
from copy import deepcopy
import hashlib
from io import BytesIO
from pathlib import Path
from uuid import uuid4

from PIL import Image
import pytest

from museshow.domain.assets import attachment
from museshow.domain.projects import ProjectError
from museshow.infrastructure.adoption import references_match
from museshow.infrastructure.asset_catalog import AssetCatalog
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.canvas_versions import node_history
from museshow.infrastructure.local_projects import empty_conversation, read_json, write_json
from museshow.infrastructure.model_configs import ModelConfigs
from test_project_assets import project_api
from canvas_helpers import context, close
from test_canvas_version_application import generate, restore


def picture(color='purple'):
    stream = BytesIO()
    Image.new('RGB', (640, 640), color).save(stream, format='PNG')
    return stream.getvalue()


def upload(client, owner, name='reference.png', data=None, **options):
    headers = {'X-Asset-Name': name, **options}
    response = client.put(f'/api/data/{owner}/assets/{uuid4()}', content=picture() if data is None else data, headers=headers)
    assert response.status_code == 200, response.text
    return response.json()


def test_reference_upload_uses_content_hash_and_stays_in_library(project_api):
    client, store, project = project_api
    owner = project['id']
    first = upload(client, owner)['asset']
    assert first['fingerprint'] == 'sha256:' + hashlib.sha256(picture()).hexdigest()
    assert first['source'] == 'upload' and first['scope'] == 'project'
    assert first['nodeId']
    repeated = upload(client, owner, name='renamed.png')
    assert repeated['reused'] and repeated['asset']['id'] == first['id']
    assert repeated['asset']['name'] == first['name']
    second = upload(client, owner, name='reference.png', data=picture('red'))['asset']
    assert second['id'] != first['id']
    for _ in range(2):
        state = CanvasProjects(store).snapshot(owner)
        assert state['canvas']['nodes'] == [] and state['edges'] == []
        assert set(state['listedAssetIds']) == set(state['availableAssetIds']) == {first['id'], second['id']}
        assert state['visibleAssetIds'] == []
        assert state['canvas']['history'] == {'undo': None, 'redo': None}
    assert len(list((Path(project['path']) / 'assets').iterdir())) == 2
    assert {a['id'] for a in client.get(f'/api/projects/{owner}/assets?current_only=true').json()} == {first['id'], second['id']}


def test_detach_and_clear_draft_do_not_delete_uploaded_reference(project_api):
    client, store, project = project_api
    asset = upload(client, project['id'])['asset']
    draft = {key: value for key, value in empty_conversation().items() if key != 'messages'}
    assert client.patch(f'/api/data/{project["id"]}/draft', json={**draft, 'assets': [attachment(asset)]}).status_code == 200
    store.save_draft(project['id'], {'draft': '', 'assets': []}, client.headers['X-MuseShow-Session'])
    assert client.delete(f'/api/data/{project["id"]}/assets/{asset["id"]}').status_code == 200
    assert store.asset(project['id'], asset['id'])[0] == picture()
    impact = AssetCatalog(store).deletion_preview(project['id'], asset['id'], client.headers['X-MuseShow-Session'])
    assert impact['blockers'] == [] and impact['history'] == {'undo': 0, 'redo': 0}


def test_scratch_upload_is_typed_deduplicated_and_transferred_as_hidden_source(project_api):
    client, store, project = project_api
    first = upload(client, 'scratch')['asset']
    assert first['projectId'] is None
    assert upload(client, 'scratch', name='copy.png')['asset']['id'] == first['id']
    draft = {**empty_conversation(), 'draft': '使用参考', 'assets': [attachment(first)]}
    new = store.create('新项目引用', str(uuid4()), client.headers['X-MuseShow-Session'], draft=draft)
    state = CanvasProjects(store).snapshot(new['id'])
    assert state['canvas']['nodes'] == []
    assert state['availableAssetIds'] == [first['id']]
    assert state['assets'][0]['projectId'] == new['id']
    assert store.asset(new['id'], first['id'])[0] == picture()


def test_deduplicated_scratch_source_survives_another_windows_project_creation(project_api):
    client, store, _ = project_api
    catalog = AssetCatalog(store)
    first = upload(client, 'scratch')['asset']
    second_session = str(uuid4())
    second = catalog.import_file('scratch', str(uuid4()), 'same.png', picture(), second_session, as_reference=True)['asset']
    assert first['id'] == second['id']
    draft = {**empty_conversation(), 'draft': '使用参考', 'assets': [attachment(first)]}
    a = store.create('窗口一', str(uuid4()), client.headers['X-MuseShow-Session'], draft=draft)
    b = store.create('窗口二', str(uuid4()), second_session, draft=draft)
    assert store.asset(a['id'], first['id'])[0] == store.asset(b['id'], first['id'])[0] == picture()
    assert CanvasProjects(store).snapshot(a['id'])['canvas']['nodes'] == CanvasProjects(store).snapshot(b['id'])['canvas']['nodes'] == []


def test_identical_independent_nodes_require_source_choice_and_do_not_merge(project_api):
    client, store, project = project_api
    owner, session = project['id'], client.headers['X-MuseShow-Session']
    canvas = CanvasProjects(store)
    existing = [canvas.import_file(owner, str(uuid4()), 'same.png', picture(), session, str(uuid4())) for _ in range(2)]
    result = upload(client, owner)
    assert result['asset'] is None and {a['id'] for a in result['matches']} == {a['id'] for a in existing}
    assert len(canvas.snapshot(owner)['assets']) == 2
    chosen = upload(client, owner, **{'X-Reuse-Asset-Id': existing[1]['id']})
    assert chosen['asset']['id'] == existing[1]['id']
    assert len(canvas.snapshot(owner)['canvas']['nodes']) == 2
    assert len(canvas.snapshot(owner)['assets']) == 2


def test_historical_only_match_creates_new_source_instead_of_exposing_old_version(project_api):
    client, store, project = project_api
    owner, session = project['id'], client.headers['X-MuseShow-Session']
    canvas = CanvasProjects(store)
    old = canvas.import_file(owner, str(uuid4()), 'old.png', picture(), session, str(uuid4()))
    origin = canvas.snapshot(owner)['canvas']['nodes'][0]
    current = canvas.upload(owner, origin['id'], str(uuid4()), 'new.png', picture('red'), session)
    result = upload(client, owner)
    assert not result['reused'] and result['asset']['id'] not in {old['id'], current['id']}
    state = canvas.snapshot(owner)
    assert old['id'] not in state['availableAssetIds'] and old['id'] not in state['listedAssetIds']
    assert state['canvas']['nodes'][0]['id'] == origin['id']


def test_reference_upload_validates_target_before_saving_and_does_not_lock_blank(project_api):
    client, store, project = project_api
    owner, session = project['id'], client.headers['X-MuseShow-Session']
    canvas = CanvasProjects(store)
    configs = ModelConfigs(store.repository)
    configs.save('image', 'https://image.test', 'seedream', 'test')
    target = canvas.create(owner, {'id': str(uuid4()), 'kind': 'image'}, session)
    result = upload(client, owner, **{'X-Target-Node-Id': target['id']})
    asset = result['asset']
    body = [{'type': 'text', 'text': '上文'}, {'type': 'reference', 'assetId': asset['id'], 'name': asset['name'], 'fingerprint': asset['fingerprint']}, {'type': 'text', 'text': '\n下文'}]
    target = canvas.patch(owner, target['id'], {'promptContent': body}, session, remember=True)
    assert target['role'] == 'empty' and target['assetId'] is None
    assert target['promptContent'][1]['nodeId'] == asset['nodeId']
    before = canvas.snapshot(owner)
    response = client.put(f'/api/data/{owner}/assets/{uuid4()}', content=b'not an image', headers={'X-Asset-Name': 'bad.png', 'X-Target-Node-Id': target['id']})
    assert response.status_code == 400
    response = client.put(f'/api/data/{owner}/assets/{uuid4()}', content=b'context', headers={'X-Asset-Name': 'context.txt', 'X-Target-Node-Id': asset['nodeId']})
    assert response.status_code == 404  # Hidden sources cannot be edited via target upload.
    assert canvas.snapshot(owner) == before


def test_hidden_source_generation_expand_hide_version_follow_and_history(tmp_path):
    c = context(tmp_path)
    async def run():
        canvas = c.generation.canvas
        source = canvas.assets.import_file(c.owner, str(uuid4()), 'library.png', picture(), c.session, as_reference=True)['asset']
        target = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image'}, c.session)
        task = await generate(c, target['id'], 'image', '正文要求', [source['id']])
        task = next(item for item in canvas.snapshot(c.owner)['tasks'] if item['id'] == task['id'])
        assert task['status'] == 'succeeded' and task['adopted']
        receipt = (c.directory / 'tasks' / (task['id'] + '.json')).read_bytes()
        state = canvas.snapshot(c.owner)
        assert source['id'] in state['availableAssetIds'] and source['id'] not in state['visibleAssetIds']
        assert not state['edges']
        first_result = canvas._node(state['canvas'], target['id'])['assetId']
        current = canvas._node(state['canvas'], target['id'])
        expanded = canvas.expand_references(c.owner, target['id'], current['revision'], c.session)
        assert len([n for n in expanded['nodes'] if n['id'] == source['nodeId']]) == 1
        assert canvas.snapshot(c.owner)['edges'][0]['state'] == 'current'
        entry = expanded['history']['undo']
        canvas.history(c.owner, 'undo', entry['id'], str(uuid4()), c.session)
        assert source['id'] in canvas.snapshot(c.owner)['availableAssetIds'] and not canvas.snapshot(c.owner)['edges']
        entry = canvas.snapshot(c.owner)['canvas']['history']['redo']
        canvas.history(c.owner, 'redo', entry['id'], str(uuid4()), c.session)
        replacement = canvas.upload(c.owner, source['nodeId'], str(uuid4()), 'replacement.png', picture('red'), c.session)
        canvas.remove(c.owner, source['nodeId'], c.session, remember=True)
        changed = canvas._node(canvas.snapshot(c.owner)['canvas'], target['id'])
        assert changed['assetId'] == first_result and changed['referenceIds'] == [replacement['id']]
        assert source['id'] not in canvas.snapshot(c.owner)['availableAssetIds']
        restore(c, target['id'], first_result)
        history = node_history(canvas, c.owner, target['id'])
        first = next(v for v in history['versions'] if v['asset']['id'] == first_result)
        assert first['referenceIds'] == [source['id']]
        assert first['currentPromptContent'][0]['assetId'] == replacement['id']
        assert (c.directory / 'tasks' / (task['id'] + '.json')).read_bytes() == receipt
        canvas.expand_references(c.owner, target['id'], history['node']['revision'], c.session)
        assert canvas.snapshot(c.owner)['edges'][0]['state'] == 'pending'
        again = canvas.create(c.owner, {'id': str(uuid4()), 'kind': 'image'}, c.session)
        canvas.patch(c.owner, again['id'], {'referenceIds': [replacement['id']], 'prompt': '共享来源'}, c.session)
        canvas.expand_references(c.owner, again['id'], canvas._node(canvas.snapshot(c.owner)['canvas'], again['id'])['revision'], c.session)
        assert len([n for n in canvas.snapshot(c.owner)['canvas']['nodes'] if n['id'] == source['nodeId']]) == 1
        await close(c)
    asyncio.run(run())


def test_recover_library_registration_failure_never_auto_places_upload(project_api, monkeypatch):
    client, store, project = project_api
    catalog = AssetCatalog(store)
    asset_id = str(uuid4())
    with monkeypatch.context() as patch:
        patch.setattr(AssetCatalog, 'register_reference', staticmethod(lambda *args: (_ for _ in ()).throw(OSError('interrupted'))))
        with pytest.raises(OSError):
            catalog.import_file(project['id'], asset_id, 'reference.png', picture(), client.headers['X-MuseShow-Session'], as_reference=True)
    state = CanvasProjects(store).snapshot(project['id'])
    assert state['canvas']['nodes'] == [] and state['availableAssetIds'] == [asset_id]
    assert catalog.import_file(project['id'], asset_id, 'reference.png', picture(), client.headers['X-MuseShow-Session'], as_reference=True)['asset']['id'] == asset_id
    assert len(CanvasProjects(store).snapshot(project['id'])['assets']) == 1


def test_simultaneous_duplicate_uploads_save_one_asset(project_api):
    client, store, project = project_api
    catalog = AssetCatalog(store)
    def add(_):
        return catalog.import_file(project['id'], str(uuid4()), 'reference.png', picture(), client.headers['X-MuseShow-Session'], as_reference=True)
    with ThreadPoolExecutor(max_workers=2) as pool:
        results = list(pool.map(add, range(2)))
    assert results[0]['asset']['id'] == results[1]['asset']['id']
    assert len(catalog.list(project['id'])) == 1


def test_old_fingerprint_upgrades_without_rewriting_task_evidence(project_api):
    client, store, project = project_api
    owner, session = project['id'], client.headers['X-MuseShow-Session']
    old_id = str(uuid4())
    store.save_asset(owner, old_id, {'name': 'old.png', 'type': 'image/png', 'fingerprint': 'name/size/time'}, picture(), session)
    canvas = CanvasProjects(store)
    source = canvas.snapshot(owner)['canvas']['nodes'][0]
    canvas.remove(owner, source['id'], session)
    task_id = str(uuid4())
    task = {'id': task_id, 'nodeId': str(uuid4()), 'kind': 'image', 'status': 'succeeded', 'inputSnapshot': {'references': {old_id: 'name/size/time'}}}
    canvas.task_write(owner, task, project['path'])
    receipt = (Path(project['path']) / 'tasks' / f'{task_id}.json').read_bytes()
    result = upload(client, owner)
    assert result['reused'] and result['asset']['id'] == old_id
    assert result['asset']['fingerprint'].startswith('sha256:')
    records = canvas.assets._records(Path(project['path']), owner)
    assert references_match(Path(project['path']), records, {old_id: 'name/size/time'})
    assert (Path(project['path']) / 'tasks' / f'{task_id}.json').read_bytes() == receipt


def test_unused_usage_and_batch_delete_protect_drafts_and_report_partial_failure(project_api, monkeypatch):
    client, store, project = project_api
    owner, session = project['id'], client.headers['X-MuseShow-Session']
    saved = [upload(client, owner, name=f'{i}.txt', data=f'body{i}'.encode())['asset'] for i in range(3)]
    store.save_draft(owner, {'assets': [attachment(saved[0])]}, session)
    usage = client.get(f'/api/projects/{owner}/assets/usage').json()
    assert usage[saved[0]['id']]['used'] and not usage[saved[1]['id']]['used']
    preview = client.post(f'/api/projects/{owner}/assets/deletion-preview', json={'assetIds': [a['id'] for a in saved]}).json()
    response = client.post(f'/api/projects/{owner}/assets/delete', json={'assetIds': [a['id'] for a in saved], 'expectedState': preview['state']})
    assert response.status_code == 409 and len(AssetCatalog(store).list(owner)) == 3
    ids = [a['id'] for a in saved[1:]]
    impact = client.post(f'/api/projects/{owner}/assets/deletion-preview', json={'assetIds': ids}).json()
    original = Path.unlink
    def unlink(path, *args, **kwargs):
        if path.name == ids[1]: raise PermissionError('file in use')
        return original(path, *args, **kwargs)
    with monkeypatch.context() as patch:
        patch.setattr(Path, 'unlink', unlink)
        response = client.post(f'/api/projects/{owner}/assets/delete', json={'assetIds': ids, 'expectedState': impact['state']})
    assert response.status_code == 200, response.text
    assert response.json()['deleted'] == [ids[0]] and response.json()['failed'][0]['id'] == ids[1]
    assert {a['id'] for a in AssetCatalog(store).list(owner)} == {saved[0]['id'], ids[1]}


def test_show_restores_source_identity_once_and_does_not_expose_archived_versions(project_api):
    client, store, project = project_api
    owner, session = project['id'], client.headers['X-MuseShow-Session']
    canvas = CanvasProjects(store)
    source = upload(client, owner)['asset']
    shown = canvas.create(owner, {'id': str(uuid4()), 'kind': 'image', 'assetId': source['id']}, session, remember=True)
    assert shown['id'] == source['nodeId']
    again = canvas.create(owner, {'id': str(uuid4()), 'kind': 'image', 'assetId': source['id']}, session)
    assert again['id'] == shown['id'] and len(canvas.snapshot(owner)['canvas']['nodes']) == 1
    latest = canvas.upload(owner, shown['id'], str(uuid4()), 'new.png', picture('red'), session)
    canvas.remove(owner, shown['id'], session, remember=True)
    with pytest.raises(ProjectError, match='不是有效的当前版本'):
        canvas.create(owner, {'id': str(uuid4()), 'kind': 'image', 'assetId': source['id']}, session)
    restored = canvas.create(owner, {'id': str(uuid4()), 'kind': 'image', 'assetId': latest['id']}, session)
    assert restored['id'] == shown['id'] and restored['assetIds'] == [source['id'], latest['id']]


def test_audio_upload_obeys_target_mode_without_requiring_complete_input_during_edit(project_api):
    import wave
    client, store, project = project_api
    owner, session = project['id'], client.headers['X-MuseShow-Session']
    canvas = CanvasProjects(store)
    config = ModelConfigs(store.repository).save('video', 'https://ark.cn-beijing.volces.com/api/plan/v3', 'doubao-seedance-2.0', 'test')
    target = canvas.create(owner, {'id': str(uuid4()), 'kind': 'video'}, session)
    stream = BytesIO()
    with wave.open(stream, 'wb') as output:
        output.setparams((1, 2, 24000, 0, 'NONE', 'not compressed'))
        output.writeframes(b'\0\0' * 72000)
    response = client.put(f'/api/data/{owner}/assets/{uuid4()}', content=stream.getvalue(), headers={'X-Asset-Name': 'audio.wav', 'X-Target-Node-Id': target['id']})
    assert response.status_code == 400 and not canvas.snapshot(owner)['assets']
    canvas.patch(owner, target['id'], {'videoMode': 'reference'}, session)
    accepted = upload(client, owner, 'audio.wav', stream.getvalue(), **{'X-Target-Node-Id': target['id']})
    assert accepted['asset']['kind'] == 'audio' and canvas.snapshot(owner)['visibleAssetIds'] == []
    assert canvas._node(canvas.snapshot(owner)['canvas'], target['id'])['role'] == 'empty'


def test_fingerprint_upgrade_preserves_editor_undo_and_redo(project_api):
    client, store, project = project_api
    owner, session = project['id'], client.headers['X-MuseShow-Session']
    canvas = CanvasProjects(store)
    ModelConfigs(store.repository).save('image', 'https://image.test', 'seedream', 'test')
    source_id = str(uuid4())
    store.save_asset(owner, source_id, {'name': 'old.png', 'type': 'image/png', 'fingerprint': 'old-name/size/time'}, picture(), session)
    target = canvas.create(owner, {'id': str(uuid4()), 'kind': 'image'}, session)
    canvas.patch(owner, target['id'], {'promptContent': [{'type': 'text', 'text': '前文'}, {'type': 'reference', 'assetId': source_id, 'name': 'old.png', 'fingerprint': 'old-name/size/time'}, {'type': 'text', 'text': '后文'}]}, session, remember=True)
    assert upload(client, owner)['asset']['id'] == source_id
    entry = canvas.snapshot(owner)['canvas']['history']['undo']
    restored = canvas.history(owner, 'undo', entry['id'], str(uuid4()), session)
    assert canvas._node(restored, target['id'])['referenceIds'] == []
    entry = restored['history']['redo']
    restored = canvas.history(owner, 'redo', entry['id'], str(uuid4()), session)
    node = canvas._node(restored, target['id'])
    assert node['referenceIds'] == [source_id] and node['promptContent'][0]['text'] == '前文' and node['promptContent'][-1]['text'] == '后文'
    assert node['promptContent'][1]['fingerprint'].startswith('sha256:')
