import type { Point, Rect } from "./model.ts";

export type PortSide = "top" | "right" | "bottom" | "left";
export const REFERENCE_PORT_SIZE = 20;
export const REFERENCE_PORT_MAX_SIZE = 32;

/** Apply one scale to the circle, border and icon, including at the screen-size cap. */
export function referencePortMetrics(zoom: number) {
  const scale = Math.min(
    1,
    REFERENCE_PORT_MAX_SIZE / REFERENCE_PORT_SIZE / zoom,
  );
  return {
    scale,
    diameter: REFERENCE_PORT_SIZE * scale,
    iconSize: REFERENCE_PORT_SIZE * 0.75 * scale,
    borderWidth: scale,
  };
}
export const REFERENCE_PORT_MAX_DISTANCE = 40;
const REFERENCE_PORT_HOVER_DISTANCE = 64;
const sides: readonly PortSide[] = ["top", "right", "bottom", "left"];
const normal = (side: PortSide) => ({
  x: side === "left" ? -1 : side === "right" ? 1 : 0,
  y: side === "top" ? -1 : side === "bottom" ? 1 : 0,
});

export function portPoint(bounds: Rect, side: PortSide): Point {
  return {
    x:
      bounds.x +
      (side === "left"
        ? 0
        : side === "right"
          ? bounds.width
          : bounds.width / 2),
    y:
      bounds.y +
      (side === "top"
        ? 0
        : side === "bottom"
          ? bounds.height
          : bounds.height / 2),
  };
}

export function insideNode(bounds: Rect, pointer: Point) {
  return (
    pointer.x > bounds.x &&
    pointer.x < bounds.x + bounds.width &&
    pointer.y > bounds.y &&
    pointer.y < bounds.y + bounds.height
  );
}

/** Follow the outside pointer freely, with only a maximum screen-space offset. */
export function floatingReferencePort(
  bounds: Rect,
  pointer: Point,
  zoom: number,
  previous?: PortSide,
) {
  if (insideNode(bounds, pointer)) return null;
  const inset = 16 / zoom;
  const clamp = (value: number, start: number, size: number) =>
    Math.max(
      start + Math.min(size / 2, inset),
      Math.min(start + size - Math.min(size / 2, inset), value),
    );
  const candidates = sides.map((side) => {
    const vertical = side === "left" || side === "right";
    const anchor = portPoint(bounds, side);
    if (vertical) anchor.y = clamp(pointer.y, bounds.y, bounds.height);
    else anchor.x = clamp(pointer.x, bounds.x, bounds.width);
    const distance = Math.hypot(pointer.x - anchor.x, pointer.y - anchor.y);
    const scale = distance
      ? Math.min(1, REFERENCE_PORT_MAX_DISTANCE / zoom / distance)
      : 1;
    return {
      side,
      anchor,
      point: {
        x: anchor.x + (pointer.x - anchor.x) * scale,
        y: anchor.y + (pointer.y - anchor.y) * scale,
      },
      distance,
    };
  });
  const nearest = candidates.reduce((best, item) =>
    item.distance < best.distance ? item : best,
  );
  const old = candidates.find((item) => item.side === previous);
  const result =
    old && old.distance <= nearest.distance + 6 / zoom ? old : nearest;
  return result.distance <= REFERENCE_PORT_HOVER_DISTANCE / zoom
    ? result
    : null;
}

/** Freeze the actual grab point while dragging and while the creation menu is open. */
export function referencePreviewPath(start: Point, side: PortSide, end: Point) {
  const direction = normal(side),
    bend = Math.min(120, Math.hypot(end.x - start.x, end.y - start.y) / 2);
  return `M${start.x},${start.y} C${start.x + direction.x * bend},${start.y + direction.y * bend} ${end.x - direction.x * bend},${end.y - direction.y * bend} ${end.x},${end.y}`;
}
