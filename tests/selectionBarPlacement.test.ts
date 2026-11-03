import test from "node:test";
import assert from "node:assert/strict";
import { selectionBarPlacement } from "../src/canvas/selectionPresentation.ts";

const safe = { x: 80, y: 72, width: 1000, height: 800 };
const view = { x: 0, y: 0, zoom: 1 };
const toolbar = { width: 300, height: 36 };

test("multi-selection bar sits above and centred on the selected envelope", () => {
  const placement = selectionBarPlacement(
    { x: 300, y: 300, width: 200, height: 100 },
    view,
    toolbar,
    safe,
  );
  assert.equal(placement.left, 250);
  assert.equal(placement.top, 256);
  assert.equal(placement.visible, true);
});

test("multi-selection bar follows zoom and pan", () => {
  const placement = selectionBarPlacement(
    { x: 300, y: 300, width: 200, height: 100 },
    { x: -100, y: -200, zoom: 2 },
    toolbar,
    safe,
  );
  // Screen centre: (400 * 2 - 100) = 700. Screen top: 300 * 2 - 200 = 400.
  assert.equal(placement.left, 550);
  assert.equal(placement.top, 356);
});

test("multi-selection bar clamps to the safe horizontal edges", () => {
  const left = selectionBarPlacement(
    { x: 0, y: 300, width: 100, height: 100 },
    view,
    toolbar,
    safe,
  );
  const right = selectionBarPlacement(
    { x: 1100, y: 300, width: 100, height: 100 },
    view,
    toolbar,
    safe,
  );
  assert.equal(left.left, safe.x);
  assert.equal(right.left, safe.x + safe.width - toolbar.width);
});

test("multi-selection bar drops below when the top safe area is occupied", () => {
  const placement = selectionBarPlacement(
    { x: 300, y: 40, width: 200, height: 100 },
    view,
    toolbar,
    safe,
  );
  assert.equal(placement.top, 148);
  assert.equal(placement.visible, true);
});

test("multi-selection bar hides once the selection leaves the safe area", () => {
  const placement = selectionBarPlacement(
    { x: 300, y: -200, width: 200, height: 100 },
    view,
    toolbar,
    safe,
  );
  assert.equal(placement.visible, false);
});
