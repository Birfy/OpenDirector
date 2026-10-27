import { useCallback, useEffect, useRef, useState } from 'react';
import { ApiError, errorMessage, json, request, uncertainFailure } from '../../lib/api';
import { createActionQueue } from '../../lib/actionQueue';
import { assetUsage, deleteAssets, previewAssetsDeletion, type AssetDeletionImpact } from '../assets/api';
import type { NodeVersions } from '../production-review/CanvasVersionDialog';
import type { StepReview } from '../production-review/types';
import type { ProjectAsset } from '../assets/types';
import type { NodeMove } from './selection';
import type { CanvasSnapshot, CanvasState, CanvasNode, NodeChanges, NodeKind, GenerationTask } from './types';

import { operationFeedback } from '../../lib/feedback';
import { useFeedback } from '../../lib/useFeedback';

class CanvasInputError extends ApiError {
  constructor(message: string) { super(message, 400, 'invalid_input'); }
}

export function useProjectCanvas(projectId: string | null, onBusy: (busy: boolean) => void) {
  const [snapshot, setSnapshot] = useState<CanvasSnapshot | null>(null);
  const feedback = useFeedback(projectId);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [historyBusy, setHistoryBusy] = useState(false);
  const historyRequest = useRef(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  // Only a single selection is an implicit assistant editing target.
  const selectedId = selectedIds.length === 1 ? selectedIds[0] : null;
  const setSelectedId = useCallback((id: string | null) => setSelectedIds(id ? [id] : []), []);
  const selectNode = useCallback((id: string, toggle = false) => setSelectedIds(current => toggle
    ? current.includes(id) ? current.filter(key => key !== id) : [...current, id]
    : current.includes(id) ? current : [id]), []);
  const selectionRequest = useRef(false);
  const [batchBusy, setBatchBusy] = useState(false);
  const [focusVersion, setFocusVersion] = useState(0);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const latest = useRef<CanvasSnapshot | null>(null);
  const scope = useRef(projectId);
  const [queue] = useState(createActionQueue);
  const pending = useRef(0);
  const failedActions = useRef(0);
  scope.current = projectId;
  const refresh = useCallback(async (signal?: AbortSignal) => {
    if (!projectId) return;
    const value = await request<CanvasSnapshot>(`/projects/${projectId}/canvas`, { signal });
    if (scope.current !== projectId) return;
    if (!latest.current || value.canvas.revision >= latest.current.canvas.revision) {
      latest.current = value; setSnapshot(value); feedback.clearKind('read');
      setSelectedIds(current => {
        const ids = new Set(value.canvas.nodes.map(node => node.id));
        const next = current.filter(id => ids.has(id));
        return next.length === current.length ? current : next;
      });
    }
  }, [projectId, feedback.clearKind]);
  useEffect(() => {
    latest.current = null; setSnapshot(null); setSelectedId(null); setFocusedId(null);
    setLoading(!!projectId);
    if (!projectId) return;
    const controller = new AbortController();
    let timer: number;
    async function poll() {
      try { await refresh(controller.signal); }
      catch (failure) { if (!controller.signal.aborted) feedback.put('load', { kind: 'read', message: errorMessage(failure) }); }
      finally {
        if (!controller.signal.aborted) {
          setLoading(false);
          timer = window.setTimeout(() => void poll(), 2000);
        }
      }
    }
    void poll();
    return () => { controller.abort(); clearTimeout(timer); };
  }, [projectId, refresh]);

  function run<T>(action: () => Promise<T>, key = 'canvas', transientInput = false): Promise<T> {
    const owner = projectId;
    pending.current += 1; setBusy(true); onBusy(true); feedback.put(key, null);
    return queue.run(async () => {
      try {
        if (scope.current !== owner) throw new Error('项目已切换，请在当前项目重新操作。');
        const value = await action();
        try { await refresh(); }
        catch (failure) {
          if (scope.current === owner) feedback.put('load', { kind: 'read', message: `操作已保存，但状态尚未同步：${errorMessage(failure)}` });
        }
        return value;
      } catch (failure) {
        failedActions.current += 1;
        if (scope.current === owner) {
          const value = operationFeedback(failure);
          feedback.put(key, failure instanceof CanvasInputError || transientInput && value.kind === 'input'
            ? { ...value, expiresAt: Date.now() + 4000 } : value);
        }
        throw failure;
      } finally {
        pending.current -= 1;
        if (!pending.current) { setBusy(false); onBusy(false); }
      }
    });
  }
  async function readState(key = 'load') {
    const owner = projectId;
    try { await refresh(); if (scope.current === owner) feedback.put(key, null); }
    catch (failure) { if (scope.current === owner) feedback.put(key, { kind: 'read', message: errorMessage(failure) }); }
  }
  const flush = () => queue.flush();
  async function refreshOnFailure<T>(action: () => Promise<T>): Promise<T> {
    try { return await action(); }
    catch (failure) {
      // An uncertain write may have committed. Read its state without replaying it.
      if (uncertainFailure(failure) || failure instanceof ApiError && failure.code === 'revision_conflict') {
        try { await refresh(); }
        catch (readFailure) {
          if (failure instanceof ApiError) throw new ApiError(`${failure.message} 读取核对仍未完成：${errorMessage(readFailure)}`, failure.status, failure.code);
        }
      }
      throw failure;
    }
  }
  const endpoint = `/projects/${projectId}/canvas/nodes`;
  function current(id: string) {
    const node = latest.current?.canvas.nodes.find(item => item.id === id);
    if (!node) throw new CanvasInputError('节点已移除，请从资产列表放回画布或选择其他节点。');
    return node;
  }
  async function patchNow(id: string, changes: NodeChanges) {
    const node = await request<CanvasNode>(`${endpoint}/${id}`, json('PATCH', { expectedRevision: current(id).revision, ...changes }));
    if (latest.current) {
      latest.current = { ...latest.current, canvas: { ...latest.current.canvas, nodes: latest.current.canvas.nodes.map(item => item.id === id ? node : item) } };
    }
    return node;
  }
  const patch = (id: string, changes: NodeChanges) => run(() => patchNow(id, changes), id);
  const create = (kind: NodeKind, x?: number, y?: number, asset?: ProjectAsset) => run(async () => {
    const existing = asset && latest.current?.canvas.nodes.find(node => node.assetIds.includes(asset.id));
    if (existing) { setSelectedId(existing.id); setFocusedId(existing.id); setFocusVersion(value => value + 1); return existing; }
    const node = await request<CanvasNode>(endpoint, json('POST', { id: crypto.randomUUID(), kind, x, y, ...(asset ? { assetId: asset.id } : {}) }));
    if (scope.current === projectId) { setSelectedId(node.id); setFocusedId(node.id); setFocusVersion(value => value + 1); }
    return node;
  }, asset ? 'assets' : 'canvas');
  const connect = (sourceId: string, targetId: string, creating?: { kind: NodeKind; x: number; y: number }) => run(async () => {
    const source = current(sourceId);
    const target = creating ? null : current(targetId);
    if (target?.role === 'material') throw new CanvasInputError('素材节点只能作为参考源，不能接收参考。请连接生成节点。');
    return refreshOnFailure(async () => {
      const node = await request<CanvasNode>(`/projects/${projectId}/canvas/connections`, json('POST', {
        sourceId, assetId: source.assetId, targetId, expectedRevision: target?.revision, ...creating,
      }));
      if (creating && scope.current === projectId) { setSelectedId(node.id); setFocusedId(node.id); setFocusVersion(value => value + 1); }
      return node;
    });
  }, creating ? sourceId : targetId, true);
  const disconnect = (sourceId: string, targetId: string) => run(() => refreshOnFailure(() =>
    request<CanvasNode>(`${endpoint}/${targetId}/references/${sourceId}`, json('DELETE', { expectedRevision: current(targetId).revision }))), targetId);
  const remove = (id: string) => run(() => request<void>(`${endpoint}/${id}`, { method: 'DELETE' }), id);
  const expandReferences = (id: string) => run(() => refreshOnFailure(() => request<CanvasState>(`${endpoint}/${id}/references/expand`, json('POST', { expectedRevision: current(id).revision }))), id);
  async function batch(action: () => Promise<CanvasState>) {
    if (selectionRequest.current) return;
    selectionRequest.current = true; setBatchBusy(true);
    const previousFailures = failedActions.current;
    try {
      await run(async () => {
        if (scope.current !== projectId || !latest.current) throw new Error('项目已切换，请在当前项目重新操作。');
        if (failedActions.current !== previousFailures) throw new Error('当前编辑保存失败，未执行批量操作；请核对后重试。');
        return refreshOnFailure(action);
      });
    } finally { selectionRequest.current = false; setBatchBusy(false); }
  }
  const moveNodes = (nodes: NodeMove[]) => batch(() => request<CanvasState>(`/projects/${projectId}/canvas/move`, json('POST', { nodes })));
  const removeNodes = (ids: string[]) => batch(() => request<CanvasState>(`/projects/${projectId}/canvas/remove`, json('POST', {
    nodes: ids.map(id => { const node = current(id); return { id, expectedRevision: node.revision, expectedTaskId: node.taskId }; }),
  })));
  const upload = (id: string, file: File, discardInputs = false) => run(async () => {
    const node = current(id);
    const count = node.referenceIds.length;
    const asset = await refreshOnFailure(() => request<ProjectAsset>(`${endpoint}/${id}/file`, {
      method: 'PUT', body: file, headers: { 'Content-Type': 'application/octet-stream', 'X-Asset-Name': encodeURIComponent(file.name),
        'X-Asset-Id': crypto.randomUUID(), 'X-Node-Revision': String(node.revision), 'X-Discard-Inputs': String(discardInputs) },
    }));
    if (scope.current === projectId) feedback.put(id, { kind: 'notice', message: node.role === 'material' ? '已替换文件。' :
      `已转为素材节点。${count ? `已清除 ${count} 个上游参考。` : ''}`, expiresAt: Date.now() + 4000 });
    return asset;
  }, id);
  const importFiles = (files: File[]) => run(async () => {
    const errors: string[] = [];
    const operationId = crypto.randomUUID();
    for (const file of files) {
      try { await request<ProjectAsset>(`/projects/${projectId}/canvas/files/${crypto.randomUUID()}`, {
        method: 'PUT', body: file, headers: { 'Content-Type': 'application/octet-stream', 'X-Asset-Name': encodeURIComponent(file.name), 'X-Canvas-Operation': operationId },
      }); }
      catch (failure) { errors.push(`${file.name}：${errorMessage(failure)}`); }
    }
    if (errors.length) { await readState(); throw new Error(errors.join('\n')); }
  });
  const saveText = (id: string, text: string, title: string, discardInputs = false) => run(async () => {
    const node = current(id);
    return request<ProjectAsset>(`${endpoint}/${id}/text`, json('PUT', {
      id: crypto.randomUUID(), name: /\.(txt|md)$/i.test(title) ? title : `${title || '文本'}.md`, text, expectedRevision: node.revision, discardInputs,
    }));
  }, id);
  const generate = (id: string, changes: NodeChanges) => run(async () => {
    const node = current(id);
    const modelConfigId = changes.modelConfigId ?? node.modelConfigId;
    if (!modelConfigId) throw new CanvasInputError('请先配置并选择对应类别的模型。');
    const inputs = { promptContent: changes.promptContent === undefined ? node.promptContent ?? null : changes.promptContent, prompt: changes.prompt ?? node.prompt, referenceIds: changes.referenceIds ?? node.referenceIds, title: changes.title ?? node.title, videoMode: changes.videoMode ?? node.videoMode ?? 'first_frame' };
    const history = await request<NodeVersions>(`${endpoint}/${id}/versions`);
    if (history.production) {
      const { planId, stepId } = history.production;
      const state = await request<StepReview>(`/projects/${projectId}/production-plans/${planId}/steps/${stepId}`);
      if (state.node?.revision !== node.revision) throw new Error('节点已变化，请核对后再生成。');
      const hasImage = inputs.referenceIds.some(key => latest.current?.assets.find(asset => asset.id === key)?.kind === 'image');
      return request(`/projects/${projectId}/production-plans/${planId}/repairs`, json('POST', {
        id: crypto.randomUUID(), stepId, ...state.versions, action: 'regenerate', prompt: inputs.prompt, promptContent: inputs.promptContent,
        referenceIds: inputs.referenceIds, modelConfigId, adoptionPolicy: 'candidate_only',
        ...(node.kind === 'video' ? { mode: inputs.videoMode === 'first_frame' ? hasImage ? 'image_to_video' : 'text_to_video' : inputs.videoMode } : {}),
      }));
    }
    return request<GenerationTask>(`${endpoint}/${id}/generate`, json('POST', { id: crypto.randomUUID(), modelConfigId, expectedRevision: node.revision, inputs }));
  }, id);
  const taskNode = (taskId: string) => latest.current?.tasks.find(task => task.id === taskId)?.nodeId ?? 'canvas';
  const cancel = (taskId: string) => run(() => request(`/projects/${projectId}/tasks/${taskId}/cancel`, { method: 'POST' }), taskNode(taskId));
  const recover = (taskId: string) => run(() => request<GenerationTask>(`/projects/${projectId}/tasks/${taskId}/recover`, { method: 'POST' }), taskNode(taskId));
  // Usage is a read with local loading/error UI; it must not clear mutation
  // feedback (in particular a deletion conflict discovered during this read).
  const loadAssetUsage = () => assetUsage(projectId!);
  const deletionImpact = (ids: string[]) => run(() => previewAssetsDeletion(projectId!, ids), 'assets');
  const destroyAssets = (ids: string[], impact: AssetDeletionImpact) => run(() => refreshOnFailure(() => deleteAssets(projectId!, ids, impact)), 'assets');
  const arrange = (heights: Record<string, number>) => run(() => {
    if (scope.current !== projectId || !latest.current) throw new Error('项目已切换，请在当前项目重新操作。');
    return request<CanvasState>(`/projects/${projectId}/canvas/arrange`, json('POST', { expectedRevision: latest.current.canvas.revision, heights }));
  });
  async function history(direction: 'undo' | 'redo') {
    if (historyRequest.current) return;
    historyRequest.current = true; setHistoryBusy(true);
    try {
      await run(async () => {
        const state = latest.current;
        if (scope.current !== projectId || !state) throw new Error('项目已切换，请在当前项目重新操作。');
        const entry = state.canvas.history[direction];
        if (!entry) return;
        await refreshOnFailure(async () => {
          const previousIds = new Set(state.canvas.nodes.map(node => node.id));
          const result = await request<CanvasState>(`/projects/${projectId}/canvas/history/${direction}`, json('POST', { id: crypto.randomUUID(), entryId: entry.id }));
          const restored = result.nodes.filter(node => !previousIds.has(node.id)).map(node => node.id);
          if (restored.length && scope.current === projectId) setSelectedIds(restored);
        });
      });
    } finally { historyRequest.current = false; setHistoryBusy(false); }
  }
  const invalidate = (event: { nodeId?: string | null }) => { void readState().then(() => { if (scope.current === projectId && event.nodeId) { setFocusedId(event.nodeId); setFocusVersion(value => value + 1); } }); };
  return { snapshot, loading, busy, batchBusy, historyBusy, history, feedback: feedback.items, dismissFeedback: (key: string) => feedback.put(key, null), readState, refresh, selectedId, selectedIds, setSelectedIds, selectNode, moveNodes, removeNodes, focusedId, focusVersion, invalidate, flush, create, connect, disconnect, expandReferences, patch, remove, upload, importFiles, saveText, generate, cancel, recover, loadAssetUsage, deletionImpact, destroyAssets, arrange };
}
export type ProjectCanvas = ReturnType<typeof useProjectCanvas>;
