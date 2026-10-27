import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
const KEY = 'museshow.assistant-layout.v1';
const DEFAULT_WIDTH = 420;
const MAX_WIDTH = 720;
const COLLAPSE_AT = 200;
function readLayout() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    const width = typeof value?.width === 'number' && Number.isFinite(value.width) && value.width > 0 ? Math.min(value.width, MAX_WIDTH) : DEFAULT_WIDTH;
    return { width: width > COLLAPSE_AT ? width : DEFAULT_WIDTH, collapsed: value?.collapsed === true || width <= COLLAPSE_AT };
  } catch { return { width: DEFAULT_WIDTH, collapsed: false }; }
}
export function useAssistantPanel(leftWidth: number) {
  const [layout, setLayout] = useState(readLayout);
  const [viewport, setViewport] = useState(window.innerWidth);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x: number; width: number; restore: number } | null>(null);
  const hideRef = useRef<HTMLButtonElement>(null);
  const showRef = useRef<HTMLButtonElement>(null);
  const mobile = viewport <= 700;
  const available = Math.min(MAX_WIDTH, viewport - (mobile ? 48 : leftWidth + 100));
  const width = Math.min(layout.width, available);
  useEffect(() => {
    const resize = () => { setViewport(window.innerWidth); drag.current = null; setDragging(false); };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(layout)); } catch { /* Keep usable without storage. */ } }, [layout]);
  useEffect(() => {
    document.body.classList.toggle('resizing-assistant', dragging);
    return () => document.body.classList.remove('resizing-assistant');
  }, [dragging]);
  function stop() { drag.current = null; setDragging(false); }
  function toggle() {
    const collapsed = !layout.collapsed;
    stop();
    setLayout(current => ({ ...current, collapsed }));
    requestAnimationFrame(() => (collapsed ? showRef : hideRef).current?.focus());
  }
  function resize(next: number, restore = layout.width) {
    if (next <= COLLAPSE_AT) {
      stop(); setLayout({ width: restore, collapsed: true });
      requestAnimationFrame(() => showRef.current?.focus());
    } else setLayout(current => ({ ...current, width: Math.min(next, available) }));
  }
  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, width, restore: layout.width };
    setDragging(true);
  }
  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (drag.current) resize(drag.current.width + drag.current.x - event.clientX, drag.current.restore);
  }
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? available : event.key === 'ArrowLeft' ? width + 10 : event.key === 'ArrowRight' ? width - 10 : null;
    if (next !== null) { event.preventDefault(); resize(next); }
  }
  return {
    collapsed: layout.collapsed, width, maxWidth: available, gridWidth: mobile || layout.collapsed ? 0 : width,
    dragging, mobile, hideRef, showRef, toggle,
    resizer: { onPointerDown, onPointerMove, onPointerUp: stop, onPointerCancel: stop, onLostPointerCapture: stop, onKeyDown,
      onDoubleClick: () => setLayout(current => ({ ...current, width: DEFAULT_WIDTH })) },
  };
}
export type AssistantPanelControls = ReturnType<typeof useAssistantPanel>;
