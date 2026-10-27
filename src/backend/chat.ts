import { headers, request } from "./api.ts";

/** The local API's agent: it plans, writes and generates inside the canvas's project. */

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  status: "complete" | "streaming" | "stopped" | "interrupted";
}

export interface Conversation {
  messages: ChatMessage[];
}

export type ChatEvent =
  | { type: "start"; conversation: Conversation }
  | { type: "thinking" }
  | {
      type: "tool";
      name: string;
      status: "running" | "complete" | "failed";
      taskId?: string | null;
      error?: string;
      message?: string;
    }
  | { type: "delta"; text: string }
  | { type: "end"; conversation: Conversation | null; error: string | null };

export interface ChatRequest {
  id: string;
  modelId: string;
  text: string;
  assets: string[];
  thinking: "auto";
  modelSelections: Partial<Record<"image" | "video" | "audio", string | null>>;
}

export const conversation = (projectId: string) =>
  request<Conversation>(`/data/${projectId}/conversation`);

export const stopChat = (projectId: string, turnId: string) =>
  request(`/data/${projectId}/chat/${turnId}/stop`, { method: "POST" });

export async function* streamChat(
  projectId: string,
  value: ChatRequest,
  signal: AbortSignal,
): AsyncIterable<ChatEvent> {
  let response: Response;
  try {
    response = await fetch(`/api/data/${projectId}/chat`, {
      method: "POST",
      signal,
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
  } catch (failure) {
    if (signal.aborted) throw failure;
    throw new Error("无法连接本地服务，请检查启动终端后重试。");
  }
  if (!response.ok) {
    const failure = await response.json().catch(() => null);
    throw new Error(
      typeof failure?.detail === "string"
        ? failure.detail
        : `本地对话请求失败（${response.status}）。`,
    );
  }
  if (!response.body) throw new Error("浏览器无法读取流式回复。");
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  try {
    for (;;) {
      const { value: bytes, done } = await reader.read();
      buffer += decoder.decode(bytes, { stream: !done });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const data = JSON.parse(line.slice(5)) as ChatEvent;
        yield data;
        if (data.type === "end") return;
      }
      if (done)
        throw new Error("回复连接已中断，请重新打开对话查看已保存的内容。");
    }
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}
