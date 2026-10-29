import { json, request } from "./api.ts";
import type { Conversation } from "./chat.ts";

// Draft writes are serialized per project; replies remain server-owned.
const latest = new Map<string, Conversation>();
const pending = new Map<string, Promise<void>>();

export function rememberChat(projectId: string, value: Conversation) {
  latest.set(projectId, value);
}

export function currentChat(projectId: string) {
  return latest.get(projectId);
}

export function flushChatDraft(projectId: string): Promise<void> {
  const value = latest.get(projectId);
  if (!value) return pending.get(projectId) ?? Promise.resolve();
  const { draft, assets, thinking, modelSelections } = value;
  const next = (pending.get(projectId) ?? Promise.resolve())
    .catch(() => {})
    .then(async () => {
      await request(
        `/data/${projectId}/draft`,
        json("PATCH", {
          draft,
          draftContent: null,
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
