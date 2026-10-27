import type { CanvasDocument, CanvasNode, CanvasNodeKind } from "./model.ts";
import { indexNodes, isNodeLocked } from "./hierarchy.ts";

export const CANVAS_TAGS = [
  { id: "default-tag-1", label: "青色", color: "#00cae0" },
  { id: "default-tag-2", label: "蓝色", color: "#6d7cff" },
  { id: "default-tag-3", label: "紫色", color: "#be68ff" },
  { id: "default-tag-4", label: "橙色", color: "#ff9230" },
  { id: "default-tag-5", label: "黄色", color: "#ffd600" },
] as const;
export type CanvasTagId = (typeof CANVAS_TAGS)[number]["id"];
export const isCanvasTagId = (value: unknown): value is CanvasTagId =>
  CANVAS_TAGS.some((tag) => tag.id === value);
export const isTaggable = (kind: CanvasNodeKind) =>
  kind !== "file" && kind !== "stack";
export function tagSelectionState(
  nodes: readonly CanvasNode[],
  ids: readonly string[],
  tag: CanvasTagId,
): "none" | "all" | "partial" {
  const selected = nodes.filter(
    (n) => ids.includes(n.id) && isTaggable(n.type),
  );
  const count = selected.filter((n) => n.data.tags?.includes(tag)).length;
  return !count ? "none" : count === selected.length ? "all" : "partial";
}
/** One document change owns the whole batch; locked objects never change indirectly. */
export function setNodeTag(
  document: CanvasDocument,
  ids: readonly string[],
  tag: CanvasTagId,
  enabled: boolean,
): CanvasDocument {
  if (!isCanvasTagId(tag)) throw new Error("未知的节点标签。");
  const selected = new Set(ids),
    byId = indexNodes(document.nodes);
  let changed = false;
  const nodes = document.nodes.map((node) => {
    if (
      !selected.has(node.id) ||
      !isTaggable(node.type) ||
      isNodeLocked(node, byId)
    )
      return node;
    const before = node.data.tags ?? [];
    if (before.includes(tag) === enabled) return node;
    changed = true;
    const tags = CANVAS_TAGS.map((t) => t.id).filter((id) =>
      id === tag ? enabled : before.includes(id),
    );
    return { ...node, data: { ...node.data, tags } };
  });
  return changed ? { ...document, nodes } : document;
}
