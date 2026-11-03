"""One Process CLI invocation per turn, using host tools and schema 0.1."""
import asyncio
from contextlib import contextmanager, suppress
import json
import math
import os
from pathlib import Path
import re
import shutil
from tempfile import TemporaryDirectory
from uuid import uuid4

from opendirector.agent.process import terminate
from opendirector.agent.skill_snapshot import prepare_skills
from opendirector.agent.tools import ROOT, SYSTEM, tools
from opendirector.domain.projects import ProjectError

MAX_INPUT = 1024 * 1024
MAX_OUTPUT = 8 * 1024 * 1024
QUERY_TIMEOUT = 30
RUN_TIMEOUT = 1800
REQUIRED_FEATURES = ('host_tools', 'cancel', 'stable_event_fields', 'custom_agent')
NATIVE_TOOLS = ('skill_tool', 'list_skill', 'bash', 'read_file', 'write_file', 'edit_file', 'list_dir', 'glob', 'grep') + (('powershell',) if os.name == 'nt' else ())


def native_tool_event(kind, payload, previous=None):
    tool = payload.get('tool')
    if not isinstance(tool, dict):
        raise protocol_error()
    name, call_id = tool.get('name'), tool.get('call_id')
    # Host callbacks have their own gateway receipts; do not show them twice.
    if name not in NATIVE_TOOLS:
        return None
    if not isinstance(call_id, str) or not call_id:
        raise protocol_error()
    arguments = tool.get('arguments')
    if arguments is None and kind == 'chat.tool_result':
        arguments = previous['arguments'] if previous else {}
    if isinstance(arguments, str):
        try:
            arguments = json.loads(arguments, object_pairs_hook=_pairs, parse_float=_number, parse_constant=_number)
        except (ValueError, RecursionError) as error:
            raise protocol_error() from error
    if not isinstance(arguments, dict):
        raise protocol_error()
    status = tool.get('status')
    statuses = {'started'} if kind == 'chat.tool_call' else {'completed', 'failed'}
    if not isinstance(status, str) or status not in statuses:
        raise protocol_error()
    event = dict(type='tool', id='jiuwenswarm:native:' + call_id, name=name,
        status='running' if kind == 'chat.tool_call' else 'failed' if status == 'failed' else 'complete', arguments=arguments)
    if kind == 'chat.tool_result':
        detail = json.dumps(tool.get('result'), ensure_ascii=False)
        event.update(result=detail[:65536], resultTruncated=len(detail) > 65536)
        if status == 'failed':
            event['error'] = 'JiuwenSwarm 原生工具执行失败，请查看工具结果。'
    return event


@contextmanager
def execution_environment(roots):
    """Mount snapshots in the native library without editing the user's library."""
    data = data_directory(executable())
    with TemporaryDirectory(prefix='od-jiuwenswarm-') as temporary:
        target = Path(temporary)
        config = target / 'config'
        config.mkdir()
        for name in ('config.yaml', '.env'):
            source_file = data / 'config' / name
            if source_file.is_file():
                shutil.copyfile(source_file, config / name)
                (config / name).chmod(0o600)
        if not (config / 'config.yaml').is_file():
            raise ProjectError('JiuwenSwarm 模型配置不存在，请先初始化其配置。', 503)
        library = target / 'agent/workspace/skills'
        library.mkdir(parents=True)
        for root in roots:
            shutil.copytree(root, library / root.name)
        yield {**os.environ, 'JIUWENSWARM_DATA_DIR': temporary, 'JIUWENSWARM_CONFIG_DIR': str(config)}


def data_directory(binary):
    source = os.environ.get('JIUWENSWARM_DATA_DIR')
    if source:
        return Path(source).expanduser().resolve()
    local = ROOT / '.toolchain/jiuwenswarm'
    return local / 'data' if binary and Path(binary).resolve().is_relative_to(local.resolve()) else Path.home() / '.jiuwenswarm'


def executable():
    configured = os.environ.get('OPENDIRECTOR_JIUWENSWARM_COMMAND')
    if configured:
        return shutil.which(configured)
    binary = shutil.which('jiuwenswarm-process')
    if binary:
        return binary
    local = ROOT / '.toolchain/jiuwenswarm'
    candidates = [local / 'venv/bin/jiuwenswarm-process', local / 'venv/Scripts/jiuwenswarm-process.exe']
    candidates += [local / 'run'] if os.name != 'nt' else []
    return next((str(path) for path in candidates if path.is_file() and os.access(path, os.X_OK)), None)


