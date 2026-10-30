import type { CanvasDocument, CanvasNode, CanvasNodeData } from "./model.ts";
import { referenceMaterial } from "./connectionPolicy.ts";
import {
  normalizeContent,
  contentText,
  referencePart,
  type ReferenceAsset,
  type ReferenceContent,
} from "./chatReferenceContent.ts";

export function generationPrompt(node: CanvasNode) {
  return node.type === "audio" && node.data.promptContent !== undefined
    ? contentText(node.data.promptContent, true)
    : node.data.prompt;
}

/** Match provider numbering to first inline occurrence, then relationship order. */
export function incomingReferenceNodes(
  document: CanvasDocument,
  targetId: string | null | undefined,
) {
  const logical = new Map(
    [...document.nodes, ...(document.hiddenNodes ?? [])].map((node) => [
      node.id,
      node,
    ]),
  );
  const target = targetId && logical.get(targetId);
  const edges = document.edges.filter(
    (edge) => edge.intent !== "post_edit_result" && edge.target === targetId,
  );
  const connected = new Set(edges.map((edge) => edge.source));
  const mentioned = target
    ? (target.data.promptContent?.flatMap((part) =>
        part.type === "reference" && part.nodeId ? [part.nodeId] : [],
      ) ??
      target.data.promptMentions?.flatMap((part) =>
        part.sourceNodeId ? [part.sourceNodeId] : [],
      ) ??
      [])
    : [];
  return [...new Set([...mentioned, ...edges.map((edge) => edge.source)])]
    .filter((id) => connected.has(id))
    .flatMap((id) => logical.get(id) ?? []);
}

/** Editor identities follow logical sources, independent of a file's current URL. */
export function nodeReferenceAsset(
  node: CanvasNode,
  referenceId?: string,
): ReferenceAsset {
  const material = referenceMaterial(node) ?? "";
  let hash = 2166136261;
  for (let i = 0; i < material.length; i++)
    hash = Math.imul(hash ^ material.charCodeAt(i), 16777619);
  return {
    id: `node:${node.id}`,
    nodeId: node.id,
    referenceId,
    name: (node.data.title || "参考").slice(0, 255),
    nodeTitle: (node.data.title || "参考").slice(0, 255),
    kind: node.type,
    type: `${node.type}/reference`,
    size: 0,
    fingerprint: `source:${node.id}:${material.length}:${hash >>> 0}`,
  };
}

export function generationContentPatch(
  content: ReferenceContent,
): Pick<CanvasNodeData, "prompt" | "promptContent" | "promptMentions"> {
  let prompt = "";
  const mentions: NonNullable<CanvasNodeData["promptMentions"]> = [];
  for (const part of content) {
    if (part.type === "text") prompt += part.text;
    else {
      const label = `@${part.name}`;
      mentions.push({
        ...(part.nodeId ? { sourceNodeId: part.nodeId } : {}),
        ...(part.referenceId ? { referenceId: part.referenceId } : {}),
        start: prompt.length,
        end: prompt.length + label.length,
      });
      prompt += label;
    }
  }
  return {
    prompt,
    promptContent: normalizeContent(content),
    promptMentions: mentions,
  };
}

/** Upgrade old ranged mentions once and surface references created by drag/API. */
export function generationContent(
  node: CanvasNode,
  incoming: readonly CanvasNode[],
  referenceId: (nodeId: string) => string | undefined = () => undefined,
): ReferenceContent {
  let body: ReferenceContent;
  if (node.data.promptContent !== undefined) body = node.data.promptContent;
  else {
    body = [];
    let cursor = 0;
    for (const mention of node.data.promptMentions ?? []) {
      const source = incoming.find(
        (source) => source.id === mention.sourceNodeId,
      );
      if (
        !source ||
        mention.start < cursor ||
        mention.end > node.data.prompt.length
      )
        continue;
      if (mention.start > cursor)
        body.push({
          type: "text",
          text: node.data.prompt.slice(cursor, mention.start),
        });
      body.push(
        referencePart(
          nodeReferenceAsset(
            source,
            mention.referenceId ?? referenceId(source.id),
          ),
        ),
      );
      cursor = mention.end;
    }
    if (cursor < node.data.prompt.length)
      body.push({ type: "text", text: node.data.prompt.slice(cursor) });
  }
  body = body.map((part) => {
    if (part.type !== "reference" || part.binding === "asset" || !part.nodeId)
      return part;
    const source = incoming.find((source) => source.id === part.nodeId);
    return source
      ? referencePart(
          nodeReferenceAsset(
            source,
            part.referenceId ?? referenceId(source.id),
          ),
        )
      : part;
  });
  const located = new Set(
    body.flatMap((part) =>
      part.type === "reference" && part.nodeId ? [part.nodeId] : [],
    ),
  );
  const header: ReferenceContent = [];
  for (const source of incoming) {
    if (located.has(source.id)) continue;
    if (header.length) header.push({ type: "text", text: " " });
    header.push(
      referencePart(nodeReferenceAsset(source, referenceId(source.id))),
    );
  }
  return normalizeContent(
    header.length
      ? [
          ...header,
          ...(body.length
            ? [{ type: "text" as const, text: "\n" }, ...body]
            : []),
        ]
      : body,
  );
}
