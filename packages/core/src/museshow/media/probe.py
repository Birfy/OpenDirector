"""Probe uploaded/generated media using a bounded local ffprobe process."""

import json
from pathlib import Path
import shutil
import subprocess
import tempfile

from museshow.domain.projects import ProjectError


def require_ffprobe():
    if not shutil.which("ffprobe"):
        raise ProjectError("视频和音频需要 FFmpeg：请安装并确保 ffprobe 在 PATH 中，然后重启服务。", 409)


def probe(data: bytes, suffix: str, kind: str):
    require_ffprobe()
    with tempfile.TemporaryDirectory(prefix="museshow-probe-") as folder:
        file = Path(folder) / ("input" + suffix)
        file.write_bytes(data)
        try:
            process = subprocess.run(["ffprobe", "-v", "error", "-protocol_whitelist", "file,pipe", "-show_streams", "-show_format", "-of", "json", str(file)],
                stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, timeout=15, check=True)
            if len(process.stdout) > 1024 * 1024:
                raise ValueError()
            value = json.loads(process.stdout)
            stream = next(item for item in value["streams"] if item["codec_type"] == kind)
            duration = float(value.get("format", {}).get("duration") or stream.get("duration") or 0)
            if duration <= 0:
                raise ValueError()
            common = {"kind": kind, "durationMs": round(duration * 1000)}
            if kind == "video":
                numerator, denominator = stream.get("avg_frame_rate", "0/1").split("/")
                fps = float(numerator) / float(denominator) if float(denominator) else None
                return {**common, "width": stream["width"], "height": stream["height"], "frameRate": fps or None,
                        "hasAudio": any(item.get("codec_type") == "audio" for item in value["streams"])}
            return {**common, "sampleRate": int(stream["sample_rate"]), "channels": stream["channels"]}
        except (subprocess.SubprocessError, ValueError, TypeError, KeyError, StopIteration):
            raise ProjectError("无法读取视频或音频，请检查文件格式及完整性。") from None