def encode(record):
    data = (json.dumps(record, ensure_ascii=False, allow_nan=False) + '\n').encode()
    if len(data) > MAX_INPUT:
        raise ProjectError('JiuwenSwarm 输入超过 1 MiB，请缩短对话或工具结果。', 413)
    return data


def protocol_error():
    return ProjectError('JiuwenSwarm 协议不匹配或回复不完整，请检查安装版本；不会自动重试。', 502, code='runtime_protocol')


def _pairs(pairs):
    result = {}
    for key, value in pairs:
        if key in result:
            raise protocol_error()
        result[key] = value
    return result


def _number(value):
    number = float(value)
    if not math.isfinite(number):
        raise protocol_error()
    return number


class Records:
    def __init__(self, request_id, operation=None):
        self.request_id, self.operation = request_id, operation
        self.sequence, self.session, self.result = 0, None, None

    def accept(self, line):
        if self.result is not None or len(line) > MAX_OUTPUT or not line.endswith(b'\n'):
            raise protocol_error()
        try:
            record = json.loads(line, object_pairs_hook=_pairs, parse_float=_number, parse_constant=_number)
            if not isinstance(record, dict) or record.get('schema_version') != '0.1' or record.get('request_id') != self.request_id:
                raise protocol_error()
            if type(record.get('sequence')) is not int or record['sequence'] != self.sequence:
                raise protocol_error()
            self.sequence += 1
            session = record.get('session_id')
            if session is not None:
                if not isinstance(session, str) or not session.strip() or self.session is not None and self.session != session:
                    raise protocol_error()
                self.session = session
            if record.get('type') == 'event' and self.operation is None:
                if not isinstance(record.get('event_type'), str) or not record['event_type']:
                    raise protocol_error()
                return record
            expected = 'query_result' if self.operation is not None else 'result'
            code = record.get('exit_code')
            statuses = {0: 'completed', 1: 'failed', 2: 'failed', 124: 'timed_out', 130: 'cancelled'}
            if record.get('type') != expected or session != self.session or type(code) is not int or code not in statuses or record.get('status') != statuses[code]:
                raise protocol_error()
            if self.operation is not None and (session is not None or self.sequence != 1 or record.get('operation') not in (None, self.operation)):
                raise protocol_error()
            if code == 0:
                if record.get('error') is not None:
                    raise protocol_error()
                if self.operation is not None:
                    if record.get('operation') != self.operation or not isinstance(record.get('data'), dict):
                        raise protocol_error()
                elif session is None or record.get('output') is not None and not isinstance(record['output'], str):
                    raise protocol_error()
            elif not isinstance(record.get('error'), dict) or not isinstance(record['error'].get('code'), str):
                raise protocol_error()
            self.result = record
            return record
        except (ValueError, UnicodeError, RecursionError, TypeError) as error:
            raise protocol_error() from error

    def finish(self, exit_code):
        if self.result is None or self.result['exit_code'] != exit_code:
            raise protocol_error()
        if exit_code:
            code = self.result['error']['code']
            code = code if re.fullmatch(r'[A-Z_0-9]{1,80}', code) else 'RUNTIME_FAILED'
            if self.operation is not None:
                raise ProjectError(f'JiuwenSwarm 查询失败（{code}），请检查其安装与模型配置。', 503, code='runtime_query_failed')
            raise ProjectError(f'JiuwenSwarm 执行失败（{code}），请检查其模型与配置；已提交的操作不会回滚。', 502, code='runtime_failed')
        return self.result


async def _stderr(stream):
    # Do not expose native diagnostics that may contain credentials.
    while await stream.read(8192):
        pass


async def _start(args, cwd, env=None):
    binary = executable()
    if binary is None:
        raise ProjectError('JiuwenSwarm Process CLI 尚未安装。', 503)
    if env is None and Path(binary).resolve().is_relative_to((ROOT / '.toolchain/jiuwenswarm').resolve()):
        data = data_directory(binary)
        env = {**os.environ, 'JIUWENSWARM_DATA_DIR': str(data), 'JIUWENSWARM_CONFIG_DIR': str(data / 'config')}
    try:
        return await asyncio.create_subprocess_exec(binary, *args, cwd=cwd, env=env,
            stdin=asyncio.subprocess.PIPE, stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE, start_new_session=True, limit=MAX_OUTPUT)
    except OSError as error:
        raise ProjectError('JiuwenSwarm Process CLI 无法启动，请检查安装路径。', 503) from error


