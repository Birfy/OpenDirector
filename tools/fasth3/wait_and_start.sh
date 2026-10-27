#!/usr/bin/env bash
# Optional: wait for the download process IDs supplied as arguments, then start.
set -euo pipefail
HERE="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
BASE="${FASTH3_HOME:-/root/autodl-tmp/fasth3}"
deadline=$((SECONDS+14400))
for pid in "$@"; do
  [[ "$pid" =~ ^[0-9]+$ ]] || { echo 'Expected numeric download PID'; exit 1; }
  while [[ -r "/proc/$pid/cmdline" ]] && grep -azqF "$BASE" "/proc/$pid/cmdline"; do
    ((SECONDS < deadline)) || { echo 'Download wait exceeded four hours'; exit 1; }
    sleep 10
  done
done
"$BASE/venv/bin/python" "$HERE/download_models.py" --root "$BASE/models" --verify-only
bash "$HERE/deploy.sh" start
