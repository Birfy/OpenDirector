from io import BytesIO
import json
from pathlib import Path
import subprocess
import wave
from uuid import uuid4

from fastapi.testclient import TestClient
import httpx
from PIL import Image
import pytest

from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.infrastructure.storyboard import StoryboardProjects
from museshow.integrations.chat_completions import ChatCompletions
from museshow_api.main import create_app


@pytest.fixture
def board_api(tmp_path):
    store = LocalProjects(tmp_path)
    session = str(uuid4())
    project = store.create('分镜项目', str(uuid4()), session)
    with TestClient(create_app(store), headers={'X-MuseShow-Request': '1', 'X-MuseShow-Session': session}) as client:
        yield client, store, project, f'/api/projects/{project["id"]}/storyboard'


def create(client, root, after=None, source=None):
    current = client.get(root).json()['storyboard']
    body = {'id': str(uuid4()), 'expectedOrderRevision': current['orderRevision'], 'afterId': after, 'sourceId': source}
    response = client.post(root + '/shots', json=body)
    assert response.status_code == 200, response.text
    return response.json(), body


def patch(client, root, shot, **fields):
    return client.patch(f'{root}/shots/{shot["id"]}', json={'expectedRevision': shot['revision'], **fields})


def image(client, project_id):
    data = BytesIO()
    Image.new('RGB', (16, 9), 'purple').save(data, 'PNG')
    aid = str(uuid4())
    response = client.put(f'/api/projects/{project_id}/assets/{aid}', content=data.getvalue(), headers={'X-Asset-Name': 'frame.png'})
    assert response.status_code == 200
    return response.json()


def test_storyboard_crud_order_copy_and_restart_preserve_identity(board_api, tmp_path):
    client, store, project, root = board_api
    assert client.get(root).json()['storyboard']['shots'] == []
    assert not (Path(project['path']) / 'storyboard.json').exists()
    state, body = create(client, root)
    first = state['shots'][0]
    retired = {'narration', 'targetDurationMs', 'shotSize', 'cameraMovement'}
    assert not retired & first.keys()
    first = patch(client, root, first, title='新镜头标题').json()['shots'][0]
    assert not retired & first.keys()
    # Retired planning metadata stays readable and survives unrelated edits.
    state = client.get(root).json()['storyboard']
    state['shots'][0].update(shotSize='特写', cameraMovement='固定机位', narration='你好', targetDurationMs=4500)
    (Path(project['path']) / 'storyboard.json').write_text(json.dumps(state))
    state = patch(client, root, first, title='镜头一', description='窗边落杯').json()
    first = state['shots'][0]
    assert state['orderRevision'] == 1
    assert first['shotSize'] == '特写' and first['cameraMovement'] == '固定机位'
    assert first['narration'] == '你好' and first['targetDurationMs'] == 4500
    # Retrying creation after editing must not recreate or reset the shot.
    assert client.post(root + '/shots', json=body).json()['shots'] == [first]
    state, copied = create(client, root, first['id'], first['id'])
    assert state['shots'][1]['title'] == '镜头一 副本'
    assert state['shots'][1]['description'] == '窗边落杯'
    for _ in range(2):
        state, _ = create(client, root, state['shots'][-1]['id'])
        assert not retired & state['shots'][-1].keys()
    order = [shot['id'] for shot in reversed(state['shots'])]
    response = client.put(root + '/order', json={'expectedOrderRevision': state['orderRevision'], 'shotIds': order})
    assert response.status_code == 200
    assert [shot['id'] for shot in response.json()['shots']] == order
    snapshot = StoryboardProjects(LocalProjects(tmp_path)).snapshot(project['id'])['storyboard']
    assert snapshot == response.json()
    store.release(client.headers['X-MuseShow-Session'])
    store.rename(project['id'], '改名后的分镜', project['name'])
    assert StoryboardProjects(store).snapshot(project['id'])['storyboard'] == snapshot


