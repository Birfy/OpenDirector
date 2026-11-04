import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { canStartReference } from "./connectionPolicy";
import {
  floatingReferencePort,
  insideNode,
  referencePreviewPath,
  referencePortMetrics,
  restingReferencePort,
  REFERENCE_PORT_MIDPOINT_RADIUS,
  REFERENCE_PORT_SIDES,
  type PortSide,
} from "./connectionPorts";
import { absolutePosition } from "./geometry";
import type { CanvasNode, Point } from "./model";
import {
  magneticSelectionPort,
  sourceReferencePreviews,
} from "./selectionReferences.ts";
export { portPoint, type PortSide } from "./connectionPorts";

const hoverBlocked =
  ".cw-node-title,.cw-node-title-field,.cw-composer-dock,.cw-node-toolbar-anchor,.cw-side-panel,.cw-assistant-panel,.cw-canvas-menu,.cw-domain-dialog,[role=dialog],input,textarea,select,video,audio,button:not(.cw-reference-port),[contenteditable=true]";

// OpenDirector's finish handler excludes canvas UI, then resolves the enclosing
// logical node. Node contents (including native players and title controls)
// remain drop targets; their ordinary click/hover behavior is independent.
const dropBlocked =
  ".cw-composer-dock,.cw-node-toolbar-anchor,.cw-side-panel,.cw-assistant-panel,.cw-context-menu,.cw-domain-dialog,.cw-selection-bar,.cw-toast,dialog,[role=dialog]";

function referenceDropTarget(x: number, y: number) {
  const hit = document.elementFromPoint(x, y);
  if (!hit?.closest(".react-flow") || hit.closest(dropBlocked)) return null;
  const node = hit.closest(".react-flow__node");
  if (!node) return { kind: "canvas" as const };
  const id = node.getAttribute("data-id");
  return id ? { kind: "node" as const, id } : null;
}

