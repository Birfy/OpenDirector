# 画布素材的读取与预加载：现状检查与推广方案

状态：方案待确认（本文档第 6 节是需要你拍板的清单）
范围：前端 `src/`，以及 `GET /reference-catalog` 的服务端实现

## 1. 背景

生成节点的创作器里输入 `@` 会列出画布上的素材与节点，用于把参考塞进提示词。
这个列表来自 `GET /projects/{id}/reference-catalog`。

为了让列表在用户敲 `@` 时立刻出现，代码里有一个「预加载」开关：
`useProjectMentionAssets(projectId, preload)`，第二个参数为真时，在组件挂载后立刻取一次。

本次要回答三件事：

1. 这个预加载现在是怎么工作的，有没有问题；
2. 项目里还有哪些地方在取画布素材，能不能也套用；
3. 哪些功能最终应该用预加载——由你决定。

## 2. 现在的预加载

`src/canvas/useProjectMentionAssets.ts`（73 行）：

```ts
export function useProjectMentionAssets(projectId: string, preload = false) {
  // state: assets / ready / loading / error
  const load = useCallback(() => {
    if (pending.current?.projectId === projectId && !pending.current.abort.signal.aborted) return;
    // abort 上一次，发起 loadReferenceCatalog(projectId, signal)
  }, [projectId]);
  useEffect(() => {
    if (preload) load();
    return () => pending.current?.abort.abort();
  }, [load, preload]);
  return { assets, loading, error, load };
}
```

特性：

| 行为 | 现状 |
| --- | --- |
| 去重 | 只在「同一工程、同一请求进行中」时复用；请求完成后 `pending` 置空 |
| 缓存 | **没有**。完成后再调 `load()` 会重新发一次请求 |
| 共享 | **没有**。每个 hook 实例各自持有 state，同一工程两份组件就两份请求 |
| 中断 | 组件卸载时 abort 进行中的请求 |
| 数据层缓存 | `backend/api.ts` 的 `request()` 直接 `fetch`，没有任何缓存层 |

使用点只有两处，语义恰好相反：

| 位置 | 调用 | preload | 效果 |
| --- | --- | --- | --- |
| `CanvasWorkspace.tsx:669` | `useProjectMentionAssets(doc.id, ready)` | `true` | 画布就绪即取，创作器 `@` 秒开 |
| `AssistantPanel.tsx:94` | `useProjectMentionAssets(documentId)` | `false` | 懒加载，`ChatReferenceEditor` 的 `onOpen` 触发 |

`ChatReferenceEditor.open()`（`ChatReferenceEditor.tsx:359-369`）在每次打开 `@` 菜单时调用 `latest.current.onOpen()`，也就是 `projectReferences.load`。
由于没有缓存，**对话里每打开一次 `@` 菜单就重新请求一次全量目录**。

## 3. 实测成本

本机实测（进程内 TestClient，同一份工程数据，本地磁盘，取 3 次中位数）：

| 接口 | 工程 `111`（6 素材 / 204 提交 / 12.4 MiB） | 工程 `空画布`（0 素材 / 27 提交） |
| --- | --- | --- |
| `reference-catalog` | **7516 ms** | 91 ms |
| `canvas` | 869 ms | 53 ms |
| `asset-list` | **36322 ms** | 82 ms |
| `assets` | 1046 ms | 37 ms |

`snapshot()` 本身约 750–960 ms（204 个提交、每个存全量快照），所以 `canvas` 的 869 ms 就是读取基线。

### `reference-catalog` 慢在哪

`creation_history.py:77-104` 的实现：

```python
snapshot = self.projects.snapshot(project_id)          # 0.77 s
for asset in snapshot.assets:
    service.reference_available(project_id, asset.id)  # 没传 snapshot！
```

`reference_available()` 会走 `open_media()`，而 `open_media()` 在 `snapshot is None` 时会
`self.projects._load(db, project_id)` —— **在 catalog 锁里把整条提交链再读一遍**。

于是成本是 `1 + N` 次全量加载。实测这 6 个素材：

