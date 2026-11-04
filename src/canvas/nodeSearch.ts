import type { CanvasNode, CanvasNodeKind } from "./model.ts";

export const SEARCH_CATEGORIES = [
  ["all", "errors.stats.all"],
  ["image", "errors.stats.image"],
  ["video", "errors.stats.video"],
  ["audio", "errors.stats.audio"],
  ["text", "errors.stats.text"],
  ["subject", "errors.stats.subject"],
  ["timeline", "errors.stats.timeline"],
  ["tool", "errors.stats.tool"],
  ["group", "errors.stats.group"],
  ["other", "errors.stats.other"],
] as const;
export type SearchCategory = (typeof SEARCH_CATEGORIES)[number][0];

const categoryFor = (kind: CanvasNodeKind): SearchCategory =>
  kind === "file" || kind === "stack" || kind === "external" ? "other" : kind;

/** Counts and visible rows always come from the same local query result. */
export function searchNodes(
  nodes: readonly CanvasNode[],
  query: string,
  category: SearchCategory,
) {
  const normalized = query.trim().toLocaleLowerCase();
  const matches = nodes.filter((node) =>
    [node.data.title, node.data.prompt, node.data.text ?? ""].some((value) =>
      value.toLocaleLowerCase().includes(normalized),
    ),
  );
  const counts = Object.fromEntries(
    SEARCH_CATEGORIES.map(([id]) => [id, 0]),
  ) as Record<SearchCategory, number>;
  counts.all = matches.length;
  for (const node of matches) counts[categoryFor(node.type)]++;
  return {
    counts,
    nodes:
      category === "all"
        ? matches
        : matches.filter((node) => categoryFor(node.type) === category),
  };
}
