import { useContext, useLayoutEffect, useRef, type ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";
import type { CanvasNodeKind } from "./model";
import { CanvasActionsContext } from "./CanvasActionsContext";
import { CanvasIcon } from "./CanvasIcon";

/** Shared node chrome and title editing; each node renderer owns only its contents. */
export function NodeFrame({
  id,
  kind,
  title,
  selected,
  empty,
  busy,
  children,
}: {
  id: string;
  kind: CanvasNodeKind;
  title: string;
  selected: boolean;
  empty: boolean;
  busy: boolean;
  children: ReactNode;
}) {
  const actions = useContext(CanvasActionsContext);
  const locked = Boolean(actions?.isLocked(id));
  const target = actions?.referenceTargetState?.(id);
  const editing = actions?.nameEdit?.id === id;
  const input = useRef<HTMLInputElement>(null);
  const finished = useRef(false);
  const finish = (save: boolean) => {
    if (!editing || finished.current) return;
    finished.current = true;
    actions?.finishNameEdit?.(save);
  };
  useLayoutEffect(() => {
    if (editing) {
      finished.current = false;
      input.current?.focus({ preventScroll: true });
      input.current?.select();
    }
  }, [editing]);
  return (
    <div
      className={`cw-node cw-node-${kind}${target ? ` cw-node-reference-${target}` : ""}${empty ? " cw-node-empty" : ""}${selected ? " cw-node-selected" : ""}${locked ? " cw-node-locked" : ""}${busy ? " cw-node-generating" : ""}${actions?.isArriving(id) ? " cw-node-result-arrival" : ""}`}
      aria-busy={busy}
      onContextMenu={(event) => {
        if (
          (event.target as Element).closest(
            "input,textarea,[contenteditable=true]",
          )
        )
          return;
        event.preventDefault();
        event.stopPropagation();
        actions?.contextMenu(id, event);
      }}
    >
      <div className="cw-node-heading">
        <span className="cw-node-type">
          <CanvasIcon name={kind} size={15} />
        </span>
        {editing ? (
          <span
            className="cw-node-title-field nodrag nopan nowheel"
            onPointerDown={(event) => event.stopPropagation()}
            onDoubleClick={(event) => event.stopPropagation()}
          >
            <span aria-hidden="true" className="cw-node-title-measure">
              {actions?.nameEdit?.value || "输入节点名称"}
            </span>
            <input
              ref={input}
              className="cw-node-title-input"
              aria-label="节点名称"
              placeholder="输入节点名称"
              value={actions?.nameEdit?.value ?? ""}
              onChange={(event) =>
                actions?.changeNameDraft?.(event.target.value)
              }
              onBlur={() => finish(true)}
              onKeyDown={(event) => {
                event.stopPropagation();
                if (event.nativeEvent.isComposing) return;
                if (event.key === "Enter") {
                  event.preventDefault();
                  if (event.currentTarget.value.trim()) finish(true);
                }
                if (event.key === "Escape") {
                  event.preventDefault();
                  finish(false);
                }
              }}
            />
          </span>
        ) : (
          <span
            className="cw-node-title nodrag nopan"
            title={locked ? title : `${title}（双击重命名）`}
            tabIndex={0}
            onPointerDown={(event) => event.stopPropagation()}
            onDoubleClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              actions?.rename(id);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === "F2") {
                event.preventDefault();
                event.stopPropagation();
                actions?.rename(id);
              }
            }}
          >
            {title}
          </span>
        )}
        {locked && <CanvasIcon name="lock" size={12} />}
      </div>
      {children}
      {["text", "image", "video", "audio"].includes(kind) &&
        (actions?.versionCount?.(id) ?? 0) > 1 && (
          <button
            type="button"
            className="cw-node-version-button nodrag nopan nowheel"
            aria-label={`历史版本，共 ${actions?.versionCount?.(id)} 个`}
            title="历史版本（含当前版本）"
            onPointerDown={(event) => event.stopPropagation()}
            onDoubleClick={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              actions?.showVersions?.(
                id,
                event.currentTarget.getBoundingClientRect(),
              );
            }}
          >
            <span className="cw-node-badge-count">
              {actions?.versionCount?.(id)}
            </span>
            <CanvasIcon name="chevronDown" size={11} />
          </button>
        )}
      {kind !== "group" && (
        <>
          <Handle
            id="in"
            type="target"
            position={Position.Left}
            isConnectable={false}
            className="cw-port cw-proxy-port"
          />
          <Handle
            id="out"
            type="source"
            position={Position.Right}
            isConnectable={false}
            className="cw-port cw-proxy-port"
          />
        </>
      )}
    </div>
  );
}
