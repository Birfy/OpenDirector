import { ApiError, headers, json, request, sessionId } from "./api.ts";
import { currentChat, flushChatDraft } from "./chatDrafts.ts";
import { creationClient, creationEnabled } from "./creationClient.ts";

/** Canvas documents use the stable identity of an existing filesystem project. */

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function backendProjectId(documentId: string) {
  if (UUID.test(documentId)) return documentId.toLowerCase();
  throw new ApiError("请先打开本地项目。", 409, "invalid_project");
}

let active: string | null = null;
let opening: Promise<unknown> | null = null;
let heartbeat: number | undefined;

function keepAlive() {
  if (heartbeat !== undefined) return;
  heartbeat = window.setInterval(() => {
    if (active)
      void request(
        `${creationEnabled() ? "/creation" : ""}/sessions/${sessionId}`,
        json("PUT", { projectId: active }),
      ).catch(() => {});
  }, 15000);
  window.addEventListener("pagehide", () => {
    if (!active) return;
    const value = creationEnabled() ? null : currentChat(active);
    // Save the latest draft and release the lease atomically, as MuseShow does.
    void fetch(
      `/api${creationEnabled() ? "/creation" : ""}/sessions/${sessionId}${value ? "/close" : ""}`,
      {
        ...(value
          ? json("POST", { projectId: active, conversation: value })
          : { method: "DELETE" }),
        headers: {
          ...headers,
          ...(value ? { "Content-Type": "application/json" } : {}),
        },
        keepalive: true,
      },
    ).catch(() => {});
  });
}

function serializeSessionChange<T>(operation: () => Promise<T>): Promise<T> {
  const task = (opening ?? Promise.resolve()).catch(() => {}).then(operation);
  opening = task;
  return task.finally(() => {
    if (opening === task) opening = null;
  });
}

/** Previews use the visible project's lease; they must never reactivate an old
 * editor's project after a queued navigation or cancellation. */
export function requireActiveBackendProject(
  documentId: string,
  signal: AbortSignal,
) {
  const id = backendProjectId(documentId);
  return serializeSessionChange(async () => {
    signal.throwIfAborted();
    if (active !== id)
      throw new DOMException("工程已切换，请重新打开选区工具。", "AbortError");
    return id;
  });
}

/** Both creating and opening a project move the server's single session lease. */
function activateBackendProject<T>(
  documentId: string,
  activate: () => Promise<T>,
) {
  const id = backendProjectId(documentId);
  return serializeSessionChange(async () => {
    const previous = active;
    if (previous && previous !== id && !creationEnabled())
      await flushChatDraft(previous);
    const value = await activate();
    active = id;
    if (previous && previous !== id && creationEnabled())
      creationClient(previous).close();
    keepAlive();
    return value;
  });
}

/** Creation acquires the new lease too, so drafts must flush before its request. */
export function createBackendProject<T>(
  documentId: string,
  create: () => Promise<T>,
) {
  return activateBackendProject(documentId, create);
}

/** Opening again renews a lease that lapsed while the page was suspended. */
export function openBackendProject(documentId: string, _title: string) {
  const id = backendProjectId(documentId);
  return activateBackendProject(id, async () => {
    await request(
      `${creationEnabled() ? "/creation" : ""}/projects/${id}/open`,
      { method: "POST" },
    );
    return id;
  });
}

/** Pause lease renewal while the current project directory is renamed. */
export function releaseBackendProject() {
  return serializeSessionChange(async () => {
    if (active && !creationEnabled()) await flushChatDraft(active);
    await request(
      `${creationEnabled() ? "/creation" : ""}/sessions/${sessionId}`,
      { method: "DELETE" },
    );
    active = null;
  });
}
