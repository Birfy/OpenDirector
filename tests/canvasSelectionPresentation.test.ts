import assert from "node:assert/strict";
import test from "node:test";
import {
  selectionPlacement,
  selectionViewport,
  type SelectionChrome,
} from "../src/canvas/selectionPresentation.ts";

test("selection fits node and both fixed-size controls without changing authored geometry", () => {
  const node = { x: 840, y: 620, width: 720, height: 480 };
  const before = { ...node };
  const chrome: SelectionChrome = {
    safe: { x: 80, y: 72, width: 900, height: 570 },
    toolbar: { width: 880, height: 46 },
    composer: { width: 680, height: 270 },
  };
  const viewport = selectionViewport(node, { x: 0, y: 0, zoom: 1.2 }, chrome);
  const placed = selectionPlacement(node, viewport, chrome);
  assert.deepEqual(node, before);
  assert.ok(viewport.zoom < 1.2);
  assert.ok(placed.toolbar.top >= chrome.safe.y - 0.001);
  assert.ok(
    placed.composer.top + chrome.composer.height <=
      chrome.safe.y + chrome.safe.height + 0.001,
  );
  assert.ok(placed.toolbar.left >= chrome.safe.x);
  assert.ok(
    placed.toolbar.left + chrome.toolbar.width <=
      chrome.safe.x + chrome.safe.width,
  );
  assert.equal(placed.visible, true);
  assert.deepEqual(selectionViewport(node, viewport, chrome), viewport);
});

test("opening a right sidebar reserves the right side; closing never zooms in or recenters a contained selection", () => {
  const node = { x: 350, y: 160, width: 300, height: 200 };
  const chrome: SelectionChrome = {
    safe: { x: 80, y: 72, width: 560, height: 570 },
    toolbar: { width: 550, height: 44 },
    composer: { width: 560, height: 220 },
  };
  const fitted = selectionViewport(node, { x: 0, y: 0, zoom: 1 }, chrome);
  const placed = selectionPlacement(node, fitted, chrome);
  assert.equal(placed.composer.left, 80);
  assert.equal(fitted.zoom, 1);
  assert.deepEqual(
    selectionViewport(node, fitted, {
      ...chrome,
      safe: { ...chrome.safe, width: 1100 },
    }),
    fitted,
  );
});

test("manual pan tracks anchored controls without forcing viewport; offscreen selection hides controls", () => {
  const node = { x: 0, y: 0, width: 300, height: 200 };
  const chrome: SelectionChrome = {
    safe: { x: 80, y: 72, width: 900, height: 570 },
    toolbar: { width: 0, height: 0 },
    composer: { width: 680, height: 240 },
  };
  const viewport = { x: 350, y: 120, zoom: 0.7 };
  const initial = selectionPlacement(node, viewport, chrome);
  const dragged = selectionPlacement({ ...node, y: 100 }, viewport, chrome);
  assert.equal(dragged.composer.top - initial.composer.top, 70);
  assert.equal(
    selectionPlacement(node, { ...viewport, x: -900 }, chrome).visible,
    false,
  );
  assert.deepEqual(viewport, { x: 350, y: 120, zoom: 0.7 });
});

test("fitting a distant node preserves its screen center while reducing zoom", () => {
  const node = { x: 10000, y: 8000, width: 600, height: 600 };
  const view = { x: 640 - 10300, y: 200 - 8000, zoom: 1 };
  const chrome: SelectionChrome = {
    safe: { x: 80, y: 72, width: 1180, height: 570 },
    toolbar: { width: 700, height: 46 },
    composer: { width: 680, height: 250 },
  };
  const fitted = selectionViewport(node, view, chrome);
  assert.ok(fitted.zoom < 1);
  assert.equal((node.x + node.width / 2) * fitted.zoom + fitted.x, 640);
});