def test_stale_edits_order_and_invalid_fields_do_not_overwrite_data(board_api):
    client, _, project, root = board_api
    state, _ = create(client, root)
    original = state['shots'][0]
    updated = patch(client, root, original, title='新标题').json()
    assert patch(client, root, original, description='过期修改').status_code == 409
    current = updated['shots'][0]
    assert patch(client, root, current, title='   ').status_code == 400
    assert patch(client, root, current, targetDurationMs=4500).status_code == 422
    assert patch(client, root, current, narration='你好').status_code == 422
    assert patch(client, root, current, description=None).status_code == 400
    assert patch(client, root, current, unknown='bad').status_code == 422
    assert patch(client, root, current, shotSize='特写').status_code == 422
    assert patch(client, root, current, cameraMovement='推进').status_code == 422
    assert client.put(root + '/order', json={'expectedOrderRevision': 0, 'shotIds': [original['id']]}).status_code == 409
    assert client.put(root + '/order', json={'expectedOrderRevision': 1, 'shotIds': [original['id'], original['id']]}).status_code == 409
    assert client.get(root).json()['storyboard'] == updated
    path = Path(project['path']) / 'storyboard.json'
    broken = '{"version":999,"shots":[]}'
    path.write_text(broken)
    assert client.get(root).status_code == 409
    assert client.post(root + '/shots', json={'id': str(uuid4()), 'expectedOrderRevision': 0}).status_code == 409
    assert path.read_text() == broken


