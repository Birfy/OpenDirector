import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import {
  appendPendingResult,
  fillPendingResult,
  pendingResultNode,
  removePendingResult,
  type LinkedMediaResult,
} from "../src/canvas/linkedResults.ts";
import { generationActivities } from "../src/canvas/generationActivity.ts";
import { estimatedProgress } from "../src/canvas/generationDurations.ts";

const image = (title: string): LinkedMediaResult => ({
  kind: "image",
  src: `data:image/png;base64,${Buffer.from(title).toString("base64")}`,
  mimeType: "image/png",
  title,
  media: { width: 2016, height: 1152 },
});

function fixture() {
  const source = createNode("image", { x: 0, y: 0 }, { src: "original" });
  const document = { ...createDocument(), nodes: [source] };
  const origin = {
    documentId: document.id,
    nodeId: source.id,
    kind: source.type,
    src: source.data.src,
  };
  return { source, document, origin };
}

test("a running tool gets an empty result node linked to the right of its source", () => {
  const { source, document, origin } = fixture();
  const pending = appendPendingResult(document, origin, "image", "扩图");
  const [id] = pending.ids;
  const node = pendingResultNode(pending.document, id!)!;
  assert.equal(node.type, "image");
  assert.equal(node.data.title, "扩图");
  assert.ok(node.position.x >= source.position.x + source.width);
  assert.deepEqual(
    pending.document.edges.map(({ source: from, target }) => [from, target]),
    [[source.id, id]],
  );
});

test("the first output fills the pending node and further outputs join the source", () => {
  const { source, document, origin } = fixture();
  const pending = appendPendingResult(document, origin, "image", "图层分解");
  const id = pending.ids[0]!;
  const filled = fillPendingResult(pending.document, origin, id, [
    image("背景"),
    image("图层 1"),
  ]);
  assert.equal(filled.error, undefined);
  assert.equal(filled.ids[0], id);
  assert.equal(filled.ids.length, 2);
  const node = filled.document.nodes.find((item) => item.id === id)!;
  assert.equal(node.data.title, "背景");
  assert.equal(node.data.assetState, "ready");
  assert.equal(pendingResultNode(filled.document, id), undefined);
  // Both results hang off the source, the filled node keeping its original edge.
  assert.equal(
    filled.document.edges.filter((edge) => edge.source === source.id).length,
    2,
  );
});

test("a failed run removes its untouched placeholder but never a node that was filled", () => {
  const { document, origin } = fixture();
  const pending = appendPendingResult(document, origin, "image", "扩图");
  const id = pending.ids[0]!;
  const removed = removePendingResult(pending.document, id);
  assert.equal(removed.nodes.length, 1);
  assert.equal(removed.edges.length, 0);
  const filled = fillPendingResult(pending.document, origin, id, [
    image("扩图"),
  ]);
  assert.equal(removePendingResult(filled.document, id), filled.document);
});

test("progress grows with elapsed time but never completes before the result", () => {
  assert.equal(estimatedProgress(0, 20_000), 0);
  const atExpected = estimatedProgress(20_000, 20_000);
  assert.ok(atExpected > 0.85 && atExpected < 0.92);
  assert.ok(estimatedProgress(10_000, 20_000) < atExpected);
  assert.ok(estimatedProgress(600_000, 20_000) <= 0.97);
  const [activity] = generationActivities(
    [
      {
        documentId: "d",
        nodeId: "n",
        phase: "generating",
        startedAt: 2000,
        expectedMs: 10_000,
      },
      {
        documentId: "d",
        nodeId: "n",
        phase: "queued",
        startedAt: 1000,
        expectedMs: 30_000,
      },
    ],
    "d",
  ).values();
  assert.deepEqual(activity, {
    count: 2,
    phase: "generating",
    startedAt: 1000,
    expectedMs: 30_000,
  });
});
