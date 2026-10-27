import { Feedback } from '../../components/Feedback';
import { operationFeedback, type Feedback as FeedbackValue } from '../../lib/feedback';
import { useCallback, useEffect, useRef, useState } from 'react';
import { retryableReadFailure, errorMessage, json, request } from '../../lib/api';
import { AssetDialog } from '../assets/components/AssetDialog';
import type { ProjectAsset } from '../assets/types';
import type { CanvasNode } from '../canvas/types';
import { VersionHistory, type AssetVersion } from './VersionHistory';

export interface NodeVersions { node: CanvasNode; nodes: CanvasNode[]; assets: ProjectAsset[]; versions: AssetVersion[]; running: boolean; blocked: boolean; availableAssetIds: string[]; production: { planId: string; stepId: string } | null; selectedByShots: { id: string; title: string; assetId: string }[] }
export function CanvasVersionDialog({ projectId, nodeId, initialAssetId, expectedRevision, onClose, onUpdated, onApplied }: { projectId: string; nodeId: string; initialAssetId?: string; expectedRevision?: number; onClose: () => void; onUpdated: () => void; onApplied?: (node: CanvasNode) => Promise<void> }) {
  const [state, setState] = useState<NodeVersions | null>(null);
  const [selectedId, setSelectedId] = useState('');
  const [busy, setBusy] = useState(false);
  const [loadError, setLoadError] = useState('');
  const [issue, setIssue] = useState<FeedbackValue | undefined>();
  const reconcile = useRef(true);
  const basisRevision = useRef(expectedRevision);
  const [loadRetryable, setLoadRetryable] = useState(true);
  const [uncertain, setUncertain] = useState(false);
  const pending = useRef(false);
  const alive = useRef(false);
  const load = useCallback(async (signal?: AbortSignal, verify = false) => {
    if (pending.current) return;
    if (verify) { reconcile.current = true; basisRevision.current = undefined; }
    try {
      const value = await request<NodeVersions>(`/projects/${projectId}/canvas/nodes/${nodeId}/versions`, { signal });
      if (!signal?.aborted && alive.current && !pending.current) {
        setState(current => JSON.stringify(current) === JSON.stringify(value) ? current : value);
        setSelectedId(current => current || (value.versions.some(version => version.asset.id === initialAssetId) ? initialAssetId! : value.node.assetId) || value.versions.at(-1)?.asset.id || '');
        setLoadError('');
        if (basisRevision.current !== undefined && basisRevision.current !== value.node.revision) {
          setUncertain(true); reconcile.current = false;
          setIssue({ kind: 'conflict', message: '参考节点在状态显示后已变化，请核对历史版本并重新读取后再应用。' });
        } else if (reconcile.current) { setUncertain(false); setIssue(undefined); reconcile.current = false; }
      }
    } catch (failure) {
      if (!signal?.aborted && alive.current) {
        setLoadError(errorMessage(failure));
        setLoadRetryable(retryableReadFailure(failure));
      }
    }
  }, [projectId, nodeId, initialAssetId]);
  useEffect(() => {
    alive.current = true; const abort = new AbortController();
    void load(abort.signal);
    const timer = window.setInterval(() => void load(abort.signal), 2000);
    return () => { alive.current = false; abort.abort(); clearInterval(timer); };
  }, [load]);
  async function apply(version: AssetVersion) {
    if (!state || pending.current || uncertain || state.blocked) return;
    pending.current = true; setBusy(true); setIssue(undefined);
    let committed = false;
    try {
      const node = await request<CanvasNode>(`/projects/${projectId}/canvas/nodes/${nodeId}/versions/apply`, json('POST', {
        assetId: version.asset.id, fingerprint: version.asset.fingerprint, expectedRevision: state.node.revision,
      }));
      committed = true;
      if (alive.current) { await onApplied?.(node); onUpdated(); onClose(); }
    } catch (failure) {
      if (alive.current) {
        const value = committed ? { kind: 'read' as const, message: `版本已应用，但状态尚未同步：${errorMessage(failure)}` } : operationFeedback(failure);
        setIssue(value); setUncertain(committed || value.kind === 'uncertain'); onUpdated();
      }
    } finally { pending.current = false; if (alive.current) setBusy(false); }
  }
  const notice = loadError
    ? issue && ['uncertain', 'conflict'].includes(issue.kind)
      ? { ...issue, message: `${issue.message} 当前读取失败：${loadError}` }
      : { kind: loadRetryable ? 'read' as const : 'error' as const, message: loadError }
    : issue;
  return <AssetDialog title="历史版本" busy={busy} onClose={onClose}>
    {!state && !loadError && <p role="status">正在读取历史版本…</p>}
    {state && <>
      {state.blocked && <p className="asset-hint">当前任务仍在制作或待核对，历史版本仅供预览。请在节点或助手中处理任务后重新打开。</p>}
      <VersionHistory projectId={projectId} kind={state.node.kind} nodes={state.nodes} versions={state.versions} assets={state.assets} currentId={state.node.assetId}
        adoptedIds={state.selectedByShots.map(shot => shot.assetId)} selectedId={selectedId} onSelect={setSelectedId}
        busy={busy} canApply={!state.blocked && !uncertain} onApply={version => { void apply(version); }} />
    </>}
    <Feedback value={notice} readLabel="重新读取历史版本" onRead={() => load(undefined, true)} />
  </AssetDialog>;
}
