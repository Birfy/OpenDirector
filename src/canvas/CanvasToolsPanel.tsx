import { useEffect, useRef, useState } from "react";
import { CanvasIcon } from "./CanvasIcon";
import {
  CANVAS_TOOLS,
  createCanvasToolTask,
  initialToolParameters,
  toolFields,
  validateToolTask,
  type CanvasToolId,
  type CanvasToolTask,
  type ToolCapabilities,
  type ToolParameters,
  type ToolSelection,
  type ToolSource,
} from "./toolCatalog";
import "./canvas-tools-panel.css";

export type ToolTaskSubmitResult =
  | { ok: true; taskId: string; status: "queued" }
  | { ok: false; error: string };
export interface CanvasToolsPanelProps {
  sources: readonly ToolSource[];
  capabilities?: ToolCapabilities;
  localTools?: Partial<Record<CanvasToolId, () => void>>;
  initialTool?: CanvasToolId;
  initialDraft?: CanvasToolTask;
  selection?: ToolSelection;
  selectionTool?: CanvasToolId;
  onEditSelection?: (tool: CanvasToolId) => void;
  onDraftChange?: (task: CanvasToolTask) => void;
  onImportResults?: (task: CanvasToolTask) => void;
  importingResults?: boolean;
  /** Optional real adapter. Absence always leaves submission disabled. No fallback output. */
  onSubmit?: (
    task: CanvasToolTask,
    context: { signal: AbortSignal },
  ) => Promise<ToolTaskSubmitResult>;
  onClose?: () => void;
}
const categories = [
  { id: "image", label: "图片" },
  { id: "video", label: "视频" },
  { id: "audio", label: "音频" },
  { id: "director", label: "导演" },
] as const;

