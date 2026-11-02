# 视频节点悬停预览与播放控件

## 1. 背景与目标

画布上的视频节点当前已具备「悬停自动播放」的雏形，但体验与即梦等成熟产品相比差距明显：没有进度控制，鼠标移入后无法暂停，拖动节点时播放会被强制中断。

本文档定义视频节点预览交互的改造方案，对齐即梦视频节点的处理逻辑，同时保持现有画布的选择、拖动、右键菜单行为不变。

### 目标

1. 悬停即播放，移开即停止，播完停止且再次移入可重播。
2. 拖动节点时视频保持播放，不被中断。
3. 悬停或选中时浮出可拖动进度条、播放/暂停、全屏、音量控件。

### 非目标

- 不改动音频节点、图片节点的预览行为。
- 不改动节点右键菜单的现有项。
- 不引入第三方播放器库。

## 2. 现状分析

### 2.1 现有实现

| 位置 | 职责 |
| --- | --- |
| `src/canvas/CanvasMediaPreview.tsx:54` | `CanvasVideoPreview` 组件，处理悬停播放 |
| `src/canvas/CanvasMediaPreview.tsx:19` | `CanvasPlaybackProvider`，全局单播放器仲裁 |
| `src/canvas/CanvasNodeView.tsx:107` | 视频节点的渲染入口 |
| `src/canvas/CanvasWorkspace.tsx:3862` | 提供 `blocked` 状态 |
| `src/canvas/nodes.css:110` | `.cw-video-preview` 样式 |

现有悬停逻辑（`CanvasMediaPreview.tsx:64-92`）：

```
hovered 为真 且 未被 blocked
  └─ 延时 300ms → claim 播放器 → muted = true → play()
离开 / blocked
  └─ 立即 pause()
```

### 2.2 现有实现的四个缺陷

**缺陷一：拖动时强制暂停**

`CanvasWorkspace.tsx:3863-3864` 把 `interacting` 纳入 `blocked`：

```tsx
<CanvasPlaybackProvider
  blocked={
    interacting || panning || ...
```

而 `interacting` 由 `onNodeDragStart={beginDrag}` / `onNodeDragStop={endDrag}`（`CanvasWorkspace.tsx:3974-3975`）驱动。因此**一旦开始拖动节点，视频立刻暂停**——这正是需求 2 要打破的行为。

**缺陷二：指针按下即暂停**

`CanvasMediaPreview.tsx:105-109`：

```tsx
onPointerDown={(event) => {
  setHovered(false);
  pause();
  props.onPointerDown?.(event);
}}
```

左键选中节点会触发 `pointerdown`，视频随之停止。这与「选中后应继续可播放」的直觉冲突。

**缺陷三：播放结束不会重置**

没有监听 `ended` 事件。视频播完后停在最后一帧，`playing.current` 仍为 `true`，再次悬停时 `play()` 从末尾开始，表现为「不再播放」。

**缺陷四：完全没有控件**

`.cw-video-preview` 仅设置 `object-fit: contain`，未开启 `controls`。用户在画布上无法暂停、拖动进度、调音量或全屏。

### 2.3 现有设计的可取之处

- `CanvasPlaybackProvider` 保证了**同一时刻只有一个视频在响**（`claim` 时暂停上一个），这个仲裁机制应保留。
- 页面隐藏时自动暂停（`visibilitychange`），应当保留。
- 300ms 悬停延时避免了快速划过时反复加载，应当保留。

## 3. 交互规格

### 3.1 悬停播放（需求 1）

| 事件 | 行为 |
| --- | --- |
| 指针移入节点（无按键按下） | 延时 300ms 后开始播放，音量 100% |
| 指针移出节点 | 立即暂停，**保留播放位置** |
| 再次移入 | 从暂停位置继续播放 |
| 播放自然结束 | 暂停状态，位置重置到 0 |
| 播完后再次移入 | 从头重新播放 |
| 触屏设备 | 不触发悬停播放（无 hover 语义） |

关键：**移出时暂停而非重置**。只有播放结束才把 `currentTime` 归零。

音量始终固定为 `1`，不做任何衰减——预览的响度完全由系统音量决定，见 §4.6。

### 3.2 拖动与点击（需求 2）

