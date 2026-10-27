import { ApiError, json, request, responseError, sessionId } from '../../lib/api';
import type { ProjectAsset } from './types';
import type { ReferenceAsset } from '../references/content';

export interface AssetDeletionImpact {
  state: string;
  blockers: { kind: string; id: string; label: string }[];
  history: { undo: number; redo: number };
}
export type AssetUsage = Record<string, { used: boolean; reasons: string[] }>;
export const assetUsage = (projectId: string) => request<AssetUsage>(`/projects/${projectId}/assets/usage`);
export const previewAssetsDeletion = (projectId: string, ids: string[]) => request<AssetDeletionImpact>(`/projects/${projectId}/assets/deletion-preview`, json('POST', { assetIds: ids }));
export const deleteAssets = (projectId: string, ids: string[], impact: AssetDeletionImpact) => request<{ deleted: string[]; failed: { id: string; message: string }[] }>(`/projects/${projectId}/assets/delete`, json('POST', {
  assetIds: ids, expectedState: impact.state, clearHistory: impact.history.undo + impact.history.redo > 0,
}));

export interface ReferenceUploadResult { asset: (ProjectAsset & ReferenceAsset) | null; matches: (ProjectAsset & ReferenceAsset)[]; reused: boolean }
export function uploadReference(scope: string, id: string, file: File, options: { reuseId?: string; targetNodeId?: string } = {}) {
  return request<ReferenceUploadResult>(`/data/${scope}/assets/${id}`, {
    method: 'PUT', body: file, headers: { 'Content-Type': 'application/octet-stream',
      'X-Asset-Name': encodeURIComponent(file.name), ...(options.reuseId ? { 'X-Reuse-Asset-Id': options.reuseId } : {}),
      ...(options.targetNodeId ? { 'X-Target-Node-Id': options.targetNodeId } : {}) },
  });
}

export async function loadAsset(scope: string, id: string, signal?: AbortSignal): Promise<Blob> {
  try {
    const response = await fetch(`/api/data/${scope}/assets/${id}`, { signal, headers: { 'X-MuseShow-Request': '1', 'X-MuseShow-Session': sessionId } });
    if (!response.ok) throw await responseError(response);
    return await response.blob();
  } catch (failure) {
    if (signal?.aborted || failure instanceof ApiError) throw failure;
    throw new ApiError('素材读取中断，请检查本地服务连接。', null, 'network_error');
  }
}
