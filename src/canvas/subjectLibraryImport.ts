import {
  applyCommand,
  createNode,
  type CanvasCommand,
  type CanvasDocument,
  type SubjectData,
  type Point,
} from "./model.ts";
import { isNodeLocked, indexNodes } from "./hierarchy.ts";
import { referenceTypeAllowed } from "./connectionPolicy.ts";
import { subjectError } from "./dataBoundary.ts";
import { tNow } from "../i18n/messages.ts";
import type { Translate } from "../i18n/I18nProvider";
import type {
  MessageDescriptor,
  MessageKey,
  MessageParams,
} from "../i18n/types";

/** Module-level fallback for helpers that cannot call React hooks. */
const nowTranslate: Translate = (
  input: MessageKey | MessageDescriptor,
  params?: MessageParams,
) =>
  typeof input === "string"
    ? tNow(input, params)
    : tNow(input.key, input.params);

/** Preview URLs can change after rehydration; owned asset identity cannot. */
export function subjectTargetIdentity(node: import("./model.ts").CanvasNode) {
  const resource = (value: import("./model.ts").CanvasResource | undefined) =>
    value
      ? {
          kind: value.kind,
          ...(value.assetId
            ? {
                assetId: value.assetId,
                ...(value.src?.startsWith("data:") ? { src: value.src } : {}),
              }
            : { id: value.id, src: value.src }),
        }
      : null;
  const subject = node.data.subject;
  return JSON.stringify({
    id: node.id,
    title: node.data.title,
    parentId: node.parentId,
    description: subject?.description,
    category: subject?.category,
    main: resource(subject?.main),
    auxiliaries: subject?.auxiliaries.map(resource),
    voice: resource(subject?.voice),
    librarySource: subject?.librarySource,
  });
}

export function subjectImportSelection(
  document: CanvasDocument,
  selected: readonly string[],
  t: Translate = nowTranslate,
) {
  const node =
    selected.length === 1
      ? document.nodes.find((node) => node.id === selected[0])
      : undefined;
  const issue =
    !node || node.type !== "subject"
      ? t("library.subject.selectOne")
      : isNodeLocked(node, indexNodes(document.nodes))
        ? t("library.subject.unlock")
        : null;
  return { node, issue };
}

/** One command is one undo step; replacement preserves the presentation identity. */
export function librarySubjectCommand(
  document: CanvasDocument,
  sources: { title: string; subject: SubjectData }[],
  point: Point,
  targetId?: string,
  measure?: (subject: SubjectData, width: number) => number,
  t: Translate = nowTranslate,
): CanvasCommand {
  if (!sources.length) throw new Error(t("library.subject.none"));
  for (const source of sources) {
    const issue = subjectError(source.subject);
    if (issue || !source.subject.main?.src)
      throw new Error(issue ?? t("library.subject.blank"));
  }
  if (!targetId)
    return {
      type: "add-nodes",
      nodes: sources.map((source, index) => {
        const node = createNode(
          "subject",
          {
            x: point.x - 160 + (index % 3) * 360,
            y: point.y - 160 + Math.floor(index / 3) * 460,
          },
          { title: source.title, subject: source.subject },
        );
        return measure
          ? { ...node, height: measure(source.subject, node.width) }
          : node;
      }),
    };
  if (sources.length !== 1)
    throw new Error(t("library.subject.singleLibrary"));
  const { node, issue } = subjectImportSelection(document, [targetId], t);
  if (issue || !node) throw new Error(issue!);
  const command: CanvasCommand = {
    type: "batch",
    commands: [
      {
        type: "remove-edges",
        ids: document.edges
          .filter(
            (edge) =>
              edge.target === targetId && edge.intent !== "post_edit_result",
          )
          .map((edge) => edge.id),
      },
      {
        type: "update-node",
        id: targetId,
        patch: {
          ...(measure
            ? {
                height: measure(
                  {
                    ...sources[0]!.subject,
                    description: node.data.subject?.description ?? "",
                  },
                  node.width,
                ),
              }
            : {}),
          data: {
            subject: {
              ...sources[0]!.subject,
              description: node.data.subject?.description ?? "",
            },
          },
        },
      },
    ],
  };
  const next = applyCommand(document, command);
  const replaced = next.nodes.find((node) => node.id === targetId)!;
  const logical = [...next.nodes, ...(next.hiddenNodes ?? [])];
  for (const edge of next.edges.filter(
    (edge) => edge.source === targetId && edge.intent !== "post_edit_result",
  )) {
    const target = logical.find((node) => node.id === edge.target);
    if (!target || !referenceTypeAllowed(replaced, target.type))
      throw new Error(t("library.subject.incompatible"));
  }
  return command;
}

/** Merge only this import so an unrelated background result or newer edit survives. */
export function mergeLibrarySubjectImport(
  current: CanvasDocument,
  before: CanvasDocument,
  committed: CanvasDocument,
  targetId?: string,
): CanvasDocument {
  if (current.id !== before.id) return current;
  if (!targetId) {
    const oldIds = new Set(before.nodes.map((node) => node.id));
    const currentIds = new Set(current.nodes.map((node) => node.id));
    const added = committed.nodes.filter(
      (node) => !oldIds.has(node.id) && !currentIds.has(node.id),
    );
    return added.length
      ? { ...current, nodes: [...current.nodes, ...added] }
      : current;
  }
  const previous = before.nodes.find((node) => node.id === targetId);
  const next = committed.nodes.find((node) => node.id === targetId);
  const live = current.nodes.find((node) => node.id === targetId);
  if (
    !previous ||
    !next ||
    !live ||
    subjectTargetIdentity(live) !== subjectTargetIdentity(previous)
  )
    return current;
  const removedEdges = new Set(
    before.edges
      .filter(
        (edge) =>
          edge.target === targetId && edge.intent !== "post_edit_result",
      )
      .map((edge) => edge.id),
  );
  return {
    ...current,
    nodes: current.nodes.map((node) =>
      node.id === targetId
        ? {
            ...node,
            height: next.height,
            data: { ...node.data, subject: next.data.subject },
          }
        : node,
    ),
    edges: current.edges.filter((edge) => !removedEdges.has(edge.id)),
  };
}
