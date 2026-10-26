# 画布动态功能：静态证据清单

本轮补采 **23 个公开 JavaScript chunk，共 3,278,638 字节**，全部成功并完成格式化。范围为 11 类节点、生成草稿入口、编辑/功能运行层、图层全屏、镜头/运镜、资产库，以及导演入口与主组件。来源只取自先前归档的运行时 URL 映射，以及其中明确出现的导演懒加载引用。没有使用浏览器、Cookie、授权头或账号接口，没有执行目标代码，也没有产生生成任务或消费积分。

这里遵循 REA 技能的来源、覆盖范围与不确定性约定；产物是公开原始脚本及 Prettier 格式化结果、源代码静态分析，**不是 REA 返回的 Evidence 记录，不是原始 TypeScript 工程，也不证明功能对当前账号可用**。

- [捕获清单](capture/manifest.json)：URL、chunk ID、请求时间、状态、字节数、SHA-256。
- [格式化来源对应](readable-manifest.json)：原始摘要、输出摘要、行数、工具版本。
- [可检索目录](catalog.json)：53 个所检查工具栏范围内的字面量 ID 属性、3,511 条相关中文翻译文案、模型相关字符串位置、导演操作字符串位置。ID 包含子菜单和分隔符；文案和操作字符串不是启用状态。
- `node research/canvas/features/check.mjs` 验证全部原始/格式化摘要和来源对应。
- `node research/canvas/features/extract-catalog.mjs` 重新提取目录，不联网。
- `node research/canvas/features/collect.mjs` 按固定选择重放采集，复用摘要一致的已存文件；只对缺失项执行公开 GET。并发 3、单请求 60 秒、单件 8 MiB、总计 48 MiB，本轮使用外层 120 秒执行期限。格式化串行进行。

## 阅读路径与证据分级

以下简写只用于这份文档，行号均是格式化后的行号：

| 简写     | 文件                                                                           |
| -------- | ------------------------------------------------------------------------------ |
| MAIN     | [主应用](../readable/js/545ec3537fff-main.303f6eac20.js)                       |
| CORE     | [画布核心](../readable/js/e02221c0211e-canvas-core.04e59616e1.js)              |
| DATA     | [持久模型与命令](../readable/js/04625fc43d5d-canvas-data.764f8a0821.js)        |
| API      | [能力与传输契约](../readable/js/6b4e9596b09a-9746.842fcaf98a.js)               |
| RUNTIME  | [功能运行层](readable/async-canvas-feature-runtime.9b86f42393.js)              |
| OVERLAYS | [编辑器与对话框](readable/async-canvas-feature-overlays.778674dbae.js)         |
| LAYERS   | [图层编辑器](readable/async-canvas-image-layer-board-fullscreen.928d9bf172.js) |
| DIRECTOR | [导演主组件](readable/2232.9df5e1610c.js)                                      |

“注册”指应用菜单或功能入口中出现；“实现”指检查到了实际状态/参数/命令处理；“文案”只指翻译条目存在。当前账号权限、灰度、服务器模型、价格、生成质量与任务成功率均需独立运行验证。

## 模型与生成参数

**模型菜单和参数不是完整硬编码目录。** API 第 20823–20880 行调用 `/octo_api/v1/generation_specs`，将返回的 `models[].modes`、`tool_max_counts`、`post_edit`、`tool_presets` 转为能力目录。MAIN 第 14980–15160 行再解析 `commerce_config`。本轮没有调用这些接口，因此不能将下面字符串当成当前菜单，也不能据此报价。

| 类别 | 静态实现观察                                                                                                   | 来源                                                                                                   |
| ---- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 图片 | `seedream_5.0_lite` 被扩图、多角度 adapter 固定使用；`seedream_5.0_pro` 是图层分解常量及电商主图匹配条件       | RUNTIME 4874、5058、5095、5196；MAIN 145269；CORE 22665                                                |
| 视频 | 基础模式 `t2v`、`i2v`、`first_last_frame`、`multi_modal` 从能力目录投影；`seedance_2.5` 出现在一键动图兼容条件 | CORE 95527–95540、105496                                                                               |
| 音频 | legacy TTS、音频模型 TTS、`unified_edit`、`music` 分支；`seed_audio_v1_5` 是专门处理的模型标识                 | CORE 95334–95373；RUNTIME 804                                                                          |
| 文字 | 有文字生成节点和模型不可用状态；不能从翻译包中的全站 Agent 模型名推断画布文本生成菜单                          | [文本节点](readable/async-canvas-node-text.96c30babf4.js)，文案 `octo_canvas_text_generator_no_models` |