async def query(operation):
    request_id = str(uuid4())
    request = encode(dict(schema_version='0.1', type='query', request_id=request_id,
        operation=operation, params={}, timeout_seconds=QUERY_TIMEOUT - 5))
    with TemporaryDirectory(prefix='od-jiuwenswarm-query-') as directory:
        process = await _start(['--query-json', '-'], directory)
        diagnostics = asyncio.create_task(_stderr(process.stderr))
        try:
            async with asyncio.timeout(QUERY_TIMEOUT):
                process.stdin.write(request)
                await process.stdin.drain()
                process.stdin.close()
                records = Records(request_id, operation)
                while line := await process.stdout.readline():
                    records.accept(line)
                result = records.finish(await process.wait())
                await diagnostics
                return result['data']
        except (TimeoutError, ValueError, BrokenPipeError, ConnectionResetError) as error:
            raise ProjectError('JiuwenSwarm 查询未完成，请检查安装与配置。', 503) from error
        finally:
            drain = asyncio.create_task(_stderr(process.stdout))
            try:
                await terminate(process, group=os.name != 'nt')
            finally:
                drain.cancel()
                diagnostics.cancel()
                await asyncio.gather(drain, diagnostics, return_exceptions=True)


async def capabilities():
    result = await query('protocol.capabilities')
    features = result.get('features')
    if result.get('schema_version') != '0.1' or not isinstance(features, dict) or not all(features.get(name) is True for name in REQUIRED_FEATURES):
        raise protocol_error()
    return result


async def model_choices():
    result = await query('model.list')
    rows = result.get('models')
    if not isinstance(rows, list):
        raise protocol_error()
    choices = []
    for row in rows:
        if not isinstance(row, dict) or not isinstance(row.get('selection_key'), str) or not isinstance(row.get('display_name'), str):
            raise protocol_error()
        choices.append(dict(id=row['selection_key'], label=row['display_name'], efforts=[],
            **({'isDefault': True} if row.get('is_default') else {})))
    return choices


async def readiness():
    if executable() is None:
        return 'not_installed'
    try:
        await capabilities()
        return 'ready' if await model_choices() else 'needs_configuration'
    except ProjectError as error:
        return 'unsupported_version' if error.code == 'runtime_protocol' else 'unknown'


async def _close(process, request_id):
    if process.returncode is not None:
        return
    drain = asyncio.create_task(_stderr(process.stdout))
    try:
        async with asyncio.timeout(10):
            with suppress(BrokenPipeError, ConnectionResetError, RuntimeError):
                process.stdin.write(encode(dict(schema_version='0.1', type='cancel', request_id=request_id)))
                await process.stdin.drain()
            await process.wait()
    except TimeoutError:
        await terminate(process, group=os.name != 'nt')
    finally:
        drain.cancel()
        await asyncio.gather(drain, return_exceptions=True)


