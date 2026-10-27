export interface Attachment { id: string; name: string; type: string; size: number; fingerprint: string }
export type AssetPurpose = 'reference' | 'document' | 'character' | 'scene' | 'keyframe' | 'shot_video' | 'narration' | 'music' | 'sound_effect';
interface AssetBase extends Attachment {
  schemaVersion: 1;
  projectId: string | null;
  path: string;
  createdAt: string | null;
  source: 'upload' | 'manual' | 'generated' | 'legacy';
  scope: 'project' | 'attachment';
  revision: number;
  purpose: AssetPurpose;
  referenceIds: string[];
  fingerprintAliases?: string[];
  generationTaskId: string | null;
  modelConfigId: string | null;
  agentRunId: string | null;
  productionPlanId?: string | null;
  productionStepId?: string | null;
  shotId?: string | null;
}
export type ProjectAsset = AssetBase & (
  { kind: 'text'; format: 'plain' | 'markdown'; encoding: 'utf-8' | null } |
  { kind: 'image'; width: number | null; height: number | null } |
  { kind: 'video'; width: number | null; height: number | null; durationMs: number | null; frameRate: number | null; hasAudio: boolean | null } |
  { kind: 'audio'; durationMs: number | null; sampleRate: number | null; channels: number | null } |
  { kind: 'other' }
);
export function attachment(asset: Attachment): Attachment {
  return { id: asset.id, name: asset.name, type: asset.type, size: asset.size, fingerprint: asset.fingerprint };
}
export const ACCEPT_BY_KIND = { text: '.txt,.md', image: '.png,.jpg,.jpeg,.gif,.webp', video: '.mp4,.mov,.webm', audio: '.mp3,.wav,.m4a,.ogg,.flac' };
export const IMPORT_ACCEPT = Object.values(ACCEPT_BY_KIND).join(',');
