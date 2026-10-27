import { useEffect, useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import type { NodeDetails } from './useNodeDetails';

export function NodeDetailsPanel({ id, title, anchor, details, busy, blocked, compact = false, onClose, children }: {
  id: string; title: string; anchor: RefObject<HTMLElement | null>; details: NodeDetails;
  busy: boolean; blocked: boolean; compact?: boolean; onClose: () => void; children: ReactNode;
}) {
  const panel = useRef<HTMLDivElement>(null);
  const latest = useRef({ onClose, busy, blocked });
  latest.current = { onClose, busy, blocked };
  const [position, setPosition] = useState({ left: 0, top: 0 });
  function place() {
    if (!anchor.current || !panel.current) return;
    const rect = anchor.current.getBoundingClientRect();
    const width = panel.current.offsetWidth, height = panel.current.offsetHeight;
    const right = window.innerWidth - rect.right - 8, left = rect.left - 8;
    const preferred = right >= width || right >= left ? rect.right + 8 : rect.left - width - 8;
    const next = { left: Math.max(12, Math.min(preferred, window.innerWidth - width - 12)),
      top: Math.max(12, Math.min(rect.top, window.innerHeight - height - 12)) };
    setPosition(old => old.left === next.left && old.top === next.top ? old : next);
  }
  useLayoutEffect(() => { place(); });
  useEffect(() => {
    const observer = new ResizeObserver(place);
    observer.observe(panel.current!);
    observer.observe(anchor.current!);
    window.addEventListener('resize', place);
    window.addEventListener('scroll', place, true);
    return () => { observer.disconnect(); window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); };
  }, [anchor]);
  useEffect(() => {
    let crossing = false;
    const transit = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !anchor.current || !panel.current) return;
      const element = event.target instanceof Element ? event.target : null;
      const inside = event.target instanceof Node && (anchor.current.contains(event.target) || panel.current.contains(event.target));
      let inTransit = element?.closest<HTMLElement>('.canvas-reference-port')?.dataset.referenceSource === id;
      // Ordinary movement inside either surface needs no layout measurements.
      if (!inside && !inTransit && !element?.closest('[data-node-id]')) {
        const node = anchor.current.getBoundingClientRect(), popup = panel.current.getBoundingClientRect();
        const left = popup.right <= node.left ? popup.right : node.right;
        const right = popup.right <= node.left ? node.left : popup.left;
        inTransit = left <= right && event.clientX >= left && event.clientX <= right
          && event.clientY >= Math.min(node.top, popup.top) && event.clientY <= Math.max(node.bottom, popup.bottom);
      }
      // Keep the hover corridor and its source port usable without an input-blocking overlay.
      if (inTransit && !crossing) details.enter(id);
      else if (!inTransit && crossing && !inside) details.leave(id);
      crossing = inTransit;
    };
    document.addEventListener('pointermove', transit);
    document.addEventListener('pointerover', transit);
    return () => {
      document.removeEventListener('pointermove', transit);
      document.removeEventListener('pointerover', transit);
      if (crossing) details.leave(id);
    };
  }, [anchor, id, details.enter, details.leave]);
  useEffect(() => {
    if (details.focusRequest) panel.current?.focus({ preventScroll: true });
  }, [details.focusRequest]);
  useLayoutEffect(() => {
    const element = panel.current!;
    return () => {
      if (element.contains(document.activeElement)) anchor.current?.querySelector<HTMLButtonElement>('.canvas-node-header button')?.focus({ preventScroll: true });
    };
  }, [anchor]);
  useEffect(() => {
    const canClose = () => !latest.current.busy && !latest.current.blocked && !document.querySelector('dialog[open]') && !panel.current?.querySelector('.reference-editor[aria-expanded="true"]');
    const outside = (event: PointerEvent) => {
      // Acting on another node's feedback must not trigger this editor's autosave.
      if (event.target instanceof Element && event.target.closest('.canvas-notices')) return;
      if (event.target instanceof Node && !panel.current?.contains(event.target) && !anchor.current?.contains(event.target) && canClose()) latest.current.onClose();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.isComposing || (event.target instanceof Element && event.target.closest('.canvas-text-content.is-editing'))) return;
      if (event.key === 'Escape' && !event.defaultPrevented && canClose()) {
        event.preventDefault(); event.stopPropagation(); latest.current.onClose();
      }
    };
    document.addEventListener('pointerdown', outside, true);
    document.addEventListener('keydown', escape, true);
    return () => { document.removeEventListener('pointerdown', outside, true); document.removeEventListener('keydown', escape, true); };
  }, [anchor]);
  return createPortal(<div ref={panel} role="dialog" aria-modal="false" aria-label={title} tabIndex={-1}
    className={`canvas-details-panel${compact ? ' is-compact' : ''}`} style={position} onPointerEnter={() => details.enter(id)} onPointerLeave={() => details.leave(id)}
    onFocusCapture={() => details.pin(id)} onPointerDown={event => { event.stopPropagation(); details.pin(id); }}
    onClick={event => event.stopPropagation()} onDoubleClick={event => event.stopPropagation()}
    onKeyDown={event => event.stopPropagation()} onContextMenu={event => event.stopPropagation()}>
    {children}
  </div>, document.body);
}
