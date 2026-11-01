import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { CanvasNode } from "./model";
import type { ToolSelection } from "./toolCatalog";
import { EditorModal } from "./EditorModal";
import { loadLayerImage } from "./layerRenderer";
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
  onApply: (outputs: LocalImageOutput[]) => void;
  onSelection?: (selection: ToolSelection) => void;
  onClose: () => void;
}) {
  const [image, setImage] = useState<HTMLImageElement | null>(null),
    [error, setError] = useState("");
  const [shapes, setShapes] = useState<Shape[]>([]),
    [future, setFuture] = useState<Shape[][]>([]),
    [past, setPast] = useState<Shape[][]>([]);
  const [tool, setTool] = useState<Shape["kind"]>("pen"),
    [color, setColor] = useState("#ff5577"),
    [size, setSize] = useState(16),
    [text, setText] = useState("标注文字");
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
      setError("没有可编辑的图片。");
      return;
    }
    void loadLayerImage(node.data.src)
      .then((image) => {
        if (live) setImage(image);
      })
      .catch((error) => {
        if (live)
          setError(error instanceof Error ? error.message : "图片读取失败。");
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
    if (!ctx) throw new Error("浏览器不能创建绘图画布。");
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
      setError(error instanceof Error ? error.message : "预览失败。");
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
  const apply = () => {
    if (!image) return;
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
        if (!found) throw new Error("请先绘制非空选区。");
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
          throw new Error("分格数量不能超过图片像素尺寸。");
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
          title: `${node.data.title} · 标注`,
          width: out.width,
          height: out.height,
        });
      }
      onApply(outputs);
      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : "导出失败。");
    }
  };
  return (
    <EditorModal
      title={`${mode === "grid" ? "图片分格" : mode === "mask" ? "绘制选区" : "图片标注"} · ${node.data.title}`}
      subtitle={
        mode === "mask"
          ? "在原图像素上绘制选区，仅保存蒙版；不会自动识别主体或生成图片。"
          : "所有操作在本地完成，结果作为关联节点加入画布，可整体撤销。"
      }
      onClose={onClose}
      onApply={apply}
      applyLabel={
        mode === "mask"
          ? "使用选区"
          : mode === "grid"
            ? `拆分为 ${rows * columns} 张图片`
            : "保存标注图片"
      }
      disabled={!image}
      error={error}
    >
      <div className="cw-local-media-controls">
        {mode === "grid" ? (
          <>
            <label>
              行数
              <input
                aria-label="分格行数"
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
              列数
              <input
                aria-label="分格列数"
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
            <span>按网格真实裁切；不会推断画面中的分镜边界。</span>
          </>
        ) : (
          <>
            <label>
              工具
              <select
                aria-label="绘图工具"
                value={tool}
                onChange={(event) =>
                  setTool(event.target.value as Shape["kind"])
                }
              >
                <option value="pen">画笔</option>
                <option value="erase">橡皮擦</option>
                <option value="rectangle">矩形</option>
                <option value="ellipse">椭圆</option>
                {mode !== "mask" && (
                  <>
                    <option value="arrow">箭头</option>
                    <option value="text">文字</option>
                  </>
                )}
              </select>
            </label>
            <label>
              粗细
              <input
                aria-label="画笔粗细"
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
                颜色
                <input
                  aria-label="标注颜色"
                  type="color"
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                />
              </label>
            )}
            {tool === "text" && (
              <label>
                文字
                <input
                  aria-label="标注文字"
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
              撤销
            </button>
            <button
              disabled={!future.length}
              onClick={() => {
                setPast((list) => [...list, shapes]);
                setShapes(future[0]!);
                setFuture(future.slice(1));
              }}
            >
              重做
            </button>
            <button disabled={!shapes.length} onClick={() => commit([])}>
              清空
            </button>
          </>
        )}
      </div>
      <div className="cw-local-image-surface">
        <canvas
          ref={canvas}
          aria-label="本地图像工具预览"
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
