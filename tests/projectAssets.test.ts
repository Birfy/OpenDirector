import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import {
  projectAssets,
  resourceNodeData,
} from "../src/canvas/projectAssets.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";
import { parseNodeData, sameNodeData } from "../src/canvas/dataBoundary.ts";

test("cross-project copies include nested media, deduplicate sources and detach foreign node IDs", () => {
  const document = createDocument("source");
  const image = {
    id: "image-resource",
    nodeId: "foreign-node",
    kind: "image" as const,
    title: "image",
    src: "data:image/png;base64,aGVsbG8=",
    width: 200,
    height: 100,
    mimeType: "image/png",
  };
  const audio = {
    id: "audio-resource",
    kind: "audio" as const,
    title: "voice",
    src: "data:audio/wav;base64,aGVsbG8=",
    durationSeconds: 3,
    mimeType: "audio/wav",
  };
  document.nodes = [
    createNode("image", { x: 0, y: 0 }, resourceNodeData(image)),
    createNode(
      "subject",
      { x: 400, y: 0 },
      {
        subject: {
          description: "",
          category: "",
          main: image,
          auxiliaries: [],
          voice: audio,
        },
      },
    ),
  ];
  image.nodeId = document.nodes[0]!.id;
  const before = structuredClone(document);
  const saved = serializeDocument(document);
  assert.ok(saved.ok, saved.ok ? "" : saved.error.message);
  const loaded = parseDocument(saved.value);
  assert.ok(loaded.ok);
  assert.equal(loaded.value.nodes[0]!.data.mediaRole, "asset");
  const assets = projectAssets(loaded.value);
  assert.equal(assets.length, 2);
  assert.ok(assets.every((asset) => asset.nodeId === undefined));
  const destination = createDocument("destination");
  destination.nodes = assets.map((asset, i) =>
    createNode(asset.kind, { x: i * 400, y: 0 }, resourceNodeData(asset)),
  );
  const copy = serializeDocument(destination);
  assert.ok(copy.ok);
  assert.equal(destination.nodes[1]!.data.media!.durationSeconds, 3);
  assert.equal(destination.nodes[0]!.data.media!.width, 200);
  assert.deepEqual(document, before);
});

test("media purpose survives storage and undo comparisons without guessing legacy provenance", () => {
  const node = createNode("video");
  assert.equal(node.data.mediaRole, "generation");
  const parsed = parseNodeData(node.type, node.data);
  assert.ok(parsed.ok);
  assert.equal(parsed.value.mediaRole, "generation");
  assert.equal(
    sameNodeData(node.data, { ...node.data, mediaRole: "asset" }),
    false,
  );
  const { mediaRole: _oldRole, ...legacy } = node.data;
  const old = parseNodeData(node.type, legacy);
  assert.ok(old.ok);
  assert.equal(old.value.mediaRole, undefined);
  assert.equal(
    parseNodeData(node.type, { ...node.data, mediaRole: "unknown" }).ok,
    false,
  );
});
