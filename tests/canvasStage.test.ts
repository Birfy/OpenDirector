import assert from "node:assert/strict";
import test from "node:test";
import {
  createLocalStage,
  parseLocalStageValue,
  sameLocalStage,
  sampleStage,
} from "../src/canvas/stageDocument.ts";

test("local stage validates and deep-clones transform and camera fields", () => {
  const stage = createLocalStage(),
    parsed = parseLocalStageValue(stage);
  assert.deepEqual(parsed, stage);
  parsed.objects[0]!.position.x = 99;
  assert.equal(stage.objects[0]!.position.x, 0);
  assert.equal(sameLocalStage(stage, parsed), false);
  assert.throws(
    () =>
      parseLocalStageValue({
        ...stage,
        camera: { ...stage.camera, target: stage.camera.position },
      }),
    /摄像机/,
  );
  assert.throws(
    () =>
      parseLocalStageValue({
        ...stage,
        objects: [{ ...stage.objects[0], scale: { x: 0, y: 1, z: 1 } }],
      }),
    /缩放/,
  );
});
test("keyframes interpolate actual camera and object positions and hold endpoints", () => {
  const stage = createLocalStage(),
    object = stage.objects[0]!;
  stage.keyframes = [
    {
      id: "a",
      time: 0,
      camera: structuredClone(stage.camera),
      objects: [{ id: object.id, transform: structuredClone(object) }],
    },
    {
      id: "b",
      time: 6,
      camera: { ...stage.camera, position: { x: 11, y: 3.5, z: 7 } },
      objects: [
        {
          id: object.id,
          transform: {
            ...structuredClone(object),
            position: { x: 6, y: 0, z: 0 },
          },
        },
      ],
    },
  ];
  const parsed = parseLocalStageValue(stage),
    half = sampleStage(parsed, 3);
  assert.equal(half.camera.position.x, 8);
  assert.equal(half.objects[0]!.position.x, 3);
  assert.equal(sampleStage(parsed, 100).objects[0]!.position.x, 6);
  assert.equal(sameLocalStage(stage, parsed), true);
  assert.throws(
    () =>
      parseLocalStageValue({
        ...stage,
        keyframes: [
          ...stage.keyframes,
          { ...stage.keyframes[0], id: "duplicate-time" },
        ],
      }),
    /不能重复/,
  );
});

test("character motion survives document parsing and transforms without sharing mutable settings", async () => {
  const { sampleJointPose } = await import("../src/canvas/stageMotion.ts");
  const stage = createLocalStage();
  stage.objects[0]!.motion = { preset: "walk", speed: 1.5, amount: 0.8 };
  const parsed = parseLocalStageValue(JSON.parse(JSON.stringify(stage)));
  assert.equal(sameLocalStage(stage, parsed), true);
  const motion = parsed.objects[0]!.motion!;
  const first = sampleJointPose(motion, 0),
    moving = sampleJointPose(motion, 1 / 6);
  assert.notDeepEqual(first, moving);
  assert.equal(moving.leftHip, -moving.rightHip);
  assert.deepEqual(
    sampleJointPose(motion, 0.1),
    sampleJointPose({ ...motion, speed: 3 }, 0.05),
  );
  assert.equal(sampleStage(parsed, 2).objects[0]!.motion?.preset, "walk");
  motion.amount = 0;
  assert.equal(stage.objects[0]!.motion!.amount, 0.8);
  assert.equal(sameLocalStage(stage, parsed), false);
  assert.ok(
    Object.values(sampleJointPose(motion, 4)).every((value) => value === 0),
  );
});

test("persisted motion rejects unknown actions, invalid rates and inapplicable object kinds", () => {
  const stage = createLocalStage();
  for (const motion of [
    { preset: "missing", speed: 1, amount: 1 },
    { preset: "walk", speed: 0, amount: 1 },
    { preset: "wave", speed: Infinity, amount: 1 },
    { preset: "run", speed: 1, amount: 2 },
  ])
    assert.throws(
      () =>
        parseLocalStageValue({
          ...stage,
          objects: [{ ...stage.objects[0], motion }],
        }),
      /动作/,
    );
  assert.throws(
    () =>
      parseLocalStageValue({
        ...stage,
        objects: [
          {
            ...stage.objects[0],
            kind: "box",
            motion: { preset: "wave", speed: 1, amount: 1 },
          },
        ],
      }),
    /只有人物/,
  );
});
