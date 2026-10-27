import { json, request, sessionId } from '../../lib/api';
import type { Conversation } from './types';

export const emptyConversation = (): Conversation => ({ messages: [], draft: '', assets: [], thinking: 'auto', modelSelections: {} });
export const scopeFor = (projectId: string | null) => projectId ?? 'scratch';
const latest = new Map<string, Conversation>();
const pending = new Map<string, Promise<void>>();
function draft(value: Conversation) {
  return { draft: value.draft, draftContent: value.draftContent ?? null, assets: value.assets, thinking: value.thinking, modelSelections: value.modelSelections };
}

export function rememberConversation(scope: string, value: Conversation) { latest.set(scope, value); }

export async function loadConversation(scope: string): Promise<Conversation> {
  latest.delete(scope);
  const value = await request<Conversation>(`/data/${scope}/conversation`);
  const conversation = { ...value, modelSelections: value.modelSelections ?? {}, messages: value.messages.map(message => message.status === 'streaming' ? { ...message, status: 'interrupted' as const } : message) };
  latest.set(scope, conversation);
  return conversation;
}

export function saveConversation(scope: string, value: Conversation): Promise<void> {
  latest.set(scope, value);
  const next = (pending.get(scope) ?? Promise.resolve()).catch(() => {}).then(async () => {
    await request(`/data/${scope}/draft`, json('PATCH', draft(value)));
  });
  pending.set(scope, next);
  void next.finally(() => { if (pending.get(scope) === next) pending.delete(scope); }).catch(() => {});
  return next;
}

export async function flushConversation(scope: string) {
  const value = latest.get(scope);
  if (value) await saveConversation(scope, value);
  else await pending.get(scope);
}

function closeSession(projectId: string, keepalive = false) {
  const value = latest.get(projectId);
  return value
    ? request(`/sessions/${sessionId}/close`, { ...json('POST', { projectId, conversation: value }), keepalive })
    : request(`/sessions/${sessionId}`, { method: 'DELETE', keepalive });
}

export async function closeConversation(projectId: string) {
  await pending.get(projectId)?.catch(() => {});
  await closeSession(projectId);
}

export function saveBeforePageHide(projectId: string | null) {
  // Use the same atomic save-and-release request as an explicit close. A failed
  // page-exit delivery leaves the lease to expire normally.
  if (projectId) void closeSession(projectId, true).catch(() => {});
}
