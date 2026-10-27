from io import BytesIO
import json
from pathlib import Path
import wave

import pytest

from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.timeline import TimelineProjects
from museshow.application.exports import Exports
from museshow.domain.projects import ProjectError
from uuid import uuid4
from test_storyboard import board_api, create, image, media, video_bytes


def associate(client, root, shot, role, asset):
    endpoint = f'{root}/shots/{shot["id"]}'
    updated = client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': role, 'assetIds': [asset['id']]}).json()
    shot = next(item for item in updated['shots'] if item['id'] == shot['id'])
    adopted = client.post(endpoint + '/adopt', json={'expectedRevision': shot['revision'], 'kind': role, 'assetId': asset['id']}).json()
    return next(item for item in adopted['shots'] if item['id'] == shot['id'])


def change(client, root, path, **fields):
    before = client.get(root).json()
    return client.patch(root + path, json={'expectedRevision': before['timeline']['revision'],
        'expectedStoryboardRevision': before['storyboardRevision'], **fields})


def voice(client, pid):
    data = BytesIO()
    with wave.open(data, 'wb') as output:
        output.setparams((1, 2, 8000, 0, 'NONE', 'not compressed'))
        output.writeframes(b'\0' * 16000)
    return media(client, pid, 'voice.wav', data.getvalue())


def test_live_sequence_alignment_edits_persistence_and_deleted_references(board_api, video_bytes, tmp_path):
    client, store, project, board = board_api
    root = board.replace('storyboard', 'timeline')
    path = Path(project['path']) / 'timeline.json'
    empty = client.get(root).json()
    assert empty['timeline']['clips'] == [] and not empty['problems'] and not path.exists()
    frame, audio = image(client, project['id']), voice(client, project['id'])
    video = media(client, project['id'], 'video.mp4', video_bytes[True])
    for asset in (frame, frame, video):
        current = client.get(board).json()['storyboard']
        state, _ = create(client, board, current['shots'][-1]['id'] if current['shots'] else None)
        shot = associate(client, board, state['shots'][-1], 'visual', asset)
        shot = associate(client, board, shot, 'audio', audio)
    endpoint = f'{board}/shots/{shot["id"]}'
    client.post(endpoint + '/original-audio', json={'expectedRevision': shot['revision'], 'mode': 'mute'})
    snapshot = client.get(root).json()
    assert not path.exists()  # Reading projects never writes a generated snapshot.
    timeline = snapshot['timeline']
    visuals = [clip for clip in timeline['clips'] if clip['track'] == 'visual']
    assert [clip['startFrame'] for clip in visuals] == [0, 90, 180]
    assert [clip['durationFrames'] for clip in visuals] == [90, 90, 9]
    original = next(clip for clip in timeline['clips'] if clip['track'] == 'original')
    assert original['assetId'] == video['id'] and original['muted'] and original['startFrame'] == 180
    assert all(not clip['muted'] for clip in visuals)
    narrations = [clip for clip in timeline['clips'] if clip['track'] == 'narration']
    assert [clip['durationFrames'] for clip in narrations] == [30, 30, 9]
    assert len(snapshot['warnings']) == 1
    def edit(path, **fields):
        response = change(client, root, path, **fields)
        assert response.status_code == 200, response.text
        return response.json()['timeline']
    timeline = edit(f'/clips/{visuals[0]["id"]}', durationFrames=3)
    assert [clip['startFrame'] for clip in timeline['clips'] if clip['track'] == 'visual'] == [0, 3, 93]
    assert next(clip for clip in timeline['clips'] if clip['id'] == narrations[0]['id'])['sourceOutFrame'] == 3
    timeline = edit(f'/clips/{visuals[0]["id"]}', durationFrames=120)
    assert next(clip for clip in timeline['clips'] if clip['id'] == narrations[0]['id'])['sourceOutFrame'] == 30
    edit('/tracks/narration', muted=True)
    timeline = edit(f'/clips/{original["id"]}', muted=False)
    assert timeline['trackMutes'] == {'original': False, 'narration': True}
    assert TimelineProjects(LocalProjects(tmp_path)).snapshot(project['id']) == client.get(root).json()
    assert client.get(f'/api/data/{project["id"]}/assets/{video["id"]}').content == video_bytes[True]
    # Reordering and renaming keep matching image durations, clip identities and mutes.
    state = client.get(board).json()['storyboard']
    client.put(board + '/order', json={'expectedOrderRevision': state['orderRevision'], 'shotIds': [s['id'] for s in reversed(state['shots'])]})
    first = state['shots'][0]
    client.patch(f'{board}/shots/{first["id"]}', json={'expectedRevision': first['revision'], 'title': '新的镜头名称'})
    updated = client.get(root).json()['timeline']
    ordered = [clip for clip in updated['clips'] if clip['track'] == 'visual']
    assert [clip['id'] for clip in ordered] == [clip['id'] for clip in reversed(visuals)]
    assert [clip['startFrame'] for clip in ordered] == [0, 9, 99]
    assert ordered[-1]['durationFrames'] == 120 and ordered[-1]['title'] == '新的镜头名称'
    assert not next(c for c in updated['clips'] if c['id'] == original['id'])['muted']
    # Old saved adjustment data is not an independent reference to removed shots.
    for item in client.get(board).json()['storyboard']['shots']:
        assert client.request('DELETE', f'{board}/shots/{item["id"]}', json={'expectedRevision': item['revision']}).status_code == 200
    assert client.get(root).json()['timeline']['clips'] == []
    # Canvas selection now materializes imported files before storyboard use.
    # Removing shots releases timeline references, while canvas still owns it.
    nodes = client.get(f'/api/projects/{project["id"]}/canvas').json()['canvas']['nodes']
    from museshow.infrastructure.canvas import CanvasProjects
    for node in nodes:
        if frame['id'] in node['assetIds']:
            CanvasProjects(store).remove(project['id'], node['id'], client.headers['X-MuseShow-Session'])
    assert client.delete(f'/api/projects/{project["id"]}/assets/{frame["id"]}').status_code == 204
    store.release(client.headers['X-MuseShow-Session'])
    store.rename(project['id'], '时间线改名', project['name'])
    assert TimelineProjects(store).snapshot(project['id'])['timeline']['clips'] == []


