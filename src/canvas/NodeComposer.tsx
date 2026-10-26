import { useEffect, useRef, useState } from "react";
import type { CanvasNode, CanvasNodeData, GenerationSettings } from "./model";
import { CanvasIcon } from "./CanvasIcon";
import {
  changeGenerationSettings,
  generationBlocker,
  generationDefaults,
  generationModel,
  generationModelsFor,
  generationReferenceIssue,
  generationReferenceRole,
  GENERATION_RATIOS,
  observedGenerationPrice,
} from "./generationCatalog.ts";
import "./nodes.css";

export interface NodeComposerProps {
  selectedNode: CanvasNode | null;
  incomingNodes: CanvasNode[];
  onUpdate: (data: Partial<CanvasNodeData>) => void;
  onRun: () => void;
  onCancel: () => void;
  onPickReference: () => void;
  running?: boolean;
}

export interface ComposerSettings extends GenerationSettings {
  count?: number;
  camera?: string;
  palette?: string;
  style?: string;
  audioEnabled?: boolean;
}

const ratios = GENERATION_RATIOS;
type PresetKey = "camera" | "palette" | "style";
type Panel = PresetKey | "parameters" | "references" | "voices" | null;
type Preset = { name: string; hint: string; color: string; prompt: string };

const presets: Record<PresetKey, Preset[]> = {
  camera: [
    {
      name: "默认",
      hint: "自由构图",
      color: "linear-gradient(135deg,#576169,#292e36)",
      prompt: "",
    },
    {
      name: "远景",
      hint: "呈现环境与氛围",
      color: "linear-gradient(165deg,#7e8d86 48%,#3a4b46 49%)",
      prompt: "远景镜头，展现完整环境与空间关系",
    },
    {
      name: "中景",
      hint: "平衡人物与场景",
      color: "linear-gradient(145deg,#817e72,#3f4547)",
      prompt: "中景镜头，主体与环境均衡构图",
    },
    {
      name: "特写",
      hint: "突出主体细节",
      color: "radial-gradient(ellipse at 50% 85%,#ac9985 0 34%,#3f464a 35%)",
      prompt: "特写镜头，突出主体细节，浅景深",
    },
    {
      name: "俯拍",
      hint: "从上方俯瞰",
      color:
        "radial-gradient(ellipse,#71877a 0 28%,#414e48 29% 48%,#293733 49%)",
      prompt: "俯拍视角，从上方俯瞰主体",
    },
    {
      name: "仰拍",
      hint: "强调体量与张力",
      color: "linear-gradient(70deg,#536066 0 35%,#9da4a1 36% 65%,#44535a 66%)",
      prompt: "低机位仰拍，突出主体体量与画面张力",
    },
  ],
  palette: [
    {
      name: "默认",
      hint: "保留自然色彩",
      color: "linear-gradient(135deg,#938b7e,#526165)",
      prompt: "",
    },
    {
      name: "暖阳",
      hint: "金色与温暖棕调",
      color: "linear-gradient(125deg,#d8bc8b,#b87849,#714d3d)",
      prompt: "暖阳配色，金色光线与温暖棕色调",
    },
    {
      name: "冷青",
      hint: "青蓝与银灰",
      color: "linear-gradient(125deg,#bed5d9,#6f999c,#3a5266)",
      prompt: "冷青配色，青蓝与银灰色调",
    },
    {
      name: "黑白",
      hint: "经典高对比",
      color: "linear-gradient(125deg,#d9d9d8,#777,#202124)",
      prompt: "黑白影像，高对比光影与细腻灰阶",
    },
    {
      name: "复古",
      hint: "柔和胶片色彩",
      color: "linear-gradient(125deg,#b4aa7c,#9a6959,#4f665c)",
      prompt: "复古电影配色，柔和胶片色彩与轻微颗粒",
    },
    {
      name: "糖果",
      hint: "轻盈明快的色彩",
      color: "linear-gradient(125deg,#cbb9dd,#e5c1b6,#a3cbd1)",
      prompt: "糖果配色，低饱和粉紫与清新蓝绿色",
    },
  ],
  style: [
    {
      name: "默认",
      hint: "由提示词决定",
      color: "linear-gradient(135deg,#8e918b,#484d50)",
      prompt: "",
    },
    {
      name: "写实",
      hint: "自然光与真实质感",
      color: "linear-gradient(140deg,#829078,#b7aa8b,#5f6658)",
      prompt: "写实摄影风格，自然光，真实材质与细节",
    },
    {
      name: "电影",
      hint: "叙事构图与光影",
      color: "linear-gradient(140deg,#8d9e9c,#4e595d,#776d52)",
      prompt: "电影感画面，叙事构图，戏剧性光影",
    },
    {
      name: "3D 渲染",
      hint: "柔和体积与材质",
      color:
        "radial-gradient(ellipse at 40% 40%,#cad7be,#7b927e 40%,#485c56 72%)",
      prompt: "精细 3D 渲染，柔和体积光，清晰材质",
    },
    {
      name: "日系动漫",
      hint: "清透色彩与线条",
      color: "linear-gradient(150deg,#adc6cf 50%,#b2bc92 51%,#657b78)",
      prompt: "日系动漫风格，清透色彩，精致线条",
    },
    {
      name: "水彩",
      hint: "纸张肌理与晕染",
      color: "radial-gradient(ellipse at 40% 50%,#b5baa4,#d1c4ae 50%,#b1bac1)",
      prompt: "水彩绘画风格，柔和晕染，纸张肌理",
    },
  ],
};

