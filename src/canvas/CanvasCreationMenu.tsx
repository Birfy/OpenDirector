import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { CanvasContextMenu } from "./CanvasContextMenu";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";
import { CANVAS_CREATION_TOOLS } from "./creationTools";
import type { CanvasNodeKind } from "./model";
import "./canvas-creation-menu.css";

function menuKeys(event: KeyboardEvent<HTMLDivElement>) {
  const items = [
    ...event.currentTarget.querySelectorAll<HTMLButtonElement>(
      '[role="menuitem"]:not(:disabled)',
    ),
  ];
  const index = items.indexOf(document.activeElement as HTMLButtonElement);
  const next =
    event.key === "ArrowDown"
      ? (index + 1) % items.length
      : event.key === "ArrowUp"
        ? (index - 1 + items.length) % items.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? items.length - 1
            : null;
  if (next !== null) {
    event.preventDefault();
    event.stopPropagation();
    items[next]?.focus();
  }
}

type CreationActions = {
  onCreate: (kind: CanvasNodeKind) => void;
  onAssets: () => void;
  onUpload: () => void;
};

export function CreationMenuContent({
  onCreate,
  onAssets,
  onUpload,
  allowedKinds,
}: CreationActions & { allowedKinds?: readonly CanvasNodeKind[] }) {
  return (
    <>
      <div className="cw-menu-caption">新建节点</div>
      {CANVAS_CREATION_TOOLS.map((tool) =>
        tool.unavailable ? (
          <TooltipButton
            key={tool.kind}
            role="menuitem"
            aria-label={tool.label}
            aria-disabled="true"
            label="暂未开放"
            tooltipSide="right"
            onClick={(event) => event.preventDefault()}
          >
            <CanvasIcon name={tool.icon} size={18} />
            <span>{tool.label}</span>
          </TooltipButton>
        ) : (
          <button
            key={tool.kind}
            role="menuitem"
            disabled={Boolean(
              allowedKinds && !allowedKinds.includes(tool.kind),
            )}
            title={
              allowedKinds && !allowedKinds.includes(tool.kind)
                ? "不支持此下游类型或参考源不可用"
                : undefined
            }
            onClick={() => onCreate(tool.kind)}
          >
            <CanvasIcon name={tool.icon} size={18} />
            <span>{tool.label}</span>
          </button>
        ),
      )}
      {!allowedKinds && (
        <>
          <hr />
          <button role="menuitem" onClick={onAssets}>
            <CanvasIcon name="rail-folder" size={18} />
            <span>从资产库添加</span>
          </button>
          <button role="menuitem" onClick={onUpload}>
            <CanvasIcon name="rail-upload" size={18} />
            <span>本地上传</span>
          </button>
        </>
      )}
    </>
  );
}

