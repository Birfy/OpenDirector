import { headers, request, assetBlob } from "./api.ts";
import { creationClient, creationEnabled } from "./creationClient.ts";
import { fingerprint } from "./generation.ts";
import { loadReferenceCatalog } from "./referenceCatalog.ts";
import {
  classifyImportFile,
  readEditorResource,
} from "../canvas/editorMedia.ts";
import { assertUpload, assertReferenceSize } from "../canvas/uploadPolicy.ts";
import {
  fingerprintMatches,
  type ReferenceAsset,
} from "../canvas/chatReferenceContent.ts";

export type ChooseReferenceSource = (
  matches: ReferenceAsset[],
  signal: AbortSignal,
) => Promise<ReferenceAsset>;
export async function uploadReferenceFile(
  projectId: string,
  file: File,
  signal: AbortSignal,
  choose: ChooseReferenceSource,
): Promise<ReferenceAsset> {
  const { kind } = classifyImportFile(file);
  assertUpload(kind, "reference");
  assertReferenceSize(kind, file.size);
  if (kind === "text" && !(await readEditorResource(file, signal)).text?.trim())
    throw new Error("空白文本不能作为参考。");
  signal.throwIfAborted();
  const digest = await fingerprint(file);
  const matches = (await loadReferenceCatalog(projectId, signal)).filter(
    (asset) =>
      asset.available &&
      asset.kind === kind &&
      fingerprintMatches(asset, digest),
  );
  if (matches.length) {
    const selected =
      matches.length === 1 ? matches[0]! : await choose(matches, signal);
    signal.throwIfAborted();
    const latest = (await loadReferenceCatalog(projectId, signal)).find(
      (asset) =>
        asset.id === selected.id &&
        asset.nodeId === selected.nodeId &&
        asset.sourceRole === selected.sourceRole &&
        asset.available &&
        fingerprintMatches(asset, digest),
    );
    const blob = creationEnabled()
      ? await creationClient(projectId).blob(selected.id)
      : await assetBlob(projectId, selected.id, signal);
    if (!latest || !fingerprintMatches(latest, await fingerprint(blob)))
      throw new Error("所选来源已变化，请重新选择。");
    return latest;
  }
  if (creationEnabled()) {
    const client = creationClient(projectId);
    const ref = await client.importBlob(
      file,
      file.name.replace(/\.markdown$/i, ".md"),
      kind as "image" | "video" | "audio" | "text",
    );
    signal.throwIfAborted();
    const asset = client.snapshot.assets.find(
      (asset) => asset.id === ref.assetId,
    )!;
    return {
      id: asset.id,
      name: asset.name,
      kind: asset.kind,
      type: asset.metadata.mimeType,
      size: asset.metadata.size,
      fingerprint: asset.fingerprint,
      available: true,
    };
  }
  const id = crypto.randomUUID();
  const upload = (reuse?: string) =>
    request<{ asset: ReferenceAsset | null; matches: ReferenceAsset[] }>(
      `/data/${projectId}/assets/${id}`,
      {
        method: "PUT",
        signal,
        headers: {
          ...headers,
          "Content-Type": "application/octet-stream",
          "X-Asset-Name": encodeURIComponent(
            file.name.replace(/\.markdown$/i, ".md"),
          ),
          ...(reuse ? { "X-Reuse-Asset-Id": reuse } : {}),
        },
        body: file,
      },
    );
  let result = await upload();
  if (result.matches.length)
    result = await upload((await choose(result.matches, signal)).id);
  signal.throwIfAborted();
  if (!result.asset) throw new Error("未找到可用的素材来源。");
  return result.asset;
}
