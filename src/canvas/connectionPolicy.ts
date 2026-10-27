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
  | "creates_cycle"
  | "source_type_unsupported"
  | "target_type_unsupported"
  | "capacity_exceeded";

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
  if (a.id === b.id) return "self_connection";
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
  const outgoing = new Map<string, string[]>();
  for (const edge of references)
    outgoing.set(edge.source, [
      ...(outgoing.get(edge.source) ?? []),
      edge.target,
    ]);
  const pending = [b.id],
    visited = new Set<string>();
  while (pending.length) {
    const id = pending.pop()!;
    if (id === a.id) return "creates_cycle";
    if (visited.has(id)) continue;
    visited.add(id);
    pending.push(...(outgoing.get(id) ?? []));
  }
  return null;
}
