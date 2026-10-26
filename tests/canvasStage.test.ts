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