export function CanvasCreationMenu({
  x,
  y,
  mode,
  canPaste,
  canUndo,
  canRedo,
  onPaste,
  onUndo,
  onRedo,
  onClose,
  ...actions
}: CreationActions & {
  x: number;
  y: number;
  mode: "create" | "context";
  canPaste: boolean;
  canUndo: boolean;
  canRedo: boolean;
  onPaste: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const submenu = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const focusSubmenu = useRef(false);
  const close = useRef(onClose);
  close.current = onClose;
  const cancelClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = undefined;
  };
  const closeSubmenu = () => {
    cancelClose();
    setExpanded(false);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setExpanded(false), 180);
  };
  const openSubmenu = (focus = false) => {
    cancelClose();
    focusSubmenu.current = focus;
    if (expanded && focus)
      submenu.current
        ?.querySelector<HTMLButtonElement>('[role="menuitem"]')
        ?.focus({ preventScroll: true });
    setExpanded(true);
  };

  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!root.current?.contains(target) && !submenu.current?.contains(target))
        close.current();
    };
    document.addEventListener("pointerdown", dismiss, true);
    return () => {
      document.removeEventListener("pointerdown", dismiss, true);
      cancelClose();
    };
  }, []);
  useLayoutEffect(() => {
    root.current
      ?.querySelector<HTMLButtonElement>('[role="menuitem"]')
      ?.focus({ preventScroll: true });
  }, []);
  useLayoutEffect(() => {
    if (expanded && focusSubmenu.current) {
      submenu.current
        ?.querySelector<HTMLButtonElement>('[role="menuitem"]')
        ?.focus({ preventScroll: true });
      focusSubmenu.current = false;
    }
  }, [expanded]);
  useEffect(() => {
    // Right-clicking a non-focusable caption can move focus to document.body.
    // Keep Escape usable even when the hovered submenu does not own focus.
    const escape = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      event.preventDefault();
      if (expanded) {
        closeSubmenu();
        trigger.current?.focus();
      } else {
        root.current
          ?.closest<HTMLElement>(".cw-workspace")
          ?.focus({ preventScroll: true });
        close.current();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [expanded]);
  const run = (action: () => void) => {
    action();
    onClose();
  };
  const creationActions = {
    onCreate: (kind: CanvasNodeKind) => run(() => actions.onCreate(kind)),
    onAssets: () => run(actions.onAssets),
    onUpload: () => run(actions.onUpload),
  };
  const shortcuts = navigator.platform.includes("Mac")
    ? ["⌘V", "⌘⇧Z", "⌘Z"]
    : ["Ctrl+V", "Ctrl+Shift+Z", "Ctrl+Z"];
  const shell = (content: ReactNode) => (
    <div ref={root} onPointerLeave={scheduleClose} onPointerEnter={cancelClose}>
      <CanvasContextMenu
        x={x}
        y={y}
        className="cw-canvas-menu"
        aria-label={mode === "create" ? "新建节点" : "画布操作"}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            if (expanded) {
              closeSubmenu();
              trigger.current?.focus();
            } else {
              root.current
                ?.closest<HTMLElement>(".cw-workspace")
                ?.focus({ preventScroll: true });
              onClose();
            }
          } else menuKeys(event);
        }}
      >
        {content}
      </CanvasContextMenu>
    </div>
  );
  return (
    <>
      {mode === "create"
        ? shell(<CreationMenuContent {...creationActions} />)
        : shell(
            <>
              <button
                ref={trigger}
                role="menuitem"
                className={expanded ? "is-open" : ""}
                aria-haspopup="menu"
                aria-expanded={expanded}
                onPointerEnter={() => openSubmenu()}
                onClick={() => openSubmenu(true)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    event.stopPropagation();
                    openSubmenu(true);
                  }
                }}
              >
                <span>新建节点</span>
                <CanvasIcon name="chevronRight" size={18} />
              </button>
              <hr />
              <button
                role="menuitem"
                disabled={!canPaste}
                onPointerEnter={closeSubmenu}
                onClick={() => run(onPaste)}
              >
                <span>粘贴</span>
                <kbd>{shortcuts[0]}</kbd>
              </button>
              <button
                role="menuitem"
                disabled={!canRedo}
                onPointerEnter={closeSubmenu}
                onClick={() => run(onRedo)}
              >
                <span>重做</span>
                <kbd>{shortcuts[1]}</kbd>
              </button>
              <button
                role="menuitem"
                disabled={!canUndo}
                onPointerEnter={closeSubmenu}
                onClick={() => run(onUndo)}
              >
                <span>撤销</span>
                <kbd>{shortcuts[2]}</kbd>
              </button>
            </>,
          )}
      {expanded &&
        mode === "context" &&
        createPortal(
          <div
            ref={submenu}
            onPointerEnter={cancelClose}
            onPointerLeave={scheduleClose}
          >
            <CanvasContextMenu
              x={x}
              y={y}
              anchor={trigger.current}
              className="cw-canvas-menu"
              aria-label="新建节点"
              onKeyDown={(event) => {
                if (event.key === "Escape" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  event.stopPropagation();
                  closeSubmenu();
                  trigger.current?.focus();
                } else menuKeys(event);
              }}
            >
              <CreationMenuContent {...creationActions} />
            </CanvasContextMenu>
          </div>,
          document.body,
        )}
    </>
  );
}
