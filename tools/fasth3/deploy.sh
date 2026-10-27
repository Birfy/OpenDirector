#!/usr/bin/env bash
# Ubuntu / Python 3.12 / RTX PRO 6000 Blackwell.
set -euo pipefail
HERE="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
BASE="${FASTH3_HOME:-/root/autodl-tmp/fasth3}"
PYTHON_BIN="${PYTHON_BIN:-/root/miniconda3/bin/python}"
PORT="${FASTH3_PORT:-8091}"
SOURCE_REF=6ce57141bb132880f44e91bea44fe728408571ff
export UV_CACHE_DIR="$BASE/cache/uv" TMPDIR="$BASE/cache/tmp"
export HF_HOME="$BASE/cache/huggingface" XDG_CACHE_HOME="$BASE/cache"
export HF_HUB_CACHE="$HF_HOME/hub"
export HF_HUB_DISABLE_XET=1 HF_HUB_DOWNLOAD_TIMEOUT=120
export UV_HTTP_TIMEOUT=600 UV_HTTP_RETRIES=8
export MAX_JOBS="${MAX_JOBS:-2}" FLASHINFER_NVCC_THREADS="${FLASHINFER_NVCC_THREADS:-1}"
export FLASHINFER_WORKSPACE_BASE="$BASE/cache/flashinfer"
export PATH="$(dirname "$PYTHON_BIN"):$PATH"
mkdir -p "$TMPDIR" "$BASE/logs" "$BASE/models" "$BASE/outputs"

doctor() {
  "$PYTHON_BIN" -c 'import sys; assert sys.version_info[:2] == (3,12), "Use Python 3.12"'
  nvidia-smi --query-gpu=name,memory.total,driver_version --format=csv
  df -h "$BASE" /
  free -h
  if [[ -r /sys/fs/cgroup/memory.max ]]; then cat /sys/fs/cgroup/memory.max; fi
  "$PYTHON_BIN" "$HERE/download_models.py" --plan --root "$BASE/models"
}

install() {
  doctor
  # AutoDL's optional network accelerator may contain proxy credentials: never echo it.
  if [[ -r /etc/network_turbo ]]; then source /etc/network_turbo >/dev/null 2>&1; fi
  "$PYTHON_BIN" -m pip install --no-cache-dir uv
  if [[ ! -f "$BASE/vllm-omni/.source-ref" ]]; then
    if [[ -e "$BASE/vllm-omni" ]]; then
      echo 'Unidentified source directory exists. Set FASTH3_HOME to a new directory.' >&2; exit 1
    fi
    curl --http1.1 -fL --retry 4 --connect-timeout 15 --max-time 600 \
      "https://codeload.github.com/vllm-project/vllm-omni/tar.gz/$SOURCE_REF" -o "$BASE/source.tar.gz"
    tar -xzf "$BASE/source.tar.gz" -C "$BASE"
    mv "$BASE/vllm-omni-$SOURCE_REF" "$BASE/vllm-omni"
    printf '%s\n' "$SOURCE_REF" > "$BASE/vllm-omni/.source-ref"
    rm -f -- "$BASE/source.tar.gz"
  fi
  [[ "$(cat "$BASE/vllm-omni/.source-ref")" == "$SOURCE_REF" ]] || { echo 'Source revision mismatch'; exit 1; }
  if [[ ! -x "$BASE/venv/bin/python" ]]; then uv venv --python "$PYTHON_BIN" "$BASE/venv"; fi
  export VIRTUAL_ENV="$BASE/venv" PATH="$BASE/venv/bin:$PATH"
  # HTTPS wheel downloads on this AutoDL instance require the accelerator too.
  cp "$HERE/constraints.txt" "$BASE/constraints.txt"
  uv pip install --index-url "${FASTH3_PIP_INDEX:-https://mirrors.aliyun.com/pypi/simple}" \
    --torch-backend=cu130 -c "$BASE/constraints.txt" 'vllm==0.32.0'
  export SETUPTOOLS_SCM_PRETEND_VERSION=0.32.0.dev0
  uv pip install --index-url "${FASTH3_PIP_INDEX:-https://mirrors.aliyun.com/pypi/simple}" \
    --torch-backend=cu130 -c "$BASE/constraints.txt" -e "$BASE/vllm-omni[vsa]" torchcodec 'imageio[ffmpeg]' soundfile requests pyyaml
  if ! command -v ffmpeg >/dev/null || ! command -v ffprobe >/dev/null; then
    apt-get update -qq; apt-get install -y -qq ffmpeg
  fi
  python -c 'import torch, vllm, vllm_omni; print(torch.__version__, vllm.__version__); print(torch.cuda.get_device_name(0)); assert torch.cuda.is_available()'
  uv pip freeze > "$BASE/installed-requirements.txt"
  printf 'INSTALL_COMPLETE\n'
}