export function useCanvasReferences(options: {
  nodes: CanvasNode[];
  zoom: number;
  disabled: boolean;
  locked: Set<string>;
  world: (point: Point) => Point;
  selectionPort?: Point;
  connect: (sources: string[], target: string) => void;
  create: (
    sources: string[],
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
  const [previews, setPreviews] = useState<
    { sourceId: string; path: string }[]
  >([]);
  const [selectionPointer, setSelectionPointer] = useState<Point | null>(null);
  const [hoveredSource, setHoveredSource] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [targetId, setTargetId] = useState<string | null>(null);
  const [sourceIds, setSourceIds] = useState<string[]>([]);
  const drag = useRef<{
    pointer: number;
    sources: string[];
    side: PortSide;
    x: number;
    y: number;
    moved: boolean;
    anchor: Point;
  } | null>(null);
  const cancel = useCallback(() => {
    drag.current = null;
    setConnecting(false);
    setPreviews([]);
    setSelectionPointer(null);
    setPort(null);
    setHoveredSource(null);
    setTargetId(null);
    setSourceIds([]);
  }, []);
  const hover = (event: ReactPointerEvent) => {
    if (drag.current) return;
    const hit = event.target as Element;
    if (current.current.disabled || event.buttons) {
      setPort(null);
      setHoveredSource(null);
      setSelectionPointer(null);
      return;
    }
    const { nodes, zoom, locked, world } = current.current;
    const point = world({ x: event.clientX, y: event.clientY });
    const blocked = hit.closest(hoverBlocked);
    if (current.current.selectionPort) {
      setPort(null);
      setHoveredSource(null);
      if (blocked) {
        setSelectionPointer(null);
        return;
      }
      const anchor = current.current.selectionPort;
      const next =
        Math.hypot(point.x - anchor.x, point.y - anchor.y) * zoom <=
        REFERENCE_PORT_MIDPOINT_RADIUS
          ? { x: event.clientX, y: event.clientY }
          : null;
      setSelectionPointer((old) =>
        old?.x === next?.x && old?.y === next?.y ? old : next,
      );
      return;
    }
    setSelectionPointer(null);
    const hoveredPort = hit.closest(".cw-node-reference-port");
    const hoveredId =
      hoveredPort?.getAttribute("data-reference-source") ??
      hit.closest(".react-flow__node")?.getAttribute("data-id");
    const hoveredNode = nodes.find((node) => node.id === hoveredId);
    const available = (node: CanvasNode | undefined) =>
      node && !locked.has(node.id) && canStartReference(node);
    if (blocked) {
      setPort(null);
      setHoveredSource(available(hoveredNode) ? hoveredNode!.id : null);
      return;
    }
    const interior = nodes.find(
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
    );
    if (interior) {
      setPort(null);
      const owner = hoveredNode ?? interior;
      setHoveredSource(available(owner) ? owner.id : null);
      return;
    }
    let nearest: typeof port = null;
    let distance = Infinity;
    if (
      hoveredPort &&
      document
        .elementsFromPoint(event.clientX, event.clientY)
        .some((element) =>
          element.closest(".cw-node-title,.cw-node-title-field"),
        )
    ) {
      setPort(null);
      setHoveredSource(available(hoveredNode) ? hoveredNode!.id : null);
      return;
    }
    for (const node of nodes) {
      if (locked.has(node.id) || !canStartReference(node)) continue;
      if (hoveredPort && hoveredId && node.id !== hoveredId) continue;
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
        referencePortMetrics(zoom).diameter / 2 + 6 / zoom,
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
    setHoveredSource(
      nearest?.nodeId ?? (available(hoveredNode) ? hoveredNode!.id : null),
    );
    setPort((old) =>
      old?.nodeId === nearest?.nodeId &&
      old?.side === nearest?.side &&
      old?.point.x === nearest?.point.x &&
      old?.point.y === nearest?.point.y
        ? old
        : nearest,
    );
  };
  const begin = (
    event: ReactPointerEvent<HTMLButtonElement>,
    sources: string[],
    side: PortSide,
    anchor: Point,
  ) => {
    if (event.button !== 0 || options.disabled || !sources.length) return;
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      pointer: event.pointerId,
      sources: [...sources],
      side,
      x: event.clientX,
      y: event.clientY,
      moved: false,
      anchor: { ...anchor },
    };
    setSourceIds([...sources]);
    setConnecting(true);
  };
  const start = (event: ReactPointerEvent<HTMLButtonElement>, from = port) => {
    if (from) begin(event, [from.nodeId], from.side, from.anchor);
  };
  const startSelection = (
    event: ReactPointerEvent<HTMLButtonElement>,
    sources: string[],
    anchor: Point,
  ) => begin(event, sources, "right", anchor);
  useEffect(() => {
    const move = (event: PointerEvent) => {
      const d = drag.current;
      if (!d || d.pointer !== event.pointerId) return;
      d.moved ||= Math.hypot(event.clientX - d.x, event.clientY - d.y) > 4;
      const { nodes, world } = current.current;
      if (
        !d.sources.every((id) => {
          const source = nodes.find((n) => n.id === id);
          return source && canStartReference(source);
        })
      ) {
        cancel();
        return;
      }
      const point = world({ x: event.clientX, y: event.clientY });
      setPreviews(
        d.sources.length > 1
          ? sourceReferencePreviews(nodes, d.sources, point, d.side)
          : [
              {
                sourceId: d.sources[0],
                path: referencePreviewPath(d.anchor, d.side, point),
              },
            ],
      );
      const target = referenceDropTarget(event.clientX, event.clientY);
      setTargetId(target?.kind === "node" ? target.id : null);
    };
    const up = (event: PointerEvent) => {
      const d = drag.current;
      if (!d || d.pointer !== event.pointerId) return;
      const { nodes, locked, world, connect, create } = current.current;
      const hit = referenceDropTarget(event.clientX, event.clientY);
      cancel();
      if (
        !d.sources.every((id) => {
          const source = nodes.find((n) => n.id === id);
          return source && !locked.has(id) && canStartReference(source);
        })
      )
        return;
      if (d.moved && !hit) return;
      const id = d.moved && hit?.kind === "node" ? hit.id : null;
      const target = nodes.find((n) => n.id === id);
      // A stale rendered node must not be mistaken for empty canvas.
      if (id && !target) return;
      const client = { x: event.clientX, y: event.clientY };
      if (target && target.type !== "group") {
        connect(d.sources, target.id);
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
      create(d.sources, d.side, client, point, d.anchor);
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
  const owner = options.disabled
    ? undefined
    : options.nodes.find((node) => node.id === (port?.nodeId ?? hoveredSource));
  const ports =
    owner && !options.locked.has(owner.id) && canStartReference(owner)
      ? port
        ? [{ ...port, active: true }]
        : REFERENCE_PORT_SIDES.map((side) => ({
            nodeId: owner.id,
            ...restingReferencePort(
              {
                ...absolutePosition(owner, options.nodes),
                width: owner.width,
                height: owner.height,
              },
              side,
              options.zoom,
            ),
            active: false,
          }))
      : [];
  return {
    disabled: options.disabled,
    port,
    ports,
    previews,
    selectionPort: options.selectionPort
      ? magneticSelectionPort(
          options.selectionPort,
          selectionPointer
            ? options.world(selectionPointer)
            : options.selectionPort,
          options.zoom,
        )
      : null,
    connecting,
    targetId,
    sourceIds,
    hover,
    start,
    startSelection,
    cancel,
    hide: () => {
      if (!drag.current) {
        setPort(null);
        setHoveredSource(null);
        setSelectionPointer(null);
      }
    },
  };
}
