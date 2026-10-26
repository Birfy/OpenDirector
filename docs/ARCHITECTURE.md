# 工程导读

## 运行应用

```text
main.tsx
  └── App.tsx
      ├── Sidebar       导航、近期本地任务
      ├── Composer      提示词、模式、画幅、参考文件、提交/中止
      ├── Gallery       分类、样例卡片、预览与填入
      ├── Jobs          任务状态、预置结果、重用
      ├── CanvasWorkspace  懒加载的全屏编辑器（/ai-tool/ai-canvas）
      └── StudyNotes    说明观察、推导和重建的区别
```

`App` 拥有页面状态、参考文件的 object URL、任务列表和当前 `AbortController`。组件通过 props 接收状态和回调，领域模块不依赖 React。`data/presets.ts` 是独立编写的内容，`Artwork` 负责原创 SVG。

首页演示提交时先校验并复制请求，建立 `running` 任务，运行一个可取消的本地计时器；成功时改为 `completed`，取消时改为 `aborted`。组件卸载会取消任务并回收图片 object URL。首页任务属于当前会话。画布项目与素材单独由 IndexedDB 持久化，见 [画布导读](CANVAS.md)。

这个流程参考了原模块 `nT` 中“可取消时中止，否则提交”的 UI 边界，但没有恢复原站的 task manager、模型推理、队列或网络协议。不要把计时器执行时间当作原站性能。

## 画布编辑器

`CanvasWorkspace` 拥有当前项目、选择、面板与编辑来源；`model` 拥有命令语义。`dataBoundary` 统一解析、复制和比较时间线、主体、堆叠、工具、图层和场景，不由历史或存储重复解释。媒体快照和节点引用分开保存：删除来源节点不会销毁已进入时间线或主体的素材。复制只重映射复制范围内的身份。

`LayerBoard` 使用 Canvas2D 合成，`TimelineEditor` 控制真实媒体元素，`DirectorStage` 使用 Three.js。它们提交结构化数据或真实像素结果，由工作区按来源归属写入历史。`linkedResults` 为像素操作和结果文件导入保留来源连线；操作途中项目切换、来源删除或媒体替换会拒绝写回。

`generationCatalog` 区分菜单观察、已验证配置和未知组合；`toolCatalog` 区分本地编辑与待接入服务。画布没有默认模拟生成。任务草稿可导出，原站结果可作为真实媒体导入；要接入自己的服务，应在适配器中实现能力发现、报价、提交、取消与结果检查。账号 Cookie 和原站私有请求重放不属于该设计。

## 可以从哪里开始修改

1. 在 `data/presets.ts` 修改卡片文案和提示词，看它们如何流入 `Composer`。
2. 在 `domain/generation.ts` 阅读 `createJob` 和 `runLocalGeneration`，理解快照、状态转换和取消。
3. 对照 `domain/bannerSnapshot.ts` 与恢复模块 `TJ`，研究未知输入的解析、可选值、不同 action 分支、JSON 转义和来源记录。
4. 沿首页模块 `fP` 声明的异步资源分组阅读 HomeCreate、侧栏和生成器。恢复代码中未知名字保持未知，不能由变量短名断言原始组件名称。
5. 若以后连接自己的模型服务，在任务适配器边界设计 API。现有演示没有凭据或后端配置，不能靠填入一个即梦 URL 自动变成原站服务。

## 版本与验证的含义

本学习工程选用 React 19、Vite 6 与 TypeScript 5，并将实际版本写入 lockfile。它们是重建工程的依赖，不能据此推断即梦原始 package.json。已采集发布包中存在 ReactDOM 18.2 相关标记，但这也不足以精确重建原项目完整依赖锁定。

`npm test` 覆盖快照校验、画布结构/历史/存储边界、异步预览结果归属与本地任务取消；`npm run build` 验证重建工程的类型与打包；`npm run recovery:check` 核验恢复材料的字节、范围、语法和静态依赖。三者分别回答不同问题。恢复模块通过静态检查，不代表原站应用可以完整运行。