def test_source_replacement_conflicts_missing_media_and_legacy_settings(board_api):
    client, _, project, board = board_api
    root = board.replace('storyboard', 'timeline')
    state, _ = create(client, board)
    assert client.get(root).json()['problems']  # Unadopted shots are reported, never silently skipped.
    asset = image(client, project['id'])
    shot = associate(client, board, state['shots'][0], 'visual', asset)
    before = client.get(root).json()
    clip = before['timeline']['clips'][0]
    assert change(client, root, f'/clips/{clip["id"]}', durationFrames=12).status_code == 200
    path = Path(project['path']) / 'timeline.json'
    original = path.read_bytes()
    for fields in ({'muted': True}, {'durationFrames': None}):
        assert change(client, root, f'/clips/{clip["id"]}', **fields).status_code == 400
    assert change(client, root, '/tracks/narration', muted=True, expectedRevision=0).status_code == 409
    assert path.read_bytes() == original
    # Board revision is checked even when the timeline adjustment revision has not changed.
    stale = client.get(root).json()
    client.patch(f'{board}/shots/{shot["id"]}', json={'expectedRevision': shot['revision'], 'title': '已修改'})
    assert client.patch(root + f'/clips/{clip["id"]}', json={'expectedRevision': stale['timeline']['revision'],
        'expectedStoryboardRevision': stale['storyboardRevision'], 'durationFrames': 30}).status_code == 409
    assert path.read_bytes() == original
    source = Path(project['path']) / 'assets' / asset['id']
    data = source.read_bytes()
    source.unlink()
    assert client.get(root).json()['problems'] and client.get(root).json()['timeline']['clips'] == []
    assert change(client, root, '/tracks/narration', muted=True).status_code == 409
    assert path.read_bytes() == original
    source.write_bytes(data)
    assert client.get(root).json()['timeline']['clips'][0]['durationFrames'] == 12
    # Legacy snapshots lacking override flags remain readable without a read-time rewrite.
    old = json.loads(path.read_bytes())
    for item in old['clips']:
        item.pop('muteOverride')
    path.write_text(json.dumps(old))
    legacy = path.read_bytes()
    assert client.get(root).json()['timeline']['clips'][0]['durationFrames'] == 12
    assert path.read_bytes() == legacy
    # Replacing the adopted image starts a new clip at its default duration.
    replacement = image(client, project['id'])
    shot = client.get(board).json()['storyboard']['shots'][0]
    associate(client, board, shot, 'visual', replacement)
    current = client.get(root).json()['timeline']['clips'][0]
    assert current['assetId'] == replacement['id'] and current['durationFrames'] == 90 and current['id'] != clip['id']
    assert client.get(root).json()['timeline']['clips'][0]['id'] == current['id']
    path.write_text('{"version":999}')
    assert client.get(root).status_code == 409
    assert path.read_text() == '{"version":999}'


