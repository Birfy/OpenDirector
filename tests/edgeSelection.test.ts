import test from "node:test";
import assert from "node:assert/strict";
import { polylineIntersectsRect } from "../src/canvas/edgeSelection.ts";

const box = { x: 10, y: 10, width: 20, height: 20 };
test("marquee hits crossings even when no endpoint is in the box", () => {
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 0, y: 20 },
        { x: 40, y: 20 },
      ],
      box,
    ),
    true,
  );
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 20, y: 0 },
        { x: 20, y: 40 },
      ],
      box,
    ),
    true,
  );
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 40, y: 40 },
        { x: 0, y: 0 },
      ],
      box,
    ),
    true,
  );
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 18, y: 18 },
        { x: 22, y: 22 },
      ],
      box,
    ),
    true,
  );
});
test("a curve bounding box alone does not select the edge", () => {
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 0, y: 0 },
        { x: 40, y: 0 },
        { x: 40, y: 40 },
      ],
      box,
    ),
    false,
  );
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 0, y: 5 },
        { x: 40, y: 5 },
      ],
      box,
    ),
    false,
  );
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 0, y: 0 },
        { x: 9, y: 9 },
      ],
      box,
    ),
    false,
  );
});
test("marquee includes touching edges and degenerate segments", () => {
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 0, y: 10 },
        { x: 40, y: 10 },
      ],
      box,
    ),
    true,
  );
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 20, y: 20 },
        { x: 20, y: 20 },
      ],
      box,
    ),
    true,
  );
  assert.equal(
    polylineIntersectsRect(
      [
        { x: 5, y: 5 },
        { x: 5, y: 5 },
      ],
      box,
    ),
    false,
  );
});
