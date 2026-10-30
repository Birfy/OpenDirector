/** Requests to the local MuseShow API started by scripts/museshow.py. */

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
  "X-MuseShow-Request": "1",
  "X-MuseShow-Session": sessionId,
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
      "无法连接本地服务，请用 scripts/museshow.py 启动 OpenDesign。",
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

/** Raw bytes of a project asset; reads need no session lease. */
export async function assetBlob(
  projectId: string,
  assetId: string,
  signal?: AbortSignal,
) {
  const response = await fetch(`/api/data/${projectId}/assets/${assetId}`, {
    headers,
    signal,
  });
  if (!response.ok) throw await responseError(response);
  return response.blob();
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "操作未完成，请重试。";
}
