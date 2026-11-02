# 生成节点的默认模式与模型来源

本文覆盖三项相关改造：视频节点默认模式改为「全能参考」、模型下拉只保留本地配置模型、打开节点时默认模型与节点设置保持一致。

## 1. 背景

现状有三个彼此牵连的问题：

- 新建的视频节点有时以「首尾帧」打开，有时以「全能参考」打开，取决于它是从哪条路径创建的。
- 模型下拉里混着两组来源：本地配置的服务模型，以及一整套即梦参考目录模型。目录组实际上不可用（见 §2.2）。
- 打开节点时显示的模型可能与节点里存的模型不是同一个值，属于静默回退。

## 2. 现状分析

### 2.1 视频模式有四个写入点，默认值不一致

| 位置 | 写入值 | 触发场景 |
| --- | --- | --- |
| `src/canvas/generationCatalog.ts:155` | `"reference"` | `generationDefaults()`，工具栏新建空白节点走这里 |
| `src/canvas/linkedResults.ts:303` | `"first-last"` | `pendingSettings()`，动作/工具产出的空白结果节点 |
| `src/canvas/nodeActionWorkflow.ts:38` | `"reference"` | 视频延长 |
| `src/canvas/assets.ts:80` | `"reference"` | 示例工程数据 |

`linkedResults.ts:303` 是唯一硬编码 `first-last` 的地方：

```ts
function pendingSettings(kind: "image" | "video" | "audio") {
  return {
    ...DEFAULT_SETTINGS,
    mode: kind,
    count: 1,
    ...(kind === "video"
      ? { videoMode: "first-last" as const, resolution: "auto" }
      : {}),
  };
}
```

它被两处使用：`appendPendingResult()`（`linkedResults.ts:253`，`CanvasWorkspace.tsx:2718` 调用）与 `pendingResultNode()`（`linkedResults.ts:337`）。

**实测验证**（真实 Chrome + 工程 `111`）：

- 点击工具栏「添加视频」新建节点 → `[aria-label="视频创作模式"]` 的值是 `reference`，模型是目录里的 `Seedance 2.0`。
- 该工程的历史快照里，带 `modelConfigId` 的视频 spec 记为 `videoMode: "reference"`，不带 `modelConfigId` 的记为 `videoMode: "first_frame"`。

也就是说：走 `generationDefaults` 的新建路径给出「全能参考」，只有 `pendingSettings` 这条路径给出「首尾帧」。

截图里那个空节点（模型 `Seedance 2.0`、模式「首尾帧」）的成因可以这样确定：

1. 下拉选中的 `Seedance 2.0` 属于目录组，说明该节点没有 `modelConfigId`——否则值会是 `config:<id>` 并显示本地模型的标签。
2. 界面的模式下拉读 `settings.videoMode`（`NodeComposer.tsx:507`）。要显示「首尾帧」，节点的 `settings.videoMode` 就必须是 `"first-last"`。
3. 全仓检索 `videoMode: "first-last"` 的写入点只有 `linkedResults.ts:303` 一处（`pendingSettings`，经 `appendPendingResult` 与 `pendingResultNode` 两处调用）。

因此这个节点的设置要么由 `pendingSettings` 写入，要么是用户在某次会话里手动选择后被正常持久化。两种可能的区分只影响"复现步骤"，不影响结论。

工程侧数据可作旁证：该工程 5 条视频 spec 中，带 `modelConfigId` 的 3 条都是 `reference`，不带的 2 条都是 `first_frame`——**是否接上本地模型配置，与模式默认值直接相关**。

不论属于哪种情况，结论一致：**新建默认必须收敛到一处**，否则无法预测节点打开时的模式。

### 2.2 第二处不一致：投影层的默认值是 first_frame

`src/backend/creationProjection.ts:681-684`：

```ts
videoMode:
  settings?.videoMode === "first-last"
    ? "first_frame"
    : (settings?.videoMode ?? "first_frame"),
```

