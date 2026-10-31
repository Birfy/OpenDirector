import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { assistantReferences } from "../src/canvas/assistantReferences.ts";
import { subjectReferenceNodes } from "../src/canvas/subjectReferences.ts";
import {
  canSourceReference,
  referenceMaterial,
} from "../src/canvas/connectionPolicy.ts";
import { nodeReferenceAsset } from "../src/canvas/generationReferenceContent.ts";
import {
  pendingCanvasReferences,
  samePendingReferences,
} from "../src/canvas/pendingCanvasReferences.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";

function subject() {
  return createNode("subject", undefined, {
    title: "Actor",
    subject: {
      description: "Private user note: never send this to a model",
      category: "character",
      main: {
        id: "main",
        assetId: "main-asset",
        kind: "image",
        title: "Portrait",
        src: "main image",
      },
      auxiliaries: [
        { id: "aux", kind: "image", title: "Side", src: "side image" },
      ],
      voice: {
        id: "voice",
        kind: "audio",
        title: "Voice",
        src: "voice",
        durationSeconds: 3,
      },
    },
  });
}

test("subject references contain only media and never carry the user annotation", () => {
  const node = subject();
  const references = assistantReferences([node]);
  assert.deepEqual(
    references.map((r) => [r.kind, r.sourceRole]),
    [
      ["image", "main"],
      ["image", "auxiliary:0"],
      ["audio", "voice"],
    ],
  );
  assert.ok(references.every((ref) => ref.text === undefined));
  const inputs = subjectReferenceNodes(node);
  assert.deepEqual(
    inputs.map((n) => n.type),
    ["image", "image", "audio"],
  );
  assert.equal(inputs[0]!.data.backendAssetId, "main-asset");
  assert.ok(
    inputs.every(
      (input) =>
        input.data.subject === undefined && input.data.text === undefined,
    ),
  );
  assert.ok(
    !JSON.stringify([references, inputs]).includes(
      node.data.subject!.description,
    ),
  );
});

test("description-only and unavailable subjects cannot provide chat or generation references", () => {
  const node = subject();
  node.data.subject!.main = undefined;
  assert.equal(canSourceReference(node), false);
  assert.equal(referenceMaterial(node), null);
  assert.deepEqual(assistantReferences([node]), []);
  assert.deepEqual(subjectReferenceNodes(node), []);
  assert.ok(pendingCanvasReferences([node])[0]!.error);
  const missing = subject();
  missing.data.assetState = "missing";
  assert.deepEqual(assistantReferences([missing]), []);
  assert.deepEqual(subjectReferenceNodes(missing), []);
});

test("editing a user annotation preserves reference identity while persisting the note", () => {
  const node = subject();
  const original = assistantReferences([node]);
  const fingerprint = nodeReferenceAsset(node).fingerprint;
  const material = referenceMaterial(node);
  const staged = pendingCanvasReferences([node]);
  const changed = {
    ...node,
    data: {
      ...node.data,
      subject: {
        ...node.data.subject!,
        description: "Updated user note",
      },
    },
  };
  assert.deepEqual(assistantReferences([changed]), original);
  assert.equal(nodeReferenceAsset(changed).fingerprint, fingerprint);
  assert.equal(referenceMaterial(changed), material);
  assert.equal(
    samePendingReferences(staged, pendingCanvasReferences([changed])),
    true,
  );
  const saved = serializeDocument({ ...createDocument(), nodes: [changed] });
  assert.ok(saved.ok);
  const restored = parseDocument(saved.value);
  assert.ok(restored.ok);
  assert.equal(
    restored.value.nodes[0]!.data.subject!.description,
    "Updated user note",
  );
  assert.deepEqual(assistantReferences(restored.value.nodes), original);
});
