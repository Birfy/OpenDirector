import { tNow } from "../i18n/messages.ts";

export interface ImageSize {
  width: number;
  height: number;
}
export interface ImagePoint {
  x: number;
  y: number;
}
export interface ImageRect extends ImagePoint, ImageSize {}
export interface ImageExpansion {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
export type ExpansionHandle = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));
export function containImage(source: ImageSize, host: ImageSize): ImageRect {
  const scale = Math.min(
    host.width / source.width,
    host.height / source.height,
  );
  const width = source.width * scale,
    height = source.height * scale;
  return {
    x: (host.width - width) / 2,
    y: (host.height - height) / 2,
    width,
    height,
  };
}
/** Expansion ratios are measured against the original image, never against the preview. */
export function expansionForAspect(
  source: ImageSize,
  aspect?: number,
  scale = 1.5,
): ImageExpansion {
  const ratio = aspect ?? source.width / source.height;
  const width = Math.max(source.width * scale, source.height * scale * ratio);
  const height = width / ratio;
  return {
    left: (width / source.width - 1) / 2,
    right: (width / source.width - 1) / 2,
    top: (height / source.height - 1) / 2,
    bottom: (height / source.height - 1) / 2,
  };
}
export function resizeExpansion(
  initial: ImageExpansion,
  handle: ExpansionHandle,
  dx: number,
  dy: number,
  preview: ImageSize,
): ImageExpansion {
  const result = { ...initial };
  if (handle.includes("w"))
    result.left = Math.max(0, initial.left - dx / preview.width);
  if (handle.includes("e"))
    result.right = Math.max(0, initial.right + dx / preview.width);
  if (handle.includes("n"))
    result.top = Math.max(0, initial.top - dy / preview.height);
  if (handle.includes("s"))
    result.bottom = Math.max(0, initial.bottom + dy / preview.height);
  return result;
}
export function expandedSize(
  source: ImageSize,
  expansion: ImageExpansion,
): ImageSize {
  return {
    width: Math.round(source.width * (1 + expansion.left + expansion.right)),
    height: Math.round(source.height * (1 + expansion.top + expansion.bottom)),
  };
}
export type ImageInkTool =
  | "brush"
  | "erase"
  | "arrow"
  | "text"
  | "fill"
  | "clear";
export interface ImageInkStroke {
  tool: ImageInkTool;
  points: ImagePoint[];
  size: number;
  color: string;
  text?: string;
}
/** CanvasToolTask scalar strings are limited to 100,000 characters by its persisted format. */
export function writeImageInk(
  strokes: readonly ImageInkStroke[],
  sourceNodeId: string,
  size: ImageSize,
): string {
  const value = JSON.stringify({ version: 1, sourceNodeId, ...size, strokes });
  if (value.length > 100_000)
    throw new Error(
      tNow("errors.imageAction.limit"),
    );
  return value;
}
/** A saved annotation owns pixel coordinates for one exact source. */
export function readImageInk(
  value: unknown,
  sourceNodeId: string,
  size: ImageSize,
): ImageInkStroke[] {
  if (typeof value !== "string") return [];
  try {
    const doc = JSON.parse(value);
    if (
      doc.sourceNodeId !== sourceNodeId ||
      doc.width !== size.width ||
      doc.height !== size.height ||
      !Array.isArray(doc.strokes)
    )
      return [];
    if (
      !doc.strokes.every(
        (stroke: ImageInkStroke) =>
          stroke &&
          ["brush", "erase", "arrow", "text", "fill", "clear"].includes(
            stroke.tool,
          ) &&
          Number.isFinite(stroke.size) &&
          stroke.size > 0 &&
          /^#[a-f\d]{6}$/i.test(stroke.color) &&
          (stroke.text === undefined || typeof stroke.text === "string") &&
          Array.isArray(stroke.points) &&
          stroke.points.every(
            (point: ImagePoint) =>
              point && Number.isFinite(point.x) && Number.isFinite(point.y),
          ),
      )
    )
      return [];
    return doc.strokes;
  } catch {
    return [];
  }
}
/** Paints an annotation layer, not the source image. Erasing never deletes source pixels. */
export function paintImageInk(
  ctx: CanvasRenderingContext2D,
  strokes: readonly ImageInkStroke[],
  size: ImageSize,
  mask = false,
): void {
  for (const stroke of strokes) {
    ctx.save();
    if (stroke.tool === "clear") {
      ctx.clearRect(0, 0, size.width, size.height);
      ctx.restore();
      continue;
    }
    ctx.globalCompositeOperation =
      stroke.tool === "erase" ? "destination-out" : "source-over";
    ctx.strokeStyle = ctx.fillStyle = mask ? "#ffffff" : stroke.color;
    ctx.lineWidth = stroke.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const first = stroke.points[0],
      last = stroke.points.at(-1);
    if (stroke.tool === "fill") ctx.fillRect(0, 0, size.width, size.height);
    else if (first && stroke.tool === "text") {
      ctx.font = `600 ${stroke.size}px system-ui, sans-serif`;
      ctx.textBaseline = "top";
      (stroke.text ?? "")
        .split("\n")
        .forEach((line, index) =>
          ctx.fillText(line, first.x, first.y + index * stroke.size * 1.3),
        );
    } else if (first && last && stroke.tool === "arrow") {
      const angle = Math.atan2(last.y - first.y, last.x - first.x),
        head = Math.max(stroke.size * 3, 16);
      ctx.beginPath();
      ctx.moveTo(first.x, first.y);
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(
        last.x - head * Math.cos(angle - Math.PI / 6),
        last.y - head * Math.sin(angle - Math.PI / 6),
      );
      ctx.lineTo(
        last.x - head * Math.cos(angle + Math.PI / 6),
        last.y - head * Math.sin(angle + Math.PI / 6),
      );
      ctx.closePath();
      ctx.fill();
    } else if (first) {
      if (stroke.points.length === 1) {
        ctx.beginPath();
        ctx.arc(first.x, first.y, stroke.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(first.x, first.y);
        for (const p of stroke.points.slice(1)) ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    }
    ctx.restore();
  }
}