生成参数的具体范围由服务器规则决定：

- 视频提交前验证 `model_name`、`mode`、`aspect_ratio`、`duration_ms`、`prompt`、`resolution`，以及可选 `is_long_video`、`meta_list`、`tool_selections`、素材和主体槽位。时长规则可为枚举或 min/max/step 范围，不能统一写死；见 CORE 95454–95595。
- 音频模型提交的参数为 `prompt` 与素材；配乐分支还有 `duration_ms`；传统 TTS 使用 `text`。语速、音色是否可用由能力和音色目录决定；见 CORE 95334–95373、API 19797、20103、20342。
- 图片相关代码支持模型、提示词、尺寸比例/清晰度、数量、参考素材，以及部分能力提供的自定义宽高。电商主图尺寸规则包含 `min_side/max_side/min_pixels/max_pixels/dimension_step/min_aspect_ratio/max_aspect_ratio`，见 CORE 22522–22688。
- MAIN 145242–145258 定义的比例领域包含 `16:9,9:16,1:1,4:3,3:2,2:3,3:4,5:4,4:5,21:9,2:1`；这不是每个模型都支持的菜单。
- 视频素材角色有首帧、尾帧、参考、原图、抠图、蒙版等枚举，见 MAIN 145235–145241；主体和节点可作为扩展提示词槽位，见 CORE 106940 起。
- SeedAudio 1.5 的费用提示写明按最终生成时长计费、约 10–200 积分并随内容复杂度变化（OVERLAYS 16850–16856）。这是静态提示，不是本次实测费用或承诺价格。

## 图片编辑与图层

| 操作                                                     | 静态可操作结构/参数                                                                                                                                    | 证据                                                                          |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 扩图                                                     | 四边比例 top/bottom/left/right 非负且不可全零；输出宽高为正整数；maxSize 等于长边；candidateCount 为 1；提交 mode 3，2K                                | RUNTIME 4987–5072                                                             |
| 多角度                                                   | yaw/pitch 有限并取整，yaw 归一到 0–360；distance 参数；提交 mode 5、2K                                                                                 | RUNTIME 5075–5102；CORE 132966                                                |
| 智能打光                                                 | keyLight 的 yaw/pitch、brightness 整数，texture 为 soft/hard，lightColor 为小写 `#rrggbb`，可选 presetId；pitch 限 -90..90；亮度可用枚举取自能力       | RUNTIME 5105–5163；CORE 128235–128335                                         |
| 图层分解                                                 | 已知格式限定 PNG/JPG/JPEG；格式缺失时辅助校验不直接拒绝；至少 262,144 像素；resolution=`auto`；可选 prompt/region；提交 mode 12、Seedream 5.0 Pro 常量 | RUNTIME 5166–5201；CORE 126893–126908                                         |
| 普通/智能超清                                            | 1–20 个不重复来源；普通 mode 6，Pro mode 7；Pro detailStrength 为 0.01..1，resolution 由能力提供                                                       | RUNTIME 5204–5254                                                             |
| 全景                                                     | 单一图源；模型来自能力；prompt/resolution；固定 2:1；提交 mode 11                                                                                      | RUNTIME 4898–4929                                                             |
| 商品替换                                                 | 原场景与商品图的存储 URI、至少一个 bbox、可选 prompt；清晰度 2K/4K；提交 mode 14                                                                       | RUNTIME 4932–4983                                                             |
| 抠图                                                     | 初始识别、快速选择候选、蒙版文档、执行产物；批量实现并发 2、资产执行门 1；不能用本地透明背景绘制冒充服务端识别                                         | RUNTIME 4797–4861、8737、9085–9103                                            |
| 消除笔/智能改图                                          | 独立蒙版/笔划编辑、准备/失败/提交状态；智能改图先准备来源且受能力开关限制                                                                              | RUNTIME 6020–6134、8770、8911、8998                                           |
| 标注                                                     | 矩形、椭圆、箭头、线、画笔、文字、序号、橡皮，填充/描边/线型/颜色/粗细，撤销重做；这里的字面量目录是编辑器工具说明                                     | OVERLAYS 16866 起                                                             |
| 构图、营销多尺寸、动态海报、九宫格拆图                   | 菜单及功能服务有注册，具体参数取相应 capability；不是所有账号必然显示                                                                                  | MAIN 16900–17220                                                              |
| 人物/面部/产品三视图、连续分镜、多机位九宫格、场景俯视图 | 预设型图像操作入口；模型不支持时有禁用状态                                                                                                             | MAIN 16855 起；catalog 中 `feature_intro` 与 `selection_context_toolbar` 文案 |

