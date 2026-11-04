import { indexNodes, ancestors } from "./hierarchy.ts";
import { MAX_ZOOM, MIN_ZOOM } from "./model.ts";
import type { CanvasNode, Point, Rect, Viewport } from "./model.ts";
import { tNow } from "../i18n/messages.ts";

/** React Flow owns pointer transforms and gestures; these helpers operate on document geometry. */
export function absolutePosition(
  node: CanvasNode,
  nodes: readonly CanvasNode[],
): Point {
  return absolutePositionFromIndex(node, indexNodes(nodes));
}

export function absolutePositionFromIndex(
  node: CanvasNode,
  byId: ReadonlyMap<string, CanvasNode>,
): Point {
  return ancestors(node, byId).reduce(
    (position, parent) => ({
      x: position.x + parent.position.x,
      y: position.y + parent.position.y,
    }),
    { ...node.position },
  );
}

/** Returns null for an empty selection. Coordinates include parent-group offsets. */
export function boundsOfNodes(
  nodes: readonly CanvasNode[],
  allNodes: readonly CanvasNode[] = nodes,
): Rect | null {
  if (!nodes.length) return null;
  const byId = indexNodes(allNodes);
  let left = Infinity,
    top = Infinity,
    right = -Infinity,
    bottom = -Infinity;
  for (const node of nodes) {
    const position = absolutePositionFromIndex(node, byId);
    left = Math.min(left, position.x);
    top = Math.min(top, position.y);
    right = Math.max(right, position.x + node.width);
    bottom = Math.max(bottom, position.y + node.height);
  }
  return { x: left, y: top, width: right - left, height: bottom - top };
}

export function fitViewport(
  bounds: Rect | null,
  size: { width: number; height: number },
  padding = 64,
): Viewport {
  if (
    !Number.isFinite(size.width) ||
    !Number.isFinite(size.height) ||
    size.width <= 0 ||
    size.height <= 0
  )
    throw new Error(tNow("errors.geometry.viewport"));
  if (!Number.isFinite(padding) || padding < 0)
    throw new Error(tNow("errors.geometry.padding"));
  if (!bounds) return { x: size.width / 2, y: size.height / 2, zoom: 1 };
  const availableWidth = Math.max(1, size.width - padding * 2);
  const availableHeight = Math.max(1, size.height - padding * 2);
  const zoom = Math.max(
    MIN_ZOOM,
    Math.min(
      MAX_ZOOM,
      availableWidth / Math.max(1, bounds.width),
      availableHeight / Math.max(1, bounds.height),
    ),
  );
  return {
    x: size.width / 2 - (bounds.x + bounds.width / 2) * zoom,
    y: size.height / 2 - (bounds.y + bounds.height / 2) * zoom,
    zoom,
  };
}

/** Lays out unlocked, top-level selection members in rows. Child coordinates stay relative. */
export function arrangeNodes(
  nodes: readonly CanvasNode[],
  ids: readonly string[],
  options: { columns?: number; gap?: number } = {},
): CanvasNode[] {
  const selected = new Set(ids);
  const gap = options.gap ?? 40;
  const movable = nodes.filter(
    (node) => selected.has(node.id) && !node.locked && !node.parentId,
  );
  if (movable.length < 2) return [...nodes];
  const columns = options.columns ?? Math.ceil(Math.sqrt(movable.length));
  if (
    !Number.isSafeInteger(columns) ||
    columns < 1 ||
    !Number.isFinite(gap) ||
    gap < 0
  )
    throw new Error(tNow("errors.geometry.arrange"));
  const origin = boundsOfNodes(movable)!;
  const positions = new Map<string, Point>();
  let x = origin.x,
    y = origin.y,
    rowHeight = 0;
  movable.forEach((node, index) => {
    if (index && index % columns === 0) {
      x = origin.x;
      y += rowHeight + gap;
      rowHeight = 0;
    }
    positions.set(node.id, { x, y });
    x += node.width + gap;
    rowHeight = Math.max(rowHeight, node.height);
  });
  return nodes.map((node) =>
    positions.has(node.id)
      ? { ...node, position: positions.get(node.id)! }
      : node,
  );
}