```
逐素材调用（不传 snapshot）: 6388.8 ms
逐素材调用（传 snapshot）  :   39.0 ms   提速 164x
```

即：`reference_catalog` 里补一个 `snapshot=snapshot` 参数，接口整体从 ~7.5 s 降到 ~0.8 s。
这是**先修成本、再谈预加载**的原因：预加载只能把等待藏起来，藏不住 7.5 秒。

`asset-list` 的 36 s 是另一个问题（`creation_history.py:419-436` 里对每个素材算 `usage()` 并解析全部 reference），不在本文的预加载范围，单独记录。

## 4. 会取画布素材的功能盘点

| # | 功能 | 入口文件 | 取数方式 | 触发频次 | 当前是否预加载 |
| --- | --- | --- | --- | --- | --- |
| 1 | 生成节点 `@` 参考 | `GenerationReferenceEditor.tsx` | `useProjectMentionAssets(doc.id, true)` | 每工程 1 次 | 是 |
| 2 | 助手对话 `@` 参考 | `ChatReferenceEditor.tsx` + `AssistantPanel.tsx` | 同 hook，`preload=false` | **每次打开菜单 1 次** | 否 |
| 3 | 参考文件上传去重 | `useReferenceUploads.tsx` → `referenceUploads.ts:31,41` | `loadReferenceCatalog` ×2 | 每次上传 2 次 | 不适用（需最新） |
| 4 | 对话里插入节点素材 | `useAssistantChat.ts:303` | `refresh()` + `loadReferenceCatalog` | 每次插入 1 次 | 不适用（需最新） |
| 5 | 创作器缺失素材回填 | `GenerationReferenceEditor.tsx:565,623` | `loadReferenceCatalog` | 仅在本地列表缺失时 | 否（每次重取） |
| 6 | 资源库面板 | `library/libraryClient.ts:169` | `GET /library/items` | 打开面板 | 另一套接口 |
| 7 | 主体导入对话框 | `library/SubjectImportDialog.tsx` | 复用 6 + 画布节点 | 打开对话框 | 另一套接口 |
| 8 | 节点版本历史 | `NodeVersionHistory.tsx:240` | `GET /items/{id}/versions` | 打开历史 | 否（按节点，不宜预取） |
| 9 | 画布归档导出 | `canvasArchive.ts` | 读 `snapshot`（内存） | 导出时 | 无网络请求 |
| 10 | 固定参考 pinned | `pinnedReferenceAssets.ts` | 读 `snapshot`（内存） | 渲染时 | 无网络请求 |

结论：

- 真正吃 `reference-catalog` 的是 **1、2、3、4、5**；
- 3、4 需要**最新**数据（用来校验指纹），不能直接用缓存，但可以「先用缓存立即给结果，再后台校验」；
- 5 是纯回填，最该复用已有列表而不是重新请求；
- 6、7 是资源库（另一套接口），8 是按节点数据，9、10 根本不发请求。

## 5. 推广方案

分三层，逐层独立收益，可以只做其中一部分。

### A. 服务端先去掉重复加载（收益最大，改动最小）

`creation_history.py:97`：

```diff
- service.reference_available(project_id, asset.id)
+ service.reference_available(project_id, asset.id, snapshot=snapshot)
```

实测 6.39 s → 39 ms。做完这一条，`reference-catalog` 在 204 提交的工程上约 0.8 s。

### B. 前端加一层按工程的共享缓存

新增 `src/backend/referenceCatalogCache.ts`：

```ts
// 键：projectId；值：assets + 取回时间 + 失效标记
export function cachedReferenceCatalog(projectId: string): ReferenceAsset[] | undefined;
export async function loadReferenceCatalog(
  projectId: string,
  signal?: AbortSignal,
  options?: { fresh?: boolean; maxAgeMs?: number },
): Promise<ReferenceAsset[]>;
```

