import type { CanvasNode } from "./model.ts";

/** Descriptions are user annotations, never a subject media/reference slot. */
export function subjectMediaReferences(node: CanvasNode) {
  if (node.type !== "subject" || node.data.assetState === "missing") return [];
  const subject = node.data.subject;
  if (!subject?.main?.src) return [];
  const slots = [
    ["main", subject.main],
    ...subject.auxiliaries.map(
      (resource, index) => [`auxiliary:${index}`, resource] as const,
    ),
    ["voice", subject.voice],
  ] as const;
  return slots.flatMap(([sourceRole, resource]) => {
    if (!resource?.src || resource.kind === "file" || resource.kind === "text")
      return [];
    return [
      {
        sourceRole,
        resource: { ...resource, kind: resource.kind, src: resource.src },
      },
    ];
  });
}

/** Transient model inputs retain the subject's canvas ID for provenance. */
export function subjectReferenceNodes(node: CanvasNode): CanvasNode[] {
  return subjectMediaReferences(node).map(({ resource }) => ({
    ...node,
    type: resource.kind,
    data: {
      kind: resource.kind,
      prompt: "",
      backendAssetId: resource.assetId,
      assetState: node.data.assetState,
      mimeType: resource.mimeType,
      src: resource.src,
      byteSize: resource.byteSize,
      media: {
        width: resource.width,
        height: resource.height,
        durationSeconds: resource.durationSeconds,
      },
      title: `${node.data.title} / ${resource.title}`,
    },
  }));
}
