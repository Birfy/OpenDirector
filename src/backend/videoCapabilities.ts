import type { VideoAdapter, VideoCapabilities } from "./rules.ts";

export interface VideoOutputDraft {
  resolution: string;
  seconds: string;
  width: string;
  height: string;
}

export function parseVideoSeconds(value: string): number[] {
  const result = new Set<number>();
  for (const token of value.trim().split(/[,，\s]+/)) {
    const match = /^(\d+)(?:-(\d+))?$/.exec(token);
    if (!match) throw new Error("时长请填写整数或范围，例如 4-10,15。");
    const start = Number(match[1]),
      end = Number(match[2] ?? match[1]);
    if (start < 1 || end > 60 || end < start)
      throw new Error("时长须在 1–60 秒内，范围起点不能大于终点。");
    for (let second = start; second <= end; second++) result.add(second);
  }
  return [...result].sort((a, b) => a - b);
}

export function videoOutputDrafts(
  caps: VideoCapabilities | null | undefined,
): VideoOutputDraft[] {
  return (
    caps?.outputs.map((item) => ({
      resolution: item.resolution,
      seconds: item.durations.join(","),
      width: String(item.width ?? ""),
      height: String(item.height ?? ""),
    })) ?? [{ resolution: "", seconds: "", width: "", height: "" }]
  );
}

export function createVideoCapabilities(
  rows: VideoOutputDraft[],
  defaultResolution: string,
  defaultDuration: number,
  dimensionStep: VideoCapabilities["dimensionStep"],
  adapter: VideoAdapter = "auto",
): VideoCapabilities {
  if (!rows.length || rows.length > 20)
    throw new Error("请配置 1–20 个输出规格。");
  const outputs = rows.map((row) => {
    const resolution = row.resolution.trim().toUpperCase();
    if (
      !/^[A-Z0-9][A-Z0-9_.-]{0,23}$/.test(resolution) ||
      resolution === "AUTO"
    )
      throw new Error("分辨率名称无效，例如 480P、720P、4K。");
    const durations = parseVideoSeconds(row.seconds);
    if (Boolean(row.width.trim()) !== Boolean(row.height.trim()))
      throw new Error("像素宽高须同时填写或留空。");
    if (!row.width.trim()) {
      // The /videos resolver needs pixels except for the two H3 buckets it
      // derives itself; saving anything else would only fail at generation.
      const derived =
        (adapter === "fasth3" || adapter === "minimax_h3") &&
        (resolution === "480P" || resolution === "768P");
      if (!derived)
        throw new Error(
          "该适配方式需要填写像素宽高（仅 H3 的 480P、768P 可按档位推算）。",
        );
      return { resolution, durations };
    }
    const width = Number(row.width),
      height = Number(row.height);
    if (
      ![width, height].every(
        (edge) =>
          Number.isInteger(edge) &&
          edge >= 64 &&
          edge <= 8192 &&
          edge % dimensionStep === 0,
      ) ||
      width < height
    )
      throw new Error(
        "横屏宽高须为 64–8192 的整数，宽不小于高，并符合像素对齐步长。",
      );
    return { resolution, durations, width, height };
  });
  if (new Set(outputs.map((item) => item.resolution)).size !== outputs.length)
    throw new Error("分辨率不能重复。");
  if (
    !outputs.some(
      (item) =>
        (defaultResolution === "auto" ||
          item.resolution === defaultResolution) &&
        item.durations.includes(defaultDuration),
    )
  )
    throw new Error("默认分辨率和时长必须属于已声明的输出规格。");
  return { outputs, defaultResolution, defaultDuration, dimensionStep };
}
