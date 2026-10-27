import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { CanvasIcon } from "./CanvasIcon";
import {
  assertLayerSize,
  createImageLayer,
  createLayerDocument,
  hitLayer,
  layerToWorld,
  MAX_LAYERS,
  parseLayerDocument,
  parseLayerDocumentValue,
  recordLayers,
  redoLayers,
  reorderLayer,
  undoLayers,
  worldToLayer,
  type ImageLayer,
  type LayerContent,
  type LayerDocument,
  type LayerHistory,
  type LayerPoint,
  type MaskStroke,
} from "./layerDocument";
import {
  LayerImageCache,
  loadLayerImage,
  portableLayerDocument,
  renderLayers,
} from "./layerRenderer";
import "./layer-board.css";

export interface LayerBoardProps {
  src?: string;
  title: string;
  initialDocument?: LayerDocument;
  onApply: (src: string, document: LayerDocument) => void;
  onClose: () => void;
  onBack?: () => void;
}
type Tool = "move" | "erase" | "restore";
type Gesture = { pointerId: number } & (
  | { kind: "move" | "resize" | "rotate"; layer: ImageLayer; start: LayerPoint }
  | { kind: "mask"; layer: ImageLayer; stroke: MaskStroke }
);
const failure = (error: unknown) =>
  error instanceof Error ? error.message : "操作未完成，请重试。";
const readFile = (file: File) =>
  new Promise<string>((resolve, reject) => {
    if (file.size > 64 * 1024 * 1024) {
      reject(new Error("单个素材最多 64 MB，请先缩小文件。"));
      return;
    }
    const reader = new FileReader();
    reader.onload = () =>
      typeof reader.result === "string"
        ? resolve(reader.result)
        : reject(new Error("无法读取文件。"));
    reader.onerror = () => reject(new Error("读取文件失败。"));
    reader.readAsDataURL(file);
  });
function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob),
    anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const unflipped = (layer: ImageLayer) => ({
  ...layer,
  flipX: false,
  flipY: false,
});

