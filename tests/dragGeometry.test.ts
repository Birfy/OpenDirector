import test from "node:test";
import assert from "node:assert/strict";
import { createNode } from "../src/canvas/model.ts";
import { prepareDragGeometry } from "../src/canvas/dragGeometry.ts";
import {
  prepareNodeSnapping,
  snapNodePositions,
} from "../src/canvas/snapping.ts";

const options = { zoom: 1, objects: true, grid: false };

test("drag bounds follow nested parents without modifying document positions or node data", () => {
  const group = createNode("group", { x: 100, y: 200 });
  const child = {
    ...createNode("image", { x: 20, y: 30 }),
    parentId: group.id,
  };
  const inner = {
    ...createNode("group", { x: 50, y: 60 }),
    parentId: group.id,
  };
  const nested = {
    ...createNode("image", { x: 10, y: 15 }),
    parentId: inner.id,
  };
  const other = createNode("image", { x: 900, y: 900 });
  const nodes = [group, child, inner, nested, other];
  const before = structuredClone(nodes);
  const bounds = prepareDragGeometry(nodes);
  const first = bounds([{ id: group.id, position: { x: 150, y: 300 } }]);
  assert.equal(first.has(other.id), false);
  assert.deepEqual(first.get(child.id), {
    x: 170,
    y: 330,
    width: child.width,
    height: child.height,
  });
  assert.deepEqual(first.get(nested.id), {
    x: 210,
    y: 375,
    width: nested.width,
    height: nested.height,
  });
  const next = bounds([{ id: child.id, position: { x: 40, y: 50 } }]);
  assert.equal(next.size, 1);
  assert.deepEqual(next.get(child.id), {
    x: 140,
    y: 250,
    width: child.width,
    height: child.height,
  });
  assert.deepEqual(nodes, before);
  assert.equal(bounds([]).size, 0);
});

test("cached snapping retains the existing guide hysteresis and moving-root policy across samples", () => {
  const group = createNode("group", { x: 0, y: 0 });
  const child = {
    ...createNode("image", { x: 10, y: 20 }),
    parentId: group.id,
  };
  const other = createNode("image", { x: 700, y: 400 });
  const nodes = [group, child, other];
  const solve = prepareNodeSnapping(nodes, [group.id, child.id]);
  let previous = [] as ReturnType<typeof solve>["guides"];
  for (const [x, y] of [
    [397, 150],
    [402, 200],
    [409, 250],
  ]) {
    const proposed = [
      { id: group.id, position: { x, y } },
      { id: child.id, position: { x: 60, y: 70 } },
    ];
    const result = solve(proposed, { ...options, previous });
    assert.deepEqual(
      result,
      snapNodePositions(nodes, proposed, { ...options, previous }),
    );
    assert.deepEqual(
      result.positions.map((item) => item.id),
      [group.id],
    );
    previous = result.guides;
  }
  const bypassed = solve([{ id: group.id, position: { x: 404, y: 210 } }], {
    ...options,
    bypass: true,
  });
  assert.deepEqual(bypassed, {
    positions: [{ id: group.id, position: { x: 404, y: 210 } }],
    guides: [],
  });
});
