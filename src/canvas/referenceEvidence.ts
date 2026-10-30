import type { CanvasDocument, CanvasEdge } from "./model.ts";
import { referenceMaterial } from "./connectionPolicy.ts";

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
    return { state: "provenance" as const, description: "编辑结果来源" };
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
  const name = `${source?.data.title ?? "参考源"} → ${target?.data.title ?? "目标节点"}`;
  if (edge.referenceState) {
    const current = edge.referenceState === "used";
    return {
      state: current ? ("current" as const) : ("pending" as const),
      description: `${name}：${current ? "当前结果已使用该参考" : edge.referenceState === "unknown" ? "未记录生成输入" : edge.referenceState === "unavailable" ? "参考缺失" : "待生成参考"}`,
    };
  }
  return {
    state,
    description: `${name}：${state === "current" ? "当前参考" : "待生成参考"}\n当前结果使用：${!recorded ? "未记录生成输入" : !used ? "未使用此参考" : used === material ? "源节点当前素材" : "源节点历史素材"}\n下次生成使用：${material ? "源节点当前素材" : "参考缺失"}`,
  };
}
