import { ApiError, headers, json, request, sessionId } from "./api.ts";

/** Each canvas document owns one project of the local API, opened on first use. */

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const KEY = "opendesign.backendProject.";

export function backendProjectId(documentId: string) {
  if (UUID.test(documentId)) return documentId.toLowerCase();
  try {
    const saved = localStorage.getItem(KEY + documentId);
    if (saved && UUID.test(saved)) return saved;
  } catch {
    // Without storage the mapping lasts for this page only.
  }
  const id = crypto.randomUUID();
  try {
    localStorage.setItem(KEY + documentId, id);
  } catch {
    // See above.
  }
  return id;
}

/** Project folders are named after the project; the suffix keeps equal titles apart. */
export function backendProjectName(title: string, projectId: string) {
  const base =
    title
      // eslint-disable-next-line no-control-regex
      .replace(/[<>:"/\\|?*\x00-\x1f]/g, "_")
      .trim()
      .slice(0, 80)
      .replace(/[. ]+$/, "") || "画布";
  return `${base} · ${projectId.slice(0, 8)}`;
}

let active: string | null = null;
let opening: Promise<string> | null = null;
let heartbeat: number | undefined;

function keepAlive() {
  if (heartbeat !== undefined) return;
  heartbeat = window.setInterval(() => {
    if (active)
      void request(
        `/sessions/${sessionId}`,
        json("PUT", { projectId: active }),
      ).catch(() => {});
  }, 15000);
  window.addEventListener("pagehide", () => {
    if (active)
      void fetch(`/api/sessions/${sessionId}`, {
        method: "DELETE",
        headers,
        keepalive: true,
      }).catch(() => {});
  });
}

/** Opening again renews a lease that lapsed while the page was suspended. */
export async function openBackendProject(documentId: string, title: string) {
  const id = backendProjectId(documentId);
  if (opening) await opening.catch(() => {});
  opening = (async () => {
    try {
      await request(`/projects/${id}/open`, { method: "POST" });
    } catch (error) {
      if (!(error instanceof ApiError && error.status === 404)) throw error;
      await request(
        "/projects",
        json("POST", { id, name: backendProjectName(title, id) }),
      );
    }
    active = id;
    keepAlive();
    return id;
  })();
  try {
    return await opening;
  } finally {
    opening = null;
  }
}
