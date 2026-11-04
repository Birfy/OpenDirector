import type { CanvasNode } from "./model.ts";
import { tNow } from "../i18n/messages.ts";

export function indexNodes(
  nodes: readonly CanvasNode[],
): Map<string, CanvasNode> {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  if (byId.size !== nodes.length) throw new Error(tNow("errors.hierarchy.duplicate"));
  return byId;
}

/** Nearest parent first. Invalid hierarchies fail before any document changes. */
export function ancestors(
  node: CanvasNode,
  byId: ReadonlyMap<string, CanvasNode>,
): CanvasNode[] {
  const result: CanvasNode[] = [];
  const visited = new Set([node.id]);
  let parentId = node.parentId;
  while (parentId) {
    if (visited.has(parentId)) throw new Error(tNow("errors.hierarchy.cycle"));
    visited.add(parentId);
    const parent = byId.get(parentId);
    if (!parent) throw new Error(tNow("errors.hierarchy.parentMissing", { id: parentId }));
    result.push(parent);
    parentId = parent.parentId;
  }
  return result;
}

/** Locking a container protects its descendants without changing their own lock flags. */
export function isNodeLocked(
  node: CanvasNode,
  byId: ReadonlyMap<string, CanvasNode>,
): boolean {
  return (
    Boolean(node.locked) ||
    ancestors(node, byId).some((parent) => parent.locked)
  );
}

export function lockedNodeIds(nodes: readonly CanvasNode[]): Set<string> {
  const byId = indexNodes(nodes);
  return new Set(
    nodes.filter((node) => isNodeLocked(node, byId)).map((node) => node.id),
  );
}
