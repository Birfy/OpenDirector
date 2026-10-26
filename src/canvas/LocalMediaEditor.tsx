import { useEffect, useRef, useState } from "react";
import type { CanvasNode, CanvasNodeData } from "./model";
import { EditorModal } from "./EditorModal";
import { encodePcmWav } from "./localAudio.ts";
import {
  mediaBlobDataUrl,
  recordLocalVideoRange,
} from "./localMediaRuntime.ts";
import "./local-media-tools.css";

export interface LocalMediaOutput {
  src: string;
  mimeType: string;
  title: string;
  kind: "image" | "video" | "audio";
  media?: CanvasNodeData["media"];
}
const localSource = (src: string) => {
  if (/^data:(audio|video|image)\//.test(src)) return true;
  try {
    const url = new URL(src, location.href);
    return (
      ["blob:", "http:", "https:"].includes(url.protocol) &&
      url.origin === location.origin
    );
  } catch {
    return false;
  }
};

export function LocalMediaEditor({
  node,
  mode,
  onApply,
  onClose,
}: {
  node: CanvasNode;
  mode: "trim" | "frame" | "extract-audio";
  onApply: (output: LocalMediaOutput) => void;
  onClose: () => void;
}) {
  const [duration, setDuration] = useState(
      node.data.media?.durationSeconds ?? 0,
    ),
    [start, setStart] = useState(0),
    [end, setEnd] = useState(node.data.media?.durationSeconds ?? 0),
    [position, setPosition] = useState(0),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const media = useRef<HTMLMediaElement | null>(null),
    active = useRef(true),
    abort = useRef<AbortController | null>(null),
    previewing = useRef(false);
  const isAudio = node.type === "audio" || mode === "extract-audio";
  useEffect(() => {
    active.current = true;
    const element = media.current;
    setBusy(false);
    setError("");
    setStart(0);
    setPosition(0);
    setDuration(node.data.media?.durationSeconds ?? 0);
    setEnd(node.data.media?.durationSeconds ?? 0);
    return () => {
      active.current = false;
      abort.current?.abort();
      abort.current = null;
      previewing.current = false;
      element?.pause();
    };
  }, [node.id, node.data.src, mode]);
  const loaded = (element: HTMLMediaElement) => {
    if (Number.isFinite(element.duration) && element.duration > 0) {
      setDuration(element.duration);
      setEnd((previous) =>
        previous > 0 ? Math.min(previous, element.duration) : element.duration,
      );
      setError("");
    } else
      setError("无法读取有效媒体时长，请重新导入常规 MP4、MP3 或 WAV 文件。");
  };
  const valid = start >= 0 && end > start && end <= duration;
  const owns = (controller: AbortController) =>
    active.current &&
    abort.current === controller &&
    !controller.signal.aborted;
  const apply = async () => {
    const element = media.current;
    if (!node.data.src || !element || busy || abort.current) return;
    if (!localSource(node.data.src)) {
      setError("请先将媒体文件导入本地画布。");
      return;
    }
    if (mode !== "frame" && !valid) {
      setError("裁剪范围必须在素材时长内，结束时间需大于开始时间。");
      return;
    }
    const controller = new AbortController();
    abort.current = controller;
    setBusy(true);
    setError("");
    previewing.current = false;
    element.pause();
    const commit = (output: LocalMediaOutput) => {
      if (owns(controller)) {
        onApply(output);
        onClose();
      }
    };
    try {
      if (mode === "frame") {
        const video = element as HTMLVideoElement;
        if (video.seeking || !video.videoWidth || video.readyState < 2)
          throw new Error("当前视频帧尚未定位并解码完成，请稍候再导出。");
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext("2d");
        if (!context) throw new Error("浏览器无法创建取帧画布。");
        context.drawImage(video, 0, 0);
        commit({
          src: canvas.toDataURL("image/png"),
          mimeType: "image/png",
          kind: "image",
          title: `${node.data.title} · ${video.currentTime.toFixed(2)}s`,
          media: { width: video.videoWidth, height: video.videoHeight },
        });
        return;
      }
      if (isAudio) {
        const response = await fetch(node.data.src, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("无法读取本地音频。");
        const source = await response.arrayBuffer();
        if (!owns(controller)) return;
        const context = new AudioContext();
        try {
          const decoded = await context.decodeAudioData(source);
          if (!owns(controller)) return;
          const channels = Array.from(
            { length: decoded.numberOfChannels },
            (_, index) => decoded.getChannelData(index),
          );
          const wav = encodePcmWav(channels, decoded.sampleRate, start, end);
          const src = await mediaBlobDataUrl(
            new Blob([wav], { type: "audio/wav" }),
            controller.signal,
          );
          commit({
            src,
            mimeType: "audio/wav",
            kind: "audio",
            title: `${node.data.title} · ${start.toFixed(2)}–${end.toFixed(2)}s`,
            media: {
              durationSeconds:
                (wav.byteLength - 44) /
                (decoded.numberOfChannels * 2 * decoded.sampleRate),
            },
          });
        } finally {
          await context.close();
        }
        return;
      }
      const video = element as HTMLVideoElement;
      const blob = await recordLocalVideoRange(
        video,
        start,
        end,
        controller.signal,
        (seconds) => {
          if (owns(controller)) setPosition(seconds);
        },
      );
      const src = await mediaBlobDataUrl(blob, controller.signal);
      commit({
        src,
        mimeType: "video/webm",
        kind: "video",
        title: `${node.data.title} · 本地裁剪`,
        media: { width: video.videoWidth, height: video.videoHeight },
      });
    } catch (error) {
      if (owns(controller))
        setError(error instanceof Error ? error.message : "媒体处理失败。");
    } finally {
      if (abort.current === controller) {
        abort.current = null;
        element.pause();
        if (active.current) setBusy(false);
      }
    }
  };
  return (
    <EditorModal
      title={`${mode === "frame" ? "视频取帧" : mode === "extract-audio" ? "提取音频" : isAudio ? "音频裁剪" : "视频裁剪"} · ${node.data.title}`}
      subtitle={
        mode === "frame"
          ? "定位真实视频帧，导出原始像素尺寸的 PNG。"
          : isAudio
            ? "解码本地音轨并按采样范围导出 WAV。"
            : "以正常速度在浏览器内重编码为 WebM；范围精度受浏览器帧调度影响。"
      }
      onClose={onClose}
      onApply={() => void apply()}
      applyLabel={
        busy
          ? "处理中…"
          : mode === "frame"
            ? "把当前帧加入画布"
            : "处理并加入画布"
      }
      disabled={busy || !duration}
      error={error}
    >
      <div className="cw-local-video-preview">
        {node.type === "audio" ? (
          <audio
            ref={(element) => {
              media.current = element;
            }}
            src={node.data.src}
            controls={!busy}
            onLoadedMetadata={(event) => loaded(event.currentTarget)}
            onDurationChange={(event) => loaded(event.currentTarget)}
            onError={() => setError("无法播放此媒体格式。")}
            onTimeUpdate={(event) => {
              setPosition(event.currentTarget.currentTime);
              if (
                previewing.current &&
                event.currentTarget.currentTime >= end
              ) {
                event.currentTarget.pause();
                previewing.current = false;
              }
            }}
          />
        ) : (
          <video
            ref={(element) => {
              media.current = element;
            }}
            src={node.data.src}
            controls={!busy}
            playsInline
            onLoadedMetadata={(event) => loaded(event.currentTarget)}
            onDurationChange={(event) => loaded(event.currentTarget)}
            onError={() => setError("无法播放此视频格式。")}
            onTimeUpdate={(event) => {
              setPosition(event.currentTarget.currentTime);
              if (
                previewing.current &&
                event.currentTarget.currentTime >= end
              ) {
                event.currentTarget.pause();
                previewing.current = false;
              }
            }}
          />
        )}
      </div>
      <div className="cw-local-media-controls">
        <span>
          {position.toFixed(2)} / {duration.toFixed(2)} 秒
        </span>
        {mode === "frame" ? (
          <>
            <input
              aria-label="视频取帧位置"
              type="range"
              min="0"
              max={Math.max(0, duration - 0.001)}
              step="0.01"
              value={position}
              disabled={busy || !duration}
              onChange={(event) => {
                const value = Number(event.target.value);
                setPosition(value);
                if (media.current) {
                  media.current.pause();
                  media.current.currentTime = value;
                }
              }}
            />
            <button
              disabled={!duration || busy}
              onClick={() => {
                if (media.current) {
                  media.current.pause();
                  media.current.currentTime = 0;
                  setPosition(0);
                }
              }}
            >
              首帧
            </button>
            <button
              disabled={!duration || busy}
              onClick={() => {
                if (media.current) {
                  const end = Math.max(0, duration - 1 / 30);
                  media.current.pause();
                  media.current.currentTime = end;
                  setPosition(end);
                }
              }}
            >
              末尾附近
            </button>
          </>
        ) : (
          <>
            <label>
              开始（秒）
              <input
                aria-label="裁剪开始秒"
                type="number"
                min="0"
                max={duration}
                step=".01"
                value={start}
                disabled={busy}
                onChange={(event) => {
                  const value = event.target.valueAsNumber;
                  if (Number.isFinite(value)) setStart(value);
                }}
              />
            </label>
            <label>
              结束（秒）
              <input
                aria-label="裁剪结束秒"
                type="number"
                min="0"
                max={duration}
                step=".01"
                value={end}
                disabled={busy}
                onChange={(event) => {
                  const value = event.target.valueAsNumber;
                  if (Number.isFinite(value)) setEnd(value);
                }}
              />
            </label>
            <button
              disabled={!valid || busy}
              onClick={() => {
                if (media.current) {
                  media.current.currentTime = start;
                  previewing.current = true;
                  void media.current
                    .play()
                    .catch((error) => setError(error.message));
                }
              }}
            >
              预览范围
            </button>
            {busy && (
              <button onClick={() => abort.current?.abort()}>取消处理</button>
            )}
          </>
        )}
      </div>
    </EditorModal>
  );
}
