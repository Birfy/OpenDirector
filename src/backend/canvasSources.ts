import {
  itemBlob,
  withMediaSuffix,
  type LibraryItem,
} from "../canvas/library/libraryClient.ts";
import type { CanvasResource, SubjectData } from "../canvas/model.ts";
import type { SubjectMediaSlot } from "../canvas/subjectMedia.ts";
import { headers, json, request, responseError } from "./api.ts";
import { creationClient } from "./creationClient.ts";
import {
  cachedRequest,
  peekCached,
  prefetchRequest,
} from "./requestCache.ts";

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
/** The open canvas reads its own document, so this only guards other projects. */
const SOURCES_MAX_AGE_MS = 120_000;
const sourcesKey = (projectId: string) => `library:canvases:${projectId}`;

export const canvasSources = (
  projectId: string,
  read: { fresh?: boolean } = {},
) =>
  cachedRequest<CanvasSource[]>(
    sourcesKey(projectId),
    () => request<CanvasSource[]>(`/library/canvases/${projectId}/sources`),
    { maxAgeMs: SOURCES_MAX_AGE_MS, ...read },
  );

/** Sources already fetched for this project, so the tab paints instantly. */
export const peekCanvasSources = (projectId: string) =>
  peekCached<CanvasSource[]>(sourcesKey(projectId), SOURCES_MAX_AGE_MS);

export function prefetchCanvasSources(projectId: string) {
  prefetchRequest(
    sourcesKey(projectId),
    () => request<CanvasSource[]>(`/library/canvases/${projectId}/sources`),
    { maxAgeMs: SOURCES_MAX_AGE_MS },
  );
}
/**
 * A card shows a few hundred pixels, so it asks for the rendered preview;
 * copying a source still reads the original bytes.
 */
export const canvasSourceMedia = (
  projectId: string,
  source: CanvasSource,
  slot = "main",
  size?: "thumb",
) =>
  `/api/library/canvases/${projectId}/nodes/${encodeURIComponent(source.nodeId)}/media/${encodeURIComponent(slot)}?revision=${source.revision}${size ? `&size=${size}` : ""}`;

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
  {
    const client = creationClient(projectId);
    const ref = await client.importBlob(blob, name, facts.kind);
    assetId = ref.assetId;
    src = await client.mediaUrl(assetId);
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
