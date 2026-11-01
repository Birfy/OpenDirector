import { json, request, sessionId } from "./api.ts";
import type { Conversation } from "./chat.ts";
import { creationEnabled } from "./creationClient.ts";

// Draft writes are serialized per project; replies remain server-owned.
const latest = new Map<string, Conversation>();
const pending = new Map<string, Promise<void>>();

export function rememberChat(projectId: string, value: Conversation) {
  latest.set(projectId, value);
}

export function currentChat(projectId: string) {
  return latest.get(projectId);
}

/** Explicit close and page exit use the same atomic save-and-release endpoint.
 * Wait for pending writes when the page remains alive; keepalive must start
 * immediately on exit. A skipped draft is not a successful save acknowledgement.
 */
export async function closeChatSession(projectId: string, keepalive = false) {
  if (!keepalive) await pending.get(projectId)?.catch(() => {});
  const value = currentChat(projectId);
  return value
    ? request<{ ok: boolean; draftSaved: boolean }>(
        `/sessions/${sessionId}/close`,
        { ...json("POST", { projectId, conversation: value }), keepalive },
      )
    : request<{ ok: boolean }>(`/sessions/${sessionId}`, {
        method: "DELETE",
        keepalive,
      });
}

export function flushChatDraft(projectId: string): Promise<void> {
  if (creationEnabled()) return Promise.resolve();
  const value = latest.get(projectId);
  if (!value) return pending.get(projectId) ?? Promise.resolve();
  const { draft, draftContent, assets, thinking, modelSelections } = value;
  const next = (pending.get(projectId) ?? Promise.resolve())
    .catch(() => {})
    .then(async () => {
      await request(
        `/data/${projectId}/draft`,
        json("PATCH", {
          draft,
          draftContent: draftContent ?? null,
          assets,
          thinking,
          modelSelections,
        }),
      );
    });
  pending.set(projectId, next);
  void next
    .finally(() => {
      if (pending.get(projectId) === next) pending.delete(projectId);
    })
    .catch(() => {});
  return next;
}
