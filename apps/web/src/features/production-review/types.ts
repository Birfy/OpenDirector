import type { AssetVersion } from './VersionHistory';
import type { ProjectAsset } from '../assets/types';
import type { CanvasNode, GenerationTask } from '../canvas/types';
import type { Shot } from '../storyboard/types';

export interface StepReview {
  plan: { id: string; revision: number; title: string; status: string; error: string | null };
  step: { id: string; nodeId: string; shotId: string; title: string; kind: 'image' | 'video' | 'audio'; prompt: string; referenceIds: string[]; videoMode?: 'first_frame' | 'reference' | 'continuation'; dependency: string | null; assetId: string | null; taskId: string | null; status: string; attempt: number; needsReview: boolean };
  node: CanvasNode | null;
  shot: Shot | null;
  modelName: string;
  history: AssetVersion[];
  assets: ProjectAsset[];
  tasks: (Pick<GenerationTask, 'id' | 'assetId' | 'status' | 'error' | 'technicalCheck' | 'canvasAdoption' | 'storyboardAdoption' | 'recovery' | 'resumeAllowed'> & { prompt: string; referenceIds: string[]; referenceFingerprints?: Record<string, string>; scriptBasis?: { assetId: string | null; fingerprint: string | null } | null })[];
  feedback: { id: string; assetId: string | null; fingerprint: string | null; decision: string; feedback: string; createdAt: string }[];
  versions: { expectedRevision: number; expectedShotRevision: number | null; expectedNodeRevision: number | null };
}
