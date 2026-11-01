import assert from "node:assert/strict";
import test from "node:test";
import { composerPopoverPlacement } from "../src/canvas/composerPopoverGeometry.ts";

test("composer popovers follow the trigger and choose usable space above or below the card", () => {
  const viewport = { left: 0, top: 0, right: 1200, bottom: 800 };
  const size = { width: 366, height: 260 };
  const above = composerPopoverPlacement(
    { left: 950, top: 700, right: 1050, bottom: 740 },
    { left: 500, top: 480, right: 1180, bottom: 780 },
    size,
    viewport,
  );
  assert.equal(above.left, 822);
  assert.equal(above.top, 212);
  const below = composerPopoverPlacement(
    { left: 50, top: 180, right: 150, bottom: 220 },
    { left: 10, top: 30, right: 690, bottom: 330 },
    size,
    viewport,
  );
  assert.equal(below.left, 50);
  assert.equal(below.top, 338);
});

test("tall option lists scroll inside available space and remain usable on a short narrow viewport", () => {
  const scrolled = composerPopoverPlacement(
    { left: 500, top: 600, right: 600, bottom: 640 },
    { left: 200, top: 280, right: 880, bottom: 690 },
    { width: 366, height: 600 },
    { left: 0, top: 0, right: 1000, bottom: 720 },
  );
  assert.equal(scrolled.top, 12);
  assert.equal(scrolled.maxHeight, 260);

  const short = composerPopoverPlacement(
    { left: 300, top: 300, right: 340, bottom: 330 },
    { left: 0, top: 100, right: 380, bottom: 340 },
    { width: 440, height: 600 },
    { left: 10, top: 20, right: 390, bottom: 380 },
  );
  assert.deepEqual(short, { left: 22, top: 32, maxWidth: 356, maxHeight: 336 });
});

test("duration overlays the composer directly above its trigger and stays on screen", () => {
  const anchor = { left: 800, top: 700, right: 860, bottom: 728 };
  const composer = { left: 360, top: 350, right: 1040, bottom: 740 };
  const viewport = { left: 0, top: 0, right: 1200, bottom: 800 };
  const placed = composerPopoverPlacement(
    anchor,
    composer,
    { width: 340, height: 64 },
    viewport,
    "above-anchor",
  );
  assert.equal(placed.left, 660);
  assert.equal(placed.top, 628);
  assert.equal(placed.top + 64, anchor.top - 8);
  const edge = composerPopoverPlacement(
    { ...anchor, left: 1150, right: 1190 },
    composer,
    { width: 340, height: 64 },
    viewport,
    "above-anchor",
  );
  assert.equal(edge.left + 340, 1188);
});
