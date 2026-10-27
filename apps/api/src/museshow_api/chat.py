"""One streamed conversation turn; provider calls never hold the catalog lock."""

import asyncio
from dataclasses import dataclass, field
import json
import time
from uuid import uuid4

import anyio
from filelock import Timeout
from pydantic import ValidationError
from starlette.concurrency import run_in_threadpool

from museshow.domain.projects import ProjectError, identifier
from museshow.infrastructure.canvas import CanvasProjects
from museshow.infrastructure.canvas_assets import require_current_assets
from museshow.infrastructure.canvas_references import resolve_content
from museshow.domain.references import project_content
from museshow.domain.assets import attachment
from museshow.agent.loop import AgentLoop
from museshow.integrations.chat_completions import ChatCompletions, chat_payload, reference_content
from museshow_api.models import Asset, Conversation, ChatRequest


@dataclass(repr=False)
class Turn:
    owner: str
    session: str
    id: str
    config: dict
    payload: dict
    directory: str
    conversation: dict
    lock: object
    stop: asyncio.Event = field(default_factory=asyncio.Event)
    thinking: str = "auto"
    selections: dict = field(default_factory=dict)
    selected_node_id: str | None = None
    selected_shot_id: str | None = None


def event(value: dict) -> str:
    return "data: " + json.dumps(value, ensure_ascii=False) + "\n\n"


