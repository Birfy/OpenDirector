import { useCallback, useEffect, useRef, useState } from 'react';

// Keep media ownership local to this canvas. Pausing also invalidates pending
// play promises, so a late load cannot restart a preview after the pointer left.
export function useCanvasPlayback(active: boolean) {
  const elements = useRef(new Map<HTMLMediaElement, { playing: boolean }>());
  const available = useRef(active); available.current = active;
  const blockers = useRef(new Set<string>());
  const [blocked, setBlocked] = useState(false);
  const pause = useCallback((element: HTMLMediaElement) => {
    if (elements.current.has(element)) elements.current.set(element, { playing: false });
    element.pause();
  }, []);
  const pauseAll = useCallback(() => elements.current.forEach((_, element) => pause(element)), [pause]);
  const register = useCallback((element: HTMLMediaElement) => {
    elements.current.set(element, { playing: false });
    return () => { pause(element); elements.current.delete(element); };
  }, [pause]);
  const blockPreview = useCallback((id: string, value: boolean) => {
    if (value) { blockers.current.add(id); pauseAll(); }
    else blockers.current.delete(id);
    setBlocked(blockers.current.size > 0);
  }, [pauseAll]);
  const play = useCallback(async (element: HTMLMediaElement, preview = false) => {
    if (!available.current || (preview && (blockers.current.size > 0 || document.querySelector('dialog[open]')))) return;
    // Muted video previews can coexist with deliberate audio playback. Starting
    // audio replaces other audio; a full player takes ownership via pauseAll.
    elements.current.forEach((_, other) => {
      if (other !== element && (preview ? other.tagName === 'VIDEO' : other.tagName === 'AUDIO')) pause(other);
    });
    const request = { playing: true };
    elements.current.set(element, request);
    if (element.ended) element.currentTime = 0;
    try {
      await element.play();
      if (!available.current || !elements.current.get(element)?.playing || (preview && blockers.current.size > 0)) element.pause();
    } catch (error) {
      if (elements.current.get(element) === request && (error as DOMException).name !== 'AbortError') throw error;
    }
  }, [pause]);
  useEffect(() => { if (!active) pauseAll(); }, [active, pauseAll]);
  useEffect(() => pauseAll, [pauseAll]);
  return { previewEnabled: active && !blocked, register, pause, pauseAll, play, blockPreview };
}

export type CanvasPlayback = ReturnType<typeof useCanvasPlayback>;
