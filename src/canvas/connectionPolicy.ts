import type {
  CanvasDocument,
  CanvasNodeKind,
  CanvasEdge,
  CanvasNode,
} from "./model.ts";
import {
  FRAME_IMAGE_LIMIT,
  FRAME_IMAGE_LIMIT_MESSAGE,
} from "./frameReferences.ts";

/** Static product capabilities from canvas-data module 79421. Model-specific limits remain separate. */
export function nodePorts(kind: CanvasNodeKind) {
  return {
    source: !["group", "stack", "timeline"].includes(kind),
    target: ![
      "group",
      "stack",
      "tool",
      "external",
      "timeline",
      "subject",
    ].includes(kind),
  };
}
/** Source → downstream matrix shared by menus, gestures and commands. */
export const downstreamKinds: Partial<
  Record<CanvasNodeKind, readonly CanvasNodeKind[]>
> = {
  text: ["text", "image", "video"],
  image: ["text", "image", "video", "audio"],
  video: ["text", "video"],
  audio: ["text", "video", "audio"],
  subject: ["image", "video", "audio"],
};

export function referenceMaterial(node: CanvasNode): string | null {
  if (node.data.assetState === "missing") return null;
  if (node.type === "text")
    return node.data.text?.trim() ? node.data.text : null;
  if (["image", "video", "audio"].includes(node.type))
    return node.data.src || null;
  if (node.type === "subject") {
    const subject = node.data.subject;
    if (
      !subject ||
      ![subject.main, ...subject.auxiliaries, subject.voice].some(
        (resource) => resource?.src,
      )
    )
      return null;
    return JSON.stringify([
      subject.main?.src,
      ...subject.auxiliaries.map((r) => r.src),
      subject.voice?.src,
    ]);
  }
  return null;
}

/** Ports and creation menus are discoverable before the source has content. */
export function canStartReference(node: CanvasNode): boolean {
  return Boolean(downstreamKinds[node.type]?.length);
}

export function canSourceReference(node: CanvasNode): boolean {
  return canStartReference(node) && Boolean(referenceMaterial(node));
}

/** A prospective target may be empty; a prospective source cannot provide material. */
export function referenceTypeAllowed(
  source: CanvasNodeKind,
  target: CanvasNodeKind,
) {
  return downstreamKinds[source]?.includes(target) ?? false;
}
const capacity: Partial<Record<CanvasNodeKind, number>> = {
  text: 128,
  image: 999,
  video: 999,
  audio: 7,
  subject: 5,
};
export type ReferenceIssue =
  | "endpoint_missing"
  | "source_empty"
  | "target_material"
  | "locked"
  | "self_connection"
  | "duplicate_relation"
  | "source_type_unsupported"
  | "target_type_unsupported"
  | "frame_capacity_exceeded"
  | "capacity_exceeded";

export const REFERENCE_ISSUE_TEXT: Record<ReferenceIssue, string> = {
  endpoint_missing: "节点已不存在",
  source_empty: "当前节点内容为空，请先上传或生成节点内容",
  target_material: "素材节点不能接收生成参考，请连接生成节点",
  locked: "请先解锁节点或所属分组",
  self_connection: "节点不能引用自身",
  duplicate_relation: "已经连接过",
  source_type_unsupported: "目标节点不接收这类素材",
  target_type_unsupported: "该节点不接收参考",
  capacity_exceeded: "参考数量已达上限",
  frame_capacity_exceeded: FRAME_IMAGE_LIMIT_MESSAGE,
};

/** Preview available types without permitting empty-source writes. */
export function connectedCreationKinds(
  document: Pick<CanvasDocument, "nodes" | "edges">,
  id: string,
  direction: "source" | "target",
  candidates: readonly CanvasNodeKind[],
  options: { allowEmptySource?: boolean } = {},
): CanvasNodeKind[] {
  let prospectiveId = "__connected_creation__";
  while (document.nodes.some((node) => node.id === prospectiveId))
    prospectiveId += "_";
  return candidates.filter((kind) => {
    const issue = referenceIssue(
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
    );
    return (
      issue === null ||
      Boolean(
        options.allowEmptySource &&
        direction === "source" &&
        issue === "source_empty",
      )
    );
  });
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
  const isLocked = (node: CanvasNode): boolean => {
    const seen = new Set<string>();
    let current: CanvasNode | undefined = node;
    while (current && !seen.has(current.id)) {
      if (current.locked) return true;
      seen.add(current.id);
      current = document.nodes.find((n) => n.id === current!.parentId);
    }
    return false;
  };
  if (isLocked(a) || isLocked(b)) return "locked";
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
  if (!nodePorts(b.type).target) return "target_type_unsupported";
  if (!referenceTypeAllowed(a.type, b.type)) return "source_type_unsupported";
  if (!referenceMaterial(a)) return "source_empty";
  if (b.data.mediaRole === "asset") return "target_material";
  const references = document.edges.filter(
    (e) => e.intent !== "post_edit_result",
  );
  if (
    a.type === "image" &&
    b.type === "video" &&
    b.data.settings?.videoMode === "first-last"
  ) {
    const imageIds = new Set(
      document.nodes
        .filter((node) => node.type === "image")
        .map((node) => node.id),
    );
    if (
      new Set(
        references
          .filter((edge) => edge.target === target && imageIds.has(edge.source))
          .map((edge) => edge.source),
      ).size >= FRAME_IMAGE_LIMIT
    )
      return "frame_capacity_exceeded";
  }
  if (
    references.filter((e) => e.target === target).length >=
    (capacity[b.type] ?? Infinity)
  )
    return "capacity_exceeded";
  // Like MuseShow, input references may point to the same node or form a
  // cycle: execution snapshots current outputs without following inputs.
  return null;
}
