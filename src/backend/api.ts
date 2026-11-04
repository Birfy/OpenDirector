/** Requests to the local OpenDirector API started by scripts/opendirector.py. */

export const sessionId = crypto.randomUUID();

export class ApiError extends Error {
  status: number | null;
  code: string;
  constructor(message: string, status: number | null, code: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export const headers = {
  "X-OpenDirector-Request": "1",
  "X-OpenDirector-Session": sessionId,
};

export async function responseError(response: Response) {
  const error = await response.json().catch(() => null);
  return new ApiError(
    typeof error?.detail === "string"
      ? error.detail
      : `本地服务请求失败（${response.status}），请检查启动终端。`,
    response.status,
    error?.code ?? "operation_rejected",
  );
}

export async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`/api${path}`, {
      ...options,
      headers: { ...headers, ...options.headers },
    });
  } catch (failure) {
    if (options.signal?.aborted) throw failure;
    throw new ApiError(
      "无法连接本地服务，请用 scripts/opendirector.py 启动 OpenDirector。",
      null,
      "network_error",
    );
  }
  if (!response.ok) throw await responseError(response);
  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export function json(method: string, value: unknown): RequestInit {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  };
}

/** For reads and idempotent writes only. Replay the exact request after an
 * explicit lock timeout; conflicts and unknown delivery outcomes still fail. */
export async function storageRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      return await request<T>(path, options);
    } catch (error) {
      if (
        attempt >= 2 ||
        options.signal?.aborted ||
        !(error instanceof ApiError) ||
        error.status !== 409 ||
        error.code !== "storage_busy"
      )
        throw error;
    }
    await new Promise<void>((resolve, reject) => {
      const signal = options.signal;
      const cancel = () => {
        clearTimeout(timer);
        signal?.removeEventListener("abort", cancel);
        reject(signal?.reason);
      };
      const timer = setTimeout(
        () => {
          signal?.removeEventListener("abort", cancel);
          resolve();
        },
        1000 * 2 ** attempt,
      );
      signal?.addEventListener("abort", cancel, { once: true });
      if (signal?.aborted) cancel();
    });
  }
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "操作未完成，请重试。";
}