当节点的 `settings.videoMode` 缺失时，提交给服务的 spec 是 `first_frame`。但界面上的下拉（`NodeComposer.tsx:507`）用的是：

```tsx
value={settings.videoMode ?? "reference"}
```

**界面显示「全能参考」，实际提交「首尾帧」。** 这是用户感知「默认是首尾帧」的第二个来源，与 `pendingSettings` 相互独立，必须分别修。

服务端枚举的映射在 `src/backend/rules.ts:200`：`first-last` → `first_frame`，`reference` → `reference`。

### 2.3 模型下拉的两组来源

`NodeComposer.tsx:445-460` 渲染两个 `optgroup`：

```tsx
{serviceModels.length > 0 && (
  <optgroup label="本地服务">{/* config:<id> */}</optgroup>
)}
<optgroup label="即梦参考目录 · 未连接">
  {(backend ? choices : currentModels).map(/* 目录模型名 */)}
</optgroup>
```

- `serviceModels`（`NodeComposer.tsx:137-139`）来自 `backendModels`，即 `/api/model-configs` 返回的本地配置，已排除分割类模型（`rules.ts:71` 的 `isGenerationModel`）。
- `choices` / `currentModels`（`NodeComposer.tsx:150-154`）来自 `GENERATION_MODELS` 常量（`generationCatalog.ts:20`）。

目录组实际是死路，两条路径都提交不了：

- 选中目录模型时 `settings.modelConfigId` 为空，`backendBlocker` 直接返回「所选模型配置已删除或尚未读取，请在设置中重新选择。」（`rules.ts:378`）。
- 去掉后端后走 `generationBlocker`，而目录里多数模型 `verifiedParameters` 为 `false`，返回「仅确认了模型菜单入口；参数范围待核实，暂不能提交本地任务。」（`generationCatalog.ts:285-286`）。

对比：助手侧的选择器（`AssistantPickers.tsx:16-31`）早就是"只列本地配置"，只有节点创作器还留着目录组。

### 2.4 打开节点时的模型静默回退

`getNodeGenerationSettings()`（`NodeComposer.tsx:64-107`）用一份历史模型名白名单做回退：

```ts
const legacyModel = ["本地交互演示", "本地音频工作流", "配乐创意", "环境音创意"]
  .includes(sameMode?.model ?? "");
...
model: sameMode?.model && !legacyModel ? sameMode.model : defaults.model,
```

即：节点里存的是「本地交互演示」，界面显示 `defaults.model`，视频就是 `Seedance 2.0`。**显示值与存储值不一致**，而真正参与提交的是 `getNodeGenerationSettings` 的返回值，所以用户看到什么、提交什么，取决于这份回退是否命中。

若节点确实来自 `pendingSettings`（§2.1），成因链条就是：存下 `model: "本地交互演示"` + `videoMode: "first-last"` + `resolution: "auto"`，回退把模型换成 `Seedance 2.0`，模式与分辨率原样保留，于是呈现出「Seedance 2.0 / 首尾帧」的组合。

## 3. 目标行为

| 需求 | 目标 |
| --- | --- |
| 默认视频模式 | 所有新建路径都以「全能参考」（`videoMode: "reference"`）打开；界面显示与提交值一致 |
| 模型来源 | 节点创作器只列本地配置的生成模型；没有配置时给出明确空态并禁止提交 |
| 模型一致性 | 节点**创建时**取对话框当前选中的模型并写进节点；创建之后对话框再改，节点不跟着变 |

「模型一致性」的口径由用户两次确认后定稿：

1. 第一次：节点默认模型要与对话框的默认模型一致，不是与某个独立的全局设置一致；
2. 第二次：一致只发生在创建那一刻，创建之后对话框变动不影响已有节点。

因此对话框的模型选择器是**创建时的取值来源**，节点自己的 `settings.modelConfigId` / `agentSettings.modelConfigId` 是之后的唯一来源。

## 4. 技术方案

### 4.1 收敛默认视频模式

