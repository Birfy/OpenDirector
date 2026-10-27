import asyncio
from copy import deepcopy
from pathlib import Path
from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from museshow.application.generation import Generation
from museshow.application.production import Production
from museshow.domain.projects import ProjectError
from museshow.infrastructure.app_settings import AppSettings
from museshow.infrastructure.local_projects import LocalProjects, read_json, write_json
from museshow_api.main import create_app
from test_production import setup


def test_default_and_saved_settings_survive_application_restart(tmp_path):
    headers = {'X-MuseShow-Request': '1'}
    store = LocalProjects(tmp_path)
    with TestClient(create_app(store), headers=headers) as client:
        assert client.get('/api/settings').json() == {'removeWatermark': True}
        assert not (store.state_dir / 'settings.json').exists()
        for value in (False, True, False):
            response = client.patch('/api/settings', json={'removeWatermark': value})
            assert response.status_code == 200
            assert response.json() == {'removeWatermark': value}
    with TestClient(create_app(LocalProjects(tmp_path)), headers=headers) as client:
        assert client.get('/api/settings').json() == {'removeWatermark': False}
    assert read_json(store.state_dir / 'settings.json') == {'version': 1, 'removeWatermark': False}
    assert not store.root.exists()


@pytest.mark.parametrize('invalid', [None, {}, {'removeWatermark': None}, {'removeWatermark': 1},
                                    {'removeWatermark': 'false'}, {'removeWatermark': True, 'unknown': 1}])
def test_invalid_requests_do_not_change_saved_settings(tmp_path, invalid):
    settings = AppSettings(tmp_path)
    settings.update({'removeWatermark': False})
    before = settings.path.read_bytes()
    with TestClient(create_app(LocalProjects(tmp_path)), headers={'X-MuseShow-Request': '1'}) as client:
        assert client.patch('/api/settings', json=invalid).status_code == 422
        assert settings.path.read_bytes() == before
        assert client.get('/api/settings').json() == {'removeWatermark': False}


def test_settings_routes_keep_local_request_protection(tmp_path):
    with TestClient(create_app(LocalProjects(tmp_path)), headers={'X-MuseShow-Request': '1'}) as client:
        assert client.get('/api/settings', headers={'Origin': 'https://untrusted.example'}).status_code == 403
        assert client.get('/api/settings', headers={'Host': 'untrusted.example'}).status_code == 403
        assert client.patch('/api/settings', json={'removeWatermark': False}, headers={'X-MuseShow-Request': ''}).status_code == 403
        assert client.get('/api/settings').json() == {'removeWatermark': True}


@pytest.mark.parametrize('contents', ['{broken', '[]', '{"version":2,"removeWatermark":true}',
                                      '{"version":1}', '{"version":1,"removeWatermark":"true"}',
                                      '{"version":1,"removeWatermark":false,"unknown":1}'])
def test_corrupt_settings_are_reported_and_preserved(tmp_path, contents):
    settings = AppSettings(tmp_path)
    settings.path.write_text(contents)
    for operation in (settings.get, lambda: settings.update({'removeWatermark': True})):
        with pytest.raises(ProjectError, match='原文件未覆盖'):
            operation()
        assert settings.path.read_text() == contents


def test_failed_atomic_replace_preserves_settings_and_removes_temporary_file(tmp_path, monkeypatch):
    from museshow.infrastructure import local_projects

    settings = AppSettings(tmp_path)
    settings.update({'removeWatermark': False})
    before = settings.path.read_bytes()
    def fail(*args):
        raise OSError('simulated disk failure')
    with TestClient(create_app(LocalProjects(tmp_path)), headers={'X-MuseShow-Request': '1'}) as client:
        monkeypatch.setattr(local_projects.os, 'replace', fail)
        assert client.patch('/api/settings', json={'removeWatermark': True}).status_code == 503
        assert settings.path.read_bytes() == before
        assert client.get('/api/settings').json() == {'removeWatermark': False}
        assert not list(settings.path.parent.glob('.museshow-*.tmp'))


