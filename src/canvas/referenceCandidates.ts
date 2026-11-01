import type { CanvasNode } from "./model.ts";
import { nodeMentionOptions, type MentionOption } from "./referenceMentions.ts";
import type { ReferenceAsset } from "./chatReferenceContent.ts";
import { assetDisplayName } from "./assetNames.ts";

export function assetOptionId(
  asset: Pick<ReferenceAsset, "id" | "nodeId" | "sourceRole">,
) {
  return `asset:${asset.id}${asset.nodeId ? `@${asset.nodeId}:${asset.sourceRole ?? ""}` : ""}`;
}

/** One inventory entry per logical source; identical independent sources stay distinct. */
export function referenceCandidates(
  nodes: readonly CanvasNode[],
  assets: readonly ReferenceAsset[],
  issue: (node: CanvasNode) => string | null = () => null,
): MentionOption[] {
  const options = nodeMentionOptions(nodes, issue, "画布素材").map(
    (option) => ({ ...option, id: `node:${option.id}` }),
  );
  for (const asset of assets) {
    if (asset.available === false) continue;
    if (!["image", "video", "audio", "text"].includes(asset.kind ?? ""))
      continue;
    const owner = nodes.find(
      (node) => node.id === asset.nodeId || node.id === asset.logicalNodeId,
    );
    if (owner) continue;
    options.push({
      id: assetOptionId(asset),
      kind: asset.kind as MentionOption["kind"],
      title: assetDisplayName(asset.nodeTitle || asset.name),
      detail: "项目素材",
      disabledReason:
        asset.size >
        (asset.kind === "text"
          ? 64 * 1024
          : asset.kind === "image"
            ? 32 * 1024 * 1024
            : 50 * 1024 * 1024)
          ? "文件超过参考大小限制"
          : null,
    });
  }
  return options;
}
