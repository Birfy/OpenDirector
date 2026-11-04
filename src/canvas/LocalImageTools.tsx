import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { CanvasNode } from "./model";
import {
  createCanvasToolTask,
  type CanvasToolTask,
  type ToolSelection,
} from "./toolCatalog";
import { EditorModal } from "./EditorModal";
import { loadLayerImage } from "./layerRenderer";
import { useT } from "../i18n/I18nProvider.tsx";
import "./local-media-tools.css";

export interface LocalImageOutput {
  src: string;
  mimeType: "image/png";
  title: string;
  width: number;
  height: number;
}
type Shape = {
  kind: "pen" | "erase" | "rectangle" | "ellipse" | "arrow" | "text";
  points: { x: number; y: number }[];
  color: string;
  size: number;
  text: string;
};
export function LocalImageTools({
  node,
  mode,
  onApply,
  onSelection,
  onClose,
}: {
  node: CanvasNode;
  mode: "annotation" | "grid" | "mask";
  onApply: (
    outputs: LocalImageOutput[],
    task: CanvasToolTask,
  ) => boolean | void | Promise<boolean | void>;
  onSelection?: (selection: ToolSelection) => void;
  onClose: () => void;
}) {
  const t = useT();
  const [busy, setBusy] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null),
    [error, setError] = useState("");
  const [shapes, setShapes] = useState<Shape[]>([]),
    [future, setFuture] = useState<Shape[][]>([]),
    [past, setPast] = useState<Shape[][]>([]);
  const [tool, setTool] = useState<Shape["kind"]>("pen"),
    [color, setColor] = useState("#ff5577"),
    [size, setSize] = useState(16),
    [text, setText] = useState(() => t("tools.localImage.defaultText"));
  const [rows, setRows] = useState(3),
    [columns, setColumns] = useState(3),
    [draft, setDraft] = useState<Shape | null>(null);
  const canvas = useRef<HTMLCanvasElement>(null),
    current = useRef<Shape | null>(null);
  const pointerId = useRef<number | null>(null);
  const cancelStroke = () => {
    const id = pointerId.current;
    pointerId.current = null;
    current.current = null;
    setDraft(null);
    if (id !== null && canvas.current?.hasPointerCapture(id))
      canvas.current.releasePointerCapture(id);
  };
  useEffect(() => {
    window.addEventListener("blur", cancelStroke);
    return () => window.removeEventListener("blur", cancelStroke);
  }, []);
  useEffect(() => {
    let live = true;
    if (!node.data.src) {
      setError(t("tools.localImage.error.noImage"));
      return;
    }
    void loadLayerImage(node.data.src)
      .then((image) => {
        if (live) setImage(image);
      })
      .catch((error) => {
        if (live)
          setError(
            error instanceof Error
              ? error.message
              : t("tools.localImage.error.load"),
          );
      });
    return () => {
      live = false;
    };
  }, [node.data.src]);
  const paint = (
    ctx: CanvasRenderingContext2D,
    shape: Shape,
    mask: boolean,
  ) => {
    const first = shape.points[0],
      last = shape.points.at(-1);
    if (!first || !last) return;
    ctx.save();
    ctx.globalCompositeOperation =
      shape.kind === "erase" ? "destination-out" : "source-over";
    ctx.strokeStyle = mask ? "#ffffff" : shape.color;
    ctx.fillStyle = mask ? "#ffffff" : shape.color;
    ctx.lineWidth = shape.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const width = last.x - first.x,
      height = last.y - first.y;
    if (shape.kind === "text") {
      ctx.font = `600 ${shape.size * 3}px system-ui`;
      ctx.textBaseline = "top";
      ctx.fillText(shape.text, first.x, first.y);
    } else if (shape.kind === "rectangle") {
      if (mask) ctx.fillRect(first.x, first.y, width, height);
      else ctx.strokeRect(first.x, first.y, width, height);
    } else if (shape.kind === "ellipse") {
      ctx.beginPath();
      ctx.ellipse(
        (first.x + last.x) / 2,
        (first.y + last.y) / 2,
        Math.abs(width) / 2,
        Math.abs(height) / 2,
        0,
        0,
        Math.PI * 2,
      );
      mask ? ctx.fill() : ctx.stroke();
    } else if (shape.kind === "arrow") {
      ctx.beginPath();
      ctx.moveTo(first.x, first.y);
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
      const angle = Math.atan2(height, width),
        length = Math.max(shape.size * 3, 20);
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(
        last.x - length * Math.cos(angle - 0.45),
        last.y - length * Math.sin(angle - 0.45),
      );
      ctx.lineTo(
        last.x - length * Math.cos(angle + 0.45),
        last.y - length * Math.sin(angle + 0.45),
      );
      ctx.closePath();
      ctx.fill();
    } else if (shape.points.length === 1) {
      ctx.beginPath();
      ctx.arc(first.x, first.y, shape.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(first.x, first.y);
      shape.points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
      ctx.stroke();
    }
    ctx.restore();
  };
  const raster = (list: Shape[], mask = false) => {
    const layer = document.createElement("canvas");
    layer.width = image!.naturalWidth;
    layer.height = image!.naturalHeight;
    const ctx = layer.getContext("2d");
    if (!ctx) throw new Error(t("tools.localImage.error.noCanvas"));
    list.forEach((shape) => paint(ctx, shape, mask));
    return layer;
  };
  useEffect(() => {
    if (!image || !canvas.current) return;
    try {
      const target = canvas.current;
      const scale = Math.min(
        1,
        1400 / Math.max(image.naturalWidth, image.naturalHeight),
      );
      target.width = Math.round(image.naturalWidth * scale);
      target.height = Math.round(image.naturalHeight * scale);
      const ctx = target.getContext("2d")!;
      ctx.scale(scale, scale);
      ctx.drawImage(image, 0, 0);
      if (mode === "grid") {
        ctx.strokeStyle = "#c8adff";
        ctx.lineWidth = 2 / scale;
        for (let row = 1; row < rows; row++) {
          ctx.beginPath();
          ctx.moveTo(0, (image.naturalHeight * row) / rows);
          ctx.lineTo(image.naturalWidth, (image.naturalHeight * row) / rows);
          ctx.stroke();
        }
        for (let column = 1; column < columns; column++) {
          ctx.beginPath();
          ctx.moveTo((image.naturalWidth * column) / columns, 0);
          ctx.lineTo(
            (image.naturalWidth * column) / columns,
            image.naturalHeight,
          );
          ctx.stroke();
        }
      } else {
        const overlay = raster(
          draft ? [...shapes, draft] : shapes,
          mode === "mask",
        );
        if (mode === "mask") {
          const m = overlay.getContext("2d")!;
          m.globalCompositeOperation = "source-in";
          m.fillStyle = "#ec5478";
          m.fillRect(0, 0, overlay.width, overlay.height);
          ctx.globalAlpha = 0.55;
        }
        ctx.drawImage(overlay, 0, 0);
      }
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : t("tools.localImage.error.preview"),
      );
    }
  }, [image, shapes, draft, rows, columns, mode]);
  const position = (event: PointerEvent<HTMLCanvasElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return {
      x: Math.max(
        0,
        Math.min(
          image!.naturalWidth,
          ((event.clientX - bounds.left) * image!.naturalWidth) / bounds.width,
        ),
      ),
      y: Math.max(
        0,
        Math.min(
          image!.naturalHeight,
          ((event.clientY - bounds.top) * image!.naturalHeight) / bounds.height,
        ),
      ),
    };
  };
  const commit = (next: Shape[]) => {
    setPast((list) => [...list, shapes].slice(-40));
    setShapes(next);
    setFuture([]);
  };
  const apply = async () => {
    if (busy) return;
    if (!image) return;
    setBusy(true);
    try {
      if (mode === "mask") {
        const mask = raster(shapes, true),
          ctx = mask.getContext("2d")!;
        const pixels = ctx.getImageData(0, 0, mask.width, mask.height).data;
        let found = false;
        for (let i = 3; i < pixels.length; i += 4) {
          if (pixels[i]) {
            found = true;
            break;
          }
        }
        if (!found) throw new Error(t("tools.localImage.error.emptyMask"));
        onSelection?.({
          sourceNodeId: node.id,
          width: image.naturalWidth,
          height: image.naturalHeight,
          maskDataUrl: mask.toDataURL("image/png"),
          boxes: shapes
            .filter((shape) => shape.kind === "rectangle")
            .map((shape) => {
              const a = shape.points[0]!,
                b = shape.points.at(-1)!;
              return {
                x: Math.max(0, Math.min(a.x, b.x)),
                y: Math.max(0, Math.min(a.y, b.y)),
                width: Math.abs(b.x - a.x),
                height: Math.abs(b.y - a.y),
              };
            })
            .filter((box) => box.width > 0 && box.height > 0),
        });
        onClose();
        return;
      }
      const outputs: LocalImageOutput[] = [];
      if (mode === "grid") {
        if (rows > image.naturalHeight || columns > image.naturalWidth)
          throw new Error(t("tools.localImage.error.gridTooLarge"));
        for (let row = 0; row < rows; row++)
          for (let column = 0; column < columns; column++) {
            const x = Math.floor((column * image.naturalWidth) / columns),
              y = Math.floor((row * image.naturalHeight) / rows),
              width =
                Math.floor(((column + 1) * image.naturalWidth) / columns) - x,
              height = Math.floor(((row + 1) * image.naturalHeight) / rows) - y;
            const out = document.createElement("canvas");
            out.width = width;
            out.height = height;
            out
              .getContext("2d")!
              .drawImage(image, x, y, width, height, 0, 0, width, height);
            outputs.push({
              src: out.toDataURL("image/png"),
              mimeType: "image/png",
              title: `${node.data.title} · ${row + 1}-${column + 1}`,
              width,
              height,
            });
          }
      } else {
        const out = document.createElement("canvas");
        out.width = image.naturalWidth;
        out.height = image.naturalHeight;
        const ctx = out.getContext("2d")!;
        ctx.drawImage(image, 0, 0);
        ctx.drawImage(raster(shapes), 0, 0);
        outputs.push({
          src: out.toDataURL("image/png"),
          mimeType: "image/png",
          title: `${node.data.title} · ${t(
            "tools.localImage.output.annotation",
          )}`,
          width: out.width,
          height: out.height,
        });
      }
      if (
        (await onApply(
          outputs,
          createCanvasToolTask(
            mode === "grid" ? "grid-split" : "annotation",
            [node.id],
            mode === "grid"
              ? { rows, columns }
              : { annotationDocument: JSON.stringify(shapes) },
          ),
        )) === false
      )
        throw Error(t("tools.localImage.error.notSaved"));
      onClose();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : t("tools.localImage.error.export"),
      );
    } finally {
      setBusy(false);
    }
  };
  return (
    <EditorModal
      title={`${
        mode === "grid"
          ? t("tools.localImage.title.grid")
          : mode === "mask"
            ? t("tools.localImage.title.mask")
            : t("tools.localImage.title.annotation")
      } · ${node.data.title}`}
      subtitle={
        mode === "mask"
          ? t("tools.localImage.subtitle.mask")
          : t("tools.localImage.subtitle.default")
      }
      onClose={() => {
        if (!busy) onClose();
      }}
      onApply={apply}
      applyLabel={
        mode === "mask"
          ? t("tools.localImage.apply.mask")
          : mode === "grid"
            ? t("tools.localImage.apply.grid", { count: rows * columns })
            : t("tools.localImage.apply.annotation")
      }
      disabled={busy || !image}
      error={error}
    >
      <div className="cw-local-media-controls">
        {mode === "grid" ? (
          <>
            <label>
              {t("tools.localImage.grid.rows")}
              <input
                aria-label={t("tools.localImage.grid.rowsAria")}
                type="number"
                min="1"
                max="8"
                value={rows}
                onChange={(event) => {
                  const value = event.target.valueAsNumber;
                  if (Number.isInteger(value) && value >= 1 && value <= 8)
                    setRows(value);
                }}
              />
            </label>
            <label>
              {t("tools.localImage.grid.columns")}
              <input
                aria-label={t("tools.localImage.grid.columnsAria")}
                type="number"
                min="1"
                max="8"
                value={columns}
                onChange={(event) => {
                  const value = event.target.valueAsNumber;
                  if (Number.isInteger(value) && value >= 1 && value <= 8)
                    setColumns(value);
                }}
              />
            </label>
            <span>{t("tools.localImage.grid.hint")}</span>
          </>
        ) : (
          <>
            <label>
              {t("tools.localImage.tool.label")}
              <select
                aria-label={t("tools.localImage.tool.aria")}
                value={tool}
                onChange={(event) =>
                  setTool(event.target.value as Shape["kind"])
                }
              >
                <option value="pen">{t("tools.localImage.tool.pen")}</option>
                <option value="erase">{t("tools.localImage.tool.erase")}</option>
                <option value="rectangle">
                  {t("tools.localImage.tool.rectangle")}
                </option>
                <option value="ellipse">
                  {t("tools.localImage.tool.ellipse")}
                </option>
                {mode !== "mask" && (
                  <>
                    <option value="arrow">
                      {t("tools.localImage.tool.arrow")}
                    </option>
                    <option value="text">
                      {t("tools.localImage.tool.text")}
                    </option>
                  </>
                )}
              </select>
            </label>
            <label>
              {t("tools.localImage.size.label")}
              <input
                aria-label={t("tools.localImage.size.aria")}
                type="range"
                min="2"
                max="100"
                value={size}
                onChange={(event) => setSize(Number(event.target.value))}
              />
              <output>{size}px</output>
            </label>
            {mode !== "mask" && (
              <label>
                {t("tools.localImage.color.label")}
                <input
                  aria-label={t("tools.localImage.color.aria")}
                  type="color"
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                />
              </label>
            )}
            {tool === "text" && (
              <label>
                {t("tools.localImage.text.label")}
                <input
                  aria-label={t("tools.localImage.text.aria")}
                  value={text}
                  maxLength={500}
                  onChange={(event) => setText(event.target.value)}
                />
              </label>
            )}
            <button
              disabled={!past.length}
              onClick={() => {
                const previous = past.at(-1)!;
                setFuture((list) => [shapes, ...list]);
                setPast(past.slice(0, -1));
                setShapes(previous);
              }}
            >
              {t("tools.localImage.undo")}
            </button>
            <button
              disabled={!future.length}
              onClick={() => {
                setPast((list) => [...list, shapes]);
                setShapes(future[0]!);
                setFuture(future.slice(1));
              }}
            >
              {t("tools.localImage.redo")}
            </button>
            <button disabled={!shapes.length} onClick={() => commit([])}>
              {t("tools.localImage.clear")}
            </button>
          </>
        )}
      </div>
      <div className="cw-local-image-surface">
        <canvas
          ref={canvas}
          aria-label={t("tools.localImage.canvasAria")}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Escape" && current.current) {
              event.preventDefault();
              event.stopPropagation();
              cancelStroke();
            }
          }}
          onPointerDown={(event) => {
            if (
              !image ||
              mode === "grid" ||
              event.button !== 0 ||
              !event.isPrimary ||
              pointerId.current !== null
            )
              return;
            event.preventDefault();
            pointerId.current = event.pointerId;
            event.currentTarget.focus();
            event.currentTarget.setPointerCapture(event.pointerId);
            const shape: Shape = {
              kind: tool,
              points: [position(event)],
              color,
              size,
              text,
            };
            current.current = shape;
            setDraft(shape);
          }}
          onPointerMove={(event) => {
            const shape = current.current;
            if (!shape || !image || pointerId.current !== event.pointerId)
              return;
            const at = position(event);
            const next = {
              ...shape,
              points: ["pen", "erase"].includes(shape.kind)
                ? [...shape.points, at]
                : [shape.points[0]!, at],
            };
            current.current = next;
            setDraft(next);
          }}
          onPointerUp={(event) => {
            if (!current.current || pointerId.current !== event.pointerId)
              return;
            commit([...shapes, current.current]);
            cancelStroke();
          }}
          onPointerCancel={(event) => {
            if (pointerId.current === event.pointerId) cancelStroke();
          }}
          onLostPointerCapture={(event) => {
            if (pointerId.current === event.pointerId) cancelStroke();
          }}
        />
      </div>
    </EditorModal>
  );
}
