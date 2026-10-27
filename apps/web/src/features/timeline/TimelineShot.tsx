import { useCallback } from 'react';
import type { TimelineClip } from './types';
import type { TimelinePlayer } from './useTimelinePlayer';

/** Stable shot keys promote the prepared next shot without replacing its media. */
export function TimelineShot({ shot, narration, active, muted, sources, register }: {
  shot: TimelineClip; narration?: TimelineClip; active: boolean; muted: boolean;
  sources: TimelinePlayer['sources']; register: TimelinePlayer['register'];
}) {
  const video = useCallback((node: HTMLVideoElement | null) => register(shot.id, 'video', node), [register, shot.id]);
  const image = useCallback((node: HTMLImageElement | null) => register(shot.id, 'image', node), [register, shot.id]);
  const audio = useCallback((node: HTMLAudioElement | null) => register(shot.id, 'narration', node), [register, shot.id]);
  const src = sources.get(shot.assetId)?.url;
  return <span className="timeline-shot" hidden={!active} data-shot-id={shot.id} data-active={active}>
    {shot.kind === 'video'
      ? <video ref={video} data-clip-id={shot.id} src={src} muted={!active || muted} playsInline preload="auto" aria-label={active ? '时间线画面' : '下一镜头画面'} />
      : <img ref={image} src={src} alt={shot.title} />}
    {narration && <audio ref={audio} data-clip-id={narration.id} src={sources.get(narration.assetId)?.url} preload="auto" aria-label={active ? '时间线独立旁白' : '下一镜头旁白'} />}
  </span>;
}
