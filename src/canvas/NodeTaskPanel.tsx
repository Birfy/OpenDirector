import { useId, useState } from "react";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";
import { SelectionToolbarMenu } from "./SelectionToolbarMenu";
import type { CanvasNode } from "./model";
import {
  CANVAS_TOOLS,
  createCanvasToolTask,
  initialToolParameters,
  toolFields,
  validateToolTask,
  type CanvasToolId,
  type CanvasToolTask,
  type ToolCapability,
  type ToolParameters,
} from "./toolCatalog";
import "./node-task-panel.css";

/** A single source-bound operation. Model-provided presets stay unknown until connected. */
export function NodeTaskPanel({
  node,
  nodes,
  tool,
  draft,
  onDraftChange,
  onImportResults,
  onClose,
  onEditSelection,
  capability,
  onGenerate,
}: {
  node: CanvasNode;
  nodes: readonly CanvasNode[];
  tool: CanvasToolId;
  draft?: CanvasToolTask;
  onDraftChange: (task: CanvasToolTask) => void;
  onImportResults: (task: CanvasToolTask) => void;
  onClose: () => void;
  onEditSelection: () => void;
  /** Service availability and options from the local API's tool catalog. */
  capability?: ToolCapability;
  onGenerate?: (task: CanvasToolTask) => void;
}) {
  const spec = CANVAS_TOOLS.find((item) => item.id === tool)!;
  const saved =
    draft?.tool === tool && draft.sourceNodeIds[0] === node.id
      ? draft
      : undefined;
  const [edits, setParameters] = useState<ToolParameters>(
    saved?.parameters ?? {},
  );
  // Catalog options may arrive after the panel opens. Defaults follow the catalog;
  // explicit user/saved values remain intact so unavailable choices are reported.
  const parameters = { ...initialToolParameters(spec, capability), ...edits };
  const [extraSource, setExtraSource] = useState(saved?.sourceNodeIds[1] ?? "");
  const [notice, setNotice] = useState("");
  const [moreAnchor, setMoreAnchor] = useState<HTMLButtonElement | null>(null);
  const moreId = useId();
  const task = createCanvasToolTask(
    tool,
    [node.id, ...(extraSource ? [extraSource] : [])],
    parameters,
    saved?.selection,
  );
  const errors = validateToolTask(
    task,
    nodes.map((item) => ({
      nodeId: item.id,
      kind: item.type,
      title: item.data.title,
      src: item.data.src,
      mimeType: item.data.mimeType,
      width: item.data.media?.width,
      height: item.data.media?.height,
      durationSeconds: item.data.media?.durationSeconds,
    })),
    capability,
  );
  const runnable = Boolean(onGenerate && capability?.available);
  const change = (key: string, value: string | number | boolean) => {
    setParameters((current) => ({ ...current, [key]: value }));
    setNotice("");
  };
  return (
    <section
      className="cw-node-task-panel"
      aria-label={`${spec.title}面板`}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          onClose();
        }
      }}
    >
      <header>
        <strong>{spec.title}</strong>
        <span>{node.data.title}</span>
        <TooltipButton label={`退出${spec.title}`} onClick={onClose}>
          <CanvasIcon name="close" size={16} />
        </TooltipButton>
      </header>
      {spec.minSources > 1 && (
        <label className="cw-node-task-source">
          商品参考图
          <select
            aria-label="商品参考图"
            value={extraSource}
            onChange={(event) => setExtraSource(event.target.value)}
          >
            <option value="">选择画布中的图片</option>
            {nodes
              .filter(
                (item) =>
                  item.id !== node.id && item.type === "image" && item.data.src,
              )
              .map((item) => (
                <option key={item.id} value={item.id}>
                  {item.data.title}
                </option>
              ))}
          </select>
        </label>
      )}
      <div className="cw-node-task-fields">
        {[...toolFields(spec, capability)]
          .sort(
            (a, b) =>
              Number(b.type === "textarea") - Number(a.type === "textarea"),
          )
          .map((field) => {
            if (
              tool === "multi-size" &&
              parameters.aspectRatio !== "custom" &&
              ["outputWidth", "outputHeight"].includes(field.key)
            )
              return null;
            const value = parameters[field.key];
            return (
              <label
                key={field.key}
                className={field.type === "textarea" ? "is-wide" : ""}
              >
                <span>{field.label}</span>
                {field.type === "select" ? (
                  <select
                    aria-label={`${spec.title}${field.label}`}
                    disabled={!field.options?.length}
                    value={String(value ?? "")}
                    onChange={(event) =>
                      change(
                        field.key,
                        field.options?.find(
                          (option) =>
                            String(option.value) === event.target.value,
                        )?.value ?? event.target.value,
                      )
                    }
                  >
                    {!field.options?.length && (
                      <option value="">连接服务后选择</option>
                    )}
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    aria-label={`${spec.title}${field.label}`}
                    rows={4}
                    value={String(value ?? "")}
                    onChange={(event) => change(field.key, event.target.value)}
                  />
                ) : field.type === "boolean" ? (
                  <input
                    aria-label={`${spec.title}${field.label}`}
                    type="checkbox"
                    checked={value === true}
                    onChange={(event) =>
                      change(field.key, event.target.checked)
                    }
                  />
                ) : (
                  <input
                    aria-label={`${spec.title}${field.label}`}
                    type={field.type}
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={
                      typeof value === "number" && !Number.isFinite(value)
                        ? ""
                        : String(value ?? "")
                    }
                    onChange={(event) =>
                      change(
                        field.key,
                        field.type === "number" &&
                          Number.isFinite(event.target.valueAsNumber)
                          ? event.target.valueAsNumber
                          : event.target.value,
                      )
                    }
                  />
                )}
              </label>
            );
          })}
      </div>
      <p className="cw-node-task-note">
        {runnable
          ? (errors[0] ?? "由已连接的模型服务处理，结果会连接到当前节点。")
          : `${capability?.reason ?? "尚未连接此功能的 AI 服务。"}可保存参数或导入处理结果。`}
      </p>
      <footer>
        <TooltipButton
          className="cw-node-task-more"
          label={`${spec.title}更多操作`}
          aria-haspopup="menu"
          aria-expanded={Boolean(moreAnchor)}
          aria-controls={moreAnchor ? moreId : undefined}
          onClick={(event) =>
            setMoreAnchor(moreAnchor ? null : event.currentTarget)
          }
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              event.stopPropagation();
              setMoreAnchor(event.currentTarget);
            }
          }}
        >
          <CanvasIcon name="more" size={16} />
        </TooltipButton>
        {(tool === "product-replacement" ||
          (tool === "layer-decompose" && parameters.mode === "boxes")) && (
          <button
            type="button"
            onClick={() => {
              onDraftChange(task);
              onEditSelection();
            }}
          >
            {saved?.selection ? "修改选区" : "编辑选区"}
          </button>
        )}
        {notice && (
          <span className="cw-node-task-status" role="status">
            {notice}
          </span>
        )}
        <button
          type="button"
          className="cw-node-task-primary"
          disabled={!runnable || errors.length > 0}
          title={
            runnable
              ? errors[0]
              : (capability?.reason ?? "此功能尚未连接 AI 服务")
          }
          onClick={() => {
            onDraftChange(task);
            onGenerate?.(task);
          }}
        >
          生成
        </button>
      </footer>
      {moreAnchor && (
        <SelectionToolbarMenu
          anchor={moreAnchor}
          id={moreId}
          label={`${spec.title}更多操作`}
          onClose={() => setMoreAnchor(null)}
        >
          <button
            type="button"
            role="menuitem"
            className="cw-selection-menu-item"
            onClick={() => {
              onDraftChange(task);
              setNotice("参数已保存到当前节点。");
              moreAnchor.focus({ preventScroll: true });
              setMoreAnchor(null);
            }}
          >
            保存参数
          </button>
          <button
            type="button"
            role="menuitem"
            className="cw-selection-menu-item"
            onClick={() => {
              moreAnchor.focus({ preventScroll: true });
              setMoreAnchor(null);
              onImportResults(task);
            }}
          >
            导入结果
          </button>
        </SelectionToolbarMenu>
      )}
    </section>
  );
}
