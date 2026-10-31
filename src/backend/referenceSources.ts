import type { CanvasNode } from "../canvas/model.ts";
import type { ReferenceContent } from "../canvas/chatReferenceContent.ts";
import { assistantReferences } from "../canvas/assistantReferences.ts";
import { creationEnabled } from "./creationClient.ts";
import { loadReferenceCatalog } from "./referenceCatalog.ts";
import { prepareReferences } from "./generation.ts";

/** The legacy workspace owns local bodies; update only already-followed bridges.
 * Unified projects already own the authoritative sources and never use this path.
 */
export async function refreshReferenceSources(
  projectId: string,
  nodes: CanvasNode[],
  content: ReferenceContent,
  signal: AbortSignal,
) {
  if (creationEnabled()) return;
  const catalog = await loadReferenceCatalog(projectId, signal);
  const following = content.filter(
    (part) => part.type === "reference" && part.binding !== "asset",
  );
  const selected = nodes.filter((node) =>
    following.some((part) => {
      if (part.type !== "reference") return false;
      const source = catalog.find(
        (asset) =>
          asset.nodeId === part.nodeId && asset.sourceRole === part.sourceRole,
      );
      return (source?.logicalNodeId ?? part.nodeId) === node.id;
    }),
  );
  if (selected.length) {
    const sources = selected.flatMap((node) =>
      node.type === "text"
        ? [
            {
              kind: "text" as const,
              nodeId: node.id,
              title: node.data.title,
              text: node.data.text ?? "",
              assetId: node.data.backendAssetId,
            },
          ]
        : assistantReferences([node]),
    );
    await prepareReferences(projectId, sources, signal);
  }
}
