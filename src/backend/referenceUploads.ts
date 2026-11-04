import {
  fingerprintMatches,
  type ReferenceAsset,
} from "../canvas/chatReferenceContent.ts";
import {
  classifyImportFile,
  readEditorResource,
} from "../canvas/editorMedia.ts";
import { assertReferenceSize, assertUpload } from "../canvas/uploadPolicy.ts";
import { creationClient } from "./creationClient.ts";
import { tNow } from "../i18n/messages.ts";
import { fingerprint } from "./generation.ts";
import { loadReferenceCatalog } from "./referenceCatalog.ts";

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
    throw new Error(tNow("errors.backend.blankReference"));
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
    const blob = await creationClient(projectId).blob(selected.id);
    if (!latest || !fingerprintMatches(latest, await fingerprint(blob)))
      throw new Error(tNow("errors.backend.sourceChanged"));
    return latest;
  }
  {
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
}
