import assert from "node:assert/strict";
import test from "node:test";
import {
  containImage,
  expandedSize,
  expansionForAspect,
  readImageInk,
  resizeExpansion,
  paintImageInk,
  writeImageInk,
  type ImageInkStroke,
} from "../src/canvas/imageActionGeometry.ts";

test("expansion is source-sized and every aspect retains the entire source", () => {
  for (const source of [
    { width: 800, height: 600 },
    { width: 200, height: 900 },
  ]) {
    const original = expandedSize(source, expansionForAspect(source));
    assert.equal(original.width, source.width * 1.5);
    assert.equal(original.height, source.height * 1.5);
    for (const aspect of [21 / 9, 16 / 9, 4 / 3, 1, 3 / 4, 9 / 16]) {
      const expansion = expansionForAspect(source, aspect),
        output = expandedSize(source, expansion);
      assert.ok(output.width >= source.width && output.height >= source.height);
      assert.ok(Math.abs(output.width / output.height - aspect) < 0.005);
      assert.ok(Object.values(expansion).every((value) => value >= 0));
    }
  }
});

test("outpaint dragging uses preview scale without cropping source or moving opposite edges", () => {
  const initial = { left: 0.25, right: 0.25, top: 0.25, bottom: 0.25 };
  const small = resizeExpansion(initial, "nw", -20, -10, {
    width: 200,
    height: 100,
  });
  const large = resizeExpansion(initial, "nw", -80, -40, {
    width: 800,
    height: 400,
  });
  assert.deepEqual(small, large);
  assert.deepEqual(small, { left: 0.35, right: 0.25, top: 0.35, bottom: 0.25 });
  assert.deepEqual(
    resizeExpansion(initial, "se", -9999, -9999, { width: 200, height: 100 }),
    { left: 0.25, right: 0, top: 0.25, bottom: 0 },
  );
  assert.deepEqual(
    resizeExpansion(initial, "e", 100, 800, { width: 200, height: 100 }),
    { ...initial, right: 0.75 },
  );
});

test("contain image keeps letterboxing out of drawing coordinates", () => {
  assert.deepEqual(
    containImage({ width: 800, height: 400 }, { width: 300, height: 300 }),
    { x: 0, y: 75, width: 300, height: 150 },
  );
  assert.deepEqual(
    containImage({ width: 400, height: 800 }, { width: 300, height: 300 }),
    { x: 75, y: 0, width: 150, height: 300 },
  );
});

test("saved annotations cannot move to another source or source dimensions", () => {
  const size = { width: 800, height: 600 };
  const strokes: ImageInkStroke[] = [
    { tool: "brush", points: [{ x: 30, y: 50 }], size: 12, color: "#abcdef" },
  ];
  const saved = JSON.stringify({ sourceNodeId: "image-1", ...size, strokes });
  assert.deepEqual(readImageInk(saved, "image-1", size), strokes);
  assert.deepEqual(readImageInk(saved, "image-2", size), []);
  assert.deepEqual(
    readImageInk(saved, "image-1", { ...size, width: 1600 }),
    [],
  );
  assert.deepEqual(readImageInk("broken", "image-1", size), []);
  assert.deepEqual(
    readImageInk(
      JSON.stringify({
        sourceNodeId: "image-1",
        ...size,
        strokes: [{ ...strokes[0], points: [{ x: null, y: 4 }] }],
      }),
      "image-1",
      size,
    ),
    [],
  );
});

test("annotation writes fit the persisted task parameter limit", () => {
  const size = { width: 800, height: 600 };
  const stroke: ImageInkStroke = {
    tool: "text",
    size: 24,
    color: "#ffffff",
    points: [{ x: 10, y: 20 }],
    text: "label",
  };
  const serialized = writeImageInk([stroke], "source", size);
  assert.deepEqual(readImageInk(serialized, "source", size), [stroke]);
  assert.throws(
    () =>
      writeImageInk([{ ...stroke, text: "x".repeat(100_000) }], "source", size),
    /保存上限/,
  );
});

test("mask painter uses white alpha and eraser only removes the annotation layer", () => {
  const operations: unknown[][] = [];
  const ctx = new Proxy({} as CanvasRenderingContext2D, {
    get:
      (_, key) =>
      (...args: unknown[]) =>
        operations.push([key, ...args]),
    set: (_, key, value) => {
      operations.push([key, value]);
      return true;
    },
  });
  paintImageInk(
    ctx,
    [
      { tool: "brush", size: 10, color: "#ff0000", points: [{ x: 20, y: 30 }] },
      { tool: "erase", size: 8, color: "#ff0000", points: [{ x: 20, y: 30 }] },
      { tool: "clear", size: 1, color: "#ffffff", points: [] },
    ],
    { width: 800, height: 600 },
    true,
  );
  assert.ok(
    operations.some(
      (operation) => operation[0] === "fillStyle" && operation[1] === "#ffffff",
    ),
  );
  assert.ok(
    operations.some(
      (operation) =>
        operation[0] === "globalCompositeOperation" &&
        operation[1] === "destination-out",
    ),
  );
  assert.ok(
    operations.some(
      (operation) =>
        operation[0] === "clearRect" &&
        operation[3] === 800 &&
        operation[4] === 600,
    ),
  );
  assert.ok(!operations.some((operation) => operation[0] === "drawImage"));
});