把 `linkedResults.ts:296-306` 的 `pendingSettings` 改为委托默认工厂，不再自己拼 `videoMode` 与 `resolution`：

```ts
function pendingSettings(kind: "image" | "video" | "audio") {
  return { ...generationDefaults(kind), count: 1 };
}
```

注意 `generationDefaults` 给视频的分辨率是 `720P`，而旧实现给的是 `"auto"`。`"auto"` 在 `backendResolutions` 里表示跟随服务，`720P` 是具体档位。改动前要确认：留 `"auto"` 更接近原意，则改为显式覆盖 `resolution: "auto"`，但保留 `videoMode: "reference"`。

建议保留 `resolution: "auto"`、只改 `videoMode`，把改动面压到最小，避免顺带改变新建节点的分辨率默认。

同时修 `creationProjection.ts:681-684`，让缺失值与界面口径一致：

```ts
videoMode:
  settings?.videoMode === "first-last"
    ? "first_frame"
    : (settings?.videoMode ?? "reference"),
```

这一行是「界面说全能参考、提交说首尾帧」的根因，必须与 4.1 一起改，否则只改新建路径仍会出现不一致。

### 4.2 只保留本地配置模型

删掉 `NodeComposer.tsx:454-460` 整个目录 `optgroup`，并清理 `choices` / `currentModels`（`NodeComposer.tsx:150-154`）。

三种状态要分别处理：

| 状态 | 表现 |
| --- | --- |
| 有本地模型 | 下拉只列「本地服务」一个组 |
| 无任何本地模型 | 渲染一个禁用选项「未配置生成模型 · 请到设置添加」，提交按钮禁用，提示文案指向设置页 |
| 节点引用的 `modelConfigId` 已被删除 | 保留现有的「（配置不可用）」占位选项（`NodeComposer.tsx:440-444`），提示重新选择 |

注意 `settings.model` 仍要写入（历史兼容与展示），但真正参与提交的是 `modelConfigId`。移除目录组后，`model` 应该等于所选服务模型的 `modelLabel(config)`（`rules.ts:92`），由 `chooseModel` 已经保证。

`GENERATION_MODELS` 常量本身不删：费用估算（`generationCatalog.ts:442-455`）与旧工程展示仍在读它。只是不再作为"可选项"来源。

### 4.3 模型解析收敛为一个纯函数

新增 `src/canvas/modelResolution.ts`（纯函数，便于单测）：

```ts
export function resolveGenerationModel(
  settings: GenerationSettings,
  mode: "image" | "video" | "audio",
  models: readonly ModelConfig[],
  preferred?: PreferredModels,
): ModelResolution
```

规则：

1. `settings.modelConfigId` 存在、`kind === mode`、且是生成模型 → 原样返回（节点自己的选择优先）。
2. 否则取 `preferred[mode]` 指向的模型，存在且类型匹配才采用。
3. 再否则取同 `kind` 的生成模型，排序后取第一个，保证确定性（不要依赖接口返回顺序）。
4. 一个都没有 → `unconfigured`，UI 走 §4.2 的空态。

`preferred` 即 `PreferredModels`，由 `AssistantPanel` 通过 `onModelSelections` 上报给 `CanvasWorkspace` 的 `assistantModels` 状态。**它只在创建节点的瞬间被读取一次**（见 §4.6），渲染与提交路径都不再传它。

`getNodeGenerationSettings()` 与 `runServiceGeneration()`（`CanvasWorkspace.tsx:2964-2971`）都走这个函数，避免两处各自解析出不同结果。

### 4.4 一次性写回与幂等

节点打开时（`NodeComposer` 挂载）如果解析结果与节点存储不同，写回一次：

- 只在确实不同时调用 `onUpdate`，避免每次打开都产生历史记录。
- 写回内容包含 `model` 与 `modelConfigId` 两项。
- 不要使用 `useEffect` + `onUpdate` 直接触发历史命令的常见坑：`onUpdate` 会走 `command({ type: "update-node" })`（`CanvasWorkspace.tsx:4853-4859`），落到撤销栈。建议在读取侧（`getNodeGenerationSettings` 的调用点或工程加载时的迁移）完成，而不是在渲染期写回。

