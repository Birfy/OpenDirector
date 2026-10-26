import { mapCanvasToolTaskReferences } from "./toolCatalog.ts";
import { mapSettingsNodeReferences } from "./model.ts";
import { absolutePosition, boundsOfNodes } from "./geometry.ts";
import { createNode } from "./model.ts";
import type {
  CanvasDocument,
  CanvasEdge,
  CanvasNode,
  CanvasNodeData,
  CanvasResource,
  Point,
  StackData,
} from "./model.ts";

export interface CanvasFragment {
  nodes: CanvasNode[];
  edges: CanvasEdge[];
}

function indexNodes(nodes: readonly CanvasNode[]): Map<string, CanvasNode> {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  if (byId.size !== nodes.length) throw new Error("节点 ID 重复。");
  return byId;
}

/** Nearest parent first. Invalid hierarchies fail before any document changes. */
function ancestors(
  node: CanvasNode,
  byId: ReadonlyMap<string, CanvasNode>,
): CanvasNode[] {
  const result: CanvasNode[] = [];
  const visited = new Set([node.id]);
  let parentId = node.parentId;
  while (parentId) {
    if (visited.has(parentId)) throw new Error("画布分组存在循环引用。");
    visited.add(parentId);
    const parent = byId.get(parentId);
    if (!parent) throw new Error(`找不到父节点：${parentId}`);
    result.push(parent);
    parentId = parent.parentId;
  }
  return result;
}

/** Project hierarchy order independently of painting order stored in zIndex. */
export function orderNodesForCanvas(
  nodes: readonly CanvasNode[],
): CanvasNode[] {
  const byId = indexNodes(nodes);
  const depth = new Map(
    nodes.map((node) => [node.id, ancestors(node, byId).length]),
  );
  return [...nodes].sort((a, b) => depth.get(a.id)! - depth.get(b.id)!);
}

function canReparent(
  node: CanvasNode,
  byId: ReadonlyMap<string, CanvasNode>,
): boolean {
  return !node.locked && !ancestors(node, byId).some((parent) => parent.locked);
}

/**
 * Groups independent unlocked selection members under their nearest common
 * ancestor. Selecting both a group and its child does not reparent that child
 * twice. Existing descendants keep their own positions and identities.
 */
export function groupSelection(
  document: CanvasDocument,
  ids: readonly string[],
): CanvasDocument {
  const byId = indexNodes(document.nodes);
  const selected = new Set(ids);
  const stackedIds = new Set(
    document.nodes.flatMap((node) => node.data.stack?.nodeIds ?? []),
  );
  const eligible = document.nodes.filter(
    (node) =>
      selected.has(node.id) &&
      canReparent(node, byId) &&
      node.type !== "stack" &&
      !stackedIds.has(node.id),
  );
  const eligibleIds = new Set(eligible.map((node) => node.id));
  const roots = eligible.filter(
    (node) =>
      !ancestors(node, byId).some((parent) => eligibleIds.has(parent.id)),
  );
  if (roots.length < 2) return document;

  const parent = ancestors(roots[0]!, byId).find((candidate) =>
    roots.every((node) =>
      ancestors(node, byId).some((ancestor) => ancestor.id === candidate.id),
    ),
  );
  const parentPosition = parent
    ? absolutePosition(parent, document.nodes)
    : { x: 0, y: 0 };
  const bounds = boundsOfNodes(roots, document.nodes)!;
  const groupPosition = { x: bounds.x - 24, y: bounds.y - 40 };
  const group = {
    ...createNode("group", {
      x: groupPosition.x - parentPosition.x,
      y: groupPosition.y - parentPosition.y,
    }),
    width: bounds.width + 48,
    height: bounds.height + 64,
    ...(parent ? { parentId: parent.id } : {}),
  };
  const rootIds = new Set(roots.map((node) => node.id));
  const nodes: CanvasNode[] = [];
  let inserted = false;
  for (const node of document.nodes) {
    if (!rootIds.has(node.id)) {
      nodes.push(node);
      continue;
    }
    if (!inserted) {
      nodes.push(group);
      inserted = true;
    }
    const position = absolutePosition(node, document.nodes);
    nodes.push({
      ...node,
      parentId: group.id,
      position: {
        x: position.x - groupPosition.x,
        y: position.y - groupPosition.y,
      },
    });
  }
  return { ...document, nodes };
}

/**
 * Removes selected group containers and reconnects children to their nearest
 * retained ancestor, preserving absolute positions. A locked child protects its
 * immediate parent from removal. Edges attached to removed containers are
 * removed; references between retained nodes are preserved unchanged.
 */
