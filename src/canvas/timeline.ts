import { copyResource, copyTimeline, timelineError } from "./dataBoundary.ts";
import type {
  CanvasResource,
  TimelineClip,
  TimelineData,
  TimelineTrack,
} from "./model.ts";

export interface TimelineSegment {
  track: TimelineTrack;
  clip: TimelineClip;
  start: number;
  end: number;
}

export function clipDuration(clip: TimelineClip): number {
  return (clip.outPoint - clip.inPoint) / clip.speed;
}

/** Visual clips are consecutive; audio clips retain their explicit timeline positions. */
export function timelineSegments(timeline: TimelineData): TimelineSegment[] {
  return timeline.tracks.flatMap((track) => {
    let cursor = 0;
    return track.clips.map((clip) => {
      const start = track.kind === "visual" ? cursor : clip.start!;
      const end = start + clipDuration(clip);
      cursor = end;
      return { track, clip, start, end };
    });
  });
}

export function timelineDuration(timeline: TimelineData): number {
  return Math.max(
    0,
    ...timelineSegments(timeline).map((segment) => segment.end),
  );
}

function checked(value: TimelineData): TimelineData {
  const error = timelineError(value);
  if (error) throw new Error(error);
  return value;
}

export function addTimelineClip(
  timeline: TimelineData,
  resource: CanvasResource,
  trackId?: string,
): TimelineData {
  const kind = resource.kind === "audio" ? "audio" : "visual";
  if (!["image", "video", "audio"].includes(resource.kind))
    throw new Error("时间线只接受图片、视频或音频。");
  let next = timeline;
  let track = trackId
    ? next.tracks.find((track) => track.id === trackId)
    : next.tracks.find((track) => track.kind === kind);
  if (!track && kind === "audio" && !trackId) {
    track = {
      id: crypto.randomUUID(),
      kind: "audio",
      title: "音频轨 1",
      muted: false,
      clips: [],
    };
    next = { ...next, tracks: [...next.tracks, track] };
  }
  if (!track || track.kind !== kind)
    throw new Error("素材类型与目标轨道不一致。");
  if (resource.kind !== "image" && resource.durationSeconds === undefined)
    throw new Error("请先读取视频或音频的实际时长，再加入时间线。");
  const end = Math.max(
    0,
    ...timelineSegments(next)
      .filter((segment) => segment.track.id === track.id)
      .map((segment) => segment.end),
  );
  const clip: TimelineClip = {
    id: crypto.randomUUID(),
    resource: copyResource(resource),
    inPoint: 0,
    outPoint: resource.kind === "image" ? 5 : resource.durationSeconds!,
    speed: 1,
    volume: 1,
    muted: false,
    ...(kind === "audio" ? { start: end } : {}),
  };
  return checked({
    ...next,
    tracks: next.tracks.map((item) =>
      item.id === track.id ? { ...item, clips: [...item.clips, clip] } : item,
    ),
  });
}

export function updateTimelineClip(
  timeline: TimelineData,
  clipId: string,
  patch: Partial<
    Pick<
      TimelineClip,
      "inPoint" | "outPoint" | "speed" | "start" | "volume" | "muted"
    >
  >,
): TimelineData {
  return checked({
    ...timeline,
    tracks: timeline.tracks.map((track) => ({
      ...track,
      clips: track.clips.map((clip) =>
        clip.id === clipId ? { ...clip, ...patch } : clip,
      ),
    })),
  });
}

export function removeTimelineClip(
  timeline: TimelineData,
  clipId: string,
): TimelineData {
  return {
    ...timeline,
    tracks: timeline.tracks.map((track) => ({
      ...track,
      clips: track.clips.filter((clip) => clip.id !== clipId),
    })),
  };
}

/** Ordering changes visual placement; audio ordering keeps explicit placement untouched. */
export function moveTimelineClip(
  timeline: TimelineData,
  clipId: string,
  direction: -1 | 1,
): TimelineData {
  return {
    ...timeline,
    tracks: timeline.tracks.map((track) => {
      const index = track.clips.findIndex((clip) => clip.id === clipId),
        target = index + direction;
      if (index < 0 || target < 0 || target >= track.clips.length) return track;
      const clips = [...track.clips];
      [clips[index], clips[target]] = [clips[target]!, clips[index]!];
      return { ...track, clips };
    }),
  };
}

