import asyncio
import os
from contextlib import asynccontextmanager
from pathlib import Path
from urllib.parse import unquote, urlparse
from uuid import UUID

from fastapi import FastAPI, Header, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import FileResponse, JSONResponse, Response, StreamingResponse
from fastapi.staticfiles import StaticFiles
from filelock import Timeout
from starlette.concurrency import run_in_threadpool

from museshow.domain.projects import ProjectError, identifier
from museshow.domain.creation.validation import ContractError
from museshow.domain.settings import GeneralSettings, GeneralSettingsPatch
from museshow.domain.assets import MAX_ASSET_BYTES, ProjectAsset
from museshow.application.generation import Generation
from museshow.application.creation_generation import CreationGeneration
from museshow.application.tool_tasks import ToolTasks
from museshow.application.creation_tool_assets import CreationToolAssets
from museshow.application.chat_references import validate_chat_references
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.creation_projects import CreationProjects
from museshow_api.creation import creation_routes
from museshow_api.workspace import workspace_routes
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.infrastructure.model_configs import connection_fields, model_fields
from museshow.domain.input_rules import input_rules
from museshow.integrations.model_capabilities import read_video_capabilities
from museshow.infrastructure.canvas_versions import apply_version, node_history
from museshow_api.models import ApplyCanvasVersion
from museshow_api.models import AssetBatchDelete, AssetSelection
from museshow_api.chat import Chat
from museshow_api.project_creation import ProjectCreation
from museshow_api.models import AssetDelete, AssetProbe, AssetUpdate, ChatRequest, Conversation, Draft, GenerateNode, ModelConfigInput, ModelConfigPublic, NodeCreate, NodePatch, NodeText, ProjectCreate, ProjectRename, Session, SessionClose, TextAssetCreate
from museshow_api.models import ProjectFromMessage
from museshow_api.models import ToolTaskCreate, ToolPlacement, ImageSelectionCreate
from museshow_api.models import CanvasArrange, CanvasHistoryAction, CanvasMove, CanvasRemove, ChatReferenceValidation, CanvasConnect, CanvasDisconnect
from museshow_api.models import ModelCapabilityRequest


async def asset_bytes(request: Request) -> bytes:
    data = bytearray()
    async for chunk in request.stream():
        data.extend(chunk)
        if len(data) > MAX_ASSET_BYTES:
            raise ProjectError("素材超过 50 MB。", 413)
    return bytes(data)


