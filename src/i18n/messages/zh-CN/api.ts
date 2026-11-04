/** User-facing backend errors, validation and job status keys. */
export const api = {
  "api.requestFailed": "本地服务请求失败（{status}），请检查启动终端。",
  "api.networkError": "无法连接本地服务，请用 scripts/opendirector.py 启动 OpenDirector。",
  "api.unknownError": "操作未完成，请重试。",
} as const;
