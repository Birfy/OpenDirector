import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";

test("shared embedded video is stored once across nodes and timeline snapshots", () => {
  const src = "data:video/mp4;base64," + "YQ==".repeat(32768);
  const video = createNode(
    "video",
    { x: 0, y: 0 },
    { src, mimeType: "video/mp4" },
  );
  const timeline = createNode("timeline");
  timeline.data.timeline!.tracks[0]!.clips.push({
    id: "clip",
    resource: { id: "media", kind: "video", title: "Video", src },
    inPoint: 0,
    outPoint: 8,
    speed: 1,
    volume: 1,
    muted: false,
  });
  const document = { ...createDocument(), nodes: [video, timeline] };
  const encoded = serializeDocument(document);
  assert.equal(encoded.ok, true);
  if (!encoded.ok) return;
  const wire = JSON.parse(encoded.value);
  assert.equal(wire.version, 2);
  assert.deepEqual(wire.mediaSources, [src]);
  assert.equal(wire.nodes[0].data.src, "opendirector-media:0");
  assert.ok(encoded.value.length < src.length + 10000);
  const canonical = parseDocument(document);
  assert.deepEqual(parseDocument(wire), canonical);
  assert.deepEqual(parseDocument(encoded.value), canonical);
  assert.equal(wire.nodes[0].data.src, "opendirector-media:0");
  assert.equal(video.data.src, src);
});

test("legacy and unique media documents keep their original format", () => {
  const doc = {
    ...createDocument(),
    nodes: [
      createNode(
        "image",
        { x: 0, y: 0 },
        { src: "data:image/png;base64," + "YQ==".repeat(32768) },
      ),
    ],
  };
  const encoded = serializeDocument(doc);
  assert.equal(encoded.ok, true);
  if (encoded.ok) {
    assert.equal(JSON.parse(encoded.value).version, 1);
    assert.deepEqual(parseDocument(encoded.value), { ok: true, value: doc });
  }
});

test("invalid shared media references fail without mutating the supplied document", () => {
  const doc = {
    ...createDocument(),
    version: 2,
    mediaSources: ["data:image/png;base64,YQ=="],
    nodes: [createNode("image", { x: 0, y: 0 }, { src: "opendirector-media:0" })],
  };
  for (const src of [
    "opendirector-media:1",
    "opendirector-media:-1",
    "opendirector-media:0.5",
    "opendirector-media:00",
  ])
    assert.equal(
      parseDocument({
        ...doc,
        nodes: [{ ...doc.nodes[0], data: { ...doc.nodes[0]!.data, src } }],
      }).ok,
      false,
    );
  for (const mediaSources of [
    [],
    ["blob:temporary"],
    ["https://example.com/image.png"],
    [null],
  ])
    assert.equal(parseDocument({ ...doc, mediaSources }).ok, false);
  assert.equal(doc.nodes[0]!.data.src, "opendirector-media:0");
});
