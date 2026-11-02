import type { ReferenceAsset } from "../canvas/chatReferenceContent.ts";
import { request } from "./api.ts";
import { creationPath } from "./creationClient.ts";

export async function loadReferenceCatalog(
  projectId: string,
  signal?: AbortSignal,
): Promise<ReferenceAsset[]> {
  return request(`${creationPath(projectId)}/reference-catalog`, { signal });
}
