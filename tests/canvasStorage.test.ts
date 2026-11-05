import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";

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
  assert.equal(document.nodes[0]!.data.src, "blob:local-session");
});

test("a node keeps its archive provenance through a document round trip", () => {
  // Losing this field is what made an imported generation node fall back to a
  // plain material: the reader dropped it and the importer had no evidence.
  const document = createDocument("来源往返");
  document.nodes = [
    createNode(
      "image",
      { x: 0, y: 0 },
      {
        src: "data:image/png;base64,aGVsbG8=",
        mimeType: "image/png",
        title: "图片生成.png",
        mediaRole: "generation",
        generationProvenance: {
          source: "generated",
          jobId: "6f1d1f3e-0000-4000-8000-000000000000",
          inputFingerprint: "a".repeat(64),
        },
      },
    ),
  ];
  const serialized = serializeDocument(document);
  assert.equal(serialized.ok, true);
  if (!serialized.ok) return;
  const parsed = parseDocument(serialized.value);
  assert.equal(parsed.ok, true);
  if (!parsed.ok) return;
  assert.deepEqual(parsed.value.nodes[0]!.data.generationProvenance, {
    source: "generated",
    jobId: "6f1d1f3e-0000-4000-8000-000000000000",
    inputFingerprint: "a".repeat(64),
  });
});

test("an unknown provenance source is rejected rather than trusted", () => {
  const document = createDocument("非法来源");
  document.nodes = [
    createNode(
      "image",
      { x: 0, y: 0 },
      {
        src: "data:image/png;base64,aGVsbG8=",
        mimeType: "image/png",
        title: "伪造.png",
        mediaRole: "generation",
      },
    ),
  ];
  const serialized = serializeDocument(document);
  assert.equal(serialized.ok, true);
  if (!serialized.ok) return;
  const raw = JSON.parse(serialized.value) as {
    nodes: { data: Record<string, unknown> }[];
  };
  raw.nodes[0]!.data.generationProvenance = { source: "forged" };
  assert.equal(parseDocument(raw).ok, false);
});
