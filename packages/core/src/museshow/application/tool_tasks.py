"""Durable canvas AI tool tasks: catalog, submission, progress, cancellation.

Tasks resolve each capability a recipe needs to a configured model through the
adapter registry; recipes and this service never branch on model or protocol.
Results are stored as project assets; the canvas places them as linked nodes.
"""

import asyncio
from datetime import datetime, timezone
from uuid import UUID, uuid5

from museshow.application.tool_operations import TOOLS, Source, ToolContext
from museshow.domain.capabilities import LABELS
from museshow.domain.generation import GenerationError
from museshow.domain.projects import ProjectError, identifier
from museshow.infrastructure.local_projects import child, read_json, write_json
from museshow.integrations.model_adapters import adapter_for, capabilities_of

ACTIVE = {'queued', 'running'}
MAX_SOURCES = 20


def _now():
    return datetime.now(timezone.utc).isoformat()


def _model_label(config):
    return config['modelId'].rsplit('/', 1)[-1] or config['modelId']


class ToolTasks:
    def __init__(self, store, configs, assets, *, transport=None, poll_interval=3, concurrency=2):
        self.store, self.configs, self.assets = store, configs, assets
        self.transport, self.poll_interval = transport, poll_interval
        self.jobs: dict[tuple[str, str], asyncio.Task] = {}
        self.remote: dict[tuple[str, str], tuple[dict, str]] = {}
        self.limit = asyncio.Semaphore(concurrency)

    # Capabilities -------------------------------------------------------------

    def providers(self) -> dict[str, list[dict]]:
        """Configured models per capability, in settings order."""
        served: dict[str, list[dict]] = {}
        for config in self.configs.list():
            for capability in sorted(capabilities_of(config)):
                served.setdefault(capability, []).append(config)
        return served

    def catalog(self):
        served = self.providers()
        tools = []
        for spec in TOOLS.values():
            needs = spec.requires({})
            missing = [item for item in needs if item not in served]
            entry = {'id': spec.id, 'requires': [{'capability': item, 'label': LABELS[item]} for item in needs],
                     'available': spec.recipe is not None and not missing, 'parametersConfirmed': spec.recipe is not None,
                     'fields': list(spec.fields), 'note': spec.note,
                     'models': {item: [{'id': config['id'], 'label': _model_label(config)} for config in served.get(item, [])] for item in needs}}
            if spec.recipe is None or missing:
                entry['reason'] = f"需要接入具备「{'、'.join(LABELS[item] for item in missing or needs)}」能力的模型。"
            tools.append(entry)
        return {'capabilities': {item: [{'id': config['id'], 'label': _model_label(config)} for config in configs]
                                 for item, configs in served.items()}, 'tools': tools}

    def _model(self, capability, chosen):
        candidates = self.providers().get(capability, [])
        public = next((item for item in candidates if item['id'] == chosen), None) if chosen else (candidates[0] if candidates else None)
        if public is None:
            raise ProjectError(f'没有可用的「{LABELS[capability]}」模型，请在“模型接入”中添加。', 409)
        config = self.configs.resolve(public['id'], public['kind'])
        return config, adapter_for(config, self.transport, self.poll_interval)

    # Storage -------------------------------------------------------------------

    def _folder(self, directory):
        folder = child(directory, 'tool-tasks')
        folder.mkdir(exist_ok=True)
        return folder

    def _directory(self, project_id, session=None):
        with self.store.transaction() as db:
            return self.store._owner(db, project_id, session)

    def _write(self, directory, task):
        write_json(child(self._folder(directory), task['id'] + '.json'), task)

    def get(self, project_id, task_id, session=None):
        identifier(project_id)
        identifier(task_id)
        path = child(self._folder(self._directory(project_id, session)), task_id + '.json')
        if not path.is_file():
            raise ProjectError('工具任务不存在。', 404)
        task = read_json(path)
        if task['status'] in ACTIVE and (project_id, task_id) not in self.jobs:
            # The service restarted mid-run; the work cannot resume.
            task.update(status='interrupted', phase=None, error='服务重启，任务已中断，请重新提交。', finishedAt=_now())
            self._write(path.parent.parent, task)
        return task

    # Submission ----------------------------------------------------------------

    def _prepare(self, project_id, value, session):
        identifier(project_id)
        task_id = identifier(str(value['id']))
        spec = TOOLS.get(value.get('tool'))
        if spec is None:
            raise ProjectError('未知工具。', 422)
        if spec.recipe is None:
            raise ProjectError(f"该工具需要接入具备「{'、'.join(LABELS[item] for item in spec.requires({}))}」能力的模型。", 409)
        parameters = value.get('parameters') or {}
        needs = spec.requires(parameters)
        chosen = value.get('modelConfigIds') or {}
        for capability in needs:
            self._model(capability, chosen.get(capability))  # Fail before accepting the task.
        source_ids = [identifier(str(item)) for item in value.get('sourceAssetIds') or []]
        if not source_ids or len(source_ids) > MAX_SOURCES or len(set(source_ids)) != len(source_ids):
            raise ProjectError('请提供 1–20 个不重复的来源素材。', 422)
        mask_id = identifier(str(value['maskAssetId'])) if value.get('maskAssetId') else None
        directory = self._directory(project_id, session)
        path = child(self._folder(directory), task_id + '.json')
        if path.is_file():
            existing = read_json(path)
            if existing['tool'] != spec.id or existing['sourceAssetIds'] != source_ids:
                raise ProjectError('工具任务标识已使用。', 409)
            return existing, directory, None
        records = self.assets._records(directory, project_id)
        for asset_id in [*source_ids, *([mask_id] if mask_id else [])]:
            if asset_id not in records:
                raise ProjectError('来源素材不存在，请重新上传后提交。', 409)
        if records[source_ids[0]]['kind'] not in spec.sources:
            raise ProjectError('来源素材类型与工具不匹配。', 422)
        if mask_id and records[mask_id]['kind'] != 'image':
            raise ProjectError('选区必须是图片。', 422)
        task = {'schemaVersion': 1, 'id': task_id, 'projectId': project_id, 'tool': spec.id, 'status': 'queued', 'phase': '排队中',
                'sourceAssetIds': source_ids, 'maskAssetId': mask_id, 'boxes': value.get('boxes') or [], 'parameters': parameters,
                'modelConfigIds': {item: chosen[item] for item in needs if chosen.get(item)}, 'requires': list(needs),
                'outputs': [], 'error': None, 'createdAt': _now(), 'finishedAt': None}
        self._write(directory, task)
        return task, directory, records

    async def submit(self, project_id, value, session):
        task, directory, records = await asyncio.to_thread(self._prepare, project_id, value, session)
        key = (project_id, task['id'])
        if records is not None and key not in self.jobs:
            job = asyncio.create_task(self._run(task, directory, records))
            self.jobs[key] = job
            job.add_done_callback(lambda done: self.jobs.pop(key, None) if self.jobs.get(key) is done else None)
        return task

    async def _update(self, directory, task, **changes):
        task.update(changes)
        await asyncio.to_thread(self._write, directory, task)

    async def _run(self, task, directory, records):
        key = (task['projectId'], task['id'])
        spec = TOOLS[task['tool']]
        try:
            async with self.limit:
                await self._update(directory, task, status='running', phase='准备素材')

                def read(asset_id):
                    record = records[asset_id]
                    return Source(record['kind'], child(child(directory, 'assets'), asset_id).read_bytes(), record['name'])
                sources = await asyncio.to_thread(lambda: [read(item) for item in task['sourceAssetIds']])
                mask = (await asyncio.to_thread(read, task['maskAssetId'])).data if task['maskAssetId'] else None

                async def progress(message):
                    await self._update(directory, task, phase=message)

                async def image_model(request):
                    config, adapter = self._model('image.edit' if request.image is not None else 'image.generate',
                                                  task['modelConfigIds'].get('image.edit' if request.image is not None else 'image.generate'))
                    return await adapter.image(config, request)

                async def video_model(request, submitted):
                    capability = 'video.first_frame' if request.first_frame is not None else 'video.generate'
                    config, adapter = self._model(capability, task['modelConfigIds'].get(capability))

                    async def remember(external_id):
                        self.remote[key] = (config, external_id)
                        if submitted:
                            await submitted(external_id)
                    return await adapter.video(config, request, submitted=remember)

                async def cutout_model(request):
                    config, adapter = self._model('image.cutout', task['modelConfigIds'].get('image.cutout'))
                    return await adapter.cutout(config, request)

                async def edit_model(request, submitted):
                    config, adapter = self._model('video.edit', task['modelConfigIds'].get('video.edit'))

                    async def remember(external_id):
                        self.remote[key] = (config, external_id)
                    return await adapter.edit_video(config, request, submitted=remember)

                async def segment_model(request):
                    config, adapter = self._model('image.segment', task['modelConfigIds'].get('image.segment'))
                    return await adapter.segment(config, request)

                async def track_model(request):
                    config, adapter = self._model('video.matting', task['modelConfigIds'].get('video.matting'))
                    return await adapter.track(config, request)

                keeps_layout = True
                if 'image.edit' in task['requires']:
                    _, painter = self._model('image.edit', task['modelConfigIds'].get('image.edit'))
                    keeps_layout = bool(getattr(painter, 'strength', False))
                limits = (4.0, 15.0)
                if 'video.edit' in task['requires']:
                    _, editor = self._model('video.edit', task['modelConfigIds'].get('video.edit'))
                    limits = (4.0, float(getattr(editor, 'MAX_SECONDS', 15)))
                chat_model = None
                if self.providers().get('text.chat'):
                    async def chat_model(request):
                        config, adapter = self._model('text.chat', task['modelConfigIds'].get('text.chat'))
                        return await adapter.chat(config, request)

                context = ToolContext(sources=sources, mask=mask, boxes=task['boxes'], parameters=task['parameters'],
                                      image_model=image_model, video_model=video_model, progress=progress, cutout_model=cutout_model,
                                      edit_model=edit_model, edit_seconds=limits, chat_model=chat_model,
                                      segment_model=segment_model, track_model=track_model, edit_keeps_layout=keeps_layout)
                outputs = await spec.recipe(context)
                await progress('正在保存结果')
                saved = []
                for index, output in enumerate(outputs):
                    asset_id = str(uuid5(UUID(task['id']), f'output-{index}'))
                    asset = await asyncio.to_thread(self.assets.import_file, task['projectId'], asset_id,
                                                    f'{output.title}.{output.suffix}', output.data, None, source='generated')
                    saved.append({name: asset.get(name) for name in ('id', 'kind', 'name', 'type', 'width', 'height', 'durationMs')}
                                 | {'title': output.title})
                await self._update(directory, task, status='succeeded', phase=None, outputs=saved, finishedAt=_now())
        except asyncio.CancelledError:
            remote = self.remote.get(key)
            if remote:
                config, external_id = remote
                try:
                    await adapter_for(config, self.transport).cancel_video(config, external_id)
                except (ProjectError, GenerationError):
                    pass
            await self._update(directory, task, status='cancelled', phase=None, error='已取消。', finishedAt=_now())
            raise
        except ProjectError as failure:
            await self._update(directory, task, status='failed', phase=None, error=str(failure), finishedAt=_now())
        except Exception:  # noqa: BLE001 — a recipe bug must still end the task visibly.
            await self._update(directory, task, status='failed', phase=None, error='工具执行出错，请检查素材和参数后重试。', finishedAt=_now())
            raise
        finally:
            self.remote.pop(key, None)

    async def cancel(self, project_id, task_id, session):
        task = await asyncio.to_thread(self.get, project_id, task_id, session)
        job = self.jobs.get((project_id, task_id))
        if job and not job.done():
            job.cancel()
            try:
                await job
            except asyncio.CancelledError:
                pass
            except Exception:  # noqa: BLE001 — the failure is already recorded on the task.
                pass
        return await asyncio.to_thread(self.get, project_id, task_id, session)

    async def close(self):
        for job in list(self.jobs.values()):
            job.cancel()
        await asyncio.gather(*self.jobs.values(), return_exceptions=True)