class JiuwenSwarmRuntime:
    async def stream(self, run, gateway):
        if set(run.selected_skills) - {item['name'] for item in run.skills}:
            raise ProjectError('技能已失效，请重新选择。', 409)
        if run.thinking != 'auto':
            raise ProjectError('JiuwenSwarm 当前使用其配置中的推理强度，请选择 Default 强度。', 409)
        await capabilities()
        work = run.directory / 'agent-runs' / str(run.turn_id) / 'work'
        work.mkdir(parents=True, exist_ok=False)
        roots = await asyncio.to_thread(prepare_skills, work, run.skills)
        gateway.roots = roots
        functions = [item['function'] for item in tools()]
        allowed = [item['name'] for item in functions] + list(NATIVE_TOOLS)
        prompt = (f'Execution directory: {work.resolve()}\n'
            'Use inherited PATH to discover installed programs with command -v. '
            'Read source assets at their supplied absolute paths; do not move or modify them. '
            'Write all intermediate files and outputs into the execution directory. '
            'Use OpenDirector business tools for project changes.\n')
        if run.selected_skills:
            prompt += 'Before proceeding, use skill_tool to load these selected skills: ' + ', '.join(run.selected_skills) + '.\n'
        prompt += json.dumps(run.messages, ensure_ascii=False)
        request_id = str(run.turn_id)
        request = dict(schema_version='0.1', type='run', request_id=request_id, mode='agent.work.normal',
            input=prompt, timeout_seconds=RUN_TIMEOUT,
            agent=dict(name='opendirector', instructions=SYSTEM, tools=allowed),
            host_tools=[dict(name=item['name'], description=item['description'], input_schema=item['parameters']) for item in functions],
            permissions={'tools': {name: 'allow' for name in allowed}}, skills=run.selected_skills, mcp=[],
            workspace=dict(cwd=str(work.resolve()), project_dir=str(work.resolve()), trusted_dirs=[str(work.resolve())]))
        if run.runtime_model:
            request['model'] = run.runtime_model
        payload = encode(request)
        with execution_environment(roots) as env:
            process = await _start(['--run-jsonl'], work, env)
            diagnostics = asyncio.create_task(_stderr(process.stderr))
            records, emitted = Records(request_id), ''
            native_calls = {}
            trace_path = work.parent.parent / f'{run.turn_id}.jiuwenswarm.jsonl'
            try:
                async with asyncio.timeout(RUN_TIMEOUT + 30):
                    process.stdin.write(payload)
                    await process.stdin.drain()
                    with trace_path.open('a', encoding='utf-8') as trace:
                        while line := await process.stdout.readline():
                            record = records.accept(line)
                            if record['type'] == 'result':
                                continue
                            kind, value = record['event_type'], record.get('payload', {})
                            if kind not in {'chat.delta', 'chat.tool_call', 'chat.tool_result', 'interaction.requested', 'host_tool.requested'}:
                                continue
                            if not isinstance(value, dict):
                                raise protocol_error()
                            if kind in {'chat.tool_call', 'chat.tool_result'}:
                                call_id = (value.get('tool') or {}).get('call_id') if isinstance(value.get('tool'), dict) else None
                                event = native_tool_event(kind, value, native_calls.get(call_id) if isinstance(call_id, str) else None)
                                if event is not None:
                                    native_calls[call_id] = event
                                    trace.write(json.dumps(event, ensure_ascii=False) + '\n')
                                    trace.flush()
                                    yield event
                            elif kind == 'chat.delta':
                                text = value.get('text')
                                if not isinstance(text, str):
                                    raise protocol_error()
                                emitted += text
                                yield {'type': 'delta', 'text': text}
                            elif kind == 'interaction.requested':
                                raise ProjectError('JiuwenSwarm 需要交互确认，当前助手暂不支持；本轮已停止，未自动批准。', 409)
                            elif kind == 'host_tool.requested':
                                call_id, name, arguments = value.get('call_id'), value.get('name'), value.get('arguments')
                                if not isinstance(call_id, str) or not call_id or not isinstance(name, str) or not isinstance(arguments, dict) or records.session is None:
                                    raise protocol_error()
                                event_id = 'jiuwenswarm:' + call_id
                                yield dict(type='tool', id=event_id, name=name, status='running', arguments=arguments)
                                outcome = await gateway.call(event_id, name, arguments)
                                detail = json.dumps(outcome.value, ensure_ascii=False)
                                event = {**outcome.event(name), 'id': event_id, 'arguments': arguments,
                                    'result': detail[:65536], 'resultTruncated': len(detail) > 65536}
                                trace.write(json.dumps(event, ensure_ascii=False) + '\n')
                                trace.flush()
                                yield event
                                response = dict(schema_version='0.1', type='tool_result', request_id=request_id,
                                    session_id=records.session, call_id=call_id)
                                response.update({'error': detail} if outcome.error else {'result': outcome.value})
                                process.stdin.write(encode(response))
                                await process.stdin.drain()
                        result = records.finish(await process.wait())
                        await diagnostics
                        trace.write(json.dumps(dict(type='result', status=result['status'], exit_code=result['exit_code'])) + '\n')
                        output = result.get('output') or ''
                        if output and not output.startswith(emitted):
                            raise protocol_error()
                        if len(output) > len(emitted):
                            yield {'type': 'delta', 'text': output[len(emitted):]}
            except (TimeoutError, ValueError, BrokenPipeError, ConnectionResetError) as error:
                raise ProjectError('JiuwenSwarm 执行中断，已接受的业务操作会保留，请检查回执后继续。', 502) from error
            finally:
                gateway.closed = True
                cleanup = asyncio.create_task(_close(process, request_id))
                try:
                    await asyncio.shield(cleanup)
                except asyncio.CancelledError:
                    await cleanup
                    raise
                finally:
                    diagnostics.cancel()
                    await asyncio.gather(diagnostics, return_exceptions=True)
