import { ApiError } from "./api.ts";

export interface ReadOptions {
  signal?: AbortSignal;
  timeoutMs?: number;
  attempts?: number;
  retryDelayMs?: number;
}

export function transientReadFailure(failure: unknown) {
  return failure instanceof ApiError
    ? failure.code === "network_error"
    : failure instanceof TypeError ||
        (failure instanceof Error && failure.name === "TimeoutError");
}

/** A caller can stop waiting for a shared read without cancelling its peers. */
export function abortable<T>(
  pending: Promise<T>,
  signal?: AbortSignal,
): Promise<T> {
  if (!signal) return pending;
  return new Promise((resolve, reject) => {
    const cancel = () => reject(signal.reason);
    if (signal.aborted) cancel();
    else signal.addEventListener("abort", cancel, { once: true });
    pending.then(
      (value) => {
        signal.removeEventListener("abort", cancel);
        resolve(value);
      },
      (failure) => {
        signal.removeEventListener("abort", cancel);
        reject(failure);
      },
    );
  });
}

export function readDelay(ms: number, signal?: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    signal?.throwIfAborted();
    const cancel = () => {
      clearTimeout(timer);
      reject(signal?.reason);
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", cancel);
      resolve();
    }, ms);
    signal?.addEventListener("abort", cancel, { once: true });
  });
}

/** Retry reads only. Submission, cancellation and placement writes are never
 * retried here. Each deadline covers both response headers and response body. */
export async function resilientRead<T>(
  read: (signal: AbortSignal) => Promise<T>,
  {
    signal,
    timeoutMs = 15_000,
    attempts = 5,
    retryDelayMs = 2000,
  }: ReadOptions = {},
): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    signal?.throwIfAborted();
    const deadline = new AbortController();
    const attemptSignal = signal
      ? AbortSignal.any([signal, deadline.signal])
      : deadline.signal;
    const timer = setTimeout(
      () =>
        deadline.abort(new DOMException("读取超时，请重试。", "TimeoutError")),
      timeoutMs,
    );
    try {
      return await abortable(read(attemptSignal), attemptSignal);
    } catch (failure) {
      if (
        signal?.aborted ||
        !transientReadFailure(failure) ||
        attempt >= attempts
      )
        throw failure;
    } finally {
      clearTimeout(timer);
    }
    await readDelay(retryDelayMs, signal);
  }
}
