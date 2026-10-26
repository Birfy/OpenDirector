# 源码对照与证据边界

## 三种代码来源

| 路径                               | 来源                              | 可以证明什么                                                     |
| ---------------------------------- | --------------------------------- | ---------------------------------------------------------------- |
| `research/capture/`                | 公共 CDN 直接取得的发布文件       | 这些 URL 在采集时返回这些字节；SHA-256 可复核                    |
| `research/prepared/`、`recovered/` | AST 提取、Wakaru 解包和有限反编译 | 可追溯到发布文件的派生代码；不能证明变量名或工程结构与原项目一致 |
| `src/`                             | 为学习重新编写                    | 可运行的 React 工程；只有明确标注的移植逻辑具有对应源语义依据    |

采集清单：[research/capture/manifest.json](../research/capture/manifest.json)。包含 135 个 JS、13 个 CSS，总计 23,675,486 字节；没有将 HTML、Cookie 或浏览器缓存加入本分支。

已检查的 148 个资源没有发现 `sourceMappingURL` 或响应头 SourceMap/X-SourceMap。这里的“未发现”仅限已采集资源，不意味着所有部署位置都绝对没有原始 source map。

## 推荐阅读的真实业务入口

以下短 ID 来自发布包的模块表，不是原始文件名。请结合 `recovered/` 的索引与来源映射阅读。

可直接打开：[首页入口 fP](../recovered/modules/rspackChunkdreamina/module-fP.js)、[快照校验 TJ（HomeCreate 副本）](../recovered/modules/rspackChunkdreamina/module-TJ_2.js)、[生成器 nT](../recovered/modules/rspackChunkdreamina/module-nT.js)。重复模块保留为不同派生文件；路径后缀不代表原作者命名。

| 原始发布文件（在 `research/capture/javascript/` 下）            | 模块/内容      | 观察与推导                                                          |
| --------------------------------------------------------------- | -------------- | ------------------------------------------------------------------- |
| `5cc3f954c9bf-route-manifest-main.f030f305.js`                  | 路由资源映射   | 117 个 routeAssets 分组，不能直接当作 117 个页面                    |
| `3442a08e6b4d-page.90cc694aed.js`                               | `fP` 首页入口  | 首页声明 HomeCreate、侧栏、生成器等异步资源分组                     |
| `ca1fed514e5e-HomeCreate.cce29dcab8.js`                         | `TJ` 快照校验  | 推荐卡片、action 类型、可选字段、计数/尺寸范围及序列化              |
| `295fce3ec84f-dreamina-main-frame-2026-sidebar.4fa4986609.js`   | 侧栏           | 导航与侧栏相关发布代码，组件原名未知                                |
| `8a6973059336-content-generator-feature-loader-1.9fd45272b1.js` | `nT` 生成器 UI | 读取 abortable/disabled/loading/tooltip，选择 submit 或 abortByUser |

## `bannerSnapshot.ts` 的移植依据

来源：[HomeCreate 原始发布 URL](https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/ies/dreamina/web/jimeng/static/js/async/HomeCreate.cce29dcab8.js)。

- 文件 SHA-256：`d792fff43c8e9590e3835d4cff70073aa0c5c4f13fb662fa87216c8003dc46c6`
- 模块 ID：`TJ`
- 原始 UTF-8 字节区间：`[85718, 88644)`，半开区间；这段 ASCII 源码的 UTF-16 区间数值相同。
- 原始属性片段 SHA-256：`71e2bd09ed3a4d7db528fa0d4ef8deb83020e26fcfa64a96179a8565400ad808`

原代码从 `__DREAMINA_HOME_CREATION_BANNER_SSR_SNAPSHOT__` DOM 元素读取 JSON，并先移除元素，校验 version=1、items、唯一 ID、panel 字段以及 action。移植版接收未知值，返回 `{ ok, value/error }`，避免依赖 DOM；解析失败保留可读原因。这是有意改变的调用接口。

保留的语义包括：非空 ID/title 不做 trim 改写、可选字符串可为空但不可为 null、数字范围关系、digitalHuman 的独立分支、图片引用至少一个非空字段，以及 JSON 对 `<`、U+2028、U+2029 的转义。顶层未知字段丢弃，卡片额外字段保持。

action 的 URL 只按原语义检查非空文本，**不是 URL 安全策略**。本学习模块不执行 action，也不会访问这些 URL。序列化函数采用明确的 TypeScript 输入，未重新实现原函数可由任意输入覆盖 `version` 的无类型入口。

## 尚未恢复的部分

原始 TS/TSX、作者的组件目录与命名、源码注释、精确依赖版本、原构建配置、未采集的懒加载资源、后端接口实现、模型和账户服务均未知。静态解包仍可能保留运行时加载、外部模块、压缩标识符和包装器；具体数量与受影响路径见恢复报告。

没有把原站的登录、上传、生成、支付或安全流程接入本地应用。页面视觉参考与静态代码分析只能支持相应的界面结构和代码事实，不能证明服务端实际行为。