def create_app(store: LocalProjects | None = None, chat_provider=None, generation_provider=None) -> FastAPI:
    repository = Path(os.environ.get("MUSESHOW_ROOT", Path(__file__).resolve().parents[4]))
    if store is None:
        store = LocalProjects(repository)
    model_configs = ModelConfigs(store.repository)
    generation = Generation(store, model_configs, generation_provider)
    creation_projects = CreationProjects(store)
    creation_generation = CreationGeneration(creation_projects, model_configs, generation, generation_provider)
    canvas = generation.canvas
    assets = canvas.assets
    tools = ToolTasks(store, model_configs, assets)
    creation_tools = ToolTasks(store, model_configs, CreationToolAssets(creation_projects), projects=creation_projects)
    chat = Chat(store, model_configs, chat_provider, generation)
    project_creation = ProjectCreation(store, model_configs, chat.provider)

    @asynccontextmanager
    async def lifespan(app):
        await generation.start()
        await creation_generation.start()
        try:
            yield
        finally:
            await tools.close()
            await creation_tools.close()
            await generation.close()
            await creation_generation.close()

    app = FastAPI(title="MuseShow Local API", version="0.1.0", lifespan=lifespan)
    app.include_router(creation_routes(creation_projects, creation_generation))
    app.include_router(workspace_routes(store))

    @app.exception_handler(RequestValidationError)
    async def invalid_request(request, error):
        # Validation errors must not echo request input containing credentials.
        return JSONResponse({"detail": "请求字段无效，请检查必填项及字段格式。", "code": "invalid_input"}, status_code=422)

    @app.exception_handler(ProjectError)
    async def project_error(request, error):
        return JSONResponse({"detail": str(error), "code": error.code}, status_code=error.status)

    @app.exception_handler(ContractError)
    async def contract_error(request, error):
        status = 404 if error.issue.code == 'missing_object' else 409 if error.issue.code in {'revision_conflict', 'preview_expired'} else 422
        return JSONResponse({'detail': error.issue.message, 'code': error.issue.code}, status_code=status)

    @app.exception_handler(OSError)
    async def disk_error(request, error):
        return JSONResponse({"detail": "文件操作失败，请检查目录权限、磁盘空间及文件是否被占用；原有项目数据不会自动删除。"}, status_code=503)

    @app.exception_handler(Timeout)
    async def lock_error(request, error):
        return JSONResponse({"detail": "项目存储正忙，请稍后重试。"}, status_code=409)

    @app.middleware("http")
    async def local_requests(request: Request, call_next):
        if request.url.path.startswith("/api/"):
            if request.url.hostname not in {"localhost", "127.0.0.1", "::1", "testserver"}:
                return JSONResponse({"detail": "仅允许本机访问项目服务。"}, status_code=403)
            origin = request.headers.get("origin")
            if origin and urlparse(origin).hostname not in {"localhost", "127.0.0.1", "::1"}:
                return JSONResponse({"detail": "不允许来自其他站点的文件访问。"}, status_code=403)
            if request.headers.get("x-museshow-request") != "1":
                return JSONResponse({"detail": "无效的本地应用请求。"}, status_code=403)
        return await call_next(request)

    @app.get("/api/health")
    def health():
        return {"status": "ok"}

    @app.get("/api/model-configs", response_model=list[ModelConfigPublic])
    def list_model_configs():
        return model_configs.list()

    @app.get('/api/settings', response_model=GeneralSettings)
    def get_settings():
        return generation.settings.get()

    @app.patch('/api/settings', response_model=GeneralSettings)
    def update_settings(value: GeneralSettingsPatch):
        return generation.settings.update(value.model_dump())

    @app.post("/api/model-configs", response_model=ModelConfigPublic)
    def create_model_config(value: ModelConfigInput):
        return model_configs.save(value.kind, value.url, value.modelId, value.apiKey.get_secret_value(), connection_type=value.connectionType, protocol=value.protocol, auth_mode=value.authMode,
                                  video_adapter=value.videoAdapter, video_capabilities=value.videoCapabilities.model_dump(exclude_none=True) if value.videoCapabilities else None,
                                  capabilities_supplied='videoCapabilities' in value.model_fields_set)

    @app.post('/api/model-configs/capabilities')
    async def model_capabilities(value: ModelCapabilityRequest):
        if value.kind != 'video':
            raise ProjectError('能力配置仅适用于视频模型。')
        config = {**model_fields(value.url, value.modelId, value.apiKey.get_secret_value()), 'kind': value.kind,
                  **connection_fields(value.kind, value.connectionType, value.protocol, value.authMode), 'videoAdapter': value.videoAdapter or 'auto'}
        if value.source == 'preset':
            return {'videoCapabilities': input_rules(config).get('videoCapabilities')}
        if config['authMode'] == 'bearer' and not config['apiKey']:
            existing = model_configs.resolve(str(value.configId), 'video') if value.configId else None
            if not existing or existing['url'] != config['url']:
                raise ProjectError('请填写该服务的 API Key；新地址不能复用原地址的密钥。')
            config['apiKey'] = existing['apiKey']
        return {'videoCapabilities': await read_video_capabilities(config)}

    @app.patch("/api/model-configs/{config_id}", response_model=ModelConfigPublic)
    def update_model_config(config_id: UUID, value: ModelConfigInput):
        return model_configs.save(value.kind, value.url, value.modelId, value.apiKey.get_secret_value(), str(config_id), connection_type=value.connectionType, protocol=value.protocol, auth_mode=value.authMode,
                                  video_adapter=value.videoAdapter, video_capabilities=value.videoCapabilities.model_dump(exclude_none=True) if value.videoCapabilities else None,
                                  capabilities_supplied='videoCapabilities' in value.model_fields_set)

    @app.delete("/api/model-configs/{config_id}", status_code=204)
    def delete_model_config(config_id: UUID):
        model_configs.delete(str(config_id))

    @app.get("/api/projects")
    def projects():
        return store.list_projects()

    @app.post("/api/projects")
    def create(value: ProjectCreate, x_museshow_session: str = Header()):
        return store.create(value.name, str(value.id), identifier(x_museshow_session))

    @app.post("/api/projects/from-message")
    async def create_from_message(value: ProjectFromMessage, x_museshow_session: str = Header()):
        return await project_creation.create(value, identifier(x_museshow_session))

    @app.post("/api/projects/{project_id}/open")
    def open_project(project_id: str, x_museshow_session: str = Header()):
        return store.open(project_id, identifier(x_museshow_session))

    @app.put("/api/sessions/{session}")
    def heartbeat(session: str, value: Session):
        store.heartbeat(identifier(session), str(value.projectId))
        return {"ok": True}

    @app.delete("/api/sessions/{session}")
    def close_session(session: str):
        store.release(identifier(session))
        return {"ok": True}

    @app.post("/api/sessions/{session}/close")
    def close_with_conversation(session: str, value: SessionClose):
        store.close_with_conversation(str(value.projectId), value.conversation.model_dump(mode="json"), identifier(session))
        return {"ok": True}

    @app.patch("/api/projects/{project_id}")
    def rename(project_id: str, value: ProjectRename):
        return store.rename(project_id, value.name, value.expectedName)

    @app.get("/api/projects/{project_id}/assets", response_model=list[ProjectAsset])
    def project_assets(project_id: UUID, current_only: bool = False):
        if current_only:
            snapshot = canvas.snapshot(str(project_id))
            available = set(snapshot['availableAssetIds'])
            return [asset for asset in snapshot['assets'] if asset['id'] in available]
        return assets.list(str(project_id))

    @app.get("/api/projects/{project_id}/canvas")
    def get_canvas(project_id: UUID):
        return canvas.snapshot(str(project_id))

    @app.post('/api/projects/{project_id}/chat-references/validate')
    def check_chat_references(project_id: UUID, value: ChatReferenceValidation):
        fields = value.model_dump(mode='json')
        return validate_chat_references(store, str(project_id), fields['content'], fields['selections'])


    @app.post("/api/projects/{project_id}/assets/{asset_id}/probe-audio", response_model=ProjectAsset)
    def probe_video_audio(project_id: UUID, asset_id: UUID, value: AssetProbe, x_museshow_session: str = Header()):
        return assets.probe_video_audio(str(project_id), str(asset_id), value.expectedRevision, identifier(x_museshow_session))


    @app.post('/api/projects/{project_id}/canvas/arrange')
    def arrange_canvas(project_id: UUID, value: CanvasArrange, x_museshow_session: str = Header()):
        return canvas.arrange(str(project_id), value.expectedRevision, identifier(x_museshow_session), value.model_dump(mode='json')['heights'])

    @app.post('/api/projects/{project_id}/canvas/history/{direction}')
    def canvas_history(project_id: UUID, direction: str, value: CanvasHistoryAction, x_museshow_session: str = Header()):
        return canvas.history(str(project_id), direction, str(value.entryId), str(value.id), identifier(x_museshow_session))

    @app.put('/api/projects/{project_id}/canvas/files/{asset_id}')
    async def import_canvas_file(project_id: UUID, asset_id: UUID, request: Request, x_asset_name: str = Header(), x_canvas_operation: UUID = Header(), x_museshow_session: str = Header()):
        data = await asset_bytes(request)
        return await run_in_threadpool(canvas.import_file, str(project_id), str(asset_id), unquote(x_asset_name), data, identifier(x_museshow_session), str(x_canvas_operation))

    @app.post('/api/projects/{project_id}/canvas/move')
    def move_canvas_nodes(project_id: UUID, value: CanvasMove, x_museshow_session: str = Header()):
        return canvas.move_many(str(project_id), value.model_dump(mode='json')['nodes'], identifier(x_museshow_session))

    @app.post('/api/projects/{project_id}/canvas/remove')
    def remove_canvas_nodes(project_id: UUID, value: CanvasRemove, x_museshow_session: str = Header()):
        return canvas.remove_many(str(project_id), value.model_dump(mode='json')['nodes'], identifier(x_museshow_session))

    @app.post('/api/projects/{project_id}/canvas/connections')
    def connect_canvas_nodes(project_id: UUID, value: CanvasConnect, x_museshow_session: str = Header()):
        return canvas.connect(str(project_id), value.model_dump(mode='json'), identifier(x_museshow_session))

    @app.delete('/api/projects/{project_id}/canvas/nodes/{node_id}/references/{source_id}')
    def disconnect_canvas_nodes(project_id: UUID, node_id: UUID, source_id: UUID, value: CanvasDisconnect, x_museshow_session: str = Header()):
        return canvas.disconnect(str(project_id), str(node_id), str(source_id), value.expectedRevision, identifier(x_museshow_session))

    @app.post("/api/projects/{project_id}/canvas/nodes")
    def create_node(project_id: UUID, value: NodeCreate, x_museshow_session: str = Header()):
        node = value.model_dump(mode="json", exclude_none=True)
        return canvas.create(str(project_id), node, identifier(x_museshow_session), remember=True)

    @app.patch("/api/projects/{project_id}/canvas/nodes/{node_id}")
    def patch_node(project_id: UUID, node_id: UUID, value: NodePatch, x_museshow_session: str = Header()):
        changes = value.model_dump(mode="json", exclude_unset=True)
        return canvas.patch(str(project_id), str(node_id), changes, identifier(x_museshow_session), remember=True)

    @app.post('/api/projects/{project_id}/canvas/nodes/{node_id}/references/expand')
    def expand_node_references(project_id: UUID, node_id: UUID, value: AssetProbe, x_museshow_session: str = Header()):
        return canvas.expand_references(str(project_id), str(node_id), value.expectedRevision, identifier(x_museshow_session))

    @app.get('/api/projects/{project_id}/canvas/nodes/{node_id}/versions')
    def canvas_node_versions(project_id: UUID, node_id: UUID):
        return node_history(canvas, str(project_id), str(node_id))

    @app.post('/api/projects/{project_id}/canvas/nodes/{node_id}/versions/apply')
    def apply_canvas_version(project_id: UUID, node_id: UUID, value: ApplyCanvasVersion, x_museshow_session: str = Header()):
        return apply_version(canvas, str(project_id), str(node_id), str(value.assetId),
            value.expectedRevision, value.fingerprint, identifier(x_museshow_session))

    @app.delete("/api/projects/{project_id}/canvas/nodes/{node_id}", status_code=204)
    def delete_node(project_id: UUID, node_id: UUID, x_museshow_session: str = Header()):
        canvas.remove(str(project_id), str(node_id), identifier(x_museshow_session), remember=True)

    @app.put("/api/projects/{project_id}/canvas/nodes/{node_id}/text")
    def save_node_text(project_id: UUID, node_id: UUID, value: NodeText, x_museshow_session: str = Header()):
        if not value.name.strip().lower().endswith((".txt", ".md")):
            raise ProjectError("文本名称需以 .txt 或 .md 结尾。")
        return canvas.save_text(str(project_id), str(node_id), str(value.id), value.text, value.name, identifier(x_museshow_session),
                                expected_revision=value.expectedRevision, discard_inputs=value.discardInputs, remember=True)

    @app.put("/api/projects/{project_id}/canvas/nodes/{node_id}/file")
    async def upload_node_file(project_id: UUID, node_id: UUID, request: Request, x_asset_name: str = Header(), x_asset_id: UUID = Header(), x_museshow_session: str = Header(), x_node_revision: int | None = Header(default=None, ge=1), x_discard_inputs: bool = Header(default=False)):
        data = await asset_bytes(request)
        return await run_in_threadpool(canvas.upload, str(project_id), str(node_id), str(x_asset_id), unquote(x_asset_name), data,
                                       identifier(x_museshow_session), expected_revision=x_node_revision, discard_inputs=x_discard_inputs)

    @app.post("/api/projects/{project_id}/canvas/nodes/{node_id}/generate")
    async def generate_node(project_id: UUID, node_id: UUID, value: GenerateNode, x_museshow_session: str = Header()):
        return await generation.submit(str(project_id), str(node_id), value.model_dump(mode="json", exclude_unset=True), identifier(x_museshow_session))

    @app.get('/api/tools')
    def tool_catalog():
        return tools.catalog()

    def register_selection_route(service, prefix):
        @app.post(prefix)
        async def image_selection(project_id: UUID, value: ImageSelectionCreate, request: Request,
                                  x_museshow_session: str = Header()):
            # Preview work has no durable task; disconnecting cancels the local
            # upstream request without disturbing accepted tool executions.
            work = asyncio.create_task(service.selection_preview(str(project_id), value.model_dump(mode='json'),
                                                               identifier(x_museshow_session)))

            async def disconnected():
                # The body has been decoded by FastAPI. Wait on the remaining
                # ASGI events: is_disconnected() uses a cancelled scope that can
                # miss disconnects through BaseHTTPMiddleware's receive stream.
                while (await request.receive())['type'] != 'http.disconnect':
                    pass

            disconnect = asyncio.create_task(disconnected())
            try:
                done, _ = await asyncio.wait((work, disconnect), return_when=asyncio.FIRST_COMPLETED)
                return await work if work in done else Response(status_code=499)
            finally:
                for task in (work, disconnect):
                    if not task.done():
                        task.cancel()
                await asyncio.gather(work, disconnect, return_exceptions=True)

    register_selection_route(tools, '/api/projects/{project_id}/image-selections')
    register_selection_route(creation_tools, '/api/creation/projects/{project_id}/image-selections')

    def register_tool_routes(service, prefix):
        @app.get(prefix)
        def tool_tasks(project_id: UUID):
            return {'tasks': service.list(str(project_id))}

        @app.post(prefix, status_code=202)
        async def submit(project_id: UUID, value: ToolTaskCreate, x_museshow_session: str = Header()):
            return await service.submit(str(project_id), value.model_dump(mode='json', exclude_none=True), identifier(x_museshow_session))

        @app.get(prefix + '/{task_id}')
        def task(project_id: UUID, task_id: UUID):
            return service.get(str(project_id), str(task_id))

        @app.post(prefix + '/{task_id}/cancel')
        async def cancel(project_id: UUID, task_id: UUID, x_museshow_session: str = Header()):
            return await service.cancel(str(project_id), str(task_id), identifier(x_museshow_session))

        @app.post(prefix + '/{task_id}/placement')
        def placement(project_id: UUID, task_id: UUID, value: ToolPlacement, x_museshow_session: str = Header()):
            return service.placement(str(project_id), str(task_id), value.state, identifier(x_museshow_session))

    register_tool_routes(tools, '/api/projects/{project_id}/tool-tasks')
    register_tool_routes(creation_tools, '/api/creation/projects/{project_id}/tool-tasks')

    @app.post("/api/projects/{project_id}/tasks/{task_id}/cancel")
    async def cancel_generation(project_id: UUID, task_id: UUID, x_museshow_session: str = Header()):
        return await generation.cancel(str(project_id), str(task_id), identifier(x_museshow_session))

    @app.post('/api/projects/{project_id}/tasks/{task_id}/recover')
    async def recover_generation(project_id: UUID, task_id: UUID, x_museshow_session: str = Header()):
        return await generation.recover(str(project_id), str(task_id), identifier(x_museshow_session))

    @app.post("/api/projects/{project_id}/assets/text", response_model=ProjectAsset)
    def create_text_asset(project_id: UUID, value: TextAssetCreate, x_museshow_session: str = Header()):
        if not value.name.strip().lower().endswith((".txt", ".md")):
            raise ProjectError("文本资产名称需以 .txt 或 .md 结尾。")
        return assets.import_file(str(project_id), str(value.id), value.name, value.text.encode("utf-8"), identifier(x_museshow_session), source="manual")

    @app.put("/api/projects/{project_id}/assets/{asset_id}", response_model=ProjectAsset)
    async def import_project_asset(project_id: UUID, asset_id: UUID, request: Request, x_asset_name: str = Header(), x_museshow_session: str = Header()):
        data = await asset_bytes(request)
        return await run_in_threadpool(assets.import_file, str(project_id), str(asset_id), unquote(x_asset_name), data, identifier(x_museshow_session))

    @app.patch("/api/projects/{project_id}/assets/{asset_id}", response_model=ProjectAsset)
    def update_project_asset(project_id: UUID, asset_id: UUID, value: AssetUpdate, x_museshow_session: str = Header()):
        return assets.update(str(project_id), str(asset_id), value.model_dump(mode="json"), identifier(x_museshow_session))

    @app.get('/api/projects/{project_id}/assets/usage')
    def project_asset_usage(project_id: UUID, x_museshow_session: str = Header()):
        return assets.usage(str(project_id), identifier(x_museshow_session))

    @app.post('/api/projects/{project_id}/assets/deletion-preview')
    def preview_assets_deletion(project_id: UUID, value: AssetSelection, x_museshow_session: str = Header()):
        return assets.batch_deletion_preview(str(project_id), list(map(str, value.assetIds)), identifier(x_museshow_session))

    @app.post('/api/projects/{project_id}/assets/delete')
    def delete_project_assets(project_id: UUID, value: AssetBatchDelete, x_museshow_session: str = Header()):
        return assets.delete_many(str(project_id), list(map(str, value.assetIds)), value.expectedState, value.clearHistory, identifier(x_museshow_session))

    @app.get("/api/projects/{project_id}/assets/{asset_id}/deletion")
    def preview_asset_deletion(project_id: UUID, asset_id: UUID, x_museshow_session: str = Header()):
        return assets.deletion_preview(str(project_id), str(asset_id), identifier(x_museshow_session))

    @app.delete("/api/projects/{project_id}/assets/{asset_id}", status_code=204)
    def delete_project_asset(project_id: UUID, asset_id: UUID, value: AssetDelete | None = None, x_museshow_session: str = Header()):
        assets.delete(str(project_id), str(asset_id), identifier(x_museshow_session),
                      expected_state=value.expectedState if value else None, clear_history=value.clearHistory if value else False)

    @app.get("/api/data/{owner}/conversation", response_model=Conversation)
    def conversation(owner: UUID):
        return store.conversation(str(owner))

    @app.put("/api/data/{owner}/conversation")
    def save_conversation(owner: UUID, value: Conversation, x_museshow_session: str = Header()):
        store.save_conversation(str(owner), value.model_dump(mode="json"), identifier(x_museshow_session))
        return {"ok": True}

    @app.patch("/api/data/{owner}/draft")
    def save_draft(owner: UUID, value: Draft, x_museshow_session: str = Header()):
        store.save_draft(str(owner), value.model_dump(mode="json"), identifier(x_museshow_session))
        return {"ok": True}

    @app.post("/api/data/{owner}/chat")
    async def chat_turn(owner: UUID, value: ChatRequest, x_museshow_session: str = Header()):
        turn = await run_in_threadpool(chat.prepare, str(owner), x_museshow_session, value)
        return StreamingResponse(chat.stream(turn), media_type="text/event-stream", headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

    @app.post("/api/data/{owner}/chat/{turn_id}/stop")
    async def stop_chat(owner: UUID, turn_id: UUID, x_museshow_session: str = Header()):
        chat.stop(str(owner), str(turn_id), identifier(x_museshow_session))
        return {"ok": True}

    @app.put("/api/data/{owner}/assets/{asset_id}")
    async def save_asset(owner: str, asset_id: str, request: Request, x_museshow_session: str = Header(),
                         x_asset_name: str = Header(), x_reuse_asset_id: UUID | None = Header(default=None), x_target_node_id: UUID | None = Header(default=None)):
        data = await asset_bytes(request)
        return await run_in_threadpool(assets.import_file, owner, asset_id, unquote(x_asset_name), bytes(data), identifier(x_museshow_session),
                                       as_reference=True, reuse_asset_id=str(x_reuse_asset_id) if x_reuse_asset_id else None,
                                       target_node_id=str(x_target_node_id) if x_target_node_id else None)

    @app.get("/api/data/{owner}/assets/{asset_id}")
    def asset(owner: str, asset_id: str):
        data, metadata = store.asset(owner, asset_id)
        return Response(data, media_type=metadata["type"] or "application/octet-stream", headers={"X-Content-Type-Options": "nosniff"})

    @app.delete("/api/data/{owner}/assets/{asset_id}")
    def remove_asset(owner: str, asset_id: str, x_museshow_session: str = Header()):
        store.remove_asset(owner, asset_id, identifier(x_museshow_session))
        return {"ok": True}

    dist = repository / "dist"
    if dist.is_dir():
        app.mount("/assets", StaticFiles(directory=dist / "assets", check_dir=False), name="assets")

        @app.get("/")
        def index():
            return FileResponse(dist / "index.html")

        # The canvas restores its project from these client-side addresses.
        @app.get("/ai-tool/{path:path}")
        def canvas_route(path: str):
            return FileResponse(dist / "index.html")

    return app