def test_asset_association_adoption_and_both_delete_paths_respect_shot_references(board_api):
    client, _, project, root = board_api
    first, second = image(client, project['id']), image(client, project['id'])
    state, _ = create(client, root)
    shot = state['shots'][0]
    endpoint = f'{root}/shots/{shot["id"]}'
    assert client.post(endpoint + '/adopt', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetId': first['id']}).status_code == 409
    assert client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': 'audio', 'assetIds': [first['id']]}).status_code == 400
    assert client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetIds': [str(uuid4())]}).status_code == 409
    state = client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetIds': [first['id'], second['id']]}).json()
    shot = state['shots'][0]
    state = client.post(endpoint + '/adopt', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetId': first['id']}).json()
    shot = state['shots'][0]
    assert shot['selected']['visual'] == first['id']
    assert client.delete(f'/api/projects/{project["id"]}/assets/{first["id"]}').status_code == 409
    assert client.delete(f'/api/data/{project["id"]}/assets/{first["id"]}').status_code == 200
    assert client.get(f'/api/data/{project["id"]}/assets/{first["id"]}').status_code == 200
    # Removing a candidate clears its adoption but neither deletes nor mutates files.
    state = client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetIds': [second['id']]}).json()
    assert state['shots'][0]['selected']['visual'] is None
    assert client.get(f'/api/data/{project["id"]}/assets/{first["id"]}').status_code == 200
    response = client.request('DELETE', endpoint, json={'expectedRevision': state['shots'][0]['revision']})
    assert response.status_code == 200 and response.json()['shots'] == []
    assert len(client.get(f'/api/projects/{project["id"]}/assets').json()) == 2


def test_description_changes_preserve_adoption_without_review_state(board_api):
    client, _, project, root = board_api
    asset = image(client, project['id'])
    state, _ = create(client, root)
    shot = state['shots'][0]
    endpoint = f'{root}/shots/{shot["id"]}'
    shot = client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetIds': [asset['id']]}).json()['shots'][0]
    shot = client.post(endpoint + '/adopt', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetId': asset['id']}).json()['shots'][0]
    shot = patch(client, root, shot, title='仅改标题').json()['shots'][0]
    assert 'needsReview' not in shot and 'referenceIds' not in shot
    old = shot
    shot = patch(client, root, shot, description='新的画面要求').json()['shots'][0]
    assert shot['selected']['visual'] == asset['id']
    assert 'needsReview' not in shot and 'referenceIds' not in shot
    assert patch(client, root, old, description='过期要求').status_code == 409


def test_removed_shot_metadata_reads_without_writes_and_is_discarded_on_edit(board_api):
    client, _, project, root = board_api
    chosen, old_reference = image(client, project['id']), image(client, project['id'])
    state, _ = create(client, root)
    shot = state['shots'][0]
    endpoint = f'{root}/shots/{shot["id"]}'
    state = client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetIds': [chosen['id']]}).json()
    shot = state['shots'][0]
    state = client.post(endpoint + '/adopt', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetId': chosen['id']}).json()
    state['shots'][0].update(referenceIds=[old_reference['id']], needsReview=True)
    path = Path(project['path']) / 'storyboard.json'
    path.write_text(json.dumps(state))
    original = path.read_bytes()
    read = client.get(root).json()['storyboard']
    shot = read['shots'][0]
    assert not {'referenceIds', 'needsReview'} & shot.keys()
    assert shot['selected']['visual'] == chosen['id']
    assert path.read_bytes() == original
    # Removed UI capabilities also have no writable API left behind.
    assert client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': 'reference', 'assetIds': [old_reference['id']]}).status_code == 422
    assert client.post(endpoint + '/confirm', json={'expectedRevision': shot['revision']}).status_code == 404
    assert path.read_bytes() == original
    state = patch(client, root, shot, description='保留既有主画面').json()
    assert state['shots'][0]['selected']['visual'] == chosen['id']
    assert not {'referenceIds', 'needsReview'} & json.loads(path.read_bytes())['shots'][0].keys()
    assert client.get(f'/api/data/{project["id"]}/assets/{old_reference["id"]}').status_code == 200


def test_selected_shot_is_real_agent_context_without_enabling_shot_write_tools(board_api):
    client, store, project, root = board_api
    state, _ = create(client, root)
    shot = patch(client, root, state['shots'][0], title='选中镜头', description='雨后咖啡馆').json()['shots'][0]
    config = ModelConfigs(store.repository).save('agent', 'https://example.test', 'chat', 'private')
    def handle(request):
        payload = json.loads(request.content)
        data = next(item['content'] for item in payload['messages'] if item['role'] == 'user' and item['content'].startswith('当前项目状态'))
        context = json.loads(data.split('\n', 1)[1])
        assert context['selectedShot']['id'] == shot['id']
        assert context['selectedShot']['description'] == '雨后咖啡馆'
        assert not {'shotSize', 'cameraMovement', 'narration', 'targetDurationMs'} & context['selectedShot'].keys()
        assert context['selectedNodeId'] is None
        assert 'save_shot' not in {tool['function']['name'] for tool in payload['tools']}
        return httpx.Response(200, text='data: {"choices":[{"delta":{"content":"当前镜头描写雨后咖啡馆。"},"finish_reason":"stop"}]}\n\ndata: [DONE]\n\n')
    headers = dict(client.headers)
    with TestClient(create_app(store, ChatCompletions(httpx.MockTransport(handle))), headers=headers) as chat:
        body = {'id': str(uuid4()), 'modelId': config['id'], 'text': '讨论这个镜头', 'selectedShotId': shot['id']}
        response = chat.post(f'/api/data/{project["id"]}/chat', json=body)
        assert response.status_code == 200 and '"error": null' in response.text
        assert chat.post(f'/api/data/{project["id"]}/chat', json={**body, 'id': str(uuid4()), 'selectedShotId': str(uuid4())}).status_code == 404
        assert chat.post(f'/api/data/{project["id"]}/chat', json={**body, 'id': str(uuid4()), 'selectedNodeId': str(uuid4())}).status_code == 400


@pytest.fixture(scope='module')
def video_bytes(tmp_path_factory):
    directory = tmp_path_factory.mktemp('shot-media')
    result = {}
    for sound in (False, True):
        file = directory / f'{sound}.mp4'
        command = ['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'color=c=blue:s=32x18:r=10']
        if sound:
            command += ['-f', 'lavfi', '-i', 'sine=frequency=440:sample_rate=8000']
        subprocess.run([*command, '-t', '0.3', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', str(file)], check=True, timeout=20)
        result[sound] = file.read_bytes()
    return result


def media(client, project_id, name, data):
    response = client.put(f'/api/projects/{project_id}/assets/{uuid4()}', content=data, headers={'X-Asset-Name': name})
    assert response.status_code == 200, response.text
    return response.json()


def test_unique_visual_original_audio_and_narration_are_independent(board_api, video_bytes):
    client, _, project, root = board_api
    frame = image(client, project['id'])
    video = media(client, project['id'], 'sound.mp4', video_bytes[True])
    silent = media(client, project['id'], 'silent.mp4', video_bytes[False])
    audio = BytesIO()
    with wave.open(audio, 'wb') as output:
        output.setparams((1, 2, 8000, 0, 'NONE', 'not compressed'))
        output.writeframes(b'\0' * 4800)
    voice = media(client, project['id'], 'voice.wav', audio.getvalue())
    assert video['hasAudio'] is True and silent['hasAudio'] is False
    state, _ = create(client, root)
    shot = state['shots'][0]
    endpoint = f'{root}/shots/{shot["id"]}'
    def change(method, suffix, **value):
        nonlocal shot
        response = client.request(method, endpoint + suffix, json={'expectedRevision': shot['revision'], **value})
        assert response.status_code == 200, response.text
        shot = response.json()['shots'][0]
    change('PUT', '/assets', kind='visual', assetIds=[frame['id'], video['id'], silent['id']])
    change('POST', '/adopt', kind='visual', assetId=video['id'])
    assert shot['selected']['visual'] == video['id'] and shot['originalAudioMode'] == 'keep'
    change('POST', '/original-audio', mode='mute')
    muted_revision = shot['revision']
    change('PUT', '/assets', kind='audio', assetIds=[voice['id']])
    change('POST', '/adopt', kind='audio', assetId=voice['id'])
    assert shot['selected'] == {'visual': video['id'], 'audio': voice['id']}
    assert shot['originalAudioMode'] == 'mute'
    change('POST', '/adopt', kind='audio', assetId=None)
    assert shot['originalAudioMode'] == 'mute'
    assert client.post(endpoint + '/original-audio', json={'expectedRevision': muted_revision, 'mode': 'keep'}).status_code == 409
    change('POST', '/adopt', kind='visual', assetId=frame['id'])
    assert shot['originalAudioMode'] == 'keep'
    assert client.post(endpoint + '/original-audio', json={'expectedRevision': shot['revision'], 'mode': 'mute'}).status_code == 409
    change('POST', '/adopt', kind='visual', assetId=silent['id'])
    assert client.post(endpoint + '/original-audio', json={'expectedRevision': shot['revision'], 'mode': 'mute'}).status_code == 409
    assert set(shot['candidates']['visual']) == {frame['id'], video['id'], silent['id']}
    assert client.get(f'/api/data/{project["id"]}/assets/{video["id"]}').content == video_bytes[True]


def test_v1_migration_preserves_both_choices_until_explicit_resolution(board_api, video_bytes):
    client, store, project, root = board_api
    frame = image(client, project['id'])
    video = media(client, project['id'], 'sound.mp4', video_bytes[True])
    path = Path(project['path']) / 'storyboard.json'
    first, conflict = str(uuid4()), str(uuid4())
    legacy = {'version': 1, 'revision': 7, 'orderRevision': 2, 'shots': [
        {'id': first, 'title': '仅关键帧', 'narration': '', 'targetDurationMs': 6000, 'shotSize': '', 'cameraMovement': '', 'candidates': {'image': [frame['id']]}, 'selected': {'image': frame['id']}},
        {'id': conflict, 'title': '原有双选择', 'candidates': {'image': [frame['id']], 'video': [video['id']]}, 'selected': {'image': frame['id'], 'video': video['id']}}]}
    path.write_text(json.dumps(legacy))
    original = path.read_bytes()
    state = client.get(root).json()['storyboard']
    assert state['version'] == 2 and state['revision'] == 7 and state['orderRevision'] == 2
    assert state['shots'][0]['selected']['visual'] == frame['id']
    for key in ('narration', 'targetDurationMs', 'shotSize', 'cameraMovement'):
        assert state['shots'][0][key] == legacy['shots'][0][key]
        assert key not in state['shots'][1]
    shot = state['shots'][1]
    assert shot['selected']['visual'] is None and 'needsReview' not in shot
    assert shot['legacyVisualChoices'] == [frame['id'], video['id']]
    assert shot['candidates']['visual'] == [frame['id'], video['id']]
    assert path.read_bytes() == original  # Reading never rewrites an old project.
    endpoint = f'{root}/shots/{conflict}'
    state = client.post(endpoint + '/adopt', json={'expectedRevision': 1, 'kind': 'visual', 'assetId': video['id']}).json()
    shot = state['shots'][1]
    assert not shot['legacyVisualChoices'] and shot['selected']['visual'] == video['id']
    assert shot['candidates']['visual'] == [frame['id'], video['id']]
    assert json.loads(path.read_bytes())['version'] == 2
    assert StoryboardProjects(LocalProjects(store.repository)).snapshot(project['id'])['storyboard'] == state
    # Invalid old data is rejected without replacing the source document.
    legacy['shots'][1]['selected']['video'] = str(uuid4())
    path.write_text(json.dumps(legacy))
    damaged = path.read_bytes()
    assert client.get(root).status_code == 409 and path.read_bytes() == damaged


@pytest.mark.parametrize('has_audio', [True, False])
def test_old_video_audio_probe_is_revisioned_and_preserves_source(board_api, video_bytes, monkeypatch, has_audio):
    from museshow.domain.projects import ProjectError
    client, _, project, root = board_api
    video = media(client, project['id'], 'old.mp4', video_bytes[has_audio])
    inventory = Path(project['path']) / 'assets.json'
    values = json.loads(inventory.read_bytes())
    del values[video['id']]['hasAudio']
    inventory.write_text(json.dumps(values))
    state, _ = create(client, root)
    shot = state['shots'][0]
    endpoint = f'{root}/shots/{shot["id"]}'
    shot = client.put(endpoint + '/assets', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetIds': [video['id']]}).json()['shots'][0]
    shot = client.post(endpoint + '/adopt', json={'expectedRevision': shot['revision'], 'kind': 'visual', 'assetId': video['id']}).json()['shots'][0]
    assert client.get(root).json()['assets'][0]['hasAudio'] is None
    assert client.post(endpoint + '/original-audio', json={'expectedRevision': shot['revision'], 'mode': 'mute'}).status_code == 409
    probe_url = f'/api/projects/{project["id"]}/assets/{video["id"]}/probe-audio'
    before = inventory.read_bytes()
    with monkeypatch.context() as patcher:
        def fail(*args):
            raise ProjectError('ffprobe unavailable', 409)
        patcher.setattr('museshow.infrastructure.asset_catalog.probe', fail)
        assert client.post(probe_url, json={'expectedRevision': video['revision']}).status_code == 409
        assert inventory.read_bytes() == before
    result = client.post(probe_url, json={'expectedRevision': video['revision']})
    assert result.status_code == 200, result.text
    detected = result.json()
    assert detected['hasAudio'] is has_audio and detected['revision'] == video['revision'] + 1
    assert client.post(probe_url, json={'expectedRevision': video['revision']}).status_code == 409
    assert client.post(probe_url, json={'expectedRevision': detected['revision']}).json() == detected
    result = client.post(endpoint + '/original-audio', json={'expectedRevision': shot['revision'], 'mode': 'mute'})
    assert result.status_code == (200 if has_audio else 409)
    assert client.get(f'/api/data/{project["id"]}/assets/{video["id"]}').content == video_bytes[has_audio]
