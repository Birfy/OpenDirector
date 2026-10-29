"""Durable production feedback, independent of model conversation and execution."""
import asyncio
import hashlib
import json
from datetime import datetime, timezone
from uuid import UUID, uuid4, uuid5

from museshow.domain.projects import ProjectError, identifier
from museshow.infrastructure.local_projects import child, read_json, write_json


LABELS = {'resume': '按原设置继续', 'stop': '停止后续制作', 'cancel': '取消已提交任务'}
BUSY = {'resume': '正在核对已有结果并继续制作…', 'stop': '正在停止后续制作…', 'cancel': '正在取消生成任务…'}


class ProductionChat:
    def __init__(self, store, production):
        self.store, self.production = store, production
        self.jobs = {}

    def _read(self, directory):
        path = child(directory, 'production-chat.json')
        if not path.exists():
            return {'version': 1, 'messages': []}
        try:
            value = read_json(path)
            if value['version'] != 1 or not isinstance(value['messages'], list):
                raise ValueError()
            for message in value['messages']:
                identifier(message['id'])
                if message['role'] not in {'user', 'assistant'}:
                    raise ValueError()
            return value
        except (ValueError, KeyError, TypeError):
            raise ProjectError('制作对话记录格式无效，原文件已保留。', 409) from None

    def _snapshot(self, owner, plan, snapshot=None):
        plans = self.production.progress(owner)['plans']
        snapshot = snapshot or next((item for item in plans if item['planId'] == plan['id']), None)
        if snapshot is None:
            raise ProjectError('制作计划不存在，可能已被删除。', 409)
        if plan['scriptAssetId']:
            script = next((asset for asset in self.production.generation.canvas.assets.list(owner) if asset['id'] == plan['scriptAssetId']), None)
            snapshot['script'] = {'assetId': plan['scriptAssetId'], 'name': script['name'] if script else '剧本文件缺失',
                                  'fingerprint': plan.get('scriptFingerprint')}
        running = snapshot['status'] in {'queued', 'running'}
        key = {'planId': plan['id'], 'operationId': snapshot['operationId'],
               'phase': 'active' if running else snapshot['label'],
               'issues': [(step['id'], step['taskId'], step['state'], step['error']) for step in snapshot['steps']
                          if step['state'] in {'failed', 'review', 'cancelled', 'rejected'}]}
        return snapshot, hashlib.sha256(json.dumps(key, sort_keys=True).encode()).hexdigest()

    @staticmethod
    def _present(journal, plans):
        latest = {item['planId']: item['id'] for item in journal['messages'] if item['role'] == 'assistant'}
        primary = plans[0]['id'] if plans else None
        existing = {plan['id'] for plan in plans}
        return {**journal, 'messages': [{**item, 'current': item['planId'] in existing and latest.get(item['planId']) == item['id'],
                'primary': item['planId'] == primary} for item in journal['messages']]}

    def _message(self, directory, plan_id, role, text, **extra):
        conversation = self.store._conversation(directory)
        return {'id': str(uuid4()), 'planId': plan_id, 'role': role, 'text': text,
                'afterMessageId': conversation['messages'][-1]['id'] if conversation['messages'] else None,
                'createdAt': datetime.now(timezone.utc).isoformat(), **extra}

    def _save(self, directory, journal):
        if len(journal['messages']) > 10000:
            raise ProjectError('制作对话记录已达上限，请在新项目中继续。', 409)
        write_json(child(directory, 'production-chat.json'), journal)

    def _sync(self, owner, directory, journal):
        plans = self.production.list(owner)
        if not plans:
            return
        snapshots = {item['planId']: item for item in self.production.progress(owner, plans)['plans']}
        for plan in reversed(plans):
            snapshot, key = self._snapshot(owner, plan, snapshots[plan['id']])
            latest = next((item for item in reversed(journal['messages']) if item['role'] == 'assistant' and item['planId'] == plan['id']), None)
            if latest and latest.get('pending'):
                if latest['id'] in self.jobs:
                    continue
                # A restart only observes receipts; it never replays an action.
                latest.update(pending=False, text='上次操作的处理结果需要核对。以下为当前任务状态。', snapshot=snapshot, stateKey=key)
            elif latest and latest.get('stateKey') == key:
                latest['snapshot'] = snapshot
            else:
                journal['messages'].append(self._message(directory, plan['id'], 'assistant', '',
                                                         pending=False, snapshot=snapshot, stateKey=key))

    def read(self, owner):
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner)
            journal = self._read(directory)
            before = json.dumps(journal, sort_keys=True)
            self._sync(owner, directory, journal)
            if json.dumps(journal, sort_keys=True) != before:
                self._save(directory, journal)
            return self._present(journal, self.production.list(owner))

    def refresh(self, owner, session):
        """Explicit observation after an uncertain UI request; never execute it."""
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner, session)
            journal = self._read(directory)
            self._sync(owner, directory, journal)
            latest = next((item for item in reversed(journal['messages']) if item['role'] == 'assistant'), None)
            if latest and not latest.get('pending'):
                journal['messages'].append(self._message(directory, latest['planId'], 'assistant',
                    '已重新读取现有任务状态，未重新提交生成。', pending=False,
                    snapshot=latest['snapshot'], stateKey=latest['stateKey']))
            self._save(directory, journal)
            return self._present(journal, self.production.list(owner))

    async def act(self, owner, value, session):
        request_id = identifier(str(value['id']))
        message_id = identifier(str(value['messageId']))
        kind = value['action']
        if kind not in LABELS:
            raise ProjectError('制作操作无效。')
        with self.store.transaction() as db:
            directory = self.store._owner(db, owner, session)
            journal = self._read(directory)
            existing = next((item for item in journal['messages'] if item['id'] == request_id), None)
            if existing:
                if existing.get('request') != value:
                    raise ProjectError('操作标识已使用，请重新读取制作状态。', 409)
                return self._present(journal, self.production.list(owner))
            self._sync(owner, directory, journal)
            target = next((item for item in journal['messages'] if item['id'] == message_id), None)
            latest = next((item for item in reversed(journal['messages']) if item['role'] == 'assistant' and target and item['planId'] == target['planId']), None)
            if not latest or latest['id'] != message_id or latest.get('pending') or kind not in latest['snapshot']['actions'] or not any(plan['id'] == latest['planId'] for plan in self.production.list(owner)):
                self._save(directory, journal)
                raise ProjectError('这条消息的操作已失效，请使用最新制作消息中的按钮。', 409)
            plan_id = latest['planId']
            user = self._message(directory, plan_id, 'user', LABELS[kind])
            user['id'] = str(uuid5(UUID(request_id), 'user'))
            reply = self._message(directory, plan_id, 'assistant', BUSY[kind],
                                  pending=True, request=value, snapshot=latest['snapshot'], stateKey=latest['stateKey'])
            reply['id'] = request_id
            journal['messages'].extend([user, reply])
            self._save(directory, journal)
            job = asyncio.create_task(self._run(owner, plan_id, request_id, kind, session))
            self.jobs[request_id] = job
            job.add_done_callback(lambda _: self.jobs.pop(request_id, None))
            return self._present(journal, self.production.list(owner))

    async def _run(self, owner, plan_id, reply_id, kind, session):
        text, error = '', None
        try:
            if kind == 'resume':
                await self.production.resume(owner, plan_id, session)
                text = '已继续制作。后续结果会在对话中更新。'
            else:
                await self.production.stop(owner, plan_id, session, cancel_tasks=kind == 'cancel')
                text = '已停止后续制作，已提交任务仍可能继续。' if kind == 'stop' else '已处理本地取消请求，具体结果见下方任务状态；供应商取消与费用请在控制台核对。'
        except ProjectError as failure:
            error = str(failure)
        except Exception:
            error = '操作结果尚未确认，请核对现有任务；不会自动重复提交。'
        try:
            with self.store.transaction() as db:
                directory = self.store._owner(db, owner)
                journal = self._read(directory)
                reply = next((item for item in journal['messages'] if item['id'] == reply_id), None)
                if reply is None:
                    return
                plan = next((plan for plan in self.production.list(owner) if plan['id'] == plan_id), None)
                if plan is None:
                    reply.update(text=text or '制作计划已被删除。', error=error or '制作计划不存在，可能已被删除。', pending=False)
                    self._save(directory, journal)
                    return
                snapshot, key = self._snapshot(owner, plan)
                reply.update(text=text, error=error, pending=False, snapshot=snapshot, stateKey=key)
                self._save(directory, journal)
        except (ProjectError, OSError):
            pass  # The durable pending record is reconciled on the next read.

    async def close(self):
        await asyncio.gather(*list(self.jobs.values()), return_exceptions=True)
