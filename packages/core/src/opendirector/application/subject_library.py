"""Complete subject snapshots: owned library bytes, verified slots and provenance."""
import base64
from copy import deepcopy
import hashlib
import mimetypes
from pathlib import Path
import tempfile
from uuid import UUID

from opendirector.application.creation_assets import CreationAssets
from opendirector.application.library import Library
from opendirector.domain.creation.library import LibraryOrigin, LibrarySubjectSnapshot
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.creation_uploads import inspect_file
from opendirector.infrastructure.local_projects import child
from opendirector.infrastructure.workspace_documents import WorkspaceDocuments


class SubjectLibrary:
    def __init__(self, projects):
        self.projects = projects
        self.library = Library(projects)
        self._verified = {}

    @staticmethod
    def inspect(path, slot):
        expected = 'image' if slot.startswith('auxiliary:') else 'audio' if slot == 'voice' else 'video'
        kind, facts = inspect_file(path, 'subject.bin', expected_kind=expected)
        if (slot == 'main' and kind not in {'image', 'video'}
                or slot.startswith('auxiliary:') and kind != 'image'
                or slot == 'voice' and kind != 'audio'):
            raise ProjectError('主体素材类型与槽位不匹配。', 422)
        if facts.size > (32 if kind == 'image' else 50) * 1024 * 1024:
            raise ProjectError('主体素材超过大小限制。', 413)
        if kind in {'video', 'audio'} and (facts.durationSeconds is None or not 0 < facts.durationSeconds <= 15):
            raise ProjectError('主体视频或声音需在 15 秒以内。', 422)
        return kind, facts

    def prepare(self, selections, *, _items=None):
        if not selections or len(selections) > 100:
            raise ProjectError('请选择 1–100 个主体。', 422)
        ids = [str(value['id']) for value in selections]
        if len(set(ids)) != len(ids):
            raise ProjectError('主体选择不能重复。', 422)
        result = []
        total_bytes = 0
        with self.library.store.lock:
            index = self.library.store.read().items if _items is None else _items
            for value in selections:
                item = index.get(UUID(str(value['id'])))
                if item is None:
                    raise ProjectError('库中找不到该主体。', 404)
                if item.kind != 'subject' or item.state != 'active' or item.subject is None:
                    raise ProjectError('所选主体已失效，请重新选择。', 409)
                if item.revision != value['revision']:
                    raise ProjectError('主体库内容已变化，请刷新后重新选择。', 409)
                subject = item.subject
                if not subject.main:
                    raise ProjectError('空白主体不能导入画布。', 422)
                slots = [('main', subject.main), *[(f'auxiliary:{i}', sha) for i, sha in enumerate(subject.auxiliaries)]]
                if subject.voice:
                    slots.append(('voice', subject.voice))
                media = []
                for slot, sha in slots:
                    path = self.library.store.blob_path(sha)
                    if not path.is_file() or path.is_symlink():
                        raise ProjectError('主体素材副本缺失，请重新加入。', 410)
                    stat = path.stat()
                    if stat.st_size > 50 * 1024 * 1024:
                        raise ProjectError('主体素材超过大小限制。', 413)
                    key = (sha, slot.split(':')[0], stat.st_mtime_ns, stat.st_size)
                    facts = self._verified.get(key)
                    if facts is None:
                        payload = self.library.store.read_blob(sha)
                        if hashlib.sha256(payload).hexdigest() != sha:
                            raise ProjectError('主体素材副本损坏，请重新加入。', 409)
                        facts = self.inspect(path, slot)
                        if len(self._verified) >= 1024:
                            self._verified.pop(next(iter(self._verified)))
                        self._verified[key] = facts
                    kind, metadata = facts
                    total_bytes += metadata.size
                    if total_bytes > 256 * 1024 * 1024:
                        raise ProjectError('本次主体素材总量超过 256 MiB，请分批导入。', 413)
                    suffix = mimetypes.guess_extension(metadata.mimeType) or ('.mp4' if kind == 'video' else '.bin')
                    label = ''.join('_' if ord(char) < 32 or char in '/\\' else char for char in item.name).strip()[:180] or 'subject'
                    media.append(dict(slot=slot, sha=sha, kind=kind, metadata=metadata.model_dump(mode='json'),
                                      name=f'{label}-{slot.replace(":", "-")}{suffix}'))
                if media[0]['kind'] == 'video' and len(media) != 1:
                    raise ProjectError('视频主体不能包含附加图片或独立声音。', 422)
                if len({value['sha'] for value in media}) != len(media):
                    raise ProjectError('同一主体不能重复使用相同素材。', 422)
                result.append(dict(item=item.model_dump(mode='json'), media=media))
        return result

    def list(self, query=''):
        rows = []
        with self.library.store.lock:
            items = self.library.list(kind='subject', query=query)
            index = {item.id: item for item in items}
            for item in items:
                issue = None
                try:
                    self.prepare([dict(id=item.id, revision=item.revision)], _items=index)
                except ProjectError as error:
                    issue = str(error)
                rows.append(dict(**item.model_dump(mode='json'), available=issue is None, issue=issue))
        return rows

    def media(self, item_id, slot, revision):
        prepared = self.prepare([dict(id=item_id, revision=revision)])[0]
        media = next((value for value in prepared['media'] if value['slot'] == slot), None)
        if media is None:
            raise ProjectError('主体槽位不存在。', 404)
        # Copy while holding the library lock so purge cannot interrupt a read.
        with self.library.store.lock:
            current = self.library.get(item_id)
            if current.state != 'active' or current.revision != revision:
                raise ProjectError('主体库内容已变化，请重新选择。', 409)
            return self.library.store.read_blob(media['sha']), media['metadata']['mimeType']

    def backup(self, project_id, node_id):
        """Read the source without acquiring or changing its editing session."""
        try:
            snapshot = self.projects.snapshot(project_id)
        except ProjectError as error:
            if error.code != 'unsupported_format':
                raise
            document = WorkspaceDocuments(self.projects.local).read(str(project_id))['document']
            nodes = document.get('nodes', []) + document.get('hiddenNodes', [])
            node = next((node for node in nodes if node['id'] == str(node_id)), None)
            if node is None or node.get('type') != 'subject':
                raise ProjectError('请选择一个主体节点。', 422)
            subject = deepcopy(node['data'].get('subject', {}))
            title = node['data']['title']
            def read(resource):
                src = resource.get('src', '')
                if src.startswith('opendirector-media:'):
                    src = document['mediaSources'][int(src.split(':')[1])]
                if not src.startswith('data:') or ';base64,' not in src:
                    asset_id = resource.get('assetId')
                    if asset_id:
                        return self.projects.local.asset(str(project_id), str(asset_id))[0]
                    raise ProjectError('主体素材尚未完整保存，请先保存画布。', 409)
                try:
                    return base64.b64decode(src.split(',', 1)[1], validate=True)
                except (ValueError, TypeError):
                    raise ProjectError('主体素材内容无效。', 422) from None
        else:
            node = next((item for item in snapshot.canvasItems if item.id == UUID(str(node_id))), None)
            if node is None or node.kind != 'subject':
                raise ProjectError('请选择一个主体节点。', 422)
            doc = next(doc for doc in snapshot.editorDocuments if doc.id == node.binding.objectRef.id)
            subject = doc.data.model_dump(mode='json')
            title = node.title
            def read(resource):
                stream, _ = CreationAssets(self.projects).open_media(project_id, resource['assetId'])
                with stream:
                    return stream.read()
        if not subject.get('main'):
            raise ProjectError('空白主体不能加入主体库。', 422)
        slots = [('main', subject['main']), *[(f'auxiliary:{i}', value) for i, value in enumerate(subject.get('auxiliaries', []))]]
        if subject.get('voice'):
            slots.append(('voice', subject['voice']))
        contents = []
        for slot, resource in slots:
            payload = read(resource)
            with tempfile.TemporaryDirectory(prefix='opendirector-subject-') as folder:
                path = Path(folder) / 'media'
                path.write_bytes(payload)
                kind, _ = self.inspect(path, slot)
            contents.append((slot, payload, kind))
        if contents[0][2] == 'video' and len(contents) != 1:
            raise ProjectError('视频主体不能包含附加图片或独立声音。', 422)
        if len({hashlib.sha256(payload).hexdigest() for _, payload, _ in contents}) != len(contents):
            raise ProjectError('同一主体不能重复使用相同素材。', 422)
        with self.library.store.transaction() as tx:
            blobs = {slot: self.library.store.put_blob(payload) for slot, payload, _ in contents}
            copied = LibrarySubjectSnapshot(description=subject.get('description', ''), category=subject.get('category', ''),
                main=blobs['main'], auxiliaries=tuple(blobs[f'auxiliary:{i}'] for i in range(len(subject.get('auxiliaries', [])))),
                voice=blobs.get('voice'))
            item = self.library.store.new_subject(title, copied,
                LibraryOrigin(type='canvas', projectId=project_id, nodeId=node_id), preview=blobs['main'] if contents[0][2] == 'image' else None)
            tx.index = self.library._with_item(tx.index, item)
        return item

    def validate_imports(self, before, after):
        """Verify a new import's frozen source and every project-owned slot."""
        old = {doc.id: doc for doc in before.editorDocuments if doc.kind == 'subject'}
        assets = {asset.id: asset for asset in after.assets}
        for doc in after.editorDocuments:
            if doc.kind != 'subject' or not doc.data.librarySource:
                continue
            previous = old.get(doc.id)
            origin = doc.data.librarySource
            if previous and previous.data.librarySource == origin:
                continue
            prepared = self.prepare([dict(id=origin.itemId, revision=origin.revision)])[0]
            expected = {value['slot']: value['sha'] for value in prepared['media']}
            actual = dict(main=doc.data.main, **{f'auxiliary:{i}': ref for i, ref in enumerate(doc.data.auxiliaries)})
            if doc.data.voice:
                actual['voice'] = doc.data.voice
            if (doc.inputConnections or set(actual) != set(expected)
                    or any(ref is None or assets[ref.assetId].fingerprint != 'sha256:' + expected[slot]
                           for slot, ref in actual.items())):
                raise ProjectError('主体导入内容与库中快照不一致。', 422)
            from opendirector.application.creation_canvas import downstream_kinds
            for item in after.canvasItems:
                if item.kind != 'subject' or item.binding.objectRef.id != doc.id:
                    continue
                for ref in after.references:
                    if ref.active and ref.binding == 'follow_current' and ref.source.id == item.id:
                        spec = next(spec for spec in after.generationSpecs if spec.id == ref.targetSpecId)
                        if spec.kind not in downstream_kinds(after, item):
                            raise ProjectError('导入主体与已有下游节点类型不兼容，请先调整连线。', 422)

    def validate_legacy_imports(self, previous, document, known=None):
        imports = dict(known or {})
        old = {node['id']: node for node in (previous or {}).get('nodes', []) + (previous or {}).get('hiddenNodes', [])}
        nodes = {node['id']: node for node in document.get('nodes', []) + document.get('hiddenNodes', [])}
        for node in nodes.values():
            if node.get('type') != 'subject':
                continue
            subject = node['data'].get('subject') or {}
            origin = subject.get('librarySource')
            previous_subject = old.get(node['id'], {}).get('data', {}).get('subject') or {}
            if not origin or previous_subject.get('librarySource') == origin:
                continue
            target = old.get(node['id'])
            seen = set()
            while target:
                if target['id'] in seen:
                    raise ProjectError('主体所属分组存在循环。', 422)
                seen.add(target['id'])
                if target.get('locked'):
                    raise ProjectError('节点或所属分组已锁定。', 422)
                target = old.get(target.get('parentId'))
            from opendirector.domain.creation.editors import SubjectLibrarySource
            try:
                source = SubjectLibrarySource.model_validate(origin)
            except ValueError:
                raise ProjectError('主体库来源记录无效。', 422) from None
            receipt = imports.get(str(source.importId))
            if receipt:
                if receipt['source'] != source.model_dump(mode='json'):
                    raise ProjectError('主体导入身份不能用于其他库来源。', 422)
                media = receipt['media']
            else:
                media = self.prepare([dict(id=source.itemId, revision=source.revision)])[0]['media']
            expected = {value['slot']: value['sha'] for value in media}
            slots = dict(main=subject.get('main'), **{f'auxiliary:{i}': resource for i, resource in enumerate(subject.get('auxiliaries', []))})
            if subject.get('voice'):
                slots['voice'] = subject['voice']
            if set(slots) != set(expected):
                raise ProjectError('主体导入槽位不完整。', 422)
            for slot, resource in slots.items():
                src = resource.get('src', '') if isinstance(resource, dict) else ''
                if src.startswith('opendirector-media:'):
                    src = document['mediaSources'][int(src.split(':')[1])]
                try:
                    data = base64.b64decode(src.split(',', 1)[1], validate=True) if src.startswith('data:') and ';base64,' in src else b''
                except (ValueError, TypeError):
                    data = b''
                expected_kind = next(value['kind'] for value in media if value['slot'] == slot)
                if not isinstance(resource, dict) or resource.get('kind') != expected_kind or hashlib.sha256(data).hexdigest() != expected[slot]:
                    raise ProjectError('主体导入素材与库中快照不一致。', 422)
            allowed = {'video'} if media[0]['kind'] == 'video' else {'image', 'video', 'audio'}
            for edge in document.get('edges', []):
                if edge.get('intent') == 'post_edit_result':
                    continue
                if edge.get('target') == node['id']:
                    raise ProjectError('导入主体需要清理原有入站装配连线。', 422)
                if edge.get('source') == node['id'] and nodes.get(edge.get('target'), {}).get('type') not in allowed:
                    raise ProjectError('导入主体与已有下游节点类型不兼容，请先调整连线。', 422)

            imports[str(source.importId)] = dict(source=source.model_dump(mode='json'), media=media)
        return imports
