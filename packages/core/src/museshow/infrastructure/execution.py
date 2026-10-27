"""Versioned execution records; legacy normalization never writes on read.

Callers serialize writes with the project transaction. Atomic replacement is a
single-file checkpoint, not a transaction across assets, canvas and storyboard.
"""

from museshow.domain.generation import GenerationReceipt
from museshow.domain.production import ProductionPlan
from museshow.domain.projects import ProjectError
from museshow.infrastructure.local_projects import read_json, write_json


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


def read_production_plan(path):
    try:
        value = ProductionPlan.model_validate(read_json(path)).model_dump(mode='json')
        if value['id'] != path.stem:
            raise ValueError('Plan identity differs from file')
        return value
    except (ValueError, TypeError):
        raise ProjectError('制作计划格式无效或版本不受支持，原文件已保留。', 409) from None


def write_production_plan(path, plan):
    try:
        value = ProductionPlan.model_validate(plan).model_dump(mode='json')
        if value['id'] != path.stem:
            raise ValueError('Plan identity differs from file')
    except (ValueError, TypeError):
        raise ProjectError('制作计划数据无效，原文件未修改。', 409) from None
    if path.exists():
        previous = read_production_plan(path)
        if previous['revision'] != value['revision']:
            raise ProjectError('制作计划已变化，请重新读取后核对。', 409)
        value['revision'] += 1
    write_json(path, value)
    # Preserve the runner's references to nested shots and steps. Only advance
    # local metadata after the checkpoint was successfully written.
    plan.update(schemaVersion=value['schemaVersion'], revision=value['revision'])