- `load()` 默认走缓存（TTL 建议 30 s，或直到显式失效）；
- `fresh: true` 强制重取，给上传去重、插入节点这类需要最新数据的场景；
- `useProjectMentionAssets` 改为读缓存 + 订阅变化，两个组件共享同一份结果（省掉重复请求）。

失效时机（建议）：

| 事件 | 失效方式 |
| --- | --- |
| 上传成功 | 局部追加新素材，或直接标记失效 |
| 生成完成产出新素材 | 标记失效（下一个 `@` 重取） |
| 删除素材 / 归档 | 标记失效 |
| 切换工程 | 无需处理（按 projectId 分键） |
| 手动点「重新读取」 | `fresh: true` |

不建议用 `snapshot.eventCursor` 做失效依据：改提示词、移动节点都会让它变，会导致过度失效。

### C. 预加载时机

在 B 之上，预加载只是「什么时候先发起一次请求」。可选时机按收益排序：

| 时机 | 说明 | 代价 |
| --- | --- | --- |
| 画布就绪 | 现在已在用 | 已有 |
| 打开助手面板 | 对话 `@` 的等待归零 | 面板一开就发一次请求 |
| 鼠标进入创作器 | 比就绪时机更贴近真实意图 | 需要 hover 事件 |
| 工程切换后空闲时 | `requestIdleCallback` | 需要处理竞态 |

## 6. 需要你确认的清单

每一行选一个方案。**「预加载」= 提前取 + 缓存；「按需 + 缓存」= 第一次用时取，之后复用；「每次重取」= 保持现状。**

| # | 功能 | 建议 | 备选 | 你的选择 |
| --- | --- | --- | --- | --- |
| 1 | 生成节点 `@` 参考 | 预加载（画布就绪即取） | 按需 + 缓存 | ☐ 预加载 ☐ 按需 ☐ 重取 |
| 2 | 助手对话 `@` 参考 | 预加载（打开面板即取） | 按需 + 缓存 | ☐ 预加载 ☐ 按需 ☐ 重取 |
| 3 | 参考上传去重 | 按需 + `fresh`（先给缓存结果，再校验） | 每次重取 | ☐ 缓存 ☐ 重取 |
| 4 | 对话插入节点素材 | 按需 + `fresh` | 每次重取 | ☐ 缓存 ☐ 重取 |
| 5 | 创作器素材回填 | 按需 + 缓存（复用第 1 项的结果） | 每次重取 | ☐ 缓存 ☐ 重取 |
| 6 | 资源库面板 | 本次不动（另一套接口，另立方案） | — | ☐ 不动 ☐ 也做 |
| 7 | 主体导入 | 本次不动 | — | ☐ 不动 ☐ 也做 |
| 8 | 节点版本历史 | 不预取（按节点、可能很多） | — | ☐ 不预取 |
| 9 | 画布归档导出 | 不涉及（无请求） | — | ☐ 不涉及 |
| 10 | 固定参考 | 不涉及（无请求） | — | ☐ 不涉及 |

推荐组合（如果不想逐项看）：**1 + 2 预加载，3 + 4 + 5 走缓存，6–10 不动**，同时做 A 层修复。

### 与之配套的两个决定

| 问题 | 选项 | 建议 |
| --- | --- | --- |
| 缓存有效期 | 30 s TTL / 只在显式失效时更新 | 30 s TTL + 显式失效兜底 |
| 服务端 A 层是否一起改 | 是 / 否 | 是，否则预加载只是把 7.5 s 挪到后台，点开仍然要等 |

## 7. 风险

| 风险 | 说明 | 应对 |
| --- | --- | --- |
| 缓存导致列表过期 | 新上传的素材在 `@` 里看不到 | 上传后显式失效；菜单顶部保留「重新读取」 |
| 指纹校验用旧数据 | 3、4 需要最新指纹 | 这两处强制 `fresh`，或「缓存先显示、请求回来后替换」 |
| 预加载增加空转请求 | 用户从不打开 `@` | 只在画布就绪 / 面板打开时各取一次，不随输入重复 |
| 大工程仍然慢 | 204 提交的工程 snapshot 就要 0.8 s | 属于读取基线问题，另行优化（可考虑 snapshot 缓存命中率） |
| 两个 hook 实例状态不一致 | 现在各自持有一份 | B 层缓存统一后自然解决 |

