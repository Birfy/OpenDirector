# C05–C12：统一画布业务闭环

更新日期：2026-10-30。对应本地《画布后端重构计划》的 C05–C12：生成配置、参考、展示生命周期、任务与结果、历史与删除保护、持久化变更、前端项目客户端及画布投影。

## 使用入口与边界

启动项目现有的 API 和前端，在画布地址后添加 `?creation=unified`，例如 `/ai-tool/ai-canvas/<project-id>?creation=unified`。没有指定工程时，也可以从现有入口附带该参数进入，由统一工程列表打开或新建工程。

统一入口读取 `format=opendesign-project`、`formatVersion=2` 的本地工程，仍保存在 `projects` 目录。它与现有 v1 工程分开列出，不覆盖、自动转换或双向同步旧工程。默认入口按原计划留待 C17 切换。

本轮包含主体及保留编辑文档的保存、资源引用和依赖保护。全部高级编辑器输出的来源协议及完整时间线接入仍属于 C13/C14；Agent Loop 和统一聊天写入属于 C15，统一入口暂不执行旧格式聊天操作。项目回收站、完整交换格式、默认切换及部署收口仍属于后续阶段。节点文本生成使用 Agent 类模型，不等于 Agent Loop 已迁移。

## 已接通的业务链路

| 部分 | 实现与约束 |
| --- | --- |
| 生成配置与参考 | 独立 `GenerationSpec`；连线和结构化 `@` 共用稳定 Reference 身份。重命名只改变展示名称；空白/缺失素材和时间线不能作为生成参考。主体引用展开为实际主素材、辅助图和声音，保留主体文档版本及实际传输方式。 |
| 展示与隐藏 | `CanvasItem` 只负责展示、绑定及布局。隐藏保留 ID、生成配置、引用与历史；恢复使用原 ID，包含被隐藏的祖先分组。从未展示的配置也能独立执行。 |
| 执行与结果 | 复用既有模型适配器、队列和下载恢复流程；收费提交前保存 Job。固定公开模型能力、实际参数、素材身份及输入快照，后端原子登记 Asset、ResultVersion、任务和采用结果，无额外执行节点。 |
| 采用与批量输出 | 输入、当前结果、手写文本或锁定状态发生变化时保留候选，避免覆盖新内容。批量附加结果只在用户明确请求且来源仍可见、输入仍适用时展示为素材节点；隐藏任务完成不自动弹出节点。图片/视频采用结果后适应实际比例。 |
| 恢复与取消 | 远端 ID、完整输出缓存和原 Job 身份保留；恢复只查询原远端任务或登记原本地结果。未知提交进入人工核对，不自动重新收费。取消意图、取消请求和供应商确认分别记录；停止后继续查询成功结果也不会自动采用。 |
| 并发 | 所有业务修改经对象 revision 和命令回执校验；原任务 OS 文件锁防止多个 API 进程重复提交，自部署视频另有跨进程端点串行。结果登记遇到版本冲突时重新计算采用条件，仅重试保存的本地字节，耗尽重试仍可本地恢复。 |
| 历史 | 结果选择与配置恢复分开，配置可恢复为跟随当前或固定历史素材；不改写历史输入或时间线已选素材。撤销以具体命令及字段为范围，保留任务、结果和后续编辑；参考使用墓碑及递增 revision 防止旧操作意外通过。 |
| 删除保护 | 检查当前/隐藏引用、任务快照、结果、素材来源、编辑文档及历史。删除预览绑定工程摘要，状态变化后拒绝旧预览。只有可清理撤销记录阻挡时才允许明确确认清空全部画布撤销/重做；生成历史继续保留。文件删除在提交发布后执行，可从中断恢复。 |
| 同步 | 持久化 outbox 同时支持拉取及 NDJSON 订阅。客户端按游标去重、断线续取、快照回退；旧响应不能覆盖新快照。视口、选择和批量数量属于独立 ViewState，不改变生成输入。 |
| 前端边界 | UI 差异转为语义命令，服务端快照是业务依据，不再保存整份可修改业务文档。结果和历史直接查询后端，不通过浏览器下载后再入库。未保存编辑冲突时保留草稿，提供导出备份及明确重新读取入口。 |
| 传输幂等 | 响应丢失先查原命令回执，再使用原 ID 和原输入重放。未确认的生成请求保留在当前标签页的传输 outbox，页面刷新后继续核对原请求；该记录不承担任务状态或结果归属。 |
| 资产列表 | 统一入口右上角改为资产列表，提供查找、排序、使用状态、最多 100 项选择、显示/定位和受保护删除。普通列表隐藏历史兄弟结果，保留隐藏来源及未展示的当前结果。恢复不复制素材或任务，列表没有独立内容预览入口。 |

首尾帧遵守现有适配器能力，未增加尾帧协议支持。参考快照区分实际内容、元信息、上下文保留及接续传输；不能因为界面保留了一项引用就声称模型实际读取了对应媒体。