/** Local layer editor: every pixel operation is explicit and independently undoable. */
export function LayerBoard({
  src,
  title,
  initialDocument,
  onApply,
  onClose,
  onBack,
}: LayerBoardProps) {
  const [history, setHistory] = useState<LayerHistory | null>(null);
  const document = history?.present;
  const state = useRef(history);
  state.current = history;
  const transaction = useRef<LayerDocument | null>(null);
  const gesture = useRef<Gesture | null>(null);
  const clipboard = useRef<ImageLayer | null>(null);
  const [selected, select] = useState<string | null>(null);
  const [tool, setTool] = useState<Tool>("move");
  const [brush, setBrush] = useState(32);
  const [draft, setDraft] = useState<
    { layerId: string; stroke: MaskStroke } | undefined
  >();
  const [zoom, setZoom] = useState(1);
  const [area, setArea] = useState({ width: 700, height: 600 });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [canvasSize, setCanvasSize] = useState({ width: 1024, height: 1024 });
  const stageRef = useRef<HTMLDivElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const jsonRef = useRef<HTMLInputElement>(null);
  const mounted = useRef(true);
  const session = useRef(0);
  const cache = useRef(new LayerImageCache());
  const callbacks = useRef({ onApply, onClose });
  callbacks.current = { onApply, onClose };
  const titleId = useId();
  const active = document?.layers.find((layer) => layer.id === selected);
  const editable = !!active && !active.locked;
  const fit = document
    ? Math.min(
        (area.width - 72) / document.width,
        (area.height - 72) / document.height,
        1,
      )
    : 1;
  const displayScale = Math.max(0.01, fit * zoom);

  const install = (next: LayerDocument) => {
    setHistory({ past: [], present: next, future: [] });
    select(next.layers.at(-1)?.id ?? null);
    setCanvasSize({ width: next.width, height: next.height });
    transaction.current = null;
    gesture.current = null;
    setDraft(undefined);
    setZoom(1);
  };
  useEffect(() => {
    const currentSession = ++session.current;
    mounted.current = true;
    setBusy(true);
    setError("");
    setHistory(null);
    void (async () => {
      try {
        let next: LayerDocument;
        if (initialDocument) next = parseLayerDocumentValue(initialDocument);
        else if (src) {
          const image = await loadLayerImage(src);
          next = createLayerDocument(
            src,
            image.naturalWidth,
            image.naturalHeight,
            title || "原始图片",
          );
        } else
          next = {
            format: "museshow-layers",
            version: 1,
            width: 1024,
            height: 1024,
            background: "transparent",
            layers: [],
          };
        await cache.current.images(next);
        if (mounted.current && session.current === currentSession)
          install(next);
      } catch (error) {
        if (mounted.current && session.current === currentSession)
          setError(failure(error));
      } finally {
        if (mounted.current && session.current === currentSession)
          setBusy(false);
      }
    })();
    return () => {
      mounted.current = false;
      session.current++;
    };
  }, [src, initialDocument, title]);
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry)
        setArea({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!document) return;
    let alive = true;
    const frame = requestAnimationFrame(() => {
      void cache.current
        .images(document)
        .then((images) => {
          if (!alive || !canvasRef.current) return;
          renderLayers(canvasRef.current, document, images, {
            maxSide: 1600,
            draft,
          });
        })
        .catch((error) => {
          if (alive) setError(failure(error));
        });
    });
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
    };
  }, [document, draft]);
  useEffect(() => {
    if (
      selected &&
      document &&
      !document.layers.some((layer) => layer.id === selected)
    )
      select(document.layers.at(-1)?.id ?? null);
    if (document)
      setCanvasSize({ width: document.width, height: document.height });
  }, [document, selected]);

  const update = (fn: (document: LayerDocument) => LayerDocument) => {
    setError("");
    const grouped = transaction.current !== null;
    setHistory((current) => {
      if (!current) return current;
      const next = fn(current.present);
      if (next === current.present) return current;
      return grouped
        ? { ...current, present: next }
        : recordLayers(current, next);
    });
  };
  const begin = () => {
    transaction.current ??= state.current?.present ?? null;
  };
  const end = () => {
    const previous = transaction.current;
    transaction.current = null;
    if (previous)
      setHistory(
        (current) =>
          current && recordLayers(current, current.present, previous),
      );
  };
  const cancelGesture = () => {
    const current = gesture.current;
    if (!current) return;
    gesture.current = null;
    const previous = transaction.current;
    transaction.current = null;
    if (previous) setHistory((h) => h && { ...h, present: previous });
    setDraft(undefined);
    if (surfaceRef.current?.hasPointerCapture(current.pointerId))
      surfaceRef.current.releasePointerCapture(current.pointerId);
  };
  const patch = (
    id: string,
    changes: Partial<ImageLayer>,
    allowLocked = false,
  ) =>
    update((doc) => ({
      ...doc,
      layers: doc.layers.map((layer) =>
        layer.id === id && (!layer.locked || allowLocked)
          ? { ...layer, ...changes }
          : layer,
      ),
    }));
  const remove = () => {
    if (active && !active.locked)
      update((doc) => ({
        ...doc,
        layers: doc.layers.filter((layer) => layer.id !== active.id),
      }));
  };
  const add = (content: LayerContent, name: string) => {
    if (!document) return;
    if (document.layers.length >= MAX_LAYERS) {
      setError(`本地编辑器最多支持 ${MAX_LAYERS} 个图层。`);
      return;
    }
    const layer = createImageLayer(content, name);
    const scale = Math.min(
      1,
      document.width / layer.width,
      document.height / layer.height,
    );
    layer.width *= scale;
    layer.height *= scale;
    layer.x = (document.width - layer.width) / 2;
    layer.y = (document.height - layer.height) / 2;
    update((doc) => ({ ...doc, layers: [...doc.layers, layer] }));
    select(layer.id);
    setTool("move");
  };
  const duplicate = (source = active) => {
    if (!source || !document) return;
    if (document.layers.length >= MAX_LAYERS) {
      setError(`本地编辑器最多支持 ${MAX_LAYERS} 个图层。`);
      return;
    }
    const layer = {
      ...structuredClone(source),
      id: crypto.randomUUID(),
      name: `${source.name.slice(0, 197)} 副本`,
      locked: false,
      x: source.x + 20,
      y: source.y + 20,
    };
    update((doc) => ({ ...doc, layers: [...doc.layers, layer] }));
    select(layer.id);
  };
  const importImages = async (files: File[]) => {
    if (!state.current || busy) return;
    const token = session.current;
    const initial = state.current.present;
    if (initial.layers.length + files.length > MAX_LAYERS) {
      setError(`本地编辑器最多支持 ${MAX_LAYERS} 个图层。`);
      return;
    }
    setBusy(true);
    setError("");
    try {
      const layers: ImageLayer[] = [];
      for (const file of files) {
        if (!file.type.startsWith("image/"))
          throw new Error(`「${file.name}」不是图片。`);
        const src = await readFile(file),
          image = await loadLayerImage(src);
        const layer = createImageLayer(
          {
            kind: "image",
            src,
            width: image.naturalWidth,
            height: image.naturalHeight,
          },
          file.name.replace(/\.[^.]+$/, ""),
        );
        const scale = Math.min(
          1,
          initial.width / layer.width,
          initial.height / layer.height,
        );
        layer.width *= scale;
        layer.height *= scale;
        layer.x = (initial.width - layer.width) / 2;
        layer.y = (initial.height - layer.height) / 2;
        layers.push(layer);
      }
      if (!mounted.current || token !== session.current) return;
      update((doc) => ({ ...doc, layers: [...doc.layers, ...layers] }));
      select(layers.at(-1)?.id ?? null);
      setTool("move");
    } catch (error) {
      if (mounted.current && token === session.current)
        setError(failure(error));
    } finally {
      if (mounted.current && token === session.current) setBusy(false);
    }
  };
  const actionRef = useRef({
    remove,
    duplicate,
    undo: () => {},
    redo: () => {},
    cancelGesture,
  });
  actionRef.current = {
    cancelGesture,
    remove,
    duplicate,
    undo: () => {
      end();
      setHistory((h) => h && undoLayers(h));
    },
    redo: () => {
      end();
      setHistory((h) => h && redoLayers(h));
    },
  };
  const activeRef = useRef(active);
  activeRef.current = active;
  useEffect(() => {
    const previousFocus = window.document.activeElement as HTMLElement | null;
    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (!dialogRef.current?.contains(event.target as Node)) return;
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        if (gesture.current) actionRef.current.cancelGesture();
        else callbacks.current.onClose();
        return;
      }
      if (gesture.current) {
        // Do not let keyboard edits split the history transaction under an active pointer.
        if (
          event.key !== "Shift" &&
          event.key !== "Alt" &&
          event.key !== "Control" &&
          event.key !== "Meta"
        ) {
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }
      if (event.key === "Tab") {
        const items = [
          ...dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not(:disabled), input:not(:disabled):not([type="file"]), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]',
          ),
        ];
        const first = items[0],
          last = items.at(-1);
        if (!first || !last) {
          event.preventDefault();
          return;
        }
        if (
          event.shiftKey &&
          (window.document.activeElement === first ||
            window.document.activeElement === dialogRef.current)
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          (window.document.activeElement === last ||
            window.document.activeElement === dialogRef.current)
        ) {
          event.preventDefault();
          first.focus();
        }
        return;
      }
      if (
        (event.target as HTMLElement).closest(
          "input,textarea,select,[contenteditable=true]",
        )
      )
        return;
      const mod = event.metaKey || event.ctrlKey;
      if (mod && event.key.toLowerCase() === "z") {
        event.preventDefault();
        event.stopPropagation();
        event.shiftKey ? actionRef.current.redo() : actionRef.current.undo();
      } else if (mod && event.key.toLowerCase() === "y") {
        event.preventDefault();
        event.stopPropagation();
        actionRef.current.redo();
      } else if (event.key === "Delete" || event.key === "Backspace") {
        event.preventDefault();
        event.stopPropagation();
        actionRef.current.remove();
      } else if (
        mod &&
        ["c", "x", "v", "d"].includes(event.key.toLowerCase())
      ) {
        event.preventDefault();
        event.stopPropagation();
        const key = event.key.toLowerCase();
        if ((key === "c" || key === "x") && activeRef.current) {
          clipboard.current = structuredClone(activeRef.current);
          if (key === "x") actionRef.current.remove();
        }
        if (key === "v" && clipboard.current)
          actionRef.current.duplicate(clipboard.current);
        if (key === "d") actionRef.current.duplicate();
      }
    };
    const blur = () => actionRef.current.cancelGesture();
    window.addEventListener("blur", blur);
    window.document.addEventListener("keydown", keydown, true);
    return () => {
      window.removeEventListener("blur", blur);
      window.document.removeEventListener("keydown", keydown, true);
      window.document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, []);

  const point = (event: ReactPointerEvent): LayerPoint => {
    const bounds = surfaceRef.current!.getBoundingClientRect();
    return {
      x: ((event.clientX - bounds.left) * document!.width) / bounds.width,
      y: ((event.clientY - bounds.top) * document!.height) / bounds.height,
    };
  };
  const pointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (
      !document ||
      busy ||
      event.button !== 0 ||
      !event.isPrimary ||
      gesture.current
    )
      return;
    const at = point(event);
    const handle = (event.target as Element).getAttribute("data-handle");
    if (tool !== "move") {
      if (!active || active.locked || !active.visible) {
        setNotice("请先选择一个可见且未锁定的图层。蒙版只作用于该图层。");
        return;
      }
      const stroke: MaskStroke = {
        mode: tool,
        size: brush,
        points: [worldToLayer(active, at)],
      };
      gesture.current = {
        kind: "mask",
        layer: active,
        stroke,
        pointerId: event.pointerId,
      };
      setDraft({ layerId: active.id, stroke });
    } else {
      const target = handle ? active : hitLayer(document, at);
      if (!target || target.locked) {
        select(null);
        return;
      }
      select(target.id);
      begin();
      gesture.current = {
        pointerId: event.pointerId,
        kind:
          handle === "resize"
            ? "resize"
            : handle === "rotate"
              ? "rotate"
              : "move",
        layer: target,
        start: at,
      };
    }
    event.preventDefault();
    event.currentTarget.focus();
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const pointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const current = gesture.current;
    if (!current || !document || current.pointerId !== event.pointerId) return;
    const at = point(event),
      layer = current.layer;
    if (current.kind === "mask") {
      const local = worldToLayer(layer, at),
        last = current.stroke.points.at(-1)!;
      if (
        Math.hypot(local.x - last.x, local.y - last.y) <
        Math.max(0.5, brush / 12)
      )
        return;
      current.stroke = {
        ...current.stroke,
        points: [...current.stroke.points, local],
      };
      setDraft({ layerId: layer.id, stroke: current.stroke });
    } else if (current.kind === "move")
      patch(layer.id, {
        x: layer.x + at.x - current.start.x,
        y: layer.y + at.y - current.start.y,
      });
    else if (current.kind === "rotate") {
      const cx = layer.x + layer.width / 2,
        cy = layer.y + layer.height / 2;
      const angle =
        layer.rotation +
        ((Math.atan2(at.y - cy, at.x - cx) -
          Math.atan2(current.start.y - cy, current.start.x - cx)) *
          180) /
          Math.PI;
      patch(layer.id, {
        rotation: event.shiftKey
          ? Math.round(angle / 15) * 15
          : Math.round(angle),
      });
    } else {
      const local = worldToLayer(unflipped(layer), at);
      let width = Math.max(1, (local.x * layer.width) / layer.content.width),
        height = Math.max(1, (local.y * layer.height) / layer.content.height);
      if (event.shiftKey) height = (width * layer.height) / layer.width;
      width = Math.min(100000, width);
      height = Math.min(100000, height);
      const anchor = layerToWorld(unflipped(layer), { x: 0, y: 0 }),
        angle = (layer.rotation * Math.PI) / 180;
      patch(layer.id, {
        width,
        height,
        x:
          anchor.x +
          (width / 2) * Math.cos(angle) -
          (height / 2) * Math.sin(angle) -
          width / 2,
        y:
          anchor.y +
          (width / 2) * Math.sin(angle) +
          (height / 2) * Math.cos(angle) -
          height / 2,
      });
    }
  };
  const pointerEnd = (
    event: ReactPointerEvent<HTMLDivElement>,
    cancel = false,
  ) => {
    const current = gesture.current;
    if (!current || current.pointerId !== event.pointerId) return;
    if (cancel) {
      cancelGesture();
      return;
    }
    gesture.current = null;
    if (current.kind === "mask") {
      patch(current.layer.id, {
        mask: [...current.layer.mask, current.stroke],
      });
      setDraft(undefined);
    } else end();
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const output = async (kind: "apply" | "png" | "json") => {
    if (!document || busy) return;
    end();
    setBusy(true);
    setError("");
    const token = session.current;
    try {
      const images = await cache.current.images(document);
      if (!mounted.current || token !== session.current) return;
      if (kind === "json") {
        download(
          new Blob([JSON.stringify(portableLayerDocument(document, images))], {
            type: "application/json",
          }),
          `${title || "图层"}.layers.json`,
        );
        setNotice("已导出可编辑图层文件（包含素材和蒙版）。");
      } else {
        const canvas = window.document.createElement("canvas");
        renderLayers(canvas, document, images);
        if (kind === "apply") {
          const result = canvas.toDataURL("image/png");
          if (!result.startsWith("data:image/png;base64,"))
            throw new Error("PNG 导出失败，请缩小画布尺寸后重试。");
          callbacks.current.onApply(
            result,
            portableLayerDocument(document, images),
          );
          callbacks.current.onClose();
        } else {
          const blob = await new Promise<Blob>((resolve, reject) =>
            canvas.toBlob(
              (blob) =>
                blob ? resolve(blob) : reject(new Error("PNG 导出失败。")),
              "image/png",
            ),
          );
          if (mounted.current && token === session.current) {
            download(blob, `${title || "图层合成"}.png`);
            setNotice(`已导出 ${document.width} × ${document.height} PNG。`);
          }
        }
      }
    } catch (error) {
      if (mounted.current && token === session.current)
        setError(failure(error));
    } finally {
      if (mounted.current && token === session.current) setBusy(false);
    }
  };

  const numeric = (
    key: "x" | "y" | "width" | "height" | "rotation",
    label: string,
    min = -1000000,
    max = 1000000,
  ) =>
    active && (
      <label>
        {label}
        <input
          aria-label={`图层${label}`}
          type="number"
          value={Math.round(active[key] * 10) / 10}
          min={min}
          max={max}
          disabled={!editable}
          onFocus={begin}
          onBlur={end}
          onChange={(event) => {
            const value = event.target.valueAsNumber;
            if (Number.isFinite(value) && value >= min && value <= max)
              patch(active.id, { [key]: value });
          }}
        />
      </label>
    );
  const corners = active
    ? [
        { x: 0, y: 0 },
        { x: active.content.width, y: 0 },
        { x: active.content.width, y: active.content.height },
        { x: 0, y: active.content.height },
      ].map((point) => layerToWorld(unflipped(active), point))
    : [];
  const rotatePoint = active
    ? layerToWorld(unflipped(active), {
        x: active.content.width / 2,
        y: ((-28 / displayScale) * active.content.height) / active.height,
      })
    : null;
  const topPoint = active
    ? layerToWorld(unflipped(active), { x: active.content.width / 2, y: 0 })
    : null;
  return (
    <div className="lb-overlay">
      <section
        className="lb-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
        tabIndex={-1}
      >
        <header className="lb-header">
          <div>
            <span className="lb-eyebrow">LOCAL LAYER STUDIO</span>
            <h2 id={titleId}>
              图层工作台 <small>{title}</small>
            </h2>
          </div>
          <div className="lb-header-actions">
            {onBack && (
              <button onClick={onBack} disabled={busy}>
                返回裁剪
              </button>
            )}
            <button onClick={onClose} aria-label="关闭图层工作台">
              <CanvasIcon name="close" />
            </button>
          </div>
        </header>
        <div className="lb-toolbar" role="toolbar" aria-label="图层工具">
          <button
            className={tool === "move" ? "is-active" : ""}
            onClick={() => setTool("move")}
            title="选择、移动与变换"
          >
            <CanvasIcon name="pointer" size={16} />
            选择
          </button>
          <button
            className={tool === "erase" ? "is-active" : ""}
            onClick={() => setTool("erase")}
            title="手动擦除选中图层的区域"
          >
            ◒ 蒙版擦除
          </button>
          <button
            className={tool === "restore" ? "is-active" : ""}
            onClick={() => setTool("restore")}
            title="恢复被蒙版擦除的原始像素"
          >
            ◓ 蒙版恢复
          </button>
          {tool !== "move" && (
            <label className="lb-brush">
              画笔{" "}
              <input
                aria-label="蒙版画笔大小"
                type="range"
                min="2"
                max="300"
                value={brush}
                onChange={(event) => setBrush(Number(event.target.value))}
              />
              <output>{brush}px</output>
            </label>
          )}
          <span className="lb-toolbar-spacer" />
          <button
            aria-label="撤销图层操作"
            disabled={!history?.past.length || busy}
            onClick={() => actionRef.current.undo()}
          >
            <CanvasIcon name="undo" size={17} />
          </button>
          <button
            aria-label="重做图层操作"
            disabled={!history?.future.length || busy}
            onClick={() => actionRef.current.redo()}
          >
            <CanvasIcon name="redo" size={17} />
          </button>
          <button
            onClick={() => inputRef.current?.click()}
            disabled={!document || busy}
          >
            <CanvasIcon name="image" size={16} />
            添加图片
          </button>
          <button
            onClick={() =>
              add(
                {
                  kind: "text",
                  text: "输入文字",
                  color: "#ffffff",
                  fontSize: 64,
                  width: 600,
                  height: 260,
                },
                "文字图层",
              )
            }
            disabled={!document || busy}
          >
            <CanvasIcon name="text" size={16} />
            文字
          </button>
          <button
            onClick={() =>
              add(
                {
                  kind: "rectangle",
                  color: "#a78bfa",
                  width: 320,
                  height: 240,
                },
                "色块图层",
              )
            }
            disabled={!document || busy}
          >
            ▣ 色块
          </button>
        </div>
        <div className="lb-body">
          <div className="lb-stage-shell">
            <div
              className="lb-stage"
              ref={stageRef}
              onDragOver={(event) => {
                if (event.dataTransfer.types.includes("Files"))
                  event.preventDefault();
              }}
              onDrop={(event) => {
                if (event.dataTransfer.files.length) {
                  event.preventDefault();
                  void importImages([...event.dataTransfer.files]);
                }
              }}
            >
              {document ? (
                <div
                  className={`lb-surface ${tool !== "move" ? "is-painting" : ""}`}
                  ref={surfaceRef}
                  style={{
                    width: document.width * displayScale,
                    height: document.height * displayScale,
                  }}
                  tabIndex={0}
                  aria-label="图层编辑画布"
                  onPointerDown={pointerDown}
                  onPointerMove={pointerMove}
                  onPointerUp={(event) => pointerEnd(event)}
                  onPointerCancel={(event) => pointerEnd(event, true)}
                  onLostPointerCapture={(event) => {
                    if (gesture.current) pointerEnd(event, true);
                  }}
                >
                  <canvas ref={canvasRef} aria-label="图层合成预览" />
                  {active?.visible && (
                    <svg
                      className="lb-selection"
                      viewBox={`0 0 ${document.width} ${document.height}`}
                      aria-hidden="true"
                    >
                      <polygon
                        points={corners.map((p) => `${p.x},${p.y}`).join(" ")}
                        fill="none"
                        stroke={active.locked ? "#a5a5a5" : "#bfa8ff"}
                        strokeWidth={1 / displayScale}
                        strokeDasharray={
                          active.locked ? `${5 / displayScale}` : undefined
                        }
                      />
                      {tool === "move" && !active.locked && (
                        <>
                          <line
                            x1={topPoint!.x}
                            y1={topPoint!.y}
                            x2={rotatePoint!.x}
                            y2={rotatePoint!.y}
                            stroke="#bfa8ff"
                            strokeWidth={1 / displayScale}
                          />
                          <circle
                            data-handle="rotate"
                            cx={rotatePoint!.x}
                            cy={rotatePoint!.y}
                            r={5 / displayScale}
                            fill="#bfa8ff"
                          />
                          <rect
                            data-handle="resize"
                            x={corners[2]!.x - 5 / displayScale}
                            y={corners[2]!.y - 5 / displayScale}
                            width={10 / displayScale}
                            height={10 / displayScale}
                            fill="#bfa8ff"
                          />
                        </>
                      )}
                    </svg>
                  )}
                </div>
              ) : (
                <div className="lb-empty">
                  {busy ? "正在读取本地图层…" : "无法打开图层文档"}
                </div>
              )}
            </div>
            <div className="lb-stage-footer">
              <span>
                {document
                  ? `${document.width} × ${document.height} · ${document.layers.length} 个图层`
                  : "图层工作台"}
              </span>
              <div>
                <button
                  aria-label="缩小图层视图"
                  onClick={() => setZoom((z) => Math.max(0.25, z / 1.25))}
                >
                  −
                </button>
                <button onClick={() => setZoom(1)} title="适应视图">
                  {Math.round(displayScale * 100)}%
                </button>
                <button
                  aria-label="放大图层视图"
                  onClick={() => setZoom((z) => Math.min(8, z * 1.25))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <aside className="lb-inspector" aria-label="图层和属性">
            <section className="lb-layer-section">
              <h3>
                图层 <span>从上到下合成</span>
              </h3>
              <div className="lb-layer-list">
                {document &&
                  [...document.layers].reverse().map((layer) => (
                    <div
                      key={layer.id}
                      className={`lb-layer-row ${selected === layer.id ? "is-selected" : ""}`}
                      draggable={!busy && !layer.locked}
                      onDragStart={(event) =>
                        event.dataTransfer.setData(
                          "application/x-museshow-layer",
                          layer.id,
                        )
                      }
                      onDragOver={(event) => {
                        if (
                          event.dataTransfer.types.includes(
                            "application/x-museshow-layer",
                          )
                        )
                          event.preventDefault();
                      }}
                      onDrop={(event) => {
                        const id = event.dataTransfer.getData(
                          "application/x-museshow-layer",
                        );
                        if (id) {
                          event.preventDefault();
                          update((doc) =>
                            reorderLayer(
                              doc,
                              id,
                              doc.layers.findIndex(
                                (item) => item.id === layer.id,
                              ),
                            ),
                          );
                        }
                      }}
                    >
                      <button
                        className="lb-layer-visibility"
                        aria-label={`${layer.visible ? "隐藏" : "显示"}图层 ${layer.name}`}
                        aria-pressed={layer.visible}
                        onClick={() =>
                          patch(layer.id, { visible: !layer.visible }, true)
                        }
                      >
                        {layer.visible ? "◉" : "○"}
                      </button>
                      <button
                        className="lb-layer-name"
                        onClick={() => select(layer.id)}
                      >
                        <span className="lb-layer-thumb">
                          {layer.content.kind === "image" ? (
                            <img
                              src={layer.content.src}
                              alt=""
                              draggable={false}
                            />
                          ) : layer.content.kind === "text" ? (
                            "T"
                          ) : (
                            <i style={{ background: layer.content.color }} />
                          )}
                        </span>
                        <span>
                          {layer.name}
                          <small>
                            {layer.mask.length
                              ? `蒙版 · ${layer.mask.length} 笔`
                              : layer.content.kind === "image"
                                ? "图片"
                                : layer.content.kind === "text"
                                  ? "文字"
                                  : "色块"}
                          </small>
                        </span>
                      </button>
                      <button
                        aria-label={`${layer.locked ? "解锁" : "锁定"}图层 ${layer.name}`}
                        aria-pressed={layer.locked}
                        onClick={() =>
                          patch(layer.id, { locked: !layer.locked }, true)
                        }
                      >
                        <CanvasIcon
                          name={layer.locked ? "lock" : "more"}
                          size={14}
                        />
                      </button>
                    </div>
                  ))}
                {!document?.layers.length && (
                  <p className="lb-hint">
                    添加图片、文字或色块开始创作。支持拖入本地图片。
                  </p>
                )}
              </div>
              <div className="lb-layer-actions">
                <button
                  title="上移一层"
                  aria-label="上移图层"
                  disabled={!editable || busy}
                  onClick={() =>
                    update((doc) =>
                      reorderLayer(
                        doc,
                        active!.id,
                        doc.layers.findIndex((l) => l.id === active!.id) + 1,
                      ),
                    )
                  }
                >
                  ↑
                </button>
                <button
                  title="下移一层"
                  aria-label="下移图层"
                  disabled={!editable || busy}
                  onClick={() =>
                    update((doc) =>
                      reorderLayer(
                        doc,
                        active!.id,
                        doc.layers.findIndex((l) => l.id === active!.id) - 1,
                      ),
                    )
                  }
                >
                  ↓
                </button>
                <button
                  title="置于顶层"
                  aria-label="图层置顶"
                  disabled={!editable || busy}
                  onClick={() =>
                    update((doc) =>
                      reorderLayer(doc, active!.id, doc.layers.length - 1),
                    )
                  }
                >
                  ⇡
                </button>
                <button
                  title="置于底层"
                  aria-label="图层置底"
                  disabled={!editable || busy}
                  onClick={() =>
                    update((doc) => reorderLayer(doc, active!.id, 0))
                  }
                >
                  ⇣
                </button>
                <button
                  title="复制图层"
                  aria-label="复制图层"
                  disabled={!editable || busy}
                  onClick={() => duplicate()}
                >
                  <CanvasIcon name="copy" size={15} />
                </button>
                <button
                  title="删除图层"
                  aria-label="删除图层"
                  disabled={!editable || busy}
                  onClick={remove}
                >
                  <CanvasIcon name="trash" size={15} />
                </button>
              </div>
            </section>
            {active && (
              <section className="lb-properties">
                <h3>图层属性 {active.locked && <span>已锁定</span>}</h3>
                <label>
                  名称
                  <input
                    aria-label="图层名称"
                    value={active.name}
                    maxLength={200}
                    disabled={!editable}
                    onFocus={begin}
                    onBlur={end}
                    onChange={(event) =>
                      patch(active.id, { name: event.target.value })
                    }
                  />
                </label>
                <label className="lb-opacity">
                  不透明度 <output>{Math.round(active.opacity * 100)}%</output>
                  <input
                    aria-label="图层不透明度"
                    type="range"
                    min="0"
                    max="100"
                    value={Math.round(active.opacity * 100)}
                    disabled={!editable}
                    onPointerDown={begin}
                    onPointerUp={end}
                    onKeyDown={begin}
                    onKeyUp={end}
                    onBlur={end}
                    onChange={(event) =>
                      patch(active.id, {
                        opacity: Number(event.target.value) / 100,
                      })
                    }
                  />
                </label>
                <div className="lb-numbers">
                  {numeric("x", "X")}
                  {numeric("y", "Y")}
                  {numeric("width", "宽度", 1, 100000)}
                  {numeric("height", "高度", 1, 100000)}
                  {numeric("rotation", "旋转", -36000, 36000)}
                </div>
                <div className="lb-transforms">
                  <button
                    disabled={!editable}
                    onClick={() =>
                      patch(active.id, {
                        rotation: (active.rotation + 90) % 360,
                      })
                    }
                  >
                    旋转 90°
                  </button>
                  <button
                    disabled={!editable}
                    aria-pressed={active.flipX}
                    onClick={() => patch(active.id, { flipX: !active.flipX })}
                  >
                    水平翻转
                  </button>
                  <button
                    disabled={!editable}
                    aria-pressed={active.flipY}
                    onClick={() => patch(active.id, { flipY: !active.flipY })}
                  >
                    垂直翻转
                  </button>
                  <button
                    disabled={!editable}
                    onClick={() => {
                      const scale = Math.min(
                        document!.width / active.content.width,
                        document!.height / active.content.height,
                      );
                      const width = active.content.width * scale,
                        height = active.content.height * scale;
                      patch(active.id, {
                        width,
                        height,
                        x: (document!.width - width) / 2,
                        y: (document!.height - height) / 2,
                        rotation: 0,
                      });
                    }}
                  >
                    适应画布
                  </button>
                </div>
                {active.content.kind === "text" && (
                  <>
                    <label>
                      文字内容
                      <textarea
                        aria-label="图层文字内容"
                        maxLength={10000}
                        rows={3}
                        value={active.content.text}
                        disabled={!editable}
                        onFocus={begin}
                        onBlur={end}
                        onChange={(event) => {
                          if (active.content.kind === "text")
                            patch(active.id, {
                              content: {
                                ...active.content,
                                text: event.target.value,
                              },
                            });
                        }}
                      />
                    </label>
                    <label>
                      字号
                      <input
                        aria-label="文字字号"
                        type="number"
                        min="4"
                        max="1000"
                        value={active.content.fontSize}
                        disabled={!editable}
                        onFocus={begin}
                        onBlur={end}
                        onChange={(event) => {
                          const size = event.target.valueAsNumber;
                          if (
                            active.content.kind === "text" &&
                            size >= 4 &&
                            size <= 1000
                          )
                            patch(active.id, {
                              content: { ...active.content, fontSize: size },
                            });
                        }}
                      />
                    </label>
                  </>
                )}
                {active.content.kind !== "image" && (
                  <label>
                    颜色
                    <input
                      aria-label="图层颜色"
                      type="color"
                      disabled={!editable}
                      value={active.content.color}
                      onFocus={begin}
                      onBlur={end}
                      onChange={(event) => {
                        if (active.content.kind !== "image")
                          patch(active.id, {
                            content: {
                              ...active.content,
                              color: event.target.value,
                            },
                          });
                      }}
                    />
                  </label>
                )}
                <div className="lb-mask-info">
                  <span>手绘蒙版 · {active.mask.length} 笔</span>
                  <button
                    disabled={!editable || !active.mask.length}
                    onClick={() => patch(active.id, { mask: [] })}
                  >
                    清空蒙版
                  </button>
                </div>
                <p className="lb-hint">
                  擦除隐藏区域，恢复找回原始像素。每一笔可撤销；透明区域不会填入
                  AI 内容。
                </p>
              </section>
            )}
            <section className="lb-document-properties">
              <h3>画布</h3>
              <div className="lb-numbers">
                <label>
                  宽
                  <input
                    aria-label="画布宽度"
                    type="number"
                    min="1"
                    max="8192"
                    value={
                      Number.isFinite(canvasSize.width) ? canvasSize.width : ""
                    }
                    onChange={(event) =>
                      setCanvasSize((size) => ({
                        ...size,
                        width: event.target.valueAsNumber,
                      }))
                    }
                  />
                </label>
                <label>
                  高
                  <input
                    aria-label="画布高度"
                    type="number"
                    min="1"
                    max="8192"
                    value={
                      Number.isFinite(canvasSize.height)
                        ? canvasSize.height
                        : ""
                    }
                    onChange={(event) =>
                      setCanvasSize((size) => ({
                        ...size,
                        height: event.target.valueAsNumber,
                      }))
                    }
                  />
                </label>
              </div>
              <button
                className="lb-wide"
                disabled={!document || busy}
                onClick={() => {
                  try {
                    assertLayerSize(canvasSize.width, canvasSize.height);
                    update((doc) => ({ ...doc, ...canvasSize }));
                  } catch (error) {
                    setError(failure(error));
                  }
                }}
              >
                调整画布尺寸
              </button>
              <p className="lb-hint">只调整边界；放大画布会留下透明区域。</p>
              <label>
                背景
                <select
                  aria-label="图层画布背景"
                  value={document?.background ?? "transparent"}
                  disabled={!document}
                  onChange={(event) =>
                    update((doc) => ({
                      ...doc,
                      background: event.target.value,
                    }))
                  }
                >
                  <option value="transparent">透明</option>
                  <option value="#ffffff">白色</option>
                  <option value="#000000">黑色</option>
                </select>
              </label>
            </section>
            <section className="lb-ai-note">
              <CanvasIcon name="sparkle" size={16} />
              <div>
                AI 图层分解、抠图与扩图
                <p>尚未连接真实生成服务。这里的蒙版与图层操作由你手动完成。</p>
              </div>
            </section>
          </aside>
        </div>
        {(error || notice) && (
          <div
            className={error ? "lb-message is-error" : "lb-message"}
            role={error ? "alert" : "status"}
          >
            {error || notice}
            <button
              aria-label="关闭提示"
              onClick={() => {
                setError("");
                setNotice("");
              }}
            >
              ×
            </button>
          </div>
        )}
        <footer className="lb-footer">
          <div>
            <button onClick={() => jsonRef.current?.click()} disabled={busy}>
              打开图层文件
            </button>
            <button
              onClick={() => void output("json")}
              disabled={!document || busy}
            >
              保存图层文件
            </button>
            <span>图层文件保留可编辑内容；应用将合成 PNG。</span>
          </div>
          <div>
            <button
              onClick={() => void output("png")}
              disabled={!document || busy}
            >
              <CanvasIcon name="download" size={16} />
              导出 PNG
            </button>
            <button
              className="lb-primary"
              onClick={() => void output("apply")}
              disabled={!document || busy}
            >
              {busy ? "处理中…" : "应用到画布"}
            </button>
          </div>
        </footer>
        <input
          ref={inputRef}
          className="lb-file-input"
          type="file"
          accept="image/*"
          multiple
          onChange={(event) => {
            if (event.target.files?.length)
              void importImages([...event.target.files]);
            event.target.value = "";
          }}
        />
        <input
          ref={jsonRef}
          className="lb-file-input"
          type="file"
          accept=".json,application/json"
          onChange={(event) => {
            const file = event.target.files?.[0];
            event.target.value = "";
            if (!file) return;
            if (file.size > 128 * 1024 * 1024) {
              setError("图层文件超过 128 MB，请使用较小的素材。");
              return;
            }
            const token = session.current;
            setBusy(true);
            void file
              .text()
              .then(async (text) => {
                const next = parseLayerDocument(text);
                await cache.current.images(next);
                if (mounted.current && session.current === token) {
                  install(next);
                  setError("");
                  setNotice("已打开可编辑图层文件。");
                }
              })
              .catch((error) => {
                if (mounted.current && session.current === token)
                  setError(failure(error));
              })
              .finally(() => {
                if (mounted.current && session.current === token)
                  setBusy(false);
              });
          }}
        />
      </section>
    </div>
  );
}

export default LayerBoard;
