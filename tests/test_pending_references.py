"""Batch reference confirmation is read-only and bound to displayed versions."""
from uuid import uuid4

from fastapi.testclient import TestClient
import pytest

from opendirector.application.chat_references import validate_chat_references
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.local_projects import read_json, write_json
from opendirector_api.main import create_app
from test_multimodal_references import media, small_video


def selection(canvas, owner, asset):
    node = next(node for node in canvas.snapshot(owner)['canvas']['nodes'] if node['assetId'] == asset['id'])
    return {'nodeId': node['id'], 'assetId': asset['id'], 'fingerprint': asset['fingerprint']}


def document(assets):
    return [{'type': 'text', 'text': '\n请使用'}, *[{'type': 'reference', 'assetId': asset['id'], 'name': asset['name'], 'fingerprint': asset['fingerprint']} for asset in assets], {'type': 'text', 'text': '\n保持此换行'}]


def files(store):
    return {path: path.read_bytes() for path in store.root.rglob('*') if path.is_file()}


def test_mixed_batch_preflight_never_writes_or_invokes_models(media, small_video):
    store, owner, session, canvas, image, audio, text = media
    video = canvas.import_file(owner, str(uuid4()), '片段.mp4', small_video, session, str(uuid4()))
    assets = [text, image, audio, video]
    selected = [selection(canvas, owner, asset) for asset in assets]
    before = files(store)
    with TestClient(create_app(store), headers={'X-OpenDirector-Request': '1'}) as client:
        # No edit lease is required for a read-only preflight.
        response = client.post(f'/api/projects/{owner}/chat-references/validate', json={'content': document(assets), 'selections': selected})
        assert response.status_code == 200 and response.json() == {'ok': True}
    assert files(store) == before


@pytest.mark.parametrize('change', ['node_removed', 'version_switched', 'fingerprint', 'file_changed', 'file_missing', 'existing_reference_changed', 'unsaved_text'])
def test_changed_or_missing_sources_reject_the_whole_batch(media, change):
    store, owner, session, canvas, image, audio, text = media
    assets = [image, text]
    selected = [selection(canvas, owner, asset) for asset in assets]
    content = document(assets)
    directory = store.root / '四类参考'
    if change == 'node_removed':
        canvas.remove(owner, selected[0]['nodeId'], session)
    elif change in {'version_switched', 'unsaved_text'}:
        path = directory / 'canvas.json'
        state = read_json(path)
        node = next(node for node in state['nodes'] if node['id'] == selected[0 if change == 'version_switched' else 1]['nodeId'])
        if change == 'version_switched':
            node['assetId'] = None
        else:
            node['draft'] = '未保存的修改'
        write_json(path, state)
    elif change == 'fingerprint':
        selected[0]['fingerprint'] = 'old-version'
    elif change == 'existing_reference_changed':
        selected = selected[:1]  # Text was in the draft before the new selection.
        content[2]['fingerprint'] = 'old-version'
    else:
        path = directory / 'assets' / image['id']
        if change == 'file_changed':
            path.write_bytes(b'modified behind catalog')
        else:
            path.unlink()
    before = files(store)
    with pytest.raises(ProjectError):
        validate_chat_references(store, owner, content, selected)
    assert files(store) == before


def test_duplicate_mention_does_not_bypass_missing_file_check(media):
    store, owner, _, canvas, image, _, _ = media
    selected = [selection(canvas, owner, image)]
    (store.root / '四类参考' / 'assets' / image['id']).unlink()
    with pytest.raises(ProjectError, match='文件缺失'):
        validate_chat_references(store, owner, document([image, image]), selected)


def test_file_and_encoded_request_budgets_are_shared_with_chat(media, monkeypatch):
    from opendirector.integrations import reference_inputs
    store, owner, session, canvas, image, _, _ = media
    large = canvas.import_file(owner, str(uuid4()), '大文本.md', b'x' * (64 * 1024 + 1), session, str(uuid4()))
    before = files(store)
    with pytest.raises(ProjectError, match='64 KB'):
        validate_chat_references(store, owner, document([large]), [selection(canvas, owner, large)])
    original = reference_inputs.input_rules
    monkeypatch.setattr(reference_inputs, 'input_rules', lambda config: {**original(config), 'requestBytes': 100})
    with pytest.raises(ProjectError, match='请求过大'):
        validate_chat_references(store, owner, document([image]), [selection(canvas, owner, image)])
    assert files(store) == before


def test_api_rejects_overflow_and_invalid_selection_without_mutation(media):
    store, owner, _, canvas, image, _, _ = media
    selected = selection(canvas, owner, image)
    before = files(store)
    with TestClient(create_app(store), headers={'X-OpenDirector-Request': '1'}) as client:
        endpoint = f'/api/projects/{owner}/chat-references/validate'
        for payload in [
            {'content': document([image]), 'selections': []},
            {'content': document([image]), 'selections': [selected, selected]},
            {'content': document([image]), 'selections': [{**selected, 'assetId': None}]},
            {'content': [{'type': 'text', 'text': 'x' * 20001}], 'selections': [selected]},
            {'content': [{'type': 'reference', 'assetId': str(uuid4()), 'name': 'a'} for _ in range(65)], 'selections': [selected]},
        ]:
            assert client.post(endpoint, json=payload).status_code == 422
    assert files(store) == before
