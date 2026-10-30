import type { BackendTask } from "../backend/generation.ts";

/** Transient task activity, never part of the saved canvas or undo history. */
export type GenerationPhase =
  | "preparing"
  | "submitting"
  | "queued"
  | "generating"
  | "finishing";

export const GENERATION_LABELS: Record<GenerationPhase, string> = {
  preparing: "正在准备参考",
  submitting: "正在提交到模型服务",
  queued: "排队中",
  generating: "模型服务生成中",
  finishing: "正在读取并保存结果",
};

export interface ActiveGeneration {
  documentId: string;
  nodeId: string;
  phase: GenerationPhase;
  /** Wall-clock start and expected duration, for the estimated progress ring. */
  startedAt?: number;
  expectedMs?: number;
}

export interface NodeGenerationActivity {
  phase: GenerationPhase;
  count: number;
  startedAt?: number;
  expectedMs?: number;
}

export function generationPhase(
  task: Pick<BackendTask, "status" | "phase">,
): GenerationPhase | null {
  if (task.status === "queued") return "queued";
  if (task.status !== "running") return null;
  switch (task.phase) {
    case "queued":
      return "queued";
    case "prepare":
      return "preparing";
    case "submit":
      return "submitting";
    case "download":
    case "save":
    case "adopt":
      return "finishing";
    default:
      return "generating";
  }
}

const PRIORITY: Record<GenerationPhase, number> = {
  queued: 0,
  finishing: 1,
  preparing: 2,
  submitting: 3,
  generating: 4,
};

/** One batch may have tasks in different phases. Show active work until every
 * task finishes; a queued sibling must not turn a running node back into a queue. */
export function generationActivities(
  runs: readonly ActiveGeneration[],
  documentId: string,
): ReadonlyMap<string, NodeGenerationActivity> {
  const nodes = new Map<string, NodeGenerationActivity>();
  for (const run of runs) {
    if (run.documentId !== documentId) continue;
    const previous = nodes.get(run.nodeId);
    // Several runs on one node finish together: the earliest start, the longest expectation.
    const startedAt = [previous?.startedAt, run.startedAt].filter(
      (value): value is number => value !== undefined,
    );
    const expectedMs = [previous?.expectedMs, run.expectedMs].filter(
      (value): value is number => value !== undefined,
    );
    nodes.set(run.nodeId, {
      count: (previous?.count ?? 0) + 1,
      phase:
        previous && PRIORITY[previous.phase] > PRIORITY[run.phase]
          ? previous.phase
          : run.phase,
      ...(startedAt.length && expectedMs.length
        ? {
            startedAt: Math.min(...startedAt),
            expectedMs: Math.max(...expectedMs),
          }
        : {}),
    });
  }
  return nodes;
}
