import { ApiError, assetBlob } from "./api.ts";
import {
  downloadAsset,
  projectSnapshot,
  type BackendResult,
  type BackendTask,
} from "./generation.ts";

/** Finished tasks whose results have not reached the canvas yet, such as
 * those started by the assistant or finished after the canvas switched. */

const KEY = "opendesign.backendHandled.";

function handled(projectId: string): Set<string> | null {
  try {
    const value = localStorage.getItem(KEY + projectId);
    return value ? new Set(JSON.parse(value) as string[]) : null;
  } catch {
    return null;
  }
}

function save(projectId: string, value: Set<string>) {
  try {
    localStorage.setItem(KEY + projectId, JSON.stringify([...value]));
  } catch {
    // Without storage a later sync may offer the same result again.
  }
}

export function markHandled(projectId: string, taskId: string) {
  const value = handled(projectId) ?? new Set();
  value.add(taskId);
  save(projectId, value);
}

/** A live completion may claim a task while an overlapping recovery download awaits. */
export function isHandled(projectId: string, taskId: string) {
  return handled(projectId)?.has(taskId) ?? false;
}

export type SyncedResult =
  | { taskId: string; kind: "text"; title: string; text: string }
  | { taskId: string; kind: "media"; result: BackendResult };

const ACTIVE = new Set(["queued", "running"]);

export async function unsyncedResults(
  projectId: string,
  running: ReadonlySet<string>,
  signal?: AbortSignal,
  ownedTasks: ReadonlySet<string> = new Set(),
): Promise<{
  results: SyncedResult[];
  active: number;
  tasks: Pick<BackendTask, "id" | "status" | "error">[];
}> {
  let snapshot;
  try {
    snapshot = await projectSnapshot(projectId, signal);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      save(projectId, new Set());
      return { results: [], active: 0, tasks: [] };
    }
    throw error;
  }
  const done = snapshot.tasks.filter(
    (task) => task.status === "succeeded" && task.assetId,
  );
  const active = snapshot.tasks.filter((task) => ACTIVE.has(task.status));
  // Documents the assistant writes directly have no task; their asset id is the key.
  const documents = snapshot.assets.filter(
    (asset) =>
      asset.kind === "text" && asset.agentRunId && !asset.generationTaskId,
  );
  let seen = handled(projectId);
  if (!seen) {
    // First contact with an existing project: its history is not new work.
    seen = new Set([
      ...done.filter((task) => !ownedTasks.has(task.id)).map((task) => task.id),
      ...documents.map((asset) => asset.id),
    ]);
    save(projectId, seen);
  }
  const outputs = [
    ...done.map((task) => ({
      key: task.id,
      asset: snapshot.assets.find((item) => item.id === task.assetId),
    })),
    ...documents.map((asset) => ({ key: asset.id, asset })),
  ];
  const results: SyncedResult[] = [];
  for (const { key, asset } of outputs) {
    if (!asset || seen.has(key) || running.has(key)) continue;
    if (asset.kind === "text") {
      const blob = await assetBlob(projectId, asset.id, signal);
      results.push({
        taskId: key,
        kind: "text",
        title: asset.name.replace(/\.(md|txt)$/i, ""),
        text: await blob.text(),
      });
      continue;
    }
    const result = await downloadAsset(projectId, asset, signal);
    if (result) results.push({ taskId: key, kind: "media", result });
  }
  return {
    results,
    tasks: snapshot.tasks.map(({ id, status, error }) => ({
      id,
      status,
      error,
    })),
    active: active.filter((task) => !running.has(task.id)).length,
  };
}
