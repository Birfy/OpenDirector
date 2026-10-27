import type { ProjectAsset } from '../assets/types';

export const MEDIA_ROLES = ['visual', 'audio'] as const;
export type MediaRole = typeof MEDIA_ROLES[number];
export const ROLE_LABELS: Record<MediaRole, string> = { visual: '镜头画面', audio: '旁白' };
export interface Shot {
  id: string; revision: number; title: string; description: string;
  candidates: Record<MediaRole, string[]>;
  selected: Record<MediaRole, string | null>;
  originalAudioMode: 'keep' | 'mute';
  legacyVisualChoices: string[];
}
export type ShotFields = Pick<Shot, 'title' | 'description'>;
export interface StoryboardState { version: 2; revision: number; orderRevision: number; shots: Shot[] }
export interface StoryboardSnapshot { availableAssetIds: string[]; storyboard: StoryboardState; assets: ProjectAsset[] }
export interface ShotContext { id: string; title: string; number: number }
export type ShotStatus = 'empty' | 'pending' | 'adopted';
export const STATUS_LABELS: Record<ShotStatus, string> = { empty: '待制作', pending: '待采用', adopted: '已采用' };
export function shotStatus(shot: Shot, assets: ReadonlyMap<string, ProjectAsset>, availableAssetIds: string[]): ShotStatus {
  if (shot.selected.visual && assets.has(shot.selected.visual)) return 'adopted';
  return shot.candidates.visual.some(id => assets.has(id) && availableAssetIds.includes(id)) ? 'pending' : 'empty';
}
export function previewAsset(shot: Shot, assets: ReadonlyMap<string, ProjectAsset>) {
  return shot.selected.visual ? assets.get(shot.selected.visual) : undefined;
}
export function seconds(milliseconds: number) { return Number((milliseconds / 1000).toFixed(3)).toString(); }
export function visualDurationLabel(asset?: ProjectAsset) {
  if (asset?.kind === 'image') return '静态图片';
  if (asset?.kind === 'video') return asset.durationMs != null && asset.durationMs > 0 ? `${seconds(asset.durationMs)} 秒` : '时长未知';
  return '未采用画面';
}
