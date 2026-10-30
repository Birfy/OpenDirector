import {
  absolutePosition,
  absolutePositionFromIndex,
  boundsOfNodes,
} from "./geometry.ts";
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

export interface SnapOptions {
  zoom: number;
  objects: boolean;
  grid: boolean;
  bypass?: boolean;
  previous?: readonly SnapGuide[];
}

/** Cache stationary geometry once per gesture, outside the pointer-move path. */
export function prepareNodeSnapping(
  nodes: readonly CanvasNode[],
  ids: readonly string[],
) {
  const roots = movableRoots(nodes, ids);
  const byId = indexNodes(nodes);
  const rootIds = new Set(roots.map((node) => node.id));
  const origins = roots.map((node) => {
    const absolute = absolutePositionFromIndex(node, byId);
    return {
      node,
      offset: {
        x: absolute.x - node.position.x,
        y: absolute.y - node.position.y,
      },
    };
  });
  const excluded = new Set(rootIds);
  for (const node of nodes) {
    const parents = ancestors(node, byId);
    if (rootIds.has(node.id))
      for (const parent of parents) excluded.add(parent.id);
    if (parents.some((parent) => rootIds.has(parent.id))) excluded.add(node.id);
  }
  const stationary = nodes
    .filter((node) => !excluded.has(node.id))
    .map((node) => ({
      id: node.id,
      rect: {
        ...absolutePositionFromIndex(node, byId),
        width: node.width,
        height: node.height,
      },
    }));
  return (
    proposed: readonly NodePosition[],
    options: SnapOptions,
  ): { positions: NodePosition[]; guides: SnapGuide[] } => {
    const positions = new Map(proposed.map((p) => [p.id, p.position]));
    const moving = origins.filter(({ node }) => positions.has(node.id));
    const output = moving.map(({ node }) => ({
      id: node.id,
      position: positions.get(node.id)!,
    }));
    if (!moving.length || options.bypass)
      return { positions: output, guides: [] };
    const rects = moving.map(({ node, offset }) => ({
      x: positions.get(node.id)!.x + offset.x,
      y: positions.get(node.id)!.y + offset.y,
      width: node.width,
      height: node.height,
    }));
    const left = Math.min(...rects.map((rect) => rect.x)),
      top = Math.min(...rects.map((rect) => rect.y));
    const bounds = {
      x: left,
      y: top,
      width: Math.max(...rects.map((rect) => rect.x + rect.width)) - left,
      height: Math.max(...rects.map((rect) => rect.y + rect.height)) - top,
    };
    const targets = options.objects ? stationary : [];
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
            if (Math.abs(difference) * options.zoom > (retained ? 8 : 5))
              return;
            if (
              !best ||
              (retained && !best.retained) ||
              (retained === best.retained &&
                Math.abs(difference) < Math.abs(best.difference))
            ) {
              best = {
                difference,
                target,
                coordinate,
                subjectAnchor,
                retained,
              };
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
            Math.min(bounds[cross], best.target.rect[cross]) -
            16 / options.zoom,
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
  };
}

/** Tolerances are screen pixels; positions and guides stay in canvas units. */
export function snapNodePositions(
  nodes: readonly CanvasNode[],
  proposed: readonly NodePosition[],
  options: SnapOptions,
) {
  return prepareNodeSnapping(
    nodes,
    proposed.map((p) => p.id),
  )(proposed, options);
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
