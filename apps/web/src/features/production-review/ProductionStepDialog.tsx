import { useEffect, useState } from 'react';
import { retryableReadFailure, request, errorMessage } from '../../lib/api';
import { AssetDialog } from '../assets/components/AssetDialog';
import { CanvasVersionDialog } from './CanvasVersionDialog';
import type { StepReview } from './types';

export function ProductionStepDialog({ projectId, planId, stepId, onClose, onUpdated }: { projectId: string; planId: string; stepId: string; onClose: () => void; onUpdated: () => void }) {
  const [nodeId, setNodeId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [retryable, setRetryable] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController(); setError('');
    void request<StepReview>(`/projects/${projectId}/production-plans/${planId}/steps/${stepId}`, { signal: controller.signal })
      .then(value => { if (!controller.signal.aborted) { if (value.node) setNodeId(value.node.id); else { setError('画布节点已移除，请先从资产列表放回画布。'); setRetryable(false); } } })
      .catch(failure => { if (!controller.signal.aborted) { setError(errorMessage(failure)); setRetryable(retryableReadFailure(failure)); } });
    return () => controller.abort();
  }, [projectId, planId, stepId, attempt]);
  if (nodeId) return <CanvasVersionDialog projectId={projectId} nodeId={nodeId} onClose={onClose} onUpdated={onUpdated} />;
  return <AssetDialog title="历史版本" onClose={onClose}>{error ? <div role="alert"><p>{error}</p>{retryable && <button type="button" className="secondary-button" onClick={() => setAttempt(value => value + 1)}>重新读取历史版本</button>}</div> : <p role="status">正在读取历史版本…</p>}</AssetDialog>;
}
