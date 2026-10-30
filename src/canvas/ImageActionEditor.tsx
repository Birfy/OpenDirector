import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";
import { loadLayerImage } from "./layerRenderer";
import {
  CANVAS_TOOLS,
  createCanvasToolTask,
  initialToolParameters,
  type CanvasToolId,
  type CanvasToolTask,
  type ToolParameters,
} from "./toolCatalog";
import type { CanvasNode } from "./model";
import type { LinkedMediaResult } from "./linkedResults";
import {
  clamp,
  containImage,
  expandedSize,
  expansionForAspect,
  paintImageInk,
  readImageInk,
  resizeExpansion,
  writeImageInk,
  type ExpansionHandle,
  type ImageExpansion,
  type ImageInkStroke,
  type ImageInkTool,
  type ImagePoint,
  type ImageSize,
} from "./imageActionGeometry";
import "./image-action-editor.css";

export interface ImageActionEditorProps {
  node: CanvasNode;
  tool: CanvasToolId;
  draft?: CanvasToolTask;
  /** A positioned, screen-space host covering the existing media. It must allow visible overflow. */
  mediaContainer: HTMLElement | null;
  onDraftChange: (task: CanvasToolTask) => void;
  onImportResults: (task: CanvasToolTask) => void;
  onApply: (
    outputs: readonly LinkedMediaResult[],
    task: CanvasToolTask,
  ) => boolean;
  onClose: () => void;
  /** A real adapter must validate/map UI presets to its own model and capability enums. */
  onGenerate?: (task: CanvasToolTask) => void;
  /** Why the connected services cannot run this tool, from the tool catalog. */
  unavailableReason?: string;
}
const IMAGE_ACTIONS: readonly CanvasToolId[] = [
  "smart-edit",
  "annotation",
  "outpaint",
  "image-hd",
  "cutout",
  "inpainting-remove",
  "view-control",
  "lighting",
];
export function isImageActionTool(tool: CanvasToolId): boolean {
  return IMAGE_ACTIONS.includes(tool);
}
const HANDLES: ExpansionHandle[] = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
const HANDLE_NAMES = {
  nw: "左上",
  n: "上",
  ne: "右上",
  e: "右",
  se: "右下",
  s: "下",
  sw: "左下",
  w: "左",
};
const ASPECTS = ["original", "21:9", "16:9", "4:3", "1:1", "3:4", "9:16"];
const CAMERA_VIEWS = [
  ["左上", 315, 30],
  ["上方", 0, 30],
  ["右上", 45, 30],
  ["左侧", 315, 0],
  ["正面", 0, 0],
  ["右侧", 45, 0],
  ["左下", 315, -30],
  ["下方", 0, -30],
  ["右下", 45, -30],
] as const;
const LIGHT_VIEWS = [
  ["左", 270, 0],
  ["顶", 0, 90],
  ["右", 90, 0],
  ["前", 0, 0],
  ["底", 0, -90],
  ["后", 180, 0],
] as const;
const numberValue = (p: ToolParameters, key: string, fallback: number) =>
  typeof p[key] === "number" && Number.isFinite(p[key])
    ? (p[key] as number)
    : fallback;
function context(canvas: HTMLCanvasElement) {
  const result = canvas.getContext("2d");
  if (!result) throw new Error("浏览器无法创建绘图画布。");
  return result;
}
function makeCanvas(size: ImageSize): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = size.width;
  canvas.height = size.height;
  return canvas;
}

