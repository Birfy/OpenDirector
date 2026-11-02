import type { ReferenceContent } from "../canvas/chatReferenceContent.ts";
/** Temporary UI drafts until assistant execution uses the unified project services. */

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  content?: ReferenceContent | null;
  status: "complete" | "streaming" | "stopped" | "interrupted";
  assets?: ChatAsset[];
  model?: string;
  thinking?: Thinking;
  source?: "preview" | "model";
}

export type Thinking = "auto" | "low" | "medium" | "high";
export type ModelSelections = Partial<
  Record<"agent" | "image" | "video" | "audio", string | null>
>;
export interface ChatAsset {
  id: string;
  name: string;
  type: string;
  size: number;
  fingerprint: string;
}
export interface ChatDraft {
  draft: string;
  draftContent?: ReferenceContent | null;
  assets: ChatAsset[];
  thinking: Thinking;
  modelSelections: ModelSelections;
}
export interface Conversation extends ChatDraft {
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
  content?: ReferenceContent | null;
  assets: string[];
  thinking: Thinking;
  modelSelections: ModelSelections;
}

export const conversation = (_projectId: string) =>
  Promise.resolve<Conversation>({
    messages: [],
    draft: "",
    assets: [],
    thinking: "auto",
    modelSelections: {},
  });

export const stopChat = async (_projectId: string, _turnId: string) => {
  throw new Error("助手对话尚未接入，请使用画布节点生成和编辑内容。");
};