更稳妥的做法：把「解析」放在工程加载的迁移里（见 4.5），打开节点时只读不写。

### 4.5 只读解析，不写回（已实现的选择）

§4.4 里"打开节点写回一次"的方案最终没有采纳。原因是写回必须经过 `command({ type: "update-node" })`，会在用户没有做任何操作的情况下产生一条历史记录，且打开旧工程的时机难以与撤销栈协调。

改为纯读取侧解析：

- `resolveGenerationModel()` 是纯函数，输入相同（节点设置 + 模型列表）就得到相同结果，因此"打开时显示的模型"天然稳定。
- `getNodeGenerationSettings()` 增补可选的 `models` 参数，在返回前套用解析结果。凡是拿得到模型列表的调用点（创作器、`runServiceGeneration`、提交分发、接续判断）都走同一条路径，显示与提交不可能分叉。
- 节点存储的 `settings.modelConfigId` 保持原样，**只有创建节点或用户真正选择模型时才落盘**，打开节点不会隐式改写工程数据。

`legacyModel` 白名单（`NodeComposer.tsx`）保留未删：解析在它之后执行，会把历史名覆盖成本地模型标签。它是死路径，但删掉会改变"没有模型列表"的调用点的显示，收益不抵风险。

### 4.6 创建时快照（模型一致性的落点）

需求定稿为"创建时一致、创建后冻结"，所以取值必须发生在**创建**这个动作里，而不是渲染期：

```ts
// CanvasWorkspace.tsx，addNode 之前
const snapshotModel = (kind: CanvasNodeKind): Partial<CanvasNodeData> => {
  if (kind === "text") {
    const agents = backendCatalog.models.filter((m) => m.kind === "agent");
    const chosen = agents.find((m) => m.id === assistantModels.agent) ?? agents[0];
    return chosen
      ? { agentSettings: { modelConfigId: chosen.id, thinking: "auto", maxTokens: 8192 } }
      : {};
  }
  if (kind !== "image" && kind !== "video" && kind !== "audio") return {};
  return {
    settings: applyModelResolution(
      generationDefaults(kind),
      resolveGenerationModel({ modelConfigId: undefined }, kind, backendCatalog.models, assistantModels),
    ),
  };
};
```

`addNode()` 把它铺在 `extra` 之前，`extra` 仍可覆盖：

```ts
const node = createNode(kind, where, {
  ...snapshotModel(kind),
  title: `${labels[kind]} ${count}`,
  ...extra,
});
```

三条创建路径都要覆盖：

| 路径 | 落点 |
| --- | --- |
| 工具栏 / 右键菜单 / 快捷键新建 | `addNode`（`CanvasWorkspace.tsx`） |
| 工具运行产生的占位节点 | `appendPendingResult` 新增可选 `model` 参数，落地时合并到 `pendingSettings(kind)` 之上 |
| 视频延长草稿 | `createVideoExtensionDraft` 继承源视频的模型；源节点无模型时走确定性回退 |

占位节点这一条有个坑：`pendingResultNode()` 用"设置是否等于 `pendingSettings(kind)`"判断占位节点是否已被用户编辑过。模型快照必然与之不同，所以该判断对 `model` / `modelConfigId` 两个键放行，否则占位节点不会被认领、运行结果填不进去。

文本节点的持久化链路是现成的：`node.data.agentSettings.modelConfigId` → `specInput` 写入 `spec.modelConfigId` → 加载时 `creationProjection.ts:463-467` 还原成 `agentSettings`。因此快照能跨刷新保留。

## 5. 涉及文件

