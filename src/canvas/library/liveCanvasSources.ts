/** The canvas tab of the library, read straight from the open document.
 *
 * The nodes on screen are already the truth for the current canvas, so the tab
 * renders them locally: no request, no wait, and it can never drift from what
 * the canvas shows. Other projects still load their sources from the API.
 */
import type { CanvasDocument, CanvasNode, CanvasResource } from "../model";
import type { CanvasSource } from "../../backend/canvasSources";

const BROWSABLE = new Set([
  "image",
  "video",
  "audio",
  "text",
  "file",
  "subject",
  "timeline",
]);

function mediaKind(node: CanvasNode): CanvasResource["kind"] {
  if (node.type === "subject") return node.data.subject?.main?.kind ?? "image";
  if (node.type === "timeline") return "video";
  const kind = node.data.kind;
  return kind === "image" ||
    kind === "video" ||
    kind === "audio" ||
    kind === "text" ||
    kind === "file"
    ? kind
    : "file";
}

/** Mirrors the server rule: a node is listed only while it still carries media. */
function carriesMedia(node: CanvasNode): boolean {
  if (node.type === "subject") return Boolean(node.data.subject?.main);
  if (node.type === "timeline")
    return Boolean(node.data.timeline?.tracks.some((track) => track.clips.length));
  if (node.type === "text") return Boolean(node.data.text?.trim() || node.data.src);
  return Boolean(node.data.src) && node.data.assetState !== "missing";
}

export function liveCanvasSources(doc: CanvasDocument): CanvasSource[] {
  return doc.nodes
    .filter((node) => BROWSABLE.has(node.type) && carriesMedia(node))
    .map((node) => {
      const kind = mediaKind(node);
      const subject = node.type === "subject" ? node.data.subject?.main : undefined;
      return {
        // The revision only ever matters when copying, which resolves it then.
        nodeId: node.id,
        title: node.data.title,
        kind: node.type,
        revision: "",
        main: {
          id: subject?.id ?? node.data.backendAssetId ?? node.id,
          kind,
          title: node.data.title,
          // The canvas already holds this image; showing it costs nothing.
          src: kind === "image" ? (subject?.src ?? node.data.src) : undefined,
        },
        hasVoice: Boolean(node.data.subject?.voice),
        auxiliaryCount: node.data.subject?.auxiliaries.length ?? 0,
      } satisfies CanvasSource;
    });
}
