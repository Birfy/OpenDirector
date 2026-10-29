from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from museshow.infrastructure.creation_projects import CreationProjects
from museshow.infrastructure.local_projects import LocalProjects
from museshow_api.main import create_app


@pytest.fixture
def api(tmp_path):
    local = LocalProjects(tmp_path)
    headers = {'X-MuseShow-Request': '1', 'X-MuseShow-Session': str(uuid4())}
    with TestClient(create_app(local), headers=headers) as client:
        yield client, local


def create(client, name='New project'):
    project_id, command_id = str(uuid4()), str(uuid4())
    command = dict(type='project.create', commandId=command_id, projectId=project_id, payload=dict(name=name))
    path = f'/api/creation/projects/{project_id}'
    response = client.post(path + '/commands', json=command)
    assert response.status_code == 200, response.text
    assert response.json()['status'] == 'applied'
    return path, command, response.json()


def rename(command, name='Renamed', revision=1):
    return dict(type='project.rename', commandId=str(uuid4()), projectId=command['projectId'],
                payload=dict(name=name), expectedVersions=[dict(objectType='project', id=command['projectId'], revision=revision)])


def test_create_open_release_rename_and_reopen_via_typed_commands(api):
    client, local = api
    path, command, created = create(client)
    value = client.post(path + '/open').json()
    assert value['format'] == 'opendesign-project' and value['formatVersion'] == 2
    assert value['project']['name'] == 'New project'
    session = client.headers['x-museshow-session']
    assert client.put('/api/creation/sessions/' + session, json={'projectId': command['projectId']}).status_code == 200
    change = rename(command)
    assert client.post(path + '/commands', json=change).status_code == 409
    assert client.delete('/api/creation/sessions/' + session).status_code == 200
    response = client.post(path + '/commands', json=change)
    assert response.status_code == 200 and response.json()['status'] == 'applied'
    assert client.post(path + '/commands', json=change).json() == response.json()
    assert client.post(path + '/commands', json=command).json() == created
    assert client.get(path + '/receipts/' + command['commandId']).json() == created
    assert client.post(path + '/open').json()['project']['revision'] == 2
    events = client.get(path + '/changes', params={'after': 1}).json()
    assert [event['commandId'] for event in events['events']] == [change['commandId']]
    assert events['nextCursor'] == events['currentCursor'] == 2
    assert client.get('/api/creation/projects').json()['projects'][0]['name'] == 'Renamed'
    assert local.list_projects()['projects'] == []


def test_conflicting_command_id_and_stale_version_have_distinct_outcomes(api):
    client, _ = api
    path, command, created = create(client)
    forged = {**command, 'payload': dict(name='Changed input')}
    response = client.post(path + '/commands', json=forged)
    assert response.status_code == 409 and response.json()['code'] == 'command_conflict'
    assert client.post(path + '/commands', json=command).json() == created
    stale = rename(command, revision=9)
    receipt = client.post(path + '/commands', json=stale).json()
    assert receipt['status'] == 'rejected' and receipt['issues'][0]['code'] == 'revision_conflict'
    assert client.get(path + '/receipts/' + stale['commandId']).json() == receipt
    assert len(client.get(path + '/changes').json()['events']) == 1
    assert client.get(path).json()['project']['revision'] == 1


def test_api_exposes_only_implemented_commands_and_never_accepts_snapshot_replacement(api):
    client, _ = api
    path, command, _ = create(client)
    unsupported = dict(type='asset.writeText', commandId=str(uuid4()), projectId=command['projectId'], payload=dict(name='note.txt', text='draft'))
    response = client.post(path + '/commands', json=unsupported)
    assert response.status_code == 501 and response.json()['code'] == 'capability_unsupported'
    assert client.get(path + '/receipts/' + unsupported['commandId']).status_code == 404
    forged = {**rename(command), 'apiKey': 'private-test-key'}
    response = client.post(path + '/commands', json=forged)
    assert response.status_code == 422 and 'private-test-key' not in response.text
    assert client.put(path, json=client.get(path).json()).status_code == 405
    wrong_project = f'/api/creation/projects/{uuid4()}/commands'
    assert client.post(wrong_project, json=command).status_code == 400
    assert len(client.get(path + '/changes').json()['events']) == 1


def test_unknown_and_legacy_projects_are_not_reinitialized(api):
    client, local = api
    legacy = local.create('Legacy', str(uuid4()))
    response = client.get('/api/creation/projects/' + legacy['id'])
    assert response.status_code == 409 and response.json()['code'] == 'unsupported_format'
    assert client.get(f'/api/creation/projects/{uuid4()}').status_code == 404
    assert client.get('/api/creation/projects').json()['projects'] == []
    assert client.get('/api/projects').json()['projects'] == [legacy]


def test_disk_failure_has_no_premature_event_and_retry_recovers_same_receipt(api, monkeypatch):
    client, _ = api
    path, command, _ = create(client)
    change = rename(command)
    def checkpoint(self, stage):
        if stage == 'bundle_written':
            raise OSError('injected disk failure')
    monkeypatch.setattr(CreationProjects, '_checkpoint', checkpoint)
    assert client.post(path + '/commands', json=change).status_code == 503
    # Queries cannot fall back to the old snapshot while recovery fails.
    assert client.get(path).status_code == 409
    assert client.get(path + '/changes').status_code == 409
    monkeypatch.setattr(CreationProjects, '_checkpoint', lambda self, stage: None)
    receipt = client.post(path + '/commands', json=change).json()
    assert receipt['status'] == 'applied' and receipt['eventCursor'] == 2
    assert client.get(path + '/receipts/' + change['commandId']).json() == receipt
    events = client.get(path + '/changes').json()['events']
    assert [event['cursor'] for event in events] == [1, 2]


def test_new_routes_keep_existing_local_request_protection(api):
    client, _ = api
    assert client.get('/api/creation/projects', headers={'Origin': 'https://untrusted.example'}).status_code == 403
    assert client.get('/api/creation/projects', headers={'X-MuseShow-Request': ''}).status_code == 403


def test_app_assembly_recovers_a_previously_interrupted_commit(tmp_path):
    from museshow.domain.creation.commands import parse_command
    local = LocalProjects(tmp_path)
    storage = CreationProjects(local)
    project_id = str(uuid4())
    command = parse_command(dict(type='project.create', projectId=project_id, commandId=str(uuid4()), payload=dict(name='Recovered')))
    def crash(stage):
        if stage == 'directory_ready':
            raise OSError('simulated shutdown')
    storage._checkpoint = crash
    with pytest.raises(OSError):
        storage.execute(command)
    app = create_app(LocalProjects(tmp_path))
    assert (tmp_path / 'projects/Recovered/project.json').is_file()
    with TestClient(app, headers={'X-MuseShow-Request': '1'}) as client:
        path = '/api/creation/projects/' + project_id
        assert client.get(path).json()['project']['name'] == 'Recovered'
        assert client.get(path + '/receipts/' + str(command.commandId)).json()['status'] == 'applied'
