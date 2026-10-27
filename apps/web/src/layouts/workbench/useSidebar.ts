import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';

const COLLAPSE_THRESHOLD = 120;
const MAX_WIDTH = 360;
const DEFAULT_WIDTH = 260;
const LAYOUT_KEY = 'museshow.sidebar.v1';

function readLayout() {
  try {
    const value = JSON.parse(localStorage.getItem(LAYOUT_KEY) ?? 'null');
    const width = typeof value?.width === 'number' && Number.isFinite(value.width) && value.width > 0
      ? Math.min(MAX_WIDTH, value.width) : DEFAULT_WIDTH;
    return {
      width: width > COLLAPSE_THRESHOLD ? width : DEFAULT_WIDTH,
      collapsed: value?.collapsed === true || width <= COLLAPSE_THRESHOLD,
    };
  } catch { return { width: DEFAULT_WIDTH, collapsed: false }; }
}

export function useSidebar() {
  const [layout, setLayout] = useState(readLayout);
  const [dragging, setDragging] = useState(false);
  const [mobile, setMobile] = useState(() => window.innerWidth <= 700);
  const hideRef = useRef<HTMLButtonElement>(null);
  const showRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef<{ x: number; width: number } | null>(null);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 700px)');
    const change = () => setMobile(query.matches);
    query.addEventListener('change', change);
    return () => query.removeEventListener('change', change);
  }, []);
  useEffect(() => {
    try { localStorage.setItem(LAYOUT_KEY, JSON.stringify(layout)); }
    catch { /* The layout remains usable without browser storage. */ }
  }, [layout]);
  useEffect(() => {
    document.body.classList.toggle('resizing-sidebar', dragging);
    return () => document.body.classList.remove('resizing-sidebar');
  }, [dragging]);

  function stopResize() { dragRef.current = null; setDragging(false); }
  function toggle() {
    const collapsed = !layout.collapsed;
    stopResize();
    setLayout(current => ({ ...current, collapsed }));
    requestAnimationFrame(() => (collapsed ? showRef : hideRef).current?.focus());
  }
  function resize(width: number, restoreWidth = layout.width) {
    if (width <= COLLAPSE_THRESHOLD) {
      // Reopening restores the width from before the drag.
      stopResize();
      setLayout({ width: restoreWidth, collapsed: true });
      requestAnimationFrame(() => showRef.current?.focus());
      return;
    }
    setLayout(current => ({ ...current, width: Math.min(MAX_WIDTH, width) }));
  }
  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { x: event.clientX, width: layout.width };
    setDragging(true);
  }
  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (dragRef.current) resize(dragRef.current.width + event.clientX - dragRef.current.x, dragRef.current.width);
  }
  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const width = event.key === 'Home' ? 0 : event.key === 'End' ? MAX_WIDTH
      : event.key === 'ArrowLeft' ? layout.width - 10
      : event.key === 'ArrowRight' ? Math.min(MAX_WIDTH, layout.width + 10) : null;
    if (width === null) return;
    event.preventDefault();
    resize(width);
  }

  return {
    ...layout, dragging, mobile, maxWidth: MAX_WIDTH, hideRef, showRef, toggle,
    resizer: {
      onPointerDown, onPointerMove, onKeyDown,
      onPointerUp: stopResize, onPointerCancel: stopResize, onLostPointerCapture: stopResize,
      onDoubleClick: () => setLayout(current => ({ ...current, width: DEFAULT_WIDTH })),
    },
  };
}

export type SidebarControls = ReturnType<typeof useSidebar>;
