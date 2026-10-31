# 节点信息按钮 开发文档

## 1. 背景与目标

画布顶栏左侧目前只显示「项目名 ▼」和保存状态（`.cw-save-status`）。用户在编辑较大
画布时，无法快速知道当前画布有多少个节点、各类型各有多少。

本需求在项目名右侧增加一个**节点信息**入口：

- 默认呈灰色，鼠标悬停变亮，点击后弹出当前画布的节点统计面板。
- 画布为空时不显示该入口。

参考视觉见需求截图：圆角浮层，逐行列出「类型名 …… 数量」。

## 2. 数据来源

**统计在前端完成，不新增后端接口。**

勘查结论：

- `apps/api/src/museshow_api/main.py` 共 74 个路由，无节点统计端点；
  探测 `/node-stats`、`/stats`、`/nodes/stats`、`/summary` 均返回 404。
- `packages/core` 中无按类型聚合节点的实现（`Counter` / `groupby` / `by_kind`
  均无匹配）。
- `GET /api/projects/{id}/canvas` 返回**全量节点快照**，每个节点带 `kind` 字段。
- 前端 `CanvasWorkspace.tsx:438` 的 `doc = history.present` 已持有同一份节点数组。

因此无需请求后端：画布快照本身已包含统计所需的全部信息,再发起一次请求不会
得到新信息,反而增加一次往返延迟,并使面板无法实时跟随本地编辑。

> 实测样例（项目 `835820ac`）：`kind` 分布 `video: 22`、`image: 8`，共 30 个。

## 3. 现状勘查

| 项 | 位置 | 说明 |
| --- | --- | --- |
| 顶栏容器 | `src/canvas/CanvasWorkspace.tsx:4280` `<header className="cw-topbar">` | 内含 `.cw-project-heading` 与 `.cw-top-actions` |
| 左侧区 | 同上 `:4281` | 品牌图标 → `ProjectSelector` → `.cw-save-status` |
| 节点类型 | `src/canvas/model.ts:16` `CanvasNodeKind` | 共 11 种 |
| 文档结构 | `src/canvas/model.ts:194` `CanvasDocument` | `nodes` + 可选 `hiddenNodes` |
| 空画布判定 | `CanvasWorkspace.tsx:4394` `{!doc.nodes.length && ready && ...}` | 沿用同口径 |
| 中文标签 | `src/canvas/creationTools.ts:10-15` | 图片/视频/文本/音频/时间线/主体 |
| 顶栏层级 | `src/canvas/workspace.css:294` `z-index: 12`；助手打开时 `:323` 提升为 `31` | 见 §6.3 |
| 通用浮层 | `src/canvas/ComposerPopover.tsx` | 见 §5.3，**不复用** |

## 4. 统计口径

### 4.1 只统计 7 种类型

`CanvasNodeKind` 共 11 个取值，本面板**只展示以下 7 种**，其余 4 种
（`file`、`stack`、`tool`、`external`）即使存在于画布上也**不显示**：

| kind | 显示名 |
| --- | --- |
| `image` | 图片 |
| `video` | 视频 |
| `text` | 文本 |
| `audio` | 音频 |
| `subject` | 主体 |
| `timeline` | 时间线 |
| `group` | 组 |

> 这一取舍由需求确认：面板只覆盖这 7 类。其余类型不列行，也不计入总数
> （见 §4.4）。

### 4.2 统计范围

**只统计 `doc.nodes`，不统计 `doc.hiddenNodes`。**

`hiddenNodes` 表示「逻辑来源仍然存在，但展示被隐藏」（`model.ts:199`）。
面板若报出画布上看不见的数量会误导用户。

### 4.3 计数方式

- 按 `node.type` 分组计数。
- **`parentId` 嵌套的子节点同样计入**：它们确实是画布上的节点。
  一个组按 1 个 `group` 计数，其内部的图片各自计入「图片」。
- **只渲染数量 ≥ 1 的类型**，0 不显示（与截图一致）。

