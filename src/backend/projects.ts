import { ApiError, headers, json, request, sessionId } from "./api.ts";
import { currentChat, flushChatDraft } from "./chatDrafts.ts";

/** Canvas documents use the stable identity of an existing filesystem project. */

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function backendProjectId(documentId: string) {
  if (UUID.test(documentId)) return documentId.toLowerCase();
  throw new ApiError("请先打开本地项目。", 409, "invalid_project");
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
    if (!active) return;
    const value = currentChat(active);
    // Save the latest draft and release the lease atomically, as MuseShow does.
    void fetch(`/api/sessions/${sessionId}${value ? "/close" : ""}`, {
      ...(value
        ? json("POST", { projectId: active, conversation: value })
        : { method: "DELETE" }),
      headers: {
        ...headers,
        ...(value ? { "Content-Type": "application/json" } : {}),
      },
      keepalive: true,
    }).catch(() => {});
  });
}

/** Opening again renews a lease that lapsed while the page was suspended. */
export async function openBackendProject(documentId: string, _title: string) {
  const id = backendProjectId(documentId);
  if (opening) await opening.catch(() => {});
  const task = (async () => {
    if (active && active !== id) await flushChatDraft(active);
    await request(`/projects/${id}/open`, { method: "POST" });
    active = id;
    keepAlive();
    return id;
  })();
  opening = task;
  try {
    return await task;
  } finally {
    if (opening === task) opening = null;
  }
}

/** Pause lease renewal while the current project directory is renamed. */
export async function releaseBackendProject() {
  if (opening) await opening.catch(() => {});
  if (active) await flushChatDraft(active);
  active = null;
  await request(`/sessions/${sessionId}`, { method: "DELETE" });
}
