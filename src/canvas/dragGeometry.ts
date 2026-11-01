import { ancestors, indexNodes } from "./hierarchy.ts";
import type { CanvasNode, Rect } from "./model.ts";
import type { NodePosition } from "./snapping.ts";

/** Retain source data and resolve only bounds affected by a transient move. */
export function prepareDragGeometry(nodes: readonly CanvasNode[]) {
  const byId = indexNodes(nodes);
  const chains = nodes.map((node) => ({
    node,
    parents: ancestors(node, byId),
  }));
  return (positions: readonly NodePosition[]) => {
    const moved = new Map(positions.map((item) => [item.id, item.position]));
    const changed = new Map<string, Rect>();
    for (const { node, parents } of chains) {
      if (
        !moved.has(node.id) &&
        !parents.some((parent) => moved.has(parent.id))
      )
        continue;
      const position = moved.get(node.id) ?? node.position;
      let x = position.x,
        y = position.y;
      for (const parent of parents) {
        const position = moved.get(parent.id) ?? parent.position;
        x += position.x;
        y += position.y;
      }
      changed.set(node.id, { x, y, width: node.width, height: node.height });
    }
    return changed;
  };
}
