"""Local, snapshot-based rendering; source assets and timeline stay untouched."""
import asyncio
from datetime import datetime, timezone
import os
import re
import unicodedata
import shutil

from museshow.domain.projects import ProjectError, identifier
from museshow.infrastructure.local_projects import child, read_json, write_json
from museshow.infrastructure.timeline import TimelineProjects


def export_filename(value: str) -> str:
    name = unicodedata.normalize('NFC', value).strip()
    stem = name[:-4] if name.lower().endswith('.mp4') else name
    if not stem or stem.endswith((' ', '.')) or len(stem) > 60:
        raise ProjectError('文件名不能为空，主体最长 60 字符，且不能以空格或句点结尾。')
    if any(ord(char) < 32 or ord(char) == 127 or char in '<>:"/\\|?*' for char in stem):
        raise ProjectError('文件名不能包含路径、控制字符或以下字符：< > : " / \\ | ? *。')
    if re.fullmatch(r'CON|PRN|AUX|NUL|COM[1-9¹²³]|LPT[1-9¹²³]', stem.split('.')[0].rstrip(' ').upper()):
        raise ProjectError('该名称是系统保留名称，请换一个文件名。')
    return stem + '.mp4'


class Exports:
    def __init__(self, store):
        self.store = store
        self.timeline = TimelineProjects(store)
        self.jobs = {}
        self.limit = asyncio.Semaphore(1)

    def _folder(self, project_id, export_id, session=None):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            return child(child(directory, 'exports'), identifier(export_id))

    def list(self, project_id):
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id))
            folder = child(directory, 'exports')
            if not folder.exists():
                return []
            values = [read_json(child(child(folder, path.name), 'export.json')) for path in folder.iterdir()
                      if path.is_dir() and (path / 'export.json').is_file() and not path.is_symlink()]
            return sorted(values, key=lambda value: value['createdAt'], reverse=True)

    def _prepare(self, project_id, value, session):
        if not shutil.which('ffmpeg'):
            raise ProjectError('导出需要安装 FFmpeg，并将 ffmpeg 加入 PATH。', 409)
        name = export_filename(value.get('name', '成片.mp4'))
        with self.store.transaction() as db:
            directory = self.store._owner(db, identifier(project_id), session)
            folder = child(child(directory, 'exports'), identifier(value['id']))
            receipt = child(folder, 'export.json')
            if receipt.exists():
                return read_json(receipt), folder, False
            if any(item['status'] in {'queued', 'running'} for item in self.list(project_id)):
                raise ProjectError('该项目正在导出，请等待本次导出完成。', 409)
            snapshot = self.timeline._snapshot(directory, project_id)
            timeline = snapshot['timeline']
            if timeline['revision'] != value['expectedRevision'] or snapshot['storyboardRevision'] != value['expectedStoryboardRevision']:
                raise ProjectError('时间线已变化，请核对后重新导出。', 409)
            if snapshot['problems'] or not timeline['clips']:
                raise ProjectError('请先完成分镜素材采用并处理时间线中的问题。', 409)
            folder.mkdir(parents=True)
            try:
                inputs = child(folder, 'inputs')
                inputs.mkdir()
                for asset_id in {clip['assetId'] for clip in timeline['clips']}:
                    source = child(child(directory, 'assets'), identifier(asset_id))
                    target = child(inputs, asset_id)
                    try:
                        os.link(source, target)
                    except OSError:
                        shutil.copyfile(source, target)
                write_json(child(folder, 'timeline.json'), timeline)
                task = {'id': value['id'], 'projectId': project_id, 'name': name, 'status': 'queued',
                        'progress': 0, 'error': None, 'createdAt': datetime.now(timezone.utc).isoformat()}
                write_json(receipt, task)
            except BaseException:
                shutil.rmtree(folder)
                raise
            return task, folder, True

    def _launch(self, task, folder):
        future = asyncio.create_task(self._render(dict(task), folder))
        self.jobs[task['id']] = future
        future.add_done_callback(lambda _: self.jobs.pop(task['id'], None))

    async def submit(self, project_id, value, session):
        task, folder, launch = await asyncio.to_thread(self._prepare, project_id, value, session)
        if launch:
            self._launch(task, folder)
        return task

    async def retry(self, project_id, export_id, session):
        with self.store.transaction():
            folder = self._folder(project_id, export_id, session)
            task = read_json(child(folder, 'export.json'))
            if task['status'] not in {'failed', 'interrupted'}:
                raise ProjectError('仅失败或中断的导出可以重试。', 409)
            if any(item['status'] in {'queued', 'running'} for item in self.list(project_id)):
                raise ProjectError('该项目已有导出任务。', 409)
            task.update(status='queued', progress=0, error=None)
            write_json(child(folder, 'export.json'), task)
        self._launch(task, folder)
        return task

    def download(self, project_id, export_id):
        folder = self._folder(project_id, export_id)
        if read_json(child(folder, 'export.json'))['status'] != 'succeeded':
            raise ProjectError('成片尚未导出完成。', 409)
        output = child(folder, 'movie.mp4')
        if not output.is_file():
            raise ProjectError('成片文件缺失，请重新导出。', 404)
        return output

    def filename(self, project_id, export_id):
        folder = self._folder(project_id, export_id)
        return export_filename(read_json(child(folder, 'export.json')).get('name', '成片.mp4'))

    async def _command(self, args):
        process = await asyncio.create_subprocess_exec('ffmpeg', '-nostdin', '-hide_banner', '-loglevel', 'error', '-y',
            *args, stdout=asyncio.subprocess.DEVNULL, stderr=asyncio.subprocess.PIPE)
        try:
            await process.communicate()
            if process.returncode:
                raise ProjectError('视频合成失败，请检查素材解码、磁盘空间和 FFmpeg 编码支持。', 500)
        except BaseException:
            if process.returncode is None:
                process.kill()
                await process.wait()
            raise

    @staticmethod
    def segment(timeline, visual, folder, index):
        fps = timeline['frameRate']
        duration = visual['durationFrames'] / fps
        media = child(folder, 'inputs')
        source = str(child(media, visual['assetId']))
        args = ['-loop', '1', '-i', source] if visual['kind'] == 'image' else ['-ss', str(visual['sourceInFrame'] / fps), '-i', source]
        filters = [f'[0:v]scale=1280:720:force_original_aspect_ratio=decrease:force_divisible_by=2,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,fps={fps},tpad=stop_mode=clone:stop_duration={duration},trim=end_frame={visual["durationFrames"]},setpts=PTS-STARTPTS[v]']
        audio = []
        for clip in timeline['clips']:
            if clip['shotId'] != visual['shotId'] or clip['track'] == 'visual' or clip['muted'] or timeline['trackMutes'][clip['track']]:
                continue
            if clip['track'] == 'original':
                source_index = 0
            else:
                source_index = args.count('-i')
                args += ['-ss', str(clip['sourceInFrame'] / fps), '-i', str(child(media, clip['assetId']))]
            label = f'a{len(audio)}'
            filters.append(f'[{source_index}:a]atrim=duration={clip["durationFrames"] / fps},asetpts=PTS-STARTPTS,aresample=48000,aformat=channel_layouts=stereo,apad,atrim=duration={duration}[{label}]')
            audio.append(f'[{label}]')
        if audio:
            filters.append(''.join(audio) + f'amix=inputs={len(audio)}:duration=first:normalize=0,atrim=duration={duration}[a]')
        else:
            filters.append(f'anullsrc=r=48000:cl=stereo,atrim=duration={duration}[a]')
        return [*args, '-filter_complex', ';'.join(filters), '-map', '[v]', '-map', '[a]', '-t', str(duration),
                '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-c:a', 'pcm_s16le', '-threads', '2', str(child(folder, f'segment-{index}.mkv'))]

    async def _render(self, task, folder):
        def save():
            write_json(child(folder, 'export.json'), task)
        try:
            async with self.limit:
                task.update(status='running', error=None)
                await asyncio.to_thread(save)
                timeline = read_json(child(folder, 'timeline.json'))
                visuals = [clip for clip in timeline['clips'] if clip['track'] == 'visual']
                for index, clip in enumerate(visuals):
                    await self._command(self.segment(timeline, clip, folder, index))
                    task['progress'] = round((index + 1) / (len(visuals) + 1) * 100)
                    await asyncio.to_thread(save)
                playlist = child(folder, 'segments.txt')
                playlist.write_text(''.join(f"file 'segment-{index}.mkv'\n" for index in range(len(visuals))), encoding='utf-8')
                duration = sum(clip['durationFrames'] for clip in visuals) / timeline['frameRate']
                await self._command(['-f', 'concat', '-safe', '1', '-i', str(playlist), '-map', '0:v', '-map', '0:a',
                    '-c:v', 'copy', '-c:a', 'aac', '-ar', '48000', '-t', str(duration), '-movflags', '+faststart', str(child(folder, 'movie.mp4'))])
                task.update(status='succeeded', progress=100)
        except asyncio.CancelledError:
            task.update(status='interrupted', error='服务已停止，可重试此时间线快照。')
        except (ProjectError, OSError) as failure:
            task.update(status='failed', error=str(failure) if isinstance(failure, ProjectError) else '导出保存失败，请检查磁盘空间和目录权限。')
        finally:
            await asyncio.to_thread(save)
            for path in folder.glob('segment-*.mkv'):
                child(folder, path.name).unlink(missing_ok=True)

    async def start(self):
        for project in (await asyncio.to_thread(self.store.list_projects))['projects']:
            for task in self.list(project['id']):
                if task['status'] in {'queued', 'running'}:
                    folder = self._folder(project['id'], task['id'])
                    task.update(status='interrupted', error='上次导出被中断，可重试已保存的时间线快照。')
                    write_json(child(folder, 'export.json'), task)

    async def close(self):
        jobs = list(self.jobs.values())
        for future in jobs:
            future.cancel()
        await asyncio.gather(*jobs, return_exceptions=True)
