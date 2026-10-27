import assert from "node:assert/strict";
import test from "node:test";
import { CanvasPointerGesture } from "../src/canvas/pointerGesture.ts";
import { createDocument, createNode } from "../src/canvas/model.ts";
import {
  createHistory,
  beginTransaction,
  executeCommand,
  cancelTransaction,
  commitTransaction,
} from "../src/canvas/history.ts";

test("a drag returning to its origin remains a drag; the next real click is immediately usable", () => {
  const pointer = new CanvasPointerGesture();
  pointer.begin(1, 100, 100, true, false);
  pointer.move(1, 190, 100);
  pointer.end(1, 101, 100);
  assert.equal(pointer.moved, true);
  assert.equal(pointer.blocksClick(1), true);
  pointer.begin(1, 101, 100, true, false);
  pointer.end(1, 101, 100);
  assert.equal(pointer.blocksClick(1), false);
  // A browser's accumulated double-click count must not turn drag + click into edit.
  assert.equal(pointer.blocksClick(2), false);
  assert.equal(pointer.blocksDoubleClick(), true);
  pointer.begin(1, 101, 100, true, false);
  pointer.end(1, 101, 100);
  assert.equal(pointer.blocksDoubleClick(), false);
});

test("four screen pixels of click slop are independent of canvas zoom", () => {
  for (const distance of [0, 3, 4, 4.1, 20]) {
    const pointer = new CanvasPointerGesture();
    pointer.begin(2, 20, 20, true, false);
    pointer.end(2, 20 + distance, 20);
    assert.equal(pointer.blocksClick(1), distance > 4);
  }
});

test("hand tool and cancellation suppress canvas activation but not keyboard or outside controls", () => {
  const pointer = new CanvasPointerGesture();
  pointer.begin(1, 0, 0, true, true);
  pointer.end(1, 0, 0);
  assert.equal(pointer.blocksClick(1), true);
  assert.equal(pointer.blocksClick(0), false);
  pointer.begin(1, 0, 0, true, false);
  pointer.cancel();
  pointer.end(1, 0, 0);
  assert.equal(pointer.cancelled, true);
  assert.equal(pointer.blocksClick(1), true);
  pointer.begin(1, 0, 0, false, false);
  pointer.end(1, 30, 0);
  assert.equal(pointer.blocksClick(1), false);
});

test("unrelated pointers and late moves cannot turn a completed click into a drag", () => {
  const pointer = new CanvasPointerGesture();
  pointer.begin(5, 0, 0, true, false);
  pointer.move(6, 100, 100);
  pointer.end(6, 100, 100);
  assert.equal(pointer.active, true);
  assert.equal(pointer.moved, false);
  pointer.end(5, 0, 0);
  pointer.move(5, 200, 200);
  assert.equal(pointer.blocksClick(1), false);
});

test("cancelling a canvas move restores authored positions without consuming undo or viewport movement", () => {
  const document = createDocument();
  const node = createNode("image", { x: 10, y: 20 });
  document.nodes = [node];
  let history = beginTransaction(createHistory(document));
  history = executeCommand(history, {
    type: "move-nodes",
    ids: [node.id],
    delta: { x: 50, y: 80 },
  });
  history = executeCommand(history, {
    type: "viewport",
    viewport: { x: 50, y: 10, zoom: 0.5 },
  });
  history = commitTransaction(cancelTransaction(history));
  assert.deepEqual(history.present.nodes[0]?.position, { x: 10, y: 20 });
  assert.deepEqual(history.present.viewport, { x: 50, y: 10, zoom: 0.5 });
  assert.equal(history.past.length, 0);
});