const presetLabels: Record<PresetKey, string> = {
  camera: "相机",
  palette: "配色",
  style: "风格",
};
const presetIcons: Record<PresetKey, string> = {
  camera: "camera",
  palette: "palette",
  style: "sparkle",
};

/** Shared defaults let the workspace run the same parameters that the controls display. */
export function getNodeGenerationSettings(node: CanvasNode): ComposerSettings {
  const mode =
    node.data.kind === "video"
      ? "video"
      : node.data.kind === "audio"
        ? "audio"
        : "image";
  const previous = node.data.settings as ComposerSettings | undefined;
  // A replacement upload can change the node kind while retaining common settings.
  // Model, resolution and duration belong to their original media mode.
  const sameMode = previous?.mode === mode ? previous : undefined;
  const defaults = generationDefaults(mode);
  const legacyModel = [
    "本地交互演示",
    "本地音频工作流",
    "配乐创意",
    "环境音创意",
  ].includes(sameMode?.model ?? "");
  return {
    ...defaults,
    ...sameMode,
    mode,
    model: sameMode?.model && !legacyModel ? sameMode.model : defaults.model,
    aspectRatio: ratios.some((ratio) => ratio === previous?.aspectRatio)
      ? previous!.aspectRatio
      : defaults.aspectRatio,
    resolution:
      mode === "audio"
        ? "自动"
        : sameMode?.resolution && sameMode.resolution !== "1024"
          ? sameMode.resolution
          : defaults.resolution,
    prompt: node.data.prompt,
    count: previous?.count ?? 1,
    camera: previous?.camera ?? "默认",
    palette: previous?.palette ?? "默认",
    style: previous?.style ?? "默认",
    audioEnabled: sameMode?.audioEnabled ?? true,
  };
}

