import type { ChatAsset } from "../backend/chat.ts";

export type ContentPart =
  | { type: "text"; text: string }
  | {
      type: "reference";
      assetId: string;
      nodeId?: string | null;
      name: string;
      fingerprint?: string | null;
    };
export type ReferenceContent = ContentPart[];
export type ReferenceAsset = ChatAsset & {
  kind?: string;
  nodeTitle?: string;
  nodeId?: string;
  fingerprintAliases?: string[];
  onCanvas?: boolean;
};
export function fingerprintMatches(asset: ReferenceAsset, value: string) {
  return (
    asset.fingerprint === value || !!asset.fingerprintAliases?.includes(value)
  );
}
export const REFERENCE_LIMIT = 64; // Structural guard, separate from each provider's media budget.
export const CONTENT_LIMIT = 20000;
export function assetKind(asset: ReferenceAsset) {
  return (
    asset.kind ??
    (asset.type.startsWith("image/")
      ? "image"
      : asset.type.startsWith("video/")
        ? "video"
        : asset.type.startsWith("audio/")
          ? "audio"
          : /\.(txt|md)$/i.test(asset.name) || asset.type.startsWith("text/")
            ? "text"
            : "other")
  );
}
export function normalizeContent(parts: ReferenceContent): ReferenceContent {
  const result: ReferenceContent = [];
  for (const part of parts) {
    if (part.type === "text") {
      const text = part.text.replaceAll("\u200b", "").replaceAll("\r\n", "\n");
      if (!text) continue;
      const last = result.at(-1);
      if (last?.type === "text") last.text += text;
      else result.push({ type: "text", text });
    } else
      result.push({
        type: "reference",
        assetId: part.assetId,
        ...(part.nodeId ? { nodeId: part.nodeId } : {}),
        name: part.name,
        fingerprint: part.fingerprint ?? null,
      });
  }
  return result;
}
export function referenceIds(content: ReferenceContent) {
  return [
    ...new Set(
      content.flatMap((part) =>
        part.type === "reference" ? [part.assetId] : [],
      ),
    ),
  ];
}
export function contentText(content: ReferenceContent, speech = false) {
  const ids = referenceIds(content);
  let text = content
    .map((part) =>
      part.type === "text"
        ? part.text
        : speech
          ? ""
          : `［参考${ids.indexOf(part.assetId) + 1}：${part.name}］`,
    )
    .join("");
  if (speech) {
    // A reference-only first line is context, including its separating newline.
    let prefix = "",
      hasReference = false;
    for (const part of content) {
      if (part.type === "reference") {
        hasReference = true;
        continue;
      }
      const newline = part.text.indexOf("\n");
      prefix += newline < 0 ? part.text : part.text.slice(0, newline);
      if (newline >= 0) {
        if (hasReference && !prefix.trim())
          text = text.slice(prefix.length + 1);
        break;
      }
    }
  }
  return text;
}
export function referenceContent(
  text: string,
  ids: string[],
  assets: ReferenceAsset[],
  content?: ReferenceContent | null,
): ReferenceContent {
  const body = content ?? (text ? [{ type: "text" as const, text }] : []);
  const located = new Set(referenceIds(body));
  const unlocated = [...new Set(ids)].filter((id) => !located.has(id));
  if (!unlocated.length) return body;
  const header = unlocated.flatMap((id, index): ReferenceContent => {
    const asset = assets.find((item) => item.id === id);
    return [
      ...(index ? [{ type: "text" as const, text: " " }] : []),
      {
        type: "reference",
        assetId: id,
        name: asset?.nodeTitle || asset?.name || "参考缺失",
        fingerprint: asset?.fingerprint ?? null,
      },
    ];
  });
  return body.some((part) => part.type === "reference" || part.text.length > 0)
    ? [...header, { type: "text", text: "\n" }, ...body]
    : header;
}
export function referencePart(asset: ReferenceAsset): ContentPart {
  return {
    type: "reference",
    assetId: asset.id,
    ...(asset.nodeId ? { nodeId: asset.nodeId } : {}),
    name: asset.nodeTitle || asset.name,
    fingerprint: asset.fingerprint,
  };
}

export function validContent(content: ReferenceContent) {
  return (
    content.length <= 2000 &&
    contentText(content).length <= CONTENT_LIMIT &&
    referenceIds(content).length <= REFERENCE_LIMIT
  );
}
