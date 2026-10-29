import { useEffect, useRef, useState } from "react";
import { CanvasIcon } from "./CanvasIcon";
import museshowLogo from "../assets/museshow-logo.png";
import type { AssistantLayout } from "./useAssistantLayout";
import { errorMessage, request } from "../backend/api";
import type { BackendModels } from "../backend/models";
import type { ChatAsset, Thinking } from "../backend/chat";
import type { CanvasNode } from "./model";
import { assistantReferences } from "./assistantReferences";
import { ChoicePicker, ModelPicker } from "./AssistantPickers";
import {
  attachment,
  useAssistantChat,
  type ProjectChatAsset,
} from "./useAssistantChat";
import "./assistant-panel.css";

const THINKING = [
  { id: "auto", label: "自动", description: "使用模型服务的默认思考程度" },
  { id: "low", label: "快速", description: "适合简单调整和快速问答" },
  { id: "medium", label: "标准", description: "兼顾速度与分析深度" },
  { id: "high", label: "深入", description: "适合剧本规划和复杂分析" },
];

function kindOf(asset: ChatAsset) {
  return asset.type.startsWith("image/")
    ? "image"
    : asset.type.startsWith("video/")
      ? "video"
      : asset.type.startsWith("audio/")
        ? "audio"
        : "text";
}

function ReferencePicker({
  projectId,
  nodes,
  selectedNodes,
  onAsset,
  onNodes,
  onClose,
}: {
  projectId: string;
  nodes: CanvasNode[];
  selectedNodes: CanvasNode[];
  onAsset: (asset: ChatAsset) => void;
  onNodes: (nodes: CanvasNode[]) => void;
  onClose: () => void;
}) {
  const [assets, setAssets] = useState<ProjectChatAsset[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [attempt, setAttempt] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const abort = new AbortController();
    setLoading(true);
    setError("");
    void request<ProjectChatAsset[]>(
      `/projects/${projectId}/assets?current_only=true`,
      { signal: abort.signal },
    )
      .then((value) =>
        setAssets(
          value.filter((asset) =>
            ["text", "image", "video", "audio"].includes(asset.kind),
          ),
        ),
      )
      .catch((reason) => {
        if (!abort.signal.aborted) setError(errorMessage(reason));
      })
      .finally(() => {
        if (!abort.signal.aborted) setLoading(false);
      });
    return () => abort.abort();
  }, [projectId, attempt]);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [onClose]);
  const matches = (name: string) =>
    name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
  const canvasNodes = nodes.filter(
    (node) => matches(node.data.title) && assistantReferences([node]).length,
  );
  const filteredAssets = assets.filter((asset) => matches(asset.name));
  return (
    <div
      className="cw-chat-reference-picker"
      ref={root}
      role="dialog"
      aria-label="引用项目素材"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          onClose();
        }
      }}
    >
      <header>
        <strong>引用项目素材</strong>
        <button type="button" aria-label="关闭素材选择" onClick={onClose}>
          <CanvasIcon name="close" size={16} />
        </button>
      </header>
      <input
        autoFocus
        aria-label="搜索参考素材"
        placeholder="搜索画布节点或项目素材"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {!!selectedNodes.length && (
        <button
          type="button"
          className="cw-chat-reference-selection"
          onClick={() => onNodes(selectedNodes)}
        >
          引用当前选择（{selectedNodes.length}）
        </button>
      )}
      <div className="cw-chat-reference-options">
        {!!canvasNodes.length && <small>画布节点</small>}
        {canvasNodes.map((node) => (
          <button type="button" key={node.id} onClick={() => onNodes([node])}>
            <CanvasIcon name={node.type} size={16} />
            <span>{node.data.title}</span>
          </button>
        ))}
        {!!filteredAssets.length && <small>项目素材</small>}
        {filteredAssets.map((asset) => (
          <button
            type="button"
            key={asset.id}
            onClick={() => onAsset(attachment(asset))}
          >
            <CanvasIcon name={asset.kind} size={16} />
            <span>{asset.name}</span>
          </button>
        ))}
        {loading && <p role="status">正在读取素材…</p>}
        {error && (
          <p role="alert">
            {error}{" "}
            <button type="button" onClick={() => setAttempt((n) => n + 1)}>
              重新读取
            </button>
          </p>
        )}
        {!loading &&
          !error &&
          !canvasNodes.length &&
          !filteredAssets.length && <p>没有可引用的素材，可通过 + 上传。</p>}
      </div>
    </div>
  );
}

