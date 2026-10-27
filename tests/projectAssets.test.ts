import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import {
  projectAssets,
  resourceNodeData,
} from "../src/canvas/projectAssets.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";

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
