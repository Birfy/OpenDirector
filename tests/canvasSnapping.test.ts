import assert from "node:assert/strict";
import test from "node:test";
import {
  createNode,
  createDocument,
  type CanvasNode,
} from "../src/canvas/model.ts";
import { absolutePosition } from "../src/canvas/geometry.ts";
import { alignNodes, snapNodePositions } from "../src/canvas/snapping.ts";
import {
  createHistory,
  beginTransaction,
  commitTransaction,
  executeCommand,
  undo,
  redo,
} from "../src/canvas/history.ts";

const node = (
  x: number,
  y: number,
  extra: Partial<CanvasNode> = {},
): CanvasNode => ({
  ...createNode("image", { x, y }),
  width: 100,
  height: 100,
  ...extra,
});
const options = { zoom: 1, objects: true, grid: false };

test("object snapping uses screen-pixel tolerance at different zoom levels and aligns all anchors", () => {
  const moving = node(0, 0),
    target = node(200, 400);
  for (const zoom of [0.25, 1, 2]) {
    const result = snapNodePositions(
      [moving, target],
      [{ id: moving.id, position: { x: 200 - 4 / zoom, y: 250 } }],
      { ...options, zoom },
    );
    assert.equal(result.positions[0]!.position.x, 200);
    assert.equal(result.guides.find((g) => g.axis === "x")?.coordinate, 200);
  }
  const centered = snapNodePositions(
    [moving, target],
    [{ id: moving.id, position: { x: 153, y: 296 } }],
    options,
  );
  assert.deepEqual(centered.positions[0]!.position, { x: 150, y: 300 });
});

test("hysteresis retains a guide until eight screen pixels then releases; bypass disables grid and object snapping", () => {
  const moving = node(0, 0),
    target = node(200, 400),
    nodes = [moving, target];
  const first = snapNodePositions(
    nodes,
    [{ id: moving.id, position: { x: 203, y: 250 } }],
    options,
  );
  const retained = snapNodePositions(
    nodes,
    [{ id: moving.id, position: { x: 207, y: 250 } }],
    { ...options, previous: first.guides },
  );
  assert.equal(retained.positions[0]!.position.x, 200);
  const released = snapNodePositions(
    nodes,
    [{ id: moving.id, position: { x: 209, y: 250 } }],
    { ...options, previous: retained.guides },
  );
  assert.equal(released.positions[0]!.position.x, 209);
  assert.equal(released.guides.length, 0);
  const bypassed = snapNodePositions(
    nodes,
    [{ id: moving.id, position: { x: 203, y: 250 } }],
    { ...options, grid: true, bypass: true, previous: first.guides },
  );
  assert.deepEqual(bypassed.positions[0]!.position, { x: 203, y: 250 });
  assert.equal(bypassed.guides.length, 0);
});

test("group drag carries descendants once, excludes internal anchors, and preserves multi-selection spacing", () => {
  const parent = node(100, 100, { type: "group", width: 300, height: 300 });
  const child = node(20, 30, { parentId: parent.id });
  const sibling = node(600, 100),
    target = node(900, 500);
  const proposed = [
    { id: parent.id, position: { x: 104, y: 103 } },
    { id: child.id, position: child.position },
    { id: sibling.id, position: { x: 604, y: 103 } },
  ];
  const result = snapNodePositions(
    [parent, child, sibling, target],
    proposed,
    options,
  );
  assert.equal(result.positions.length, 2);
  assert.equal(
    result.positions[1]!.position.x - result.positions[0]!.position.x,
    500,
  );
  assert.ok(result.guides.every((g) => g.targetId === target.id));
  const nested = snapNodePositions(
    [parent, child, target],
    [{ id: child.id, position: { x: 798, y: 30 } }],
    options,
  );
  assert.equal(nested.positions[0]!.position.x, 800); // 900 in document space, 800 within parent.
});

test("locked ancestors prevent moving descendants; grid snapping is optional and shared by the selection", () => {
  const parent = node(0, 0, { type: "group", locked: true });
  const child = node(20, 20, { parentId: parent.id });
  const a = node(300, 300),
    b = node(450, 300);
  const changes = [
    { id: child.id, position: { x: 30, y: 30 } },
    { id: a.id, position: { x: 310, y: 313 } },
    { id: b.id, position: { x: 460, y: 313 } },
  ];
  const result = snapNodePositions([parent, child, a, b], changes, {
    ...options,
    objects: false,
    grid: true,
  });
  assert.deepEqual(
    result.positions.map((p) => p.position),
    [
      { x: 306, y: 306 },
      { x: 456, y: 306 },
    ],
  );
});

test("snapped drag remains one undo transaction and redo restores aligned geometry", () => {
  const a = node(0, 0),
    b = node(200, 400);
  let history = beginTransaction(
    createHistory({ ...createDocument(), nodes: [a, b] }),
  );
  for (const x of [160, 180, 197]) {
    const result = snapNodePositions(
      history.present.nodes,
      [{ id: a.id, position: { x, y: 200 } }],
      options,
    );
    history = executeCommand(history, {
      type: "batch",
      commands: result.positions.map(({ id, position }) => ({
        type: "update-node",
        id,
        patch: { position },
      })),
    });
  }
  history = commitTransaction(history);
  assert.equal(history.past.length, 1);
  assert.equal(history.present.nodes[0]!.position.x, 200);
  assert.deepEqual(undo(history).present.nodes[0]!.position, a.position);
  assert.deepEqual(redo(undo(history)).present.nodes, history.present.nodes);
});

test("alignment converts document space to parent space and distribution handles unequal node sizes", () => {
  const group = node(1000, 700, { type: "group", width: 700, height: 500 });
  const a = node(0, 0, { parentId: group.id }),
    b = node(200, 100, { parentId: group.id, width: 200 }),
    c = node(1600, 700);
  const aligned = alignNodes([group, a, b, c], [a.id, b.id, c.id], "top");
  assert.ok(
    aligned
      .filter((n) => n.id !== group.id)
      .every((n) => absolutePosition(n, aligned).y === 700),
  );
  const distributed = alignNodes(
    [group, a, b, c],
    [a.id, b.id, c.id],
    "horizontal",
  );
  assert.equal(absolutePosition(distributed[2]!, distributed).x, 1250);
  const locked = alignNodes(
    [{ ...group, locked: true }, a, b, c],
    [a.id, b.id, c.id],
    "left",
  );
  assert.deepEqual(locked[1]!.position, a.position);
});
