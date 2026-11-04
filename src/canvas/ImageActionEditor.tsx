import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import { useI18n, type Translate } from "../i18n/I18nProvider.tsx";
import type { MessageKey } from "../i18n/types.ts";
import { defaultTranslate } from "./assistantTranslate.ts";
import { translateTool } from "./toolText.ts";
import { useImageMask, type PreviewSelection } from "./useImageMask";
import { SelectionToolbarMenu } from "./SelectionToolbarMenu";
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
  ) => boolean | Promise<boolean>;
  onClose: () => void;
  /** A real adapter must validate/map UI presets to its own model and capability enums. */
  onGenerate?: (task: CanvasToolTask) => void;
  /** Why the connected services cannot run this tool, from the tool catalog. */
  unavailableReason?: string;
  onPreviewSelection?: PreviewSelection;
  selectionUnavailableReason?: string;
  models?: readonly { id: string; label: string }[];
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
const HANDLE_NAMES: Record<ExpansionHandle, MessageKey> = {
  nw: "tools.imageEditor.expand.handle.nw",
  n: "tools.imageEditor.expand.handle.n",
  ne: "tools.imageEditor.expand.handle.ne",
  e: "tools.imageEditor.expand.handle.e",
  se: "tools.imageEditor.expand.handle.se",
  s: "tools.imageEditor.expand.handle.s",
  sw: "tools.imageEditor.expand.handle.sw",
  w: "tools.imageEditor.expand.handle.w",
};
const ASPECTS = ["original", "21:9", "16:9", "4:3", "1:1", "3:4", "9:16"];
const CAMERA_VIEWS = [
  ["tools.imageEditor.camera.nw", 315, 30],
  ["tools.imageEditor.camera.n", 0, 30],
  ["tools.imageEditor.camera.ne", 45, 30],
  ["tools.imageEditor.camera.w", 315, 0],
  ["tools.imageEditor.camera.center", 0, 0],
  ["tools.imageEditor.camera.e", 45, 0],
  ["tools.imageEditor.camera.sw", 315, -30],
  ["tools.imageEditor.camera.s", 0, -30],
  ["tools.imageEditor.camera.se", 45, -30],
] as const;
const LIGHT_VIEWS = [
  ["tools.imageEditor.light.w", 270, 0],
  ["tools.imageEditor.light.top", 0, 90],
  ["tools.imageEditor.light.e", 90, 0],
  ["tools.imageEditor.light.front", 0, 0],
  ["tools.imageEditor.light.bottom", 0, -90],
  ["tools.imageEditor.light.back", 180, 0],
] as const;
const numberValue = (p: ToolParameters, key: string, fallback: number) =>
  typeof p[key] === "number" && Number.isFinite(p[key])
    ? (p[key] as number)
    : fallback;
