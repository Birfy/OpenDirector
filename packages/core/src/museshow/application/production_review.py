"""Read-only candidate review and version-bound feedback; repairs remain in C06."""
from datetime import datetime, timezone

from museshow.domain.production import CandidateFeedback
from museshow.domain.projects import ProjectError
from museshow.infrastructure.adoption import verify_review_asset
from museshow.infrastructure.storyboard import read_storyboard
from museshow.infrastructure.canvas_versions import version_records


class ProductionReview:
    def __init__(self, production):
        self.production = production
        self.store = production.store

    def read(self, owner, plan_id, step_id):
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner)
            plan = self.production.read(owner, plan_id)
            step = next((item for item in plan['steps'] if item['id'] == step_id), None)
            if step is None:
                raise ProjectError('步骤不属于指定制作计划。', 404)
            canvas_service = self.production.generation.canvas
            canvas = canvas_service._read(directory)
            assets = list(canvas_service.assets._records(directory, owner).values())
            tasks = canvas_service._tasks(directory)
            board = read_storyboard(directory)
            node = next((item for item in canvas['nodes'] if item['id'] == step['nodeId']), None)
            shot = next((item for item in board['shots'] if item['id'] == step['shotId']), None)
            task_fields = ('id', 'nodeId', 'assetId', 'status', 'prompt', 'referenceIds', 'videoMode', 'referenceInputs', 'technicalCheck', 'canvasAdoption', 'storyboardAdoption', 'error', 'recovery', 'resumeAllowed')
            model = step['model'] or plan['models'][step['kind']]
            feedback = [{'id': item['request']['id'], 'assetId': item['request']['assetId'], 'fingerprint': item['request']['assetFingerprint'],
                         'decision': 'keep_current', 'feedback': item['request']['feedback'], 'createdAt': item['createdAt']}
                        for item in plan['feedback'] if item['request']['stepId'] == step_id]
            feedback.extend({'id': item['request']['id'], 'assetId': item['request']['reviewedAssetId'], 'fingerprint': item['request']['reviewedFingerprint'],
                             'decision': item['request']['action'], 'feedback': item['request']['feedback'], 'createdAt': item['createdAt']}
                            for item in plan['repairs'] if item['request']['stepId'] == step_id)
            return {'plan': {key: plan[key] for key in ('id', 'revision', 'title', 'status', 'error')},
                'step': {key: step[key] for key in ('id', 'nodeId', 'shotId', 'title', 'kind', 'prompt', 'referenceIds', 'videoMode', 'dependency', 'assetId', 'taskId', 'status', 'attempt', 'needsReview')},
                'node': node, 'shot': shot, 'modelName': model['modelId'], 'assets': assets,
                'history': version_records(step['nodeId'], node['assetIds'] if node else
                    [task['assetId'] for task in tasks if task['nodeId'] == step['nodeId'] and task.get('assetId')],
                    {asset['id']: asset for asset in assets}, tasks, directory=directory, node=node, models=self.production.generation.configs.list()),
                'tasks': [{**{key: task.get(key) for key in task_fields},
                           'referenceFingerprints': (task.get('inputSnapshot') or {}).get('references', {}),
                           'scriptBasis': (task.get('inputSnapshot') or {}).get('script')}
                          for task in tasks if task['nodeId'] == step['nodeId']],
                'feedback': sorted(feedback, key=lambda item: item['createdAt']),
                'versions': {'expectedRevision': plan['revision'], 'expectedShotRevision': shot['revision'] if shot else None,
                             'expectedNodeRevision': node['revision'] if node else None}}

    def keep(self, owner, plan_id, value, session):
        request = CandidateFeedback.model_validate(value).model_dump(mode='json')
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner, session)
            plan = self.production.read(owner, plan_id, session)
            if any(item['request']['id'] == request['id'] for item in plan['repairs']):
                raise ProjectError('操作标识已用于局部修复。', 409)
            previous = next((item for item in plan['feedback'] if item['request']['id'] == request['id']), None)
            if previous:
                if previous['request'] != request:
                    raise ProjectError('反馈操作标识已使用。', 409)
                return self.read(owner, plan_id, request['stepId'])
            self.production.read(owner, plan_id, session, expected_revision=request['expectedRevision'])
            if plan['status'] in {'queued', 'running'} or plan_id in self.production.jobs:
                raise ProjectError('请先停止后续制作，再保留当前版本或提交反馈。', 409)
            state = self.read(owner, plan_id, request['stepId'])
            if state['versions'] != {key: request[key] for key in state['versions']} or not state['shot']:
                raise ProjectError('镜头或节点已变化，请保留反馈并重新核对。', 409)
            records = {asset['id']: asset for asset in state['assets']}
            verify_review_asset(directory, records, state['node'], state['shot'], state['step']['kind'], request['assetId'], request['assetFingerprint'])
            role = 'audio' if state['step']['kind'] == 'audio' else 'visual'
            plan['feedback'].append({'request': request, 'createdAt': datetime.now(timezone.utc).isoformat(),
                'nodeAssetId': state['node']['assetId'] if state['node'] else None, 'shotAssetId': state['shot']['selected'][role]})
            self.production._save(owner, plan)
            return self.read(owner, plan_id, request['stepId'])
