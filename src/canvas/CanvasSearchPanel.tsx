import { useId, useMemo, useRef, useState } from "react";
import type { CanvasNode } from "./model";
import { CanvasIcon } from "./CanvasIcon";
import {
  SEARCH_CATEGORIES,
  searchNodes,
  type SearchCategory,
} from "./nodeSearch";

export function CanvasSearchPanel({
  nodes,
  onSelect,
}: {
  nodes: CanvasNode[];
  onSelect: (node: CanvasNode) => void;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<SearchCategory>("all");
  const input = useRef<HTMLInputElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const results = useMemo(
    () => searchNodes(nodes, query, category),
    [nodes, query, category],
  );
  return (
    <>
      <div className="cw-search-field">
        <input
          ref={input}
          aria-label="搜索节点"
          className="cw-search-input"
          placeholder="搜索名称、提示词或文本"
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <button
            aria-label="清空搜索"
            onClick={() => {
              setQuery("");
              input.current?.focus();
            }}
          >
            <CanvasIcon name="close" size={14} />
          </button>
        )}
      </div>
      <div
        className="cw-search-categories"
        role="tablist"
        aria-label="搜索结果类型"
      >
        {SEARCH_CATEGORIES.map(([key, label], index) => (
          <button
            key={key}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            id={`${id}-${key}`}
            role="tab"
            aria-selected={category === key}
            aria-controls={`${id}-results`}
            tabIndex={category === key ? 0 : -1}
            onClick={() => setCategory(key)}
            onKeyDown={(event) => {
              const next =
                event.key === "ArrowRight"
                  ? (index + 1) % SEARCH_CATEGORIES.length
                  : event.key === "ArrowLeft"
                    ? (index - 1 + SEARCH_CATEGORIES.length) %
                      SEARCH_CATEGORIES.length
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? SEARCH_CATEGORIES.length - 1
                        : null;
              if (next === null) return;
              event.preventDefault();
              event.stopPropagation();
              setCategory(SEARCH_CATEGORIES[next]![0]);
              tabs.current[next]?.focus();
            }}
          >
            {label}
            <span>{results.counts[key]}</span>
          </button>
        ))}
      </div>
      <div
        id={`${id}-results`}
        role="tabpanel"
        aria-labelledby={`${id}-${category}`}
      >
        <p className="cw-search-count" role="status">
          {results.nodes.length} 个结果
        </p>
        {results.nodes.length ? (
          <div className="cw-node-list">
            {results.nodes.map((node) => (
              <button key={node.id} onClick={() => onSelect(node)}>
                <CanvasIcon name={node.type} />
                <span>
                  {node.data.title}
                  <small>
                    {node.data.prompt || node.data.text || "未添加内容"}
                  </small>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="cw-panel-note">
            没有匹配的节点，试试其他关键词或类型。
          </p>
        )}
      </div>
    </>
  );
}
