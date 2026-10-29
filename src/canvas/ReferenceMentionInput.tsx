import {
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  type Ref,
  type RefObject,
  type TextareaHTMLAttributes,
} from "react";
import { createPortal } from "react-dom";
import { CanvasIcon } from "./CanvasIcon";
import {
  insertMention,
  mentionCategories,
  mentionRange,
  REFERENCE_CATEGORIES,
  type MentionOption,
  type MentionRange,
  type ReferenceCategory,
} from "./referenceMentions";
import "./reference-mentions.css";

export interface ReferenceMentionHandle {
  openPicker: () => void;
  insert: (option: MentionOption) => void;
}
interface Props extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange"
> {
  value: string;
  onChangeText: (value: string) => void;
  options: readonly MentionOption[];
  inputRef: RefObject<HTMLTextAreaElement | null>;
  pickerRef: Ref<ReferenceMentionHandle>;
  referencesDisabled?: boolean;
  onChoose?: (
    option: MentionOption,
    signal: AbortSignal,
  ) => boolean | Promise<boolean>;
  onOpen?: () => void;
  loading?: boolean;
  loadError?: string;
}

/** Shared @ interaction. The textarea retains focus and owns its caret/undo. */
export function ReferenceMentionInput({
  value,
  onChangeText,
  options,
  inputRef,
  pickerRef,
  referencesDisabled,
  onChoose,
  onOpen,
  loading,
  loadError,
  disabled,
  onKeyDown,
  onSelect,
  onBlur,
  onCompositionStart,
  onCompositionEnd,
  maxLength = 20000,
  ...props
}: Props) {
  const [range, setRange] = useState<MentionRange | null>(null);
  const [category, setCategory] = useState<ReferenceCategory>("all");
  const [active, setActive] = useState(0);
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState("");
  const panel = useRef<HTMLDivElement>(null);
  const preparation = useRef<AbortController | null>(null);
  const restoreFocus = useRef(false);
  const composing = useRef(false),
    choosing = useRef(false),
    alive = useRef(true);
  const dismissed = useRef<number | null>(null);
  const manual = useRef(false);
  const savedCaret = useRef<MentionRange>({ start: 0, end: 0 });
  const rangeRef = useRef(range);
  rangeRef.current = range;
  const latest = useRef({ value, onChangeText, onChoose, onOpen });
  latest.current = { value, onChangeText, onChoose, onOpen };
  const listId = useId();
  const categories = mentionCategories(options);
  const effectiveCategory = categories.includes(category) ? category : "all";
  const shown = options.filter(
    (option) =>
      effectiveCategory === "all" || option.kind === effectiveCategory,
  );
  const selected = Math.min(active, Math.max(0, shown.length - 1));
  const unavailable = disabled || referencesDisabled;

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      preparation.current?.abort();
    };
  }, []);
  const close = (focus = false) => {
    restoreFocus.current = focus && choosing.current;
    preparation.current?.abort();
    dismissed.current = rangeRef.current?.start ?? null;
    rangeRef.current = null;
    manual.current = false;
    setRange(null);
    if (focus) inputRef.current?.focus({ preventScroll: true });
  };
  const open = (next: MentionRange) => {
    if (unavailable || choosing.current) return;
    if (!rangeRef.current) {
      setCategory("all");
      setActive(0);
      setNotice("");
      latest.current.onOpen?.();
    }
    rangeRef.current = next;
    setRange(next);
  };
  const updateMention = () => {
    const input = inputRef.current;
    if (!input || composing.current || choosing.current || unavailable) return;
    const caret = { start: input.selectionStart, end: input.selectionEnd };
    if (
      manual.current &&
      caret.start === savedCaret.current.start &&
      caret.end === savedCaret.current.end
    )
      return;
    manual.current = false;
    savedCaret.current = caret;
    const next = mentionRange(input.value, caret.start, caret.end);
    if (!next) {
      dismissed.current = null;
      rangeRef.current = null;
      setRange(null);
      return;
    }
    if (dismissed.current !== next.start) open(next);
  };
  const choose = async (option: MentionOption) => {
    if (unavailable || choosing.current || option.disabledReason) return;
    const input = inputRef.current;
    if (!input) return;
    const before = latest.current.value;
    const next = insertMention(
      before,
      rangeRef.current ?? savedCaret.current,
      option.title,
    );
    if (next.value.length > maxLength) {
      setNotice(`正文最多 ${maxLength} 字。`);
      return;
    }
    choosing.current = true;
    const abort = new AbortController();
    preparation.current = abort;
    setPending(true);
    setNotice("");
    try {
      if (latest.current.onChoose) {
        if (!(await latest.current.onChoose(option, abort.signal))) return;
        // Asset preparation may temporarily disable the assistant input. Let
        // React restore it before editing, so focus and native undo survive.
        if (!alive.current) return;
        setPending(false);
        await new Promise<void>((resolve) =>
          requestAnimationFrame(() => resolve()),
        );
      }
      if (
        !alive.current ||
        abort.signal.aborted ||
        latest.current.value !== before
      )
        return;
      // insertText preserves the textarea's native undo transaction, including
      // replacement of a typed @. A controlled-value fallback covers browsers
      // that do not implement this editing command.
      input.focus({ preventScroll: true });
      input.setSelectionRange(next.start, next.end);
      document.execCommand("insertText", false, next.inserted);
      latest.current.onChangeText(next.value);
      savedCaret.current = { start: next.caret, end: next.caret };
      dismissed.current = null;
      rangeRef.current = null;
      manual.current = false;
      setRange(null);
      requestAnimationFrame(() => {
        if (alive.current) {
          input.focus({ preventScroll: true });
          input.setSelectionRange(next.caret, next.caret);
        }
      });
    } catch (error) {
      if (alive.current && !abort.signal.aborted)
        setNotice(
          error instanceof Error ? error.message : "引用失败，请重试。",
        );
    } finally {
      choosing.current = false;
      if (preparation.current === abort) preparation.current = null;
      if (alive.current) {
        setPending(false);
        if (restoreFocus.current || rangeRef.current)
          requestAnimationFrame(() => {
            if (alive.current) inputRef.current?.focus({ preventScroll: true });
          });
      }
      restoreFocus.current = false;
    }
  };
  useImperativeHandle(pickerRef, () => ({
    openPicker: () => {
      if (rangeRef.current) {
        close(true);
        return;
      }
      const input = inputRef.current;
      const next =
        input && document.activeElement === input
          ? { start: input.selectionStart, end: input.selectionEnd }
          : savedCaret.current;
      dismissed.current = null;
      manual.current = true;
      savedCaret.current = next;
      open(next);
      input?.focus({ preventScroll: true });
      input?.setSelectionRange(next.start, next.end);
    },
    insert: (option) => {
      void choose(option);
    },
  }));
  useEffect(() => {
    if (unavailable && !choosing.current) close();
  }, [unavailable]);
  useLayoutEffect(() => {
    if (!range) return;
    const element = panel.current,
      input = inputRef.current;
    if (!element || !input) return;
    let frame = 0;
    const place = () => {
      const rect = input.getBoundingClientRect();
      const width = Math.min(
        440,
        window.innerWidth - 24,
        Math.max(280, rect.width),
      );
      const above = rect.top - 18,
        below = window.innerHeight - rect.bottom - 18;
      const maxHeight = Math.min(360, Math.max(100, Math.max(above, below)));
      element.style.width = `${width}px`;
      element.style.maxHeight = `${maxHeight}px`;
      const height = element.offsetHeight;
      element.style.left = `${Math.max(12, Math.min(rect.left, window.innerWidth - width - 12))}px`;
      element.style.top = `${Math.max(12, above >= below ? rect.top - height - 6 : Math.min(rect.bottom + 6, window.innerHeight - height - 12))}px`;
      element.style.visibility = "visible";
      frame = requestAnimationFrame(place);
    };
    place();
    const outside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !element.contains(event.target) &&
        !input.contains(event.target)
      )
        close();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.isComposing || event.keyCode === 229)
        return;
      event.preventDefault();
      event.stopPropagation();
      close(true);
    };
    document.addEventListener("pointerdown", outside, true);
    document.addEventListener("keydown", escape, true);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointerdown", outside, true);
      document.removeEventListener("keydown", escape, true);
    };
  }, [Boolean(range)]);
  useEffect(() => {
    panel.current
      ?.querySelector('[role="option"][aria-selected="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [selected, effectiveCategory, Boolean(range), shown.length]);

  return (
    <>
      <textarea
        {...props}
        ref={inputRef}
        value={value}
        disabled={disabled || pending}
        maxLength={maxLength}
        aria-controls={range ? listId : undefined}
        aria-expanded={Boolean(range)}
        aria-autocomplete="list"
        aria-activedescendant={
          range && shown[selected] ? `${listId}-${selected}` : undefined
        }
        onChange={(event) => {
          manual.current = false;
          onChangeText(event.target.value);
          updateMention();
        }}
        onSelect={(event) => {
          onSelect?.(event);
          updateMention();
        }}
        onBlur={(event) => {
          if (
            !choosing.current &&
            !panel.current?.contains(event.relatedTarget as Node | null)
          )
            close();
          onBlur?.(event);
        }}
        onCompositionStart={(event) => {
          composing.current = true;
          manual.current = false;
          rangeRef.current = null;
          setRange(null);
          onCompositionStart?.(event);
        }}
        onCompositionEnd={(event) => {
          composing.current = false;
          updateMention();
          onCompositionEnd?.(event);
        }}
        onKeyDown={(event) => {
          if (
            composing.current ||
            event.nativeEvent.isComposing ||
            event.nativeEvent.keyCode === 229
          )
            return;
          if (
            range &&
            [
              "ArrowUp",
              "ArrowDown",
              "ArrowLeft",
              "ArrowRight",
              "Enter",
              "Escape",
            ].includes(event.key)
          ) {
            event.preventDefault();
            event.stopPropagation();
            if (event.key === "Escape") close(true);
            else if (event.key === "Enter") {
              if (shown[selected]) void choose(shown[selected]!);
            } else if (event.key === "ArrowUp" || event.key === "ArrowDown")
              setActive(
                shown.length
                  ? (selected +
                      (event.key === "ArrowDown" ? 1 : -1) +
                      shown.length) %
                      shown.length
                  : 0,
              );
            else {
              const index = categories.indexOf(effectiveCategory);
              setCategory(
                categories[
                  (index +
                    (event.key === "ArrowRight" ? 1 : -1) +
                    categories.length) %
                    categories.length
                ]!,
              );
              setActive(0);
            }
            return;
          }
          onKeyDown?.(event);
        }}
      />
      {range &&
        createPortal(
          <div
            ref={panel}
            className="cw-reference-mention-picker nodrag nopan nowheel"
            role="dialog"
            aria-label="引用项目资产"
            aria-busy={pending}
            style={{ visibility: "hidden" }}
            onPointerDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
            onMouseDown={(event) => event.preventDefault()}
            onKeyDown={(event) => event.stopPropagation()}
            onWheel={(event) => event.stopPropagation()}
            onContextMenu={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            <header>
              <strong>引用项目资产</strong>
              <small>↑↓ 选择 · ←→ 分类 · Enter 确认 · Esc 关闭</small>
            </header>
            <div role="tablist" aria-label="参考资产类型">
              {REFERENCE_CATEGORIES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  tabIndex={-1}
                  role="tab"
                  aria-selected={effectiveCategory === item.id}
                  disabled={!categories.includes(item.id) || pending}
                  onClick={() => {
                    setCategory(item.id);
                    setActive(0);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              role="listbox"
              id={listId}
              aria-label="可引用资产"
              className="cw-reference-mention-list"
            >
              {loading && <p role="status">正在读取资产…</p>}
              {loadError && (
                <p role="alert">
                  {loadError}{" "}
                  <button type="button" onClick={onOpen}>
                    重新读取
                  </button>
                </p>
              )}
              {!loading && !loadError && !shown.length && (
                <p>暂无可引用的素材，请先上传或连接上游节点。</p>
              )}
              {shown.map((option, index) => (
                <button
                  key={option.id}
                  id={`${listId}-${index}`}
                  type="button"
                  tabIndex={-1}
                  role="option"
                  aria-selected={selected === index}
                  aria-disabled={Boolean(option.disabledReason) || pending}
                  title={option.disabledReason ?? option.title}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => void choose(option)}
                >
                  <span className="cw-reference-mention-thumbnail">
                    {option.thumbnail ? (
                      <img src={option.thumbnail} alt="" draggable={false} />
                    ) : (
                      <CanvasIcon name={option.kind} size={22} />
                    )}
                  </span>
                  <span>
                    <strong>{option.title}</strong>
                    <small>{option.disabledReason || option.detail}</small>
                  </span>
                </button>
              ))}
            </div>
            {notice && (
              <p className="cw-reference-mention-notice" role="alert">
                {notice}
              </p>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
