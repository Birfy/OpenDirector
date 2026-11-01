import type { CanvasNode } from "./model.ts";

export function indexNodes(
  nodes: readonly CanvasNode[],
): Map<string, CanvasNode> {
  const byId = new Map(nodes.map((node) => [node.id, node]));
  if (byId.size !== nodes.length) throw new Error("节点 ID 重复。");
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
    if (visited.has(parentId)) throw new Error("画布分组存在循环引用。");
    visited.add(parentId);
    const parent = byId.get(parentId);
    if (!parent) throw new Error(`找不到父节点：${parentId}`);
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
