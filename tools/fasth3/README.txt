FastH3-Omni / AutoDL 单卡部署

目标：Linux x86_64、Python 3.12、RTX PRO 6000 Blackwell 96 GB。
模型、源码版本、配套组件和权重哈希固定在 deploy.sh 与 model-manifest.json。
脚本使用独立虚拟环境，默认数据目录 /root/autodl-tmp/fasth3。
constraints.txt 固定本次运行的关键依赖版本。

上传本目录脚本及 model-manifest.json 至服务器同一目录后：
  bash deploy.sh doctor
  bash deploy.sh install
  bash deploy.sh download
  bash deploy.sh start
  bash deploy.sh status
  tail -f /root/autodl-tmp/fasth3/logs/server.log

停止：bash deploy.sh stop；前台运行：bash deploy.sh serve。
可先 source resume-config.example.env 修改数据目录、Python 路径和端口。
数据盘必须容纳约 67.52 GB 模型文件，以及 Python/CUDA 依赖、编译缓存与输出。
启动前自动预编译 SM120 NVFP4 内核，默认两个编译任务、每个 nvcc 一个线程。
这样在加载模型前完成高内存编译；首次需数分钟，之后复用数据盘缓存。
下载可断点续传；勿对同一个下载目录并发启动多个相同下载任务。

Windows 本机建立隧道：
  powershell -ExecutionPolicy Bypass -File connect.ps1 -Server SSH主机 -SshPort SSH端口
可选 -IdentityFile 指定 SSH 私钥。
隧道窗口保持开启，本机端口默认为 18091，云端 HTTP 端口默认为 8091。
SSH 登录密码与模型服务的 API Token 是不同的凭据。

OpenDirector 设置 → 模型接入 → 视频生成：
  接入方式：自部署服务
  接口协议：vLLM-Omni
  Base URL：http://127.0.0.1:18091/v1
  Model ID：FastH3-Omni
  鉴权：无需鉴权（服务仅绑定云端 loopback，经 SSH 隧道访问）
选择“素材参考”，连接或引用视频、图片等资产后生成。
原有火山 API 配置可继续选择。

视频协议当前按 FastH3 Ref2VA 配方适配：默认 8 步、5 秒、480p，跟随参考横竖方向。
其他 vLLM-Omni 视频架构的能力、参数和参考格式需要各自适配，不能仅凭协议名称保证支持。
Agent、图片、音频可配置各自的 OpenAI 兼容服务及可选 Bearer Token。
FastH3 内置的文本编码器、视频和音频 VAE 属于视频管线；其他类别需要提供对应接口的独立服务。

ssh_remote.py 为可选辅助工具（需要 paramiko），支持 --upload、--download、--script。
必须提供 --host、--port；首次 --bootstrap 交互输入密码，不保存密码。
私钥和主机公钥记录保存在操作系统的本机用户配置目录，不应提交到仓库。