| 文件 | 改动 |
| --- | --- |
| `src/canvas/linkedResults.ts` | `pendingSettings` 的 `videoMode` 改为 `"reference"`；`appendPendingResult` 新增 `model` 参数；`pendingResultNode` 对 `model` / `modelConfigId` 放行 |
| `src/backend/creationProjection.ts` | 缺失 `videoMode` 时的默认值由 `first_frame` 改为 `"reference"` |
| `src/canvas/modelResolution.ts` | **新增**：`resolveGenerationModel` / `applyModelResolution` 纯函数，支持 `PreferredModels` |
| `src/canvas/NodeComposer.tsx` | 接入解析；删除目录 `optgroup`；未配置空态与禁用提交 |
| `src/canvas/AssistantPanel.tsx` | 新增 `onModelSelections`，把模型选择器状态上报给画布 |
| `src/canvas/CanvasWorkspace.tsx` | 持有 `assistantModels`；新增 `snapshotModel` 并在 `addNode` / 占位节点路径上落地 |
| `tests/modelResolution.test.ts` | **新增**：13 条解析规则用例（含 `preferred` 优先级） |
| `tests/canvasPendingResults.test.ts` | 新增「视频空白节点为全能参考」「占位节点保留传入模型」两条用例 |
| `src/canvas/generationCatalog.ts` | 未改动：`generationDefaults` 已是 `reference`，常量保留给费用估算 |

## 6. 验收清单

### 需求 1：默认模式

- [x] 工具栏「添加视频」新建节点，模式为「全能参考」
- [x] 从图片节点发起视频动作产出的空白节点，模式为「全能参考」
- [x] 视频延长节点仍为「全能参考」
- [x] 节点 `settings.videoMode` 缺失时，提交 spec 为 `reference` 而非 `first_frame`
- [x] 用户手动切到「首尾帧」后，重新打开节点仍是「首尾帧」

### 需求 2：只保留本地模型

- [x] 下拉里不再出现「即梦参考目录」分组
- [x] 本地配置两个模型时，只列这两个
- [x] 无本地模型时显示空态且提交按钮禁用
- [x] 引用的配置被删除时提示重新选择，而不是静默回退

### 需求 3：模型一致性

- [x] 打开节点显示的模型与 `settings.modelConfigId` 对应的模型一致
- [x] 对话框选中 A 模型时新建的文本节点，模型为 A
- [x] 新建后把对话框切到 B，节点仍为 A（保持选中与重新打开都一样）
- [x] 图片 / 视频 / 音频节点同样在创建时取对话框当时的选择
- [x] 存储模型为历史名（如「本地交互演示」）时，解析结果稳定且不再漂移
- [x] 连续打开关闭同一节点，模型不变，且不新增历史记录
- [x] 旧工程无需手工重选模型即可直接提交

### 回归

- [x] `node --test tests/*.test.ts` 全绿（415 项）
- [x] 图片、音频节点的模型选择同样只剩本地模型
- [x] 助手侧模型选择器不受影响
- [ ] 费用估算仍能对旧 spec 给出结果（`generationCatalog.ts` 未改动，未单独验证）

## 7. 风险与注意事项

| 风险 | 说明 | 应对 |
| --- | --- | --- |
| 无本地模型时不可用 | 移除目录组后，未配置服务就完全无法提交 | 空态文案直接引导到设置页，而不是留一个假选项 |
| 解析顺序不确定 | `/model-configs` 的返回顺序可能变化，导致默认模型漂移 | 按 `kind` + `modelId` 排序后取首个 |
| 误写历史 | 打开工程即写回会生成 commit | 只在创建与用户选择时落盘，打开不写回 |
| 占位节点被误判为已编辑 | `pendingResultNode` 以"设置等于默认值"判定未编辑，模型快照必然不等 | 该判定对 `model` / `modelConfigId` 放行 |
| 旧工程 `first-last` 语义 | 强制迁移会改变用户既有参数 | 明确不迁移，只改新建默认 |
| 目录常量被误删 | `GENERATION_MODELS` 还承载费用估算 | 只移除"作为可选项"，保留常量 |
| `resolution: "auto"` 与 `720P` | `pendingSettings` 与 `generationDefaults` 取值不同 | 改动只针对 `videoMode`，分辨率保持原值 |

