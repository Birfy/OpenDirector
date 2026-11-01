import { request } from "./api.ts";
import { creationEnabled, creationPath } from "./creationClient.ts";
import type { ReferenceAsset } from "../canvas/chatReferenceContent.ts";

export async function loadReferenceCatalog(
  projectId: string,
  signal?: AbortSignal,
): Promise<ReferenceAsset[]> {
  if (creationEnabled())
    return request(`${creationPath(projectId)}/reference-catalog`, { signal });
  const [assets, canvas] = await Promise.all([
    request<(ReferenceAsset & { kind: string; durationMs?: number | null })[]>(
      `/projects/${projectId}/assets`,
      { signal },
    ),
    request<{
      availableAssetIds: string[];
      referenceSources?: {
        id: string;
        assetId: string;
        title: string;
        sourceRole?: string;
        logicalNodeId?: string;
      }[];
    }>(`/projects/${projectId}/canvas`, { signal }),
  ]);
  return assets.flatMap((asset) => {
    asset = {
      ...asset,
      ...(asset.durationMs ? { durationSeconds: asset.durationMs / 1000 } : {}),
      available: canvas.availableAssetIds.includes(asset.id),
    };
    const owners =
      canvas.referenceSources?.filter(
        (source) => source.assetId === asset.id,
      ) ?? [];
    return owners.length
      ? owners.map((owner) => ({
          ...asset,
          nodeId: owner.id,
          nodeTitle: owner.title,
          sourceRole: owner.sourceRole,
          logicalNodeId: owner.logicalNodeId,
        }))
      : [{ ...asset }];
  });
}
