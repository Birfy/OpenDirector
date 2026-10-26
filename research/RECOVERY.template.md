# 即梦生产前端的派生工程资料

这里保存直接运行 Wakaru 1.14.0 得到的真实派生模块。当前主机的 REA 适配器不支持此恢复引擎，因此这些产物**不是 REA Evidence**。只做静态解析，没有执行原站应用、调用生成接口或导入用户登录数据。

## 已恢复与未恢复

- 原始资源：135 个 JavaScript、13 个 CSS，日期 2026-10-26；见 [资源清单](../research/capture/manifest.json)。
- 输出：{{derivedModules}} 个 JavaScript 派生文件及同数 source map。它们包含重复的打包模块和工具生成片段，**不是同等数量的独立原始源文件**。
- 顶层 Rspack 表实际记录 {{observedFactoryOccurrences}} 次工厂定义，按运行时命名空间区分 {{distinctRuntimeScopedModuleIds}} 个模块 ID；{{repeatedModuleIds}} 个 ID 重复出现，其中 {{moduleIdsWithDifferentBodyBytes}} 个 ID 的工厂原始字节并不相同，未擅自合并。
- {{unattributedDerivedModules}} 个工具生成片段没有原始 input/range，归属明确记为 unknown。
- {{resolvedRelativeReferences}} 处字面量依赖可以直接解析到派生文件，{{unresolvedReferences}} 处仍是外部名称、未改写的跨包 ID 或未覆盖目标；另有 {{nonliteralLoads}} 处非字面量加载。这些计数不证明运行时完整性。
- 工具报告 {{toolWarnings}} 条警告，其中 {{errorClassWarnings}} 条 error-class；独立 Babel 解析发现 {{syntaxFailures}} 个语法失败。当前已知失败是 [module-fg_2.js](modules/rspackChunkdreamina/module-fg_2.js) 中重复声明 `o`。保留原始诊断，未人工修改供应商逻辑。

没有 source map 提供原始 TSX、类型、目录、构建配置、注释或变量名。这里的 .map 由 Wakaru 新生成，只用于追溯派生代码，不是即梦发布的原始源码映射。这一目录不能直接等价运行原站。项目根目录的 src/ 是另外编写、可运行的学习界面。

## 建议阅读入口

| 主题                     | 实际派生文件                                                 | 可搜索标识                          |
| ------------------------ | ------------------------------------------------------------ | ----------------------------------- |
| 首页 Entry、预加载及渲染 | [module-fP.js](modules/rspackChunkdreamina/module-fP.js)     | extraBundleNames、flow.render       |
| 首页推荐卡片参数校验     | [module-TJ_2.js](modules/rspackChunkdreamina/module-TJ_2.js) | open_generator、SNAPSHOT            |
| 首页创作区组件           | [module-oxF.js](modules/rspackChunkdreamina/module-oxF.js)   | HomeCreate、open_generator          |
| 推荐数据加载状态         | [module-YBu.js](modules/rspackChunkdreamina/module-YBu.js)   | load、status、\_ssrSnapshotComplete |
| 生成与中止按钮           | [module-nT.js](modules/rspackChunkdreamina/module-nT.js)     | taskSubmissionManager、abortByUser  |

[完整清单](manifest.json) 将每个文件关联到捕获资源及原始 UTF-8 字节范围；[模块 ID 索引](module-id-index.json) 根据原始工厂表定位跨包名称。每个运行时目录生成的 jsconfig.json 提供单一候选的编辑器跳转，**不会重写模块，也不补造原站运行时**。存在多种定义的 ID 保留所有候选。

[依赖与限制清单](inventory.json) 记录所有未解析依赖、非字面量加载、语法问题和工具警告。[reports/](reports/) 与各运行时目录的 provenance.json 保留工具原始报告。

## 可重复步骤

在项目根目录使用锁定依赖执行：

```sh
npm ci
npm run recover
npm run recovery:check
```

recover 按 AST 提取顶层 Rspack 注册表达式，包含以逗号表达式压缩的注册，并按全局注册命名空间分组；每次调用单 worker、120 秒 deadline。选择的每个字节跨度都与原始 SHA-256 绑定。未选择的前后置语句完整保留在原始 capture，跨度记录在 [prepared manifest](../research/prepared/manifest.json)，不会被伪装成已恢复模块。该清单定义了实际输入集，工具只消费清单中列出的文件。

recovery:check 验证原始和派生文件摘要、准备输入的逐字节一致性、原始跨度、source map 目标及保存的报告是否一致；已知语法失败会令命令返回非零。这是部分恢复的公开限制，不影响独立 src/ 学习应用的构建。

README 由 `research/RECOVERY.template.md` 和实际统计生成。修改恢复说明应修改模板，再执行 `node scripts/recovery.mjs --inventory-only`，不会重新反编译或执行站点代码。
