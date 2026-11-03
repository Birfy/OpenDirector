import test from "node:test";
import assert from "node:assert/strict";
import {
  polylineIntersectsRect,
  selectionTouchesNode,
} from "../src/canvas/edgeSelection.ts";

const box = { x: 10, y: 10, width: 20, height: 20 };
const domRect = (rect: typeof box) => ({
  ...rect,
  left: rect.x,
  top: rect.y,
  right: rect.x + rect.width,
  bottom: rect.y + rect.height,
  toJSON: () => rect,
});
function selectionRoot(nodes: (typeof box)[]) {
  const origin = domRect({ x: 0, y: 0, width: 1000, height: 1000 });
  return {
    getBoundingClientRect: () => origin,
    querySelectorAll: () =>
      nodes.map((node) => ({ getBoundingClientRect: () => domRect(node) })),
  } as unknown as HTMLElement;
}
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
test("a marquee that reaches a selectable node leaves edges to node selection", () => {
  const root = selectionRoot([{ x: 100, y: 100, width: 80, height: 60 }]);
  assert.equal(
    selectionTouchesNode(root, { x: 80, y: 80, width: 40, height: 40 }),
    true,
  );
  assert.equal(
    selectionTouchesNode(root, { x: 120, y: 120, width: 10, height: 10 }),
    true,
  );
  assert.equal(
    selectionTouchesNode(root, { x: 0, y: 0, width: 100, height: 100 }),
    false,
  );
  // A click has no area and never hands the gesture to nodes or edges.
  assert.equal(
    selectionTouchesNode(root, { x: 120, y: 120, width: 0, height: 10 }),
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
