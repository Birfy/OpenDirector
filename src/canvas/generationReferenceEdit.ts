import {
  applyCommand,
  type CanvasCommand,
  type CanvasDocument,
  type CanvasNode,
} from "./model.ts";
import { referenceIssue, REFERENCE_ISSUE_TEXT } from "./connectionPolicy.ts";
import { generationContentPatch } from "./generationReferenceContent.ts";
import type { ReferenceContent } from "./chatReferenceContent.ts";

/** Prepare a complete relationship + document edit before publishing any part. */
export function referenceContentCommand(
  document: CanvasDocument,
  targetId: string,
  content: ReferenceContent,
  added: CanvasNode[] = [],
): CanvasCommand {
  const target = document.nodes.find((node) => node.id === targetId);
  if (!target) throw new Error("目标节点已不存在。");
  const desired = new Set(
    content.flatMap((part) =>
      part.type === "reference" && part.binding !== "asset" && part.nodeId
        ? [part.nodeId]
        : [],
    ),
  );
  const commands: CanvasCommand[] = [
    {
      type: "reference-sources",
      nodes: added.filter((node) => desired.has(node.id)),
    },
  ];
  let working = applyCommand(document, commands[0]!);
  const removed = working.edges.filter(
    (edge) =>
      edge.intent !== "post_edit_result" &&
      edge.target === targetId &&
      (edge.referenceBinding === "pinned"
        ? !content.some(
            (part) => part.type === "reference" && part.referenceId === edge.id,
          )
        : !desired.has(edge.source)),
  );
  if (removed.length) {
    const remove: CanvasCommand = {
      type: "remove-edges",
      ids: removed.map((edge) => edge.id),
    };
    commands.push(remove);
    working = applyCommand(working, remove);
  }
  const next = content.map((part) => {
    if (part.type !== "reference" || part.binding === "asset" || !part.nodeId)
      return part;
    const existing = working.edges.find(
      (edge) =>
        edge.intent !== "post_edit_result" &&
        edge.referenceBinding !== "pinned" &&
        edge.target === targetId &&
        edge.source === part.nodeId,
    );
    if (existing) return { ...part, referenceId: existing.id };
    const issue = referenceIssue(working, part.nodeId, targetId);
    if (issue) throw new Error(REFERENCE_ISSUE_TEXT[issue]);
    const add: CanvasCommand = {
      type: "add-edge",
      edge: {
        id: part.referenceId ?? crypto.randomUUID(),
        source: part.nodeId,
        target: targetId,
        intent: "generation_input",
      },
    };
    commands.push(add);
    working = applyCommand(working, add);
    return { ...part, referenceId: add.edge.id };
  });
  const patch = generationContentPatch(next);
  const settings = working.nodes.find((node) => node.id === targetId)?.data
    .settings;
  commands.push({
    type: "update-node",
    id: targetId,
    patch: {
      data: {
        ...patch,
        ...(settings
          ? { settings: { ...settings, prompt: patch.prompt } }
          : {}),
      },
    },
  });
  return { type: "batch", commands };
}
