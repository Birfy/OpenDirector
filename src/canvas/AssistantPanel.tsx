import { useEffect, useRef, useState } from "react";
import { CanvasIcon } from "./CanvasIcon";
import { errorMessage } from "../backend/api.ts";
import {
  conversation,
  stopChat,
  streamChat,
  type ChatEvent,
  type ChatMessage,
} from "../backend/chat.ts";
import type { BackendModels } from "../backend/models.ts";
import { openBackendProject } from "../backend/projects.ts";
import { modelLabel, type ModelKind } from "../backend/rules.ts";
import "./assistant-panel.css";

type Selections = Partial<Record<ModelKind, string>>;
type ToolEvent = Extract<ChatEvent, { type: "tool" }>;

const SELECTIONS = "opendesign.assistantModels";
const KINDS: readonly [ModelKind, string][] = [
  ["agent", "对话"],
  ["image", "图片"],
  ["video", "视频"],
  ["audio", "配音"],
];

function savedSelections(): Selections {
  try {
    return JSON.parse(localStorage.getItem(SELECTIONS) ?? "{}") as Selections;
  } catch {
    return {};
  }
}

/** Chat with the local API's agent. Its generated media and documents
 * reach the canvas through onTurnEnd, which syncs finished results. */
export function AssistantPanel({
  documentId,
  documentTitle,
  catalog,
  onTurnEnd,
  onOpenSettings,
}: {
  documentId: string;
  documentTitle: string;
  catalog: BackendModels;
  onTurnEnd: () => void;
  onOpenSettings: () => void;
}) {
  const [projectId, setProjectId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [tools, setTools] = useState<ToolEvent[]>([]);
  const [draft, setDraft] = useState("");
  const [selections, setSelections] = useState<Selections>(savedSelections);
  const [turn, setTurn] = useState<string | null>(null);
  const [error, setError] = useState("");
  const controller = useRef<AbortController | null>(null);
  const log = useRef<HTMLDivElement>(null);
  const titleRef = useRef(documentTitle);
  titleRef.current = documentTitle;

  useEffect(() => {
    let current = true;
    setProjectId(null);
    setMessages([]);
    setTools([]);
    openBackendProject(documentId, titleRef.current)
      .then(async (id) => {
        const value = await conversation(id);
        if (!current) return;
        setProjectId(id);
        setMessages(value.messages);
      })
      .catch((failure) => current && setError(errorMessage(failure)));
    return () => {
      current = false;
      controller.current?.abort();
    };
  }, [documentId]);

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [messages, tools]);

  const choose = (kind: ModelKind) => {
    const options = catalog.models.filter((model) => model.kind === kind);
    return options.find((model) => model.id === selections[kind]) ?? options[0];
  };
  const agent = choose("agent");

  const select = (kind: ModelKind, id: string) => {
    const next = { ...selections, [kind]: id };
    setSelections(next);
    try {
      localStorage.setItem(SELECTIONS, JSON.stringify(next));
    } catch {
      // The choice then lasts for this page only.
    }
  };

  const send = async () => {
    const text = draft.trim();
    if (!projectId || !agent || !text || turn) return;
    const id = crypto.randomUUID();
    const abort = new AbortController();
    controller.current = abort;
    setTurn(id);
    setError("");
    setTools([]);
    setDraft("");
    setMessages((current) => [
      ...current,
      { id: `pending-${id}`, role: "user", text, status: "complete" },
    ]);
    try {
      for await (const event of streamChat(
        projectId,
        {
          id,
          modelId: agent.id,
          text,
          assets: [],
          thinking: "auto",
          modelSelections: Object.fromEntries(
            (["image", "video", "audio"] as const).map((kind) => [
              kind,
              choose(kind)?.id ?? null,
            ]),
          ),
        },
        abort.signal,
      )) {
        if (event.type === "start" || event.type === "end") {
          if (event.conversation) setMessages(event.conversation.messages);
          if (event.type === "end" && event.error) setError(event.error);
        } else if (event.type === "delta")
          setMessages((current) =>
            current.map((message) =>
              message.id === id
                ? { ...message, text: message.text + event.text }
                : message,
            ),
          );
        else if (event.type === "tool")
          setTools((current) => {
            // A finished call replaces its own "running" row.
            const index = current
              .map(
                (item) => item.name === event.name && item.status === "running",
              )
              .lastIndexOf(true);
            return event.status === "running" || index < 0
              ? [...current, event]
              : current.map((item, i) => (i === index ? event : item));
          });
      }
    } catch (failure) {
      if (!abort.signal.aborted) setError(errorMessage(failure));
    } finally {
      if (controller.current === abort) controller.current = null;
      setTurn(null);
      onTurnEnd();
    }
  };

  if (!agent)
    return (
      <div className="cw-assistant-intro">
        <span>✦</span>
        <h3>连接对话模型后开始</h3>
        <p>
          在“模型接入”中添加对话 Agent（OpenAI 兼容服务，如 vLLM
          部署的模型），助手即可编写剧本、拆分分镜，并调用已接入的图片、视频和配音模型生成素材。
        </p>
        <button className="cw-assistant-settings" onClick={onOpenSettings}>
          打开模型接入
        </button>
      </div>
    );

  return (
    <div className="cw-assistant">
      <div className="cw-assistant-models">
        {KINDS.map(([kind, label]) => {
          const options = catalog.models.filter((model) => model.kind === kind);
          return (
            <label key={kind}>
              <span>{label}</span>
              <select
                value={choose(kind)?.id ?? ""}
                disabled={!options.length || Boolean(turn)}
                onChange={(event) => select(kind, event.target.value)}
              >
                {!options.length && <option value="">未接入</option>}
                {options.map((model) => (
                  <option key={model.id} value={model.id}>
                    {modelLabel(model)}
                  </option>
                ))}
              </select>
            </label>
          );
        })}
      </div>
      <div className="cw-assistant-log" ref={log}>
        {!messages.length && (
          <p className="cw-assistant-hint">
            描述想做的短片，例如“做一个三个镜头的雨夜街头短片，每镜生成关键帧、视频和旁白”。生成的素材和文档会自动加入画布。
          </p>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`cw-assistant-message is-${message.role}`}
          >
            {message.text.trim() ||
              (message.status === "streaming" ? "正在思考…" : "（无文字回复）")}
          </div>
        ))}
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`cw-assistant-tool is-${tool.status}`}
            title={tool.error ?? tool.message ?? tool.name}
          >
            <CanvasIcon
              name={tool.status === "failed" ? "close" : "sparkle"}
              size={12}
            />
            {tool.message ?? tool.name}
            {tool.status === "running" && " …"}
            {tool.error && ` · ${tool.error}`}
          </div>
        ))}
      </div>
      {error && (
        <p className="cw-assistant-error" role="alert">
          {error}
        </p>
      )}
      <form
        className="cw-chat-form"
        onSubmit={(event) => {
          event.preventDefault();
          void send();
        }}
      >
        <textarea
          placeholder="和助手讨论剧本、分镜，或让它直接生成素材…"
          aria-label="发送给助手"
          value={draft}
          disabled={!projectId}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
              event.preventDefault();
              void send();
            }
          }}
        />
        {turn ? (
          <button
            type="button"
            onClick={() =>
              projectId &&
              void stopChat(projectId, turn).catch((failure) =>
                setError(errorMessage(failure)),
              )
            }
          >
            停止回复 <CanvasIcon name="stop" size={16} />
          </button>
        ) : (
          <button type="submit" disabled={!draft.trim() || !projectId}>
            发送 · ⌘/Ctrl + Enter <CanvasIcon name="arrow" size={16} />
          </button>
        )}
      </form>
    </div>
  );
}
