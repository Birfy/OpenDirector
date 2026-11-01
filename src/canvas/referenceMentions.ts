import type { CanvasNode } from "./model.ts";
import { canSourceReference } from "./connectionPolicy.ts";
import { assetDisplayName } from "./assetNames.ts";

export const REFERENCE_CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "image", label: "图片" },
  { id: "video", label: "视频" },
  { id: "audio", label: "音频" },
  { id: "text", label: "文本" },
  { id: "subject", label: "主体" },
] as const;
export type ReferenceCategory = (typeof REFERENCE_CATEGORIES)[number]["id"];
export type ReferenceKind = Exclude<ReferenceCategory, "all">;
export interface MentionOption {
  id: string;
  kind: ReferenceKind;
  title: string;
  detail: string;
  thumbnail?: string;
  disabledReason?: string | null;
}
export interface MentionRange {
  start: number;
  end: number;
}

/** Match OpenDirector: a bare @ at the caret, excluding email/handle fragments. */
export function mentionRange(
  value: string,
  start: number,
  end = start,
): MentionRange | null {
  if (start !== end || start < 1 || start > value.length) return null;
  return /(?:^|[^A-Za-z0-9_.+%@])@$/.test(value.slice(0, start))
    ? { start: start - 1, end }
    : null;
}

export function insertMention(
  value: string,
  range: MentionRange,
  title: string,
) {
  const start = Math.max(0, Math.min(value.length, range.start));
  const end = Math.max(start, Math.min(value.length, range.end));
  const inserted = `@${title} `;
  return {
    value: value.slice(0, start) + inserted + value.slice(end),
    caret: start + inserted.length,
    inserted,
    start,
    end,
  };
}

export function mentionCategories(
  options: readonly MentionOption[],
): ReferenceCategory[] {
  return REFERENCE_CATEGORIES.filter(
    (category) =>
      category.id === "all" ||
      options.some(
        (option) => option.kind === category.id && !option.disabledReason,
      ),
  ).map((category) => category.id);
}

export function nodeMentionOptions(
  nodes: readonly CanvasNode[],
  issue: (node: CanvasNode) => string | null = () => null,
  origin = "上游节点",
): MentionOption[] {
  return nodes.flatMap((node) => {
    const category = REFERENCE_CATEGORIES.find((item) => item.id === node.type);
    if (!category || !canSourceReference(node)) return [];
    const image = node.type === "subject" ? node.data.subject?.main : undefined;
    return [
      {
        id: node.id,
        kind: node.type as ReferenceKind,
        title: assetDisplayName(node.data.title),
        detail: `${category.label} · ${origin}`,
        thumbnail:
          node.type === "image"
            ? node.data.src
            : image?.kind === "image"
              ? image.src
              : undefined,
        disabledReason: issue(node),
      },
    ];
  });
}
