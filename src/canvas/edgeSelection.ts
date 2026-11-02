import type { Point, Rect } from "./model.ts";

/** Segment clipping also catches crossings with both endpoints outside the box. */
export function polylineIntersectsRect(points: readonly Point[], rect: Rect) {
  const right = rect.x + rect.width,
    bottom = rect.y + rect.height;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1],
      b = points[i];
    let low = 0,
      high = 1;
    const dx = b.x - a.x,
      dy = b.y - a.y;
    const constraints = [
      [-dx, a.x - rect.x],
      [dx, right - a.x],
      [-dy, a.y - rect.y],
      [dy, bottom - a.y],
    ];
    let outside = false;
    for (const [p, q] of constraints) {
      if (p === 0) {
        if (q < 0) {
          outside = true;
          break;
        }
      } else if (p < 0) low = Math.max(low, q / p);
      else high = Math.min(high, q / p);
    }
    if (!outside && low <= high) return true;
  }
  return false;
}

export type EdgeSelectionCache = WeakMap<
  SVGPathElement,
  {
    path: string | null;
    step: number;
    points: Point[];
  }
>;

/** Test the displayed curves, including stack projections, in their SVG coordinates. */
export function edgesInSelectionRect(
  root: HTMLElement,
  rect: Rect,
  selectable: ReadonlySet<string>,
  cache: EdgeSelectionCache,
) {
  const selected = new Set<string>();
  const origin = root.getBoundingClientRect();
  for (const edge of root.querySelectorAll<SVGGElement>(
    ".react-flow__edge[data-id]",
  )) {
    const id = edge.dataset.id!;
    if (!selectable.has(id)) continue;
    const path = edge.querySelector<SVGPathElement>(".react-flow__edge-path");
    const matrix = path?.getScreenCTM();
    if (!path || !matrix) continue;
    const inverse = matrix.inverse();
    const start = new DOMPoint(
      origin.x + rect.x,
      origin.y + rect.y,
    ).matrixTransform(inverse);
    const end = new DOMPoint(
      origin.x + rect.x + rect.width,
      origin.y + rect.y + rect.height,
    ).matrixTransform(inverse);
    const local = {
      x: start.x,
      y: start.y,
      width: end.x - start.x,
      height: end.y - start.y,
    };
    const bounds = path.getBBox();
    if (
      bounds.x > end.x ||
      bounds.y > end.y ||
      bounds.x + bounds.width < start.x ||
      bounds.y + bounds.height < start.y
    )
      continue;
    const d = path.getAttribute("d");
    // At most two screen pixels per segment. Reuse samples throughout the gesture.
    const step = 2 / Math.hypot(matrix.a, matrix.b);
    let sampled = cache.get(path);
    if (!sampled || sampled.path !== d || sampled.step !== step) {
      const length = path.getTotalLength();
      const count = Math.max(1, Math.ceil(length / step));
      const points = Array.from({ length: count + 1 }, (_, i) => {
        const point = path.getPointAtLength((length * i) / count);
        return { x: point.x, y: point.y };
      });
      sampled = { path: d, step, points };
      cache.set(path, sampled);
    }
    if (polylineIntersectsRect(sampled.points, local)) selected.add(id);
  }
  return selected;
}
