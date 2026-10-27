import type { ReferenceContent } from '../references/content';
import type { ProjectAsset } from '../assets/types';
export type NodeKind = 'text' | 'image' | 'video' | 'audio';
export type NodeRole = 'empty' | 'material' | 'generation';
export const NODE_LABELS: Record<NodeKind, string> = { text: '文本', image: '图片', video: '视频', audio: '音频' };
export const NODE_SIZE = { width: 320, height: 263 };
export const CANVAS_LIMIT = 1_000_000;
export const MIN_ZOOM = .0001;
export interface CanvasLayout { rows: Record<NodeKind, number>; nextSlots: Record<NodeKind, number> }
export interface CanvasHistoryEntry { id: string; label: string }
export interface CanvasState { version: 1; revision: number; nodes: CanvasNode[]; knownAssetIds: string[]; layout: CanvasLayout; history: { undo: CanvasHistoryEntry | null; redo: CanvasHistoryEntry | null } }

export interface CanvasNode {
  id: string; kind: NodeKind; role: NodeRole; x: number; y: number; title: string; prompt: string; promptContent?: ReferenceContent | null; draft: string | null;
  videoMode: 'first_frame' | 'reference' | 'continuation';
  modelConfigId: string | null; referenceIds: string[]; assetIds: string[]; assetId: string | null; taskId: string | null; revision: number;
}
export interface GenerationTask {
  id: string; projectId: string; nodeId: string; kind: NodeKind;
  videoMode?: 'first_frame' | 'reference' | 'continuation';
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled' | 'interrupted';
  assetId: string | null; adopted: boolean; error: string | null; externalTaskId: string | null;
  phase?: 'queued' | 'prepare' | 'submit' | 'poll' | 'download' | 'save' | 'adopt' | 'complete' | null; createdAt?: string;
  resumeAllowed?: boolean; recovery?: 'submit' | 'remote' | 'download' | 'local' | 'review' | 'retry' | 'done' | null;
  productionPlanId?: string | null; productionStepId?: string | null; shotId?: string | null;
  technicalCheck?: { status: 'passed' | 'failed'; facts: Record<string, string | number | boolean>; message: string; humanReviewRequired: boolean } | null;
  canvasAdoption?: { status: 'adopted' | 'candidate'; reason: string | null; message: string } | null;
  storyboardAdoption?: GenerationTask['canvasAdoption'];
}
export interface CanvasEdge { sourceId: string; targetId: string; state: 'current' | 'pending'; recorded: boolean; assetId: string | null; usedAssetId: string | null }
export interface CanvasSnapshot { edges: CanvasEdge[]; inputChanges: string[]; availableAssetIds: string[]; visibleAssetIds?: string[]; referenceSources?: Pick<CanvasNode, 'id' | 'title' | 'assetId'>[]; listedAssetIds: string[]; canvas: CanvasState; assets: ProjectAsset[]; tasks: GenerationTask[] }
export function canvasReferenceAssets(snapshot?: CanvasSnapshot | null) {
  if (!snapshot) return [];
  return (snapshot.referenceSources ?? snapshot.canvas.nodes).flatMap(node => {
    const asset = snapshot.assets.find(item => item.id === node.assetId);
    return asset && snapshot.availableAssetIds.includes(asset.id) ? [{ ...asset, nodeId: node.id, nodeTitle: node.title }] : [];
  });
}
export type NodeChanges = Partial<Pick<CanvasNode, 'x' | 'y' | 'title' | 'prompt' | 'promptContent' | 'videoMode' | 'draft' | 'modelConfigId' | 'referenceIds' | 'assetId'>>;
