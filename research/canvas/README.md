# 即梦新版画布：独立前端取证与阅读入口

页面为 `https://jimeng.jianying.com/ai-tool/ai-canvas?enter_from=create_new&from_page=canvas_homepage`。它使用 **octo_web 独立构建**，不是先前首页的 dreamina 资源集合。此前首页归档包含路由入口和画布项目列表，不能证明已恢复画布编辑器。

这次只匿名请求页面 HTML 中明确引用的 18 个资源：15 个 JS、3 个 CSS，共 11,044,459 字节。没有携带 Cookie 或授权头，没有保存 HTML、账号响应、浏览器状态，也没有执行这些应用脚本。`userInfo` 文件是页面引用的公开静态脚本，不是读取用户资料的响应。获取全部成功，格式化全部成功。

- [原始资源、URL、时间、字节数、SHA-256](capture/manifest.json)
- [格式化产物与原始摘要的对应关系](readable-manifest.json)
- [静态提取的中文界面文案](localized-labels.json)：文案存在不证明对应功能对当前用户可用。
- [229 个潜在懒加载资源](lazy-chunks.json)：从运行时文件名映射静态推导；其中 1 个 Slardar 静态脚本已由 HTML 引用捕获，其余 228 个未抓取。这不是实际加载清单。

以下行号针对 `readable/` 格式化产物。这里只归纳静态代码观察；外观、功能可用性和运行效果应以实际页面验证为准。

## 画布结构与坐标

主要入口：[canvas-view](readable/js/9d08566a14ad-canvas-view.c799ffc841.js)。代码内包含 React Flow 的实现和应用自身的画布适配层，不能将库的默认参数当作即梦设置。

| 位置                          | 静态观察                                                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| canvas-view 第 28177–28185 行 | 应用实例配置 `nodeTypes`、`edgeTypes`，实际最小缩放 0.08、最大缩放 8。                                                                                                   |
| canvas-view 第 26768–26801 行 | 两类边为 `reference` 与 `post_edit_provenance`；默认边类型 reference、不动画、可选中。节点拖动阈值 4 px。应用关闭库默认滚轮缩放、双击缩放与 Delete，交由自有交互层处理。 |
| canvas-view 第 13261–13470 行 | 节点渲染器为 image、video、audio、file、text、stack、group、external、timeline、subject、tool，具体节点组件通过动态 chunk 加载。                                         |
| canvas-view 第 13300 行附近   | 默认连接点为左侧 target、右侧 source，端口 ID 为 `default`。                                                                                                             |
| canvas-view 第 578–624 行     | 视口为 `{x,y,zoom}`；屏幕坐标先减容器边界，再按视口做变换；反向转换后加回容器位置。                                                                                      |
| canvas-view 第 28173 行       | 当节点超过 600 个且不在拖动中时，仅渲染可见节点。这个阈值是实际源码值，不是本地复刻的性能测试结论。                                                                      |

节点 schema 的一个真实构造示例在 [canvas-data](readable/js/04625fc43d5d-canvas-data.764f8a0821.js) 第 7270–7293 行：

```ts
{
  id,
  type: "image",
  createdAt,
  layout: { x, y, width, height },
  parentId?,
  data: { source, title, tags, resourceId, resourceBatches }
}
```

这是“从图片图层板分离节点”的实际构造字段，不是全部节点类型的完整 TypeScript 定义。`layout` 是持久数据表示；React Flow 的 position/width/height 属于渲染适配层，研究时应区分二者。

## 工具栏与选择状态

[main](readable/js/545ec3537fff-main.303f6eac20.js) 第 15999–16028 行的功能配置启用左侧 creation toolbar、context menu、tag management、generation、image layer board、search、selection context toolbar。上传、Agent、部分媒体后处理由能力配置控制。

固定创建工具的中文标签包括图片、视频、音频、文本、时间线、上传和资产库；见 locale 第 4962–4990 行。选择图片后的工具目录包含编辑、裁剪、扩图、抠图、消除笔、智能改图、超清、下载、全屏、布局等，见 locale 第 5652–5744 行与 main 第 16027 行之后的 `selectionContextToolbar.createItems`。

这些菜单不是无条件显示。main 第 15888–15949 行检查所选节点数量、类型、图片资源准备状态和图层板状态；例如某些图片操作要求恰好选中一个图片节点，批量操作最多 20 个，并检查可编辑状态。复刻交互时应依选择情况展示工具。

