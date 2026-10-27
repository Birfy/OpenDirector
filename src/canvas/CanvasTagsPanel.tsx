import {
  CANVAS_TAGS,
  isTaggable,
  tagSelectionState,
  type CanvasTagId,
} from "./nodeTags";
import type { CanvasNode } from "./model";

export function CanvasTagsPanel({
  nodes,
  selectedIds,
  activeTag,
  onActiveTagChange,
  onChange,
  onClear,
  onLocate,
}: {
  nodes: readonly CanvasNode[];
  selectedIds: readonly string[];
  activeTag: CanvasTagId | null;
  onActiveTagChange: (tag: CanvasTagId | null) => void;
  onChange: (tag: CanvasTagId, enabled: boolean) => void;
  onLocate: (id: string) => void;
  onClear: () => void;
}) {
  const eligible = nodes.filter(
    (node) => selectedIds.includes(node.id) && isTaggable(node.type),
  );
  const matching = nodes.filter((node) =>
    activeTag ? node.data.tags?.includes(activeTag) : node.data.tags?.length,
  );
  return (
    <div className="cw-tags-panel">
      <h3>为选中节点设置标签</h3>
      <p className="cw-panel-note">
        {eligible.length
          ? `已选 ${eligible.length} 个可标记节点。锁定节点保持不变。`
          : "选择节点后可批量添加或移除标签。"}
      </p>
      <div className="cw-tags-options">
        {CANVAS_TAGS.map((tag) => {
          const state = tagSelectionState(nodes, selectedIds, tag.id);
          return (
            <button
              key={tag.id}
              role="checkbox"
              aria-checked={state === "partial" ? "mixed" : state === "all"}
              disabled={!eligible.length}
              onClick={() => onChange(tag.id, state !== "all")}
            >
              <i style={{ background: tag.color }} />
              <span>{tag.label}</span>
              <b>{state === "all" ? "✓" : state === "partial" ? "−" : ""}</b>
            </button>
          );
        })}
      </div>
      <button
        className="cw-wide-button"
        disabled={!eligible.some((node) => node.data.tags?.length)}
        onClick={onClear}
      >
        清空所选标签
      </button>
      <h3>按颜色查看</h3>
      <div className="cw-tag-filters" role="group" aria-label="标签筛选">
        <button
          aria-pressed={!activeTag}
          onClick={() => onActiveTagChange(null)}
        >
          全部
        </button>
        {CANVAS_TAGS.map((tag) => (
          <button
            key={tag.id}
            aria-label={tag.label}
            aria-pressed={activeTag === tag.id}
            onClick={() => onActiveTagChange(tag.id)}
          >
            <i style={{ background: tag.color }} />
            {nodes.filter((node) => node.data.tags?.includes(tag.id)).length}
          </button>
        ))}
      </div>
      <div className="cw-node-list">
        {matching.map((node) => (
          <button key={node.id} onClick={() => onLocate(node.id)}>
            <span className="cw-tag-dots">
              {CANVAS_TAGS.filter((tag) =>
                node.data.tags?.includes(tag.id),
              ).map((tag) => (
                <i key={tag.id} style={{ background: tag.color }} />
              ))}
            </span>
            <span>{node.data.title}</span>
          </button>
        ))}
        {!matching.length && (
          <p className="cw-panel-note">该颜色下还没有节点。</p>
        )}
      </div>
    </div>
  );
}
