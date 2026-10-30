import type { CanvasNode } from "./model.ts";
import { nodeMentionOptions, type MentionOption } from "./referenceMentions.ts";
import type { ReferenceAsset } from "./chatReferenceContent.ts";

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
      (node) =>
        node.id === asset.nodeId ||
        node.data.src?.split(/[?#]/)[0].endsWith(`/assets/${asset.id}`),
    );
    if (owner) continue;
    options.push({
      id: `asset:${asset.id}`,
      kind: asset.kind as MentionOption["kind"],
      title: asset.name,
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
