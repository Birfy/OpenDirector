import type { CanvasDocument, CanvasEdge } from "./model.ts";
import { referenceMaterial } from "./connectionPolicy.ts";
import { tNow } from "../i18n/messages.ts";

/** Freeze only references actually transmitted with the generation request. */
export function referenceSnapshot(
  nodes: CanvasDocument["nodes"],
): Record<string, string> {
  return Object.fromEntries(
    nodes.flatMap((node) => {
      const value = referenceMaterial(node);
      return value ? [[node.id, value]] : [];
    }),
  );
}

export function referencePresentation(
  document: Pick<CanvasDocument, "nodes">,
  edge: CanvasEdge,
) {
  const source = document.nodes.find((n) => n.id === edge.source);
  const target = document.nodes.find((n) => n.id === edge.target);
  if (edge.intent === "post_edit_result")
    return {
      state: "provenance" as const,
      description: tNow("errors.refEvidence.editSource"),
    };
  if (edge.intent === "assembly_input")
    return {
      state: "provenance" as const,
      description: tNow("errors.refEvidence.assemblySource"),
    };
  const material = source && referenceMaterial(source);
  const evidence = target?.data.generationEvidence;
  const recorded = Boolean(
    evidence &&
    evidence.output ===
      (target?.type === "text" ? target.data.text : target?.data.src),
  );
  const used = recorded ? evidence?.references[edge.source] : undefined;
  const state =
    material && used === material ? ("current" as const) : ("pending" as const);
  const name = `${source?.data.title ?? tNow("errors.refEvidence.referenceSource")} → ${target?.data.title ?? tNow("errors.refEvidence.targetNode")}`;
  if (edge.referenceState) {
    const current = edge.referenceState === "used";
    return {
      state: current ? ("current" as const) : ("pending" as const),
      description: `${name}${tNow("errors.refEvidence.separator")}${
        current
          ? tNow("errors.refEvidence.currentUsed")
          : edge.referenceState === "unknown"
            ? tNow("errors.refEvidence.unknownInput")
            : edge.referenceState === "unavailable"
              ? tNow("errors.refEvidence.missing")
              : edge.referenceBinding === "pinned"
                ? tNow("errors.refEvidence.pinnedDiff")
                : tNow("errors.refEvidence.pending")
      }${
        edge.referenceBinding === "pinned"
          ? tNow("errors.refEvidence.pinnedNext")
          : ""
      }`,
    };
  }
  return {
    state,
    description: `${name}${tNow("errors.refEvidence.separator")}${
      state === "current"
        ? tNow("errors.refEvidence.current")
        : tNow("errors.refEvidence.pending")
    }\n${tNow("errors.refEvidence.currentUses")}${
      !recorded
        ? tNow("errors.refEvidence.unknownInput")
        : !used
          ? tNow("errors.refEvidence.notUsed")
          : used === material
            ? tNow("errors.refEvidence.currentMaterial")
            : tNow("errors.refEvidence.historyMaterial")
    }\n${tNow("errors.refEvidence.nextUses")}${
      material
        ? tNow("errors.refEvidence.currentMaterial")
        : tNow("errors.refEvidence.missing")
    }`,
  };
}