## 8. 实施顺序

1. 修 `creationProjection.ts` 的 `first_frame` 默认值（最小改动，先消掉界面与提交的矛盾）
2. 把 `pendingSettings` 的 `videoMode` 改为 `reference`
3. 抽出 `resolveGenerationModel` 并补单测
4. `NodeComposer` 接入解析函数
5. 删除目录 `optgroup`，补空态与禁用提交
6. 更新既有测试，跑浏览器验证

第 6 步「加载时迁移旧工程」按 §4.5 取消。

## 9. 待确认

1. **「与设置保持一致」的口径。** 已定稿：**创建时取对话框（助手模型选择器）当前选中的模型，创建之后不再跟随**。因此不需要设置页的全局默认字段，也不需要在渲染期读取对话框状态。

   保留记录：另一种读数（设置页里配一个全局默认模型）需要扩展 `GeneralSettings` 与 `/settings`，本次未做。

2. **旧工程的「首尾帧」是否保留。** 本次保留：实测工程 `111` 里仍有 1 个节点显示「首尾帧」，那是用户显式选过的值。若希望统一迁到「全能参考」，需要另加一条有破坏性的迁移规则。

3. **目录模型是否彻底下线。** 目前只把它从选择器里移除。若要连费用估算一起删，需要先确认 credits 数据（`generationCatalog.ts:442-455`）是否还被其它地方使用。

## 10. 实施结果

改动 8 个文件、新增 2 个文件，未涉及 Python 侧。

| 验证项 | 结果 |
| --- | --- |
| `tsc --noEmit` | 通过 |
| `npm run build` | 通过 |
| `node --test tests/*.test.ts` | 415/415 |
| `pytest tests` | 593 通过，3 个 Windows 环境失败（符号链接权限、大小写不敏感文件系统），与本次改动无关 |

真实浏览器（Chrome CDP，工程 `111`）验证：

- 新建视频节点：模式 `reference`（全能参考），模型 `FastH3-Omni-INT8`，下拉只有「本地服务」一组，选项只有一个。
- 收起再打开同一节点：模型与模式均未变化。
- 遍历画布 7 个可编辑节点：全部只列本地模型；其中 6 个显示「全能参考」，1 个显示「首尾帧」（用户既存值，按设计保留）。
- 三种节点（图片 / 视频 / 音频）：模型分别为 `doubao-seedream-5.0-pro`、`FastH3-Omni-INT8`、`seed-tts-2.0`，均无目录模型。

创建时快照验证（工程 `空画布`，右键菜单新建文本节点）：

| 步骤 | 对话框 | 新建的文本节点 |
| --- | --- | --- |
| 对话框切到 `DeepSeek-V4.1-Flash-1017` | `DeepSeek-V4.1-Flash-1017` | — |
| 新建文本节点 | `DeepSeek-V4.1-Flash-1017` | `DeepSeek-V4.1-Flash-1017` |
| 对话框切到 `GLM-5.3-Flash`（节点仍打开） | `GLM-5.3-Flash` | `DeepSeek-V4.1-Flash-1017`（不变） |
| 取消选中后重新打开该节点 | `GLM-5.3-Flash` | `DeepSeek-V4.1-Flash-1017`（不变） |
| 对话框还原 `DeepSeek-V4-Pro` | `DeepSeek-V4-Pro` | 已回滚，节点随之删除 |

验证过程在工程 `111` 里产生过两次临时提交（一个空视频节点、一个空图片节点），已按 `project.json` 的 head 指针回滚并删除对应 commit，工程恢复到 9 个 canvasItem / 187 条提交。备份留在 `%TEMP%\od-111-*.json`。

工程 `空画布` 建节点同样产生 1 条临时提交（`ba55bb04`），已按同样方式回滚：head 回到 `9b53d480`，commits 27 条，与验证前完全一致。测试基线快照留在 `%TEMP%\od-before.json`。
