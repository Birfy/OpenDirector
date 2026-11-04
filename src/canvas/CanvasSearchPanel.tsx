import { useId, useMemo, useRef, useState } from "react";
import type { CanvasNode } from "./model";
import { CanvasIcon } from "./CanvasIcon";
import { useT } from "../i18n/I18nProvider";
import type { MessageKey } from "../i18n/messages";
import { displayNodeTitle } from "./nodeTitle.ts";
import {
  SEARCH_CATEGORIES,
  searchNodes,
  type SearchCategory,
} from "./nodeSearch";

const CATEGORY_LABELS: Record<SearchCategory, MessageKey> = {
  all: "canvas.search.category.all",
  image: "canvas.search.category.image",
  video: "canvas.search.category.video",
  audio: "canvas.search.category.audio",
  text: "canvas.search.category.text",
  subject: "canvas.search.category.subject",
  timeline: "canvas.search.category.timeline",
  tool: "canvas.search.category.tool",
  group: "canvas.search.category.group",
  other: "canvas.search.category.other",
};

export function CanvasSearchPanel({
  nodes,
  onSelect,
}: {
  nodes: CanvasNode[];
  onSelect: (node: CanvasNode) => void;
}) {
  const t = useT();
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
          aria-label={t("canvas.search.label")}
          className="cw-search-input"
          placeholder={t("canvas.search.placeholder")}
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <button
            aria-label={t("canvas.search.clear")}
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
        aria-label={t("canvas.search.categories")}
      >
        {SEARCH_CATEGORIES.map(([key], index) => (
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
            {t(CATEGORY_LABELS[key])}
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
          {t("common.count.results", { count: results.nodes.length })}
        </p>
        {results.nodes.length ? (
          <div className="cw-node-list">
            {results.nodes.map((node) => (
              <button key={node.id} onClick={() => onSelect(node)}>
                <CanvasIcon name={node.type} />
                <span>
                  {displayNodeTitle(node.type, node.data.title)}
                  <small>
                    {node.data.prompt ||
                      node.data.text ||
                      t("canvas.search.noContent")}
                  </small>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="cw-panel-note">{t("canvas.search.empty")}</p>
        )}
      </div>
    </>
  );
}