/** MuseShow conversation tools in an OpenDesign floating canvas window. */
export function AssistantPanel({
  documentId,
  documentTitle,
  catalog,
  nodes,
  selectedNodes,
  open,
  layout,
  selectionRequest,
  onClose,
  onTurnEnd,
  onOpenSettings,
}: {
  documentId: string;
  documentTitle: string;
  catalog: BackendModels;
  nodes: CanvasNode[];
  selectedNodes: CanvasNode[];
  open: boolean;
  layout: AssistantLayout;
  selectionRequest: number;
  onClose: () => void;
  onTurnEnd: () => void;
  onOpenSettings: () => void;
}) {
  const chat = useAssistantChat(documentId, catalog, onTurnEnd);
  const { value, setValue } = chat;
  const [pickerOpen, setPickerOpen] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const log = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const nearBottom = useRef(true);
  const lastSelectionRequest = useRef(0);
  const mention = useRef<{ start: number; end: number } | null>(null);
  const locked = !chat.loaded || chat.adding || (chat.sending && !chat.started);
  const referenceDisabled = !chat.loaded || chat.adding || chat.sending;

  useEffect(() => {
    if (open && chat.loaded) input.current?.focus({ preventScroll: true });
    if (!open) setPickerOpen(false);
  }, [open, chat.loaded]);
  useEffect(() => {
    if (nearBottom.current && log.current)
      log.current.scrollTop = log.current.scrollHeight;
  }, [value.messages, chat.tools, open]);
  useEffect(() => {
    if (
      !chat.loaded ||
      !selectionRequest ||
      lastSelectionRequest.current === selectionRequest
    )
      return;
    lastSelectionRequest.current = selectionRequest;
    if (selectedNodes.length) void chat.addNodes(selectedNodes);
  }, [chat.loaded, selectionRequest]);

  const closePicker = () => {
    setPickerOpen(false);
    input.current?.focus();
  };
  const finishMention = () => {
    const range = mention.current;
    if (range)
      setValue((previous) => ({
        ...previous,
        draft:
          previous.draft.slice(0, range.start) +
          previous.draft.slice(range.end),
      }));
    mention.current = null;
    closePicker();
  };
  const useAsset = (asset: ChatAsset) => {
    if (value.assets.length >= 64) {
      chat.setError("每次最多添加 64 份参考素材。");
      return;
    }
    chat.addAssets([asset]);
    finishMention();
  };
  const useNodes = (chosen: CanvasNode[]) => {
    void chat.addNodes(chosen);
    finishMention();
  };

  return (
    <aside
      id="canvas-assistant"
      className={`cw-assistant-panel${dragOver ? " is-drag-over" : ""}`}
      aria-label="AI 对话"
      hidden={!open}
      onKeyDown={(event) => {
        if (event.key === "Escape" && !event.defaultPrevented) {
          event.preventDefault();
          event.stopPropagation();
          onClose();
        }
      }}
      onDragOver={(event) => {
        if (event.dataTransfer.types.includes("Files")) {
          event.preventDefault();
          event.stopPropagation();
          setDragOver(true);
        }
      }}
      onDragLeave={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setDragOver(false);
      }}
      onDrop={(event) => {
        if (event.dataTransfer.files.length) {
          event.preventDefault();
          event.stopPropagation();
          setDragOver(false);
          void chat.upload([...event.dataTransfer.files]);
        }
      }}
    >
      <header className="cw-assistant-header">
        <h2 title={documentTitle}>
          {value.messages.length ? "AI 对话" : "新会话"}
        </h2>
        <button
          type="button"
          className="cw-assistant-collapse"
          aria-label="收起 AI 对话"
          title="收起 AI 对话"
          aria-controls="canvas-assistant"
          aria-expanded="true"
          onClick={onClose}
        >
          <CanvasIcon name="collapse" size={18} />
        </button>
      </header>
      <div
        className="cw-assistant-log"
        role="log"
        aria-label="对话消息"
        aria-live="polite"
        ref={log}
        onScroll={(event) => {
          const el = event.currentTarget;
          nearBottom.current =
            el.scrollHeight - el.scrollTop - el.clientHeight < 80;
        }}
      >
        {!value.messages.length && (
          <div className="cw-assistant-welcome">
            <div className="cw-assistant-avatar">
              <img src={museshowLogo} alt="" />
            </div>
            <h1>从一个想法开始</h1>
            <p>
              和 MuseShow 一起构思你的下一部作品。
              <br />
              描述故事，或输入 @ 添加图片、视频、音频与文本参考。
            </p>
          </div>
        )}
        {value.messages.map((message) => (
          <article
            key={message.id}
            className={`cw-assistant-message is-${message.role}`}
          >
            <div className="cw-assistant-message-heading">
              {message.role === "user" ? "你" : "MuseShow"}
              {message.role === "assistant" && message.model && (
                <small>{message.model}</small>
              )}
            </div>
            <div className="cw-assistant-message-text">
              {message.text ||
                (message.status === "streaming"
                  ? chat.thinkingNow
                    ? "正在思考…"
                    : "正在回复…"
                  : "本次回复未生成内容。")}
            </div>
            {!!message.assets?.length && (
              <div className="cw-assistant-message-assets">
                {message.assets.map((asset) => (
                  <a
                    key={asset.id}
                    href={`/api/data/${documentId}/assets/${asset.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CanvasIcon name={kindOf(asset)} size={14} />
                    {asset.name}
                  </a>
                ))}
              </div>
            )}
            {(message.status === "stopped" ||
              message.status === "interrupted") && (
              <small className="cw-assistant-message-status">
                {message.status === "stopped" ? "已停止回复" : "回复已中断"}
              </small>
            )}
          </article>
        ))}
        {chat.tools.map((tool, index) => (
          <div
            key={index}
            className={`cw-assistant-tool is-${tool.status}`}
            role="status"
          >
            <CanvasIcon
              name={tool.status === "failed" ? "close" : "sparkle"}
              size={14}
            />
            {tool.message ?? tool.name}
            {tool.status === "running" && "…"}
            {tool.error && ` · ${tool.error}`}
          </div>
        ))}
      </div>
      <div className="cw-assistant-composer-area">
        {chat.error && (
          <div className="cw-assistant-error" role="alert">
            <span>{chat.error}</span>
            {!chat.loaded && (
              <button type="button" onClick={chat.reload}>
                重新加载
              </button>
            )}
            <button
              type="button"
              aria-label="关闭助手提示"
              onClick={() => chat.setError("")}
            >
              <CanvasIcon name="close" size={14} />
            </button>
          </div>
        )}
        {!catalog.connected && (
          <div className="cw-assistant-error" role="alert">
            <span>{catalog.error || "正在连接对话服务…"}</span>
            <button type="button" onClick={() => void catalog.refresh()}>
              重新读取
            </button>
          </div>
        )}
        <form
          className="cw-assistant-composer"
          aria-label="聊天输入框"
          onSubmit={(event) => {
            event.preventDefault();
            nearBottom.current = true;
            void chat.send();
          }}
        >
          {!!value.assets.length && (
            <div className="cw-chat-attachments" aria-label="消息参考素材">
              {value.assets.map((asset) => (
                <div key={asset.id} className="cw-chat-attachment">
                  {asset.type.startsWith("image/") ? (
                    <img
                      src={`/api/data/${documentId}/assets/${asset.id}`}
                      alt=""
                    />
                  ) : (
                    <CanvasIcon name={kindOf(asset)} size={18} />
                  )}
                  <span title={asset.name}>{asset.name}</span>
                  <button
                    type="button"
                    aria-label={`移除引用 ${asset.name}`}
                    disabled={referenceDisabled}
                    onClick={() =>
                      setValue((previous) => ({
                        ...previous,
                        assets: previous.assets.filter(
                          (item) => item.id !== asset.id,
                        ),
                      }))
                    }
                  >
                    <CanvasIcon name="close" size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <textarea
            ref={input}
            aria-label="消息内容"
            placeholder="输入想法、剧本或上传参考，输入 @ 引用项目素材，和 Agent 一起创作"
            value={value.draft}
            maxLength={20000}
            disabled={locked}
            onChange={(event) => {
              const draft = event.target.value;
              setValue((previous) => ({ ...previous, draft }));
              const caret = event.target.selectionStart;
              if (!referenceDisabled && draft[caret - 1] === "@") {
                mention.current = { start: caret - 1, end: caret };
                setPickerOpen(true);
              }
            }}
            onPaste={(event) => {
              if (event.clipboardData.files.length) {
                event.preventDefault();
                void chat.upload([...event.clipboardData.files]);
              }
            }}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                !event.shiftKey &&
                !event.nativeEvent.isComposing
              ) {
                event.preventDefault();
                nearBottom.current = true;
                void chat.send();
              }
            }}
          />
          <div className="cw-assistant-toolbar">
            <button
              type="button"
              className="cw-assistant-icon-button"
              aria-label="上传参考"
              title="上传图片、视频、音频或文本"
              disabled={referenceDisabled || value.assets.length >= 64}
              onClick={() => fileInput.current?.click()}
            >
              <CanvasIcon name={chat.adding ? "upload" : "plus"} size={20} />
            </button>
            <button
              type="button"
              className="cw-assistant-icon-button"
              aria-label="引用项目素材"
              title="引用项目素材（@）"
              aria-expanded={pickerOpen}
              disabled={referenceDisabled}
              onClick={() => {
                mention.current = null;
                setPickerOpen(!pickerOpen);
              }}
            >
              @
            </button>
            <ModelPicker
              models={catalog.models}
              selections={value.modelSelections}
              disabled={!chat.loaded || !catalog.connected || chat.sending}
              onChange={(kind, id) =>
                setValue((previous) => ({
                  ...previous,
                  modelSelections: { ...previous.modelSelections, [kind]: id },
                }))
              }
              onConfigure={onOpenSettings}
            />
            <div className="cw-assistant-toolbar-spacer" />
            <ChoicePicker
              label="思考程度"
              icon="thinking"
              options={THINKING}
              value={value.thinking}
              disabled={!chat.loaded || chat.sending}
              onChange={(thinking) =>
                setValue((previous) => ({
                  ...previous,
                  thinking: thinking as Thinking,
                }))
              }
            />
            {chat.sending ? (
              <button
                type="button"
                className="cw-assistant-send"
                aria-label="停止回复"
                title="停止回复"
                disabled={!chat.started || chat.stopping}
                onClick={() => void chat.stop()}
              >
                <CanvasIcon name="stop" size={16} />
              </button>
            ) : (
              <button
                type="submit"
                className="cw-assistant-send"
                aria-label="发送消息"
                title="发送消息（Enter），Shift+Enter 换行"
                disabled={
                  !chat.loaded ||
                  !chat.agent ||
                  chat.adding ||
                  (!value.draft.trim() && !value.assets.length)
                }
              >
                <CanvasIcon name="arrow" size={19} />
              </button>
            )}
          </div>
          {pickerOpen && !referenceDisabled && (
            <ReferencePicker
              projectId={documentId}
              nodes={nodes}
              selectedNodes={selectedNodes}
              onAsset={useAsset}
              onNodes={useNodes}
              onClose={closePicker}
            />
          )}
        </form>
        <p className="cw-assistant-footnote">
          {chat.adding ? (
            "正在添加参考素材…"
          ) : chat.agent ? (
            `Agent · ${chat.agent.modelId}`
          ) : (
            <button type="button" onClick={onOpenSettings}>
              请先在设置中配置并选择 Agent 模型
            </button>
          )}
        </p>
      </div>
      {!layout.mobile && (
        <div
          className="cw-assistant-resizer"
          role="separator"
          tabIndex={0}
          aria-label="调整 AI 对话宽度"
          aria-orientation="vertical"
          aria-valuemin={200}
          aria-valuemax={layout.maxWidth}
          aria-valuenow={layout.width}
          aria-valuetext={`${Math.round(layout.width)} 像素；缩至 200 像素收起`}
          title="拖动调整宽度，双击恢复默认宽度"
          {...layout.resizer}
        />
      )}
      <input
        ref={fileInput}
        className="sr-only"
        type="file"
        multiple
        accept="image/*,video/*,audio/*,text/*,.md,.markdown,.txt"
        aria-label="选择对话参考文件"
        onChange={(event) => {
          if (event.target.files?.length)
            void chat.upload([...event.target.files]);
          event.target.value = "";
        }}
      />
      {dragOver && (
        <div className="cw-assistant-drop">
          <CanvasIcon name="upload" size={28} />
          <span>松开以添加参考素材</span>
        </div>
      )}
    </aside>
  );
}
