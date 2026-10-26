import { absolutePosition } from "./geometry.ts";
import { createNode } from "./model.ts";
import type { CanvasDocument } from "./model.ts";

export interface PreviewSubmission {
  documentId: string;
  nodeId: string;
}
export interface PreviewOutput {
  src: string;
  mimeType: string;
}

/** Apply asynchronous preview output to the current document, retaining edits made while it ran. */
export function applyPreviewResult(
  document: CanvasDocument,
  submission: PreviewSubmission,
  outputs: readonly PreviewOutput[],
): CanvasDocument {
  if (document.id !== submission.documentId || !outputs.length) return document;
  const target = document.nodes.find((node) => node.id === submission.nodeId);
  if (!target || target.locked || target.type !== "image") return document;

  const first = outputs[0]!;
  const updated = {
    ...target,
    data: {
      ...target.data,
      src: first.src,
      mimeType: first.mimeType,
      assetState: "ready" as const,
    },
  };
  const position =
    outputs.length > 1
      ? absolutePosition(target, document.nodes)
      : target.position;
  const added = outputs.slice(1).map((output, index) => {
    const node = createNode(
      "image",
      {
        x: position.x + (index + 1) * (target.width + 40),
        y: position.y,
      },
      {
        ...target.data,
        title: `${target.data.title} · 预览${index + 2}`,
        src: output.src,
        mimeType: output.mimeType,
        assetState: "ready",
        ...(target.data.settings
          ? { settings: structuredClone(target.data.settings) }
          : {}),
      },
    );
    return { ...node, width: target.width, height: target.height };
  });

  return {
    ...document,
    nodes: [
      ...document.nodes.map((node) => (node.id === target.id ? updated : node)),
      ...added,
    ],
  };
}
