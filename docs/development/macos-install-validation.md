# macOS 安装验证

验证日期：2026-11-04。源码基线：从公开仓库全新克隆的 `main`，提交 `c79bf54e`。先验证未修改基线，再应用本次 FFmpeg 参数兼容修复。本文记录这一版本的实际结果，不承诺所有 Mac 或后续版本均通过。

## 环境与隔离范围

- Apple Silicon（arm64），macOS 26.7.1。
- Node.js 24.22.1、Python 3.12.15、FFmpeg / ffprobe 9.0.2，包含 `libx264`。
- 独立无头 Brave，Chromium 156.0.8078.48；没有使用用户的浏览器资料。
- 全新源码目录、`node_modules`、Python `.venv` 和应用项目目录；没有复用原应用的配置、模型密钥或项目。
- 复用了机器上已有的 Node.js、Python 和 FFmpeg 可执行文件，因此是应用的全新安装验证，不是空白 macOS 系统或 Homebrew 安装器验证。README 的 Homebrew 依赖命令依据其官方说明核对。

## 安装与使用结果

按 README 的流程依次执行 `npm ci`、Python 3.12 的 `-m venv .venv`、`.venv/bin/python -m pip install -r requirements.txt`、`.venv/bin/python -m pip check`、`npm run build`，均成功。`pip check` 未发现依赖冲突。

使用 `.venv/bin/python scripts/opendirector.py serve --port 18080` 启动正式构建，未使用 Vite 或替身 API 服务。验证通过的场景：

| 场景 | 实际核对 |
| --- | --- |
| 服务启动 | 带 `X-OpenDirector-Request: 1` 请求 `/api/health`，返回 `{"status":"ok"}` |
| 首次打开 | 画布可访问，显示已保存；模型配置为空时也能使用本地功能 |
| 上传 | 通过页面上传 PNG、带声音的 H.264 MP4 和文本；确认生成三个持久化素材及画布节点 |
| 素材读取 | 下载三份素材并与原始文件比较 SHA-256；文本导入后的名称扩展名为 `.md`，正文保持一致 |
| 视频播放 | 在页面播放上传视频，确认 320×180 尺寸、播放时间前进且无媒体错误 |
| 页面刷新 | 三个节点和素材记录恢复，浏览器无未捕获错误 |
| 停止与重启 | `Ctrl+C` 后进程退出、端口释放；重新启动后素材及画布记录一致，页面重新打开三个节点 |
| 端口冲突 | 同端口启动返回非零状态，并提示占用原因及 `--port 18081` |

安装期间 npm 报告了 3 个 low、1 个 moderate 依赖审计提示，以及可选 `fsevents` 安装脚本未列入批准清单的提示；未阻断安装或构建。构建有已有的大块体积提示。此次没有执行强制依赖升级。

## 发现与修复

README 原有通用安装流程没有教 Mac 用户安装依赖、处理 Homebrew Node.js 的 PATH，以及避免旧版系统 Python。本机 `/usr/bin/python3` 为 3.9.6，低于项目要求。中英文 README 现增加 Mac 专用准备和安装命令、版本检查、健康检查及对应排障说明。

基线媒体回归出现四项失败，均发生在深度处理准备视频时：`picture()` 使用的 `-vsync` 在 FFmpeg 9 中已移除。修复在媒体层探测当前 FFmpeg 支持的选项，优先使用 `-fps_mode passthrough`，对仍使用旧接口的 FFmpeg 保留 `-vsync passthrough`。探测结果仅在当前服务进程内缓存；更换 FFmpeg 后重启应用。

以下现有回归在修复后通过：

```sh
.venv/bin/python -m pytest tests/test_launcher.py tests/test_creation_assets.py tests/test_tool_tasks.py -q
```

新增验证覆盖新旧 CLI 帮助格式、能力缺失、成功探测缓存，以及真实 FFmpeg 对变帧率视频的处理：四个输入帧在 0、0.1、0.4、0.8 秒，调整尺寸后仍保留这四个时间戳。

```sh
.venv/bin/python -m pytest tests/test_ffmpeg_frame_sync.py -q
```

最终将上述四个测试文件合并执行，结果为 79 passed。唯一警告来自 Starlette 测试客户端的 httpx 弃用提示。

深度流程使用真实 FFmpeg 和媒体文件，但模型响应是测试替身；这些检查不代表真实深度模型服务已验收。旧版 FFmpeg 分支通过协议夹具检查，本机没有运行 FFmpeg 4。

## 未覆盖范围

- Intel Mac、其他 macOS 版本、Safari、Firefox。
- 在空白操作系统上安装 Homebrew、Node.js、Python 或 FFmpeg 的全过程。
- 真实付费 AI 调用、GPU 模型部署、时间线 MP4 导出的本轮验收。
- 完整产品功能回归；上述结论限于安装、启动、本地素材流程和相关媒体兼容问题。