| 操作 | 视频状态 | 说明 |
| --- | --- | --- |
| 左键单击节点 | 保持播放 | 选中节点不打断播放 |
| 左键长按 | 保持播放 | 长按不进入特殊状态 |
| 左键拖动节点 | **保持播放** | 拖动中视频持续播放 |
| 右键点击 | 保持播放 | 弹出原有菜单，不改动 |
| 拖动进度条 | 保持播放 | 拖动中不触发节点拖动 |
| 拖动中指针离开节点 | 继续播放 | 拖动期间不受 hover 影响 |

拖动保持播放是本次改造的重点。实现上需要把 `interacting` 与 `panning` 区分对待：

- **拖动节点** → 不阻塞播放
- **画布平移** → 仍然阻塞播放（视野已移开，继续播没有意义）

### 3.3 控件浮层（需求 3）

控件在**悬停**或**节点被选中**时出现，其余时刻隐藏。

浮层内容（从左到右）：

| 控件 | 行为 |
| --- | --- |
| 播放/暂停按钮 | 切换播放状态；暂停时悬停不会自动恢复 |
| 时间显示 | `当前时间 / 总时长`，如 `00:02 / 00:15` |
| 进度条 | 可拖动，拖动时实时 seek |
| 音量按钮 | **点击即切换静音，没有音量滑杆**；图标在静音/有声之间切换 |
| 全屏按钮 | 进入全屏播放 |

浮层的视觉规格参照截图：

- 底部居中，宽度约为节点的 90%，圆角药丸形
- 背景 `rgba(0, 0, 0, 0.55)`，backdrop blur
- 控件图标白色，悬停时提亮
- 进度条未填充部分半透明白，已填充为纯白
- 时间文字使用等宽数字，避免跳动

## 4. 技术方案

### 4.1 状态模型

`CanvasVideoPreview` 内维护四类状态：

| 状态 | 类型 | 含义 |
| --- | --- | --- |
| `hovered` | boolean | 指针在节点上 |
| `interacting` | boolean | 正在拖动进度条或音量滑杆 |
| `userPaused` | boolean | 用户主动暂停，抑制悬停自动播放 |
| `ended` | boolean | 上一次播放自然结束 |

派生出两个最终状态：

```
shouldPlay = hovered && !userPaused && !playback.blocked && !ended
showControls = hovered || selected
```

### 4.2 播放仲裁的调整

`CanvasPlaybackProvider` 的 `blocked` 需要拆分。当前是单一布尔值，无法表达「拖动节点不阻塞、平移画布阻塞」。

改造方式：把 `blocked` 拆为 `blocked`（硬阻塞，如对话框打开）与 `dragging`（软阻塞，仅影响主动播放），并让 `CanvasVideoPreview` 自行决定拖动时是否继续播放。

`CanvasWorkspace.tsx:3863` 的表达式去掉 `interacting`，只保留真正需要静音的场景。

### 4.3 事件处理修正

| 现有行为 | 改为 |
| --- | --- |
| `onPointerDown` 中 `pause()` | 移除该调用，仅在非视频区域按下时处理 |
| 无 `onEnded` | 新增，置 `ended = true` 并把 `currentTime` 归零 |
| 无 `onSeeked` | 新增，拖动进度条时解除 `ended` |
| 无 `onClick` 处理播放切换 | 单击节点保持选中语义，播放切换交给控件按钮 |

### 4.4 控件浮层的隔离

控件层必须携带 `nodrag nopan nowheel` 类，避免拖动进度条时触发 React Flow 的节点拖动或画布平移。这与现有音频节点（`CanvasNodeView.tsx:141`）的处理方式一致。

进度条的拖动实现使用 `pointerdown` + `setPointerCapture`，保证指针离开元素后仍能继续拖动。

### 4.5 全屏

优先使用原生全屏：对 `<video>` 元素调用 `requestFullscreen()`。若浏览器拒绝（权限或策略限制），回退为节点内放大显示，并给出一次提示。

全屏状态下按 `Escape` 退出，退出后恢复原有节点尺寸与播放位置。

### 4.6 音量策略

音量固定为 `1`，不做任何衰减：预览的响度**等同于系统音量**，节点上没有独立的音量调节。用户能控制的只有静音开关。

