export const sessionId = crypto.randomUUID();

export class ApiError extends Error {
  constructor(message: string, public status: number | null, public code: string) { super(message); }
}

export function uncertainFailure(error: unknown) {
  return error instanceof ApiError && (error.status === null || error.status >= 500);
}

export function retryableReadFailure(error: unknown) {
  return !(error instanceof ApiError) || error.status === null || error.status >= 500 || error.status === 408 || error.status === 429;
}

export async function responseError(response: Response) {
  const error = await response.json().catch(() => null);
  return new ApiError(typeof error?.detail === 'string' ? error.detail : `本地服务请求失败（${response.status}），请检查启动终端。`, response.status, error?.code ?? 'operation_rejected');
}

export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`/api${path}`, {
      ...options,
      headers: { 'X-MuseShow-Request': '1', 'X-MuseShow-Session': sessionId, ...options.headers },
    });
  } catch (failure) {
    if (options.signal?.aborted) throw failure;
    throw new ApiError('无法连接本地服务，请检查 MuseShow 是否正在运行。', null, 'network_error');
  }
  if (!response.ok) {
    throw await responseError(response);
  }
  if (response.status === 204) return undefined as T;
  try { return await response.json() as T; }
  catch { throw new ApiError('服务响应无法读取，请核对当前状态。', null, 'invalid_response'); }
}

export function json(method: string, value: unknown): RequestInit {
  return { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(value) };
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '操作未完成，请重试。';
}
