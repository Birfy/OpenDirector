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
from museshow.domain.settings import GeneralSettings, GeneralSettingsPatch
from museshow.domain.production import CandidateFeedback, ProductionRepairCommand
from museshow.domain.assets import MAX_ASSET_BYTES, ProjectAsset
from museshow.application.generation import Generation
from museshow.application.chat_references import validate_chat_references
from museshow.application.exports import Exports
from museshow.application.production import Production
from museshow.application.production_chat import ProductionChat
from museshow.application.production_review import ProductionReview
from museshow.infrastructure.local_projects import LocalProjects
from museshow.infrastructure.model_configs import ModelConfigs
from museshow.infrastructure.model_configs import connection_fields, model_fields
from museshow.domain.input_rules import input_rules
from museshow.integrations.model_capabilities import read_video_capabilities
from museshow.infrastructure.storyboard import StoryboardProjects
from museshow.infrastructure.timeline import TimelineProjects
from museshow.infrastructure.canvas_versions import apply_version, node_history
from museshow_api.models import ApplyCanvasVersion
from museshow_api.models import AssetBatchDelete, AssetSelection
from museshow.domain.timeline import AudioTrack
from museshow_api.chat import Chat
from museshow_api.project_creation import ProjectCreation
from museshow_api.models import AssetDelete, AssetProbe, AssetUpdate, ChatRequest, Conversation, Draft, GenerateNode, ModelConfigInput, ModelConfigPublic, NodeCreate, NodePatch, NodeText, ProjectCreate, ProjectRename, Session, SessionClose, TextAssetCreate
from museshow_api.models import ShotAdoption, ShotAssociation, ShotCreate, ShotOriginalAudio, ShotPatch, ShotReorder, ShotVersion
from museshow_api.models import TimelineClipPatch, TimelineMute, ExportCreate
from museshow_api.models import ProjectFromMessage, ProductionChatAction
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
    canvas = generation.canvas
    assets = canvas.assets
    storyboard = StoryboardProjects(store)
    timeline = TimelineProjects(store)
    exports = Exports(store)
    chat = Chat(store, model_configs, chat_provider, generation)
    project_creation = ProjectCreation(store, model_configs, chat.provider)
    production = Production(store, generation)
    production_chat = ProductionChat(store, production)
    production_review = ProductionReview(production)
    chat.loop.production = production

    @asynccontextmanager
    async def lifespan(app):
        await generation.start()
        await exports.start()
        await production.start()
        try:
            yield
        finally:
            await production_chat.close()
            await production.close()
            await exports.close()
            await generation.close()

    app = FastAPI(title="MuseShow Local API", version="0.1.0", lifespan=lifespan)

    @app.exception_handler(RequestValidationError)
    async def invalid_request(request, error):
        # Validation errors must not echo request input containing credentials.
        return JSONResponse({"detail": "请求字段无效，请检查必填项及字段格式。", "code": "invalid_input"}, status_code=422)

    @app.exception_handler(ProjectError)
    async def project_error(request, error):
        return JSONResponse({"detail": str(error), "code": error.code}, status_code=error.status)

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

    @app.get("/api/projects/{project_id}/storyboard")
    def get_storyboard(project_id: UUID):
        return storyboard.snapshot(str(project_id))

    @app.post("/api/projects/{project_id}/storyboard/shots")
    def create_shot(project_id: UUID, value: ShotCreate, x_museshow_session: str = Header()):
        return storyboard.create(str(project_id), value.model_dump(mode="json"), identifier(x_museshow_session))

    @app.put("/api/projects/{project_id}/storyboard/order")
    def reorder_shots(project_id: UUID, value: ShotReorder, x_museshow_session: str = Header()):
        return storyboard.reorder(str(project_id), value.model_dump(mode="json"), identifier(x_museshow_session))

    @app.patch("/api/projects/{project_id}/storyboard/shots/{shot_id}")
    def edit_shot(project_id: UUID, shot_id: UUID, value: ShotPatch, x_museshow_session: str = Header()):
        fields = value.model_dump(mode="json", exclude_unset=True)
        fields.pop("expectedRevision", None)
        return storyboard.change(str(project_id), str(shot_id), value.expectedRevision, identifier(x_museshow_session), fields=fields)

    @app.delete("/api/projects/{project_id}/storyboard/shots/{shot_id}")
    def remove_shot(project_id: UUID, shot_id: UUID, value: ShotVersion, x_museshow_session: str = Header()):
        return storyboard.change(str(project_id), str(shot_id), value.expectedRevision, identifier(x_museshow_session), remove=True)

    @app.put("/api/projects/{project_id}/storyboard/shots/{shot_id}/assets")
    def associate_shot_assets(project_id: UUID, shot_id: UUID, value: ShotAssociation, x_museshow_session: str = Header()):
        return storyboard.change(str(project_id), str(shot_id), value.expectedRevision, identifier(x_museshow_session), association=value.model_dump(mode="json"))

    @app.post("/api/projects/{project_id}/storyboard/shots/{shot_id}/adopt")
    def adopt_shot_asset(project_id: UUID, shot_id: UUID, value: ShotAdoption, x_museshow_session: str = Header()):
        return storyboard.change(str(project_id), str(shot_id), value.expectedRevision, identifier(x_museshow_session), adoption=value.model_dump(mode="json"))

    @app.post("/api/projects/{project_id}/storyboard/shots/{shot_id}/original-audio")
    def set_shot_original_audio(project_id: UUID, shot_id: UUID, value: ShotOriginalAudio, x_museshow_session: str = Header()):
        return storyboard.change(str(project_id), str(shot_id), value.expectedRevision, identifier(x_museshow_session), original_audio=value.mode)

    @app.post("/api/projects/{project_id}/assets/{asset_id}/probe-audio", response_model=ProjectAsset)
    def probe_video_audio(project_id: UUID, asset_id: UUID, value: AssetProbe, x_museshow_session: str = Header()):
        return assets.probe_video_audio(str(project_id), str(asset_id), value.expectedRevision, identifier(x_museshow_session))

    @app.get("/api/projects/{project_id}/production-plans")
    def list_production(project_id: UUID):
        return [production.view(str(project_id), plan) for plan in production.list(str(project_id))]

    @app.get('/api/projects/{project_id}/production-chat')
    def get_production_chat(project_id: UUID):
        return production_chat.read(str(project_id))

    @app.post('/api/projects/{project_id}/production-chat/refresh')
    def refresh_production_chat(project_id: UUID, x_museshow_session: str = Header()):
        return production_chat.refresh(str(project_id), identifier(x_museshow_session))

    @app.post('/api/projects/{project_id}/production-chat/actions', status_code=202)
    async def production_chat_action(project_id: UUID, value: ProductionChatAction, x_museshow_session: str = Header()):
        return await production_chat.act(str(project_id), value.model_dump(mode='json'), identifier(x_museshow_session))

    @app.post("/api/projects/{project_id}/production-plans/{plan_id}/stop")
    async def stop_production(project_id: UUID, plan_id: UUID, cancelTasks: bool = False, expectedRevision: int | None = None, x_museshow_session: str = Header()):
        plan = await production.stop(str(project_id), str(plan_id), identifier(x_museshow_session), cancelTasks, expected_revision=expectedRevision)
        return production.view(str(project_id), plan)

    @app.post("/api/projects/{project_id}/production-plans/{plan_id}/resume")
    async def resume_production(project_id: UUID, plan_id: UUID, x_museshow_session: str = Header()):
        plan = await production.resume(str(project_id), str(plan_id), identifier(x_museshow_session))
        return production.view(str(project_id), plan)

    @app.post('/api/projects/{project_id}/production-plans/{plan_id}/repairs', status_code=202)
    async def repair_production(project_id: UUID, plan_id: UUID, value: ProductionRepairCommand, x_museshow_session: str = Header()):
        plan = await production.repair(str(project_id), str(plan_id), value.model_dump(mode='json'), identifier(x_museshow_session))
        return production.view(str(project_id), plan)

    @app.get('/api/projects/{project_id}/production-plans/{plan_id}/steps/{step_id}')
    def review_production_step(project_id: UUID, plan_id: UUID, step_id: UUID):
        return production_review.read(str(project_id), str(plan_id), str(step_id))

    @app.post('/api/projects/{project_id}/production-plans/{plan_id}/feedback')
    def keep_production_candidate(project_id: UUID, plan_id: UUID, value: CandidateFeedback, x_museshow_session: str = Header()):
        return production_review.keep(str(project_id), str(plan_id), value.model_dump(mode='json'), identifier(x_museshow_session))

    @app.get("/api/projects/{project_id}/exports")
    def list_exports(project_id: UUID):
        return exports.list(str(project_id))

    @app.post("/api/projects/{project_id}/exports")
    async def export_movie(project_id: UUID, value: ExportCreate, x_museshow_session: str = Header()):
        return await exports.submit(str(project_id), value.model_dump(mode="json"), identifier(x_museshow_session))

    @app.post("/api/projects/{project_id}/exports/{export_id}/retry")
    async def retry_export(project_id: UUID, export_id: UUID, x_museshow_session: str = Header()):
        return await exports.retry(str(project_id), str(export_id), identifier(x_museshow_session))

    @app.get("/api/projects/{project_id}/exports/{export_id}/file")
    def download_export(project_id: UUID, export_id: UUID):
        return FileResponse(exports.download(str(project_id), str(export_id)), media_type="video/mp4", filename=exports.filename(str(project_id), str(export_id)))

    @app.get("/api/projects/{project_id}/timeline")
    def get_timeline(project_id: UUID):
        return timeline.snapshot(str(project_id))

    @app.patch("/api/projects/{project_id}/timeline/tracks/{track}")
    def mute_timeline_track(project_id: UUID, track: AudioTrack, value: TimelineMute, x_museshow_session: str = Header()):
        return timeline.patch(str(project_id), value.expectedRevision, value.expectedStoryboardRevision, identifier(x_museshow_session), track=track, muted=value.muted)

    @app.patch("/api/projects/{project_id}/timeline/clips/{clip_id}")
    def patch_timeline_clip(project_id: UUID, clip_id: UUID, value: TimelineClipPatch, x_museshow_session: str = Header()):
        fields = value.model_dump(mode="json", exclude_unset=True)
        fields.pop("expectedRevision", None)
        fields.pop("expectedStoryboardRevision", None)
        return timeline.patch(str(project_id), value.expectedRevision, value.expectedStoryboardRevision, identifier(x_museshow_session), clip_id=str(clip_id), fields=fields)

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
