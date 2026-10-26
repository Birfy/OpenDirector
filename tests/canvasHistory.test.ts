import assert from "node:assert/strict";
import test from "node:test";
import {
  applyCommand,
  createDocument,
  createNode,
} from "../src/canvas/model.ts";
import {
  beginTransaction,
  cancelTransaction,
  commitTransaction,
  createHistory,
  executeCommand,
  recordChange,
  redo,
  undo,
  updateTransaction,
} from "../src/canvas/history.ts";

test("a drag with multiple updates is one undo step; redo restores the final position", () => {
  const node = createNode("image");
  const document = { ...createDocument(), nodes: [node] };
  let history = beginTransaction(createHistory(document));
  for (const x of [10, 25, 50, 80])
    history = updateTransaction(
      history,
      applyCommand(history.present, {
        type: "update-node",
        id: node.id,
        patch: { position: { x, y: 20 } },
      }),
    );
  assert.equal(history.past.length, 0);
  history = commitTransaction(history);
  assert.equal(history.past.length, 1);
  assert.deepEqual(undo(history).present.nodes[0]!.position, { x: 0, y: 0 });
  assert.deepEqual(redo(undo(history)).present.nodes[0]!.position, {
    x: 80,
    y: 20,
  });
});

test("cancel and no-op drags do not consume history or erase redo", () => {
  let history = executeCommand(createHistory(createDocument("original")), {
    type: "title",
    title: "edited",
  });
  history = undo(history);
  const future = history.future;
  history = beginTransaction(history);
  history = updateTransaction(history, {
    ...history.present,
    title: "temporary",
  });
  history = cancelTransaction(history);
  assert.equal(history.present.title, "original");
  assert.equal(history.future, future);
  assert.equal(commitTransaction(beginTransaction(history)).past.length, 0);
});

test("viewport edits stay out of undo and undo preserves the current viewport", () => {
  let history = executeCommand(createHistory(createDocument("first")), {
    type: "title",
    title: "second",
  });
  const viewport = { x: -120, y: 80, zoom: 0.4 };
  history = executeCommand(history, { type: "viewport", viewport });
  assert.equal(history.past.length, 1);
  const undone = undo(history);
  assert.equal(undone.present.title, "first");
  assert.deepEqual(undone.present.viewport, viewport);
});

test("new content after undo clears redo and history obeys its retained limit", () => {
  let history = createHistory(createDocument("0"), 2);
  for (const title of ["1", "2", "3"])
    history = executeCommand(history, { type: "title", title });
  assert.deepEqual(
    history.past.map((document) => document.title),
    ["1", "2"],
  );
  history = undo(history);
  history = executeCommand(history, { type: "title", title: "new branch" });
  assert.equal(history.future.length, 0);
});

test("node settings and text edits are history content, while identical copies are not", () => {
  const node = createNode("text", { x: 0, y: 0 }, { text: "first" });
  let history = createHistory({ ...createDocument(), nodes: [node] });
  history = recordChange(history, {
    ...history.present,
    nodes: [
      { ...node, data: { ...node.data }, position: { ...node.position } },
    ],
  });
  assert.equal(history.past.length, 0);
  history = executeCommand(history, {
    type: "update-node",
    id: node.id,
    patch: {
      data: {
        text: "second",
        settings: { ...history.present.settings, count: 4, audioEnabled: true },
      },
    },
  });
  assert.equal(history.past.length, 1);
  assert.equal(undo(history).present.nodes[0]!.data.text, "first");
});