function context(canvas: HTMLCanvasElement, t: Translate = defaultTranslate) {
  const result = canvas.getContext("2d");
  if (!result) throw new Error(t("tools.imageEditor.error.noCanvas"));
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
  onPreviewSelection,
  selectionUnavailableReason,
  models = [],
}: ImageActionEditorProps) {
  const { t, locale } = useI18n();
  const definition = translateTool(
    locale,
    CANVAS_TOOLS.find((item) => item.id === tool)!,
  );
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
  const [editMode, setEditMode] = useState<"annotation" | "selection">(
    "annotation",
  );
  const [selectionTool, setSelectionTool] = useState<"paint" | "quick" | "box">(
    "paint",
  );
  const [selectionPrompt, setSelectionPrompt] = useState("");
  const [showSelectionPrompt, setShowSelectionPrompt] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null);
  const [boxDrag, setBoxDrag] = useState<{
    start: ImagePoint;
    end: ImagePoint;
  } | null>(null);
  const boxRef = useRef<{ start: ImagePoint; end: ImagePoint } | null>(null);
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
  const maskMode =
    tool === "cutout" ||
    tool === "inpainting-remove" ||
    (tool === "smart-edit" && editMode === "selection");
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
  const selection = useImageMask({
    size,
    initialMask: baseMask,
    ready,
    preview: onPreviewSelection,
    autoSelect: tool === "cutout",
  });
  const hasMask = selection.hasMask;
  const modelMissing =
    Boolean(parameters.imageModelConfigId) &&
    !models.some((model) => model.id === parameters.imageModelConfigId);
  const change = (values: ToolParameters) => {
    setParameters((current) => ({ ...current, ...values }));
    setNotice("");
  };
  const record = (stroke: ImageInkStroke) => {
    if (maskMode) {
      selection.record(stroke);
      return;
    }
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
            : t("tools.imageEditor.error.tooManyMarks"),
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
      setError(t("tools.imageEditor.error.noSource"));
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
          (tool === "cutout" ||
            tool === "inpainting-remove" ||
            tool === "smart-edit") &&
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
            throw new Error(t("tools.imageEditor.error.maskMismatch"));
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
          setError(
            caught instanceof Error
              ? caught.message
              : t("tools.imageEditor.error.loadFailed"),
          );
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [node.id, node.data.src, tool]);

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
    const ctx = context(target, t);
    ctx.scale(target.width / size.width, target.height / size.height);
    if (maskMode) {
      if (selection.mask) ctx.drawImage(selection.mask, 0, 0);
      if (preview && ink) paintImageInk(ctx, [ink], size, true);
    } else paintImageInk(ctx, strokes, size);
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
    selection.mask,
    maskMode,
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
    const taskSelection = {
      sourceNodeId: node.id,
      ...size,
      ...((hasMask || (tool === "cutout" && selection.edited)) && selection.mask
        ? { maskDataUrl: selection.mask.toDataURL("image/png") }
        : {}),
    };
    return createCanvasToolTask(tool, [node.id], values, taskSelection);
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
          caught instanceof Error
            ? caught.message
            : t("tools.imageEditor.error.saveFailed"),
        );
      }
    }, 250);
    return () => window.clearTimeout(timer);
  }, [parameters, history.current, selection.mask, ready]);
  const withTask = (run: (task: CanvasToolTask) => void) => {
    try {
      const task = makeTask();
      onDraftChange(task);
      run(task);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : t("tools.imageEditor.error.saveFailed"),
      );
    }
  };
  const close = () => {
    if (publishing) return;
    if (ready) withTask(() => onClose());
    else onClose();
  };
  const undoAnnotation = () =>
    setHistory((state) =>
      state.past.length
        ? {
            past: state.past.slice(0, -1),
            current: state.past.at(-1)!,
            future: [state.current, ...state.future],
          }
        : state,
    );
  const redoAnnotation = () =>
    setHistory((state) =>
      state.future.length
        ? {
            past: [...state.past, state.current],
            current: state.future[0]!,
            future: state.future.slice(1),
          }
        : state,
    );

  const undo = maskMode ? selection.undo : undoAnnotation;
  const redo = maskMode ? selection.redo : redoAnnotation;
  const canUndo = maskMode ? selection.canUndo : history.past.length > 0;
  const canRedo = maskMode ? selection.canRedo : history.future.length > 0;
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
    event.currentTarget.focus({ preventScroll: true });
    if (maskMode) selection.cancel();
    const point = pointerPoint(event);
    if (maskMode && selectionTool === "quick") {
      selection.toggleAt(point);
      return;
    }
    if (maskMode && selectionTool === "box") {
      selection.cancel();
      pointerId.current = event.pointerId;
      event.currentTarget.setPointerCapture(event.pointerId);
      boxRef.current = { start: point, end: point };
      setBoxDrag(boxRef.current);
      return;
    }
    if (activeInk === "text") {
      if (!text.trim()) {
        setNotice(t("tools.imageEditor.notice.needText"));
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
    if (pointerId.current !== event.pointerId) return;
    if (boxRef.current) {
      event.preventDefault();
      event.stopPropagation();
      boxRef.current = { ...boxRef.current, end: pointerPoint(event) };
      setBoxDrag(boxRef.current);
      return;
    }
    if (!inkRef.current) return;
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
    if (commit && boxRef.current) {
      const { start, end } = boxRef.current;
      const width = Math.abs(end.x - start.x),
        height = Math.abs(end.y - start.y);
      if (width >= 2 && height >= 2)
        void selection.recognize({
          boxes: [
            {
              x: Math.min(start.x, end.x),
              y: Math.min(start.y, end.y),
              width,
              height,
            },
          ],
        });
    }
    boxRef.current = null;
    setBoxDrag(null);
    if (commit && inkRef.current) record(inkRef.current);
    pointerId.current = null;
    inkRef.current = null;
    setInk(null);
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const [publishing, setPublishing] = useState(false);
  const applyLocal = async () => {
    if (publishing || !source || !size || (maskMode && !hasMask)) return;
    setPublishing(true);
    try {
      const overlay = makeCanvas(size);
      paintLayer(overlay, history.current);
      const output = makeCanvas(size),
        ctx = context(output, t);
      ctx.drawImage(source, 0, 0);
      if (maskMode)
        ctx.globalCompositeOperation =
          tool === "cutout" ? "destination-in" : "destination-out";
      ctx.drawImage(overlay, 0, 0);
      const suffix =
        tool === "cutout"
          ? t("tools.imageEditor.output.cutout")
          : tool === "inpainting-remove"
            ? t("tools.imageEditor.output.erase")
            : t("tools.imageEditor.output.mark");
      if (
        await onApply(
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
        setNotice(t("tools.imageEditor.notice.applied", { kind: suffix }));
        onClose();
      } else setError(t("tools.imageEditor.error.applyFailed"));
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : t("tools.imageEditor.error.exportFailed"),
      );
    } finally {
      setPublishing(false);
    }
  };
  const exportMask = () => {
    if (!size || !hasMask) return;
    try {
      const mask = selection.mask!;
      const anchor = document.createElement("a");
      anchor.href = mask.toDataURL("image/png");
      anchor.download = `${tool}-mask.png`;
      anchor.click();
      setNotice(t("tools.imageEditor.notice.maskExported"));
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : t("tools.imageEditor.error.maskExportFailed"),
      );
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
    <div
      className="iae-direction"
      aria-label={t("tools.imageEditor.direction.aria")}
    >
      {(
        [
          ["tools.imageEditor.direction.left", "←", -5, 0],
          ["tools.imageEditor.direction.up", "↑", 0, 5],
          ["tools.imageEditor.direction.down", "↓", 0, -5],
          ["tools.imageEditor.direction.right", "→", 5, 0],
        ] as const
      ).map(([label, glyph, x, y]) => (
        <TooltipButton
          key={label}
          label={t(label)}
          onClick={() => angleChange(yaw + x, pitch + y)}
        >
          {glyph}
        </TooltipButton>
      ))}
    </div>
  );
  const angleSliders = (
    <>
      <label className="iae-range">
        {t("tools.imageEditor.angle.horizontal")}{" "}
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
            aria-label={t("tools.imageEditor.angle.horizontalAria", { value })}
            onClick={() => angleChange(value, pitch)}
          >
            {value}°
          </button>
        ))}
      </div>
      <label className="iae-range">
        {t("tools.imageEditor.angle.vertical")}{" "}
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
              aria-label={t("tools.imageEditor.angle.verticalAria", { value })}
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
              if (
                (event.metaKey || event.ctrlKey) &&
                event.key.toLowerCase() === "z"
              ) {
                event.preventDefault();
                if (event.shiftKey) redo();
                else undo();
              }
              if (event.key === "Escape") {
                event.preventDefault();
                close();
              }
            }}
          >
            {drawing && (
              <canvas
                ref={canvas}
                tabIndex={0}
                className={`iae-ink ${maskMode ? "iae-ink-mask" : ""}`}
                aria-label={
                  maskMode
                    ? t("tools.imageEditor.ink.ariaMask")
                    : t("tools.imageEditor.ink.ariaMark")
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
            {boxDrag && rect && size && (
              <div
                className="iae-selection-box"
                style={{
                  left:
                    rect.x +
                    (Math.min(boxDrag.start.x, boxDrag.end.x) / size.width) *
                      rect.width,
                  top:
                    rect.y +
                    (Math.min(boxDrag.start.y, boxDrag.end.y) / size.height) *
                      rect.height,
                  width:
                    (Math.abs(boxDrag.end.x - boxDrag.start.x) / size.width) *
                    rect.width,
                  height:
                    (Math.abs(boxDrag.end.y - boxDrag.start.y) / size.height) *
                    rect.height,
                }}
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
                    aria-label={t("tools.imageEditor.expand.handleAria", {
                      side: t(HANDLE_NAMES[handle]),
                    })}
                    title={t("tools.imageEditor.expand.handleTitle")}
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
        aria-label={t("tools.imageEditor.panelAria", {
          title: definition.title,
        })}
        onPointerDown={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          event.stopPropagation();
          if (
            (event.metaKey || event.ctrlKey) &&
            event.key.toLowerCase() === "z" &&
            !(event.target instanceof HTMLInputElement) &&
            !(event.target instanceof HTMLTextAreaElement)
          ) {
            event.preventDefault();
            if (event.shiftKey) redo();
            else undo();
          }
          if (event.key === "Escape") {
            event.preventDefault();
            close();
          }
        }}
      >
        <header className="iae-header">
          <strong>{definition.title}</strong>
          {tool === "smart-edit" && (
            <div
              className="iae-segment"
              aria-label={t("tools.imageEditor.smartEdit.modeAria")}
            >
              <button
                aria-pressed={!maskMode}
                onClick={() => {
                  setEditMode("annotation");
                  setActiveInk("brush");
                }}
              >
                {t("tools.imageEditor.smartEdit.mark")}
              </button>
              <button
                aria-pressed={maskMode}
                onClick={() => {
                  setEditMode("selection");
                  setActiveInk("brush");
                }}
              >
                {hasMask
                  ? t("tools.imageEditor.smartEdit.selectionSelected")
                  : t("tools.imageEditor.smartEdit.selection")}
              </button>
            </div>
          )}
          {selection.pending && (
            <span role="status">
              {t("tools.imageEditor.selection.pending")}
            </span>
          )}
          <TooltipButton label={t("tools.imageEditor.close")} onClick={close}>
            <CanvasIcon name="close" size={16} />
          </TooltipButton>
        </header>
        {drawing && (
          <>
            <div
              className="iae-brush-tools"
              role="toolbar"
              aria-label={
                maskMode
                  ? t("tools.imageEditor.brush.toolsAriaMask")
                  : t("tools.imageEditor.brush.toolsAriaMark")
              }
            >
              {[
                ...[
                  {
                    tool: "brush",
                    label: maskMode
                      ? t("tools.imageEditor.brush.select")
                      : t("tools.imageEditor.brush.brush"),
                    icon: "pencil",
                  },
                  {
                    tool: "erase",
                    label: t("tools.imageEditor.brush.erase"),
                    icon: "minus",
                  },
                ],
                ...(!maskMode
                  ? [
                      {
                        tool: "arrow",
                        label: t("tools.imageEditor.brush.arrow"),
                        icon: "arrowRight",
                      },
                      {
                        tool: "text",
                        label: t("tools.imageEditor.brush.text"),
                        icon: "text",
                      },
                    ]
                  : []),
              ].map((item) => (
                <TooltipButton
                  key={item.tool}
                  label={item.label}
                  aria-pressed={
                    activeInk === item.tool &&
                    (!maskMode || selectionTool === "paint")
                  }
                  onClick={() => {
                    setSelectionTool("paint");
                    setActiveInk(item.tool as ImageInkTool);
                  }}
                >
                  <CanvasIcon name={item.icon} size={16} />
                </TooltipButton>
              ))}
              {maskMode && (
                <>
                  <TooltipButton
                    label={t("tools.imageEditor.brush.subject")}
                    disabled={
                      publishing ||
                      !onPreviewSelection ||
                      !ready ||
                      selection.pending
                    }
                    onClick={() => void selection.recognize()}
                  >
                    <CanvasIcon name="subject" size={17} />
                  </TooltipButton>
                  <TooltipButton
                    label={t("tools.imageEditor.brush.quick")}
                    aria-pressed={selectionTool === "quick"}
                    disabled={!onPreviewSelection}
                    onClick={() => setSelectionTool("quick")}
                  >
                    <CanvasIcon name="cursor" size={17} />
                  </TooltipButton>
                  <TooltipButton
                    label={t("tools.imageEditor.brush.box")}
                    aria-pressed={selectionTool === "box"}
                    disabled={!onPreviewSelection}
                    onClick={() => setSelectionTool("box")}
                  >
                    <CanvasIcon name="crop" size={17} />
                  </TooltipButton>
                  <TooltipButton
                    label={t("tools.imageEditor.brush.describe")}
                    aria-expanded={showSelectionPrompt}
                    disabled={!onPreviewSelection}
                    onClick={() => setShowSelectionPrompt(!showSelectionPrompt)}
                  >
                    <CanvasIcon name="search" size={17} />
                  </TooltipButton>
                </>
              )}
              <span className="iae-separator" />
              <TooltipButton
                label={
                  maskMode
                    ? t("tools.imageEditor.undo.selection")
                    : t("tools.imageEditor.undo.mark")
                }
                disabled={!canUndo}
                onClick={undo}
              >
                <CanvasIcon name="undo" size={16} />
              </TooltipButton>
              <TooltipButton
                label={
                  maskMode
                    ? t("tools.imageEditor.redo.selection")
                    : t("tools.imageEditor.redo.mark")
                }
                disabled={!canRedo}
                onClick={redo}
              >
                <CanvasIcon name="redo" size={16} />
              </TooltipButton>
              <TooltipButton
                label={
                  maskMode
                    ? t("tools.imageEditor.clear.selection")
                    : t("tools.imageEditor.clear.mark")
                }
                onClick={() => specialStroke("clear")}
              >
                <CanvasIcon name="trash" size={16} />
              </TooltipButton>
              {(!maskMode || selectionTool === "paint") && (
                <div className="iae-brush-settings">
                  <label className="iae-range">
                    {activeInk === "text"
                      ? t("tools.imageEditor.brush.fontSize")
                      : t("tools.imageEditor.brush.size")}
                    <input
                      aria-label={t("tools.imageEditor.brush.sizeAria")}
                      type="range"
                      min={1}
                      max={160}
                      value={brushSize}
                      onChange={(event) =>
                        setBrushSize(Number(event.target.value))
                      }
                    />
                    <output>{brushSize}px</output>
                  </label>
                  {!maskMode && (
                    <label className="iae-color">
                      {t("tools.imageEditor.brush.color")}
                      <input
                        type="color"
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                      />
                    </label>
                  )}
                </div>
              )}
            </div>
            {activeInk === "text" && (
              <div className="iae-row">
                <input
                  className="iae-text"
                  aria-label={t("tools.imageEditor.text.aria")}
                  placeholder={t("tools.imageEditor.text.placeholder")}
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
                  {t("tools.imageEditor.text.center")}
                </button>
              </div>
            )}
            {maskMode && showSelectionPrompt && (
              <form
                className="iae-selection-query"
                onSubmit={(event) => {
                  event.preventDefault();
                  void selection.recognize({ prompt: selectionPrompt });
                }}
              >
                <input
                  aria-label={t("tools.imageEditor.selection.queryAria")}
                  placeholder={t(
                    "tools.imageEditor.selection.queryPlaceholder",
                  )}
                  value={selectionPrompt}
                  onChange={(event) => setSelectionPrompt(event.target.value)}
                />
                <button disabled={!selectionPrompt.trim() || selection.pending}>
                  {t("tools.imageEditor.selection.recognize")}
                </button>
              </form>
            )}
            {maskMode && !onPreviewSelection && (
              <p className="iae-hint">
                {selectionUnavailableReason ??
                  t("tools.imageEditor.selection.unavailable")}
              </p>
            )}
            {maskMode && selectionTool === "box" && (
              <p className="iae-hint">
                {t("tools.imageEditor.selection.boxHint")}
              </p>
            )}
            {maskMode && selectionTool === "quick" && (
              <p className="iae-hint">
                {t("tools.imageEditor.selection.quickHint")}
              </p>
            )}
          </>
        )}
        {(tool === "smart-edit" || tool === "outpaint") && (
          <label className="iae-prompt">
            <span>{t("tools.imageEditor.prompt.label")}</span>
            <textarea
              rows={3}
              placeholder={
                tool === "outpaint"
                  ? t("tools.imageEditor.prompt.outpaintPlaceholder")
                  : t("tools.imageEditor.prompt.editPlaceholder")
              }
              value={String(parameters.prompt ?? "")}
              onChange={(event) => change({ prompt: event.target.value })}
            />
          </label>
        )}
        {tool === "outpaint" && (
          <div className="iae-row iae-wrap">
            <label>
              {t("tools.imageEditor.outpaint.aspect")}{" "}
              <select
                aria-label={t("tools.imageEditor.outpaint.aspectAria")}
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
                  {t("tools.imageEditor.outpaint.custom")}
                </option>
                {ASPECTS.map((aspect) => (
                  <option key={aspect} value={aspect}>
                    {aspect === "original"
                      ? t("tools.imageEditor.outpaint.original")
                      : aspect}
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
              {t("tools.imageEditor.outpaint.reset")}
            </button>
            <span className="iae-hint">
              {t("tools.imageEditor.outpaint.handlesHint")}
            </span>
          </div>
        )}
        {tool === "image-hd" && (
          <div className="iae-row iae-wrap">
            <div
              className="iae-segment"
              aria-label={t("tools.imageEditor.hd.modeAria")}
            >
              {[
                ["normal", t("tools.imageEditor.hd.normal")],
                ["pro", t("tools.imageEditor.hd.pro")],
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
                  {t("tools.imageEditor.hd.resolution")}{" "}
                  <select
                    aria-label={t("tools.imageEditor.hd.resolutionAria")}
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
                  {t("tools.imageEditor.hd.detail")}{" "}
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
              <div
                className="iae-camera-grid"
                aria-label={t("tools.imageEditor.camera.aria")}
              >
                {CAMERA_VIEWS.map(([label, x, y]) => (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={yaw === x && pitch === y}
                    onClick={() => angleChange(x, y)}
                  >
                    {t(label)}
                  </button>
                ))}
              </div>
              {directionButtons}
            </div>
            <div className="iae-angle-fields">
              {angleSliders}
              <div className="iae-row">
                <span>{t("tools.imageEditor.distance.label")}</span>
                <div className="iae-segment">
                  {[
                    ["near", t("tools.imageEditor.distance.near")],
                    ["standard", t("tools.imageEditor.distance.standard")],
                    ["far", t("tools.imageEditor.distance.far")],
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
                  {t("tools.imageEditor.distance.reset")}
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
                  aria-label={t("tools.imageEditor.lighting.sphereAria", {
                    yaw,
                    pitch,
                  })}
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
                    {t("tools.imageEditor.lighting.perspective")}
                  </button>
                  <button
                    type="button"
                    aria-pressed={lightView === "front"}
                    onClick={() => setLightView("front")}
                  >
                    {t("tools.imageEditor.lighting.front")}
                  </button>
                </div>
                {directionButtons}
              </div>
              <div className="iae-angle-fields">
                {angleSliders}
                <div
                  className="iae-light-views"
                  aria-label={t("tools.imageEditor.light.viewsAria")}
                >
                  {LIGHT_VIEWS.map(([label, x, y]) => (
                    <button
                      type="button"
                      key={label}
                      aria-pressed={yaw === x && pitch === y}
                      onClick={() => angleChange(x, y)}
                    >
                      {t(label)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="iae-row iae-wrap">
              <label className="iae-color">
                {t("tools.imageEditor.lighting.color")}{" "}
                <input
                  type="color"
                  value={String(parameters.lightColor ?? "#ffffff")}
                  onChange={(event) =>
                    change({ lightColor: event.target.value.toLowerCase() })
                  }
                />
                <input
                  className="iae-hex"
                  aria-label={t("tools.imageEditor.lighting.colorHexAria")}
                  value={String(parameters.lightColor ?? "#ffffff")}
                  maxLength={7}
                  onChange={(event) =>
                    change({ lightColor: event.target.value.toLowerCase() })
                  }
                />
              </label>
              <div
                className="iae-segment"
                aria-label={t("tools.imageEditor.lighting.textureAria")}
              >
                {[
                  ["soft", t("tools.imageEditor.lighting.soft")],
                  ["hard", t("tools.imageEditor.lighting.hard")],
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
                {t("tools.imageEditor.lighting.brightness")}{" "}
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
                {t("tools.imageEditor.lighting.reset")}
              </button>
              <p className="iae-hint">
                {t("tools.imageEditor.lighting.hint")}
              </p>
            </div>
          </>
        )}
        {selection.pending && (
          <div className="iae-selection-status" role="status">
            {t("tools.imageEditor.selection.recognizing")}{" "}
            <button onClick={selection.cancel}>{t("common.cancel")}</button>
          </div>
        )}
        {selection.message && maskMode && (
          <p className="iae-hint" role="status">
            {selection.message}
          </p>
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
          {models.length > 0 && tool !== "cutout" && (
            <select
              className="iae-model"
              aria-label={t("tools.imageEditor.model.aria")}
              value={String(parameters.imageModelConfigId ?? "")}
              onChange={(event) =>
                change({ imageModelConfigId: event.target.value })
              }
            >
              <option value="">
                {t("tools.imageEditor.model.auto", {
                  model: models[0]!.label,
                })}
              </option>
              {modelMissing && (
                <option value={String(parameters.imageModelConfigId)} disabled>
                  {t("tools.imageEditor.model.missingOption")}
                </option>
              )}
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.label}
                </option>
              ))}
            </select>
          )}
          <span className="iae-service-note">
            {modelMissing
              ? t("tools.imageEditor.service.missing")
              : !ready && !error
                ? t("tools.imageEditor.service.loading")
                : tool === "cutout"
                  ? hasMask
                    ? t("tools.imageEditor.service.cutoutKeep")
                    : t("tools.imageEditor.service.cutoutChoose")
                  : localOnly
                    ? t("tools.imageEditor.service.local")
                    : !onGenerate
                      ? (unavailableReason ??
                        t("tools.imageEditor.service.connect"))
                      : hasMask
                        ? t("tools.imageEditor.service.localEdit")
                        : ""}
          </span>
          <div className="iae-actions">
            <TooltipButton
              label={t("tools.imageEditor.actions.more")}
              aria-haspopup="menu"
              aria-expanded={!!menuAnchor}
              aria-controls={menuAnchor ? "image-action-more" : undefined}
              onClick={(event) =>
                setMenuAnchor(menuAnchor ? null : event.currentTarget)
              }
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                  event.preventDefault();
                  setMenuAnchor(event.currentTarget);
                }
              }}
            >
              <CanvasIcon name="more" size={17} />
            </TooltipButton>
            {menuAnchor && (
              <SelectionToolbarMenu
                anchor={menuAnchor}
                id="image-action-more"
                label={t("tools.imageEditor.actions.more")}
                onClose={() => setMenuAnchor(null)}
              >
                {drawing && tool !== "cutout" && !maskMode && (
                  <button
                    type="button"
                    className="cw-selection-menu-item"
                    role="menuitem"
                    disabled={publishing || !ready}
                    onClick={() => {
                      setMenuAnchor(null);
                      applyLocal();
                    }}
                  >
                    {t("tools.imageEditor.actions.applyLocal")}
                  </button>
                )}
                {tool === "inpainting-remove" && (
                  <button
                    type="button"
                    className="cw-selection-menu-item"
                    role="menuitem"
                    disabled={publishing || !hasMask}
                    onClick={() => {
                      setMenuAnchor(null);
                      applyLocal();
                    }}
                  >
                    {t("tools.imageEditor.actions.eraseLocal")}
                  </button>
                )}
                {hasMask && (
                  <button
                    type="button"
                    className="cw-selection-menu-item"
                    role="menuitem"
                    onClick={() => {
                      setMenuAnchor(null);
                      exportMask();
                    }}
                  >
                    {t("tools.imageEditor.actions.exportMask")}
                  </button>
                )}
                {maskMode && (
                  <button
                    type="button"
                    className="cw-selection-menu-item"
                    role="menuitem"
                    onClick={() => {
                      setMenuAnchor(null);
                      specialStroke("fill");
                    }}
                  >
                    {t("tools.imageEditor.actions.selectAll")}
                  </button>
                )}
                <button
                  type="button"
                  className="cw-selection-menu-item"
                  role="menuitem"
                  disabled={publishing || !ready}
                  onClick={() => {
                    setMenuAnchor(null);
                    withTask(() =>
                      setNotice(t("tools.imageEditor.notice.settingsSaved")),
                    );
                  }}
                >
                  {t("tools.imageEditor.actions.save")}
                </button>
                {!localOnly && (
                  <button
                    type="button"
                    className="cw-selection-menu-item"
                    role="menuitem"
                    disabled={publishing || !ready}
                    onClick={() => {
                      setMenuAnchor(null);
                      withTask(onImportResults);
                    }}
                  >
                    {t("tools.imageEditor.actions.import")}
                  </button>
                )}
              </SelectionToolbarMenu>
            )}
            <button
              type="button"
              className="iae-generate"
              disabled={
                publishing ||
                !ready ||
                selection.pending ||
                (tool === "cutout"
                  ? !hasMask
                  : localOnly
                    ? false
                    : !onGenerate ||
                      modelMissing ||
                      (tool === "inpainting-remove" && !hasMask) ||
                      (tool === "smart-edit" &&
                        !String(parameters.prompt ?? "").trim()) ||
                      (tool === "lighting" &&
                        !/^#[\da-f]{6}$/.test(String(parameters.lightColor))))
              }
              onClick={() => {
                if (tool === "cutout" || localOnly) applyLocal();
                else if (onGenerate) withTask(onGenerate);
              }}
            >
              <CanvasIcon
                name={tool === "cutout" ? "check" : "sparkle"}
                size={15}
              />
              {tool === "cutout"
                ? t("tools.imageEditor.actions.finishCutout")
                : localOnly
                  ? t("tools.imageEditor.actions.confirmMark")
                  : t("tools.imageEditor.actions.generate")}
            </button>
          </div>
        </footer>
      </section>
    </>
  );
}