## 代码入口

- [画布配置、引用、语义命令与投影](../packages/core/src/museshow/application/creation_canvas.py)
- [统一任务执行与结果登记](../packages/core/src/museshow/application/creation_generation.py)
- [版本、操作历史、资产列表与删除依赖](../packages/core/src/museshow/application/creation_history.py)
- [文件工程提交与持久化变更](../packages/core/src/museshow/infrastructure/creation_projects.py)
- [统一 HTTP API](../apps/api/src/museshow_api/creation.py)
- [前端客户端](../src/backend/creationClient.ts)、[画布投影](../src/backend/creationProjection.ts)、[历史查询](../src/backend/creationJobs.ts)、[资产列表](../src/canvas/CreationAssetList.tsx)

## 验证结果

| 检查 | 结果 |
| --- | --- |
| 完整 Python 回归 | 679 项通过；保留 Starlette 测试客户端的既有弃用提示 |
| 前端 Node 测试 | 40 个测试文件通过 |
| TypeScript 与生产构建 | 通过；保留既有大分包提示 |
| 派生契约 `--check` | 通过，无类型漂移 |
| 真实浏览器完整链路 | 通过，六类节点共 7 个可见节点 |
| API 重启后浏览器重开 | 通过，业务快照完全一致、游标 19、无新模型请求 |

最终浏览器验证使用隔离临时工程 `492a8550-b8d3-42e2-b5e2-f73e27c88ca8`，任务 `e5d295f3-e963-5650-b276-462a3a81f8c6`；这些 ID 仅用于记录本轮证据，不是产品固定数据。

服务端闭环覆盖：A-v1 作为 B 的参考，隐藏 A 后生成 B-v1；A 改为 v2 后生成 B-v2，同时 B-v1 继续指向 A-v1；恢复 A 使用原 ID；B 的结果选择和配置恢复互相独立，时间线已选 B-v2 不随之改写；重启后对象、任务、历史、素材及事件游标保持一致。

边界测试覆盖：未展示配置执行、未知提交不重发、取消意图持久化、远端原 ID 恢复、完整本地结果恢复、两个运行时抢占同一 Job、生成期间手写文本保护、批量可见/隐藏输出、登记期间并发编辑、删除发布中断恢复、字段级撤销冲突和客户端响应丢失/乱序。

浏览器通过真实 UI 与本地 API 验证：创建和编辑节点、拖动 `+` 连线、方向键/Enter 选择结构化 `@`、重命名后引用名称更新、运行中隐藏来源、后台完成、资产列表恢复原节点、永久删除未使用素材、六类节点保存重开、配置历史恢复及页面刷新。另使用相同临时目录重启 API，验证完整业务快照一致且没有再次调用模型提供者。

模型响应由可控替身及 HTTP Mock 提供；其中 Agent 流式协议走实际适配器，视频恢复使用可探测的真实 MP4 文件。上述结果验证业务链路和适配器兼容性，不宣称已完成真实付费模型或线上部署验收。

## 复现命令

按仓库现有方式安装 Python 与前端依赖后，在仓库根目录执行。下面的 `.venv/bin/python` 可以替换为实际虚拟环境解释器路径。

```sh
PYTHONPATH=packages/core/src:apps/api/src .venv/bin/python -m pytest -q
npm test
npm run build
PYTHONPATH=packages/core/src:apps/api/src .venv/bin/python scripts/generate_contracts.py --check
```

浏览器验证需要 Playwright Core 和 Chromium，可复用已有安装，不要求安装为产品依赖。测试服务只接受系统临时目录下以 `opendesign-creation-` 开头的独立目录，不使用用户工程或模型配置。

```sh
PYTHONPATH=packages/core/src:apps/api/src .venv/bin/python tests/browser/creation_server.py
MUSESHOW_API_URL=http://127.0.0.1:8019 npm run dev -- --port 5179
PLAYWRIGHT_MODULE=/absolute/path/to/playwright-core/index.mjs CHROMIUM_PATH=/absolute/path/to/chromium node scripts/verify_creation_browser.mjs
```

保留测试服务打印的临时目录和脚本打印的 projectId。停止服务后，使用该目录重启，再执行只读重开核对：

```sh
PYTHONPATH=packages/core/src:apps/api/src .venv/bin/python tests/browser/creation_server.py --root /tmp/opendesign-creation-<fixture>
CREATION_REOPEN_PROJECT=<project-id> PLAYWRIGHT_MODULE=/absolute/path/to/playwright-core/index.mjs CHROMIUM_PATH=/absolute/path/to/chromium node scripts/verify_creation_browser.mjs
```

测试脚本会等待正常租约释放后关闭浏览器；直接强制结束浏览器的场景需等待既有租约失效，其他窗口保护不会被测试绕开。
