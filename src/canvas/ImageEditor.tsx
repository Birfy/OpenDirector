import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type PointerEvent,
} from "react";
import type { CanvasNode } from "./model";
import { LayerBoard } from "./LayerBoard";
import type { LayerDocument } from "./layerDocument";
import "./image-editor.css";

export interface ImageEditorProps {
  node: CanvasNode;
  onApply: (src: string, layers?: LayerDocument) => void;
  onClose: () => void;
  initialTab?: "crop" | "layers";
  initialLayers?: LayerDocument;
}

type Aspect = "free" | "original" | "1:1" | "4:3" | "3:4" | "16:9" | "9:16";
interface EditOptions {
  rotation: number;
  flipX: boolean;
  flipY: boolean;
  aspect: Aspect;
  zoom: number;
  freeWidth: number;
  freeHeight: number;
  x: number;
  y: number;
  brightness: number;
  contrast: number;
  saturation: number;
}
interface Crop {
  x: number;
  y: number;
  width: number;
  height: number;
  imageWidth: number;
  imageHeight: number;
}

const INITIAL_OPTIONS: EditOptions = {
  rotation: 0,
  flipX: false,
  flipY: false,
  aspect: "original",
  zoom: 100,
  freeWidth: 100,
  freeHeight: 100,
  x: 50,
  y: 50,
  brightness: 100,
  contrast: 100,
  saturation: 100,
};

function calculateCrop(image: HTMLImageElement, options: EditOptions): Crop {
  const turned = options.rotation % 180 !== 0;
  const imageWidth = turned ? image.naturalHeight : image.naturalWidth;
  const imageHeight = turned ? image.naturalWidth : image.naturalHeight;
  if (options.aspect === "free") {
    const width = Math.max(1, (imageWidth * options.freeWidth) / 100);
    const height = Math.max(1, (imageHeight * options.freeHeight) / 100);
    return {
      x: ((imageWidth - width) * options.x) / 100,
      y: ((imageHeight - height) * options.y) / 100,
      width,
      height,
      imageWidth,
      imageHeight,
    };
  }
  const [ratioWidth, ratioHeight] =
    options.aspect === "original"
      ? [imageWidth, imageHeight]
      : options.aspect.split(":").map(Number);
  const ratio = ratioWidth! / ratioHeight!;
  const baseWidth = Math.min(imageWidth, imageHeight * ratio);
  const width = baseWidth / (options.zoom / 100);
  const height = width / ratio;
  return {
    x: ((imageWidth - width) * options.x) / 100,
    y: ((imageHeight - height) * options.y) / 100,
    width,
    height,
    imageWidth,
    imageHeight,
  };
}

/** The preview and exported PNG share the same transform, crop and pixel filters. */
function renderImage(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  options: EditOptions,
  preview = false,
): Crop {
  const crop = calculateCrop(image, options);
  const scale = preview
    ? Math.min(1, 1200 / Math.max(crop.width, crop.height))
    : 1;
  canvas.width = Math.max(1, Math.round(crop.width * scale));
  canvas.height = Math.max(1, Math.round(crop.height * scale));
  const context = canvas.getContext("2d");
  if (!context) throw new Error("浏览器无法创建图片编辑画布。");
  if (!("filter" in context))
    throw new Error(
      "当前浏览器不支持 Canvas2D 图片滤镜，请使用新版 Brave 或 Chrome。",
    );
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.filter = `brightness(${options.brightness}%) contrast(${options.contrast}%) saturate(${options.saturation}%)`;
  context.scale(canvas.width / crop.width, canvas.height / crop.height);
  context.translate(-crop.x, -crop.y);
  context.translate(crop.imageWidth / 2, crop.imageHeight / 2);
  // Flip in the visible, rotated image's axes rather than the original image's axes.
  context.scale(options.flipX ? -1 : 1, options.flipY ? -1 : 1);
  context.rotate((options.rotation * Math.PI) / 180);
  context.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
  return crop;
}