export function ungroupSelection(
  document: CanvasDocument,
  ids: readonly string[],
): CanvasDocument {
  const byId = indexNodes(document.nodes);
  const selected = new Set(ids);
  const removed = new Set(
    document.nodes
      .filter(
        (node) =>
          selected.has(node.id) &&
          node.type === "group" &&
          canReparent(node, byId),
      )
      .map((node) => node.id),
  );
  for (const node of document.nodes)
    if (node.locked && node.parentId) removed.delete(node.parentId);
  if (!removed.size) return document;

  const nodes = document.nodes
    .filter((node) => !removed.has(node.id))
    .map((node) => {
      if (!node.parentId || !removed.has(node.parentId)) return node;
      const parent = ancestors(node, byId).find(
        (ancestor) => !removed.has(ancestor.id),
      );
      const position = absolutePosition(node, document.nodes);
      const parentPosition = parent
        ? absolutePosition(parent, document.nodes)
        : { x: 0, y: 0 };
      const { parentId: _parentId, ...rest } = node;
      return {
        ...rest,
        ...(parent ? { parentId: parent.id } : {}),
        position: {
          x: position.x - parentPosition.x,
          y: position.y - parentPosition.y,
        },
      };
    });
  return {
    ...document,
    nodes,
    edges: document.edges.filter(
      (edge) => !removed.has(edge.source) && !removed.has(edge.target),
    ),
  };
}

/** Copies selected groups with all descendants and edges internal to the copy. */
export function copySelection(
  document: CanvasDocument,
  ids: readonly string[],
): CanvasFragment {
  const byId = indexNodes(document.nodes);
  const selected = new Set(ids);
  const selectedGroups = new Set(
    document.nodes
      .filter((node) => selected.has(node.id) && node.type === "group")
      .map((node) => node.id),
  );
  const stackMembers = new Set(
    document.nodes
      .filter((node) => selected.has(node.id) && node.type === "stack")
      .flatMap((node) => node.data.stack?.nodeIds ?? []),
  );
  const included = document.nodes.filter(
    (node) =>
      selected.has(node.id) ||
      stackMembers.has(node.id) ||
      ancestors(node, byId).some((parent) => selectedGroups.has(parent.id)),
  );
  const includedIds = new Set(included.map((node) => node.id));
  const nodes = included.map((node) => {
    const copy = structuredClone(node);
    if (copy.parentId && !includedIds.has(copy.parentId)) {
      delete copy.parentId;
      copy.position = absolutePosition(node, document.nodes);
    }
    return copy;
  });
  return {
    nodes,
    edges: structuredClone(
      document.edges.filter(
        (edge) => includedIds.has(edge.source) && includedIds.has(edge.target),
      ),
    ),
  };
}

/**
 * Duplicates a self-contained fragment. Offsets apply only to root nodes, so
 * nested children move once. Returned ids include every newly inserted node.
 * Asset identifiers inside data remain resource references, not node identities.
 */
export function pasteFragment(
  document: CanvasDocument,
  fragment: CanvasFragment,
  offset: Point = { x: 40, y: 40 },
): { document: CanvasDocument; ids: string[] } {
  if (!Number.isFinite(offset.x) || !Number.isFinite(offset.y))
    throw new Error("粘贴偏移必须是有限数字。");
  const byId = indexNodes(fragment.nodes);
  for (const node of fragment.nodes) ancestors(node, byId);
  for (const node of fragment.nodes)
    if (node.data.stack?.nodeIds.some((id) => !byId.has(id)))
      throw new Error("复制的堆叠必须包含其引用的节点。");
  const edgeIds = new Set<string>();
  for (const edge of fragment.edges) {
    if (edgeIds.has(edge.id)) throw new Error("连线 ID 重复。");
    edgeIds.add(edge.id);
    if (!byId.has(edge.source) || !byId.has(edge.target))
      throw new Error("复制内容的连线两端必须属于复制的节点。");
  }
  if (!fragment.nodes.length) return { document, ids: [] };

  const used = new Set([
    ...document.nodes.map((node) => node.id),
    ...document.edges.map((edge) => edge.id),
  ]);
  const newId = () => {
    let id: string;
    do id = crypto.randomUUID();
    while (used.has(id));
    used.add(id);
    return id;
  };
  const remapped = new Map(fragment.nodes.map((node) => [node.id, newId()]));
  const nodes = fragment.nodes.map((node) => {
    const copy = structuredClone(node);
    copy.id = remapped.get(node.id)!;
    copy.data = remapDataReferences(copy.data, remapped);
    if (node.parentId) copy.parentId = remapped.get(node.parentId)!;
    else
      copy.position = {
        x: node.position.x + offset.x,
        y: node.position.y + offset.y,
      };
    return copy;
  });
  const ordered = orderNodesForCanvas(nodes);
  const edges = fragment.edges.map((edge) => ({
    ...structuredClone(edge),
    id: newId(),
    source: remapped.get(edge.source)!,
    target: remapped.get(edge.target)!,
  }));
  return {
    document: {
      ...document,
      nodes: [...document.nodes, ...ordered],
      edges: [...document.edges, ...edges],
    },
    ids: ordered.map((node) => node.id),
  };
}