export function NodeComposer({
  selectedNode,
  incomingNodes,
  onUpdate,
  onRun,
  onCancel,
  onPickReference,
  running = false,
}: NodeComposerProps) {
  const [panel, setPanel] = useState<Panel>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    setPanel(null);
  }, [selectedNode?.id]);
  useEffect(() => {
    if (!panel) return;
    const dismiss = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !rootRef.current?.contains(event.target)
      )
        setPanel(null);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [panel]);

  if (
    !selectedNode ||
    !["image", "video", "audio"].includes(selectedNode.data.kind)
  )
    return null;
  const settings = getNodeGenerationSettings(selectedNode);
  const prompt = selectedNode.data.prompt;
  const mode = settings.mode;
  const blocker = generationBlocker(settings, incomingNodes);
  const canRun = !blocker;
  const model = generationModel(settings);
  const choices = generationModelsFor(settings).map((item) => item.name);
  const currentModels = choices.includes(settings.model)
    ? choices
    : [settings.model, ...choices];
  const resolutions = model?.resolutions ?? [];
  const price = observedGenerationPrice(settings);
  const firstLast = mode === "video" && settings.videoMode === "first-last";
  const music = mode === "audio" && settings.audioCreationType === "music";
  const reading = mode === "audio" && !music && settings.audioMode === "tts";
  const frameCandidates = incomingNodes.filter(
    (node) => node.data.kind === "image",
  );
  const duration = model?.duration;
  const updateSettings = (patch: Partial<ComposerSettings>) =>
    onUpdate({ settings: changeGenerationSettings(settings, patch) });
  const updatePrompt = (value: string) =>
    onUpdate({ prompt: value, settings: { ...settings, prompt: value } });
  const togglePanel = (next: Panel) =>
    setPanel((current) => (current === next ? null : next));
  const applyPreset = (key: PresetKey, preset: Preset) => {
    const previous = presets[key].find((item) => item.name === settings[key]);
    const withoutPrevious = previous?.prompt
      ? prompt
          .replace(previous.prompt, "")
          .replace(/\n{3,}/g, "\n\n")
          .trim()
      : prompt.trim();
    const nextPrompt =
      preset.prompt && !withoutPrevious.includes(preset.prompt)
        ? [withoutPrevious, preset.prompt].filter(Boolean).join("\n")
        : withoutPrevious;
    onUpdate({
      prompt: nextPrompt,
      settings: { ...settings, [key]: preset.name, prompt: nextPrompt },
    });
    setPanel(null);
  };
  const insertReference = (node: CanvasNode) => {
    const input = textareaRef.current;
    const start = input?.selectionStart ?? prompt.length;
    const end = input?.selectionEnd ?? start;
    const mention = `@${node.data.title} `;
    updatePrompt(`${prompt.slice(0, start)}${mention}${prompt.slice(end)}`);
    setPanel(null);
    requestAnimationFrame(() => {
      input?.focus();
      input?.setSelectionRange(start + mention.length, start + mention.length);
    });
  };

  return (
    <div
      ref={rootRef}
      className={`cw-composer nodrag nopan nowheel${running ? " cw-composer-running" : ""}`}
      onPointerDown={(event) => event.stopPropagation()}
      onKeyDown={(event) => {
        event.stopPropagation();
        if (event.key === "Escape") setPanel(null);
      }}
      aria-label={`${selectedNode.data.title}创作参数`}
    >
      <div className="cw-creation-mode-row">
        {mode === "image" && (
          <label className="cw-creation-mode-field">
            <span>创作预设</span>
            <select
              aria-label="图片创作预设"
              value={settings.imagePreset ?? "none"}
              disabled={running}
              onChange={(event) =>
                updateSettings({
                  imagePreset: event.target
                    .value as ComposerSettings["imagePreset"],
                })
              }
            >
              <option value="none">自由创作</option>
              <option
                value="product-views"
                disabled={settings.model !== "Seedream 5.0 Pro"}
              >
                产品三视图 · 仅 5.0 Pro
              </option>
            </select>
          </label>
        )}
        {mode === "video" && (
          <div
            className="cw-mode-segments"
            role="group"
            aria-label="视频创作模式"
          >
            {(
              [
                ["reference", "全能参考"],
                ["first-last", "首尾帧"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={settings.videoMode === value}
                className={settings.videoMode === value ? "cw-is-active" : ""}
                disabled={
                  running ||
                  Boolean(
                    model?.videoModes && !model.videoModes.includes(value),
                  )
                }
                title={
                  model?.videoModes && !model.videoModes.includes(value)
                    ? "当前模型不支持此模式"
                    : label
                }
                onClick={() => updateSettings({ videoMode: value })}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        {mode === "audio" && (
          <>
            <label className="cw-creation-mode-field">
              <span>创作类型</span>
              <select
                aria-label="音频创作类型"
                value={settings.audioCreationType ?? "audio"}
                disabled={running}
                onChange={(event) =>
                  updateSettings({
                    audioCreationType: event.target
                      .value as ComposerSettings["audioCreationType"],
                  })
                }
              >
                <option value="audio">音频生成</option>
                <option value="music">音乐生成</option>
              </select>
            </label>
            {!music && (
              <div
                className="cw-mode-segments"
                role="group"
                aria-label="音频创作模式"
              >
                {(
                  [
                    ["unified", "全能配音"],
                    ["tts", "文本朗读"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={settings.audioMode === value}
                    disabled={running}
                    className={
                      settings.audioMode === value ? "cw-is-active" : ""
                    }
                    onClick={() => updateSettings({ audioMode: value })}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
        <span className="cw-service-badge">本地任务 · 生成服务未连接</span>
      </div>
      {mode !== "audio" && (
        <div className="cw-preset-row">
          {(["camera", "palette", "style"] as const).map((key) => {
            const chosen =
              presets[key].find((item) => item.name === settings[key]) ??
              presets[key][0]!;
            return (
              <button
                key={key}
                type="button"
                className={`cw-preset-trigger${panel === key ? " cw-is-active" : ""}`}
                onClick={() => togglePanel(key)}
                aria-expanded={panel === key}
                aria-label={`选择${presetLabels[key]}`}
              >
                <span
                  className={`cw-preset-thumbnail cw-preset-thumbnail-${key}`}
                  style={{ background: chosen.color }}
                >
                  <CanvasIcon name={presetIcons[key]} size={19} />
                </span>
                <span>
                  <strong>{presetLabels[key]}</strong>
                  <small>
                    {chosen.name === "默认" ? "自由选择" : chosen.name}
                  </small>
                </span>
                <CanvasIcon name="chevronDown" size={13} />
              </button>
            );
          })}
        </div>
      )}

      {panel && ["camera", "palette", "style"].includes(panel) && (
        <div
          className="cw-popover cw-preset-popover"
          role="dialog"
          aria-label={`${presetLabels[panel as PresetKey]}选项`}
        >
          <div className="cw-popover-heading">
            <strong>
              选择{presetLabels[panel as PresetKey]} · 本地提示词预设
            </strong>
            <button
              type="button"
              className="cw-icon-button"
              aria-label="关闭选项"
              onClick={() => setPanel(null)}
            >
              <CanvasIcon name="close" size={15} />
            </button>
          </div>
          <div className="cw-preset-options">
            {presets[panel as PresetKey].map((preset) => (
              <button
                type="button"
                key={preset.name}
                className={`cw-preset-option${settings[panel as PresetKey] === preset.name ? " cw-is-active" : ""}`}
                onClick={() => applyPreset(panel as PresetKey, preset)}
                aria-pressed={settings[panel as PresetKey] === preset.name}
              >
                <span
                  className="cw-preset-sample"
                  style={{ background: preset.color }}
                >
                  <CanvasIcon
                    name={presetIcons[panel as PresetKey]}
                    size={25}
                  />
                </span>
                <strong>{preset.name}</strong>
                <small>{preset.hint}</small>
              </button>
            ))}
          </div>
        </div>
      )}

      {firstLast && (
        <div className="cw-frame-slots" aria-label="首尾帧参考">
          {(
            [
              ["firstFrameNodeId", "首帧"],
              ["lastFrameNodeId", "尾帧"],
            ] as const
          ).map(([field, label], index) => {
            const id = settings[field];
            const node = frameCandidates.find((item) => item.id === id);
            const unavailable = Boolean(
              id && (!node?.data.src || node.data.assetState === "missing"),
            );
            return (
              <div
                key={field}
                className={`cw-frame-slot${unavailable ? " cw-frame-unavailable" : ""}`}
              >
                <span className="cw-frame-thumbnail">
                  {node?.data.src && node.data.assetState !== "missing" ? (
                    <img
                      src={node.data.src}
                      alt={`${label}：${node.data.title}`}
                      draggable={false}
                    />
                  ) : (
                    <CanvasIcon name="image" size={24} />
                  )}
                </span>
                <label>
                  <strong>
                    {label}{" "}
                    <small>
                      {index ? "可选，需先选择首帧" : "可选，可直接文生视频"}
                    </small>
                  </strong>
                  <select
                    aria-label={`选择${label}`}
                    value={id ?? ""}
                    disabled={running}
                    onChange={(event) =>
                      updateSettings({
                        [field]: event.target.value || undefined,
                      })
                    }
                  >
                    <option value="">不使用{label}</option>
                    {id && !node && (
                      <option value={id}>原素材未连接，请重选</option>
                    )}
                    {frameCandidates.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        disabled={
                          !item.data.src || item.data.assetState === "missing"
                        }
                      >
                        {item.data.title}
                        {!item.data.src || item.data.assetState === "missing"
                          ? "（素材不可用）"
                          : ""}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            );
          })}
          <button
            type="button"
            className="cw-frame-swap"
            aria-label="互换首尾帧"
            title="两个槽位都有素材时可互换"
            disabled={
              running ||
              !settings.firstFrameNodeId ||
              !settings.lastFrameNodeId ||
              [settings.firstFrameNodeId, settings.lastFrameNodeId].some(
                (id) =>
                  !frameCandidates.some(
                    (node) =>
                      node.id === id &&
                      node.data.src &&
                      node.data.assetState !== "missing",
                  ),
              )
            }
            onClick={() =>
              updateSettings({
                firstFrameNodeId: settings.lastFrameNodeId,
                lastFrameNodeId: settings.firstFrameNodeId,
              })
            }
          >
            ⇄
          </button>
          <button
            type="button"
            className="cw-frame-add"
            disabled={running}
            onClick={onPickReference}
          >
            <CanvasIcon name="plus" size={15} />
            添加图片参考
          </button>
        </div>
      )}

      {reading && (
        <button
          type="button"
          className="cw-voice-trigger"
          aria-expanded={panel === "voices"}
          onClick={() => togglePanel("voices")}
        >
          <CanvasIcon name="audio" size={16} />
          <span>语音库</span>
          <strong>{settings.voiceName || "选择音色"}</strong>
          <CanvasIcon name="chevronDown" size={12} />
        </button>
      )}

      <div className="cw-composer-body">
        {!firstLast && !reading && !music && (
          <div className="cw-reference-strip">
            <button
              type="button"
              className="cw-add-reference"
              onClick={onPickReference}
              aria-label="添加参考素材"
              title="添加参考素材"
            >
              <CanvasIcon name="plus" size={20} />
              <span>参考</span>
            </button>
            {incomingNodes.map((node) => (
              <button
                type="button"
                className="cw-reference-chip"
                key={node.id}
                onClick={() => insertReference(node)}
                disabled={Boolean(generationReferenceIssue(node, settings))}
                title={`${generationReferenceRole(node)}：${node.data.title}${generationReferenceIssue(node, settings) ? ` · ${generationReferenceIssue(node, settings)}` : ""}`}
              >
                {node.data.kind === "image" &&
                node.data.src &&
                node.data.assetState !== "missing" ? (
                  <img
                    src={node.data.src}
                    alt={node.data.title}
                    draggable={false}
                  />
                ) : (
                  <CanvasIcon name={node.data.kind} size={22} />
                )}
                <span>{node.data.title}</span>
              </button>
            ))}
          </div>
        )}
        <textarea
          ref={textareaRef}
          className="cw-prompt-input"
          aria-label={reading ? "朗读文本" : "生成提示词"}
          value={prompt}
          placeholder={
            mode === "image"
              ? "描述你想要的画面，或添加图片作为参考…"
              : mode === "video"
                ? "描述画面的运动、镜头和故事…"
                : reading
                  ? "输入需要朗读的文本…"
                  : music
                    ? "描述音乐风格、情绪、节奏和乐器…"
                    : "描述台词、音色和声音场景，可添加音频参考…"
          }
          spellCheck={false}
          onChange={(event) => updatePrompt(event.target.value)}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" &&
              (event.ctrlKey || event.metaKey) &&
              canRun &&
              !running
            ) {
              event.preventDefault();
              onRun();
            }
          }}
        />
      </div>

      <div className="cw-composer-footer">
        <div className="cw-model-select">
          <CanvasIcon name={mode === "audio" ? "audio" : "sparkle"} size={15} />
          <select
            aria-label="生成模型"
            value={settings.model}
            disabled={running}
            onChange={(event) => updateSettings({ model: event.target.value })}
          >
            {currentModels.map((model) => (
              <option key={model} value={model}>
                {model}
                {["Seedance 2.0", "Seedance 2.0 Fast"].includes(model)
                  ? " · VIP"
                  : ""}
              </option>
            ))}
          </select>
          <CanvasIcon name="chevronDown" size={12} />
        </div>
        <button
          type="button"
          className={`cw-parameter-trigger${panel === "parameters" ? " cw-is-active" : ""}`}
          aria-label="生成参数"
          aria-expanded={panel === "parameters"}
          onClick={() => togglePanel("parameters")}
        >
          <CanvasIcon name="sliders" size={15} />
          <span>
            {mode === "audio"
              ? music
                ? `${settings.durationSeconds} 秒`
                : reading
                  ? "文本朗读"
                  : "全能配音"
              : `${settings.aspectRatio} · ${settings.resolution}${mode === "video" ? ` · ${settings.durationSeconds} 秒` : ` · ${settings.count} 张`}`}
          </span>
        </button>
        {!firstLast && !reading && !music && (
          <button
            type="button"
            className={`cw-reference-trigger${panel === "references" ? " cw-is-active" : ""}`}
            aria-label="引用已连接节点"
            aria-expanded={panel === "references"}
            onClick={() => togglePanel("references")}
          >
            @ <span>引用</span>
          </button>
        )}
        <span className="cw-footer-spacer" />
        <button
          type="button"
          className={`cw-run-button${running ? " cw-run-button-cancel" : ""}`}
          aria-label={running ? "取消本地任务" : "创建本地任务"}
          title={
            running
              ? "取消本地任务"
              : canRun
                ? "创建本地任务 · ⌘/Ctrl + Enter · 未连接生成服务"
                : (blocker ?? "请补全创作参数")
          }
          disabled={!running && !canRun}
          onClick={running ? onCancel : onRun}
        >
          <CanvasIcon name={running ? "stop" : "arrowUp"} size={20} />
        </button>
      </div>
      <div className="cw-generation-evidence">
        <span
          title={
            price?.context ??
            "未观察到当前模型、模式、清晰度、时长与数量组合的价格"
          }
        >
          {price ? (
            <>
              <strong>{price.credits} 积分</strong>
              {price.beforeDiscount && <del>{price.beforeDiscount}</del>}
              <small>{price.context}</small>
            </>
          ) : (
            <span>当前组合价格未核实</span>
          )}
        </span>
        <small>原站实测参考，非本地报价</small>
      </div>
      {model?.note && <p className="cw-generation-note">{model.note}</p>}
      {settings.imagePreset === "product-views" && (
        <p className="cw-generation-note">
          产品三视图预设已记录；需要连接支持此预设的生成服务后才能得到图片。
        </p>
      )}
      {blocker && (
        <p className="cw-generation-blocker" role="status">
          {blocker}
        </p>
      )}
      <div className="cw-local-note">
        {running ? (
          <>
            <span className="cw-running-dot" />
            正在准备本地任务，可随时取消
          </>
        ) : (
          "仅保存创作请求，不生成媒体，不扣除积分"
        )}
      </div>

      {panel === "parameters" && (
        <div
          className="cw-popover cw-parameters-popover"
          role="dialog"
          aria-label="生成参数设置"
        >
          <div className="cw-popover-heading">
            <strong>生成参数</strong>
            <button
              type="button"
              className="cw-icon-button"
              aria-label="关闭参数"
              onClick={() => setPanel(null)}
            >
              <CanvasIcon name="close" size={15} />
            </button>
          </div>
          {mode !== "audio" && (
            <div className="cw-parameter-section">
              <span className="cw-field-label">比例</span>
              <div className="cw-ratio-options">
                {ratios.map((ratio) => {
                  const [w, h] = ratio.split(":").map(Number);
                  return (
                    <button
                      type="button"
                      key={ratio}
                      className={
                        settings.aspectRatio === ratio ? "cw-is-active" : ""
                      }
                      onClick={() => updateSettings({ aspectRatio: ratio })}
                      aria-pressed={settings.aspectRatio === ratio}
                    >
                      <span
                        className="cw-ratio-box"
                        style={{
                          width: `${Math.min(23, (21 * w!) / h!)}px`,
                          height: `${Math.min(23, (21 * h!) / w!)}px`,
                        }}
                      />
                      <span>{ratio}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {mode !== "audio" && (
            <div className="cw-parameter-section">
              <span className="cw-field-label">已核实清晰度</span>
              <div className="cw-segment-options">
                {resolutions.map((resolution) => (
                  <button
                    type="button"
                    key={resolution}
                    className={
                      settings.resolution === resolution ? "cw-is-active" : ""
                    }
                    onClick={() => updateSettings({ resolution })}
                    aria-pressed={settings.resolution === resolution}
                  >
                    {resolution}
                  </button>
                ))}
                {!resolutions.length && (
                  <span className="cw-parameter-unknown">
                    等待服务能力，尚未核实
                  </span>
                )}
              </div>
            </div>
          )}
          {(mode === "video" || music) && (
            <div className="cw-parameter-section">
              <span className="cw-field-label">
                时长
                {duration &&
                  ` · ${duration.min === duration.max ? `${duration.min} 秒已核实` : `${duration.min}–${duration.max} 秒`}`}
              </span>
              {duration ? (
                <div className="cw-duration-controls">
                  <input
                    type="range"
                    aria-label="创作时长"
                    min={duration.min}
                    max={duration.max}
                    step={duration.step}
                    disabled={running || duration.min === duration.max}
                    value={settings.durationSeconds}
                    onChange={(event) =>
                      updateSettings({
                        durationSeconds: Number(event.target.value),
                      })
                    }
                  />
                  <select
                    aria-label="精确创作时长"
                    value={settings.durationSeconds}
                    disabled={running}
                    onChange={(event) =>
                      updateSettings({
                        durationSeconds: Number(event.target.value),
                      })
                    }
                  >
                    {Array.from(
                      { length: duration.max - duration.min + 1 },
                      (_, index) => duration.min + index,
                    ).map((value) => (
                      <option key={value} value={value}>
                        {value} 秒
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <span className="cw-parameter-unknown">
                  该模型普通生成的时长范围尚未核实
                </span>
              )}
            </div>
          )}
          <div className="cw-parameter-section">
            <span className="cw-field-label">
              本地任务数量 · 多份请求不推算原站价格
            </span>
            <div className="cw-count-options">
              {Array.from({ length: 8 }, (_, index) => index + 1).map(
                (count) => (
                  <button
                    type="button"
                    key={count}
                    className={settings.count === count ? "cw-is-active" : ""}
                    onClick={() => updateSettings({ count })}
                    aria-pressed={settings.count === count}
                  >
                    {count}
                  </button>
                ),
              )}
            </div>
          </div>
          {mode === "video" && (
            <label className="cw-audio-toggle">
              <span>
                <CanvasIcon name="volume" size={16} />
                请求包含音频（服务能力待确认）
              </span>
              <input
                type="checkbox"
                checked={settings.audioEnabled}
                onChange={(event) =>
                  updateSettings({ audioEnabled: event.target.checked })
                }
              />
            </label>
          )}
          {mode === "audio" && !music && (
            <p className="cw-generation-note">
              音频时长由内容与服务结果决定；此处不虚构时长、采样率或可用音色。
            </p>
          )}
          {mode !== "audio" && (
            <p className="cw-generation-note">
              比例为本地创作偏好；各模型的完整能力须由真实服务确认。
            </p>
          )}
        </div>
      )}

      {panel === "voices" && (
        <div
          className="cw-popover cw-voices-popover"
          role="dialog"
          aria-label="语音库"
        >
          <div className="cw-popover-heading">
            <strong>语音库 · 已观察音色</strong>
            <button
              type="button"
              className="cw-icon-button"
              aria-label="关闭语音库"
              onClick={() => setPanel(null)}
            >
              <CanvasIcon name="close" size={15} />
            </button>
          </div>
          <button
            type="button"
            className={`cw-observed-voice${settings.voiceName === "动漫海绵" ? " cw-is-active" : ""}`}
            aria-pressed={settings.voiceName === "动漫海绵"}
            onClick={() => {
              updateSettings({ voiceName: "动漫海绵" });
              setPanel(null);
            }}
          >
            <CanvasIcon name="audio" size={22} />
            <span>
              <strong>动漫海绵</strong>
              <small>文本朗读默认音色 · 原站实测</small>
            </span>
          </button>
          <p className="cw-generation-note">
            完整音色库与试听需要真实服务；本地只保留已观察音色名称。
          </p>
        </div>
      )}

      {panel === "references" && (
        <div
          className="cw-popover cw-references-popover"
          role="dialog"
          aria-label="引用节点"
        >
          <div className="cw-popover-heading">
            <strong>已连接的参考</strong>
            <button
              type="button"
              className="cw-icon-button"
              aria-label="关闭引用"
              onClick={() => setPanel(null)}
            >
              <CanvasIcon name="close" size={15} />
            </button>
          </div>
          {incomingNodes.length ? (
            incomingNodes.map((node) => (
              <button
                type="button"
                className="cw-reference-option"
                key={node.id}
                onClick={() => insertReference(node)}
                disabled={Boolean(generationReferenceIssue(node, settings))}
                title={
                  generationReferenceIssue(node, settings) ??
                  `插入 ${node.data.title} 的名称引用`
                }
              >
                <CanvasIcon name={node.data.kind} size={17} />
                <span>
                  {node.data.title}
                  <small className="cw-reference-role">
                    {generationReferenceIssue(node, settings) ??
                      generationReferenceRole(node)}
                  </small>
                </span>
                <span>@</span>
              </button>
            ))
          ) : (
            <p className="cw-empty-references">
              添加参考素材，或把其他节点连接到此节点。
            </p>
          )}
          <button
            type="button"
            className="cw-add-reference-row"
            onClick={() => {
              setPanel(null);
              onPickReference();
            }}
          >
            <CanvasIcon name="plus" size={16} />
            添加参考素材
          </button>
        </div>
      )}
    </div>
  );
}

export default NodeComposer;
