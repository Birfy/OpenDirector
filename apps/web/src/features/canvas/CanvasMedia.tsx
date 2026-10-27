import { useEffect, useRef, useState, type RefObject } from 'react';
import { Icon } from '../../components/Icon';
import type { CanvasPlayback } from './useCanvasPlayback';

function time(seconds: number) {
  const value = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`;
}

export function CanvasMedia({ kind, url, name, durationMs, playback, previewEnabled, onExpand, onSelect }: {
  kind: 'video' | 'audio'; url: string; name: string; durationMs?: number | null;
  playback: CanvasPlayback; previewEnabled: boolean; onExpand: () => void; onSelect: () => void;
}) {
  const element = useRef<HTMLMediaElement>(null);
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState((durationMs ?? 0) / 1000);
  const [error, setError] = useState('');
  const { register, pause, play } = playback;
  useEffect(() => {
    const media = element.current!;
    setError(''); setPosition(0); setPlaying(false); setDuration((durationMs ?? 0) / 1000);
    return register(media);
  }, [url, register, durationMs]);
  useEffect(() => {
    if (kind !== 'video') return;
    const media = element.current!;
    if (!hovered || !previewEnabled) { pause(media); return; }
    const timer = window.setTimeout(() => {
      media.muted = true;
      void play(media, true).catch(() => setError('预览未能播放，双击查看完整视频。'));
    }, 300);
    return () => { clearTimeout(timer); pause(media); };
  }, [kind, hovered, previewEnabled, url, pause, play]);
  const events = {
    onPlay: () => { setPlaying(true); setError(''); }, onPause: () => setPlaying(false),
    onEnded: () => setPlaying(false),
    onTimeUpdate: () => setPosition(element.current?.currentTime ?? 0),
    onLoadedMetadata: () => setDuration(element.current?.duration ?? 0),
    onError: () => { setPlaying(false); setError('媒体无法播放，请检查文件或在详情中重新上传。'); },
  };
  return <div className={`canvas-node-player${kind === 'audio' ? ' is-audio' : ''}`}>
    {kind === 'video' ? <div className="canvas-video-surface" data-canvas-open role="button" tabIndex={0} aria-label={`预览视频：${name}`} title="悬停静音预览，双击完整播放"
      // Require an actual pointer move. Closing a modal can synthesize enter
      // events on the surface underneath without the user hovering it again.
      onPointerMove={event => { if (event.pointerType !== 'touch' && !event.buttons) setHovered(true); }} onPointerLeave={() => setHovered(false)}
      onPointerDown={() => setHovered(false)}
      onDoubleClick={event => { event.stopPropagation(); setHovered(false); onExpand(); }}
      onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); setHovered(false); onExpand(); } }}>
      <video ref={element as RefObject<HTMLVideoElement>} src={url} muted playsInline preload="metadata" disablePictureInPicture {...events} />
      <span className="canvas-video-caption" aria-hidden="true">{playing ? '静音预览' : '双击播放'} · {time(duration)}</span>
    </div> : <>
      <audio ref={element as RefObject<HTMLAudioElement>} src={url} preload="metadata" {...events} />
      <button type="button" className="icon-button canvas-audio-toggle" aria-label={`${playing ? '暂停' : '播放'}音频：${name}`} onPointerDown={event => event.stopPropagation()} onDoubleClick={event => event.stopPropagation()}
        onClick={() => { onSelect(); const media = element.current!; if (!media.paused) pause(media); else void play(media).catch(() => setError('播放未能开始，请再次点击播放。')); }}><Icon name={playing ? 'pause' : 'play'} /></button>
      <span className="canvas-audio-time">{time(position)} / {time(duration)}</span>
      <span className="canvas-audio-progress" aria-hidden="true"><span style={{ width: `${duration > 0 ? Math.min(100, position / duration * 100) : 0}%` }} /></span>
    </>}
    {error && <span className="canvas-media-error" role="status">{error}</span>}
  </div>;
}

export function CanvasVideoPreview({ url, name, playback }: { url: string; name: string; playback: CanvasPlayback }) {
  const element = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const media = element.current!;
    const unregister = playback.register(media);
    void playback.play(media).catch(() => { /* Native controls remain available if autoplay is blocked. */ });
    return unregister;
  }, [url, playback.register, playback.play]);
  return <video ref={element} className="canvas-expanded-video" src={url} controls playsInline preload="metadata" aria-label={`完整播放视频：${name}`} />;
}