@pytest.mark.parametrize('sound', [True, False])
def test_video_metadata_probe_and_live_original_audio_defaults(board_api, video_bytes, sound):
    client, _, project, board = board_api
    root = board.replace('storyboard', 'timeline')
    video = media(client, project['id'], 'legacy.mp4', video_bytes[sound])
    state, _ = create(client, board)
    shot = associate(client, board, state['shots'][0], 'visual', video)
    path = Path(project['path']) / 'assets.json'
    records = json.loads(path.read_bytes())
    records[video['id']].pop('hasAudio', None)
    records[video['id']].pop('durationMs', None)
    path.write_text(json.dumps(records))
    snapshot = client.get(root).json()
    assert snapshot['probes'] == [{'id': video['id'], 'revision': video['revision']}]
    assert snapshot['problems']
    response = client.post(f'/api/projects/{project["id"]}/assets/{video["id"]}/probe-audio', json={'expectedRevision': video['revision']})
    assert response.status_code == 200, response.text
    snapshot = client.get(root).json()
    assert not snapshot['problems'] and not snapshot['probes']
    assert len(snapshot['timeline']['clips']) == (2 if sound else 1)
    assert not (Path(project['path']) / 'timeline.json').exists()
    if sound:
        original = next(clip for clip in snapshot['timeline']['clips'] if clip['track'] == 'original')
        assert not original['muted']
        # Unrelated saved settings do not pin the old storyboard original-audio mode.
        assert change(client, root, '/tracks/narration', muted=True).status_code == 200
        endpoint = f'{board}/shots/{shot["id"]}/original-audio'
        response = client.post(endpoint, json={'expectedRevision': shot['revision'], 'mode': 'mute'})
        assert response.status_code == 200, response.text
        assert next(c for c in client.get(root).json()['timeline']['clips'] if c['track'] == 'original')['muted']
        assert change(client, root, f'/clips/{original["id"]}', muted=False).status_code == 200
        assert not next(c for c in client.get(root).json()['timeline']['clips'] if c['track'] == 'original')['muted']


def test_partial_preview_preserves_saved_settings_and_keeps_export_strict(board_api, video_bytes):
    client, store, project, board = board_api
    root = board.replace('storyboard', 'timeline')
    frame = image(client, project['id'])
    audio = voice(client, project['id'])
    video = media(client, project['id'], 'preview.mp4', video_bytes[True])
    for asset in (frame, video):
        shots = client.get(board).json()['storyboard']['shots']
        state, _ = create(client, board, shots[-1]['id'] if shots else None)
        shot = associate(client, board, state['shots'][-1], 'visual', asset)
        associate(client, board, shot, 'audio', audio)
    full = client.get(root).json()
    visual = full['timeline']['clips'][0]
    narration = next(c for c in full['timeline']['clips'] if c['track'] == 'narration')
    original = next(c for c in full['timeline']['clips'] if c['track'] == 'original')
    assert change(client, root, f'/clips/{visual["id"]}', durationFrames=45).status_code == 200
    assert change(client, root, f'/clips/{narration["id"]}', muted=True).status_code == 200
    assert change(client, root, f'/clips/{original["id"]}', muted=True).status_code == 200
    assert change(client, root, '/tracks/narration', muted=True).status_code == 200
    saved = Path(project['path']) / 'timeline.json'
    saved_bytes = saved.read_bytes()
    adjusted = client.get(root).json()['timeline']
    # Only the first two of four shots are ready. Reading is not a save.
    for _ in range(2):
        shots = client.get(board).json()['storyboard']['shots']
        create(client, board, shots[-1]['id'])
    partial = client.get(root).json()
    assert partial['preview']['partial']
    assert (partial['preview']['availableShots'], partial['preview']['totalShots']) == (2, 4)
    assert partial['preview']['durationFrames'] == 54
    assert [c for c in partial['timeline']['clips']] == adjusted['clips']
    assert partial['timeline']['trackMutes'] == adjusted['trackMutes']
    assert [s['startFrame'] for s in partial['preview']['shots']] == [0, 45, None, None]
    assert [s['durationFrames'] for s in partial['preview']['shots']] == [45, 9, None, None]
    assert '镜头 3' in partial['problems'][0] and '镜头 4' in partial['problems'][1]
    for path, fields in [('/tracks/original', {'muted': True}),
                         (f'/clips/{visual["id"]}', {'durationFrames': 30})]:
        assert change(client, root, path, **fields).status_code == 409
    manager = Exports(store)
    with pytest.raises(ProjectError, match='处理时间线'):
        manager._prepare(project['id'], {'id': str(uuid4()), 'expectedRevision': partial['timeline']['revision'],
            'expectedStoryboardRevision': partial['storyboardRevision']}, client.headers['X-MuseShow-Session'])
    assert manager.list(project['id']) == []
    assert saved.read_bytes() == saved_bytes
    # A gap in the middle preserves original numbering and has unknown duration.
    shots = client.get(board).json()['storyboard']['shots']
    shot = associate(client, board, shots[-1], 'visual', frame)
    gap = client.get(root).json()
    assert [s['number'] for s in gap['preview']['shots'] if s['available']] == [1, 2, 4]
    assert [c['startFrame'] for c in gap['timeline']['clips'] if c['track'] == 'visual'] == [0, 45, 54]
    assert gap['preview']['shots'][2]['durationFrames'] is None
    assert gap['preview']['durationFrames'] == 144
    assert saved.read_bytes() == saved_bytes
    # Complete the missing shot via the same storyboard API; prior settings return.
    missing = client.get(board).json()['storyboard']['shots'][2]
    associate(client, board, missing, 'visual', frame)
    complete = client.get(root).json()
    assert not complete['problems'] and not complete['preview']['partial']
    assert complete['preview']['availableShots'] == 4 and complete['preview']['durationFrames'] == 234
    for clip in adjusted['clips']:
        assert next(c for c in complete['timeline']['clips'] if c['id'] == clip['id']) == clip
    task, folder, launch = manager._prepare(project['id'], {'id': str(uuid4()),
        'expectedRevision': complete['timeline']['revision'], 'expectedStoryboardRevision': complete['storyboardRevision']},
        client.headers['X-MuseShow-Session'])
    assert launch and task['status'] == 'queued'
    assert json.loads((folder / 'timeline.json').read_bytes()) == complete['timeline']
    assert saved.read_bytes() == saved_bytes