export function addAudioTrack(timeline: TimelineData): TimelineData {
  return {
    ...timeline,
    tracks: [
      ...timeline.tracks,
      {
        id: crypto.randomUUID(),
        kind: "audio",
        title: `音频轨 ${timeline.tracks.filter((track) => track.kind === "audio").length + 1}`,
        muted: false,
        clips: [],
      },
    ],
  };
}

export function exportTimeline(timeline: TimelineData, title: string): string {
  checked(timeline);
  return JSON.stringify(
    {
      format: "museshow-editable-timeline",
      version: 1,
      title,
      timeUnit: "seconds",
      description:
        "Local editable composition, not a rendered video or original Jianying draft.",
      timeline: copyTimeline(timeline),
    },
    null,
    2,
  );
}

/** Split at the timeline playhead, converting timeline time back into source trim time. */
export function splitTimelineClip(
  timeline: TimelineData,
  clipId: string,
  playhead: number,
): TimelineData {
  const segment = timelineSegments(timeline).find(
    (item) => item.clip.id === clipId,
  );
  if (
    !segment ||
    !Number.isFinite(playhead) ||
    playhead <= segment.start ||
    playhead >= segment.end
  )
    throw new Error("播放头需要位于所选片段内部。");
  const { clip } = segment,
    offset = playhead - segment.start;
  const image = clip.resource.kind === "image";
  const sourceCut = clip.inPoint + offset * clip.speed;
  const first = { ...clip, outPoint: image ? offset : sourceCut };
  const second = {
    ...clip,
    id: crypto.randomUUID(),
    resource: copyResource(clip.resource),
    inPoint: image ? 0 : sourceCut,
    outPoint: image ? clipDuration(clip) - offset : clip.outPoint,
    ...(segment.track.kind === "audio" ? { start: playhead } : {}),
  };
  return checked({
    ...timeline,
    tracks: timeline.tracks.map((track) =>
      track.id !== segment.track.id
        ? track
        : {
            ...track,
            clips: track.clips.flatMap((item) =>
              item.id === clipId ? [first, second] : [item],
            ),
          },
    ),
  });
}

/** Trim discards the part on the named side. Visual tracks ripple; audio keeps its explicit placement. */
export function trimTimelineClip(
  timeline: TimelineData,
  clipId: string,
  playhead: number,
  side: "left" | "right",
): TimelineData {
  const segment = timelineSegments(timeline).find(
    (item) => item.clip.id === clipId,
  );
  if (
    !segment ||
    !Number.isFinite(playhead) ||
    playhead <= segment.start ||
    playhead >= segment.end
  )
    throw new Error("播放头需要位于所选片段内部。");
  const { clip } = segment,
    offset = playhead - segment.start;
  if (clip.resource.kind === "image")
    return updateTimelineClip(timeline, clipId, {
      outPoint: side === "left" ? clipDuration(clip) - offset : offset,
    });
  const sourceCut = clip.inPoint + offset * clip.speed;
  return updateTimelineClip(
    timeline,
    clipId,
    side === "right"
      ? { outPoint: sourceCut }
      : {
          inPoint: sourceCut,
          ...(segment.track.kind === "audio" ? { start: playhead } : {}),
        },
  );
}

export function importTimeline(text: string): TimelineData {
  const value: unknown = JSON.parse(text);
  if (
    !value ||
    typeof value !== "object" ||
    !("format" in value) ||
    value.format !== "museshow-editable-timeline" ||
    !("version" in value) ||
    value.version !== 1 ||
    !("timeUnit" in value) ||
    value.timeUnit !== "seconds" ||
    !("timeline" in value)
  )
    throw new Error("请选择本地编辑器导出的时间线 JSON。");
  const error = timelineError(value.timeline);
  if (error) throw new Error(error);
  return copyTimeline(value.timeline as TimelineData);
}
