import { useCallback, useEffect, useRef, useState } from 'react';
import { canvasReferenceAssets, type CanvasSnapshot } from '../../canvas/types';
import type { ReferenceAsset } from '../../references/content';

export interface PendingCanvasReference {
  nodeId: string; title: string; assetId: string | null; asset: ReferenceAsset | null; error: string | null;
}
export interface PendingCanvasReferences { id: string; projectId: string; items: PendingCanvasReference[] }

export function usePendingCanvasReferences(projectId: string | null, active: boolean, snapshot?: CanvasSnapshot | null) {
  const [pending, setPending] = useState<PendingCanvasReferences | null>(null);
  const latest = useRef(pending);
  const cancel = useCallback(() => { latest.current = null; setPending(null); }, []);
  const isCurrent = useCallback((id: string) => latest.current?.id === id, []);
  const consume = useCallback((id: string) => { if (latest.current?.id === id) { latest.current = null; setPending(null); } }, []);
  useEffect(cancel, [projectId, active, cancel]);
  const stage = useCallback((snapshot: CanvasSnapshot, ids: string[], extend = false) => {
    if (!projectId || !active || extend && !latest.current) return;
    const items = snapshot.canvas.nodes.filter(node => ids.includes(node.id)).map(node => {
      const asset = snapshot.assets.find(asset => asset.id === node.assetId);
      return { nodeId: node.id, title: node.title, assetId: node.assetId, asset: asset ? { ...asset, nodeTitle: node.title, nodeId: node.id } : null,
        error: !node.assetId ? '尚无已保存的资产，请先上传、保存文本或等待生成完成。' : node.kind === 'text' && node.draft !== null ? '文本尚未保存。' : !asset ? '资产记录缺失。' : !snapshot.availableAssetIds.includes(asset.id) ? '资产不是有效的当前版本。' : null };
    });
    const value = items.length ? { id: crypto.randomUUID(), projectId, items } : null;
    latest.current = value; setPending(value);
  }, [projectId, active]);
  useEffect(() => {
    if (!snapshot || !latest.current) return;
    const ids = latest.current.items.map(item => item.nodeId);
    const changed = latest.current.items.some(item => {
      const node = snapshot.canvas.nodes.find(node => node.id === item.nodeId);
      return !node || node.assetId !== item.assetId || node.title !== item.title;
    });
    if (changed) stage(snapshot, ids);
  }, [snapshot, stage]);
  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!latest.current || !(event.target instanceof Element)) return;
      const target = event.target;
      if (target.closest('[data-pending-references],.chat-composer .reference-editor,[data-assistant-toggle]')) return;
      if (event.shiftKey && target.closest('.project-canvas') && !target.closest('button,input,textarea,select,.canvas-details-panel')) return;
      cancel();
    }
    function escape(event: KeyboardEvent) {
      if (latest.current && event.key === 'Escape' && !event.isComposing) {
        event.preventDefault(); cancel();
        // Let an active Shift marquee cancel its gesture too. Otherwise its
        // eventual pointerup would stage references again after cancellation.
        if (!(event.target instanceof Element && event.target.closest('.project-canvas[data-interacting="true"]'))) event.stopPropagation();
      }
    }
    document.addEventListener('pointerdown', outside, true);
    document.addEventListener('keydown', escape, true);
    return () => { document.removeEventListener('pointerdown', outside, true); document.removeEventListener('keydown', escape, true); };
  }, [cancel]);
  const currentAssets: ReferenceAsset[] = canvasReferenceAssets(snapshot);
  return { currentAssets, canvasRevision: snapshot?.canvas.revision, pending: pending?.projectId === projectId && active ? pending : null, stage, cancel, consume, isCurrent };
}
export type PendingReferenceControls = ReturnType<typeof usePendingCanvasReferences>;
