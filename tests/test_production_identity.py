import asyncio
from copy import deepcopy
from pathlib import Path
from types import SimpleNamespace
from uuid import uuid4

import pytest
from pydantic import ValidationError

from museshow.agent.loop import AgentLoop, SCHEMAS
from museshow.application.production import Production
from museshow.application.production_chat import ProductionChat
from museshow.domain.production import ProductionRequest
from museshow.domain.projects import ProjectError
from museshow.infrastructure.execution import read_production_plan
from museshow.infrastructure.local_projects import read_json, write_json
from test_production import setup


def test_agent_saves_one_script_and_plan_reuses_its_content_version(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    loop = AgentLoop(store, generation.configs, generation, None)
    loop.production = manager
    turn = SimpleNamespace(owner=project['id'], session=session, id=str(uuid4()), config=config,
        selections={'image': config['id']}, conversation={'messages': [{'text': '写一份雨后出发的剧本', 'assets': []}, {}]},
        selected_node_id=None, selected_shot_id=None)
    async def run():
        saved = await loop.execute(turn, 'save_text_asset', {'name': '剧本.md', 'text': '雨后，推门出发。'}, str(uuid4()))
        # A metadata rename is not a new script content version.
        asset = generation.canvas.assets.list(project['id'])[0]
        renamed = generation.canvas.assets.update(project['id'], asset['id'], {
            'expectedRevision': asset['revision'], 'name': '正式稿.md', 'purpose': 'document', 'referenceIds': []}, session)
        request = {'title': '雨后出发', 'scriptAssetId': saved['assetId'], 'scriptFingerprint': saved['fingerprint'],
                   'shots': [{'title': '01 01 推门', 'imagePrompt': '雨后推门'}]}
        result = await loop.execute(turn, 'start_production_plan', request, str(uuid4()))
        await asyncio.gather(*list(manager.jobs.values()))
        plan = manager.list(project['id'])[0]
        assert plan['status'] == 'succeeded', plan['error']
        assert plan['scriptAssetId'] == result['scriptAssetId'] == saved['assetId']
        assert plan['scriptFingerprint'] == renamed['fingerprint'] == saved['fingerprint']
        assert plan['script'] == '' and len(provider.calls) == 1
        snapshot = generation.canvas.snapshot(project['id'])
        assert len([asset for asset in snapshot['assets'] if asset['kind'] == 'text']) == 1
        assert len([node for node in snapshot['canvas']['nodes'] if node['kind'] == 'text']) == 1
        assert plan['shots'][0]['title'] == '推门'
        assert snapshot['tasks'][0]['title'] == '推门｜关键帧'
        assert (await loop.execute(turn, 'read_text_asset', {'assetId': saved['assetId']}, str(uuid4())))['fingerprint'] == saved['fingerprint']
        context = loop._project(turn)
        assert context['productionPlans'][0]['scriptAssetId'] == saved['assetId']
        assert next(asset for asset in context['assets'] if asset['kind'] == 'image')['shotId'] == plan['shots'][0]['id']
        message = ProductionChat(store, manager).read(project['id'])['messages'][-1]['snapshot']
        assert message['script'] == {'assetId': saved['assetId'], 'name': '正式稿.md', 'fingerprint': saved['fingerprint']}
        # Explicit candidate drafts coexist, even with the same name/content.
        candidate = await loop.execute(turn, 'save_text_asset', {'name': '正式稿.md', 'text': '雨后，推门出发。'}, str(uuid4()))
        assert candidate['assetId'] != saved['assetId']
        assert manager.list(project['id'])[0]['scriptAssetId'] == saved['assetId']
        generation.canvas.remove(project['id'], saved['nodeId'], session)
        with pytest.raises(ProjectError, match='引用'):
            generation.canvas.assets.delete(project['id'], saved['assetId'], session)
        assert store.asset(project['id'], saved['assetId'])[0] == '雨后，推门出发。'.encode()
        await manager.close(); await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('invalid', ['fingerprint', 'tampered_file', 'not_text', 'foreign'])
def test_invalid_script_basis_is_rejected_before_plan_or_paid_submission(tmp_path, invalid):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    script = generation.canvas.save_text(project['id'], str(uuid4()), str(uuid4()), '正文', '剧本.md', session, create=True)
    asset_id, fingerprint = script['id'], script['fingerprint']
    if invalid == 'fingerprint': fingerprint = 'sha256:' + '0' * 64
    if invalid == 'tampered_file': (Path(project['path']) / script['path']).write_bytes(b'changed outside the app')
    if invalid == 'not_text':
        import io
        from PIL import Image
        data = io.BytesIO()
        Image.new('RGB', (4, 4)).save(data, 'PNG')
        image = generation.canvas.assets.import_file(project['id'], str(uuid4()), '图.png', data.getvalue(), session)
        asset_id, fingerprint = image['id'], image['fingerprint']
    if invalid == 'foreign':
        other = store.create('其他项目', str(uuid4()), session)
        foreign = generation.canvas.assets.import_file(other['id'], str(uuid4()), '稿.md', b'other', session)
        asset_id, fingerprint = foreign['id'], foreign['fingerprint']
    with pytest.raises(ProjectError):
        manager._prepare(project['id'], str(uuid4()), {'title': '拒绝无效依据', 'scriptAssetId': asset_id,
            'scriptFingerprint': fingerprint, 'shots': [{'title': '开场', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
    assert manager.list(project['id']) == [] and provider.calls == []
    assert manager.board.snapshot(project['id'])['storyboard']['shots'] == []


def test_script_changed_before_start_blocks_without_creating_shots(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    script = generation.canvas.save_text(project['id'], str(uuid4()), str(uuid4()), '原稿', '剧本.md', session, create=True)
    plan, _ = manager._prepare(project['id'], str(uuid4()), {'title': '已确认原稿', 'scriptAssetId': script['id'],
        'scriptFingerprint': script['fingerprint'], 'shots': [{'title': '开场', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
    (Path(project['path']) / script['path']).write_bytes(b'changed')
    async def run():
        manager._launch(project['id'], plan)
        await asyncio.gather(*list(manager.jobs.values()))
        assert manager.list(project['id'])[0]['status'] == 'blocked'
        assert provider.calls == [] and manager.board.snapshot(project['id'])['storyboard']['shots'] == []
        await manager.close(); await generation.close()
    asyncio.run(run())


def test_existing_and_new_shots_keep_identity_through_reorder_and_restart(tmp_path):
    store, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(store, generation)
    owner = project['id']
    def create(title):
        board = manager.board.snapshot(owner)['storyboard']
        return manager.board.create(owner, {'id': str(uuid4()), 'title': title, 'description': '保留原描述',
            'expectedOrderRevision': board['orderRevision'], 'afterId': board['shots'][-1]['id'] if board['shots'] else None}, session)['shots'][-1]
    first, second = create('原开场'), create('原结尾')
    request = {'title': '混合制作', 'shots': [
        {'shotId': second['id'], 'expectedRevision': second['revision'], 'title': '不覆盖已有标题', 'imagePrompt': '结尾'},
        {'title': '02 02 雨巷', 'imagePrompt': '雨巷'},
        {'shotId': first['id'], 'expectedRevision': first['revision'], 'title': '不覆盖原开场', 'imagePrompt': '开场'},
        {'title': '2049 回声', 'imagePrompt': '未来'}]}
    plan, _ = manager._prepare(owner, str(uuid4()), request, {'image': config['id']}, session)
    manager._initialize(owner, plan)
    initial = manager.board.snapshot(owner)['storyboard']
    assert [shot['title'] for shot in initial['shots']] == ['原开场', '原结尾', '雨巷', '2049 回声']
    assert initial['shots'][0] == first and initial['shots'][1] == second
    manager._initialize(owner, plan)
    assert manager.board.snapshot(owner)['storyboard'] == initial
    reordered = [initial['shots'][3]['id'], first['id'], initial['shots'][2]['id'], second['id']]
    manager.board.reorder(owner, {'expectedOrderRevision': initial['orderRevision'], 'shotIds': reordered}, session)
    # The plan's list position is also not the binding for a step.
    plan['shots'].reverse()
    manager._save(owner, plan)
    async def run():
        manager._launch(owner, plan)
        await asyncio.gather(*list(manager.jobs.values()))
        complete = manager.list(owner)[0]
        assert complete['status'] == 'succeeded', complete['error']
        snapshot = generation.canvas.snapshot(owner)
        board = manager.board.snapshot(owner)['storyboard']
        assert [shot['id'] for shot in board['shots']] == reordered
        assert not any(asset['kind'] == 'text' for asset in snapshot['assets'])
        for step in complete['steps']:
            task = next(task for task in snapshot['tasks'] if task['id'] == step['taskId'])
            asset = next(asset for asset in snapshot['assets'] if asset['id'] == step['assetId'])
            for item in (task, asset):
                assert item['productionPlanId'] == complete['id']
                assert item['productionStepId'] == step['id'] and item['shotId'] == step['shotId']
            assert next(shot for shot in board['shots'] if shot['id'] == step['shotId'])['selected']['visual'] == asset['id']
        assert manager.view(owner, complete)['steps'][0]['title'] == '04 原结尾｜关键帧'
        snapshot_message = ProductionChat(store, manager).read(owner)['messages'][-1]['snapshot']
        assert snapshot_message['delivery']['readyShots'] == snapshot_message['delivery']['totalShots'] == 4
        assert '4/4 镜素材可用' in snapshot_message['delivery']['text']
        assert snapshot_message['work']['generated'] == snapshot_message['work']['adopted'] == 4
        before = {asset['id']: (asset['name'], store.asset(owner, asset['id'])[0]) for asset in snapshot['assets']}
        await manager.close(); await generation.close()
        restarted = Production(store, generation)
        await generation.start(); await restarted.start()
        again = await restarted.submit(owner, complete['id'], request, {'image': config['id']}, session)
        assert again['status'] == 'succeeded' and len(provider.calls) == 4
        assert manager.board.snapshot(owner)['storyboard'] == board
        assert {asset['id']: (asset['name'], store.asset(owner, asset['id'])[0]) for asset in generation.canvas.assets.list(owner)} == before
        await restarted.close(); await generation.close()
    asyncio.run(run())


@pytest.mark.parametrize('invalid', ['stale', 'removed', 'duplicate'])
def test_existing_shot_reference_must_be_current_and_unique(tmp_path, invalid):
    _, session, project, config, generation, provider = setup(tmp_path)
    manager = Production(generation.store, generation)
    shot = manager.board.create(project['id'], {'id': str(uuid4()), 'title': '已有镜头', 'expectedOrderRevision': 0}, session)['shots'][0]
    request = {'title': '为已有镜头制作', 'shots': [{'title': '已有镜头', 'shotId': shot['id'], 'expectedRevision': 1, 'imagePrompt': '雨'}]}
    if invalid == 'stale': manager.board.change(project['id'], shot['id'], 1, session, fields={'title': '用户新标题'})
    if invalid == 'removed': manager.board.change(project['id'], shot['id'], 1, session, remove=True)
    if invalid == 'duplicate': request['shots'].append(deepcopy(request['shots'][0]))
    with pytest.raises((ProjectError, ValidationError)):
        manager._prepare(project['id'], str(uuid4()), request, {'image': config['id']}, session)
    assert manager.list(project['id']) == [] and provider.calls == []


def test_tool_requires_saved_script_and_legacy_read_keeps_files_unchanged(tmp_path):
    assert 'script' not in SCHEMAS['start_production_plan'][0].model_json_schema()['properties']
    with pytest.raises(ValidationError):
        ProductionRequest.model_validate({'title': '不另存剧本', 'script': '重复正文', 'shots': [{'title': '开场', 'imagePrompt': '雨'}]})
    store, session, project, config, generation, _ = setup(tmp_path)
    manager = Production(store, generation)
    plan, _ = manager._prepare(project['id'], str(uuid4()), {'title': '旧稿', 'shots': [{'title': '01 原开场', 'imagePrompt': '雨'}]}, {'image': config['id']}, session)
    path = Path(project['path']) / 'production-plans' / (plan['id'] + '.json')
    legacy = read_json(path)
    legacy.update(script='保留历史内嵌正文', scriptAssetId=None)
    legacy.pop('scriptFingerprint')
    for shot in legacy['shots']: shot.pop('existing')
    write_json(path, legacy)
    before = path.read_bytes()
    assert read_production_plan(path)['script'] == '保留历史内嵌正文'
    assert manager.list(project['id'])[0]['scriptAssetId'] is None
    assert path.read_bytes() == before
