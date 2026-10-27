import { useCallback, useEffect, useRef, useState } from 'react';
import type { TimelineClip, TimelineState } from './types';
import { endFrame } from './types';
import { useTimelineSources } from './useTimelineSources';

type Phase = 'paused' | 'preparing' | 'seeking' | 'playing' | 'buffering' | 'ended';
type MediaKind = 'video' | 'image' | 'narration';
type MediaNode = HTMLVideoElement | HTMLImageElement | HTMLAudioElement;
type Slot = Partial<Record<MediaKind, MediaNode>>;
interface Runtime { wanted: boolean; epoch: number; starting: Promise<void> | null; checkAt: number; driftSince: number; correctedAt: number; correcting: boolean }
const WAIT_LABELS = { preparing: '正在准备镜头…', seeking: '正在定位…', buffering: '正在缓冲，音画同步暂停…' };

/** Video or spoken audio is the master clock; silent stills use wall time. */
export function useTimelinePlayer(projectId: string, state: TimelineState, enabled: boolean) {
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [phase, setPhase] = useState<Phase>('paused');
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [retryable, setRetryable] = useState(false);
  const slots = useRef(new Map<string, Slot>());
  const runtimes = useRef(new WeakMap<HTMLMediaElement, Runtime>());
  const clock = useRef({ seconds: 0, running: false, last: 0, epoch: 0, activeId: '', alignedStart: false, phase: 'paused' as Phase });
  const visuals = state.clips.filter(clip => clip.track === 'visual');
  const totalFrames = visuals.length ? endFrame(visuals[visuals.length - 1]) : 0;
  const index = visuals.findIndex(clip => frame >= clip.startFrame && frame < endFrame(clip));
  const visual = visuals[index < 0 ? visuals.length - 1 : index];
  const next = index >= 0 ? visuals[index + 1] : undefined;
  const shots = enabled ? [visual, next].filter((clip): clip is TimelineClip => !!clip) : [];
  const ids = state.clips.filter(clip => shots.some(shot => shot.shotId === clip.shotId)).map(clip => clip.assetId);
  const { sources, retry: retrySources } = useTimelineSources(projectId, ids);
  const current = useRef({ state, visuals, totalFrames, sources, enabled });
  current.current = { state, visuals, totalFrames, sources, enabled };
  const sequence = state.clips.map(clip => `${clip.id}:${clip.assetId}:${clip.startFrame}:${clip.durationFrames}:${clip.sourceInFrame}`).join(',');

  const register = useCallback((id: string, kind: MediaKind, node: MediaNode | null) => {
    const slot = slots.current.get(id) ?? {};
    const previous = slot[kind];
    if (previous && previous !== node && previous instanceof HTMLMediaElement) previous.pause();
    if (node) { slot[kind] = node; slots.current.set(id, slot); }
    else { delete slot[kind]; if (!Object.keys(slot).length) slots.current.delete(id); }
  }, []);
  function runtime(element: HTMLMediaElement) {
    let value = runtimes.current.get(element);
    if (!value) {
      value = { wanted: false, epoch: -1, starting: null, checkAt: 0, driftSince: 0, correctedAt: 0, correcting: false };
      runtimes.current.set(element, value);
    }
    return value;
  }
  function changePhase(value: Phase) {
    if (clock.current.phase !== value) { clock.current.phase = value; setPhase(value); }
  }
  function pauseMedia() {
    for (const slot of slots.current.values()) for (const element of Object.values(slot)) {
      if (element instanceof HTMLMediaElement) { if (!element.paused) element.pause(); if (element.playbackRate !== 1) element.playbackRate = 1; }
    }
  }
  function position(seconds: number) {
    clock.current.seconds = Math.max(0, Math.min(seconds, current.current.totalFrames / current.current.state.frameRate));
    setFrame(Math.min(current.current.totalFrames, Math.floor(clock.current.seconds * current.current.state.frameRate + 1e-6)));
  }
  function pause() { clock.current.running = false; pauseMedia(); setPlaying(false); changePhase('paused'); }
  function fail(message: string, canRetry = false) { pause(); setError(message); setRetryable(canRetry); }
  function seek(value: number, reason: 'seeking' | 'preparing' = 'seeking') {
    pauseMedia(); clock.current.epoch++; clock.current.alignedStart = false; clock.current.activeId = ''; clock.current.last = performance.now();
    position(value / current.current.state.frameRate); setError('');
    if (value >= current.current.totalFrames) { pause(); changePhase('ended'); }
    else changePhase(reason);
  }
  function play() {
    if (!current.current.enabled || !current.current.totalFrames) return;
    if (clock.current.seconds * current.current.state.frameRate >= current.current.totalFrames) seek(0);
    clock.current.running = true; clock.current.alignedStart = false; clock.current.last = performance.now();
    setPlaying(true); setError(''); changePhase('preparing');
  }
  function finished(element: HTMLMediaElement, target: number) {
    return element.ended || Number.isFinite(element.duration) && target >= element.duration - 0.002;
  }
  function activeMedia(shot: TimelineClip) {
    const value = current.current;
    const slot = slots.current.get(shot.id);
    const at = clock.current.seconds * value.state.frameRate;
    const original = value.state.clips.find(clip => clip.track === 'original' && clip.shotId === shot.shotId);
    const narration = value.state.clips.find(clip => clip.track === 'narration' && clip.shotId === shot.shotId);
    const video = slot?.video as HTMLVideoElement | undefined;
    const audio = slot?.narration as HTMLAudioElement | undefined;
    if (video) { video.muted = !original || original.muted || value.state.trackMutes.original || clock.current.phase !== 'playing'; runtime(video).wanted = true; }
    const audible = narration && !narration.muted && !value.state.trackMutes.narration && at < endFrame(narration) - 1e-6;
    if (audio) {
      audio.muted = !audible || clock.current.phase !== 'playing'; runtime(audio).wanted = !!audible;
      if (!audible) { if (!audio.paused) audio.pause(); if (audio.playbackRate !== 1) audio.playbackRate = 1; runtime(audio).epoch = -1; }
    }
    return { slot, entries: [
      ...(shot.kind === 'video' ? [{ element: video, clip: shot }] : []),
      ...(audible ? [{ element: audio, clip: narration }] : []),
    ] };
  }
  function start(element: HTMLMediaElement, shotId: string) {
    const state = runtime(element);
    if (!element.paused || state.starting) return;
    const epoch = clock.current.epoch;
    const pending = element.play();
    state.starting = pending;
    void pending.then(() => {
      // A late play() must not revive a hidden view, removed shot or muted voice.
      if (!clock.current.running || !current.current.enabled || clock.current.activeId !== shotId || !state.wanted || !Object.values(slots.current.get(shotId) ?? {}).includes(element)) element.pause();
    }).catch(failure => {
      if (failure.name !== 'AbortError' && clock.current.running && clock.current.epoch === epoch) fail('播放失败，请检查媒体格式或重新点击播放。');
    }).finally(() => { if (state.starting === pending) state.starting = null; });
  }
  function correctNarration(element: HTMLMediaElement, target: number, now: number) {
    const state = runtime(element);
    if (now - state.checkAt < 200 || element.seeking) return;
    state.checkAt = now;
    const drift = element.currentTime - target;
    if (Math.abs(drift) < 0.06) { element.playbackRate = 1; state.driftSince = 0; }
    else if (Math.abs(drift) < 0.25) {
      element.playbackRate = drift > 0 ? 0.98 : 1.02; state.driftSince = 0;
    } else {
      state.driftSince ||= now;
      if (now - state.driftSince >= 500 && now - state.correctedAt >= 1000) {
        element.currentTime = target; element.playbackRate = 1;
        state.correcting = true; state.correctedAt = now; state.driftSince = 0;
      }
    }
  }

  useEffect(() => { pause(); seek(0, 'preparing'); }, [sequence]);
  useEffect(() => {
    setNotice('');
    if (!(phase in WAIT_LABELS)) return;
    const timer = window.setTimeout(() => setNotice(WAIT_LABELS[phase as keyof typeof WAIT_LABELS]), 250);
    return () => clearTimeout(timer);
  }, [phase]);
  useEffect(() => {
    if (!enabled) { pause(); return; }
    let token: number;
    clock.current.last = performance.now();
    const tick = (now: number) => {
      const value = current.current, transport = clock.current, fps = value.state.frameRate;
      const elapsed = Math.min((now - transport.last) / 1000, 0.1);
      transport.last = now;
      const at = transport.seconds * fps;
      const shot = value.visuals.find(clip => at + 1e-6 >= clip.startFrame && at < endFrame(clip) - 1e-6);
      if (shot) {
        if (transport.activeId !== shot.id) {
          pauseMedia(); transport.activeId = shot.id; transport.epoch++; transport.alignedStart = false;
          if (transport.phase !== 'seeking') changePhase('preparing');
        }
        const { slot, entries } = activeMedia(shot);
        const source = value.sources.get(shot.assetId);
        let ready = !!source?.url && !!slot;
        let failure = source?.error;
        if (shot.kind === 'image') {
          const image = slot?.image as HTMLImageElement | undefined;
          ready = ready && image?.getAttribute('src') === source?.url && !!image?.complete && !!image.naturalWidth;
          if (source?.url && image?.getAttribute('src') === source.url && image.complete && !image.naturalWidth) failure ||= '图片无法预览。';
        }
        for (const { element, clip } of entries) {
          const media = value.sources.get(clip.assetId);
          failure ||= media?.error || (element?.getAttribute('src') === media?.url && element?.error ? '媒体无法解码，请检查格式。' : '');
          if (!media?.url || !element || element.getAttribute('src') !== media.url || element.readyState < 1) { ready = false; continue; }
          const target = Math.max(0, (at - clip.startFrame + clip.sourceInFrame) / fps);
          const state = runtime(element);
          if (state.epoch !== transport.epoch) {
            state.epoch = transport.epoch; state.correcting = false; state.driftSince = 0;
            if (Math.abs(element.currentTime - target) > 0.025 || element.ended && target < element.duration - 0.002) element.currentTime = Math.min(target, element.duration || target);
          }
          if (finished(element, target)) { if (!element.paused) element.pause(); continue; }
          if (state.correcting && !element.seeking && element.readyState >= 3) state.correcting = false;
          // A rare correction of the follower does not stop the video master.
          if (!(state.correcting && now - state.correctedAt < 1500) && (element.seeking || element.readyState < 3)) ready = false;
        }
        if (failure) {
          const failed = [source, ...entries.map(({ clip }) => value.sources.get(clip.assetId))].filter(item => item?.error);
          fail(`${shot.title}：${failure}`, failed.length > 0 && failed.every(item => item?.retryable));
        }
        else if (!ready) {
          if (transport.phase === 'playing') {
            pauseMedia(); transport.epoch++; transport.alignedStart = false; changePhase('buffering');
          }
        } else if (!transport.running) {
          pauseMedia(); changePhase('paused');
        } else {
          for (const { element, clip } of entries) {
            const target = Math.max(0, (at - clip.startFrame + clip.sourceInFrame) / fps);
            if (element && !finished(element, target)) start(element, shot.id);
          }
          const started = entries.every(({ element, clip }) => element && (finished(element, Math.max(0, (at - clip.startFrame + clip.sourceInFrame) / fps)) || !element.paused && !runtime(element).starting));
          if (started && !transport.alignedStart) {
            // Keep preroll silent and align once after all play() requests settle.
            // Decoder startup may advance one channel while another is starting.
            transport.alignedStart = true;
            for (const { element, clip } of entries) {
              const target = Math.max(0, (at - clip.startFrame + clip.sourceInFrame) / fps);
              if (element && !finished(element, target) && Math.abs(element.currentTime - target) > 0.06) element.currentTime = target;
            }
          } else if (started) {
            changePhase('playing'); activeMedia(shot);
            const video = slot?.video as HTMLVideoElement | undefined;
            const voice = entries.find(entry => entry.clip.track === 'narration');
            const master = video ?? voice?.element;
            const masterClip = video ? shot : voice?.clip;
            let seconds = transport.seconds + elapsed;
            if (master && masterClip) {
              const local = Math.max(0, transport.seconds - masterClip.startFrame / fps + masterClip.sourceInFrame / fps);
              const native = masterClip.startFrame / fps + Math.max(0, master.currentTime - masterClip.sourceInFrame / fps);
              seconds = finished(master, local) ? Math.max(seconds, native) : native;
            }
            position(Math.min(seconds, endFrame(shot) / fps));
            if (video && voice?.element && !voice.element.paused) correctNarration(voice.element, Math.max(0, seconds - voice.clip.startFrame / fps + voice.clip.sourceInFrame / fps), now);
            if (seconds * fps + 1e-6 >= value.totalFrames) { pause(); position(value.totalFrames / fps); changePhase('ended'); }
          }
        }
      }
      token = requestAnimationFrame(tick);
    };
    token = requestAnimationFrame(tick);
    const visibility = () => { if (document.hidden) pause(); };
    document.addEventListener('visibilitychange', visibility);
    return () => { cancelAnimationFrame(token); pause(); clock.current.epoch++; document.removeEventListener('visibilitychange', visibility); };
  }, [enabled]);
  return { frame, playing, notice, phase, error, visual, shots, sources, totalFrames, register, seek, play, pause,
    retryable, retry: () => { pause(); clock.current.epoch++; setError(''); retrySources(); }, fail };
}
export type TimelinePlayer = ReturnType<typeof useTimelinePlayer>;
