import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { CanvasNode, CanvasNodeData } from "./model";
import { EditorModal } from "./EditorModal";
import { encodePcmWav } from "./localAudio.ts";
import { withMediaDuration } from "./editorMedia";
import {
  mediaBlobDataUrl,
  recordLocalVideoRange,
} from "./localMediaRuntime.ts";
import "./local-media-tools.css";
import {
  centeredVideoCrop,
  fitVideoCrop,
  type VideoCrop,
} from "./videoCrop.ts";

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
  mode: "trim" | "frame" | "extract-audio" | "crop";
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
  const [crop, setCrop] = useState<VideoCrop | null>(null);
  const [cropRatio, setCropRatio] = useState("free");
  const [probingDuration, setProbingDuration] = useState(false);
  const durationProbe = useRef<AbortController | null>(null);
  const probeAttempted = useRef(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const cropStage = useRef<HTMLDivElement>(null);
  const cropDrag = useRef<{
    x: number;
    y: number;
    rect: VideoCrop;
    handle: "move" | "nw" | "ne" | "sw" | "se";
  } | null>(null);
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
    setProbingDuration(false);
    probeAttempted.current = false;
    setCrop(null);
    setCropRatio("free");
    setDimensions({ width: 0, height: 0 });
    setDuration(node.data.media?.durationSeconds ?? 0);
    setEnd(node.data.media?.durationSeconds ?? 0);
    return () => {
      active.current = false;
      abort.current?.abort();
      abort.current = null;
      durationProbe.current?.abort();
      durationProbe.current = null;
      previewing.current = false;
      element?.pause();
    };
  }, [node.id, node.data.src, mode]);
  const loaded = (element: HTMLMediaElement) => {
    const video = element as HTMLVideoElement;
    if (video.videoWidth && video.videoHeight) {
      setDimensions({ width: video.videoWidth, height: video.videoHeight });
      setCrop((current) =>
        current
          ? fitVideoCrop(current, video.videoWidth, video.videoHeight)
          : { x: 0, y: 0, width: video.videoWidth, height: video.videoHeight },
      );
    }
    const knownDuration =
      Number.isFinite(element.duration) && element.duration > 0
        ? element.duration
        : node.data.media?.durationSeconds;
    if (
      typeof knownDuration === "number" &&
      Number.isFinite(knownDuration) &&
      knownDuration > 0
    ) {
      setDuration(knownDuration);
      setEnd((previous) =>
        previous > 0 ? Math.min(previous, knownDuration) : knownDuration,
      );
      setError("");
    } else if (node.data.src && !probeAttempted.current) {
      probeAttempted.current = true;
      const controller = new AbortController();
      durationProbe.current = controller;
      setProbingDuration(true);
      setError("");
      void withMediaDuration(
        {
          id: node.id,
          kind: node.type === "audio" ? "audio" : "video",
          title: node.data.title,
          src: node.data.src,
          mimeType: node.data.mimeType,
        },
        controller.signal,
      )
        .then((resource) => {
          if (
            !active.current ||
            controller.signal.aborted ||
            durationProbe.current !== controller
          )
            return;
          const seconds = resource.durationSeconds!;
          setDuration(seconds);
          setEnd((previous) =>
            previous > 0 ? Math.min(previous, seconds) : seconds,
          );
          setError("");
        })
        .catch((error) => {
          if (
            active.current &&
            !controller.signal.aborted &&
            durationProbe.current === controller
          )
            setError(
              error instanceof Error ? error.message : "无法读取实际媒体时长。",
            );
        })
        .finally(() => {
          if (durationProbe.current === controller) {
            durationProbe.current = null;
            if (active.current) setProbingDuration(false);
          }
        });
    }
  };
  const valid = start >= 0 && end > start && end <= duration;
  const pointerPixels = (event: PointerEvent<HTMLElement>) => {
    const bounds = cropStage.current!.getBoundingClientRect();
    return {
      x: ((event.clientX - bounds.left) * dimensions.width) / bounds.width,
      y: ((event.clientY - bounds.top) * dimensions.height) / bounds.height,
    };
  };
  const startCropDrag = (
    event: PointerEvent<HTMLElement>,
    handle: "move" | "nw" | "ne" | "sw" | "se",
  ) => {
    if (busy || !crop || event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    cropDrag.current = { ...pointerPixels(event), rect: crop, handle };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const moveCrop = (event: PointerEvent<HTMLElement>) => {
    const drag = cropDrag.current;
    if (!drag || busy) return;
    const point = pointerPixels(event),
      rect = drag.rect;
    if (drag.handle === "move") {
      setCrop(
        fitVideoCrop(
          {
            ...rect,
            x: rect.x + point.x - drag.x,
            y: rect.y + point.y - drag.y,
          },
          dimensions.width,
          dimensions.height,
        ),
      );
      return;
    }
    const anchorX = drag.handle.endsWith("w") ? rect.x + rect.width : rect.x;
    const anchorY = drag.handle.startsWith("n") ? rect.y + rect.height : rect.y;
    const dx = Math.max(0, Math.min(dimensions.width, point.x)) - anchorX;
    const dy = Math.max(0, Math.min(dimensions.height, point.y)) - anchorY;
    let width = Math.abs(dx),
      height = Math.abs(dy);
    if (cropRatio !== "free") {
      const ratio =
        cropRatio === "original"
          ? dimensions.width / dimensions.height
          : Number(cropRatio);
      width = Math.min(width, height * ratio);
      height = width / ratio;
    }
    setCrop(
      fitVideoCrop(
        {
          x: dx < 0 ? anchorX - width : anchorX,
          y: dy < 0 ? anchorY - height : anchorY,
          width,
          height,
        },
        dimensions.width,
        dimensions.height,
      ),
    );
  };
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
    if (mode === "crop" && !crop) {
      setError("请等待原视频尺寸读取完成。");
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
        mode === "crop" ? { crop: crop! } : undefined,
      );
      const src = await mediaBlobDataUrl(blob, controller.signal);
      const measured = await withMediaDuration(
        {
          id: node.id,
          kind: "video",
          title: node.data.title,
          src,
          mimeType: "video/webm",
        },
        controller.signal,
      );
      commit({
        src,
        mimeType: "video/webm",
        kind: "video",
        title: `${node.data.title} · ${mode === "crop" ? `画幅 ${crop!.width}×${crop!.height}` : "本地裁剪"}`,
        media: {
          width: measured.width,
          height: measured.height,
          durationSeconds: measured.durationSeconds,
        },
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
      title={`${mode === "crop" ? "视频画幅裁剪" : mode === "frame" ? "视频取帧" : mode === "extract-audio" ? "提取音频" : isAudio ? "音频裁剪" : "视频裁剪"} · ${node.data.title}`}
      subtitle={
        mode === "crop"
          ? "拖动选框或四角调整原视频像素区域；本地重编码 WebM，保留浏览器可捕获的原音轨，输出最高 30 帧/秒。"
          : mode === "frame"
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
      disabled={
        busy || probingDuration || !duration || (mode === "crop" && !crop)
      }
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
          <div
            ref={cropStage}
            className={
              mode === "crop" ? "cw-video-crop-stage" : "cw-local-video-stage"
            }
            style={
              mode === "crop" && dimensions.width
                ? {
                    width: `min(100%, ${(54 * dimensions.width) / dimensions.height}vh)`,
                    aspectRatio: `${dimensions.width}/${dimensions.height}`,
                  }
                : undefined
            }
          >
            <video
              ref={(element) => {
                media.current = element;
              }}
              src={node.data.src}
              controls={!busy && mode !== "crop"}
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
            {mode === "crop" && crop && dimensions.width > 0 && (
              <div
                className={`cw-video-crop-box${busy ? " is-busy" : ""}`}
                style={{
                  left: `${(crop.x / dimensions.width) * 100}%`,
                  top: `${(crop.y / dimensions.height) * 100}%`,
                  width: `${(crop.width / dimensions.width) * 100}%`,
                  height: `${(crop.height / dimensions.height) * 100}%`,
                }}
                onPointerDown={(event) => startCropDrag(event, "move")}
                onPointerMove={moveCrop}
                onPointerUp={() => {
                  cropDrag.current = null;
                }}
                onPointerCancel={() => {
                  cropDrag.current = null;
                }}
              >
                <span>
                  {crop.width} × {crop.height}
                </span>
                {(["nw", "ne", "sw", "se"] as const).map((handle) => (
                  <button
                    key={handle}
                    className={`cw-crop-corner is-${handle}`}
                    aria-label={`调整裁剪${{ nw: "左上", ne: "右上", sw: "左下", se: "右下" }[handle]}角`}
                    disabled={busy}
                    onPointerDown={(event) => startCropDrag(event, handle)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {mode === "crop" && crop && (
        <div className="cw-local-media-controls cw-video-crop-controls">
          <label>
            画幅
            <select
              aria-label="视频裁剪画幅比例"
              value={cropRatio}
              disabled={busy}
              onChange={(event) => {
                const ratio = event.target.value;
                setCropRatio(ratio);
                if (ratio !== "free")
                  setCrop(
                    centeredVideoCrop(
                      dimensions.width,
                      dimensions.height,
                      ratio === "original"
                        ? dimensions.width / dimensions.height
                        : Number(ratio),
                    ),
                  );
              }}
            >
              <option value="free">自由</option>
              <option value="original">原比例</option>
              <option value={String(16 / 9)}>16:9</option>
              <option value="1">1:1</option>
              <option value={String(9 / 16)}>9:16</option>
              <option value={String(4 / 3)}>4:3</option>
            </select>
          </label>
          {(["x", "y", "width", "height"] as const).map((key) => (
            <label key={key}>
              {{ x: "左", y: "上", width: "宽", height: "高" }[key]}
              <input
                aria-label={`视频裁剪${{ x: "左边距", y: "上边距", width: "宽度", height: "高度" }[key]}`}
                type="number"
                step="1"
                min={key === "x" || key === "y" ? 0 : 1}
                max={
                  key === "x" || key === "width"
                    ? dimensions.width
                    : dimensions.height
                }
                value={crop[key]}
                disabled={busy}
                onChange={(event) => {
                  const value = event.target.valueAsNumber;
                  if (!Number.isFinite(value)) return;
                  setCropRatio("free");
                  setCrop(
                    fitVideoCrop(
                      { ...crop, [key]: value },
                      dimensions.width,
                      dimensions.height,
                    ),
                  );
                }}
              />
            </label>
          ))}
          <button
            disabled={busy}
            onClick={() => {
              setCropRatio("free");
              setCrop({
                x: 0,
                y: 0,
                width: dimensions.width,
                height: dimensions.height,
              });
            }}
          >
            恢复全画面
          </button>
          <span>
            原视频 {dimensions.width} × {dimensions.height} 像素
          </span>
        </div>
      )}
      <div className="cw-local-media-controls">
        {probingDuration && (
          <span role="status">正在定位媒体尾部，读取实际时长…</span>
        )}
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
