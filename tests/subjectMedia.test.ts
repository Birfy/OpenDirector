import assert from "node:assert/strict";
import test from "node:test";
import { subjectWithResource } from "../src/canvas/subjectMedia.ts";
import type { CanvasResource, SubjectData } from "../src/canvas/model.ts";
import {
  subjectDescriptionLayout,
  SUBJECT_MAX_HEIGHT,
} from "../src/canvas/subjectLayout.ts";

const image = (id: string): CanvasResource => ({
  id,
  kind: "image",
  title: id,
  src: `https://example.test/${id}.png`,
});
const subject: SubjectData = {
  description: "User annotation",
  category: "character",
  auxiliaries: [],
  main: image("main"),
};

test("video subjects fit landscape frames while retaining the description cap", () => {
  const main = { kind: "video", width: 1280, height: 720 };
  const short = subjectDescriptionLayout(20, main);
  const long = subjectDescriptionLayout(2000, main);
  assert.ok(Math.abs((short.nodeHeight - 52) / 296 - 720 / 1280) < 0.01);
  assert.equal(long.descriptionHeight, 112);
  assert.equal(long.nodeHeight - short.nodeHeight, 92);
  const portrait = subjectDescriptionLayout(2000, {
    ...main,
    width: 720,
    height: 1280,
  });
  assert.ok(portrait.nodeHeight <= SUBJECT_MAX_HEIGHT);
});

test("auxiliary uploads preserve the main image and fill at most three slots", () => {
  let next = subject;
  for (const id of ["one", "two", "three"])
    next = subjectWithResource(next, image(id), "auxiliary");
  assert.equal(next.main, subject.main);
  assert.equal(next.description, subject.description);
  assert.deepEqual(
    next.auxiliaries.map((item) => item.id),
    ["one", "two", "three"],
  );
  assert.equal(subject.auxiliaries.length, 0);
  assert.throws(
    () => subjectWithResource(next, image("four"), "auxiliary"),
    /最多 3/,
  );
  assert.equal(next.auxiliaries.length, 3);
});

test("auxiliary uploads reject videos, missing primary images and duplicate slots", () => {
  const video: CanvasResource = {
    id: "video",
    title: "Video",
    kind: "video",
    src: "https://example.test/video.mp4",
    durationSeconds: 1,
  };
  assert.throws(() => subjectWithResource(subject, video, "auxiliary"), /类型/);
  assert.throws(
    () => subjectWithResource(undefined, image("one"), "auxiliary"),
    /主图片/,
  );
  assert.throws(
    () =>
      subjectWithResource(
        { ...subject, main: video },
        image("one"),
        "auxiliary",
      ),
    /主图片/,
  );
  assert.throws(
    () => subjectWithResource(subject, image("main"), "auxiliary"),
    /重复/,
  );
});

test("voice selection keeps image slots and the user annotation intact", () => {
  const voice: CanvasResource = {
    id: "voice",
    title: "Voice",
    kind: "audio",
    src: "https://example.test/voice.wav",
    durationSeconds: 3,
  };
  const next = subjectWithResource(subject, voice, "voice");
  assert.equal(next.voice, voice);
  assert.equal(next.main, subject.main);
  assert.deepEqual(next.auxiliaries, subject.auxiliaries);
  assert.equal(next.description, subject.description);
});

test("subject source choices keep slot roles and the 15 second ceiling", async () => {
  const { subjectChoiceIssue } = await import("../src/canvas/subjectMedia.ts");
  assert.equal(subjectChoiceIssue("video", 15, "main"), null);
  assert.equal(subjectChoiceIssue("audio", 15, "voice"), null);
  for (const seconds of [0, 16, Infinity]) {
    assert.ok(subjectChoiceIssue("video", seconds, "main"));
    assert.ok(subjectChoiceIssue("audio", seconds, "voice"));
  }
  assert.ok(subjectChoiceIssue("audio", 1, "main"));
  assert.ok(subjectChoiceIssue("video", 1, "auxiliary"));
  assert.ok(subjectChoiceIssue("text", undefined, "main"));
  assert.equal(subjectChoiceIssue("subject", undefined, "main"), null);
  assert.ok(subjectChoiceIssue("subject", undefined, "voice"));
});