图层编辑的真实命令目录在 LAYERS 3155–3232：旋转、水平翻转、垂直翻转、适应、上移、下移、置顶、置底、隐藏/显示、复制副本、删除。LAYERS 2738 启用列表重排；2593–2638 处理剪切/复制/粘贴、复制副本、删除、撤销/重做；4174 起存在多图层拖动和变换。LAYERS 144 会在图层旋转非零或已翻转时阻止智能改图，要求先恢复方向。图层本地操作与 AI 后处理应分开建模。

## 视频、音频后处理

MAIN 16450–16855 实际注册：视频编辑、延长、首帧/尾帧/自选帧提取、深度提取、时长裁剪、翻译、提取音频、音频分离、补帧、去字幕、视频抠像、画幅裁剪；音频节点包含时长裁剪和音频分离。RUNTIME 17240–17304 的会话分派还包含 `partial-reshoot` 与 `sample-promotion`。这些分支存在不代表当前模型或账号支持。

视频超清有 2K/4K 两个输出路径（RUNTIME 15350–15382）。原始视频时长、现有分辨率、可编辑状态、能力和商业权限均影响入口；翻译、分离等也拥有独立的提交/失败/取消状态。不要把 `video-trim`（源时长范围）与 `video-crop`（画幅）合并为一个参数。

音频分离目录包含人声和音效输出；SeedAudio TTS/统一编辑与配乐是不同生成分支。音色目录与音色可用状态由运行时加载，不能把 locale 内某个旧音色名称当成当前账号选择项。

## 主体、堆叠、工具节点、外部节点

| 节点        | 持久字段与约束                                                                                                                                                              | 证据                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| subject     | `main`、`auxiliaries`、`voice`，可有 metadataHeight/provenance；辅助最多 3；没有 main 不得有 voice/辅助；同 node ID 不能占多个槽位                                          | DATA 15777–15870、16021                                                                        |
| 主体绑定    | `{refType:'node',sourceNodeId}` 或 `{refType:'resource_snapshot',resourceId,audioOutputIndex?}`；两种身份不能混用                                                           | DATA 15959–15984                                                                               |
| 主体媒体    | 主槽 image/video，辅助 image，音色 audio；视频≤15秒，音色2–5秒。静态上传门：图25MiB JPEG/PNG/WebP/BMP；视频500MiB MP4/MOV；音色15MiB MP3/WAV                                | [主体组件](readable/async-canvas-node-subject.357b7e461b.js) 2334；CORE 130778、154245–154269  |
| stack       | `data:{nodeIds}` 有序引用；root、2–50成员；成员也必须root且不能同时属于多个stack；支持 image/video/audio/text/subject/timeline 与导演 external，不支持组/工具/文件/其他堆叠 | DATA 17815–17872                                                                               |
| tool        | `data.tool:{kind,fields:[{name,values:string[]}],provenance?,palette?}`；kind 渲染有 camera/style/palette/camera_motion；最多16字段，每字段32值，字符串256字符              | DATA 18558–18630；[工具节点](readable/async-canvas-node-tool.3ae481a273.js) 1895–1898          |
| tool 元数据 | provenance=`{paletteId,version}`；palette 仅 palette 工具可用，至少 name/sourceImageUri 之一。camera 编辑轴为 camera/aperture/focal，选项由目录加载                         | DATA 18579–18643；[镜头对话框](readable/async-canvas-camera-dialog.ab79a68700.js) 245、296–308 |
| external    | `data:{title,tags?,externalType,current:{versionId}}`；当前已识别 `externalType='director-stage'`；versionId 是 uint64 十进制串；不能当成任意 URL iframe                    | DATA 13945–13981、15628；[外部节点](readable/async-canvas-node-external.0a9a7553e2.js) 114–144 |

## 时间线

DATA 18720–18803 提供实际复制/归一化结构：