def test_partial_preview_missing_files_reorder_and_reopen_are_read_only(board_api, tmp_path):
    client, _, project, board = board_api
    root = board.replace('storyboard', 'timeline')
    visuals = [image(client, project['id']) for _ in range(3)]
    for asset in visuals:
        shots = client.get(board).json()['storyboard']['shots']
        state, _ = create(client, board, shots[-1]['id'] if shots else None)
        associate(client, board, state['shots'][-1], 'visual', asset)
    shot = client.get(board).json()['storyboard']['shots'][-1]
    audio = voice(client, project['id'])
    associate(client, board, shot, 'audio', audio)
    full = client.get(root).json()
    last = [c for c in full['timeline']['clips'] if c['track'] == 'visual'][-1]
    assert change(client, root, f'/clips/{last["id"]}', durationFrames=60).status_code == 200
    saved = Path(project['path']) / 'timeline.json'
    baseline = saved.read_bytes()
    # Missing narration excludes that whole shot; it is not silently played mute.
    source = Path(project['path']) / 'assets' / audio['id']
    data = source.read_bytes(); source.unlink()
    partial = client.get(root).json()
    assert partial['preview']['availableShots'] == 2
    assert not partial['preview']['shots'][2]['available']
    assert partial['preview']['shots'][2]['durationFrames'] is None
    # Also remove the first visual: only the middle remains, starting at draft 0.
    first = Path(project['path']) / 'assets' / visuals[0]['id']
    first_bytes = first.read_bytes(); first.unlink()
    partial = client.get(root).json()
    assert [s['number'] for s in partial['preview']['shots'] if s['available']] == [2]
    assert partial['timeline']['clips'][0]['startFrame'] == 0
    state = client.get(board).json()['storyboard']
    assert client.put(board + '/order', json={'expectedOrderRevision': state['orderRevision'],
        'shotIds': [s['id'] for s in reversed(state['shots'])]}).status_code == 200
    assert TimelineProjects(LocalProjects(tmp_path)).snapshot(project['id']) == client.get(root).json()
    assert saved.read_bytes() == baseline
    source.write_bytes(data); first.write_bytes(first_bytes)
    restored = client.get(root).json()
    assert not restored['preview']['partial'] and not restored['problems']
    assert restored['timeline']['clips'][0]['id'] == last['id']
    assert restored['timeline']['clips'][0]['durationFrames'] == 60
    assert [c['startFrame'] for c in restored['timeline']['clips'] if c['track'] == 'visual'] == [0, 60, 150]
    assert saved.read_bytes() == baseline
