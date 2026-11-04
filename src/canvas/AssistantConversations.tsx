import { useEffect, useId, useRef, useState } from "react";
import type { ConversationSummary } from "../backend/chat";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";

/** Session navigation stays inside the assistant, independent of canvas projects. */
export function AssistantConversations({
  activeId,
  hasMessages,
  projectTitle,
  items,
  loading,
  error,
  disabledReason,
  changing,
  onRefresh,
  onChange,
  onClose,
}: {
  activeId?: string;
  hasMessages: boolean;
  projectTitle: string;
  items: ConversationSummary[];
  loading: boolean;
  error: string;
  disabledReason: string;
  changing: boolean;
  onRefresh: () => void;
  onChange: (id?: string, create?: boolean) => Promise<boolean>;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const listId = useId();
  const shown = items.filter((item) =>
    item.title.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()),
  );
  const title = items.find((item) => item.id === activeId)?.title;
  const closeHistory = (focus = false) => {
    setOpen(false);
    if (focus)
      root.current
        ?.querySelector<HTMLButtonElement>("[data-session-history]")
        ?.focus();
  };

  useEffect(() => {
    if (!open) return;
    search.current?.focus();
    const outside = (event: Event) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusin", outside);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusin", outside);
    };
  }, [open]);

  const choose = async (id?: string, create = false) => {
    if (disabledReason) return;
    if (await onChange(id, create)) closeHistory();
  };

  return (
    <div
      className="cw-assistant-sessions"
      ref={root}
      onKeyDown={(event) => {
        if (!open) return;
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          closeHistory(true);
        } else if (
          !event.nativeEvent.isComposing &&
          ["ArrowDown", "ArrowUp"].includes(event.key)
        ) {
          const options = [
            ...(root.current?.querySelectorAll<HTMLButtonElement>(
              ".cw-assistant-session-row:not(:disabled)",
            ) ?? []),
          ];
          if (!options.length) return;
          event.preventDefault();
          const index = options.indexOf(
            document.activeElement as HTMLButtonElement,
          );
          const next =
            index < 0
              ? event.key === "ArrowDown"
                ? 0
                : options.length - 1
              : (index +
                  (event.key === "ArrowDown" ? 1 : -1) +
                  options.length) %
                options.length;
          options[next]?.focus();
        }
      }}
    >
      <header className="cw-assistant-header">
        <h2 title={hasMessages ? title : "新会话"}>
          {hasMessages ? title || "AI 对话" : "新会话"}
        </h2>
        <div className="cw-assistant-header-actions">
          <TooltipButton
            className="cw-assistant-new-session"
            label={disabledReason || "新建会话"}
            aria-label="新建会话"
            aria-disabled={!!disabledReason}
            tooltipSide="bottom"
            onClick={() => void choose(undefined, true)}
          >
            <CanvasIcon name="plus" size={16} />
            <span>新建</span>
          </TooltipButton>
          <TooltipButton
            className="cw-assistant-icon-button"
            label="历史会话"
            data-session-history
            tooltipSide="bottom"
            showTooltip={!open}
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-controls={listId}
            onClick={() => {
              if (open) closeHistory();
              else {
                setQuery("");
                setOpen(true);
                onRefresh();
              }
            }}
          >
            <CanvasIcon name="history" size={18} />
          </TooltipButton>
          <TooltipButton
            className="cw-assistant-collapse"
            label="收起 AI 对话"
            tooltipSide="bottom"
            aria-controls="canvas-assistant"
            aria-expanded="true"
            onClick={onClose}
          >
            <CanvasIcon name="collapse" size={18} />
          </TooltipButton>
        </div>
      </header>
      {open && (
        <section
          id={listId}
          className="cw-assistant-session-history"
          role="dialog"
          aria-label="历史会话"
        >
          <div className="cw-assistant-session-heading">
            <strong>历史会话</strong>
            <span title={projectTitle}>当前画布</span>
          </div>
          <label className="cw-assistant-session-search">
            <CanvasIcon name="search" size={16} />
            <input
              ref={search}
              aria-label="搜索会话"
              placeholder="搜索会话"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          {disabledReason && (
            <p className="cw-assistant-session-notice" role="status">
              {disabledReason}
            </p>
          )}
          {error ? (
            <div className="cw-assistant-session-notice" role="alert">
              <p>{error}</p>
              <button type="button" onClick={onRefresh}>
                重试
              </button>
            </div>
          ) : loading ? (
            <p className="cw-assistant-session-notice" role="status">
              正在读取会话…
            </p>
          ) : (
            <div className="cw-assistant-session-list" aria-busy={changing}>
              {shown.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="cw-assistant-session-row"
                  aria-current={item.id === activeId ? "true" : undefined}
                  disabled={!!disabledReason}
                  title={item.title}
                  onClick={() => void choose(item.id)}
                >
                  <span className="cw-assistant-session-details">
                    <strong>{item.title}</strong>
                    <small>
                      {item.messageCount
                        ? `${item.messageCount} 条消息`
                        : "尚无消息"}
                      {item.hasDraft ? " · 有草稿" : ""}
                    </small>
                  </span>
                  {item.id === activeId && (
                    <span className="cw-assistant-session-current">
                      <CanvasIcon name="check" size={14} />
                      当前
                    </span>
                  )}
                </button>
              ))}
              {!shown.length && (
                <p className="cw-assistant-session-notice">
                  {query.trim() ? "没有找到匹配的会话" : "暂无历史会话"}
                </p>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
