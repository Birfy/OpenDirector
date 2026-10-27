import asyncio
import json
from uuid import uuid4

from fastapi.testclient import TestClient
import httpx
import pytest

from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import LocalProjects, empty_conversation
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.integrations.chat_completions import ChatCompletions
from museshow_api.chat import Chat
from museshow_api.main import create_app
from museshow_api.models import ChatRequest


def chunk(text=None, **changes):
    return 'data: ' + json.dumps({"choices": [{"delta": {"content": text}, "finish_reason": None, **changes}]}, ensure_ascii=False) + '\n\n'


def completion(text="真实回复"):
    return chunk(delta={"reasoning_content": "private reasoning"}) + chunk(text) + chunk(finish_reason="stop") + 'data: [DONE]\n\n'


def events(response):
    return [json.loads(line[5:]) for line in response.text.splitlines() if line.startswith("data:")]


def setup(tmp_path, provider):
    store = LocalProjects(tmp_path)
    configs = ModelConfigs(tmp_path)
    model = configs.save("agent", "https://api.deepseek.com", "deepseek-flash", "test-private-key")
    headers = {"X-MuseShow-Request": "1", "X-MuseShow-Session": str(uuid4())}
    return store, configs, model, headers, Chat(store, configs, provider)


def request(model, text="你好", **changes):
    return {"id": str(uuid4()), "modelId": model["id"], "text": text, "thinking": "auto", **changes}


def test_streamed_chat_sends_private_config_and_continues_history(tmp_path):
    calls = []

    def handler(value):
        calls.append(json.loads(value.content))
        assert str(value.url) == "https://api.deepseek.com/chat/completions"
        assert value.headers["Authorization"] == "Bearer test-private-key"
        return httpx.Response(200, text=completion())

    provider = ChatCompletions(httpx.MockTransport(handler))
    store, _, model, headers, _ = setup(tmp_path, provider)
    project = store.create("对话项目", str(uuid4()), headers["X-MuseShow-Session"])
    owner = project["id"]
    legacy = {"id": str(uuid4()), "role": "assistant", "text": "旧的模拟回复", "assets": [], "model": "openai", "thinking": "auto", "status": "complete"}
    store.save_conversation(owner, {**empty_conversation(), "messages": [legacy]}, headers["X-MuseShow-Session"])
    with TestClient(create_app(store, provider), headers=headers) as client:
        first = request(model)
        response = client.post(f'/api/data/{owner}/chat', json=first)
        assert response.status_code == 200
        frames = events(response)
        assert [frame["type"] for frame in frames] == ["start", "thinking", "delta", "end"]
        assert frames[-1]["error"] is None
        reply = frames[-1]["conversation"]["messages"][-1]
        assert reply["text"] == "真实回复"
        assert reply["status"] == "complete" and reply["source"] == "model"
        assert "private reasoning" not in response.text and "test-private-key" not in response.text
        assert "旧的模拟回复" not in str(calls[0])
        assert client.post(f'/api/data/{owner}/chat', json=first).status_code == 409
        assert len(calls) == 1  # Duplicate submissions never reach the paid API.
        client.post(f'/api/data/{owner}/chat', json=request(model, "继续"))
        assert [(item["role"], item["content"]) for item in calls[1]["messages"][1:] if not (item["role"] == "user" and item["content"].startswith("当前项目状态"))] == [("user", "你好"), ("assistant", "真实回复"), ("user", "继续")]
        assert calls[0]["stream"] is True
        assert calls[0]["reasoning_effort"] == "high" and calls[0]["thinking"] == {"type": "enabled"}
        assert len(store.conversation(owner)["messages"]) == 5


@pytest.mark.parametrize("status", [401, 429])
def test_upstream_error_is_actionable_and_never_falls_back_to_preview(tmp_path, status):
    provider = ChatCompletions(httpx.MockTransport(lambda _: httpx.Response(status, text="test-private-key")))
    store, _, model, headers, _ = setup(tmp_path, provider)
    owner = store.create("错误测试", str(uuid4()), headers["X-MuseShow-Session"])["id"]
    with TestClient(create_app(store, provider), headers=headers) as client:
        response = client.post(f'/api/data/{owner}/chat', json=request(model))
        final = events(response)[-1]
        assert final["error"]
        assert "test-private-key" not in response.text
        assert final["conversation"]["messages"][-1]["status"] == "interrupted"
        assert final["conversation"]["messages"][-1]["text"] == ""


