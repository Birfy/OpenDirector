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
      if (data.text?.trim())
        references.push({
          nodeId: node.id,
          assetId: data.backendAssetId,
          kind: "text",
          title: data.title,
          text: data.text,
        });
    } else if (node.type === "subject" && data.subject) {
      for (const [sourceRole, resource] of [
        ["main", data.subject.main],
        ...data.subject.auxiliaries.map(
          (resource, index) => [`auxiliary:${index}`, resource] as const,
        ),
        ["voice", data.subject.voice],
      ] as const)
        if (resource?.src && resource.kind !== "file")
          references.push({
            nodeId: node.id,
            sourceRole,
            assetId: resource.assetId,
            kind: resource.kind,
            title: resource.title,
            src: resource.src,
          });
      if (data.subject.description)
        references.push({
          kind: "text",
          title: data.title,
          text: data.subject.description,
          nodeId: node.id,
          sourceRole: "description",
        });
    } else if (
      ["image", "video", "audio"].includes(node.type) &&
      data.src &&
      data.assetState !== "missing"
    ) {
      references.push({
        nodeId: node.id,
        assetId: data.backendAssetId,
        kind: node.type as "image" | "video" | "audio",
        title: data.title,
        src: data.src,
      });
    }
  }
  return references;
}
