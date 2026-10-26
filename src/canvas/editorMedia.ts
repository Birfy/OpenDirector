import type { CanvasResource } from "./model";

const aborted = () => new DOMException("素材读取已取消。", "AbortError");

export async function readEditorResource(
  file: File,
  signal?: AbortSignal,
): Promise<CanvasResource> {
  const kind = file.type.startsWith("image/")
    ? "image"
    : file.type.startsWith("video/")
      ? "video"
      : file.type.startsWith("audio/")
        ? "audio"
        : "file";
  const src = await new Promise<string>((resolve, reject) => {
    if (signal?.aborted) {
      reject(aborted());
      return;
    }
    const reader = new FileReader();
    const cleanup = () => {
      signal?.removeEventListener("abort", cancel);
      reader.onload = reader.onerror = reader.onabort = null;
    };
    const cancel = () => {
      cleanup();
      reader.abort();
      reject(aborted());
    };
    reader.onload = () => {
      cleanup();
      resolve(String(reader.result));
    };
    reader.onerror = () => {
      cleanup();
      reject(new Error(`无法读取 ${file.name}`));
    };
    reader.onabort = () => {
      cleanup();
      reject(aborted());
    };
    signal?.addEventListener("abort", cancel, { once: true });
    reader.readAsDataURL(file);
  });
  return withMediaDuration(
    {
      id: crypto.randomUUID(),
      kind,
      title: file.name,
      src,
      mimeType: file.type,
    },
    signal,
  );
}

/** Resolves actual pixels/duration once, and releases the loader when its dialog closes. */
export async function withMediaDuration(
  resource: CanvasResource,
  signal?: AbortSignal,
): Promise<CanvasResource> {
  if (signal?.aborted) throw aborted();
  if (resource.kind === "file") return resource;
  if (resource.kind === "image" && resource.width && resource.height)
    return resource;
  if (resource.kind === "audio" && resource.durationSeconds !== undefined)
    return resource;
  if (
    resource.kind === "video" &&
    resource.durationSeconds !== undefined &&
    resource.width &&
    resource.height
  )
    return resource;
  if (!resource.src)
    throw new Error("素材缺少可读取的来源，无法读取媒体元数据。");
  return new Promise<CanvasResource>((resolve, reject) => {
    const element =
      resource.kind === "image"
        ? new Image()
        : document.createElement(resource.kind === "video" ? "video" : "audio");
    let finished = false;
    const finish = (error?: Error) => {
      if (finished) return;
      finished = true;
      const width =
        element instanceof HTMLImageElement
          ? element.naturalWidth
          : element instanceof HTMLVideoElement
            ? element.videoWidth
            : undefined;
      const height =
        element instanceof HTMLImageElement
          ? element.naturalHeight
          : element instanceof HTMLVideoElement
            ? element.videoHeight
            : undefined;
      const durationSeconds =
        element instanceof HTMLMediaElement ? element.duration : undefined;
      clearTimeout(timer);
      signal?.removeEventListener("abort", cancel);
      element.onload = null;
      element.onerror = null;
      if (element instanceof HTMLMediaElement) {
        element.onloadedmetadata = null;
        element.pause();
        element.removeAttribute("src");
        element.load();
      } else element.removeAttribute("src");
      if (error) {
        reject(error);
        return;
      }
      if (
        durationSeconds !== undefined &&
        (!Number.isFinite(durationSeconds) || durationSeconds <= 0)
      ) {
        reject(new Error("无法读取有效媒体时长。"));
        return;
      }
      if (resource.kind !== "audio" && (!width || !height)) {
        reject(new Error("无法读取有效素材像素尺寸。"));
        return;
      }
      resolve({
        ...resource,
        ...(durationSeconds !== undefined ? { durationSeconds } : {}),
        ...(width && height ? { width, height } : {}),
      });
    };
    const cancel = () => finish(aborted());
    const timer = setTimeout(
      () => finish(new Error("媒体元数据读取超时，请检查格式或重新导入。")),
      20000,
    );
    signal?.addEventListener("abort", cancel, { once: true });
    if (element instanceof HTMLMediaElement) {
      element.preload = "metadata";
      element.onloadedmetadata = () => finish();
    } else element.onload = () => finish();
    element.onerror = () =>
      finish(new Error(`无法读取「${resource.title}」的媒体元数据。`));
    element.src = resource.src!;
  });
}