/** Rewrites node identities only; retained media resource IDs and sources are not node identities. */
function remapDataReferences(
  data: CanvasNodeData,
  ids: ReadonlyMap<string, string>,
): CanvasNodeData {
  const remapResource = (resource: CanvasResource): CanvasResource =>
    resource.nodeId && ids.has(resource.nodeId)
      ? { ...resource, nodeId: ids.get(resource.nodeId)! }
      : resource;
  return {
    ...data,
    ...(data.taskDraft
      ? {
          taskDraft: mapCanvasToolTaskReferences(data.taskDraft, (id) =>
            ids.get(id),
          ),
        }
      : {}),
    ...(data.settings
      ? {
          settings: mapSettingsNodeReferences(data.settings, (id) =>
            ids.get(id),
          ),
        }
      : {}),
    ...(data.stack
      ? {
          stack: {
            ...data.stack,
            nodeIds: data.stack.nodeIds.map((id) => ids.get(id) ?? id),
          },
        }
      : {}),
    ...(data.timeline
      ? {
          timeline: {
            ...data.timeline,
            tracks: data.timeline.tracks.map((track) => ({
              ...track,
              clips: track.clips.map((clip) => ({
                ...clip,
                resource: remapResource(clip.resource),
              })),
            })),
          },
        }
      : {}),
    ...(data.subject
      ? {
          subject: {
            ...data.subject,
            auxiliaries: data.subject.auxiliaries.map(remapResource),
            ...(data.subject.main
              ? { main: remapResource(data.subject.main) }
              : {}),
            ...(data.subject.voice
              ? { voice: remapResource(data.subject.voice) }
              : {}),
          },
        }
      : {}),
  };
}

export const STACK_MEMBER_KINDS = [
  "image",
  "video",
  "audio",
  "text",
  "subject",
  "timeline",
  "external",
] as const;

/** Creates an ordered stack without reparenting or discarding its source nodes. */
export function stackSelection(
  document: CanvasDocument,
  ids: readonly string[],
): CanvasDocument {
  const selected = [...new Set(ids)];
  if (selected.length < 2 || selected.length > 50)
    throw new Error("创建堆叠需要选择 2–50 个节点。");
  const existing = new Set(
    document.nodes.flatMap((node) => node.data.stack?.nodeIds ?? []),
  );
  const members = selected.map((id) =>
    document.nodes.find((node) => node.id === id),
  );
  if (
    members.some(
      (node) =>
        !node ||
        node.parentId ||
        node.locked ||
        !STACK_MEMBER_KINDS.includes(
          node.type as (typeof STACK_MEMBER_KINDS)[number],
        ) ||
        existing.has(node.id),
    )
  )
    throw new Error(
      "堆叠成员必须是未锁定、未分组、且不属于其他堆叠的可引用节点。",
    );
  const first = members[0]!;
  const stack = createNode(
    "stack",
    { x: first.position.x + first.width + 60, y: first.position.y },
    { stack: { nodeIds: selected, activeIndex: 0 } },
  );
  return { ...document, nodes: [...document.nodes, stack] };
}

export function updateStack(
  document: CanvasDocument,
  id: string,
  stack: StackData,
): CanvasDocument {
  const target = document.nodes.find((node) => node.id === id);
  if (!target || target.type !== "stack" || target.locked) return document;
  const existing = new Set(
    document.nodes
      .filter((node) => node.id !== id)
      .flatMap((node) => node.data.stack?.nodeIds ?? []),
  );
  if (
    stack.nodeIds.length > 50 ||
    new Set(stack.nodeIds).size !== stack.nodeIds.length ||
    !Number.isSafeInteger(stack.activeIndex) ||
    stack.activeIndex < 0 ||
    stack.activeIndex >= Math.max(1, stack.nodeIds.length) ||
    stack.nodeIds.some((id) => {
      const node = document.nodes.find((node) => node.id === id);
      return (
        !node ||
        node.parentId ||
        existing.has(id) ||
        !STACK_MEMBER_KINDS.includes(
          node.type as (typeof STACK_MEMBER_KINDS)[number],
        )
      );
    })
  )
    throw new Error("堆叠引用无效，或成员已属于其他堆叠。");
  return {
    ...document,
    nodes: document.nodes.map((node) =>
      node.id === id
        ? {
            ...node,
            data: {
              ...node.data,
              stack: {
                nodeIds: [...stack.nodeIds],
                activeIndex: stack.activeIndex,
              },
            },
          }
        : node,
    ),
  };
}

/** Captures a media snapshot so timeline/subject edits do not lose assets when the source node is removed. */
export function resourceFromNode(node: CanvasNode): CanvasResource | null {
  if (
    !["image", "video", "audio", "file"].includes(node.type) ||
    !node.data.src
  )
    return null;
  return {
    id: `node:${node.id}`,
    nodeId: node.id,
    kind: node.type as CanvasResource["kind"],
    title: node.data.title,
    src: node.data.src,
    ...node.data.media,
    ...(node.data.mimeType ? { mimeType: node.data.mimeType } : {}),
  };
}