底部控件见 canvas-view 第 36920–37160 行：

- 选择/抓手切换。
- 显示或隐藏连线。
- 显示或隐藏小地图。
- 缩放菜单：放大、缩小、适应内容、适应选区，50%、100%、200% 预设及 8%–800% 输入范围。

右键菜单文案包括复制、粘贴、复制副本、删除、编组、取消编组、下载、设置封面；见 locale 第 4852–4891 行。

## 操作与撤销

canvas-view 第 21685–21761 行有独立的 Space/抓手状态机，区分临时抓手、选中工具、当前手势和文本输入的键盘归属；第 36340 行之后处理 Ctrl/Meta+滚轮的光标中心缩放，普通滚轮交给平移路径。

main 第 63796–64020 行注册的部分快捷键：

| 操作                | 快捷键                                         |
| ------------------- | ---------------------------------------------- |
| 撤销 / 重做         | 主修饰键+Z / 主修饰键+Shift+Z，另有 Y 兼容绑定 |
| 选择工具            | V                                              |
| 全屏查看所选媒体    | F                                              |
| 编组 / 解除编组     | 主修饰键+G / 主修饰键+Shift+G                  |
| 添加文本            | T                                              |
| 上传文件            | 主修饰键+O                                     |
| 清除选择            | Escape                                         |
| 复制副本            | 主修饰键+D                                     |
| 删除选中            | Backspace；非 mac 平台另有 Delete              |
| 适应内容 / 适应选区 | Shift+1 / Shift+2                              |

canvas-data 第 6331–6424 行的命令层提供 setDraft、connectReference、disconnectReference、createImageGenerationNode、undo、redo 等。第 9250–9269 行的撤销栈执行反向命令，新增操作清空 redo；第 6355 行附近支持将同一次连续操作与前一记录合并。协作和 timeline 还有各自历史范围，因此不能把这个局部栈实现等同于完整协作系统。

图片编辑的文案与命令表明存在画笔、橡皮擦、快速选择、框选、自动主体识别、扩图比例等交互，但模型生成、抠图识别、付费能力和协作后端没有在此执行或验证。

## 外观参数

[main CSS](readable/css/bd9cfcdfa45f-main.6b52ff2bff.css) 中可直接读到：

- 暗色画布背景 `#0d0d0d`、工具条背景 `#202022`（第 216、219 行）；浅色对应 `#f5f5f5`、`#fff`（第 429、432 行）。
- 左工具条宽 48 px（第 7954 行），控件高 36 px（第 6130 行）。
- 底部导航外框宽 164 px、内部 156 px、缩放显示宽 48 px（第 7248、7251、7476 行）。
- tooltip 圆角 8 px、toast/工具条圆角 12 px（第 681、689 行）。

main 第 65787 行左工具条定位为 `top:72px; bottom:16px` 的纵向居中容器。实际不同窗口尺寸和折叠状态仍应以浏览器观察为准。

## 未覆盖与复现

图片、文本、编组节点的具体渲染器与功能 overlays 是动态资源。当前未捕获的代表性资源包括：

- `async-canvas-node-image.b7788d8e64.js`
- `async-canvas-node-text.96c30babf4.js`
- `async-canvas-node-group.e1a0b00e3d.js`
- `async-canvas-feature-runtime.9b86f42393.js`
- `async-canvas-feature-overlays.778674dbae.js`
- `async-canvas-text-editor.ea809610d3.js`
- `async-canvas-image-layer-board-fullscreen.928d9bf172.js`

完整来源 URL 在 `lazy-chunks.json`，它们不是已下载文件。现有资源也不包含后端、原始 TSX 工程、原始类型、原始目录名或已验证的全站依赖图。

在项目根目录运行 `node research/canvas/format.mjs` 可重新验证原始摘要并串行格式化，生成 `readable-manifest.json`。此脚本不联网、不执行被分析代码；本次实际格式化使用 120 秒进程期限并成功完成。原始字节是证据，readable 是学习用途的格式化副本。

## 本地核验

运行 `node research/canvas/check.mjs`，验证全部原始/格式化文件的长度、SHA-256 和来源对应；该命令不执行目标脚本。
