import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { CanvasNode, Point } from "./model";
import { absolutePosition } from "./geometry";
import { canStartReference } from "./connectionPolicy";
import {
  floatingReferencePort,
  insideNode,
  referencePreviewPath,
  type PortSide,
} from "./connectionPorts";
export { portPoint, type PortSide } from "./connectionPorts";

const blocked =
  ".cw-node-title,.cw-node-title-field,.cw-composer-dock,.cw-node-toolbar-anchor,.cw-side-panel,.cw-assistant-panel,.cw-canvas-menu,.cw-domain-dialog,[role=dialog],input,textarea,select,video,audio,button:not(.cw-reference-port),[contenteditable=true]";

export function useCanvasReferences(options: {
  nodes: CanvasNode[];
  zoom: number;
  disabled: boolean;
  locked: Set<string>;
  world: (point: Point) => Point;
  connect: (source: string, target: string) => void;
  create: (
    source: string,
    side: PortSide,
    client: Point,
    world: Point,
    anchor: Point,
  ) => void;
}) {
  const current = useRef(options);
  current.current = options;
  const [port, setPort] = useState<{
    nodeId: string;
    side: PortSide;
    point: Point;
    anchor: Point;
  } | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [targetId, setTargetId] = useState<string | null>(null);
  const drag = useRef<{
    pointer: number;
    source: string;
    side: PortSide;
    x: number;
    y: number;
    moved: boolean;
    anchor: Point;
  } | null>(null);
  const cancel = useCallback(() => {
    drag.current = null;
    setConnecting(false);
    setPreview(null);
    setPort(null);
    setTargetId(null);
  }, []);
  const hover = (event: ReactPointerEvent) => {
    if (drag.current) return;
    if (
      current.current.disabled ||
      event.buttons ||
      (event.target as Element).closest(blocked)
    ) {
      setPort(null);
      return;
    }
    const { nodes, zoom, locked, world } = current.current;
    const point = world({ x: event.clientX, y: event.clientY });
    if (
      nodes.some(
        (node) =>
          node.type !== "group" &&
          insideNode(
            {
              ...absolutePosition(node, nodes),
              width: node.width,
              height: node.height,
            },
            point,
          ),
      )
    ) {
      setPort(null);
      return;
    }
    let nearest: typeof port = null;
    let distance = Infinity;
    const hoveredPort = (event.target as Element).closest(".cw-reference-port");
    if (
      hoveredPort &&
      document
        .elementsFromPoint(event.clientX, event.clientY)
        .some((element) =>
          element.closest(".cw-node-title,.cw-node-title-field"),
        )
    ) {
      setPort(null);
      return;
    }
    for (const node of nodes) {
      if (locked.has(node.id) || !canStartReference(node)) continue;
      if (hoveredPort && port && node.id !== port.nodeId) continue;
      const bounds = {
        ...absolutePosition(node, nodes),
        width: node.width,
        height: node.height,
      };
      const candidate = floatingReferencePort(
        bounds,
        point,
        zoom,
        port?.nodeId === node.id ? port.side : undefined,
      );
      if (candidate && candidate.distance < distance) {
        distance = candidate.distance;
        nearest = {
          nodeId: node.id,
          side: candidate.side,
          point: candidate.point,
          anchor: candidate.anchor,
        };
      }
    }
    setPort((old) =>
      old?.nodeId === nearest?.nodeId &&
      old?.side === nearest?.side &&
      old?.point.x === nearest?.point.x &&
      old?.point.y === nearest?.point.y
        ? old
        : nearest,
    );
  };
  const start = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0 || options.disabled || !port) return;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      pointer: event.pointerId,
      source: port.nodeId,
      side: port.side,
      x: event.clientX,
      y: event.clientY,
      moved: false,
      anchor: { ...port.anchor },
    };
    setConnecting(true);
  };
  useEffect(() => {
    const move = (event: PointerEvent) => {
      const d = drag.current;
      if (!d || d.pointer !== event.pointerId) return;
      d.moved ||= Math.hypot(event.clientX - d.x, event.clientY - d.y) > 4;
      const { nodes, world } = current.current;
      const source = nodes.find((n) => n.id === d.source);
      if (!source || !canStartReference(source)) {
        cancel();
        return;
      }
      const point = world({ x: event.clientX, y: event.clientY });
      setPreview(referencePreviewPath(d.anchor, d.side, point));
      const hit = document.elementFromPoint(event.clientX, event.clientY);
      setTargetId(
        hit?.closest(".react-flow__node")?.getAttribute("data-id") ?? null,
      );
    };
    const up = (event: PointerEvent) => {
      const d = drag.current;
      if (!d || d.pointer !== event.pointerId) return;
      const { nodes, locked, world, connect, create } = current.current;
      const source = nodes.find((n) => n.id === d.source);
      const hit = document.elementFromPoint(event.clientX, event.clientY);
      cancel();
      if (!source || locked.has(source.id) || !canStartReference(source))
        return;
      if (d.moved && (!hit?.closest(".react-flow") || hit.closest(blocked)))
        return;
      const id = d.moved
        ? hit?.closest(".react-flow__node")?.getAttribute("data-id")
        : null;
      const target = nodes.find((n) => n.id === id);
      const client = { x: event.clientX, y: event.clientY };
      if (target && target.type !== "group") {
        connect(d.source, target.id);
        return;
      }
      const start = d.anchor;
      const point = d.moved
        ? world(client)
        : {
            x:
              start.x +
              (d.side === "left" ? -100 : d.side === "right" ? 100 : 0),
            y:
              start.y +
              (d.side === "top" ? -100 : d.side === "bottom" ? 100 : 0),
          };
      if (target && locked.has(target.id)) return;
      create(d.source, d.side, client, point, d.anchor);
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") cancel();
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", cancel);
    window.addEventListener("blur", cancel);
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", cancel);
      window.removeEventListener("blur", cancel);
      window.removeEventListener("keydown", key);
    };
  }, []);
  useEffect(() => {
    if (options.disabled) cancel();
  }, [options.disabled]);
  return {
    port,
    preview,
    connecting,
    targetId,
    hover,
    start,
    cancel,
    hide: () => {
      if (!drag.current) setPort(null);
    },
  };
}
