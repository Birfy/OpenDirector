import type { Conversation } from "./chat.ts";

// Temporary, in-memory assistant drafts. No project writes until chat is integrated.
const latest = new Map<string, Conversation>();
export function rememberChat(projectId: string, value: Conversation) {
  latest.set(projectId, value);
}
export function currentChat(projectId: string) {
  return latest.get(projectId);
}
export function flushChatDraft(_projectId: string): Promise<void> {
  return Promise.resolve();
}