## 8. 实施顺序（确认后）

1. A 层：`reference_catalog` 传 `snapshot`，跑 `pytest tests/test_creation_*.py`；
2. B 层：新增缓存模块，`loadReferenceCatalog` 增加 `fresh` 选项，`useProjectMentionAssets` 改读缓存；
3. 补单测：缓存命中、失效、`fresh` 强制重取、切换工程；
4. C 层：按第 6 节勾选结果接上助手面板的预加载；
5. 浏览器验证：同一个工程重复打开 `@`，第二次应立即出现且无网络请求。

## 9. 待确认

1. 第 6 节清单逐项选择（或直接采用推荐组合）。
2. 缓存有效期取 30 s 是否合适，还是只认显式失效。
3. 是否接受为这件事动服务端（A 层），因为它会改变 `reference-catalog` 的耗时曲线。
4. 资源库面板（第 6 项）的 36 s 是否要单独开一份文档——它和预加载不是同一类问题。

## 10. 已确认的范围

只改两处：**资产库** 与 **切换项目时的加载**。第 6 节 1–5 项（生成节点 / 助手对话的 `@` 参考、上传去重、插入节点、创作器回填）本轮不动，服务端 A 层也不动。

两处都采用「缓存 + 预热」：第一次仍要等，之后重开与切回不再发请求。

## 11. 实施记录

### 新增

| 文件 | 作用 |
| --- | --- |
| `src/backend/requestCache.ts` | 通用列表缓存：30 s TTL、同一 key 的并发请求合并、按前缀失效、失败不写缓存、`prefetchRequest` 静默预热 |
| `src/canvas/library/libraryPrefetch.ts` | 空闲时预热资产库三个列表 + 工程列表 |

### 接入缓存

| 文件 | 读取 | 失效时机 |
| --- | --- | --- |
| `src/backend/workspace.ts` | `listWorkspaceProjects` → key `workspace:projects` | `createWorkspaceProject` / `renameWorkspaceProject` / `trashWorkspaceProject` 之后 |
| `src/canvas/library/libraryClient.ts` | `listItems` → key `library:items<query>` | 所有写操作（上传、从画布添加、重命名、回收站、还原、清空）之后 |
| `src/backend/subjectLibrary.ts` | `listLibrarySubjects` → key `library:subjects:<query>` | 备份主体之后 |
| `src/backend/canvasSources.ts` | `canvasSources` → key `library:canvases:<projectId>`，TTL 15 s（来源随画布变化） | 15 s 自然过期 |

每处都导出 `peek*`（面板首帧直接渲染已有数据）和 `prefetch*`（预热）。

### 预热时机

`CanvasWorkspace` 里 `ready` 为真、或 `doc.id` 变化（切换项目）时调用 `prefetchLibrary(doc.id)`：

```ts
useEffect(() => {
  if (ready) prefetchLibrary(doc.id);
}, [ready, doc.id]);
```

预热在 `requestIdleCallback`（无该 API 时 1.2 s 定时器）里执行，避免和刚打开的画布抢读取；已命中缓存的 key 直接跳过。

### 面板行为

`AssetsPanel`、`SubjectsPanel`、`CanvasesPanel`、`TrashPanel` 打开时先用 `peek*` 渲染：

| 场景 | 之前 | 现在 |
| --- | --- | --- |
| 首次打开资产库 | 全部发请求，显示「正在读取素材」 | 与之前相同（预热未完成时） |
| 再次打开资产库 | 重新发请求 | 立即渲染，无请求 |
| 打开工程选择器 | 每次约 953 ms | 预热后立即显示 |
| 画布标签页 | 每次约 973 ms | 预热后立即显示 |
| 上传 / 重命名 / 删除后 | — | 对应 key 失效，下次打开拿新数据 |
| 切换项目 | — | 新工程的资产库数据在画布就绪后预热 |

