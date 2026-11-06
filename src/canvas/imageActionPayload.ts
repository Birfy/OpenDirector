import { loadLayerImage } from "./layerRenderer";
import { paintImageInk, readImageInk } from "./imageActionGeometry";
import type { CanvasToolTask } from "./toolCatalog";
import { tNow } from "../i18n/messages.ts";

/** Rasterize only at submission. Persist the editable vectors, not a second large image. */
export async function imageAnnotationPayload(
  task: CanvasToolTask,
  src: string,
  signal: AbortSignal,
): Promise<string | undefined> {
  if (
    task.tool !== "smart-edit" ||
    task.parameters.editMode === "selection" ||
    !task.parameters.annotationDocument
  )
    return;
  const image = await loadLayerImage(src);
  signal.throwIfAborted();
  const size = { width: image.naturalWidth, height: image.naturalHeight };
  const strokes = readImageInk(
    task.parameters.annotationDocument,
    task.sourceNodeIds[0]!,
    size,
  );
  if (!strokes.length) return;
  const overlay = document.createElement("canvas");
  overlay.width = size.width;
  overlay.height = size.height;
  const ink = overlay.getContext("2d");
  if (!ink) throw new Error(tNow("errors.imageAction.ink"));
  paintImageInk(ink, strokes, size);
  const output = document.createElement("canvas");
  output.width = size.width;
  output.height = size.height;
  const context = output.getContext("2d");
  if (!context) throw new Error(tNow("errors.imageAction.canvas"));
  context.drawImage(image, 0, 0);
  context.drawImage(overlay, 0, 0);
  return output.toDataURL("image/png");
}
