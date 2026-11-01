import { headers, json, request, responseError } from "./api.ts";
import { creationClient, creationEnabled } from "./creationClient.ts";
import type { CanvasResource, SubjectData } from "../canvas/model.ts";
import {
  withMediaSuffix,
  type LibraryItem,
  itemBlob,
} from "../canvas/library/libraryClient.ts";
import type { SubjectMediaSlot } from "../canvas/subjectMedia.ts";

export interface CanvasSource {
  nodeId: string;
  title: string;
  kind: string;
  revision: string;
  main: CanvasResource;
  hasVoice: boolean;
  auxiliaryCount: number;
}
export interface SourceMedia {
  slot: string;
  sourceSlot?: string;
  sha: string;
  kind: CanvasResource["kind"];
  name: string;
  metadata: {
    mimeType: string;
    size: number;
    width?: number | null;
    height?: number | null;
    durationSeconds?: number | null;
  };
}
export const canvasSources = (projectId: string) =>
  request<CanvasSource[]>(`/library/canvases/${projectId}/sources`);
export const canvasSourceMedia = (
  projectId: string,
  source: CanvasSource,
  slot = "main",
) =>
  `/api/library/canvases/${projectId}/nodes/${encodeURIComponent(source.nodeId)}/media/${encodeURIComponent(slot)}?revision=${source.revision}`;

export async function copyOwnedSourceMedia(
  projectId: string,
  facts: SourceMedia,
  blob: Blob,
): Promise<CanvasResource> {
  const digest = Array.from(
    new Uint8Array(
      await crypto.subtle.digest("SHA-256", await blob.arrayBuffer()),
    ),
    (byte) => byte.toString(16).padStart(2, "0"),
  ).join("");
  if (digest !== facts.sha) throw new Error("来源素材已变化，请重新选择。");
  const name = withMediaSuffix(facts.name, facts.metadata.mimeType);
  let assetId: string, src: string;
  if (creationEnabled()) {
    const client = creationClient(projectId);
    const ref = await client.importBlob(blob, name, facts.kind);
    assetId = ref.assetId;
    src = await client.mediaUrl(assetId);
  } else {
    assetId = crypto.randomUUID();
    await request(`/data/${projectId}/assets/${assetId}`, {
      method: "PUT",
      headers: {
        "Content-Type": facts.metadata.mimeType,
        "X-Asset-Name": encodeURIComponent(name),
      },
      body: blob,
    });
    src = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error("无法保存素材副本。"));
      reader.readAsDataURL(new Blob([blob], { type: facts.metadata.mimeType }));
    });
  }
  return {
    id: assetId,
    assetId,
    src,
    kind: facts.kind,
    title: name,
    mimeType: facts.metadata.mimeType,
    byteSize: facts.metadata.size,
    width: facts.metadata.width ?? undefined,
    height: facts.metadata.height ?? undefined,
    durationSeconds: facts.metadata.durationSeconds ?? undefined,
    ...(facts.kind === "text" ? { text: await blob.text() } : {}),
  };
}

export async function copyCanvasSource(
  projectId: string,
  originProjectId: string,
  source: CanvasSource,
  slot: SubjectMediaSlot = "main",
  subject = true,
) {
  const prepared = await request<{
    title: string;
    kind: string;
    category: string;
    description: string;
    media: SourceMedia[];
  }>(
    `/library/canvases/${originProjectId}/prepare`,
    json("POST", {
      nodeId: source.nodeId,
      revision: source.revision,
      slot,
      subject,
    }),
  );
  // Read every slot before registering any copy or publishing a target update.
  const downloaded = await Promise.all(
    prepared.media.map(async (facts) => {
      const response = await fetch(
        canvasSourceMedia(originProjectId, source, facts.sourceSlot),
        { headers },
      );
      if (!response.ok) throw await responseError(response);
      return { facts, blob: await response.blob() };
    }),
  );
  const resources = new Map<string, CanvasResource>();
  for (const { facts, blob } of downloaded)
    resources.set(
      facts.slot,
      await copyOwnedSourceMedia(projectId, facts, blob),
    );
  const data: SubjectData = {
    description: prepared.description,
    category: prepared.category,
    main: resources.get("main"),
    auxiliaries: prepared.media
      .filter((f) => f.slot.startsWith("auxiliary:"))
      .map((f) => resources.get(f.slot)!),
    ...(resources.has("voice") ? { voice: resources.get("voice") } : {}),
  };
  return {
    title: prepared.title,
    kind: prepared.kind,
    subject: data,
    resource: resources.get(slot)!,
  };
}
export async function copySubjectAsset(
  projectId: string,
  item: LibraryItem,
  slot: SubjectMediaSlot,
) {
  const facts = await request<SourceMedia>(
    `/library/items/${item.id}/prepare-subject-media`,
    json("POST", { revision: item.revision, slot }),
  );
  return copyOwnedSourceMedia(projectId, facts, await itemBlob(item));
}