export function CanvasToolsPanel({
  sources,
  capabilities,
  localTools,
  initialTool = "layers",
  initialDraft,
  selection,
  selectionTool,
  onEditSelection,
  onDraftChange,
  onImportResults,
  importingResults = false,
  onSubmit,
  onClose,
}: CanvasToolsPanelProps) {
  const initial =
    CANVAS_TOOLS.find(
      (tool) => tool.id === (initialDraft?.tool ?? initialTool),
    ) ?? CANVAS_TOOLS[0]!;
  const [category, setCategory] = useState(initial.category);
  const [activeId, setActiveId] = useState(initial.id);
  const [search, setSearch] = useState("");
  const [drafts, setDrafts] = useState<
    Partial<Record<CanvasToolId, ToolParameters>>
  >(initialDraft ? { [initialDraft.tool]: initialDraft.parameters } : {});
  const [errors, setErrors] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const [running, setRunning] = useState(false);
  const submission = useRef<AbortController | null>(null);
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      submission.current?.abort();
    };
  }, []);
  const active = CANVAS_TOOLS.find((tool) => tool.id === activeId)!;
  const capability = capabilities?.[active.id];
  const fields = toolFields(active, capability);
  const parameters = {
    ...initialToolParameters(active, capability),
    ...drafts[active.id],
  };
  const compatible = sources.filter((source) =>
    active.sources.includes(source.kind as "image" | "video" | "audio"),
  );
  const task = createCanvasToolTask(
    active.id,
    compatible.map((source) => source.nodeId),
    parameters,
    selectionTool === undefined || selectionTool === active.id
      ? selection
      : undefined,
  );
  const connected = !!onSubmit && capability?.available === true;
  const openLocal = localTools?.[active.id];
  const visible = CANVAS_TOOLS.filter(
    (tool) =>
      tool.category === category &&
      `${tool.title} ${tool.description}`.includes(search.trim()),
  );
  const selectTool = (id: CanvasToolId) => {
    setActiveId(id);
    setErrors([]);
    setNotice("");
    const next = CANVAS_TOOLS.find((tool) => tool.id === id)!;
    onDraftChange?.(
      createCanvasToolTask(
        id,
        sources
          .filter((source) =>
            next.sources.includes(source.kind as "image" | "video" | "audio"),
          )
          .map((source) => source.nodeId),
        drafts[id] ?? initialToolParameters(next, capabilities?.[id]),
      ),
    );
  };
  const change = (key: string, value: string | number | boolean) => {
    const next = { ...parameters, [key]: value };
    setDrafts((current) => ({ ...current, [active.id]: next }));
    setErrors([]);
    setNotice("");
    onDraftChange?.(
      createCanvasToolTask(active.id, task.sourceNodeIds, next, task.selection),
    );
  };
  const submit = async () => {
    if (!connected || !onSubmit || running) return;
    const invalid = validateToolTask(task, sources, capability);
    if (invalid.length) {
      setErrors(invalid);
      return;
    }
    const controller = new AbortController();
    submission.current = controller;
    setRunning(true);
    setErrors([]);
    setNotice("");
    try {
      const result = await onSubmit(task, { signal: controller.signal });
      if (!mounted.current || controller.signal.aborted) return;
      if (!result.ok) setErrors([result.error]);
      else if (!result.taskId.trim() || result.status !== "queued")
        setErrors(["服务没有返回有效的任务标识，不能确认提交成功。"]);
      else
        setNotice(
          "服务已接受任务。生成是否完成，以服务返回的任务状态与素材为准。",
        );
    } catch (error) {
      if (mounted.current && !controller.signal.aborted)
        setErrors([error instanceof Error ? error.message : "任务提交失败。"]);
    } finally {
      if (submission.current === controller) submission.current = null;
      if (mounted.current) setRunning(false);
    }
  };
  const exportTask = () => {
    onDraftChange?.(task);
    const blob = new Blob([JSON.stringify(task, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob),
      link = document.createElement("a");
    link.href = url;
    link.download = `${active.id}.task.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice("已导出本地任务草稿。此操作没有提交生成任务。");
  };
  return (
    <section className="ctp-panel" aria-label="画布工具目录">
      <header className="ctp-header">
        <div>
          <h2>工具箱</h2>
          <span>图像、声音与镜头的下一步</span>
        </div>
        {onClose && (
          <button onClick={onClose} aria-label="关闭工具箱">
            <CanvasIcon name="close" size={17} />
          </button>
        )}
      </header>
      <label className="ctp-search">
        <CanvasIcon name="search" size={15} />
        <input
          aria-label="搜索画布工具"
          placeholder="搜索工具"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>
      <div className="ctp-tabs" role="tablist" aria-label="工具类型">
        {categories.map((item) => (
          <button
            key={item.id}
            role="tab"
            disabled={running}
            aria-selected={category === item.id}
            onClick={() => {
              setCategory(item.id);
              const next = CANVAS_TOOLS.find(
                (tool) => tool.category === item.id,
              );
              if (next) selectTool(next.id);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="ctp-content">
        <div className="ctp-grid">
          {visible.map((tool) => (
            <button
              key={tool.id}
              disabled={running}
              className={active.id === tool.id ? "is-active" : ""}
              onClick={() => selectTool(tool.id)}
            >
              <CanvasIcon
                name={
                  tool.execution === "local-editor"
                    ? tool.category === "director"
                      ? "camera"
                      : "settings"
                    : tool.category === "video"
                      ? "video"
                      : tool.category === "audio"
                        ? "audio"
                        : "sparkle"
                }
                size={18}
              />
              <span>
                {tool.title}
                <small>
                  {tool.execution === "local-editor"
                    ? localTools?.[tool.id]
                      ? "本地可用"
                      : "编辑器未接入"
                    : capabilities?.[tool.id]?.available && onSubmit
                      ? "服务可用"
                      : "待连接服务"}
                </small>
              </span>
            </button>
          ))}
          {!visible.length && <p className="ctp-muted">没有匹配的工具。</p>}
        </div>
        <div className="ctp-detail">
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          {active.minSources > 0 && (
            <div className="ctp-sources">
              <span>来源素材 · {compatible.length}</span>
              {compatible.length ? (
                compatible.map((source) => (
                  <div key={source.nodeId}>
                    <CanvasIcon name={source.kind} size={14} />
                    {source.title}
                  </div>
                ))
              ) : (
                <p>
                  请先在画布中选择
                  {active.sources
                    .map((kind) =>
                      kind === "image"
                        ? "图片"
                        : kind === "video"
                          ? "视频"
                          : "音频",
                    )
                    .join(" / ")}
                  素材。
                </p>
              )}
              {active.id === "product-replacement" && (
                <small>第一个来源是原场景，第二个是商品图。</small>
              )}
            </div>
          )}
          <div className="ctp-fields">
            {fields.map((field) => {
              if (
                active.id === "image-hd" &&
                parameters.kind === "normal" &&
                ["resolution", "detailStrength"].includes(field.key)
              )
                return null;
              const value = parameters[field.key];
              return (
                <label
                  key={field.key}
                  className={field.type === "textarea" ? "is-multiline" : ""}
                >
                  <span>{field.label}</span>
                  {field.type === "select" ? (
                    <select
                      aria-label={`${active.title}${field.label}`}
                      disabled={running || !field.options?.length}
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
                        <option value="">等待服务提供选项</option>
                      )}
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      aria-label={`${active.title}${field.label}`}
                      disabled={running}
                      rows={3}
                      value={String(value ?? "")}
                      onChange={(event) =>
                        change(field.key, event.target.value)
                      }
                      placeholder="描述你的修改想法"
                    />
                  ) : field.type === "boolean" ? (
                    <input
                      aria-label={`${active.title}${field.label}`}
                      type="checkbox"
                      checked={value === true}
                      disabled={running}
                      onChange={(event) =>
                        change(field.key, event.target.checked)
                      }
                    />
                  ) : (
                    <input
                      aria-label={`${active.title}${field.label}`}
                      type={field.type}
                      value={
                        field.type === "number"
                          ? typeof value === "number" && Number.isFinite(value)
                            ? value
                            : ""
                          : String(value ?? "")
                      }
                      disabled={running}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      onChange={(event) =>
                        change(
                          field.key,
                          field.type === "number"
                            ? Number.isFinite(event.target.valueAsNumber)
                              ? event.target.valueAsNumber
                              : ""
                            : event.target.value,
                        )
                      }
                    />
                  )}
                  {field.hint && <small>{field.hint}</small>}
                </label>
              );
            })}
          </div>
          {[
            "cutout",
            "inpainting-remove",
            "smart-edit",
            "product-replacement",
          ].includes(active.id) && (
            <div className="ctp-selection">
              <span>{task.selection ? "已提供选区数据" : "尚未提供选区"}</span>
              <button
                disabled={!onEditSelection || running}
                onClick={() => onEditSelection?.(active.id)}
              >
                编辑选区
              </button>
            </div>
          )}
          {active.execution === "remote" && !connected && (
            <div className="ctp-service-note">
              <CanvasIcon name="link" size={16} />
              <span>
                {capability?.reason ||
                  "尚未连接真实生成服务。参数可编辑和导出，但不会生成占位结果。"}
              </span>
            </div>
          )}
          {active.execution === "local-editor" && !openLocal && (
            <div className="ctp-service-note">
              <CanvasIcon name="settings" size={16} />
              <span>
                {active.id === "director-stage"
                  ? "导演台需要独立的 3D 场景和渲染器。本页可整理导出参数，尚未接入预演工作台。"
                  : "此编辑器尚未接入当前工作区。"}
              </span>
            </div>
          )}
          {active.id === "director-stage" && (
            <ul className="ctp-director-features">
              <li>布景与演出模式；对象变换和角色动作</li>
              <li>相机 FOV、注视点、主光与补光</li>
              <li>机位、关键帧、曲线与运镜路径</li>
              <li>分镜或单机位视频导出</li>
            </ul>
          )}
          {!!errors.length && (
            <ul className="ctp-errors" role="alert">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
          {notice && (
            <p className="ctp-notice" role="status">
              {notice}
            </p>
          )}
        </div>
      </div>
      {active.execution === "remote" && (
        <div className="ctp-result-actions">
          <a
            href="https://jimeng.jianying.com/ai-tool/ai-canvas"
            target="_blank"
            rel="noreferrer"
          >
            在原站生成 ↗
          </a>
          <button
            disabled={
              !onImportResults || !compatible.length || importingResults
            }
            onClick={() => onImportResults?.(task)}
          >
            {importingResults ? "读取结果中…" : "导入实际结果"}
          </button>
        </div>
      )}
      <footer className="ctp-footer">
        <button disabled={running} onClick={exportTask}>
          导出参数
        </button>
        {active.execution === "local-editor" ? (
          <button
            className="ctp-primary"
            disabled={
              !openLocal ||
              running ||
              compatible.length < active.minSources ||
              compatible.length > active.maxSources
            }
            onClick={() => openLocal?.()}
          >
            打开{active.title}
          </button>
        ) : running ? (
          <button
            onClick={() => {
              submission.current?.abort();
              setNotice(
                "已取消等待。若任务已经送达服务，是否取消仍以服务状态为准。",
              );
            }}
          >
            取消提交
          </button>
        ) : (
          <button
            className="ctp-primary"
            disabled={!connected}
            onClick={() => void submit()}
          >
            提交任务
          </button>
        )}
      </footer>
    </section>
  );
}

export default CanvasToolsPanel;
