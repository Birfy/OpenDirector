/**
 * Expected generation durations for progress estimates. Model services report
 * no step progress (vLLM-Omni video jobs jump from 0 to 100), so progress
 * follows elapsed time against how long the same work took before.
 */

const STORAGE_KEY = "opendesign.generation-durations.v1";
const DEFAULTS: Record<string, number> = {
  text: 15_000,
  image: 25_000,
  video: 180_000,
  audio: 20_000,
};
// Recent runs weigh more: services, models and canvases change over a session.
const WEIGHT = 0.4;

function read(): Record<string, number> {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
    return value && typeof value === "object" ? value : {};
  } catch {
    return {};
  }
}

export function expectedDuration(key: string, kind: string): number {
  const learned = read()[key];
  return Number.isFinite(learned) && learned > 0
    ? learned
    : (DEFAULTS[kind] ?? DEFAULTS.image!);
}

export function recordDuration(key: string, elapsedMs: number) {
  if (!Number.isFinite(elapsedMs) || elapsedMs <= 0) return;
  const durations = read();
  const previous = durations[key];
  durations[key] =
    Number.isFinite(previous) && previous > 0
      ? previous + WEIGHT * (elapsedMs - previous)
      : elapsedMs;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(durations));
  } catch {
    // A private window or full storage only loses the estimate.
  }
}

/** 0–0.97 from elapsed time: about 90% at the expected duration, never full before the result. */
export function estimatedProgress(elapsedMs: number, expectedMs: number) {
  if (!(expectedMs > 0) || !(elapsedMs > 0)) return 0;
  return 0.97 * (1 - Math.exp((-2.5 * elapsedMs) / expectedMs));
}