| 场景 | 音量 |
| --- | --- |
| 悬停自动播放 | `volume = 1`，未静音 |
| 用户点击静音按钮 | `muted` 切换，`volume` 保持 `1` |
| 用户点击播放按钮 | `volume = 1` |

需要处理的矛盾：浏览器的自动播放策略会拒绝**没有用户手势**的非静音播放。策略是优先尝试有声播放，被拒绝时回退为静音播放并同步图标状态：

```
play() 成功 → 有声预览
play() 拒绝（NotAllowedError）→ 置 muted = true，重试 play() → 静音预览
```

这样在用户尚未与页面交互时可看到画面，交互过后（点击画布任意位置产生 user activation）即恢复有声。`onVolumeChange` 还会把任何非 1 的音量纠正回 1，避免其他代码路径压低音量。

### 4.7 性能

- 进度条使用 `requestAnimationFrame` 更新，而非 `timeupdate` 事件（后者仅约 4Hz，视觉上不流畅）。
- 拖动进度条时直接写 DOM 的 `width`，避免每秒多次 React 重渲染。
- 悬停离开即 `pause()`，不销毁元素，避免重新加载。

## 5. 涉及文件

| 文件 | 改动 |
| --- | --- |
| `src/canvas/CanvasMediaPreview.tsx` | 主要改动：状态模型、事件处理、控件浮层挂载 |
| `src/canvas/CanvasVideoControls.tsx` | **新增**：控件浮层组件 |
| `src/canvas/mediaPlayback.ts` | **新增**：时间格式化与 seek 钳制（纯函数，便于单测） |
| `src/canvas/CanvasIcon.tsx` | 新增 `volumeHigh`、`volumeOff`、`exitFullscreen` 图标 |
| `src/canvas/CanvasNodeView.tsx` | 传入 `selected`，供控件显隐判断 |
| `src/canvas/CanvasWorkspace.tsx` | 调整 `blocked` 表达式，去掉 `interacting` |
| `src/canvas/nodes.css` | 新增 `.cw-video-controls` 相关样式 |
| `src/canvas/themes.css` | 浅色主题下的控件配色覆盖 |
| `tests/videoPreview.test.ts` | **新增**：时间格式化与 seek 钳制测试 |
| `scripts/verify_video_preview_browser.mjs` | **新增**：基于 CDP 的真实浏览器交互验证 |

### 5.1 单元测试与浏览器验证的分工

`tests/videoPreview.test.ts` 只覆盖纯函数。仓库的 `node --test tests/*.test.ts` 不加载 `.tsx`，因此播放状态机无法用单测覆盖，必须靠浏览器验证。

`scripts/verify_video_preview_browser.mjs` 通过 Chrome DevTools Protocol 驱动真实 Chrome，逐条核对第 6 节的验收标准。它不需要额外依赖（使用 Node 22+ 内置的 `WebSocket`），服务启动后运行：

```powershell
$env:PROJECT_ID = "<含视频节点的工程 ID>"
node scripts/verify_video_preview_browser.mjs
```

注意两点运行前提：

- 应用通过 `localStorage` 的 `opendirector.lastUnifiedFilesystemProject` 记忆上次工程，脚本在页面启动前注入该键。`/ai-canvas/<id>` 路径在 `serve` 模式下没有 SPA 回退，直接访问会 404。
- 每次运行都会占用工程租约。若上一次运行异常退出，接口会返回 409，需要先清空 `catalog.sqlite3` 的 `sessions` 表。

## 6. 验收标准

### 需求 1：悬停播放

- [ ] 指针移入播放中节点，视频在 300ms 内开始播放
- [ ] 指针移出，视频立即暂停且保留播放位置
- [ ] 再次移入，从暂停位置继续
- [ ] 播放自然结束后停止，且位置回到开头
- [ ] 播完后再次移入，从头重新播放
- [ ] 快速划过节点时，不产生播放请求

### 需求 2：拖动与点击

- [ ] 左键单击节点，选中生效且视频不中断
- [ ] 左键拖动节点，视频持续播放
- [ ] 拖动过程中指针移出节点，视频继续播放
- [ ] 右键点击节点，菜单正常弹出且视频不中断
- [ ] 长按节点，行为与改动前一致
- [ ] 画布平移时，所有视频暂停

### 需求 3：控件浮层

