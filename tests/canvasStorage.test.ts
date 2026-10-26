import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import {
  loadDocument,
  parseDocument,
  saveDocument,
  serializeDocument,
} from "../src/canvas/storage.ts";

test("serialization round trips embedded assets, groups, edges and node generation settings", () => {
  const document = createDocument("示例画布");
  const group = createNode("group");
  const image = {
    ...createNode(
      "image",
      { x: -12, y: 40 },
      {
        src: "data:image/png;base64,aGVsbG8=",
        mimeType: "image/png",
        assetState: "ready",
        settings: {
          ...document.settings,
          count: 8,
          camera: "close-up",
          palette: "warm",
          style: "watercolor",
          audioEnabled: false,
        },
      },
    ),
    parentId: group.id,
  };
  const audio = createNode(
    "audio",
    { x: 600, y: 10 },
    { src: "data:audio/wav;base64,YXVkaW8=", mimeType: "audio/wav" },
  );
  document.nodes = [group, image, audio];
  document.edges = [
    {
      id: "edge",
      source: image.id,
      target: audio.id,
      sourceHandle: null,
      targetHandle: "reference",
    },
  ];
  const serialized = serializeDocument(document);
  assert.equal(serialized.ok, true);
  if (!serialized.ok) return;
  const restored = parseDocument(serialized.value);
  assert.deepEqual(restored, { ok: true, value: document });
});

test("persisted boundary rejects malformed shapes, duplicate IDs and non-finite geometry", () => {
  const document = createDocument();
  const node = createNode("image");
  const invalid = [
    null,
    [],
    { ...document, version: 2 },
    { ...document, nodes: [node, node] },
    { ...document, nodes: [{ ...node, position: { x: Infinity, y: 0 } }] },
    { ...document, nodes: [{ ...node, width: -1 }] },
    { ...document, viewport: { x: 0, y: 0, zoom: 0 } },
    { ...document, settings: { ...document.settings, count: 9 } },
    {
      ...document,
      settings: { ...document.settings, mode: { toString: () => "image" } },
    },
    {
      ...document,
      nodes: [{ ...node, data: { ...node.data, kind: "video" } }],
    },
    {
      ...document,
      nodes: [node],
      edges: [{ id: "bad", source: node.id, target: "missing" }],
    },
  ];
  for (const value of invalid) assert.equal(parseDocument(value).ok, false);
  assert.equal(parseDocument("{broken").ok, false);
});

test("orphan parents and cycles are rejected, without changing the supplied object", () => {
  const a = createNode("group");
  const b = createNode("group");
  const document = {
    ...createDocument(),
    nodes: [
      { ...a, parentId: b.id },
      { ...b, parentId: a.id },
    ],
  };
  assert.equal(parseDocument(document).ok, false);
  assert.equal(document.nodes[0]!.parentId, b.id);
  assert.equal(
    parseDocument({ ...document, nodes: [{ ...a, parentId: "missing" }] }).ok,
    false,
  );
});

test("temporary blob media is rejected explicitly instead of pretending it will survive reload", async () => {
  const document = {
    ...createDocument(),
    nodes: [createNode("video", { x: 0, y: 0 }, { src: "blob:local-session" })],
  };
  const serialized = serializeDocument(document);
  assert.equal(serialized.ok, false);
  if (!serialized.ok) assert.equal(serialized.error.code, "transient-media");
  const saved = await saveDocument(document);
  assert.equal(saved.ok, false);
  if (!saved.ok) assert.equal(saved.error.code, "transient-media");
  assert.equal(document.nodes[0]!.data.src, "blob:local-session");
});

test("a missing IndexedDB environment reports storage unavailability to the caller", async () => {
  const loaded = await loadDocument("not-present");
  assert.equal(loaded.ok, false);
  if (!loaded.ok) assert.equal(loaded.error.code, "unavailable");
});
