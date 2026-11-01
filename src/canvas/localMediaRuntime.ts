import { validateVideoCrop, type VideoCrop } from "./videoCrop.ts";

const cancelled = () => new DOMException("媒体处理已取消。", "AbortError");
const checkAbort = (signal: AbortSignal) => {
  if (signal.aborted) throw cancelled();
};

/** The conversion is part of the operation: cancellation must also abort its FileReader. */
export function mediaBlobDataUrl(
  blob: Blob,
  signal: AbortSignal,
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(cancelled());
      return;
    }
    const reader = new FileReader();
    let settled = false;
    const finish = (error?: Error) => {
      if (settled) return;
      settled = true;
      signal.removeEventListener("abort", cancel);
      reader.onload = reader.onerror = reader.onabort = null;
      if (error) reject(error);
      else if (typeof reader.result !== "string")
        reject(new Error("结果文件读取失败。"));
      else resolve(reader.result);
    };
    const cancel = () => {
      finish(cancelled());
      reader.abort();
    };
    reader.onload = () => (signal.aborted ? cancel() : finish());
    reader.onerror = () => finish(new Error("结果文件读取失败。"));
    reader.onabort = () => finish(cancelled());
    signal.addEventListener("abort", cancel, { once: true });
    try {
      reader.readAsDataURL(blob);
    } catch (error) {
      finish(error instanceof Error ? error : new Error("结果文件读取失败。"));
    }
  });
}

async function seekVideo(
  video: HTMLVideoElement,
  time: number,
  signal: AbortSignal,
): Promise<void> {
  checkAbort(signal);
  if (!video.seeking && Math.abs(video.currentTime - time) <= 0.001) return;
  await new Promise<void>((resolve, reject) => {
    let settled = false;
    const finish = (error?: Error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      video.removeEventListener("seeked", done);
      video.removeEventListener("error", failed);
      signal.removeEventListener("abort", cancel);
      error ? reject(error) : resolve();
    };
    const done = () => finish(),
      failed = () => finish(new Error("视频定位失败。")),
      cancel = () => finish(cancelled());
    const timer = setTimeout(() => finish(new Error("视频定位超时。")), 15000);
    video.addEventListener("seeked", done);
    video.addEventListener("error", failed);
    signal.addEventListener("abort", cancel, { once: true });
    try {
      if (Math.abs(video.currentTime - time) > 0.001) video.currentTime = time;
    } catch (error) {
      finish(error instanceof Error ? error : new Error("视频定位失败。"));
    }
  });
}