class Chat:
    def __init__(self, store, configs, provider=None, generation=None):
        self.store, self.configs = store, configs
        self.provider = provider or ChatCompletions()
        self.active: dict[str, Turn] = {}
        self.loop = AgentLoop(store, configs, generation, self.provider) if generation else None

    def prepare(self, owner: str, session: str, value):
        session = identifier(session)
        lock = self.store.chat_lock(owner)
        try:
            lock.acquire()
        except Timeout:
            raise ProjectError("该对话仍在生成回复，请停止或等待上一条回复结束。", 409) from None
        try:
            config = self.configs.agent(str(value.modelId))
            if value.selectedNodeId and value.selectedShotId:
                raise ProjectError("请仅选择画布节点或分镜镜头中的一个作为对话范围。")
            if value.selectedShotId:
                if not self.loop:
                    raise ProjectError("请先打开项目再选择镜头。", 409)
                state = self.loop.storyboard.snapshot(owner)["storyboard"]
                self.loop.storyboard._shot(state, str(value.selectedShotId))
            if value.selectedNodeId:
                if not self.loop:
                    raise ProjectError("请先打开项目再选择画布节点。", 409)
                self.loop.canvas._node(self.loop.canvas.snapshot(owner)["canvas"], str(value.selectedNodeId))
            if value.assets:
                with self.store.transaction() as db:
                    directory = self.store._owner(db, owner, session)
                    state, records = CanvasProjects(self.store)._sync(directory, owner)
                    if value.content is not None:
                        content = resolve_content([part.model_dump(mode='json') for part in value.content], state, records, strict=True)
                        text, ids = project_content(content)
                        value = ChatRequest.model_validate({**value.model_dump(mode='json'), 'text': text, 'content': content, 'assets': ids})
                    require_current_assets(directory, [str(asset_id) for asset_id in value.assets])
            # Read metadata from the local inventory, not from browser-supplied paths.
            assets = [Asset.model_validate(attachment(self.store.asset(owner, str(asset_id))[1])).model_dump(mode="json") for asset_id in value.assets]
            text = value.text if value.content is not None else value.text.strip()
            if not text.strip() and not assets:
                raise ProjectError("请输入消息或添加参考素材。")
            saved = self.store.conversation(owner)
            try:
                Conversation.model_validate(saved)
            except ValidationError:
                raise ProjectError("对话文件格式无效，请检查项目中的 conversation.json；原文件未覆盖。", 409) from None
            history = saved["messages"]
            common = {"assets": [], "model": config["modelId"], "thinking": value.thinking, "source": "model"}
            user = {**common, "id": str(uuid4()), "role": "user", "text": text, **({"content": [part.model_dump(mode="json") for part in value.content]} if value.content is not None else {}), "assets": assets, "status": "complete"}
            user['referenceInputs'] = []
            reply = {**common, "id": str(value.id), "role": "assistant", "text": "", "status": "streaming"}
            messages = [{"role": "system", "content": "你是 MuseShow 视频创作助手。用用户使用的语言交流，帮助构思故事、剧本、分镜与剪辑方案。当前没有项目编辑或媒体生成工具，不要声称已经操作项目、生成素材或访问了未提供的内容。"}]
            # Project history is assembled by AgentLoop with its private tool
            # protocol; prepare only validates the current references here.
            for item in ([user] if self.loop else [*history, user]):
                if item.get("source") != "model" or (not item["text"] and not item["assets"]):
                    continue
                messages.append({"role": item["role"], "content": reference_content(self.store, owner, item, manifest=user['referenceInputs'] if item is user else None) if item["role"] == "user" else item["text"]})
            payload = chat_payload(config, messages, value.thinking)
            directory, conversation = self.store.begin_chat(owner, session, user, reply, history)
            turn = Turn(owner, session, str(value.id), config, payload, directory, conversation, lock)
            turn.thinking = value.thinking
            turn.selections = {key: str(item) if item else None for key, item in value.modelSelections.items()}
            turn.selections["agent"] = str(value.modelId)
            turn.selected_node_id = str(value.selectedNodeId) if value.selectedNodeId else None
            turn.selected_shot_id = str(value.selectedShotId) if value.selectedShotId else None
            return turn
        except BaseException:
            lock.release()
            raise

    def stop(self, owner: str, turn_id: str, session: str):
        turn = self.active.get(owner)
        if turn is not None and turn.id == turn_id:
            if turn.session != session:
                raise ProjectError("不能停止其他窗口的回复。", 403)
            turn.stop.set()

    async def stream(self, turn: Turn):
        self.active[turn.owner] = turn
        text, status, error = "", "interrupted", None
        iterator = (self.loop.stream(turn) if self.loop else self.provider.stream(turn.config, turn.payload)).__aiter__()
        read = None
        stopped = asyncio.create_task(turn.stop.wait())
        checkpoint = time.monotonic()
        try:
            yield event({"type": "start", "conversation": Conversation.model_validate(turn.conversation).model_dump(mode="json")})
            async with asyncio.timeout(600):
                while True:
                    if read is None:
                        read = asyncio.create_task(anext(iterator))
                    done, _ = await asyncio.wait({read, stopped}, timeout=10, return_when=asyncio.FIRST_COMPLETED)
                    if stopped in done:
                        status = "stopped"
                        break
                    if not done:
                        yield ": keepalive\n\n"
                        continue
                    try:
                        chunk = read.result()
                    except StopAsyncIteration:
                        if not text:
                            raise ProjectError("模型未返回回复正文，请调整思考程度或稍后重试。", 502)
                        status = "complete"
                        break
                    read = None
                    if chunk["type"] == "delta":
                        if len(text) + len(chunk["text"]) > 200000:
                            raise ProjectError("模型回复超过保存长度限制，已有内容已保留。", 502)
                        text += chunk["text"]
                        if time.monotonic() - checkpoint >= 0.5:
                            await run_in_threadpool(self.store.update_reply, turn.owner, turn.directory, turn.id, text, "streaming")
                            checkpoint = time.monotonic()
                    yield event(chunk)
        except ProjectError as failure:
            error = str(failure)
        except TimeoutError:
            error = "本次回复等待时间过长，已停止请求并保留已有内容。"
        except (OSError, Timeout):
            error = "保存回复失败，请检查本地磁盘和文件权限，当前已显示内容请先复制保留。"
        finally:
            if turn.stop.is_set():
                status = "stopped"
            # Shield cleanup and the final checkpoint from disconnect cancellation.
            with anyio.CancelScope(shield=True):
                try:
                    for task in (read, stopped):
                        if task is not None:
                            task.cancel()
                    await asyncio.gather(*(task for task in (read, stopped) if task is not None), return_exceptions=True)
                    await iterator.aclose()
                    conversation = await run_in_threadpool(self.store.update_reply, turn.owner, turn.directory, turn.id, text, status)
                except (OSError, ProjectError, Timeout):
                    conversation = None
                    error = "保存回复失败，请复制当前内容后检查本地磁盘或项目目录。"
                finally:
                    self.active.pop(turn.owner, None)
                    turn.lock.release()
        yield event({"type": "end", "conversation": Conversation.model_validate(conversation).model_dump(mode="json") if conversation is not None else None, "error": error})