### 验证

| 项目 | 结果 |
| --- | --- |
| `tsc --noEmit` | 0 错误 |
| `node --test tests/*.test.ts` | 465 通过（451 基线 + 14 条新增） |
| `vite build` | 通过，5.2 s |
| 新增测试 | `tests/requestCache.test.ts`（9 条：命中、`fresh`、过期、并发合并、前缀失效、失败不缓存、预热）+ `tests/libraryCache.test.ts`（5 条：客户端接入后的真实请求次数） |
| 既有测试调整 | `tests/backendWorkspace.test.ts` 的 fixture 开头清空缓存，让每个用例仍代表一次全新的页面加载 |

### 仍然待办

第 6 节 1–5 项与服务端 A 层（`reference_available` 传 `snapshot`）按本次决定未实施；`@` 相关链路保持原样。

## 12. 画布标签页缩略图（2026-11 修复记录）

现象：打开资产库 → 画布标签页，四个节点卡片只有占位图标，且要等很久。

排查结论：缩略图一直不是「没加载」，而是**每个卡片都在下载原始素材**——实测 2 张图各 5.4 MiB（2368×1776 PNG）、2 段视频 1.9 / 11 MiB；服务端每次请求还会重放整条提交链（`snapshot`），且响应头是 `Cache-Control: no-store`，每次打开都要重下一遍。并发 4 个请求时互相抢目录文件锁，实测 13 s。

改动：

| 位置 | 改动 |
| --- | --- |
| `packages/core/src/opendirector/media/thumbnails.py`（新） | 用 FFmpeg 渲染 480 px JPEG 预览；视频取 0.3 s 首帧；按 `nodeId:revision:slot` 做进程内 LRU（256 条），内容寻址故无需失效 |
| `apps/api/.../library.py` | 媒体接口新增 `size=thumb`；命中预览缓存时**先返回、不读原始字节**；响应头改为 `private, max-age=31536000, immutable`（revision 含 asset fingerprint，可安全长缓存） |
| `packages/core/.../canvas_sources.py` | `open_media` 传入已有 `snapshot`；按 `(工程, head)` 缓存 nodes 行；并发读串行化（目录锁是轮询式的，多线程抢锁比排队更慢） |
| `packages/core/.../creation_projects.py` | 新增 `head(project_id)`，只取当前提交号，作为上面缓存的门闩 |
| `src/backend/canvasSources.ts` | `canvasSourceMedia(projectId, source, slot, size?)` |
| `src/canvas/library/CanvasSourceCard.tsx` | 图片与视频都取 `size=thumb`；视频保留播放角标 |
| `src/canvas/library/libraryPrefetch.ts` | 空闲时**逐张**预热前 6 个预览（服务端读原图，串行比并发快得多） |
| 四个面板 | 刷新回来的列表若 `id/revision` 未变则保留原数组，卡片 props 不变，不会二次下载 |

实测（工程 `111`）：

| 场景 | 之前 | 现在 |
| --- | --- | --- |
| 单个缩略图体积 | 5516 / 11153 / 1918 / 5498 KB | 9 / 16 / 8 / 10 KB |
| 并发 4 个请求 | 13 379 ms | **3–7 ms**（预热后） |
| 串行 4 个请求 | — | 117 ms |
| 再次打开资产库 | 重新下载约 24 MB | 浏览器缓存命中，0 请求 |

预览缓存在进程内，重启服务后首次渲染仍需读一次原始素材（本机首次约 1–4 s/张，随后 < 300 ms）。

## 13. 打开画布与资产库「画布」标签（2026-11 修复记录）

现象：重新打开画布、以及在画布上增加/删除节点之后，都要等一段加载时间；资产库的画布标签每次都要现查服务端。

### 13.1 服务端：当前提交记录缓存

`CreationProjects` 的每次读取（`snapshot` / `open` / `view` / `list_projects`）都会重放并校验整条提交链。Windows 上 `_records_cache` 是刻意关闭的（ctime 不可靠），所以 204 条提交要重新解析一遍——约 0.9–1.9 s，且每次读写都要付一次。

