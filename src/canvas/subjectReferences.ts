import type { CanvasNode } from "./model.ts";

/** Transient model inputs retain the subject's canvas ID for provenance. */
export function subjectReferenceNodes(node: CanvasNode): CanvasNode[] {
  if (node.type !== "subject" || node.data.assetState === "missing") return [];
  const subject = node.data.subject;
  if (!subject?.main?.src) return [];
  return [subject.main, ...subject.auxiliaries, subject.voice].flatMap(
    (resource) => {
      if (!resource?.src || resource.kind === "file") return [];
      return [
        {
          ...node,
          type: resource.kind,
          data: {
            ...node.data,
            kind: resource.kind,
            src: resource.src,
            title: `${node.data.title} / ${resource.title}`,
          },
        },
      ];
    },
  );
}
