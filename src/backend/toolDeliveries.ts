import { ApiError, json, request } from "./api.ts";
import { tNow } from "../i18n/messages.ts";

type Delivery = { id: string; [key: string]: unknown };
const deliveries = new Map<string, Delivery>();
const keyFor = (projectId: string, itemId: string) =>
  `opendirector.creation.tool-delivery:${projectId}:${itemId}`;

/** Only transport intent is cached; accepted execution remains server-owned. */
export function pendingToolDelivery(projectId: string, itemId: string) {
  const key = keyFor(projectId, itemId);
  if (!deliveries.has(key)) {
    try {
      const stored = JSON.parse(sessionStorage.getItem(key) ?? "null");
      if (stored && typeof stored.id === "string") deliveries.set(key, stored);
    } catch {
      /* In-memory protection remains available. */
    }
  }
  return deliveries.get(key);
}
function remember(projectId: string, itemId: string, body?: Delivery) {
  const key = keyFor(projectId, itemId);
  if (body) deliveries.set(key, body);
  else deliveries.delete(key);
  try {
    if (body) sessionStorage.setItem(key, JSON.stringify(body));
    else sessionStorage.removeItem(key);
  } catch {
    /* In-memory protection remains available. */
  }
}

/** An explicit retry resends the original ID and exact accepted input. */
export async function deliverTool<T extends { id: string }>(
  projectId: string,
  itemId: string,
  body: Delivery,
): Promise<T> {
  const pending = pendingToolDelivery(projectId, itemId);
  if (pending && pending.id !== body.id)
    throw new Error(tNow("errors.backend.priorToolUnconfirmed"));
  const original = pending ?? body;
  remember(projectId, itemId, original);
  const path = `/creation/projects/${projectId}/tool-tasks`;
  try {
    const task = await request<T>(path, json("POST", original));
    remember(projectId, itemId);
    return task;
  } catch (failure) {
    if (
      !pending &&
      failure instanceof ApiError &&
      failure.status !== null &&
      failure.status >= 400 &&
      failure.status < 500
    ) {
      remember(projectId, itemId);
      throw failure;
    }
    // A dropped response is not a rejected submission. Nor does rejection of
    // a later replay prove the earlier request was rejected (e.g. lease loss).
    // Query the same identity and retain it while the original outcome is unknown.
    try {
      const task = await request<T>(`${path}/${original.id}`);
      remember(projectId, itemId);
      return task;
    } catch {
      throw failure;
    }
  }
}