### 4.4 总数

按钮显示的总数 = **上述 7 类之和**，与面板各行数字之和严格一致。

不把 `file`/`stack`/`tool`/`external` 计入，否则按钮显示的总数会大于
面板各行之和，用户无法核对。

### 4.5 排序

固定顺序，不按数量排序（数量变化时不整列跳动）：

```
图片 → 视频 → 文本 → 音频 → 主体 → 时间线 → 组
```

与需求截图行序完全一致。

## 5. 实现方案

### 5.1 新增文件

**`src/canvas/nodeStats.ts`** —— 纯函数，便于单测：

```ts
import type { CanvasNodeKind, CanvasNode } from "./model";

export interface NodeStatEntry {
  kind: CanvasNodeKind;
  label: string;
  count: number;
}

/** Fixed display order for the node-info panel. */
export const NODE_STAT_ORDER: readonly CanvasNodeKind[] = [
  "image", "video", "text", "audio", "subject", "timeline", "group",
];

export const NODE_STAT_LABEL: Partial<Record<CanvasNodeKind, string>> = {
  image: "图片", video: "视频", text: "文本", audio: "音频",
  subject: "主体", timeline: "时间线", group: "组",
};

/**
 * Counts visible canvas nodes by kind, restricted to the kinds the panel
 * reports. Ignores kinds outside NODE_STAT_ORDER and ignores `hiddenNodes`:
 * they are logical sources whose presentation is hidden, so reporting them
 * would show counts with no visible counterpart.
 */
export function countNodesByKind(nodes: readonly CanvasNode[]): NodeStatEntry[];

/** Sum of countNodesByKind counts; equals the sum of the panel's rows. */
export function totalNodeCount(nodes: readonly CanvasNode[]): number;
```

返回只含 `count > 0` 的条目，按 `NODE_STAT_ORDER` 排序。

**`src/canvas/NodeInfoButton.tsx`** —— 按钮 + 面板：

```tsx
export function NodeInfoButton({ nodes }: { nodes: CanvasNode[] })
```

`nodes.length === 0` 时 `return null`。内部 `useState(open)`。

> 不提供「查看项目信息」入口（需求已明确不要）。

### 5.2 接入点

在 `CanvasWorkspace.tsx` 的 `.cw-save-status` 之后插入：

```tsx
<NodeInfoButton nodes={doc.nodes} />
```

### 5.3 面板定位

**不复用 `ComposerPopover`**：其定位逻辑（`composerPopoverGeometry.ts`）以
composer 元素的缩放比做补偿，并强制传入 composer 节点。顶栏按钮在 1:1 坐标系中，
两者前提不同。

采用 `position: absolute` 相对按钮定位。顶栏不是滚动容器，无需跟随滚动，
因此不需要 portal 和测量。

### 5.4 样式

新增到 `src/canvas/workspace.css`，并**同时提供浅色主题覆盖**
（`:root[data-theme="light"]`，与 `themes.css` 现有约定一致）。

- 面板背景、边框、阴影用 CSS 变量，默认值取深色板，light 主题覆盖同名变量。
- 数字列 `font-variant-numeric: tabular-nums`，避免位数变化抖动。
- 每行 `display: flex; justify-content: space-between;`。

> 参考写法：`library.css` 的「顶部声明默认深色变量 + 文件末尾集中 light 覆盖」。

## 6. 边界与风险

### 6.1 节点与事件隔离

面板需阻止事件冒泡到画布，避免拖动/框选。参考 `ComposerPopover`：
`onPointerDown` / `onWheel` / `onKeyDown` 均 `stopPropagation()`，
并加 `nodrag nopan nowheel` 类名。

### 6.2 与 `hiddenNodes` 的关系

节点被隐藏后计数减少、总数减少，总数归零时按钮消失。实现时确保没有分支
误把 `hiddenNodes` 计入。

### 6.3 层级冲突

顶栏 `z-index: 12`；助手面板打开时 `31`；`cw-popover` 为 `140`。
面板取值需高于 `31`，建议 `140` 同量级。

