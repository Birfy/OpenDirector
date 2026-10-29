import type { CanvasDocument, CanvasNodeKind, CanvasEdge } from "./model.ts";

/** Static product capabilities from canvas-data module 79421. Model-specific limits remain separate. */
export function nodePorts(kind: CanvasNodeKind) {
  return {
    source: !["group", "stack", "timeline"].includes(kind),
    target: !["group", "stack", "tool", "external"].includes(kind),
  };
}
const sources: Partial<Record<CanvasNodeKind, readonly CanvasNodeKind[]>> = {
  text: ["text", "image", "video", "audio"],
  image: ["text", "image", "subject", "tool"],
  video: ["text", "image", "video", "audio", "subject", "tool"],
  audio: ["image", "video", "audio", "subject"],
  timeline: ["image", "video", "audio"],
  subject: ["image", "video", "audio"],
};
const capacity: Partial<Record<CanvasNodeKind, number>> = {
  text: 128,
  image: 999,
  video: 999,
  audio: 7,
  subject: 5,
};
export type ReferenceIssue =
  | "endpoint_missing"
  | "self_connection"
  | "duplicate_relation"
  | "source_type_unsupported"
  | "target_type_unsupported"
  | "capacity_exceeded";

export const REFERENCE_ISSUE_TEXT: Record<ReferenceIssue, string> = {
  endpoint_missing: "节点已不存在",
  self_connection: "节点不能引用自身",
  duplicate_relation: "已经连接过",
  source_type_unsupported: "目标节点不接收这类素材",
  target_type_unsupported: "该节点不接收参考",
  capacity_exceeded: "参考数量已达上限",
};

/** The blank-space creation menu uses the same policy as a completed connection. */
export function connectedCreationKinds(
  document: Pick<CanvasDocument, "nodes" | "edges">,
  id: string,
  direction: "source" | "target",
  candidates: readonly CanvasNodeKind[],
): CanvasNodeKind[] {
  let prospectiveId = "__connected_creation__";
  while (document.nodes.some((node) => node.id === prospectiveId))
    prospectiveId += "_";
  return candidates.filter(
    (kind) =>
      referenceIssue(
        {
          ...document,
          nodes: [
            ...document.nodes,
            {
              id: prospectiveId,
              type: kind,
              data: { kind, title: "", prompt: "" },
              position: { x: 0, y: 0 },
              width: 1,
              height: 1,
            },
          ],
        },
        direction === "source" ? id : prospectiveId,
        direction === "source" ? prospectiveId : id,
      ) === null,
  );
}

export function referenceIssue(
  document: Pick<CanvasDocument, "nodes" | "edges">,
  source: string | null | undefined,
  target: string | null | undefined,
  intent: CanvasEdge["intent"] = "generation_input",
): ReferenceIssue | null {
  const a = document.nodes.find((n) => n.id === source),
    b = document.nodes.find((n) => n.id === target);
  if (!a || !b) return "endpoint_missing";
  if (
    document.edges.some(
      (e) =>
        e.source === source &&
        e.target === target &&
        (e.intent ?? "generation_input") === intent,
    )
  )
    return "duplicate_relation";
  // Provenance records an already produced result. It must not be interpreted as a generation input.
  if (intent === "post_edit_result") {
    if (a.id === b.id) return "self_connection";
    if (!["image", "video", "audio"].includes(b.type))
      return "target_type_unsupported";
    return null;
  }
  if (!nodePorts(a.type).source || a.type === "external")
    return "source_type_unsupported";
  if (!nodePorts(b.type).target || !sources[b.type])
    return "target_type_unsupported";
  if (!sources[b.type]!.includes(a.type)) return "source_type_unsupported";
  const references = document.edges.filter(
    (e) => e.intent !== "post_edit_result",
  );
  if (
    references.filter((e) => e.target === target).length >=
    (capacity[b.type] ?? Infinity)
  )
    return "capacity_exceeded";
  // Like MuseShow, input references may point to the same node or form a
  // cycle: execution snapshots current outputs without following inputs.
  return null;
}