```ts
data = { title, aspectRatio?, tags?, tracks: [
  { kind: 'visual', muted, clips },
  ...{ trackId, kind: 'audio', muted, clips }
] }
imageClip = { clipId, kind: 'image', source, durationTick }
videoClip = { clipId, kind: 'video', source, sourceRange: { startTick, durationTick }, speed, volume, muted }
audioClip = { ...videoClip, kind: 'audio', startTick }
source = { kind: 'canvas-node', nodeId }
       | { kind: 'resource', resourceId, audioOutputIndex? }
```

视觉轨按顺序串接；音轨有独立排布 startTick，同轨不能重叠，且须按 startTick/clipId 稳定排序；音量 0..1、speed>0。视频/音频的占用时长为 `Math.round(sourceRange.durationTick / speed)`。切分会把播放位置乘 speed 转为源范围，音频右段还要调整时间线 startTick（DATA 1182–1236、18965–19069）。增加内容的写入限额为 50 clips 和 144,000,000 ticks（DATA 18824–18830）。**本轮未找到 tick 换算实现，不能把 tick 擅自解释成毫秒。** 本地用秒时应明确这是重建数据约定。

时间线节点有预览/播放/拖动/缩放标尺/轨道静音/修剪与全屏编辑入口；节点宽度夹在720–2400（[时间线组件](readable/async-canvas-node-timeline.d2642db961.js) 47）。OVERLAYS 12415–12435 与 16510–16632 接入时间线导出、渲染、素材导出、可编辑项目下载、剪映草稿生成会话。它们不是已验证成功的离线视频合成器。

## 导演台

OVERLAYS 7025 加载 chunk 9725；其 [入口组件](readable/9725.983f69df3b.js) 又使用 MAIN 55680 的懒加载器。本轮进一步下载了该依赖清单中的主组件 chunk 2232，包含 `DirectorStageShellWorkspaceDialog`（第7行）。其他9项依赖未继续抓取，渲染器、部分基础模型与导出常量尚未形成完整依赖图。

DIRECTOR 的实际界面/命令处理包含：

- **布景/演出模式**（staging/performance），舞台物体、角色、背景、环境、机位、多机位与分镜；模式切换另有状态迁移约束（48380–48425、51086–51154）。
- 对象变换、改名、颜色、不透明度、固有尺寸、路径朝向；相机 FOV、roll、宽高比、注视点/锁定（13602–14445、15069–15109）。
- 环境背景、地面、地面可见性与透明度、曝光、网格、主光颜色/强度/方位/高度/阴影，补光和轮廓光（15142–15429）。
- 角色动作片段、移动/裁剪片段、物体与相机关键帧、关键帧移动/删除、曲线、路径、机位切换。导演时间轴明确使用 `durationSec`、`startTimeSec` 与 `displayFps`，不能与画布时间线的 tick 混同（25116–25216、26557、37947–38811）。
- 运镜预设和自定义路径；固定机位、固定注视点、自由运镜；预览后创建机位/写入路径。实际参数包含开始帧、持续帧/秒、强度、方向及冲突区间；`cameraMovesEnabled` 仅演出模式启用（39753、43536–43555、48205–48253、48409）。
- 3D 物体导入 `.glb/.gltf/.fbx/.obj`（16726–16755、49797）。动作 FBX 与 `.octomotion.json` 备份导入/导出是独立流程。FBX 导入脚本含骨架/动画有效性检查，不能把任意文件上传都视为可用动作。
- 视频导出面板支持分镜或单机位来源、简化角色、清晰度/帧率、预览、保存到设备、加入画布；默认长边1280，文案另列1920。输出帧率列表由未捕获依赖的 `YM` 提供，本轮不猜其枚举（28755–28855、34125–34128、49248–49280、51885–51925）。

导演“动作名称”与实际动态运镜模型需要区分：这套3D前端负责布景和预演，不能被描述为已完成AI视频生成。主体、镜头和预演输出再作为素材参与生成是另一条服务调用链。

## 未知与后续验证边界

23个资源都成功下载并验证，**不等于覆盖全部229个潜在懒加载资源**。本轮选了23个；加上先前HTML中已下载的Slardar资源，该初始映射仍有205个未下载。主依赖之外还会有运行时生成的资源，原映射也不是实际加载清单。

当前未知：实际模型/参数范围/价格、账号与地区能力、云端保存/协作、生成和编辑结果、后端权限与任务恢复、完整3D渲染依赖、画布时间线 tick 单位和导出器行为。普通文件哈希校验只证明本地证据未变，不证明服务有效。复刻工程应对本地可执行的图层/编排/几何操作提供真实实现，对未接入的AI行为明确展示能力边界。
