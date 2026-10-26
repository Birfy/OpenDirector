import assert from "node:assert/strict";
import test from "node:test";
import { createNode } from "../src/canvas/model.ts";
import {
  addTimelineClip,
  exportTimeline,
  importTimeline,
  moveTimelineClip,
  splitTimelineClip,
  timelineDuration,
  timelineSegments,
  trimTimelineClip,
  updateTimelineClip,
} from "../src/canvas/timeline.ts";

function sequence() {
  let value = createNode("timeline").data.timeline!;
  value = addTimelineClip(value, {
    id: "i",
    title: "image",
    kind: "image",
    src: "data:image/png;base64,AA==",
  });
  value = addTimelineClip(value, {
    id: "v",
    title: "video",
    kind: "video",
    durationSeconds: 20,
  });
  return updateTimelineClip(value, value.tracks[0]!.clips[1]!.id, {
    inPoint: 4,
    outPoint: 14,
    speed: 2,
  });
}
test("visual durations derive from source trims and speed, whereas audio placement stays explicit", () => {
  let timeline = sequence();
  assert.deepEqual(
    timelineSegments(timeline).map((segment) => [segment.start, segment.end]),
    [
      [0, 5],
      [5, 10],
    ],
  );
  timeline = addTimelineClip(timeline, {
    id: "a",
    title: "audio",
    kind: "audio",
    durationSeconds: 8,
  });
  const audio = timeline.tracks[1]!.clips[0]!;
  timeline = updateTimelineClip(timeline, audio.id, {
    start: 12,
    inPoint: 2,
    outPoint: 6,
    speed: 2,
  });
  assert.equal(timelineDuration(timeline), 14);
  const reordered = moveTimelineClip(
    timeline,
    timeline.tracks[0]!.clips[1]!.id,
    -1,
  );
  assert.equal(reordered.tracks[1]!.clips[0]!.start, 12);
});
test("splitting a speed-adjusted video maps playhead to source frames without shifting later visuals", () => {
  const before = sequence(),
    clip = before.tracks[0]!.clips[1]!,
    after = splitTimelineClip(before, clip.id, 7);
  const clips = after.tracks[0]!.clips;
  assert.deepEqual(
    clips.slice(1).map((clip) => [clip.inPoint, clip.outPoint, clip.speed]),
    [
      [4, 8, 2],
      [8, 14, 2],
    ],
  );
  assert.equal(timelineDuration(after), 10);
  assert.notEqual(clips[1]!.id, clips[2]!.id);
  assert.equal(before.tracks[0]!.clips.length, 2);
});
test("image split uses two display durations; audio split and left trim retain explicit timeline offsets", () => {
  const before = sequence(),
    split = splitTimelineClip(before, before.tracks[0]!.clips[0]!.id, 2);
  assert.deepEqual(
    split.tracks[0]!.clips.slice(0, 2).map((clip) => [
      clip.inPoint,
      clip.outPoint,
    ]),
    [
      [0, 2],
      [0, 3],
    ],
  );
  let audio = addTimelineClip(before, {
      id: "a",
      title: "audio",
      kind: "audio",
      durationSeconds: 10,
    }),
    clip = audio.tracks[1]!.clips[0]!;
  audio = updateTimelineClip(audio, clip.id, { start: 3, speed: 2 });
  const divided = splitTimelineClip(audio, clip.id, 5);
  assert.deepEqual(
    divided.tracks[1]!.clips.map((clip) => [
      clip.start,
      clip.inPoint,
      clip.outPoint,
    ]),
    [
      [3, 0, 4],
      [5, 4, 10],
    ],
  );
  const trimmed = trimTimelineClip(audio, clip.id, 5, "left");
  assert.equal(trimmed.tracks[1]!.clips[0]!.start, 5);
  assert.equal(trimmed.tracks[1]!.clips[0]!.inPoint, 4);
});
test("playhead trims ripple visual tracks and reject boundaries; exported local seconds roundtrip", () => {
  const timeline = sequence(),
    clip = timeline.tracks[0]!.clips[1]!;
  const trimmed = trimTimelineClip(timeline, clip.id, 7, "right");
  assert.equal(timelineDuration(trimmed), 7);
  assert.throws(() => splitTimelineClip(timeline, clip.id, 5), /内部/);
  assert.throws(
    () => trimTimelineClip(timeline, clip.id, Infinity, "left"),
    /内部/,
  );
  assert.deepEqual(importTimeline(exportTimeline(trimmed, "study")), trimmed);
  assert.throws(
    () => importTimeline('{"format":"original-ticks"}'),
    /本地编辑器/,
  );
});
