import { mapSettingsNodeReferences, type CanvasDocument } from "./model.ts";
import {
  copySelection,
  pasteFragment,
  orderNodesForCanvas,
} from "./operations.ts";

/** New project and node identities; media payloads remain independent document snapshots. */
export function duplicateCanvasDocument(
  source: CanvasDocument,
): CanvasDocument {
  const fragment = copySelection(
    source,
    source.nodes.map((node) => node.id),
  );
  const copy = pasteFragment(
    {
      ...structuredClone(source),
      id: crypto.randomUUID(),
      title: `${source.title} · 副本`,
      nodes: [],
      edges: [],
    },
    fragment,
    { x: 0, y: 0 },
  ).document;
  const sourceByDepth = orderNodesForCanvas(fragment.nodes);
  const ids = new Map(
    sourceByDepth.map((node, index) => [node.id, copy.nodes[index]!.id]),
  );
  copy.settings = mapSettingsNodeReferences(copy.settings, (id) => ids.get(id));
  return copy;
}

/** Async generated results may arrive while a project is saving for a switch. */
export async function persistCurrentDocument(
  read: () => CanvasDocument,
  persist: (snapshot: CanvasDocument) => Promise<boolean>,
): Promise<boolean> {
  for (;;) {
    const snapshot = read();
    if (!(await persist(snapshot))) return false;
    if (read() === snapshot) return true;
  }
}
