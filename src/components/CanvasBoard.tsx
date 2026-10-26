import { useState } from "react";
import { Artwork, type ArtKind } from "./Artwork";
import { Icon } from "./Icon";

interface CanvasItem {
  id: string;
  kind: ArtKind;
  x: number;
  y: number;
}
const initialItems: CanvasItem[] = [
  { id: "landscape", kind: "landscape", x: 52, y: 72 },
  { id: "orbit", kind: "orbit", x: 348, y: 156 },
];

export function CanvasBoard() {
  const [items, setItems] = useState(initialItems);
  const [selected, setSelected] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [message, setMessage] = useState("选择画面后，可以用方向键移动它。");
  const addItem = () => {
    const id = crypto.randomUUID();
    setItems((current) => [
      ...current,
      {
        id,
        kind: (["poster", "chair", "portrait", "wave"] as ArtKind[])[
          current.length % 4
        ]!,
        x: 80 + (current.length % 4) * 75,
        y: 65 + (current.length % 3) * 60,
      },
    ]);
    setSelected(id);
    setMessage("已添加一张本地示例画面。");
  };
  const exportLayout = () => {
    const url = URL.createObjectURL(
      new Blob(
        [
          JSON.stringify(
            {
              version: 1,
              description: "Local study canvas layout; authored illustrations",
              items,
            },
            null,
            2,
          ),
        ],
        { type: "application/json" },
      ),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "study-canvas.json";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage("画布位置已导出为 JSON，可查看和学习数据结构。");
  };
  return (
    <section className="canvas-section" aria-label="本地灵感画布">
      <div className="canvas-toolbar">
        <div>
          <Icon name="canvas" size={19} />
          <strong>我的灵感画布</strong>
          <span>本地布局练习</span>
        </div>
        <div>
          <button onClick={addItem}>
            <Icon name="plus" size={16} />
            添加画面
          </button>
          <button onClick={exportLayout}>
            <Icon name="download" size={16} />
            <span>导出布局</span>
          </button>
        </div>
      </div>
      <div className="canvas-viewport">
        <div
          className="canvas-surface"
          style={{ width: 850 * scale, height: 520 * scale }}
        >
          <div
            className="canvas-scale"
            style={{ transform: `scale(${scale})` }}
          >
            <div className="canvas-sticky">
              <span>01 / 灵感收集</span>
              <p>
                让不同的想法，
                <br />
                在同一张画布里相遇。
              </p>
              <small>示例素材 · 键盘可编辑</small>
            </div>
            {items.map((item) => (
              <button
                key={item.id}
                className={`canvas-item ${selected === item.id ? "is-selected" : ""}`}
                style={{ left: item.x, top: item.y }}
                onClick={() => setSelected(item.id)}
                aria-label={`${item.kind} 画面，方向键移动`}
                onKeyDown={(event) => {
                  const movements: Record<string, [number, number]> = {
                    ArrowUp: [0, -10],
                    ArrowDown: [0, 10],
                    ArrowLeft: [-10, 0],
                    ArrowRight: [10, 0],
                  };
                  const movement = movements[event.key];
                  if (movement) {
                    event.preventDefault();
                    setItems((current) =>
                      current.map((node) =>
                        node.id === item.id
                          ? {
                              ...node,
                              x: Math.max(
                                0,
                                Math.min(590, node.x + movement[0]),
                              ),
                              y: Math.max(
                                0,
                                Math.min(310, node.y + movement[1]),
                              ),
                            }
                          : node,
                      ),
                    );
                  }
                  if (event.key === "Delete" || event.key === "Backspace") {
                    event.preventDefault();
                    setItems((current) =>
                      current.filter((node) => node.id !== item.id),
                    );
                    setSelected(null);
                    setMessage("已移除选中的画面。");
                  }
                }}
              >
                <Artwork kind={item.kind} />
                <span>灵感片段 · {item.kind}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="canvas-footer">
        <p role="status">{message}</p>
        <div>
          {selected && (
            <button
              onClick={() => {
                setItems((current) =>
                  current.filter((item) => item.id !== selected),
                );
                setSelected(null);
                setMessage("已移除选中的画面。");
              }}
            >
              移除所选
            </button>
          )}
          <button
            onClick={() =>
              setScale((value) => Math.max(0.5, +(value - 0.1).toFixed(1)))
            }
            disabled={scale <= 0.5}
            aria-label="缩小画布"
          >
            −
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button
            onClick={() =>
              setScale((value) => Math.min(1.5, +(value + 0.1).toFixed(1)))
            }
            disabled={scale >= 1.5}
            aria-label="放大画布"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}
