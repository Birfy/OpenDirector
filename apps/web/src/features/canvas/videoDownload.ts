import type { CanvasSnapshot } from './types';

// Download the displayed successful version, even if a newer attempt failed.
export function downloadableVideo(snapshot: CanvasSnapshot | null | undefined, nodeId: string | undefined) {
  const node = snapshot?.canvas.nodes.find(item => item.id === nodeId);
  if (!snapshot || !node || node.kind !== 'video' || node.role !== 'generation' || !node.assetId) return null;
  const asset = snapshot.assets.find(item => item.id === node.assetId);
  if (!asset || asset.kind !== 'video' || asset.source !== 'generated' || !snapshot.availableAssetIds.includes(asset.id)) return null;
  const succeeded = snapshot.tasks.some(task => task.nodeId === node.id && task.kind === 'video'
    && task.assetId === asset.id && task.status === 'succeeded');
  return succeeded ? asset : null;
}
