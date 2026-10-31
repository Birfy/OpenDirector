"""Versioned execution records; legacy normalization never writes on read.

Callers serialize writes with the project transaction. Atomic replacement is a
single-file checkpoint, not a transaction across assets and canvas.
"""

from opendirector.domain.generation import GenerationReceipt
from opendirector.domain.projects import ProjectError
from opendirector.infrastructure.local_projects import read_json


def generation_task_record(value):
    try:
        return GenerationReceipt.model_validate({'schemaVersion': 1, **value}).model_dump(mode='json', exclude_unset=True)
    except (ValueError, TypeError):
        raise ProjectError('生成任务格式无效或版本不受支持，原文件已保留。', 409) from None


def read_generation_task(path):
    try:
        value = generation_task_record(read_json(path))
        if value['id'] != path.stem:
            raise ValueError('Task identity differs from file')
        return value
    except (ValueError, TypeError):
        raise ProjectError('生成任务格式无效或版本不受支持，原文件已保留。', 409) from None