### 6.4 未就绪状态

`ready` 为 false 时 `doc.nodes` 可能为空，按钮因空画布规则隐藏，属合理表现。
需确认加载完成后不会因 `useState` 残留导致面板意外打开。

## 7. 交互设计

| 项 | 行为 |
| --- | --- |
| 位置 | `.cw-save-status` 之后，仍在 `.cw-project-heading` 内 |
| 默认态 | 次要文字色（灰），无背景 |
| 悬停态 | 文字变亮 + 浅色背景块，与项目名悬停反馈一致 |
| 聚焦态 | 可见 focus ring（键盘可达） |
| 文案 | `节点 {count}` |
| 无障碍 | `aria-describedby` 指向面板；面板 `role="tooltip"` |
| 显示条件 | `doc.nodes.length > 0` 时渲染，否则**不渲染 DOM** |
| 触发方式 | 鼠标移入即显示，**不需要点击** |
| 关闭方式 | 鼠标移出后自动消失（120ms 延迟，见 §7.1） |
| `Escape` | 关闭 |
| 键盘 | 触发器获得焦点时显示，失焦后关闭 |
| 实时性 | 数字直接由 `doc.nodes` 派生，不缓存在 state |

画布变空时按钮消失，若面板已打开则一并关闭。

### 7.1 悬停与关闭延迟

面板由悬停触发，属于被动摘要而非菜单，因此：

- 光标样式为 `default`，不暗示可点击。
- 触发器与面板之间有 6px 间隙。若离开触发器立即关闭，指针在跨越间隙的
  途中面板就会消失，无法移入面板。为此关闭动作延迟 **120ms**，
  并在指针进入面板时取消该延迟（`onMouseEnter` 取消、`onMouseLeave` 重新计时）。
- 淡入 120ms；`prefers-reduced-motion: reduce` 下禁用动画。

## 8. 验收标准

**功能**

1. 空画布不显示「节点」按钮。
2. 有节点时显示，文案为 `节点 {7 类之和}`。
3. 鼠标移入即弹出面板，只显示数量 ≥ 1 的 7 类节点。
4. 行序固定为 §4.5 顺序。
5. 各类型数量之和 === 按钮显示的总数。
6. 面板打开期间删除节点，数字实时更新；删空后按钮与面板一起消失。
7. 鼠标移出面板自动关闭；指针可从触发器移入面板而不被误关；`Escape` 关闭。
8. 组内子节点计入其自身类型。
9. `file`/`stack`/`tool`/`external` 节点不计入任何一行与总数。

**视觉**

10. 按钮默认灰、悬停亮、有背景反馈。
11. 面板在**深色与浅色主题**下对比度足够。
12. Tab 到按钮时有可见 focus ring。

**回归**

13. 顶栏现有元素位置与行为不变。
14. 助手面板打开时，节点信息面板不被遮挡。

## 9. 测试

**单元测试**（`tests/nodeStats.test.ts`，沿用 `node --test`）：

- 空数组 → 空结果，总数 0。
- 单类型多节点 → 一条，数量正确。
- 多类型混合 → 按 `NODE_STAT_ORDER` 排序，过滤 0 计数。
- 含 `parentId` 子节点 → 正常计入。
- 含 `file`/`stack`/`tool`/`external` → 不计入任何条目，也不计入总数。
- 传入带 `hiddenNodes` 的文档对象 → 隐藏节点不计入。
- 各行之和 === `totalNodeCount`。

**手工验证**：空画布 / 单类型 / 多类型 / 删除节点 / 深浅主题 / 键盘 / 助手并存。

## 10. 实施顺序

1. `nodeStats.ts` + 单元测试（纯逻辑先行）。
2. `NodeInfoButton.tsx` 结构与交互（含无障碍属性）。
3. 样式（深色优先，再补浅色主题）。
4. 接入 `CanvasWorkspace.tsx` 顶栏。
5. 手工验证 §8 全部条目。
