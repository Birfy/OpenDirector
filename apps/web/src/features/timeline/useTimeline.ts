import { operationFeedback, type Feedback } from '../../lib/feedback';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { errorMessage, json, request } from '../../lib/api';
import type { AudioTrack, TimelineClip, TimelineSnapshot } from './types';

interface DurationDraft { clipId: string; value: string; revision: number; storyboardRevision: number }

export function useTimeline(projectId: string | null, enabled: boolean, onBusy: (busy: boolean) => void) {
  const [snapshot, setSnapshot] = useState<TimelineSnapshot | null>(null);
  const latest = useRef<TimelineSnapshot | null>(null);
  const [issue, setIssue] = useState<Feedback | undefined>();
  const error = issue?.message ?? '';
  const setError = (message: string) => setIssue(message ? { kind: 'input', message } : undefined);
  const [loadError, setLoadError] = useState('');
  const [busy, setBusy] = useState(false);
  const working = useRef(false);
  const [draft, setDraft] = useState<DurationDraft | null>(null);
  const pending = useRef<DurationDraft | null>(null);
  const inFlight = useRef<Promise<void> | null>(null);
  const owner = useRef(projectId);
  owner.current = projectId;
  const endpoint = `/projects/${projectId}/timeline`;
  const activity = () => onBusy(working.current || pending.current !== null);
  const accept = useCallback((value: TimelineSnapshot) => {
    if (owner.current !== projectId) return;
    latest.current = value; setSnapshot(value); setLoadError('');
  }, [projectId]);
  const refresh = useCallback(async (signal?: AbortSignal) => {
    let value = await request<TimelineSnapshot>(`/projects/${projectId}/timeline`, { signal });
    if (value.probes.length) {
      for (const probe of value.probes) {
        if (signal?.aborted || owner.current !== projectId) return;
        await request(`/projects/${projectId}/assets/${probe.id}/probe-audio`, { ...json('POST', { expectedRevision: probe.revision }), signal });
      }
      value = await request<TimelineSnapshot>(`/projects/${projectId}/timeline`, { signal });
    }
    const current = latest.current;
    if (!signal?.aborted && !working.current && !pending.current && (!current ||
      (value.timeline.revision >= current.timeline.revision && value.storyboardRevision >= current.storyboardRevision))) accept(value);
  }, [projectId, accept]);
  useEffect(() => {
    latest.current = null; pending.current = null;
    setSnapshot(null); setDraft(null); setError(''); setLoadError('');
  }, [projectId]);
  useEffect(() => {
    if (!projectId || !enabled) return;
    const abort = new AbortController();
    let timer: number;
    async function poll() {
      try { if (!working.current && !pending.current) await refresh(abort.signal); }
      catch (failure) { if (!abort.signal.aborted) setLoadError(errorMessage(failure)); }
      finally { if (!abort.signal.aborted) timer = window.setTimeout(() => void poll(), 3000); }
    }
    void poll();
    return () => { abort.abort(); clearTimeout(timer); };
  }, [projectId, enabled, refresh]);
  useEffect(() => {
    const unload = (event: BeforeUnloadEvent) => { if (pending.current || working.current) { event.preventDefault(); event.returnValue = ''; } };
    window.addEventListener('beforeunload', unload);
    return () => window.removeEventListener('beforeunload', unload);
  }, []);

  async function write(path: string, method: string, body: object) {
    if (working.current) throw new Error('时间线正在保存，请稍候。');
    working.current = true; setBusy(true); setError(''); activity();
    try {
      const value = await request<TimelineSnapshot>(endpoint + path, json(method, body));
      accept(value);
    } catch (failure) { if (owner.current === projectId) setIssue(operationFeedback(failure)); throw failure; }
    finally { working.current = false; setBusy(false); activity(); }
  }
  function editDuration(clip: TimelineClip, value: string) {
    const next = { clipId: clip.id, value, revision: (issue?.kind === 'conflict' ? undefined : pending.current?.revision) ?? latest.current!.timeline.revision,
      storyboardRevision: (issue?.kind === 'conflict' ? undefined : pending.current?.storyboardRevision) ?? latest.current!.storyboardRevision };
    pending.current = next; setDraft(next); setError(''); activity();
  }
  function flush(): Promise<void> {
    if (inFlight.current) return inFlight.current;
    if (issue && ['uncertain', 'conflict'].includes(issue.kind)) return Promise.reject(new Error(issue.message));
    if (!pending.current) return Promise.resolve();
    const current = pending.current;
    const durationFrames = Math.round(Number(current.value) * 30);
    if (!current.value.trim() || !Number.isFinite(durationFrames) || durationFrames < 3 || durationFrames > 108000) {
      const failure = new Error('图片停留时长应在 0.1 至 3600 秒之间，输入已保留。');
      setError(failure.message); return Promise.reject(failure);
    }
    inFlight.current = write(`/clips/${current.clipId}`, 'PATCH', { expectedRevision: current.revision, expectedStoryboardRevision: current.storyboardRevision, durationFrames }).then(() => {
      pending.current = null; setDraft(null); activity();
    }).finally(() => { inFlight.current = null; });
    return inFlight.current;
  }
  async function muteTrack(track: AudioTrack, muted: boolean) {
    await flush(); await write(`/tracks/${track}`, 'PATCH', { expectedRevision: latest.current!.timeline.revision, expectedStoryboardRevision: latest.current!.storyboardRevision, muted });
  }
  async function muteClip(clip: TimelineClip, muted: boolean) {
    await flush(); await write(`/clips/${clip.id}`, 'PATCH', { expectedRevision: latest.current!.timeline.revision, expectedStoryboardRevision: latest.current!.storyboardRevision, muted });
  }
  async function readLatest(discard = false) {
    const scope = projectId;
    if (discard && pending.current && !window.confirm('放弃未保存修改并重新读取时间线？')) return;
    const basis = pending.current;
    await inFlight.current?.catch(() => {});
    try {
      const value = await request<TimelineSnapshot>(endpoint);
      if (owner.current !== scope) return;
      accept(value);
      const input = pending.current;
      const saved = input && value.timeline.clips.find(clip => clip.id === input.clipId);
      if (discard && input === basis || input && saved?.durationFrames === Math.round(Number(input.value) * 30)) {
        pending.current = null; setDraft(null); activity();
      }
      setIssue(pending.current ? { kind: 'conflict', message: '已读取最新时间线，未保存输入仍保留。请核对后修改时长，或明确放弃本地修改。' } : undefined);
    } catch (failure) { if (owner.current === scope) setLoadError(errorMessage(failure)); }
  }
  const reload = () => readLatest(true);
  const assetsById = useMemo(() => new Map(snapshot?.assets.map(asset => [asset.id, asset])), [snapshot?.assets]);
  return { snapshot, assetsById, error, issue, readLatest, loadError, busy, draft, flush, muteTrack, muteClip, editDuration, reload };
}
export type TimelineControls = ReturnType<typeof useTimeline>;
