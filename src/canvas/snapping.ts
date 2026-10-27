import { absolutePosition, boundsOfNodes } from "./geometry.ts";
import { ancestors, indexNodes, isNodeLocked } from "./hierarchy.ts";
import type { CanvasNode, Point, Rect } from "./model.ts";

export type SnapGuide = {
  axis: "x" | "y";
  coordinate: number;
  start: number;
  end: number;
  targetId: string;
  subjectAnchor: number;
};
export type NodePosition = { id: string; position: Point };
const anchors = (rect: Rect, axis: "x" | "y") => {
  const size = axis === "x" ? rect.width : rect.height;
  return [rect[axis], rect[axis] + size / 2, rect[axis] + size];
};

/** One coordinate owner for grouped moves: selected parents carry their children. */
export function movableRoots(
  nodes: readonly CanvasNode[],
  ids: readonly string[],
) {
  const byId = indexNodes(nodes);
  const selected = new Set(ids);
  return nodes.filter(
    (node) =>
      selected.has(node.id) &&
      !isNodeLocked(node, byId) &&
      !ancestors(node, byId).some((parent) => selected.has(parent.id)),
  );
}

/** Tolerances are screen pixels; authored positions and guides stay in world coordinates. */
export function snapNodePositions(
  nodes: readonly CanvasNode[],
  proposed: readonly NodePosition[],
  options: {
    zoom: number;
    objects: boolean;
    grid: boolean;
    bypass?: boolean;
    previous?: readonly SnapGuide[];
  },
): { positions: NodePosition[]; guides: SnapGuide[] } {
  const roots = movableRoots(
    nodes,
    proposed.map((p) => p.id),
  );
  const positions = new Map(proposed.map((p) => [p.id, p.position]));
  const rootIds = new Set(roots.map((n) => n.id));
  const moved = nodes.map((node) =>
    rootIds.has(node.id)
      ? { ...node, position: positions.get(node.id)! }
      : node,
  );
  const bounds = boundsOfNodes(
    moved.filter((n) => rootIds.has(n.id)),
    moved,
  );
  const output = roots.map((node) => ({
    id: node.id,
    position: positions.get(node.id)!,
  }));
  if (!bounds || options.bypass) return { positions: output, guides: [] };
  const byId = indexNodes(nodes);
  const excluded = new Set(rootIds);
  for (const node of nodes) {
    if (rootIds.has(node.id))
      for (const parent of ancestors(node, byId)) excluded.add(parent.id);
    if (ancestors(node, byId).some((parent) => rootIds.has(parent.id)))
      excluded.add(node.id);
  }
  const targets = options.objects
    ? nodes
        .filter((node) => !excluded.has(node.id))
        .map((node) => ({
          id: node.id,
          rect: {
            ...absolutePosition(node, nodes),
            width: node.width,
            height: node.height,
          },
        }))
    : [];
  const delta = { x: 0, y: 0 };
  const guides: SnapGuide[] = [];
  for (const axis of ["x", "y"] as const) {
    const own = anchors(bounds, axis);
    const previous = options.previous?.find((guide) => guide.axis === axis);
    let best:
      | {
          difference: number;
          target: (typeof targets)[number];
          coordinate: number;
          subjectAnchor: number;
          retained: boolean;
        }
      | undefined;
    for (const target of targets)
      for (const coordinate of anchors(target.rect, axis)) {
        own.forEach((value, subjectAnchor) => {
          const difference = coordinate - value;
          const retained =
            previous?.targetId === target.id &&
            previous.coordinate === coordinate &&
            previous.subjectAnchor === subjectAnchor;
          if (Math.abs(difference) * options.zoom > (retained ? 8 : 5)) return;
          if (
            !best ||
            (retained && !best.retained) ||
            (retained === best.retained &&
              Math.abs(difference) < Math.abs(best.difference))
          ) {
            best = { difference, target, coordinate, subjectAnchor, retained };
          }
        });
      }
    if (best) {
      delta[axis] = best.difference;
      const cross = axis === "x" ? "y" : "x";
      const dimension = axis === "x" ? "height" : "width";
      guides.push({
        axis,
        coordinate: best.coordinate,
        targetId: best.target.id,
        subjectAnchor: best.subjectAnchor,
        start:
          Math.min(bounds[cross], best.target.rect[cross]) - 16 / options.zoom,
        end:
          Math.max(
            bounds[cross] + bounds[dimension],
            best.target.rect[cross] + best.target.rect[dimension],
          ) +
          16 / options.zoom,
      });
    } else if (options.grid)
      delta[axis] = Math.round(bounds[axis] / 18) * 18 - bounds[axis];
  }
  return {
    positions: output.map(({ id, position }) => ({
      id,
      position: { x: position.x + delta.x, y: position.y + delta.y },
    })),
    guides,
  };
}

export type Alignment =
  | "left"
  | "center"
  | "right"
  | "top"
  | "middle"
  | "bottom"
  | "horizontal"
  | "vertical";
export function alignNodes(
  nodes: readonly CanvasNode[],
  ids: readonly string[],
  mode: Alignment,
): CanvasNode[] {
  const roots = movableRoots(nodes, ids);
  if (roots.length < (mode === "horizontal" || mode === "vertical" ? 3 : 2))
    return [...nodes];
  const bounds = boundsOfNodes(roots, nodes)!;
  const axis = ["left", "center", "right", "horizontal"].includes(mode)
    ? "x"
    : "y";
  const dimension = axis === "x" ? "width" : "height";
  const items = roots
    .map((node) => ({ node, point: absolutePosition(node, nodes) }))
    .sort((a, b) => a.point[axis] - b.point[axis]);
  const distributed = mode === "horizontal" || mode === "vertical";
  const gap =
    (bounds[dimension] -
      items.reduce((sum, item) => sum + item.node[dimension], 0)) /
    (items.length - 1);
  const positions = new Map<string, Point>();
  let cursor = bounds[axis];
  for (const { node, point } of items) {
    const target = distributed
      ? cursor
      : bounds[axis] +
        (["right", "bottom"].includes(mode)
          ? bounds[dimension] - node[dimension]
          : ["center", "middle"].includes(mode)
            ? (bounds[dimension] - node[dimension]) / 2
            : 0);
    positions.set(node.id, {
      ...node.position,
      [axis]: node.position[axis] + target - point[axis],
    });
    cursor += node[dimension] + gap;
  }
  return nodes.map((node) =>
    positions.has(node.id)
      ? { ...node, position: positions.get(node.id)! }
      : node,
  );
}
