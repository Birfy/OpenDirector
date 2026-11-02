import { useEffect, useRef, useState } from "react";
import type { CanvasNode, CanvasNodeData } from "./model";
import type { ModelConfig } from "../backend/rules";
import { modelLabel, referenceBudgetIssue } from "../backend/rules";
import { agentNodeSettings, agentGenerationBlocker } from "./textGeneration";
import { GenerationComposerShell } from "./GenerationComposerShell";
import { ComposerPopover } from "./ComposerPopover";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";
import { ReferenceThumbnail } from "./ReferenceThumbnail";
import {
  GenerationReferenceEditor,
  type GenerationReferenceHandle,
  type GenerationReferenceControls,
} from "./GenerationReferenceEditor";
import "./nodes.css";

export function TextNodeComposer({
  node,
  incoming,
  models,
  onUpdate,
  onRun,
  onCancel,
  onPickReference,
  running,
  referenceControls,
}: {
  node: CanvasNode;
  incoming: CanvasNode[];
  models: readonly ModelConfig[];
  onUpdate: (data: Partial<CanvasNodeData>) => void;
  onRun: () => void;
  onCancel: () => void;
  onPickReference: () => void;
  running: boolean;
  referenceControls?: GenerationReferenceControls;
}) {
  const root = useRef<HTMLDivElement>(null),
    anchor = useRef<HTMLElement | null>(null);
  const [panel, setPanel] = useState<"parameters" | null>(null);
  const mentions = useRef<GenerationReferenceHandle>(null);
  useEffect(() => setPanel(null), [node.id]);
  const settings = agentNodeSettings(node),
    agents = models.filter((m) => m.kind === "agent");
  // The node keeps the model it was created with; the picker only fills a gap.
  const selected = settings.modelConfigId ?? agents[0]?.id,
    model = agents.find((m) => m.id === selected);
  const blocker = agentGenerationBlocker(node, incoming, model);
  const update = (patch: Partial<typeof settings>) =>
    onUpdate({
      agentSettings: { ...settings, modelConfigId: selected, ...patch },
    });
  const toggle = (next: typeof panel, element: HTMLElement) => {
    anchor.current = element;
    setPanel((old) => (old === next ? null : next));
  };
  const referenceIssue = (reference: CanvasNode) =>
    !model
      ? "请先选择 Agent 模型"
      : !model.inputRules.allowedKinds.includes(reference.type)
        ? "当前 Agent 不支持此类参考"
        : null;
  const insert = (reference: CanvasNode) => mentions.current?.insert(reference);
  return (
    <GenerationComposerShell
      composerRef={root}
      label={`${node.data.title}创作参数`}
      running={running}
      onEscape={() => setPanel(null)}
    >
      <div className="cw-composer-body">
        {incoming.length > 0 && (
          <div className="cw-reference-strip">
            <TooltipButton
              type="button"
              className="cw-add-reference"
              aria-label="添加参考素材"
              label="添加参考素材"
              onClick={() => mentions.current?.openUpload()}
            >
              <CanvasIcon name="plus" size={20} />
            </TooltipButton>
            {incoming.map((reference) => (
              <ReferenceThumbnail
                key={reference.id}
                node={reference}
                disabled={running || Boolean(referenceIssue(reference))}
                removalDisabled={running}
                onInsert={() => insert(reference)}
                onRemove={() => mentions.current?.remove(reference)}
              />
            ))}
          </div>
        )}
        <GenerationReferenceEditor
          key={node.id}
          node={node}
          incoming={incoming}
          controls={referenceControls}
          issue={referenceIssue}
          validate={(sources) => {
            if (!model) return null;
            return referenceBudgetIssue(sources, model);
          }}
          onUpdate={onUpdate}
          running={running}
          pickerRef={mentions}
          label="文本生成提示词"
          placeholder="输入生成要求，或 @ 引用素材，让 Agent 帮你创作文本"
          onRun={() => {
            if (!blocker && !running) onRun();
          }}
        />
      </div>
      <div className="cw-composer-footer">
        <div className="cw-composer-options">
          <div className="cw-model-select">
            <select
              aria-label="Agent 模型"
              title={model ? modelLabel(model) : "选择 Agent 模型"}
              value={selected ?? ""}
              disabled={running}
              onChange={(event) =>
                update({ modelConfigId: event.target.value })
              }
            >
              {!agents.length && <option value="">选择 Agent 模型</option>}
              {selected && !model && (
                <option value={selected}>原 Agent 模型不可用</option>
              )}
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {modelLabel(agent)}
                </option>
              ))}
            </select>
            <CanvasIcon name="chevronDown" size={12} />
          </div>
          <button
            type="button"
            className="cw-parameter-trigger"
            aria-label="Agent 参数"
            aria-expanded={panel === "parameters"}
            onClick={(event) => toggle("parameters", event.currentTarget)}
          >
            <CanvasIcon name="sliders" size={15} />
            <span>
              {
                { auto: "自动", low: "低", medium: "中", high: "高" }[
                  settings.thinking
                ]
              }{" "}
              · {settings.maxTokens}
            </span>
          </button>
          {incoming.length === 0 && (
            <TooltipButton
              type="button"
              className="cw-reference-trigger"
              aria-label="添加参考素材"
              label="添加参考素材"
              onClick={() => mentions.current?.openUpload()}
            >
              <CanvasIcon name="plus" size={16} />
            </TooltipButton>
          )}
          <TooltipButton
            type="button"
            className="cw-reference-trigger"
            aria-label="引用已连接节点"
            label="引用已连接节点"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setPanel(null);
              mentions.current?.openPicker();
            }}
          >
            @
          </TooltipButton>
        </div>
        <TooltipButton
          type="button"
          className={`cw-run-button${running ? " cw-run-button-cancel" : ""}`}
          aria-label={running ? "取消生成" : "生成文本"}
          label={running ? "取消生成" : (blocker ?? "生成文本")}
          disabled={!running && Boolean(blocker)}
          onClick={running ? onCancel : onRun}
        >
          <CanvasIcon name={running ? "stop" : "arrowUp"} size={20} />
        </TooltipButton>
      </div>
      {panel && (
        <ComposerPopover
          anchor={anchor.current}
          composer={root.current}
          onClose={() => setPanel(null)}
          className="cw-parameters-popover cw-agent-parameters"
          label="Agent 参数设置"
        >
          <div className="cw-popover-heading">
            <strong>Agent 参数</strong>
            <button
              type="button"
              className="cw-icon-button"
              aria-label="关闭选项"
              onClick={() => setPanel(null)}
            >
              <CanvasIcon name="close" size={15} />
            </button>
          </div>
          <>
            <label>
              思考程度
              <select
                aria-label="Agent 思考程度"
                value={settings.thinking}
                disabled={running}
                onChange={(event) =>
                  update({
                    thinking: event.target.value as typeof settings.thinking,
                  })
                }
              >
                <option value="auto">自动</option>
                <option value="low">低</option>
                <option value="medium">中</option>
                <option value="high">高</option>
              </select>
            </label>
            <label>
              最大输出长度
              <input
                type="number"
                aria-label="Agent 最大输出长度"
                min={1}
                max={32768}
                step={1}
                value={settings.maxTokens}
                disabled={running}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  if (Number.isInteger(value) && value >= 1 && value <= 32768)
                    update({ maxTokens: value });
                }}
              />
            </label>
          </>
        </ComposerPopover>
      )}
    </GenerationComposerShell>
  );
}
