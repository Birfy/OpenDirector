import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { createHistory, recordChange, undo } from "../src/canvas/history.ts";
import { applyPreviewResult } from "../src/canvas/previewResult.ts";

const outputs = [
  { src: "data:image/png;base64,first", mimeType: "image/png" },
  { src: "data:image/png;base64,second", mimeType: "image/png" },
  { src: "data:image/png;base64,third", mimeType: "image/png" },
];

test("a completed preview changes only media while preserving the latest title, prompt and settings", () => {
  const initial = createDocument();
  const node = createNode(
    "image",
    { x: 10, y: 20 },
    {
      title: "用户后来修改的标题",
      prompt: "用户后来修改的提示词",
      settings: { ...initial.settings, camera: "latest-camera", count: 3 },
    },
  );
  const current = { ...initial, nodes: [node] };
  const result = applyPreviewResult(
    current,
    { documentId: current.id, nodeId: node.id },
    [outputs[0]!],
  );
  assert.equal(result.nodes[0]!.data.src, outputs[0]!.src);
  assert.equal(result.nodes[0]!.data.mimeType, "image/png");
  assert.equal(result.nodes[0]!.data.assetState, "ready");
  assert.equal(result.nodes[0]!.data.title, node.data.title);
  assert.equal(result.nodes[0]!.data.prompt, node.data.prompt);
  assert.equal(result.nodes[0]!.data.settings, node.data.settings);
  assert.equal(current.nodes[0]!.data.src, undefined);
  assert.equal(result.edges, current.edges);
  assert.equal(result.viewport, current.viewport);
});

test("changed project, removed or locked target, changed node type, and empty outputs are no-ops", () => {
  const node = createNode("image");
  const current = { ...createDocument(), nodes: [node] };
  const submission = { documentId: current.id, nodeId: node.id };
  const anotherProject = { ...current, id: "another-project" };
  const deleted = { ...current, nodes: [] };
  const locked = { ...current, nodes: [{ ...node, locked: true }] };
  const changedType = {
    ...current,
    nodes: [{ ...createNode("video"), id: node.id }],
  };
  for (const document of [anotherProject, deleted, locked, changedType]) {
    assert.equal(applyPreviewResult(document, submission, outputs), document);
  }
  assert.equal(applyPreviewResult(current, submission, []), current);
});

test("additional outputs use the current absolute position after dragging and are top-level nodes", () => {
  const group = createNode("group", { x: 500, y: -100 });
  const target = {
    ...createNode("image", { x: 75, y: 40 }),
    parentId: group.id,
    width: 420,
    height: 280,
  };
  const current = { ...createDocument(), nodes: [group, target] };
  const result = applyPreviewResult(
    current,
    { documentId: current.id, nodeId: target.id },
    outputs,
  );
  assert.deepEqual(result.nodes[1]!.position, { x: 75, y: 40 });
  assert.equal(result.nodes[1]!.parentId, group.id);
  assert.deepEqual(result.nodes[2]!.position, { x: 1035, y: -60 });
  assert.deepEqual(result.nodes[3]!.position, { x: 1495, y: -60 });
  assert.equal(result.nodes[2]!.parentId, undefined);
  assert.equal(result.nodes[3]!.parentId, undefined);
  assert.equal(result.nodes[2]!.width, target.width);
  assert.equal(result.nodes[2]!.height, target.height);
});

test("additional output settings are independent of the target and of each other", () => {
  const document = createDocument();
  const node = createNode(
    "image",
    { x: 0, y: 0 },
    {
      title: "场景 A",
      prompt: "保留最新提示",
      settings: {
        ...document.settings,
        count: 3,
        palette: "warm",
        audioEnabled: false,
      },
    },
  );
  document.nodes = [node];
  const result = applyPreviewResult(
    document,
    { documentId: document.id, nodeId: node.id },
    outputs,
  );
  const second = result.nodes[1]!,
    third = result.nodes[2]!;
  assert.equal(second.data.title, "场景 A · 预览2");
  assert.equal(third.data.title, "场景 A · 预览3");
  assert.equal(second.data.prompt, node.data.prompt);
  assert.deepEqual(second.data.settings, node.data.settings);
  assert.notEqual(second.data.settings, node.data.settings);
  assert.notEqual(second.data.settings, third.data.settings);
  second.data.settings!.palette = "cool";
  assert.equal(node.data.settings!.palette, "warm");
  assert.equal(third.data.settings!.palette, "warm");
  assert.equal(new Set(result.nodes.map((item) => item.id)).size, 3);
});

test("all preview outputs are a single document change and undo restores the prior document", () => {
  const node = createNode("image");
  const document = { ...createDocument(), nodes: [node] };
  const result = applyPreviewResult(
    document,
    { documentId: document.id, nodeId: node.id },
    outputs,
  );
  const history = recordChange(createHistory(document), result);
  assert.equal(history.past.length, 1);
  assert.equal(history.present.nodes.length, 3);
  assert.deepEqual(undo(history).present, document);
});
