import type { ProjectAsset } from '../assets/types';

export const TRACKS = ['visual', 'original', 'narration'] as const;
export type Track = typeof TRACKS[number];
export type AudioTrack = Exclude<Track, 'visual'>;
export const TRACK_LABELS: Record<Track, string> = { visual: '视频 / 图片', original: '视频原声', narration: '独立旁白' };
export interface TimelineClip {
  id: string; shotId: string; title: string; assetId: string;
  kind: 'image' | 'video' | 'audio'; track: Track;
  startFrame: number; durationFrames: number; sourceInFrame: number; sourceOutFrame: number | null; muted: boolean; muteOverride: boolean;
}
export interface TimelineState {
  version: 1; revision: number; frameRate: 30; sourceStoryboardRevision: number | null;
  trackMutes: Record<AudioTrack, boolean>; clips: TimelineClip[];
}
export interface PreviewShot { shotId: string; number: number; title: string; available: boolean; problems: string[]; startFrame: number | null; durationFrames: number | null }
export interface TimelinePreview { partial: boolean; availableShots: number; totalShots: number; durationFrames: number; shots: PreviewShot[] }
export interface TimelineSnapshot { preview: TimelinePreview; timeline: TimelineState; assets: ProjectAsset[]; storyboardRevision: number; problems: string[]; warnings: string[]; probes: { id: string; revision: number }[] }
export const endFrame = (clip: TimelineClip) => clip.startFrame + clip.durationFrames;
export function timeLabel(frame: number, fps = 30) {
  const seconds = Math.max(0, Math.round(frame / fps * 100) / 100);
  return `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toFixed(2).padStart(5, '0')}`;
}
