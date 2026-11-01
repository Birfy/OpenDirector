import assert from "node:assert/strict";
import test from "node:test";

import {
  NODE_STAT_ORDER,
  countNodesByKind,
  totalNodeCount,
} from "../src/canvas/nodeStats.ts";
import type { CanvasNode, CanvasNodeKind } from "../src/canvas/model.ts";

function node(type: CanvasNodeKind, id = `${type}-${Math.random()}`): CanvasNode {
  return {
    id,
    type,
    position: { x: 0, y: 0 },
    data: { kind: type } as CanvasNode["data"],
    width: 100,
    height: 100,
  };
}

test("empty canvas reports no rows and a zero total", () => {
  assert.deepEqual(countNodesByKind([]), []);
  assert.equal(totalNodeCount([]), 0);
});

test("a single kind reports one row with the right count", () => {
  const nodes = [node("image", "a"), node("image", "b"), node("image", "c")];
  const rows = countNodesByKind(nodes);
  assert.equal(rows.length, 1);
  assert.deepEqual(rows[0], { kind: "image", label: "图片", count: 3 });
  assert.equal(totalNodeCount(nodes), 3);
});

test("rows follow the fixed order, not the input order or the counts", () => {
  const nodes = [
    node("group", "g"),
    node("text", "t1"),
    node("text", "t2"),
    node("image", "i1"),
    node("image", "i2"),
    node("image", "i3"),
  ];
  const kinds = countNodesByKind(nodes).map((row) => row.kind);
  assert.deepEqual(kinds, ["image", "text", "group"]);
});

test("kinds with zero nodes are omitted", () => {
  const rows = countNodesByKind([node("video", "v")]);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].kind, "video");
});

test("child nodes inside a group count toward their own kind", () => {
  const child: CanvasNode = { ...node("image", "child"), parentId: "group-1" };
  const nodes = [node("group", "group-1"), child];
  const rows = countNodesByKind(nodes);
  assert.deepEqual(
    rows.map((row) => [row.kind, row.count]),
    [
      ["image", 1],
      ["group", 1],
    ],
  );
  assert.equal(totalNodeCount(nodes), 2);
});

test("kinds outside the reported set are excluded from rows and total", () => {
  const nodes = [
    node("image", "i"),
    node("file", "f"),
    node("stack", "s"),
    node("tool", "o"),
    node("external", "e"),
  ];
  const rows = countNodesByKind(nodes);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].kind, "image");
  // The button total must equal the sum of the listed rows.
  assert.equal(totalNodeCount(nodes), 1);
});

test("the row sum always equals the reported total", () => {
  const nodes = [
    node("image", "i1"),
    node("video", "v1"),
    node("video", "v2"),
    node("text", "t1"),
    node("audio", "a1"),
    node("subject", "s1"),
    node("timeline", "l1"),
    node("group", "g1"),
    node("file", "f1"),
  ];
  const rows = countNodesByKind(nodes);
  const sum = rows.reduce((acc, row) => acc + row.count, 0);
  assert.equal(sum, totalNodeCount(nodes));
});

test("every reported kind has a label and stays in the fixed order", () => {
  const nodes = NODE_STAT_ORDER.map((kind) => node(kind, kind));
  const rows = countNodesByKind(nodes);
  assert.deepEqual(
    rows.map((row) => row.kind),
    [...NODE_STAT_ORDER],
  );
  for (const row of rows) assert.ok(row.label.length > 0);
});
