import assert from "node:assert/strict";
import test from "node:test";
import {
  applyCommand,
  createDocument,
  createNode,
} from "../src/canvas/model.ts";
import {
  absolutePosition,
  arrangeNodes,
  boundsOfNodes,
  fitViewport,
} from "../src/canvas/geometry.ts";

test("group and child multiselection translates once; deletion removes attached edges", () => {
  const group = createNode("group", { x: -100, y: 40 });
  const image = {
    ...createNode("image", { x: 20, y: 30 }),
    parentId: group.id,
  };
  const text = createNode("text", { x: 900, y: 200 });
  const document = {
    ...createDocument(),
    nodes: [group, image, text],
    edges: [{ id: "edge", source: image.id, target: text.id }],
  };
  const moved = applyCommand(document, {
    type: "move-nodes",
    ids: [group.id, image.id],
    delta: { x: 50, y: -10 },
  });
  assert.deepEqual(moved.nodes[1]!.position, image.position);
  assert.deepEqual(absolutePosition(moved.nodes[1]!, moved.nodes), {
    x: -30,
    y: 60,
  });
  assert.deepEqual(document.nodes[0]!.position, { x: -100, y: 40 });
  const removed = applyCommand(moved, {
    type: "remove-nodes",
    ids: [group.id],
  });
  assert.deepEqual(
    removed.nodes.map((node) => node.id),
    [text.id],
  );
  assert.deepEqual(removed.edges, []);
});

test("locked nodes reject edits and deletion; unlock remains an explicit operation", () => {
  const node = { ...createNode("text"), locked: true };
  const document = { ...createDocument(), nodes: [node] };
  assert.equal(
    applyCommand(document, {
      type: "move-nodes",
      ids: [node.id],
      delta: { x: 10, y: 20 },
    }),
    document,
  );
  assert.equal(
    applyCommand(document, {
      type: "update-node",
      id: node.id,
      patch: { data: { text: "edit" } },
    }),
    document,
  );
  assert.equal(
    applyCommand(document, { type: "remove-nodes", ids: [node.id] }),
    document,
  );
  const unlocked = applyCommand(document, {
    type: "update-node",
    id: node.id,
    patch: { locked: false },
  });
  assert.equal(unlocked.nodes[0]!.locked, false);
  assert.equal(node.locked, true);
});

test("deleting a group containing a locked descendant preserves the group and descendant", () => {
  const group = createNode("group");
  const child = { ...createNode("image"), parentId: group.id, locked: true };
  const document = { ...createDocument(), nodes: [group, child] };
  assert.equal(
    applyCommand(document, { type: "remove-nodes", ids: [group.id] }),
    document,
  );
});

test("document commands preserve unique node identity and reject dangling edge endpoints", () => {
  const image = createNode("image");
  const document = { ...createDocument(), nodes: [image] };
  assert.throws(
    () => applyCommand(document, { type: "add-nodes", nodes: [image] }),
    /重复/,
  );
  assert.throws(
    () =>
      applyCommand(document, {
        type: "add-edge",
        edge: { id: "edge", source: image.id, target: "missing" },
      }),
    /两端/,
  );
});

test("layer commands keep multi-selection order and move by one visible step", () => {
  const nodes = ["a", "b", "c", "d"].map((id) => ({
    ...createNode("image"),
    id,
  }));
  const document = { ...createDocument(), nodes };
  const forward = applyCommand(document, {
    type: "reorder-nodes",
    ids: ["a", "b"],
    direction: "forward",
  });
  assert.deepEqual(
    forward.nodes.map((node) => node.id),
    ["c", "a", "b", "d"],
  );
  const back = applyCommand(forward, {
    type: "reorder-nodes",
    ids: ["d"],
    direction: "back",
  });
  assert.deepEqual(
    back.nodes.map((node) => node.id),
    ["d", "c", "a", "b"],
  );
  assert.deepEqual(
    document.nodes.map((node) => node.id),
    ["a", "b", "c", "d"],
  );
});

test("bounds and fit cover negative coordinates and nested children within zoom bounds", () => {
  const parent = createNode("group", { x: -200, y: -100 });
  const child = {
    ...createNode("image", { x: 20, y: 10 }),
    parentId: parent.id,
    width: 100,
    height: 50,
  };
  const bounds = boundsOfNodes([child], [parent, child]);
  assert.deepEqual(bounds, { x: -180, y: -90, width: 100, height: 50 });
  assert.deepEqual(fitViewport(bounds, { width: 300, height: 200 }, 50), {
    x: 410,
    y: 230,
    zoom: 2,
  });
  assert.equal(
    fitViewport(
      { x: 0, y: 0, width: 1000000, height: 1000000 },
      { width: 300, height: 200 },
    ).zoom,
    0.08,
  );
  assert.equal(
    fitViewport(
      { x: 0, y: 0, width: 1, height: 1 },
      { width: 1000, height: 1000 },
    ).zoom,
    8,
  );
  assert.equal(boundsOfNodes([]), null);
});

test("arrangement honors variable heights, locks, and existing group coordinates", () => {
  const a = { ...createNode("image", { x: 0, y: 0 }), width: 100, height: 50 };
  const b = {
    ...createNode("image", { x: 500, y: 10 }),
    width: 200,
    height: 100,
  };
  const c = {
    ...createNode("image", { x: 900, y: 20 }),
    width: 100,
    height: 50,
  };
  const locked = { ...createNode("image", { x: 1200, y: 200 }), locked: true };
  const arranged = arrangeNodes(
    [a, b, c, locked],
    [a.id, b.id, c.id, locked.id],
    { columns: 2, gap: 20 },
  );
  assert.deepEqual(
    arranged.map((node) => node.position),
    [{ x: 0, y: 0 }, { x: 120, y: 0 }, { x: 0, y: 120 }, locked.position],
  );
  assert.equal(arranged[3], locked);
});

test("reference commands reject self references and duplicate relationships from alternate UI paths", () => {
  const a = createNode("image"),
    b = createNode("video");
  const doc = { ...createDocument(), nodes: [a, b] };
  const connected = applyCommand(doc, {
    type: "add-edge",
    edge: { id: "first", source: a.id, target: b.id },
  });
  assert.equal(
    applyCommand(connected, {
      type: "add-edge",
      edge: {
        id: "second",
        source: a.id,
        target: b.id,
        sourceHandle: "out",
        targetHandle: "in",
      },
    }),
    connected,
  );
  assert.equal(
    applyCommand(doc, {
      type: "add-edge",
      edge: { id: "self", source: a.id, target: a.id },
    }),
    doc,
  );
});