/** Owns one browser recording from stream creation through its final stop event. */
export async function recordLocalVideoRange(
  video: HTMLVideoElement,
  start: number,
  end: number,
  signal: AbortSignal,
  onPosition: (seconds: number) => void,
  options: { crop?: VideoCrop } = {},
): Promise<Blob> {
  const capture = (
    video as HTMLVideoElement & { captureStream?: () => MediaStream }
  ).captureStream;
  if (!capture || typeof MediaRecorder === "undefined")
    throw new Error(
      "当前浏览器不支持本地视频重编码；需要 captureStream 与 MediaRecorder。",
    );
  if (
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    start < 0 ||
    end <= start
  )
    throw new Error("视频裁剪范围无效。");
  const crop = options.crop
    ? validateVideoCrop(options.crop, video.videoWidth, video.videoHeight)
    : undefined;
  let stream: MediaStream | undefined,
    sourceStream: MediaStream | undefined,
    recorder: MediaRecorder | undefined;
  let canvas: HTMLCanvasElement | undefined;
  let drawFrame = () => {};
  let frame = 0;
  let decodedFrame: number | undefined;
  const cancelFrames = () => {
    cancelAnimationFrame(frame);
    if (decodedFrame !== undefined)
      video.cancelVideoFrameCallback(decodedFrame);
    decodedFrame = undefined;
  };
  const stopTracks = () => {
    new Set([
      ...(stream?.getTracks() ?? []),
      ...(sourceStream?.getTracks() ?? []),
    ]).forEach((track) => track.stop());
  };
  let releaseListeners = () => {};
  const previousRate = video.playbackRate;
  const pauseOnAbort = () => video.pause();
  try {
    checkAbort(signal);
    video.pause();
    video.playbackRate = 1;
    await seekVideo(video, start, signal);
    signal.addEventListener("abort", pauseOnAbort, { once: true });
    checkAbort(signal);
    await video.play();
    checkAbort(signal);
    sourceStream = capture.call(video);
    if (crop) {
      canvas = document.createElement("canvas");
      canvas.width = crop.width;
      canvas.height = crop.height;
      const context = canvas.getContext("2d");
      if (!context || typeof canvas.captureStream !== "function")
        throw new Error(
          "当前浏览器不支持视频画幅裁剪所需的 Canvas captureStream。",
        );
      drawFrame = () =>
        context.drawImage(
          video,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height,
        );
      drawFrame();
      stream = canvas.captureStream(30);
      for (const track of sourceStream.getAudioTracks()) stream.addTrack(track);
    } else stream = sourceStream;
    const mimeType = [
      "video/webm;codecs=vp9,opus",
      "video/webm;codecs=vp8,opus",
      "video/webm",
    ].find((type) => MediaRecorder.isTypeSupported(type));
    if (!mimeType) throw new Error("当前浏览器没有可用的 WebM 编码器。");
    recorder = new MediaRecorder(stream, { mimeType });
    const ownedRecorder = recorder;
    return await new Promise<Blob>((resolve, reject) => {
      const chunks: BlobPart[] = [];
      let stopping = false,
        settled = false,
        failure: Error | undefined;
      const finish = () => {
        if (settled) return;
        settled = true;
        if (failure) reject(failure);
        else if (!chunks.length) reject(new Error("视频编码没有产生数据。"));
        // Codec parameters configure the recorder; the exported container uses
        // its base MIME so FileReader's data URL has no comma in its metadata.
        else resolve(new Blob(chunks, { type: "video/webm" }));
      };
      const stop = (error?: Error) => {
        if (settled) return;
        if (error) failure = error;
        if (stopping) return;
        stopping = true;
        cancelFrames();
        if (ownedRecorder.state !== "inactive") {
          try {
            ownedRecorder.stop();
          } catch (error) {
            failure =
              error instanceof Error ? error : new Error("视频编码停止失败。");
            finish();
          }
        } else finish();
        video.pause();
        stopTracks();
      };
      const cancel = () => stop(cancelled());
      const ended = () => stop();
      const failed = () => stop(new Error("视频播放中断，未生成裁剪结果。"));
      const paused = () => {
        if (video.paused && !stopping)
          stop(
            video.ended
              ? undefined
              : new Error("录制期间播放已暂停，处理已停止。"),
          );
      };
      const progress = () => {
        if (stopping || settled) return;
        if (signal.aborted) {
          cancel();
          return;
        }
        onPosition(video.currentTime);
        if (video.currentTime >= end || video.ended) stop();
        else {
          try {
            drawFrame();
          } catch {
            stop(new Error("视频画幅绘制失败，未生成裁剪结果。"));
          }
        }
      };
      const tick = () => {
        progress();
        if (!stopping && !settled) scheduleFrame();
      };
      const scheduleFrame = () => {
        if (crop && typeof video.requestVideoFrameCallback === "function")
          decodedFrame = video.requestVideoFrameCallback(tick);
        else frame = requestAnimationFrame(tick);
      };
      // A stalled local decoder must not leave an indefinitely running recording.
      const deadline = setTimeout(
        () => stop(new Error("视频播放或录制超时，请检查素材后重试。")),
        (end - start) * 1000 + 20000,
      );
      releaseListeners = () => {
        clearTimeout(deadline);
        signal.removeEventListener("abort", cancel);
        video.removeEventListener("ended", ended);
        video.removeEventListener("error", failed);
        video.removeEventListener("pause", paused);
        video.removeEventListener("timeupdate", progress);
      };
      ownedRecorder.ondataavailable = (event) => {
        if (event.data.size) chunks.push(event.data);
      };
      ownedRecorder.onerror = () => stop(new Error("视频重编码失败。"));
      ownedRecorder.onstop = finish;
      signal.addEventListener("abort", cancel, { once: true });
      video.addEventListener("ended", ended);
      video.addEventListener("error", failed);
      video.addEventListener("pause", paused);
      video.addEventListener("timeupdate", progress);
      checkAbort(signal);
      ownedRecorder.start(100);
      scheduleFrame();
    });
  } finally {
    releaseListeners();
    cancelFrames();
    signal.removeEventListener("abort", pauseOnAbort);
    if (recorder) {
      recorder.ondataavailable = recorder.onerror = recorder.onstop = null;
      if (recorder.state !== "inactive") {
        try {
          recorder.stop();
        } catch {
          /* tracks below still belong to this operation */
        }
      }
    }
    stopTracks();
    if (canvas) {
      canvas.width = 0;
      canvas.height = 0;
    }
    video.pause();
    video.playbackRate = previousRate;
  }
}