/** Dedicated, node-attached post-edit controls. It never creates a second media preview. */
export function ImageActionEditor({
  node,
  tool,
  draft,
  mediaContainer,
  onDraftChange,
  onImportResults,
  onApply,
  onClose,
  onGenerate,
  unavailableReason,
}: ImageActionEditorProps) {
  const definition = CANVAS_TOOLS.find((item) => item.id === tool)!;
  const initialDraft = useRef(
    draft?.tool === tool &&
      draft.sourceNodeIds.length === 1 &&
      draft.sourceNodeIds[0] === node.id
      ? draft
      : undefined,
  );
  const [parameters, setParameters] = useState<ToolParameters>(() => ({
    ...initialToolParameters(definition),
    ...(tool === "view-control" ? { distancePreset: "standard" } : {}),
    ...(tool === "lighting" ? { yaw: 0, pitch: 0, brightnessPercent: 50 } : {}),
    ...(tool === "image-hd"
      ? { kind: "pro", resolution: "4K", detailStrength: 0.5 }
      : {}),
    ...initialDraft.current?.parameters,
    ...(tool === "cutout" ? { selectionMode: "manual" } : {}),
  }));
  const [source, setSource] = useState<HTMLImageElement | null>(null);
  const [baseMask, setBaseMask] = useState<HTMLImageElement | null>(null);
  const [history, setHistory] = useState<{
    past: ImageInkStroke[][];
    current: ImageInkStroke[];
    future: ImageInkStroke[][];
  }>({ past: [], current: [], future: [] });
  const [ink, setInk] = useState<ImageInkStroke | null>(null);
  const inkRef = useRef<ImageInkStroke | null>(null);
  const pointerId = useRef<number | null>(null);
  const [activeInk, setActiveInk] = useState<ImageInkTool>("brush");
  const [brushSize, setBrushSize] = useState(tool === "cutout" ? 32 : 24);
  const [color, setColor] = useState("#a78bfa");
  const [text, setText] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);
  const [host, setHost] = useState<ImageSize>({ width: 0, height: 0 });
  const [lightView, setLightView] = useState<"perspective" | "front">(
    "perspective",
  );
  const canvas = useRef<HTMLCanvasElement>(null);
  const emitDraft = useRef(onDraftChange);
  emitDraft.current = onDraftChange;
  const maskMode = tool === "cutout" || tool === "inpainting-remove";
  const annotation = tool === "smart-edit" || tool === "annotation";
  const localOnly = tool === "annotation";
  const drawing = annotation || maskMode;
  const size = source
    ? { width: source.naturalWidth, height: source.naturalHeight }
    : null;
  const rect =
    size && host.width && host.height ? containImage(size, host) : null;
  const expansion: ImageExpansion = {
    left: numberValue(parameters, "left", 0.25),
    right: numberValue(parameters, "right", 0.25),
    top: numberValue(parameters, "top", 0.25),
    bottom: numberValue(parameters, "bottom", 0.25),
  };
  const yaw = numberValue(parameters, "yaw", 0),
    pitch = numberValue(parameters, "pitch", tool === "lighting" ? 30 : 0);
  const hasMask =
    !!baseMask ||
    history.current.some((stroke) => ["brush", "fill"].includes(stroke.tool));
  const change = (values: ToolParameters) => {
    setParameters((current) => ({ ...current, ...values }));
    setNotice("");
  };
  const record = (stroke: ImageInkStroke) => {
    const strokes = ["clear", "fill"].includes(stroke.tool)
      ? [stroke]
      : [...history.current, stroke];
    if (annotation && size) {
      try {
        writeImageInk(strokes, node.id, size);
      } catch (caught) {
        setNotice(
          caught instanceof Error
            ? caught.message
            : "标记过多，请先应用本地标记。",
        );
        return;
      }
    }
    setHistory({
      past: [...history.past, history.current],
      current: strokes,
      future: [],
    });
  };
  const specialStroke = (kind: "clear" | "fill") =>
    record({ tool: kind, points: [], size: 1, color });

  useEffect(() => {
    let cancelled = false;
    setReady(false);
    if (!node.data.src) {
      setError("来源图片缺失，请重新导入。");
      return;
    }
    void (async () => {
      try {
        const image = await loadLayerImage(node.data.src!);
        if (cancelled) return;
        const imageSize = {
          width: image.naturalWidth,
          height: image.naturalHeight,
        };
        const saved = initialDraft.current;
        const selection = saved?.selection;
        let mask: HTMLImageElement | null = null;
        if (
          maskMode &&
          selection?.maskDataUrl &&
          selection.sourceNodeId === node.id &&
          selection.width === imageSize.width &&
          selection.height === imageSize.height
        ) {
          mask = await loadLayerImage(selection.maskDataUrl);
          if (
            mask.naturalWidth !== imageSize.width ||
            mask.naturalHeight !== imageSize.height
          )
            throw new Error("保存的蒙版尺寸与原图不一致，请重新绘制。");
        }
        if (cancelled) return;
        setSource(image);
        setBaseMask(mask);
        if (annotation)
          setHistory({
            past: [],
            current: readImageInk(
              saved?.parameters.annotationDocument,
              node.id,
              imageSize,
            ),
            future: [],
          });
        if (tool === "outpaint")
          setParameters((current) => {
            const initial = saved
              ? {
                  left: numberValue(current, "left", 0.25),
                  right: numberValue(current, "right", 0.25),
                  top: numberValue(current, "top", 0.25),
                  bottom: numberValue(current, "bottom", 0.25),
                }
              : expansionForAspect(imageSize);
            const output = expandedSize(imageSize, initial);
            return {
              ...current,
              ...initial,
              outputWidth: output.width,
              outputHeight: output.height,
              aspectPreset: current.aspectPreset ?? "original",
            };
          });
        setReady(true);
      } catch (caught) {
        if (!cancelled)
          setError(caught instanceof Error ? caught.message : "图片加载失败。");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [node.id, node.data.src, tool, maskMode, annotation]);

  useLayoutEffect(() => {
    if (!mediaContainer) return;
    const measure = () => {
      const bounds = mediaContainer.getBoundingClientRect();
      setHost((current) =>
        current.width === bounds.width && current.height === bounds.height
          ? current
          : { width: bounds.width, height: bounds.height },
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(mediaContainer);
    return () => observer.disconnect();
  }, [mediaContainer]);

  const paintLayer = (
    target: HTMLCanvasElement,
    strokes: readonly ImageInkStroke[],
    preview = false,
  ) => {
    if (!size) return;
    const scale = preview
      ? Math.min(1, 2048 / Math.max(size.width, size.height))
      : 1;
    target.width = Math.round(size.width * scale);
    target.height = Math.round(size.height * scale);
    const ctx = context(target);
    ctx.scale(target.width / size.width, target.height / size.height);
    if (maskMode && baseMask)
      ctx.drawImage(baseMask, 0, 0, size.width, size.height);
    paintImageInk(ctx, strokes, size, maskMode);
    if (preview && maskMode) {
      ctx.globalCompositeOperation = "source-in";
      ctx.fillStyle = "rgba(137, 110, 255, .62)";
      ctx.fillRect(0, 0, size.width, size.height);
    }
  };
  useEffect(() => {
    if (canvas.current && source)
      paintLayer(
        canvas.current,
        ink ? [...history.current, ink] : history.current,
        true,
      );
  }, [
    source,
    baseMask,
    history.current,
    ink,
    mediaContainer,
    host.width,
    host.height,
  ]);

  const makeTask = (): CanvasToolTask => {
    let values = { ...parameters };
    if (!size) return createCanvasToolTask(tool, [node.id], values);
    if (annotation)
      values.annotationDocument = writeImageInk(history.current, node.id, size);
    if (tool === "outpaint") {
      const output = expandedSize(size, expansion);
      values = {
        ...values,
        outputWidth: output.width,
        outputHeight: output.height,
      };
    }
    const selection = {
      sourceNodeId: node.id,
      ...size,
      ...(maskMode && hasMask
        ? (() => {
            const mask = makeCanvas(size);
            paintLayer(mask, history.current);
            return { maskDataUrl: mask.toDataURL("image/png") };
          })()
        : {}),
    };
    return createCanvasToolTask(tool, [node.id], values, selection);
  };
  const taskBuilder = useRef(makeTask);
  taskBuilder.current = makeTask;
  const readyRef = useRef(ready);
  readyRef.current = ready;
  useEffect(
    () => () => {
      // Switching selection also unmounts the editor, before its debounce may fire.
      // Only completed strokes belong to the persisted draft; an active stroke is cancelled.
      if (!readyRef.current) return;
      try {
        emitDraft.current(taskBuilder.current());
      } catch {
        /* Retain the previous persisted draft if raster encoding failed. */
      }
    },
    [],
  );
  // Parameter and stroke edits persist as one source-owned draft; live pointer moves stay local.
  useEffect(() => {
    if (!ready) return;
    const timer = window.setTimeout(() => {
      try {
        emitDraft.current(taskBuilder.current());
      } catch (caught) {
        setError(
          caught instanceof Error ? caught.message : "无法保存编辑设置。",
        );
      }
    }, 250);
    return () => window.clearTimeout(timer);
  }, [parameters, history.current, baseMask, ready]);
  const withTask = (run: (task: CanvasToolTask) => void) => {
    try {
      const task = makeTask();
      onDraftChange(task);
      run(task);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "无法保存编辑设置。");
    }
  };
  const close = () => {
    if (ready) withTask(() => onClose());
    else onClose();
  };
  const undo = () =>
    setHistory((state) =>
      state.past.length
        ? {
            past: state.past.slice(0, -1),
            current: state.past.at(-1)!,
            future: [state.current, ...state.future],
          }
        : state,
    );
  const redo = () =>
    setHistory((state) =>
      state.future.length
        ? {
            past: [...state.past, state.current],
            current: state.future[0]!,
            future: state.future.slice(1),
          }
        : state,
    );

  const pointerPoint = (
    event: ReactPointerEvent<HTMLCanvasElement>,
  ): ImagePoint => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return {
      x:
        Math.round(
          10 *
            clamp(
              ((event.clientX - bounds.left) / bounds.width) * size!.width,
              0,
              size!.width,
            ),
        ) / 10,
      y:
        Math.round(
          10 *
            clamp(
              ((event.clientY - bounds.top) / bounds.height) * size!.height,
              0,
              size!.height,
            ),
        ) / 10,
    };
  };
  const startInk = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (!ready || !size || event.button !== 0 || pointerId.current !== null)
      return;
    event.preventDefault();
    event.stopPropagation();
    const point = pointerPoint(event);
    if (activeInk === "text") {
      if (!text.trim()) {
        setNotice("先填写标记文字，再点击图片放置。");
        return;
      }
      record({ tool: "text", points: [point], size: brushSize, color, text });
      return;
    }
    pointerId.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    const next = { tool: activeInk, points: [point], size: brushSize, color };
    inkRef.current = next;
    setInk(next);
  };
  const moveInk = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (pointerId.current !== event.pointerId || !inkRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    const point = pointerPoint(event),
      current = inkRef.current;
    const last = current.points.at(-1)!;
    if (point.x === last.x && point.y === last.y) return;
    const next = {
      ...current,
      points:
        current.tool === "arrow"
          ? [current.points[0]!, point]
          : [...current.points, point],
    };
    inkRef.current = next;
    setInk(next);
  };
  const finishInk = (
    event: ReactPointerEvent<HTMLCanvasElement>,
    commit: boolean,
  ) => {
    if (pointerId.current !== event.pointerId) return;
    event.stopPropagation();
    if (commit && inkRef.current) record(inkRef.current);
    pointerId.current = null;
    inkRef.current = null;
    setInk(null);
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const applyLocal = () => {
    if (!source || !size || (maskMode && !hasMask)) return;
    try {
      const overlay = makeCanvas(size);
      paintLayer(overlay, history.current);
      const output = makeCanvas(size),
        ctx = context(output);
      ctx.drawImage(source, 0, 0);
      if (maskMode)
        ctx.globalCompositeOperation =
          tool === "cutout" ? "destination-in" : "destination-out";
      ctx.drawImage(overlay, 0, 0);
      const suffix =
        tool === "cutout"
          ? "手工抠图"
          : tool === "inpainting-remove"
            ? "透明擦除"
            : "本地标记";
      if (
        onApply(
          [
            {
              kind: "image",
              src: output.toDataURL("image/png"),
              mimeType: "image/png",
              title: `${node.data.title} · ${suffix}`,
              media: size,
            },
          ],
          makeTask(),
        )
      ) {
        // The confirmed result and latest draft were committed in the same undo step.
        readyRef.current = false;
        setNotice(`已应用${suffix}结果。`);
        onClose();
      } else setError("结果未能添加到画布，请重试。");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "无法导出本地图片。");
    }
  };
  const exportMask = () => {
    if (!size || !hasMask) return;
    try {
      const mask = makeCanvas(size);
      paintLayer(mask, history.current);
      const anchor = document.createElement("a");
      anchor.href = mask.toDataURL("image/png");
      anchor.download = `${tool}-mask.png`;
      anchor.click();
      setNotice("已导出原图尺寸的透明背景白色蒙版。");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "蒙版导出失败。");
    }
  };

  const expansionDrag = useRef<{
    id: number;
    start: ImagePoint;
    expansion: ImageExpansion;
    preview: ImageSize;
    handle: ExpansionHandle;
  } | null>(null);
  const setExpansion = (next: ImageExpansion, preset = "custom") => {
    if (!size) return;
    const output = expandedSize(size, next);
    change({
      ...next,
      outputWidth: output.width,
      outputHeight: output.height,
      aspectPreset: preset,
    });
  };
  const angleChange = (nextYaw: number, nextPitch: number) =>
    change({
      yaw: ((nextYaw % 360) + 360) % 360,
      pitch: clamp(
        nextPitch,
        tool === "lighting" ? -90 : -30,
        tool === "lighting" ? 90 : 60,
      ),
    });
  const directionButtons = (
    <div className="iae-direction" aria-label="方向微调">
      {[
        ["向左 5°", "←", -5, 0],
        ["向上 5°", "↑", 0, 5],
        ["向下 5°", "↓", 0, -5],
        ["向右 5°", "→", 5, 0],
      ].map(([label, glyph, x, y]) => (
        <TooltipButton
          key={String(label)}
          label={String(label)}
          onClick={() => angleChange(yaw + Number(x), pitch + Number(y))}
        >
          {glyph}
        </TooltipButton>
      ))}
    </div>
  );
  const angleSliders = (
    <>
      <label className="iae-range">
        水平角{" "}
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          value={yaw}
          onChange={(e) => angleChange(Number(e.target.value), pitch)}
        />
        <output>{yaw}°</output>
      </label>
      <div className="iae-ticks">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((value) => (
          <button
            type="button"
            key={value}
            aria-label={`水平角 ${value}°`}
            onClick={() => angleChange(value, pitch)}
          >
            {value}°
          </button>
        ))}
      </div>
      <label className="iae-range">
        垂直角{" "}
        <input
          type="range"
          min={tool === "lighting" ? -90 : -30}
          max={tool === "lighting" ? 90 : 60}
          step={1}
          value={pitch}
          onChange={(e) => angleChange(yaw, Number(e.target.value))}
        />
        <output>{pitch}°</output>
      </label>
      <div className="iae-ticks">
        {(tool === "lighting" ? [-90, -45, 0, 45, 90] : [-30, 0, 30, 60]).map(
          (value) => (
            <button
              type="button"
              key={value}
              aria-label={`垂直角 ${value}°`}
              onClick={() => angleChange(yaw, value)}
            >
              {value}°
            </button>
          ),
        )}
      </div>
    </>
  );
  const overlay =
    mediaContainer && rect && ready
      ? createPortal(
          <div
            className="iae-media-overlay nodrag nopan"
            onPointerDown={(event) => event.stopPropagation()}
            onWheel={(event) => event.stopPropagation()}
            onKeyDown={(event) => {
              event.stopPropagation();
              if (event.key === "Escape") {
                event.preventDefault();
                close();
              }
            }}
          >
            {drawing && (
              <canvas
                ref={canvas}
                className={`iae-ink ${maskMode ? "iae-ink-mask" : ""}`}
                aria-label={
                  maskMode ? "在原图上涂抹选区蒙版" : "在原图上绘制标记"
                }
                style={{
                  left: rect.x,
                  top: rect.y,
                  width: rect.width,
                  height: rect.height,
                }}
                onPointerDown={startInk}
                onPointerMove={moveInk}
                onPointerUp={(event) => finishInk(event, true)}
                onPointerCancel={(event) => finishInk(event, false)}
                onLostPointerCapture={(event) => finishInk(event, false)}
              />
            )}
            {tool === "outpaint" && (
              <div
                className="iae-expansion"
                style={{
                  left: rect.x - rect.width * expansion.left,
                  top: rect.y - rect.height * expansion.top,
                  width: rect.width * (1 + expansion.left + expansion.right),
                  height: rect.height * (1 + expansion.top + expansion.bottom),
                }}
              >
                <div className="iae-expansion-label">
                  {size && expandedSize(size, expansion).width} ×{" "}
                  {size && expandedSize(size, expansion).height}
                </div>
                {HANDLES.map((handle) => (
                  <button
                    key={handle}
                    type="button"
                    className={`iae-handle iae-handle-${handle}`}
                    aria-label={`调整扩图${HANDLE_NAMES[handle]}边界`}
                    title="拖动调整；方向键每次调整原图的 1%"
                    onPointerDown={(event) => {
                      if (event.button !== 0 || expansionDrag.current) return;
                      event.preventDefault();
                      event.stopPropagation();
                      event.currentTarget.setPointerCapture(event.pointerId);
                      expansionDrag.current = {
                        id: event.pointerId,
                        start: { x: event.clientX, y: event.clientY },
                        expansion,
                        preview: rect,
                        handle,
                      };
                    }}
                    onPointerMove={(event) => {
                      const drag = expansionDrag.current;
                      if (!drag || drag.id !== event.pointerId) return;
                      event.stopPropagation();
                      setExpansion(
                        resizeExpansion(
                          drag.expansion,
                          drag.handle,
                          event.clientX - drag.start.x,
                          event.clientY - drag.start.y,
                          drag.preview,
                        ),
                      );
                    }}
                    onPointerUp={(event) => {
                      if (expansionDrag.current?.id === event.pointerId) {
                        expansionDrag.current = null;
                        event.currentTarget.releasePointerCapture(
                          event.pointerId,
                        );
                      }
                    }}
                    onPointerCancel={() => {
                      if (expansionDrag.current)
                        setExpansion(expansionDrag.current.expansion);
                      expansionDrag.current = null;
                    }}
                    onLostPointerCapture={() => {
                      expansionDrag.current = null;
                    }}
                    onKeyDown={(event) => {
                      if (
                        ![
                          "ArrowLeft",
                          "ArrowRight",
                          "ArrowUp",
                          "ArrowDown",
                        ].includes(event.key)
                      )
                        return;
                      event.preventDefault();
                      event.stopPropagation();
                      const step = event.shiftKey ? 0.1 : 0.01;
                      setExpansion(
                        resizeExpansion(
                          expansion,
                          handle,
                          (event.key === "ArrowLeft"
                            ? -step
                            : event.key === "ArrowRight"
                              ? step
                              : 0) * rect.width,
                          (event.key === "ArrowUp"
                            ? -step
                            : event.key === "ArrowDown"
                              ? step
                              : 0) * rect.height,
                          rect,
                        ),
                      );
                    }}
                  />
                ))}
              </div>
            )}
          </div>,
          mediaContainer,
        )
      : null;

  if (!isImageActionTool(tool)) return null;
  return (
    <>
      {overlay}
      <section
        className={`image-action-editor iae-${tool} nodrag nopan nowheel`}
        aria-label={`${definition.title}编辑器`}
        onPointerDown={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          event.stopPropagation();
          if (event.key === "Escape") {
            event.preventDefault();
            close();
          }
        }}
      >
        <header className="iae-header">
          <strong>{definition.title}</strong>
          <span>{maskMode ? "手工选区" : ""}</span>
          <TooltipButton label="关闭编辑" onClick={close}>
            <CanvasIcon name="close" size={16} />
          </TooltipButton>
        </header>
        {drawing && (
          <>
            <div
              className="iae-brush-tools"
              role="toolbar"
              aria-label={maskMode ? "蒙版绘图工具" : "改图标记工具"}
            >
              {[
                ...[
                  {
                    tool: "brush",
                    label: maskMode ? "选择画笔" : "画笔",
                    icon: "pencil",
                  },
                  { tool: "erase", label: "橡皮", icon: "minus" },
                ],
                ...(!maskMode
                  ? [
                      { tool: "arrow", label: "箭头", icon: "arrowRight" },
                      { tool: "text", label: "文字", icon: "text" },
                    ]
                  : []),
              ].map((item) => (
                <TooltipButton
                  key={item.tool}
                  label={item.label}
                  aria-pressed={activeInk === item.tool}
                  onClick={() => setActiveInk(item.tool as ImageInkTool)}
                >
                  <CanvasIcon name={item.icon} size={16} />
                  <span>{item.label}</span>
                </TooltipButton>
              ))}
              <span className="iae-separator" />
              <TooltipButton
                label="撤销标记"
                disabled={!history.past.length}
                onClick={undo}
              >
                <CanvasIcon name="undo" size={16} />
              </TooltipButton>
              <TooltipButton
                label="重做标记"
                disabled={!history.future.length}
                onClick={redo}
              >
                <CanvasIcon name="redo" size={16} />
              </TooltipButton>
              {maskMode && (
                <button type="button" onClick={() => specialStroke("fill")}>
                  全选
                </button>
              )}
              <TooltipButton
                label="清除所有标记"
                onClick={() => specialStroke("clear")}
              >
                <CanvasIcon name="trash" size={16} />
              </TooltipButton>
            </div>
            <div className="iae-row">
              <label className="iae-range">
                {activeInk === "text" ? "字号" : "笔刷"}
                <input
                  aria-label="笔刷或文字像素尺寸"
                  type="range"
                  min={1}
                  max={160}
                  value={brushSize}
                  onChange={(event) => setBrushSize(Number(event.target.value))}
                />
                <output>{brushSize}px</output>
              </label>
              {!maskMode && (
                <label className="iae-color">
                  颜色
                  <input
                    type="color"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                  />
                </label>
              )}
            </div>
            {activeInk === "text" && (
              <div className="iae-row">
                <input
                  className="iae-text"
                  aria-label="标记文字"
                  placeholder="输入文字，再点击图片放置"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
                <button
                  type="button"
                  disabled={!size || !text.trim()}
                  onClick={() =>
                    size &&
                    record({
                      tool: "text",
                      points: [{ x: size.width / 2, y: size.height / 2 }],
                      size: brushSize,
                      color,
                      text,
                    })
                  }
                >
                  居中放置
                </button>
              </div>
            )}
            {maskMode && (
              <p className="iae-hint">
                {tool === "cutout"
                  ? onGenerate
                    ? "直接点“生成”由模型识别主体；先涂抹主体所在区域可限定范围，或涂抹后“应用手工抠图”。"
                    : "涂抹需要保留的区域；橡皮移除选区。自动识别需要接入具备主体抠图能力的模型。"
                  : "涂抹需要消除的区域；内容填补需要 AI 服务。"}
              </p>
            )}
          </>
        )}
        {(tool === "smart-edit" || tool === "outpaint") && (
          <label className="iae-prompt">
            <span>提示词</span>
            <textarea
              rows={2}
              placeholder={
                tool === "outpaint"
                  ? "描述扩展区域的内容（选填）"
                  : "描述希望怎样修改这张图片"
              }
              value={String(parameters.prompt ?? "")}
              onChange={(event) => change({ prompt: event.target.value })}
            />
          </label>
        )}
        {tool === "outpaint" && (
          <div className="iae-row iae-wrap">
            <label>
              画幅{" "}
              <select
                aria-label="扩图画幅"
                value={String(parameters.aspectPreset ?? "original")}
                onChange={(event) => {
                  if (!size) return;
                  const value = event.target.value,
                    [w, h] = value.split(":").map(Number);
                  setExpansion(
                    expansionForAspect(
                      size,
                      value === "original" ? undefined : w! / h!,
                    ),
                    value,
                  );
                }}
              >
                <option value="custom" disabled>
                  自由调整
                </option>
                {ASPECTS.map((aspect) => (
                  <option key={aspect} value={aspect}>
                    {aspect === "original" ? "原比例" : aspect}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              disabled={!size}
              onClick={() =>
                size && setExpansion(expansionForAspect(size), "original")
              }
            >
              重置为 1.5×
            </button>
            <span className="iae-hint">拖动图片外框的 8 个手柄调整范围</span>
          </div>
        )}
        {tool === "image-hd" && (
          <div className="iae-row iae-wrap">
            <div className="iae-segment" aria-label="超清模式">
              {[
                ["normal", "超清"],
                ["pro", "智能超清"],
              ].map(([value, label]) => (
                <button
                  type="button"
                  key={value}
                  aria-pressed={parameters.kind === value}
                  onClick={() => change({ kind: value! })}
                >
                  {label}
                </button>
              ))}
            </div>
            {parameters.kind === "pro" && (
              <>
                <label>
                  分辨率{" "}
                  <select
                    aria-label="超清分辨率"
                    value={String(parameters.resolution ?? "4K")}
                    onChange={(event) =>
                      change({ resolution: event.target.value })
                    }
                  >
                    {["2K", "4K", "8K"].map((resolution) => (
                      <option key={resolution}>{resolution}</option>
                    ))}
                  </select>
                </label>
                <label className="iae-range">
                  细节{" "}
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={Math.round(
                      numberValue(parameters, "detailStrength", 0.5) * 100,
                    )}
                    onChange={(event) =>
                      change({
                        detailStrength: Number(event.target.value) / 100,
                        resolution: parameters.resolution ?? "4K",
                      })
                    }
                  />
                  <output>
                    {Math.round(
                      numberValue(parameters, "detailStrength", 0.5) * 100,
                    )}
                  </output>
                </label>
              </>
            )}
          </div>
        )}
        {tool === "view-control" && (
          <div className="iae-angle-layout">
            <div>
              <div className="iae-camera-grid" aria-label="摄像机方位">
                {CAMERA_VIEWS.map(([label, x, y]) => (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={yaw === x && pitch === y}
                    onClick={() => angleChange(x, y)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {directionButtons}
            </div>
            <div className="iae-angle-fields">
              {angleSliders}
              <div className="iae-row">
                <span>景别</span>
                <div className="iae-segment">
                  {[
                    ["near", "近"],
                    ["standard", "标准"],
                    ["far", "远"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={
                        (parameters.distancePreset ?? "standard") === value
                      }
                      onClick={() => change({ distancePreset: value! })}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    change({ yaw: 0, pitch: 0, distancePreset: "standard" })
                  }
                >
                  重置参数
                </button>
              </div>
            </div>
          </div>
        )}
        {tool === "lighting" && (
          <>
            <div className="iae-angle-layout">
              <div>
                <div
                  className="iae-light-sphere"
                  aria-label={`光位示意：水平 ${yaw} 度，垂直 ${pitch} 度`}
                  style={
                    {
                      "--light-color": String(
                        parameters.lightColor ?? "#ffffff",
                      ),
                    } as CSSProperties
                  }
                >
                  <div className={`iae-sphere-grid iae-sphere-${lightView}`} />
                  <i
                    style={{
                      left: `${50 + Math.sin((yaw * Math.PI) / 180) * Math.cos((pitch * Math.PI) / 180) * 42}%`,
                      top: `${50 - Math.sin((pitch * Math.PI) / 180) * 42}%`,
                    }}
                  />
                </div>
                <div className="iae-segment">
                  <button
                    type="button"
                    aria-pressed={lightView === "perspective"}
                    onClick={() => setLightView("perspective")}
                  >
                    透视
                  </button>
                  <button
                    type="button"
                    aria-pressed={lightView === "front"}
                    onClick={() => setLightView("front")}
                  >
                    正面
                  </button>
                </div>
                {directionButtons}
              </div>
              <div className="iae-angle-fields">
                {angleSliders}
                <div className="iae-light-views" aria-label="光源方位">
                  {LIGHT_VIEWS.map(([label, x, y]) => (
                    <button
                      type="button"
                      key={label}
                      aria-pressed={yaw === x && pitch === y}
                      onClick={() => angleChange(x, y)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="iae-row iae-wrap">
              <label className="iae-color">
                光色{" "}
                <input
                  type="color"
                  value={String(parameters.lightColor ?? "#ffffff")}
                  onChange={(event) =>
                    change({ lightColor: event.target.value.toLowerCase() })
                  }
                />
                <input
                  className="iae-hex"
                  aria-label="光色 HEX"
                  value={String(parameters.lightColor ?? "#ffffff")}
                  maxLength={7}
                  onChange={(event) =>
                    change({ lightColor: event.target.value.toLowerCase() })
                  }
                />
              </label>
              <div className="iae-segment" aria-label="光质">
                {[
                  ["soft", "柔光"],
                  ["hard", "硬光"],
                ].map(([value, label]) => (
                  <button
                    type="button"
                    key={value}
                    aria-pressed={parameters.texture === value}
                    onClick={() => change({ texture: value! })}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <label className="iae-range">
                亮度{" "}
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={numberValue(parameters, "brightnessPercent", 50)}
                  onChange={(event) =>
                    change({ brightnessPercent: Number(event.target.value) })
                  }
                />
                <output>
                  {numberValue(parameters, "brightnessPercent", 50)}%
                </output>
              </label>
            </div>
            <div className="iae-row iae-wrap">
              <button
                type="button"
                onClick={() => {
                  change({
                    yaw: 0,
                    pitch: 0,
                    brightnessPercent: 50,
                    texture: "soft",
                    lightColor: "#ffffff",
                  });
                  setLightView("perspective");
                }}
              >
                重置打光
              </button>
              <p className="iae-hint">光位图仅为参数示意；不会修改原图光照。</p>
            </div>
          </>
        )}
        {error && (
          <p className="iae-error" role="alert">
            {error}
          </p>
        )}
        {notice && (
          <p className="iae-hint" role="status">
            {notice}
          </p>
        )}
        <footer className="iae-footer">
          <span className="iae-service-note">
            {!ready && !error
              ? "正在读取原图…"
              : localOnly
                ? "本地标注，保留原图"
                : onGenerate
                  ? "由已连接服务处理"
                  : (unavailableReason ?? "尚未连接此功能的 AI 服务")}
          </span>
          <div className="iae-actions">
            {drawing && (
              <button
                type="button"
                disabled={!ready || (maskMode && !hasMask)}
                onClick={applyLocal}
              >
                {tool === "cutout"
                  ? "应用手工抠图"
                  : tool === "inpainting-remove"
                    ? "本地擦为透明"
                    : localOnly
                      ? "确认标注"
                      : "应用本地标记"}
              </button>
            )}
            {maskMode && (
              <button
                type="button"
                disabled={!ready || !hasMask}
                onClick={exportMask}
              >
                导出蒙版
              </button>
            )}
            <button
              type="button"
              disabled={!ready}
              onClick={() =>
                withTask(() => setNotice("设置已保存到当前图片节点。"))
              }
            >
              保存设置
            </button>
            {!localOnly && (
              <button
                type="button"
                disabled={!ready}
                onClick={() => withTask(onImportResults)}
              >
                导入结果
              </button>
            )}
            {!localOnly && (
              <button
                type="button"
                className="iae-generate"
                disabled={
                  !ready ||
                  !onGenerate ||
                  // Automatic cutout needs no selection; a stroke only narrows it.
                  (maskMode && !hasMask && tool !== "cutout") ||
                  (tool === "lighting" &&
                    !/^#[\da-f]{6}$/.test(String(parameters.lightColor)))
                }
                onClick={() => onGenerate && withTask(onGenerate)}
                title={
                  !onGenerate ? "连接真实服务后可生成" : "提交当前编辑任务"
                }
              >
                <CanvasIcon name="sparkle" size={15} />
                生成
              </button>
            )}
          </div>
        </footer>
      </section>
    </>
  );
}
