import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { NODE_SIZE, type CanvasNode, type NodeKind } from './types';
import type { Point } from './selection';
import { edgeDirection, edgePath } from './edgePath';

export type PortSide = 'top' | 'right' | 'bottom' | 'left';
interface Bounds extends Point { width: number; height: number }
export function portPosition(bounds: Bounds, side: PortSide): Point {
  return { x: bounds.x + (side === 'left' ? 0 : side === 'right' ? bounds.width : bounds.width / 2),
    y: bounds.y + (side === 'top' ? 0 : side === 'bottom' ? bounds.height : bounds.height / 2) };
}
export function nearestPort(point: Point, nodes: CanvasNode[], sizeOf: (node: CanvasNode) => { width: number; height: number }, radius: number) {
  let nearest: { nodeId: string; side: PortSide; point: Point } | null = null;
  let distance = radius;
  for (const node of nodes) {
    if (!node.assetId || node.draft !== null) continue;
    for (const side of ['top', 'right', 'bottom', 'left'] as const) {
      const port = portPosition({ ...node, ...sizeOf(node) }, side);
      const delta = Math.hypot(point.x - port.x, point.y - port.y);
      if (delta <= distance) { distance = delta; nearest = { nodeId: node.id, side, point: port }; }
    }
  }
  return nearest;
}

function newNodeConnection(source: Bounds, end: Point) {
  const { horizontal, direction } = edgeDirection(source, { x: end.x - NODE_SIZE.width / 2, y: end.y - NODE_SIZE.height / 2, ...NODE_SIZE });
  // Anchor the edge facing the source at the pointer, even when cards overlap.
  const position = {
    x: end.x - (horizontal ? direction > 0 ? 0 : NODE_SIZE.width : NODE_SIZE.width / 2),
    y: end.y - (horizontal ? NODE_SIZE.height / 2 : direction > 0 ? 0 : NODE_SIZE.height),
  };
  return { position, path: edgePath(source, { ...position, ...NODE_SIZE }) };
}

export function useCanvasConnections({ nodes, sizeOf, world, zoom, disabled, connect, onBusy }: {
  nodes: CanvasNode[]; sizeOf: (node: CanvasNode) => { width: number; height: number }; world: (x: number, y: number) => Point;
  zoom: number; disabled: boolean;
  connect: (sourceId: string, targetId: string, creating?: { kind: NodeKind; x: number; y: number }) => Promise<unknown>;
  onBusy: (value: boolean) => void;
}) {
  const [port, setPort] = useState<ReturnType<typeof nearestPort>>(null);
  const [line, setLine] = useState<string | null>(null);
  const [menu, setMenu] = useState<{ sourceId: string; x: number; y: number; position: Point } | null>(null);
  const drag = useRef<{ pointerId: number; sourceId: string; side: PortSide; start: Point; clientX: number; clientY: number; moved: boolean } | null>(null);
  const handlers = useRef({ nodes, sizeOf, world, connect, onBusy }); handlers.current = { nodes, sizeOf, world, connect, onBusy };
  function cancel() { drag.current = null; setPort(null); setLine(null); setMenu(null); onBusy(false); }
  function hover(event: ReactPointerEvent) {
    if (disabled || drag.current || menu || event.buttons) return;
    if ((event.target as Element).closest('.canvas-details-panel,.canvas-toolbar,.canvas-selection-actions,dialog')) { setPort(null); return; }
    const next = nearestPort(world(event.clientX, event.clientY), nodes, sizeOf, 24 / zoom);
    setPort(old => old?.nodeId === next?.nodeId && old?.side === next?.side ? old : next);
  }
  function start(event: ReactPointerEvent<HTMLButtonElement>) {
    if (event.button !== 0 || disabled || !port) return;
    event.preventDefault(); event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { pointerId: event.pointerId, sourceId: port.nodeId, side: port.side, start: port.point, clientX: event.clientX, clientY: event.clientY, moved: false };
    setLine(null); onBusy(true);
  }
  useEffect(() => {
    function move(event: PointerEvent) {
      const current = drag.current; if (!current || current.pointerId !== event.pointerId) return;
      current.moved ||= Math.hypot(event.clientX - current.clientX, event.clientY - current.clientY) >= 4;
      const { nodes, sizeOf, world } = handlers.current;
      const source = nodes.find(node => node.id === current.sourceId);
      if (!source) { cancel(); return; }
      setLine(newNodeConnection({ ...source, ...sizeOf(source) }, world(event.clientX, event.clientY)).path);
    }
    function finish(event: PointerEvent) {
      const current = drag.current; if (!current || current.pointerId !== event.pointerId) return;
      drag.current = null; setPort(null); handlers.current.onBusy(false);
      const element = document.elementFromPoint(event.clientX, event.clientY);
      if (current.moved && (!element?.closest('.project-canvas') || element.closest('.canvas-toolbar,.canvas-selection-actions,.canvas-notice,.canvas-details-panel,dialog'))) { setLine(null); return; }
      const target = element?.closest<HTMLElement>('[data-node-id]')?.dataset.nodeId;
      if (current.moved && target) {
        setLine(null); void handlers.current.connect(current.sourceId, target).catch(() => {});
      } else {
        const { world, nodes, sizeOf } = handlers.current;
        const source = nodes.find(node => node.id === current.sourceId);
        if (!source) { setLine(null); return; }
        const bounds = { ...source, ...sizeOf(source) };
        const end = current.moved ? world(event.clientX, event.clientY) : {
          x: current.start.x + (current.side === 'left' ? -80 : current.side === 'right' ? 80 : 0),
          y: current.start.y + (current.side === 'top' ? -80 : current.side === 'bottom' ? 80 : 0),
        };
        const { position, path } = newNodeConnection(bounds, end);
        setLine(path);
        setMenu({ sourceId: source.id, x: event.clientX + 12, y: event.clientY + 12, position });
      }
    }
    function escape(event: KeyboardEvent) { if (event.key === 'Escape') cancel(); }
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', finish); window.addEventListener('pointercancel', cancel); window.addEventListener('blur', cancel); window.addEventListener('keydown', escape);
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', finish); window.removeEventListener('pointercancel', cancel); window.removeEventListener('blur', cancel); window.removeEventListener('keydown', escape); };
  }, []);
  useEffect(() => { if (disabled) cancel(); }, [disabled]);
  function add(kind: NodeKind) {
    if (!menu) return;
    void connect(menu.sourceId, crypto.randomUUID(), { kind, ...menu.position }).catch(() => {});
    cancel();
  }
  return { port, line, menu, hover, start, add, cancel, hidePort: () => { if (!drag.current) setPort(null); } };
}
