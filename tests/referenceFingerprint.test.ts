import assert from "node:assert/strict";
import test from "node:test";
import { createNode } from "../src/canvas/model.ts";
import { nodeReferenceAsset } from "../src/canvas/generationReferenceContent.ts";
import {
  canSourceReference,
  referenceMaterial,
} from "../src/canvas/connectionPolicy.ts";

test("layout and relation changes do not rescan unchanged embedded media", () => {
  const node = createNode("image", undefined, {
    src: "data:image/png;base64," + "abcd".repeat(10000),
    title: "Original",
  });
  const original = String.prototype.charCodeAt;
  let reads = 0;
  String.prototype.charCodeAt = function (this: string, index: number) {
    reads++;
    return original.call(this, index);
  };
  try {
    const first = nodeReferenceAsset(node, "first relation");
    assert.ok(reads > 40000);
    const scanned = reads;
    for (let index = 0; index < 30; index++) {
      const moved = {
        ...node,
        position: { x: index, y: index * 2 },
        width: 200 + index,
      };
      const next = nodeReferenceAsset(moved, "another relation");
      assert.equal(next.fingerprint, first.fingerprint);
      assert.equal(next.referenceId, "another relation");
    }
    assert.equal(
      reads,
      scanned,
      "drag frames must not reread media characters",
    );
    node.data.title = "Renamed";
    assert.equal(nodeReferenceAsset(node).name, "Renamed");
    assert.equal(reads, scanned);
    const copy = nodeReferenceAsset({ ...node, id: "independent copy" });
    assert.notEqual(copy.fingerprint, first.fingerprint);
    assert.equal(
      reads,
      scanned,
      "equal data may share computation, not logical identity",
    );
    node.data.src += "AAAA";
    assert.notEqual(nodeReferenceAsset(node).fingerprint, first.fingerprint);
    assert.ok(
      reads > scanned,
      "real content changes must invalidate the digest",
    );
  } finally {
    String.prototype.charCodeAt = original;
  }
});

test("text, availability and actual byte changes invalidate cached metadata", () => {
  const node = createNode("text", undefined, { text: "first" });
  const first = nodeReferenceAsset(node);
  node.data.text = "second 文本";
  const second = nodeReferenceAsset(node);
  assert.notEqual(second.fingerprint, first.fingerprint);
  assert.equal(second.size, new TextEncoder().encode(node.data.text).length);
  node.data.byteSize = 100;
  assert.equal(nodeReferenceAsset(node).size, 100);
  node.data.assetState = "missing";
  assert.notEqual(nodeReferenceAsset(node).fingerprint, second.fingerprint);
  node.data.assetState = "ready";
  assert.equal(nodeReferenceAsset(node).fingerprint, second.fingerprint);
});

test("subject main, auxiliary and voice mutations refresh the source fingerprint", () => {
  const node = createNode("subject", undefined, {
    subject: {
      category: "character",
      description: "Description",
      main: { id: "main", kind: "image", title: "Main", src: "main image" },
      auxiliaries: [
        {
          id: "auxiliary",
          kind: "image",
          title: "Auxiliary",
          src: "auxiliary image",
        },
      ],
      voice: { id: "voice", kind: "audio", title: "Voice", src: "voice" },
    },
  });
  const subject = node.data.subject!;
  let before = nodeReferenceAsset(node).fingerprint;
  subject.description = "Changed description";
  assert.equal(nodeReferenceAsset(node).fingerprint, before);
  for (const resource of [
    subject.main!,
    subject.auxiliaries[0]!,
    subject.voice!,
  ]) {
    resource.src += " changed";
    const current = nodeReferenceAsset(node).fingerprint;
    assert.notEqual(current, before);
    before = current;
  }
  subject.auxiliaries = [];
  assert.notEqual(nodeReferenceAsset(node).fingerprint, before);
});

test("reference eligibility does not serialize subject media", () => {
  const node = createNode("subject", undefined, {
    subject: {
      category: "character",
      description: "",
      main: { id: "main", kind: "image", title: "Image", src: "media" },
      auxiliaries: [],
    },
  });
  const original = JSON.stringify;
  let calls = 0;
  JSON.stringify = ((
    value: unknown,
    replacer?: any,
    space?: string | number,
  ) => {
    calls++;
    return original(value, replacer, space);
  }) as typeof JSON.stringify;
  try {
    for (let index = 0; index < 50; index++)
      assert.equal(canSourceReference(node), true);
    assert.equal(calls, 0);
    assert.equal(referenceMaterial(node), '["media",null]');
    assert.equal(
      calls,
      1,
      "full material serialization is reserved for explicit content reads",
    );
    node.data.assetState = "missing";
    assert.equal(canSourceReference(node), false);
  } finally {
    JSON.stringify = original;
  }
});