- [ ] 悬停时浮层出现，移开后消失
- [ ] 节点被选中且指针移开时，浮层仍然显示
- [ ] 进度条可拖动，拖动时画面实时跟随
- [ ] 暂停按钮生效，且暂停后悬停不自动恢复
- [ ] 音量按钮只切换静音，**没有音量滑杆**
- [ ] 播放音量为 100%，响度与系统音量一致
- [ ] 全屏按钮进入全屏，`Escape` 可退出
- [ ] 拖动进度条时不会带动节点移动

### 回归

- [ ] `node --test tests/*.test.ts` 全绿
- [ ] 图片节点、音频节点预览行为不变
- [ ] 同一时刻只有一个视频发声
- [ ] 页面切到后台时所有视频暂停
- [ ] 深色与浅色主题下控件均清晰可辨

## 7. 风险与注意事项

| 风险 | 说明 | 应对 |
| --- | --- | --- |
| 自动播放策略 | 非静音悬停播放会被浏览器拒绝 | 先尝试有声，被拒绝则回退静音播放 |
| 拖动保持播放的性能 | 拖动时同时解码视频可能掉帧 | 拖动期间降低渲染精度，或仅对大尺寸视频降级 |
| `blocked` 语义变更 | 去掉 `interacting` 可能让其他场景误播 | 逐项核对 `interacting` 的所有来源 |
| 全屏与节点变换冲突 | React Flow 的 transform 可能干扰全屏 | 全屏时临时移除节点的 transform |
| 触摸设备 | 无 hover 语义 | 触摸设备仅通过控件操作播放 |

## 8. 实施顺序

1. 修正 `CanvasVideoPreview` 的状态模型（悬停 / 暂停 / 结束）
2. 调整 `blocked` 表达式，实现拖动保持播放
3. 实现 `CanvasVideoControls` 控件浮层（先不含全屏）
4. 接入进度条拖动
5. 接入全屏
6. 补齐测试与浅色主题样式

## 9. 实现状态

六步已全部完成。`node --test tests/*.test.ts` 共 401 项通过，`tsc --noEmit` 无错误，`npm run build` 成功。

`verify_video_preview_browser.mjs` 在真实 Chrome 上 12/12 通过，覆盖：

| # | 验证项 |
| --- | --- |
| 1 | 悬停前不显示控件 |
| 2 | 悬停开始播放，音量为 1 |
| 3 | 悬停显示控件浮层 |
| 4 | 音量按钮只切换静音，且无滑杆 |
| 5 | 播放不被无关的工作区重渲染打断 |
| 6 | 浮层含进度条、播放、音量、全屏四个控件 |
| 7 | 移开暂停且保留进度（不重置到 0） |
| 8 | 再次悬停继续播放 |
| 9 | 拖动节点时视频保持播放 |
| 10 | 播放结束为暂停状态 |
| 11 | 结束后再次悬停可重播 |
| 12 | 页面无运行时错误 |

### 9.1 仍需人工确认的项

浏览器脚本无法可靠模拟以下交互，发布前需手动过一遍：

- 右键菜单弹出时视频不中断（CDP 合成的右键事件能否触发原生菜单取决于平台）。
- 长按行为。
- 全屏进入与 `Escape` 退出（无头模式下全屏 API 不可用）。
- 实际听感：响度是否与系统音量一致。
- 浅色主题下的控件对比度。
- 画布平移时视频暂停（`panning` 分支）。

### 9.2 与文档原方案的差异

- 未引入 `dragging` 软阻塞标志。实现上直接从 `blocked` 表达式移除 `interacting`，因为 `CanvasVideoPreview` 的悬停判定已经独立于拖动状态，不需要额外通道。
- 音量收敛为「固定 1 + 静音开关」：先尝试有声播放，被自动播放策略拒绝时回退静音并同步图标。节点上没有音量滑杆。

### 9.3 顺带修复的缺陷

`CanvasPlaybackProvider` 原先每次渲染都新建 context 值与 `claim` 函数。预览的播放 effect 依赖该 context，因此工作区任何无关重渲染都会拆掉 effect（暂停视频）再重新等待 300ms，表现为播放抖动。

已用 `useCallback` + `useMemo` 稳定引用，并新增第 5 项验证（持续悬停 3 秒，`currentTime` 必须持续前进且不出现暂停）防止回归。