download() {
  "$BASE/venv/bin/python" "$HERE/download_models.py" --root "$BASE/models"
}

serve() {
  if [[ -r /etc/network_turbo ]]; then source /etc/network_turbo >/dev/null 2>&1; fi
  export no_proxy="127.0.0.1,localhost${no_proxy:+,$no_proxy}"
  export PATH="$BASE/venv/bin:$PATH" VIRTUAL_ENV="$BASE/venv"
  python "$HERE/download_models.py" --root "$BASE/models" --verify-only
  python "$HERE/prepare_layout.py" --base "$BASE"
  # Compile without the loaded model resident in CPU RAM; persist the cache on the data disk.
  python "$HERE/warmup_kernels.py"
  # Use the official pinned single-card recipe, replacing only the decoder repo with its local snapshot.
  python - "$BASE" <<'PY'
import pathlib, sys, yaml
base = pathlib.Path(sys.argv[1])
config = yaml.safe_load((base/'vllm-omni/recipes/FastVideo/fasth3-omni-quantized.yaml').read_text())
decoder = config['additional-config']['video_vae_decoder']
decoder['model'] = str(base/'models/FastH3-NVFP4-VAE-Decoder')
decoder.pop('revision', None)
(base/'serve.yaml').write_text(yaml.safe_dump(config, sort_keys=False))
PY
  export CUDA_VISIBLE_DEVICES="${CUDA_VISIBLE_DEVICES:-0}" VLLM_WORKER_MULTIPROC_METHOD=spawn
  export VLLM_OMNI_VIDEO_SYNC_TIMEOUT=7200
  export HF_HUB_OFFLINE=1 TRANSFORMERS_OFFLINE=1
  cd "$BASE/vllm-omni"
  exec vllm serve "$BASE/models/FastH3-Omni-NVFP4-QAD" --omni \
    --config "$BASE/serve.yaml" --served-model-name FastH3-Omni --host 127.0.0.1 --port "$PORT"
}

managed_pid() {
  [[ -r "$BASE/server.pid" ]] || return 1
  local pid
  pid="$(cat "$BASE/server.pid")"
  [[ "$pid" =~ ^[0-9]+$ && -r "/proc/$pid/cmdline" ]] || return 1
  # A recycled PID must never cause an unrelated process to be stopped.
  grep -azqF "$BASE" "/proc/$pid/cmdline" || return 1
  printf '%s' "$pid"
}

start() {
  if managed_pid >/dev/null; then echo 'Managed server already running'; return; fi
  nohup bash "$HERE/deploy.sh" serve > "$BASE/logs/server.log" 2>&1 < /dev/null &
  printf '%s\n' "$!" > "$BASE/server.pid"
  echo "Started PID $(cat "$BASE/server.pid"); startup log: $BASE/logs/server.log"
}

stop() {
  local pid
  if ! pid="$(managed_pid)"; then echo 'No managed server running'; return; fi
  kill -TERM "$pid"
  for _ in {1..30}; do
    if ! kill -0 "$pid" 2>/dev/null; then echo 'Stopped'; return; fi
    sleep 1
  done
  echo 'Still shutting down; inspect the server log before restarting.' >&2
  return 1
}

case "${1:-help}" in
  doctor) doctor ;;
  install) install ;;
  download) download ;;
  verify) "$BASE/venv/bin/python" "$HERE/download_models.py" --root "$BASE/models" --verify-only ;;
  serve) serve ;;
  start) start ;;
  stop) stop ;;
  status)
    managed_pid || true
    curl --noproxy '*' -fsS --connect-timeout 2 --max-time 5 "http://127.0.0.1:$PORT/v1/models" || true
    printf '\n'; nvidia-smi --query-gpu=name,memory.used,utilization.gpu --format=csv
    tail -n 12 "$BASE/logs/server.log" 2>/dev/null || true ;;
  all) install; download; serve ;;
  *) printf 'Usage: bash deploy.sh {doctor|install|download|verify|serve|start|stop|status|all}\n';;
esac
