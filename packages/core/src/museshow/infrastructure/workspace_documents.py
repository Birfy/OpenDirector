"""Temporary filesystem persistence for the existing OpenDesign canvas payload.

Uses MuseShow v1 projects and their leases. This is not a replacement for
CreationProjects or the typed canvas commands planned for C06.
"""
import json
import math
from copy import deepcopy

from museshow.domain.projects import ProjectError, identifier
from museshow.infrastructure.local_projects import child, read_json, write_json


def validate_document(document, project_id):
    if (not isinstance(document, dict) or type(document.get('version')) is not int or document['version'] not in {1, 2}
            or document.get('id') != project_id or not isinstance(document.get('title'), str)
            or not isinstance(document.get('nodes'), list) or not isinstance(document.get('edges'), list)
            or not isinstance(document.get('viewport'), dict) or not isinstance(document.get('settings'), dict)):
        raise ProjectError('画布文档无效或不属于当前项目。', 422)
    if document['version'] == 2:
        sources = document.get('mediaSources')
        if (not isinstance(sources, list) or not sources
                or any(not isinstance(src, str) or not src.startswith('data:') for src in sources)):
            raise ProjectError('画布共享媒体表无效。', 422)
    def check(value, key=None):
        if key in {'src', 'url', 'imageUrl'} and isinstance(value, str) and value.startswith('blob:'):
            raise ProjectError('请先完成媒体保存，再保存项目，不能保存临时媒体地址。', 422)
        if document['version'] == 2 and key == 'src' and isinstance(value, str) and value.startswith('opendesign-media:'):
            index = value.removeprefix('opendesign-media:')
            if (not index.isascii() or not index.isdecimal()
                    or len(index) > len(str(len(document['mediaSources'])))
                    or str(int(index)) != index or int(index) >= len(document['mediaSources'])):
                raise ProjectError('画布引用了不存在的共享媒体。', 422)
        if isinstance(value, float) and not math.isfinite(value):
            raise ProjectError('画布不能保存无效数值。', 422)
        if isinstance(value, dict):
            for field, item in value.items():
                check(item, field)
        elif isinstance(value, list):
            for item in value:
                check(item)
    check(document)


class WorkspaceDocuments:
    filename = 'opendesign-canvas.json'

    def __init__(self, store):
        self.store = store

    def _read(self, directory, project_id):
        path = child(directory, self.filename)
        if not path.exists():
            return {'schemaVersion': 1, 'revision': 0, 'document': None}
        try:
            value = read_json(path)
            if (not isinstance(value, dict) or value.get('schemaVersion') != 1
                    or type(value.get('revision')) is not int or value['revision'] < 1):
                raise ValueError()
            validate_document(value['document'], project_id)
            return value
        except (ValueError, TypeError, KeyError, ProjectError):
            raise ProjectError('项目画布文件损坏或版本不支持，原文件已保留。', 409) from None

    def read(self, project_id):
        identifier(project_id)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id)
            value = self._read(directory, project_id)
            if value['document'] is not None:
                value['document']['title'] = directory.name
            return value

    def save(self, project_id, document, revision, session):
        identifier(project_id)
        validate_document(document, project_id)
        with self.store.transaction() as db:
            directory = self.store._owner(db, project_id, session)
            current = self._read(directory, project_id)
            document = {**deepcopy(document), 'title': directory.name}
            # A lost response can safely retry the same bytes.
            if document == current['document']:
                return current
            if current['revision'] != revision:
                raise ProjectError('画布已变化，请重新打开项目后再保存。', 409, code='revision_conflict')
            value = {'schemaVersion': 1, 'revision': revision + 1, 'document': document}
            # Enforce JSON serialization before touching the existing file.
            json.dumps(value, allow_nan=False)
            write_json(child(directory, self.filename), value)
            return value
