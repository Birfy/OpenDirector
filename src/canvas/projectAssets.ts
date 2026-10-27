import { copyResource, nodeResources } from "./dataBoundary.ts";
import type {
  CanvasDocument,
  CanvasResource,
  CanvasNodeData,
} from "./model.ts";
import { resourceFromNode } from "./operations.ts";

/** Reuse the validated resource owners, including embedded timeline/subject media. */
export function projectAssets(document: CanvasDocument): CanvasResource[] {
  const resources = new Map<string, CanvasResource>();
  for (const node of document.nodes) {
    const direct = resourceFromNode(node);
    for (const resource of [
      ...(direct ? [direct] : []),
      ...nodeResources(node.data),
    ]) {
      if (!resource.src) continue;
      const key = `${resource.kind}:${resource.src}`;
      if (!resources.has(key)) {
        const detached = copyResource(resource);
        delete detached.nodeId;
        resources.set(key, { ...detached, id: `asset-${resources.size}` });
      }
    }
  }
  return [...resources.values()];
}
export function resourceNodeData(
  resource: CanvasResource,
): Partial<CanvasNodeData> {
  return {
    src: resource.src,
    title: resource.title,
    mimeType: resource.mimeType,
    assetState: "ready",
    mediaRole: "asset",
    media: {
      width: resource.width,
      height: resource.height,
      durationSeconds: resource.durationSeconds,
    },
  };
}
