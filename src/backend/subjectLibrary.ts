import { request, json, headers, responseError } from "./api.ts";
import { creationClient, creationEnabled } from "./creationClient.ts";
import type { CanvasResource, SubjectData } from "../canvas/model.ts";
import type { LibraryItem } from "../canvas/library/libraryClient.ts";

export type SubjectLibraryItem = LibraryItem & {
  available: boolean;
  issue: string | null;
};
type Media = {
  slot: string;
  sha: string;
  name: string;
  kind: "image" | "video" | "audio";
  metadata: {
    mimeType: string;
    size: number;
    width: number | null;
    height: number | null;
    durationSeconds: number | null;
  };
};
type Prepared = { item: LibraryItem; media: Media[] };
export const listLibrarySubjects = (query: string) =>
  request<SubjectLibraryItem[]>(
    `/library/subjects?query=${encodeURIComponent(query)}`,
  );
export const backUpLibrarySubject = (projectId: string, nodeId: string) =>
  request<LibraryItem>(
    "/library/subjects/from-canvas",
    json("POST", { projectId, nodeId }),
  );

/** Validate the whole selection and read every byte before registering copies. */
export async function copyLibrarySubjects(
  projectId: string,
  items: LibraryItem[],
) {
  const prepared = await request<Prepared[]>(
    "/library/subjects/prepare",
    json("POST", {
      items: items.map((item) => ({ id: item.id, revision: item.revision })),
    }),
  );
  const downloaded: {
    item: LibraryItem;
    media: { facts: Media; blob: Blob }[];
  }[] = [];
  for (const source of prepared) {
    const media = [];
    for (const facts of source.media) {
      const response = await fetch(
        `/api/library/items/${source.item.id}/subject-media/${encodeURIComponent(facts.slot)}?revision=${source.item.revision}`,
        { headers },
      );
      if (!response.ok) throw await responseError(response);
      media.push({ facts, blob: await response.blob() });
    }
    downloaded.push({ item: source.item, media });
  }
  const client = creationEnabled() ? creationClient(projectId) : null;
  const copies = new Map<string, CanvasResource>();
  const results: { item: LibraryItem; subject: SubjectData }[] = [];
  for (const source of downloaded) {
    const slots = new Map<string, CanvasResource>();
    for (const { facts, blob } of source.media) {
      let resource = copies.get(facts.sha);
      if (!resource) {
        let src: string;
        let assetId: string;
        if (client) {
          const ref = await client.importBlob(blob, facts.name, facts.kind);
          assetId = ref.assetId;
          src = await client.mediaUrl(assetId);
        } else {
          assetId = crypto.randomUUID();
          await request(`/data/${projectId}/assets/${assetId}`, {
            method: "PUT",
            headers: {
              "Content-Type": blob.type,
              "X-Asset-Name": encodeURIComponent(facts.name),
            },
            body: blob,
          });
          src = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.onerror = () => reject(new Error("无法保存主体素材副本。"));
            reader.readAsDataURL(blob);
          });
        }
        resource = {
          id: assetId,
          assetId,
          src,
          kind: facts.kind,
          title: facts.name,
          mimeType: facts.metadata.mimeType,
          byteSize: facts.metadata.size,
          width: facts.metadata.width ?? undefined,
          height: facts.metadata.height ?? undefined,
          durationSeconds: facts.metadata.durationSeconds ?? undefined,
        };
        copies.set(facts.sha, resource);
      }
      slots.set(facts.slot, { ...resource });
    }
    results.push({
      item: source.item,
      subject: {
        description: source.item.subject!.description,
        category: source.item.subject!.category,
        main: slots.get("main"),
        auxiliaries: source.media
          .filter((value) => value.facts.slot.startsWith("auxiliary:"))
          .map((value) => slots.get(value.facts.slot)!),
        ...(slots.has("voice") ? { voice: slots.get("voice") } : {}),
        librarySource: {
          itemId: source.item.id,
          revision: source.item.revision,
          importId: crypto.randomUUID(),
        },
      },
    });
  }
  return results;
}