@pytest.mark.parametrize('kind', ['image', 'video', 'audio', 'text'])
@pytest.mark.parametrize('remove', [False, True])
def test_task_snapshots_settings_and_duplicate_submission_keeps_original(tmp_path, kind, remove):
    store, session, project, _, generation, _ = setup(tmp_path)
    config = generation.configs.save('agent' if kind == 'text' else kind, 'https://ark.test', kind, 'private')
    generation.settings.update({'removeWatermark': remove})
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)
    request = {'id': str(uuid4()), 'expectedRevision': 1, 'modelConfigId': config['id'], 'inputs': {'prompt': '测试'}}
    task, _, _ = generation._prepare(project['id'], node['id'], request, session)
    if kind in {'image', 'video'}:
        assert task['parameters']['watermark'] is not remove
    else:
        assert 'watermark' not in task['parameters']
    path = Path(project['path']) / 'tasks' / (task['id'] + '.json')
    before = path.read_bytes()
    generation.settings.update({'removeWatermark': not remove})
    duplicate, _, config = generation._prepare(project['id'], node['id'], request, session)
    assert config is None and duplicate == task and path.read_bytes() == before
    new_node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': kind}, session)
    new_task, _, _ = generation._prepare(project['id'], new_node['id'], {**request, 'id': str(uuid4())}, session)
    if kind in {'image', 'video'}:
        assert new_task['parameters']['watermark'] is remove


def test_queued_task_recovery_uses_saved_parameters_after_restart(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    node = generation.canvas.create(project['id'], {'id': str(uuid4()), 'kind': 'image'}, session)
    task, _, _ = generation._prepare(project['id'], node['id'], {'id': str(uuid4()), 'expectedRevision': 1,
        'modelConfigId': config['id'], 'inputs': {'prompt': '原任务'}}, session)
    assert task['parameters']['watermark'] is False
    generation.settings.update({'removeWatermark': False})
    calls = []
    original = provider.generate
    async def capture(config, task, submitted):
        calls.append(deepcopy(task))
        return await original(config, task, submitted)
    provider.generate = capture
    async def run():
        restarted = Generation(store, generation.configs, provider)
        await restarted.recover(project['id'], task['id'], session)
        await asyncio.gather(*(job.future for job in list(restarted.jobs.values())))
        assert len(calls) == 1 and calls[0]['parameters']['watermark'] is False
        snapshot = restarted.canvas.snapshot(project['id'])
        assert snapshot['tasks'][0]['status'] == 'succeeded'
        saved = store.asset(project['id'], snapshot['tasks'][0]['assetId'])[0]
        restarted.settings.update({'removeWatermark': True})
        assert store.asset(project['id'], snapshot['tasks'][0]['assetId'])[0] == saved
        await restarted.close()
    asyncio.run(run())


@pytest.mark.parametrize('preference', ['default', 'enabled', 'disabled', 'legacy'])
def test_plan_snapshot_survives_setting_changes_restart_and_failed_step_retry(tmp_path, preference):
    store, session, project, config, generation, provider = setup(tmp_path)
    if preference in {'enabled', 'disabled'}:
        generation.settings.update({'removeWatermark': preference == 'enabled'})
    manager = Production(store, generation)
    specification = {'title': '水印快照', 'shots': [
        {'title': '一', 'imagePrompt': '第一张'},
        {'title': '二', 'imagePrompt': '第二张', 'referenceShot': 1}]}
    plan, _ = manager._prepare(project['id'], str(uuid4()), specification, {'image': config['id']}, session)
    watermark = preference in {'disabled', 'legacy'}
    path = Path(project['path']) / 'production-plans' / (plan['id'] + '.json')
    if preference == 'legacy':
        legacy = read_json(path)
        legacy.pop('watermark')
        write_json(path, legacy)
        before = path.read_bytes()
        plan = manager.read(project['id'], plan['id'])
        assert plan['watermark'] is True and path.read_bytes() == before
    else:
        assert plan['watermark'] is watermark
    generation.settings.update({'removeWatermark': watermark})  # Opposite of the plan.
    calls = []
    original = provider.generate
    async def capture(config, task, submitted):
        calls.append(deepcopy(task))
        return await original(config, task, submitted)
    provider.generate = capture
    async def run():
        provider.fail = True
        manager._launch(project['id'], plan)
        await asyncio.gather(*list(manager.jobs.values()))
        failed = manager.read(project['id'], plan['id'])
        assert failed['status'] == 'blocked', failed['error']
        assert len(calls) == 1 and calls[0]['parameters']['watermark'] is watermark
        await manager.close()
        restarted = Production(store, Generation(store, generation.configs, provider))
        await restarted.resume(project['id'], plan['id'], session)
        await asyncio.gather(*list(restarted.jobs.values()))
        complete = restarted.read(project['id'], plan['id'])
        assert complete['status'] == 'succeeded', complete['error']
        assert len(calls) == 3 and all(task['parameters']['watermark'] is watermark for task in calls)
        assert complete['steps'][0]['attempt'] == 1
        assert complete['watermark'] is watermark
        await restarted.close()
        await restarted.generation.close()
    asyncio.run(run())
