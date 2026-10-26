import type { GenerationJob, GenerationRequest } from "./types.ts";

/** Local teaching adapter; it has no model connection, fetch or upload behavior. */
export function validateGenerationRequest(
  input: GenerationRequest,
): { ok: true; value: GenerationRequest } | { ok: false; error: string } {
  if (!input.prompt.trim()) return { ok: false, error: "先写下你的创作想法。" };
  if (!["agent", "image", "video", "audio"].includes(input.mode)) {
    return { ok: false, error: "请选择支持的创作类型。" };
  }
  if (!["1:1", "16:9", "9:16", "4:3", "3:4"].includes(input.aspectRatio)) {
    return { ok: false, error: "请选择支持的画幅比例。" };
  }
  return { ok: true, value: { ...input, prompt: input.prompt.trim() } };
}

export function createJob(input: GenerationRequest): GenerationJob {
  const result = validateGenerationRequest(input);
  if (!result.ok) throw new Error(result.error);
  return {
    ...result.value,
    referenceNames: input.referenceNames?.slice(),
    id: crypto.randomUUID(),
    status: "running",
    createdAt: Date.now(),
  };
}

/** Models the observed submit/abort UI boundary, not the original implementation. */
export async function runLocalGeneration(
  job: GenerationJob,
  signal: AbortSignal,
  durationMs = 1600,
): Promise<GenerationJob> {
  if (signal.aborted) throw new DOMException("已取消本地演示", "AbortError");
  await new Promise<void>((resolve, reject) => {
    const abort = () => {
      clearTimeout(timer);
      signal.removeEventListener("abort", abort);
      reject(new DOMException("已取消本地演示", "AbortError"));
    };
    const timer = setTimeout(() => {
      signal.removeEventListener("abort", abort);
      resolve();
    }, durationMs);
    signal.addEventListener("abort", abort, { once: true });
  });
  return { ...job, status: "completed" };
}
