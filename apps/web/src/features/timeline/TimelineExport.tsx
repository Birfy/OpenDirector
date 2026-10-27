import { useEffect, useRef, useState } from 'react';
import { errorMessage, json, request, sessionId } from '../../lib/api';
import type { TimelineControls } from './useTimeline';
import { AssetDialog } from '../assets/components/AssetDialog';
interface ExportTask { id: string; name: string; status: 'queued' | 'running' | 'succeeded' | 'failed' | 'interrupted'; progress: number; error: string | null }

function suggestedName(projectName: string) {
  const prefix = Array.from(projectName.normalize('NFC').replace(/[<>:"/\\|?*\u0000-\u001f\u007f]/g, '_').replace(/^[ .]+|[ .]+$/g, '')).slice(0, 28).join('') || 'MuseShow';
  const now = new Date();
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${prefix}_${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}.mp4`;
}

export function TimelineExport({ projectId, projectName, board, active }: { projectId: string; projectName: string; board: TimelineControls; active: boolean }) {
  const [tasks, setTasks] = useState<ExportTask[]>([]);
  const [name, setName] = useState(() => suggestedName(projectName));
  const [error, setError] = useState('');
  const [dialog, setDialog] = useState<'export' | 'history' | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [busy, setBusy] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [downloadRetry, setDownloadRetry] = useState<ExportTask | null>(null);
  const downloading = useRef(new Set<string>());
  const alive = useRef(true);
  const endpoint = `/projects/${projectId}/exports`;
  const running = tasks.find(task => task.status === 'queued' || task.status === 'running');
  const locked = busy || !!running || !!pendingId;
  useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);

  async function download(task: ExportTask, closeOnSuccess = false) {
    if (downloading.current.has(task.id)) return;
    downloading.current.add(task.id);
    setBusy(true); setError('');
    try {
      const response = await fetch(`/api${endpoint}/${task.id}/file`, { headers: { 'X-MuseShow-Request': '1', 'X-MuseShow-Session': sessionId } });
      if (!response.ok) { const value = await response.json().catch(() => null); throw new Error(value?.detail ?? '成片下载失败，请重试。'); }
      const blob = await response.blob();
      if (!alive.current) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a'); link.href = url; link.download = task.name || '成片.mp4'; document.body.append(link); link.click(); link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setDownloadRetry(null);
      if (closeOnSuccess) closeDialog();
    } catch (failure) {
      if (alive.current) { setDownloadRetry(task); setName(task.name); setDialog('export'); setError(`导出已完成，但下载未成功：${errorMessage(failure)}`); }
    } finally {
      downloading.current.delete(task.id);
      if (alive.current) setBusy(false);
    }
  }

  useEffect(() => {
    if (!active && !pendingId) return;
    const controller = new AbortController();
    let timer: number;
    async function poll() {
      try {
        const value = await request<ExportTask[]>(endpoint, { signal: controller.signal });
        if (controller.signal.aborted) return;
        setTasks(value);
        const pending = value.find(task => task.id === pendingId);
        if (pending?.status === 'succeeded') { setPendingId(null); closeDialog(); void download(pending); }
        else if (pending?.status === 'failed' || pending?.status === 'interrupted') { setPendingId(null); setError(pending.error ?? '导出未完成，可从导出记录中重试。'); }
      } catch (failure) { if (!controller.signal.aborted) setError(errorMessage(failure)); }
      finally { if (!controller.signal.aborted) timer = window.setTimeout(() => void poll(), 1500); }
    }
    void poll();
    return () => { controller.abort(); clearTimeout(timer); };
  }, [endpoint, active, pendingId]);

  async function submit(retry?: ExportTask) {
    setDialog('export'); setBusy(true); setError(''); setDownloadRetry(null);
    try {
      let value: ExportTask;
      if (retry) value = await request<ExportTask>(`${endpoint}/${retry.id}/retry`, { method: 'POST' });
      else {
        await board.flush();
        const snapshot = await request<NonNullable<TimelineControls['snapshot']>>(`/projects/${projectId}/timeline`);
        value = await request<ExportTask>(endpoint, json('POST', { id: crypto.randomUUID(), name: name.trim(), expectedRevision: snapshot.timeline.revision, expectedStoryboardRevision: snapshot.storyboardRevision }));
      }
      if (alive.current) {
        setName(value.name); setTasks(current => [value, ...current.filter(task => task.id !== value.id)]); setPendingId(value.id);
      }
    } catch (failure) { if (alive.current) setError(errorMessage(failure)); }
    finally { if (alive.current) setBusy(false); }
  }
  function closeDialog() {
    setDialog(null);
    requestAnimationFrame(() => trigger.current?.focus({ preventScroll: true }));
  }
  function openExport() {
    setError('');
    if (running) { setName(running.name); setPendingId(running.id); }
    else if (!downloadRetry) setName(suggestedName(projectName));
    setDialog('export');
  }
  const unavailable = !board.snapshot?.timeline.clips.length || !!board.snapshot?.problems.length || !!board.loadError || board.busy;
  return <section className="timeline-export" aria-label="成片导出">
    <button className="secondary-button" disabled={busy || (!running && !downloadRetry && unavailable)} onClick={event => { trigger.current = event.currentTarget; openExport(); }}>导出视频</button>
    <button className="secondary-button" disabled={busy} onClick={event => { trigger.current = event.currentTarget; setError(''); setDialog('history'); }}>导出记录</button>
    {(board.busy || board.draft || !board.snapshot) && <span className="timeline-save-state" role="status">{board.busy ? '保存中…' : board.draft ? '时长尚未保存' : '正在读取…'}</span>}
    {dialog === 'export' && <AssetDialog title="导出视频" busy={locked} onClose={closeDialog}>
      <form className="timeline-export-form" onSubmit={event => { event.preventDefault(); if (!locked && name.trim()) void (downloadRetry ? download(downloadRetry, true) : submit()); }}>
        <label className="field-label" htmlFor="timeline-export-name">视频文件名</label>
        <input id="timeline-export-name" className="text-input" aria-label="导出文件名" autoFocus maxLength={64} value={name} disabled={locked} onChange={event => { setName(event.target.value); setError(''); setDownloadRetry(null); }} />
        <p className="dialog-hint">自动补充 .mp4，导出完成后自动下载。</p>
        {locked && <div className="timeline-export-progress" role="status">{downloadRetry ? <span>正在准备下载…</span> : <><progress aria-label="导出进度" max="100" value={running?.progress ?? 0} /><span>{running ? `正在导出 ${running.progress}%` : '正在准备导出…'}</span></>}</div>}
        {error && <p className="timeline-error" role="alert">{error}</p>}
        <div className="dialog-actions"><button type="button" className="secondary-button" disabled={locked} onClick={closeDialog}>取消</button><button type="submit" className="primary-button" disabled={locked || !name.trim()}>{locked ? downloadRetry ? '正在下载…' : '正在导出…' : downloadRetry ? '重试下载' : '确认导出'}</button></div>
      </form>
    </AssetDialog>}
    {dialog === 'history' && <AssetDialog title="导出记录" busy={busy} onClose={closeDialog}>
      <div className="timeline-export-history">{!tasks.length && <p>暂无导出记录</p>}{tasks.map(task => <div key={task.id}>
        <span>{task.name || '成片.mp4'}</span>
        {task.status === 'succeeded' ? <button className="secondary-button" disabled={locked} onClick={() => void download(task)}>再次下载</button>
          : task.status === 'failed' || task.status === 'interrupted' ? <><span>{task.error}</span><button className="secondary-button" disabled={locked} onClick={() => { setName(task.name); void submit(task); }}>重试并下载</button></> : <span>正在导出 {task.progress}%</span>}
      </div>)}</div>
      {error && <p className="timeline-error" role="alert">{error}</p>}
    </AssetDialog>}
    {error && !dialog && <span className="timeline-error" role="alert">{error}</span>}
  </section>;
}