function localImageSource(src: string): boolean {
  if (/^data:image\//i.test(src)) return true;
  try {
    const url = new URL(src, window.location.href);
    return (
      (url.protocol === "blob:" && url.origin === window.location.origin) ||
      ((url.protocol === "http:" || url.protocol === "https:") &&
        url.origin === window.location.origin)
    );
  } catch {
    return false;
  }
}

function failureMessage(error: unknown): string {
  return error instanceof Error ? error.message : "图片编辑未完成，请重试。";
}

export function ImageEditor({
  initialTab = "crop",
  initialLayers,
  ...props
}: ImageEditorProps) {
  const [tab, setTab] = useState(initialTab);
  const [layerSource, setLayerSource] = useState(props.node.data.src);
  const [layers, setLayers] = useState(initialLayers);
  return tab === "layers" ? (
    <LayerBoard
      src={layerSource}
      title={props.node.data.title}
      initialDocument={layers}
      onApply={props.onApply}
      onClose={props.onClose}
    />
  ) : (
    <CropEditor
      {...props}
      onOpenLayers={(src, unchanged) => {
        setLayerSource(src);
        setLayers(unchanged ? initialLayers : undefined);
        setTab("layers");
      }}
    />
  );
}

function CropEditor({
  node,
  onApply,
  onClose,
  onOpenLayers,
}: ImageEditorProps & {
  onOpenLayers: (src: string, unchanged: boolean) => void;
}) {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [options, setOptions] = useState<EditOptions>({ ...INITIAL_OPTIONS });
  const [loadError, setLoadError] = useState("");
  const [renderError, setRenderError] = useState("");
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  const id = useId();
  closeRef.current = onClose;
  const crop = useMemo(
    () => (image ? calculateCrop(image, options) : null),
    [image, options],
  );
  const error = loadError || renderError;
  const cropDrag = useRef<{
    id: number;
    x: number;
    y: number;
    options: EditOptions;
    crop: Crop;
    bounds: DOMRect;
    resize: boolean;
  } | null>(null);
  const startCrop = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !crop || !canvasRef.current) return;
    event.preventDefault();
    cropDrag.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      options: { ...options },
      crop,
      bounds: canvasRef.current.getBoundingClientRect(),
      resize: Boolean((event.target as HTMLElement).closest(".cw-crop-resize")),
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveCrop = (event: PointerEvent<HTMLDivElement>) => {
    const drag = cropDrag.current;
    if (!drag || drag.id !== event.pointerId) return;
    const { crop: c } = drag;
    const dx = ((event.clientX - drag.x) / drag.bounds.width) * c.imageWidth;
    const dy = ((event.clientY - drag.y) / drag.bounds.height) * c.imageHeight;
    const width = drag.resize
      ? Math.max(1, Math.min(c.imageWidth - c.x, c.width + dx))
      : c.width;
    const height = drag.resize
      ? Math.max(1, Math.min(c.imageHeight - c.y, c.height + dy))
      : c.height;
    const x = drag.resize
      ? c.x
      : Math.max(0, Math.min(c.imageWidth - width, c.x + dx));
    const y = drag.resize
      ? c.y
      : Math.max(0, Math.min(c.imageHeight - height, c.y + dy));
    setOptions({
      ...drag.options,
      freeWidth: (width / c.imageWidth) * 100,
      freeHeight: (height / c.imageHeight) * 100,
      x: c.imageWidth === width ? 0 : (x / (c.imageWidth - width)) * 100,
      y: c.imageHeight === height ? 0 : (y / (c.imageHeight - height)) * 100,
    });
  };
  const endCrop = (event: PointerEvent<HTMLDivElement>, cancel = false) => {
    const drag = cropDrag.current;
    if (!drag || drag.id !== event.pointerId) return;
    if (cancel) setOptions(drag.options);
    cropDrag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  };

  useEffect(() => {
    let cancelled = false;
    setImage(null);
    setOptions({ ...INITIAL_OPTIONS });
    setLoadError("");
    setRenderError("");
    setLoading(true);
    const src = node.data.src;
    if (!src) {
      setLoadError("这张图片还没有可编辑的本地素材。请先导入图片。");
      setLoading(false);
      return;
    }
    if (!localImageSource(src)) {
      setLoadError(
        "图片编辑仅支持本地素材，不会下载远程图片。请先将图片文件导入画布。",
      );
      setLoading(false);
      return;
    }
    const source = new Image();
    source.decoding = "async";
    source.onload = () => {
      if (cancelled) return;
      if (!source.naturalWidth || !source.naturalHeight)
        setLoadError("图片没有有效尺寸，无法编辑。");
      else setImage(source);
      setLoading(false);
    };
    source.onerror = () => {
      if (!cancelled) {
        setLoadError(
          "无法读取图片。素材可能已经失效或文件格式不受支持，请重新导入。",
        );
        setLoading(false);
      }
    };
    source.src = src;
    return () => {
      cancelled = true;
      source.onload = null;
      source.onerror = null;
    };
  }, [node.id, node.data.src]);

  useEffect(() => {
    if (!image) return;
    const frame = requestAnimationFrame(() => {
      if (!canvasRef.current) return;
      try {
        renderImage(
          canvasRef.current,
          image,
          options.aspect === "free"
            ? { ...options, aspect: "original", zoom: 100 }
            : options,
          true,
        );
        setRenderError("");
      } catch (error) {
        setRenderError(failureMessage(error));
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [image, options]);

  useEffect(() => {
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeRef.current();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = [
        ...dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]',
        ),
      ];
      const first = focusable[0],
        last = focusable.at(-1);
      if (!first || !last) {
        event.preventDefault();
        return;
      }
      if (
        event.shiftKey &&
        (document.activeElement === first ||
          document.activeElement === dialogRef.current)
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last ||
          document.activeElement === dialogRef.current)
      ) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey, true);
    return () => {
      document.removeEventListener("keydown", handleKey, true);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, []);

  const update = <K extends keyof EditOptions>(key: K, value: EditOptions[K]) =>
    setOptions((current) => ({ ...current, [key]: value }));
  const apply = () => {
    if (!image || applying) return;
    setApplying(true);
    setRenderError("");
    try {
      const output = document.createElement("canvas");
      renderImage(output, image, options);
      const src = output.toDataURL("image/png");
      if (!src.startsWith("data:image/png;base64,"))
        throw new Error(
          "图片尺寸超出当前浏览器的导出能力，请增加裁剪缩放后重试。",
        );
      onApply(src);
      onClose();
    } catch (error) {
      setRenderError(`无法应用编辑：${failureMessage(error)}`);
      setApplying(false);
    }
  };

  const slider = (
    key:
      | "zoom"
      | "freeWidth"
      | "freeHeight"
      | "x"
      | "y"
      | "brightness"
      | "contrast"
      | "saturation",
    label: string,
    min: number,
    max: number,
    disabled = false,
  ) => (
    <label className="cw-editor-slider" htmlFor={`${id}-${key}`}>
      <span>
        {label}
        <output htmlFor={`${id}-${key}`}>
          {Math.round(options[key] * 10) / 10}%
        </output>
      </span>
      <input
        id={`${id}-${key}`}
        type="range"
        min={min}
        max={max}
        step={1}
        value={options[key]}
        disabled={!image || disabled}
        onChange={(event) => update(key, Number(event.target.value))}
      />
    </label>
  );

  return (
    <div
      className="cw-image-editor-overlay"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="cw-image-editor"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        tabIndex={-1}
      >
        <header className="cw-editor-header">
          <div>
            <span className="cw-editor-eyebrow">LOCAL IMAGE EDITOR</span>
            <h2 id={`${id}-title`}>
              编辑图片<span>{node.data.title}</span>
            </h2>
          </div>
          <div className="cw-editor-header-actions">
            <button
              type="button"
              className="cw-editor-layers"
              disabled={!image || applying}
              onClick={() => {
                if (!image) return;
                try {
                  const unchanged = (
                    Object.keys(INITIAL_OPTIONS) as (keyof EditOptions)[]
                  ).every((key) => options[key] === INITIAL_OPTIONS[key]);
                  if (unchanged && node.data.src)
                    onOpenLayers(node.data.src, true);
                  else {
                    const output = document.createElement("canvas");
                    renderImage(output, image, options);
                    const src = output.toDataURL("image/png");
                    if (!src.startsWith("data:image/png;base64,"))
                      throw new Error("无法导出裁剪结果，请缩小图片后重试。");
                    onOpenLayers(src, false);
                  }
                } catch (error) {
                  setRenderError(failureMessage(error));
                }
              }}
            >
              图层工作台
            </button>
            <button
              type="button"
              className="cw-editor-close"
              onClick={onClose}
              aria-label="关闭图片编辑"
            >
              ×
            </button>
          </div>
        </header>
        <div className="cw-editor-body">
          <div className="cw-editor-preview-panel">
            <div
              className={`cw-editor-preview ${loading || !image ? "is-empty" : ""}`}
            >
              {loading && (
                <div className="cw-editor-loading" role="status">
                  <span />
                  正在读取本地图片…
                </div>
              )}
              {!loading && !image && (
                <div className="cw-editor-empty">
                  <span aria-hidden="true">▧</span>
                  <p>没有可编辑的预览</p>
                </div>
              )}
              <div
                className="cw-crop-stage"
                style={
                  crop
                    ? {
                        width: `min(100%, ${510 * (options.aspect === "free" ? crop.imageWidth / crop.imageHeight : crop.width / crop.height)}px)`,
                      }
                    : undefined
                }
              >
                <canvas
                  ref={canvasRef}
                  className={!image ? "cw-editor-hidden" : ""}
                  aria-label="裁剪和色彩调整后的图片预览"
                />
                {options.aspect === "free" && crop && (
                  <div
                    className="cw-free-crop"
                    aria-label="自由裁剪区域，拖动移动，右下角调整宽高"
                    style={{
                      left: `${(crop.x / crop.imageWidth) * 100}%`,
                      top: `${(crop.y / crop.imageHeight) * 100}%`,
                      width: `${(crop.width / crop.imageWidth) * 100}%`,
                      height: `${(crop.height / crop.imageHeight) * 100}%`,
                    }}
                    onPointerDown={startCrop}
                    onPointerMove={moveCrop}
                    onPointerUp={(e) => endCrop(e)}
                    onPointerCancel={(e) => endCrop(e, true)}
                    onLostPointerCapture={(e) => endCrop(e, true)}
                  >
                    <span className="cw-crop-resize" aria-hidden="true" />
                  </div>
                )}
              </div>
            </div>
            <div className="cw-editor-preview-meta">
              <span>
                {image
                  ? `原图 ${image.naturalWidth} × ${image.naturalHeight}`
                  : "本地图片"}
              </span>
              <span>
                {crop
                  ? `输出 ${Math.round(crop.width)} × ${Math.round(crop.height)} · PNG`
                  : "输出 PNG"}
              </span>
            </div>
            <p id={`${id}-description`} className="cw-editor-description">
              预览显示实际裁剪区域。应用后将修改画布中的图片像素，支持画布撤销。
            </p>
          </div>
          <aside className="cw-editor-controls" aria-label="图片编辑参数">
            <section>
              <div className="cw-editor-section-title">
                <h3>裁剪与变换</h3>
                <button
                  type="button"
                  disabled={!image}
                  onClick={() => setOptions({ ...INITIAL_OPTIONS })}
                >
                  重置全部
                </button>
              </div>
              <label className="cw-editor-select" htmlFor={`${id}-aspect`}>
                <span>裁剪比例</span>
                <select
                  id={`${id}-aspect`}
                  value={options.aspect}
                  disabled={!image}
                  onChange={(event) =>
                    update("aspect", event.target.value as Aspect)
                  }
                >
                  <option value="original">原始比例</option>
                  <option value="free">自由裁剪</option>
                  {(["1:1", "4:3", "3:4", "16:9", "9:16"] as const).map(
                    (aspect) => (
                      <option key={aspect} value={aspect}>
                        {aspect}
                      </option>
                    ),
                  )}
                </select>
              </label>
              <div className="cw-editor-transform-buttons">
                <button
                  type="button"
                  disabled={!image}
                  onClick={() =>
                    update("rotation", (options.rotation + 90) % 360)
                  }
                >
                  <span aria-hidden="true">↻</span>旋转 90°
                </button>
                <button
                  type="button"
                  disabled={!image}
                  className={options.flipX ? "active" : ""}
                  aria-pressed={options.flipX}
                  onClick={() => update("flipX", !options.flipX)}
                >
                  <span aria-hidden="true">↔</span>水平翻转
                </button>
                <button
                  type="button"
                  disabled={!image}
                  className={options.flipY ? "active" : ""}
                  aria-pressed={options.flipY}
                  onClick={() => update("flipY", !options.flipY)}
                >
                  <span aria-hidden="true">↕</span>垂直翻转
                </button>
              </div>
              {options.aspect === "free" ? (
                <>
                  {slider("freeWidth", "裁剪宽度", 1, 100)}
                  {slider("freeHeight", "裁剪高度", 1, 100)}
                </>
              ) : (
                slider("zoom", "裁剪缩放", 100, 400)
              )}
              {slider(
                "x",
                "水平位置",
                0,
                100,
                !!crop && Math.abs(crop.imageWidth - crop.width) < 0.01,
              )}
              {slider(
                "y",
                "垂直位置",
                0,
                100,
                !!crop && Math.abs(crop.imageHeight - crop.height) < 0.01,
              )}
            </section>
            <section className="cw-editor-adjustments">
              <div className="cw-editor-section-title">
                <h3>色彩调整</h3>
                <span>实时像素预览</span>
              </div>
              {slider("brightness", "亮度", 0, 200)}
              {slider("contrast", "对比度", 0, 200)}
              {slider("saturation", "饱和度", 0, 200)}
            </section>
            <p className="cw-editor-local-note">
              <span aria-hidden="true">◉</span>所有编辑都在本地浏览器内完成。
            </p>
          </aside>
        </div>
        {error && (
          <p className="cw-editor-error" role="alert">
            {error}
          </p>
        )}
        <footer className="cw-editor-footer">
          <span>PNG 无损导出 · 不上传素材</span>
          <div>
            <button
              type="button"
              className="cw-editor-cancel"
              onClick={onClose}
            >
              取消
            </button>
            <button
              type="button"
              className="cw-editor-apply"
              disabled={!image || loading || applying || !!loadError}
              onClick={apply}
            >
              {applying ? "正在应用…" : "应用编辑"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ImageEditor;