def test_broken_upstream_preserves_partial_reply_and_releases_lock(tmp_path):
    provider = ChatCompletions(httpx.MockTransport(lambda _: httpx.Response(200, text=chunk("部分回复"))))
    store, _, model, headers, _ = setup(tmp_path, provider)
    owner = store.create("中断测试", str(uuid4()), headers["X-MuseShow-Session"])["id"]
    with TestClient(create_app(store, provider), headers=headers) as client:
        final = events(client.post(f'/api/data/{owner}/chat', json=request(model)))[-1]
        assert final["error"]
        assert final["conversation"]["messages"][-1]["text"] == "部分回复"
        assert final["conversation"]["messages"][-1]["status"] == "interrupted"
        with store.chat_lock(owner):
            pass


def test_references_are_read_locally_and_unsupported_files_preserve_draft(tmp_path):
    calls = []

    def handler(value):
        calls.append(json.loads(value.content))
        return httpx.Response(200, text=completion())

    provider = ChatCompletions(httpx.MockTransport(handler))
    store, _, model, headers, _ = setup(tmp_path, provider)
    session = headers["X-MuseShow-Session"]
    owner = store.create("参考测试", str(uuid4()), session)["id"]
    text_id, image_id, audio_id, unsupported_id = (str(uuid4()) for _ in range(4))
    for asset_id, name, data, media_type in ((text_id, "参考.md", b"reference notes", "text/markdown"),
                                          (image_id, "image.png", b"\x89PNG\r\n\x1a\nimage", "image/png"),
                                          (audio_id, "audio.wav", b"audio", "audio/wav"),
                                          (unsupported_id, "vector.svg", b"svg", "image/svg+xml")):
        store.save_asset(owner, asset_id, {"name": name, "type": media_type, "fingerprint": asset_id}, data, session)
    store.save_conversation(owner, {**empty_conversation(), "draft": "保留草稿"}, session)
    with TestClient(create_app(store, provider), headers=headers) as client:
        assert client.post(f'/api/data/{owner}/chat', json=request(model, assets=[unsupported_id])).status_code == 400
        assert store.conversation(owner)["draft"] == "保留草稿" and not calls
        response = client.post(f'/api/data/{owner}/chat', json=request(model, assets=[text_id, image_id]))
        assert events(response)[-1]["error"] is None
        content = calls[0]["messages"][-1]["content"]
        assert content[1]["text"].endswith('reference notes')
        assert content[2]["image_url"]["url"].startswith('data:image/png;base64,')
        response = client.post(f'/api/data/{owner}/chat', json=request(model, assets=[audio_id]))
        conversation = events(response)[-1]['conversation']
        assert conversation['messages'][-2]['referenceInputs'][0]['transmission'] == 'metadata'
        assert '未提供音画内容' in json.dumps(calls[-1], ensure_ascii=False)
        assert 'data:audio' not in json.dumps(calls[-1])


@pytest.mark.parametrize("disconnect", [False, True])
def test_stop_or_disconnect_preserves_reply_and_new_draft_without_stale_overwrite(tmp_path, disconnect):
    closed = []

    class Provider:
        async def stream(self, config, payload):
            try:
                yield {"type": "delta", "text": "已有内容"}
                await asyncio.Event().wait()
            finally:
                closed.append(True)

    store, _, model, headers, chat = setup(tmp_path, Provider())
    session = headers["X-MuseShow-Session"]
    project = store.create("对话项目", str(uuid4()), session)
    stale = store.conversation(project["id"])

    async def run():
        value = ChatRequest(**request(model))
        turn = chat.prepare(project["id"], session, value)
        stream = chat.stream(turn)
        await anext(stream)  # The server has accepted and saved this turn.
        await anext(stream)
        with pytest.raises(ProjectError, match="仍在生成"):
            chat.prepare(project["id"], session, ChatRequest(**request(model)))
        with pytest.raises(ProjectError, match="其他窗口"):
            chat.stop(project["id"], turn.id, str(uuid4()))
        store.save_draft(project["id"], {"draft": "下一条草稿"}, session)
        assert store.conversation(project["id"])["messages"][-1]["source"] == "model"
        store.close_with_conversation(project["id"], {**stale, "draft": "下一条草稿"}, session)
        with pytest.raises(ProjectError, match="仍在生成"):
            store.rename(project["id"], "不能在生成中改名", project["name"])
        if disconnect:
            waiting = asyncio.create_task(anext(stream))
            await asyncio.sleep(0.01)
            waiting.cancel()
            await asyncio.gather(waiting, return_exceptions=True)
        else:
            chat.stop(project["id"], turn.id, session)
            final = json.loads((await anext(stream))[6:])
            assert final["error"] is None
            await stream.aclose()
        saved = store.conversation(project["id"])
        assert saved["draft"] == "下一条草稿"
        assert saved["messages"][-1]["text"] == "已有内容"
        assert saved["messages"][-1]["status"] == ('interrupted' if disconnect else 'stopped')
        assert closed == [True]
        assert not chat.active
        with store.chat_lock(project["id"]):
            pass

    asyncio.run(run())
