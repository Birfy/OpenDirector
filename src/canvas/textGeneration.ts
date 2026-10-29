import type { ModelConfig } from "../backend/rules.ts";
import type { CanvasDocument, CanvasNode, AgentNodeSettings } from "./model.ts";
import { referenceMaterial } from "./connectionPolicy.ts";
import type { ResultSource } from "./linkedResults.ts";
import { applyCommand } from "./model.ts";
import { lockedNodeIds } from "./hierarchy.ts";

export function agentNodeSettings(node: CanvasNode): AgentNodeSettings {
  return { thinking: "auto", maxTokens: 8192, ...node.data.agentSettings };
}
export function agentGenerationBlocker(
  node: CanvasNode,
  incoming: readonly CanvasNode[],
  model?: ModelConfig,
) {
  if (!model || model.kind !== "agent")
    return "请先在设置中配置并选择 Agent 模型";
  if (!node.data.prompt.trim()) return "请输入生成要求";
  const settings = agentNodeSettings(node);
  if (
    !Number.isInteger(settings.maxTokens) ||
    settings.maxTokens < 1 ||
    settings.maxTokens > 32768
  )
    return "最大输出长度应为 1–32768";
  for (const reference of incoming) {
    if (!model.inputRules.allowedKinds.includes(reference.type))
      return `当前 Agent 不支持${reference.data.title}的素材类型`;
    if (!referenceMaterial(reference))
      return `参考素材不可用：${reference.data.title}`;
  }
  for (const [kind, max] of [
    ["image", model.inputRules.maxImages],
    ["video", model.inputRules.maxVideos],
    ["audio", model.inputRules.maxAudios],
  ] as const)
    if (incoming.filter((n) => n.type === kind).length > max)
      return "参考数量超出当前 Agent 模型限制";
  return null;
}
export function applyTextGenerationResult(
  document: CanvasDocument,
  source: ResultSource,
  output: { kind: "text"; title: string; text: string },
) {
  const target = document.nodes.find((n) => n.id === source.nodeId);
  const error =
    document.id !== source.documentId
      ? "项目已切换，文本结果保留在生成历史中。"
      : !target || target.type !== "text" || source.kind !== "text"
        ? "文本来源已删除或改变，结果保留在生成历史中。"
        : lockedNodeIds(document.nodes).has(target.id)
          ? "文本节点已锁定，结果保留在生成历史中。"
          : target.data.text !== source.text
            ? "节点正文已改变，结果保留在生成历史中。"
            : null;
  if (error || !target)
    return {
      document,
      ids: [] as string[],
      error: error ?? "文本节点已不存在。",
    };
  return {
    document: applyCommand(document, {
      type: "update-node",
      id: target.id,
      patch: {
        data: {
          text: output.text,
          mediaRole: "generation",
          generationEvidence: source.referenceInputs
            ? { output: output.text, references: { ...source.referenceInputs } }
            : undefined,
        },
      },
    }),
    ids: [target.id],
  };
}