改动：

| 位置 | 改动 |
| --- | --- |
| `creation_projects._current()`（新） | 以 `(工程目录, head, head 文件签名)` 为键缓存**已校验的 head 记录**；签名沿用 `_record` 的五个 stat 字段，外部改写 head 文件会自然失效 |
| `_remember_current()` + `_finish()` 末尾 | 提交发布完立即把新记录放进缓存，**保存后的第一次读取不再重放** |
| `snapshot` / `open` / `view` / `list_projects` | 改走 `_current`；`history()` / `receipt()` 仍走完整 `_load` |
| `tests/test_creation_canvas_service.py` | 原断言「projection 恰好调用一次 `_load`」放宽为「不超过一次」——命中刚发布的记录时是 0 次，且不变量不变 |

缓存只保留每个工程的最新记录（16 条上限），不复制历史快照。

### 13.2 资产库「画布」标签：当前画布直接读文档

`src/canvas/library/liveCanvasSources.ts`（新）把打开中的 `CanvasDocument` 映射成 `CanvasSource[]`（节点、标题、类型、是否有内容），规则与服务端一致：主体看 `subject.main`、时间线看是否有片段、其余看 `src` 且 `assetState !== "missing"`。

- 打开标签页默认落在**当前画布**，列表来自内存，**不发请求**；`‹ 返回` 才切到工程列表。
- 当前画布的卡片直接用画布已有的图片地址做预览，不请求缩略图（`preview={false}`）。
- 只有打开**其他**工程时才 `canvasSources()` 拉取并按 revision 加载缩略图。
- 当前画布的卡片 `revision` 为空，仅在真正「加入资产 / 导入画布」时用 `fresh` 请求补一次——这一步本来就要等保存完成。

### 13.3 预加载时机

`prefetchLibrary` 拆成两段：工程名列表 + 资产列表**立即**发（都很轻），主体、画布来源、预览则等到空闲。缩略图逐张串行预热，避免并发抢目录锁。

### 13.3.1 列表与切换（补充）

- **默认视图**：画布标签打开时停在工程列表（当前画布标「当前画布」），点击卡片才进入该画布的节点网格。
- **工程列表不再重放提交链**：`list_projects()` 直接取 `project.json` 清单里的 `name`（重命名提交时清单本来就是同步写的），列表从约 1.9 s 降到 8–35 ms（冷进程第一次仍有一次目录扫描）。
- **列表页预热所有画布**：工程卡片渲染后 150 ms，按顺序对每个工程 `prefetchCanvasSources()`（当前画布跳过，它的数据来自文档）。点开任意画布时直接命中，15–30 ms。
- **来源缓存有效期 15 s → 120 s**：当前画布已改读文档，这个 TTL 只用于其他工程的行。
- `_current_cache` 加锁：读请求分布在多个线程，字典操作只在锁内进行。

### 13.4 实测（工程 `111`，204→208 条提交）

| 场景 | 之前 | 现在 |
| --- | --- | --- |
| 打开画布（热） | 约 940 ms | **20–40 ms** |
| 保存后的第一次读取 | 约 940 ms | 命中刚发布的记录，约 10 ms |
| 工程列表 | 约 950–1900 ms | **8–35 ms** |
| 点开画布（预热后） | 约 850–1300 ms | **15–30 ms** |
| 资产库画布标签（当前画布） | 约 1.3 s + 缩略图 | **0 请求，立即显示** |
| 资产库画布标签（其他画布） | 同上 | 预热命中，缩略图随后补上 |

新进程里每个工程的头记录仍要重建一次（约 0.9 s），之后一直是缓存命中；保存后的读取由发布时写入缓存覆盖，不受影响。

验证：`tsc --noEmit` 0 错误，`node --test` 465 通过，`vite build` 通过；Python 侧相关测试 110 通过 / 10 失败，失败项与改动前的基线完全一致（Windows 符号链接权限、大小写重命名、ffmpeg 相关环境问题）。
