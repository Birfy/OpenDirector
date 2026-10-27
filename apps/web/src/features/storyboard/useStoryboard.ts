import { operationFeedback, type Feedback } from '../../lib/feedback';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ApiError, errorMessage, json, request } from '../../lib/api';
import type { MediaRole, Shot, ShotFields, StoryboardSnapshot, StoryboardState } from './types';
import type { ProjectAsset } from '../assets/types';

const fieldNames = ['title', 'description'] as const;
const fieldsOf = (shot: Shot): ShotFields => Object.fromEntries(fieldNames.map(key => [key, shot[key]])) as ShotFields;
interface Draft { base: Shot; fields: ShotFields }

export function useStoryboard(projectId: string | null, enabled: boolean, onBusy: (busy: boolean) => void) {
  const [snapshot, setSnapshot] = useState<StoryboardSnapshot | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState('');
  const [issue, setIssue] = useState<Feedback | undefined>();
  const error = issue?.message ?? '';
  const setError = (message: string) => setIssue(message ? { kind: 'input', message } : undefined);
  const [saving, setSaving] = useState(false);
  const [busy, setBusy] = useState(false);
  const [draftVersion, setDraftVersion] = useState(0);
  const latest = useRef<StoryboardSnapshot | null>(null);
  const drafts = useRef(new Map<string, Draft>());
  const inFlight = useRef<Promise<void> | null>(null);
  const operations = useRef(0);
  const queue = useRef<Promise<unknown>>(Promise.resolve());
  const failed = useRef(false);
  const scope = useRef(projectId);
  scope.current = projectId;
  const endpoint = `/projects/${projectId}/storyboard`;
  const activity = () => onBusy(drafts.current.size > 0 || inFlight.current !== null || operations.current > 0);
  const redrawDrafts = () => setDraftVersion(version => version + 1);

  function accept(state: StoryboardState) {
    if (scope.current !== projectId || !latest.current || state.revision < latest.current.storyboard.revision) return;
    latest.current = { ...latest.current, storyboard: state };
    setSnapshot(latest.current);
  }
  const refresh = useCallback(async (signal?: AbortSignal) => {
    if (!projectId) return;
    const value = await request<StoryboardSnapshot>(`/projects/${projectId}/storyboard`, { signal });
    if (scope.current !== projectId || signal?.aborted) return;
    if (!latest.current || value.storyboard.revision >= latest.current.storyboard.revision) {
      latest.current = value; setSnapshot(value);
    }
    setLoadError('');
  }, [projectId]);
  useEffect(() => {
    latest.current = null; drafts.current.clear(); failed.current = false;
    setSnapshot(null); setSelectedId(null); setError(''); setLoadError(''); setLoading(false);
  }, [projectId]);
  useEffect(() => {
    if (!projectId || !enabled) return;
    const controller = new AbortController();
    let timer: number;
    if (!latest.current) setLoading(true);
    async function poll() {
      try { if (!drafts.current.size && !inFlight.current && !operations.current) await refresh(controller.signal); }
      catch (failure) { if (!controller.signal.aborted) setLoadError(errorMessage(failure)); }
      finally {
        if (!controller.signal.aborted) { setLoading(false); timer = window.setTimeout(() => void poll(), 3000); }
      }
    }
    void poll();
    return () => { controller.abort(); clearTimeout(timer); };
  }, [projectId, enabled, refresh]);

  function edit(id: string, changes: Partial<ShotFields>) {
    const existing = drafts.current.get(id);
    const saved = latest.current?.storyboard.shots.find(shot => shot.id === id);
    const base = issue?.kind === 'conflict' ? saved : existing?.base ?? saved;
    if (!base) return;
    const retained = existing && issue?.kind === 'conflict'
      ? Object.fromEntries(fieldNames.filter(key => existing.fields[key] !== existing.base[key]).map(key => [key, existing.fields[key]]))
      : existing?.fields;
    const fields = { ...fieldsOf(base), ...retained, ...changes };
    if (fieldNames.every(key => fields[key] === base[key]) && !inFlight.current) drafts.current.delete(id);
    else drafts.current.set(id, { base, fields });
    failed.current = false; setError(''); redrawDrafts(); activity();
  }
  function flush(): Promise<void> {
    if (inFlight.current) return inFlight.current;
    if (issue && ['uncertain', 'conflict'].includes(issue.kind)) return Promise.reject(new Error(issue.message));
    if (!drafts.current.size) return Promise.resolve();
    setSaving(true); failed.current = false; setError('');
    const owner = projectId;
    const work = async () => {
      try {
        while (drafts.current.size && scope.current === owner) {
          const [id, draft] = drafts.current.entries().next().value!;
          if (!draft.fields.title.trim()) throw new ApiError('镜头标题不能为空，当前输入已保留。', 400, 'invalid_input');
          const changes = Object.fromEntries(fieldNames.filter(key => draft.fields[key] !== draft.base[key]).map(key => [key, draft.fields[key]]));
          const state = await request<StoryboardState>(`${endpoint}/shots/${id}`, json('PATCH', { expectedRevision: draft.base.revision, ...changes }));
          if (scope.current !== owner) return;
          const saved = state.shots.find(shot => shot.id === id)!;
          const current = drafts.current.get(id);
          if (current === draft) drafts.current.delete(id);
          else if (current) drafts.current.set(id, { base: saved, fields: current.fields });
          accept(state); redrawDrafts();
        }
      } catch (failure) {
        if (scope.current === owner) { failed.current = true; setIssue(operationFeedback(failure)); }
        throw failure;
      } finally {
        inFlight.current = null; setSaving(false); activity();
      }
    };
    // Start on a microtask so even synchronous validation uses the assigned promise.
    inFlight.current = Promise.resolve().then(work);
    activity();
    return inFlight.current;
  }
  useEffect(() => {
    if (!drafts.current.size || failed.current) return;
    const timer = window.setTimeout(() => { void flush().catch(() => {}); }, 450);
    return () => clearTimeout(timer);
  }, [draftVersion]);
  useEffect(() => {
    const unload = (event: BeforeUnloadEvent) => {
      if (drafts.current.size || operations.current || inFlight.current) { event.preventDefault(); event.returnValue = ''; }
    };
    window.addEventListener('beforeunload', unload);
    return () => window.removeEventListener('beforeunload', unload);
  }, []);

  function mutate(action: () => Promise<StoryboardState>): Promise<StoryboardState> {
    operations.current++; setBusy(true); activity();
    const result = queue.current.catch(() => {}).then(async () => {
      await flush();
      if (scope.current !== projectId) throw new Error('项目已切换，请重新打开分镜。');
      setError('');
      const state = await action(); accept(state); return state;
    });
    queue.current = result;
    return result.catch(failure => { if (scope.current === projectId) setIssue(operationFeedback(failure)); throw failure; }).finally(() => {
      operations.current--; setBusy(operations.current > 0); activity();
    });
  }
  const current = (id: string) => {
    const shot = latest.current?.storyboard.shots.find(shot => shot.id === id);
    if (!shot) throw new Error('镜头已移除，请重新读取分镜。');
    return shot;
  };
  const create = (afterId: string | null, sourceId: string | null = null) => {
    const id = crypto.randomUUID();
    return mutate(() => request<StoryboardState>(`${endpoint}/shots`, json('POST', { id, afterId, sourceId, expectedOrderRevision: latest.current!.storyboard.orderRevision }))).then(() => { setSelectedId(id); return id; });
  };
  const move = (id: string, direction: -1 | 1) => mutate(async () => {
    const state = latest.current!.storyboard;
    const ids = state.shots.map(shot => shot.id), from = ids.indexOf(id), to = from + direction;
    if (from < 0 || to < 0 || to >= ids.length) return state;
    [ids[from], ids[to]] = [ids[to], ids[from]];
    return request<StoryboardState>(`${endpoint}/order`, json('PUT', { expectedOrderRevision: state.orderRevision, shotIds: ids }));
  });
  const change = (id: string, method: string, suffix = '', value = {}, expectedRevision?: number) => mutate(() => request<StoryboardState>(`${endpoint}/shots/${id}${suffix}`, json(method, { ...value, expectedRevision: expectedRevision ?? current(id).revision })));
  const remove = (id: string) => change(id, 'DELETE').then(() => setSelectedId(value => value === id ? null : value));
  const associate = (id: string, kind: MediaRole, assetIds: string[], expectedRevision: number) => change(id, 'PUT', '/assets', { kind, assetIds }, expectedRevision);
  const adopt = (id: string, kind: MediaRole, assetId: string | null) => change(id, 'POST', '/adopt', { kind, assetId });
  const originalAudio = (id: string, mode: Shot['originalAudioMode']) => change(id, 'POST', '/original-audio', { mode });
  const probeAudio = (asset: ProjectAsset) => mutate(async () => {
    await request(`/projects/${projectId}/assets/${asset.id}/probe-audio`, json('POST', { expectedRevision: asset.revision }));
    await refresh();
    return latest.current!.storyboard;
  });
  async function readLatest(discard = false) {
    const owner = projectId;
    if (discard && drafts.current.size && !window.confirm('放弃未保存修改并重新读取分镜？')) return;
    const basis = new Map(drafts.current);
    await inFlight.current?.catch(() => {});
    try {
      await refresh();
      if (scope.current !== owner) return;
      if (discard) for (const [id, draft] of basis) { if (drafts.current.get(id) === draft) drafts.current.delete(id); }
      else for (const [id, draft] of drafts.current) {
        const saved = latest.current?.storyboard.shots.find(shot => shot.id === id);
        if (saved && fieldNames.every(key => saved[key] === draft.fields[key])) drafts.current.delete(id);
      }
      failed.current = drafts.current.size > 0;
      setIssue(drafts.current.size ? { kind: 'conflict', message: '已读取最新分镜，未保存输入仍保留。请核对后修改输入，或明确放弃本地修改。' } : undefined);
      redrawDrafts(); activity();
    } catch (failure) { if (scope.current === owner) setLoadError(errorMessage(failure)); }
  }
  const reload = () => readLatest(true);
  const shots = snapshot?.storyboard.shots.map(shot => {
    const draft = drafts.current.get(shot.id);
    return draft ? { ...draft.base, ...draft.fields } : shot;
  }) ?? [];
  const assetsById = useMemo(() => new Map(snapshot?.assets.map(asset => [asset.id, asset])), [snapshot?.assets]);
  return { shots, availableAssetIds: snapshot?.availableAssetIds ?? [], assets: snapshot?.assets ?? [], assetsById, selectedId, setSelectedId, loading, loaded: snapshot !== null,
    error, issue, readLatest, loadError, saving, busy, dirty: drafts.current.size > 0, edit, flush, create, move, remove, associate, adopt, originalAudio, probeAudio, reload };
}
export type StoryboardControls = ReturnType<typeof useStoryboard>;
