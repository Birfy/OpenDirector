import type { CanvasNode } from "./model.ts";
import type { ReferenceInput } from "../backend/generation.ts";

/** Snapshot only explicit selection; do not silently send the whole document. */
export function assistantReferences(
  nodes: readonly CanvasNode[],
): ReferenceInput[] {
  const references: ReferenceInput[] = [];
  for (const node of nodes) {
    const data = node.data;
    if (node.type === "text") {
      if (data.text || data.prompt)
        references.push({
          kind: "text",
          title: data.title,
          text: data.text || data.prompt,
        });
    } else if (node.type === "subject" && data.subject) {
      for (const resource of [
        data.subject.main,
        ...data.subject.auxiliaries,
        data.subject.voice,
      ])
        if (resource?.src && resource.kind !== "file")
          references.push({
            kind: resource.kind,
            title: resource.title,
            src: resource.src,
          });
      if (data.subject.description)
        references.push({
          kind: "text",
          title: data.title,
          text: data.subject.description,
        });
    } else if (
      ["image", "video", "audio"].includes(node.type) &&
      data.src &&
      data.assetState !== "missing"
    ) {
      references.push({
        kind: node.type as "image" | "video" | "audio",
        title: data.title,
        src: data.src,
      });
    }
  }
  return references.filter(
    (reference, index) =>
      references.findIndex(
        (item) =>
          item.kind === reference.kind &&
          item.src === reference.src &&
          item.text === reference.text,
      ) === index,
  );
}
