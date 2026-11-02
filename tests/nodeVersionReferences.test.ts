import assert from "node:assert/strict";
import test from "node:test";
import {
  applyCommand,
  createDocument,
  createNode,
} from "../src/canvas/model.ts";
import { incomingReferenceNodes } from "../src/canvas/generationReferenceContent.ts";
import { referenceContentCommand } from "../src/canvas/generationReferenceEdit.ts";
import {
  referenceIsOffCanvas,
  type ReferenceAsset,
} from "../src/canvas/chatReferenceContent.ts";

test("reference decoration tracks source visibility, not matching assets or history versions", () => {
  const visible = new Set(["current-source"]);
  const part = {
    type: "reference" as const,
    assetId: "asset",
    name: "Reference",
    nodeId: "hidden-source",
  };
  const asset: ReferenceAsset = {
    id: "asset",
    name: "Reference",
    type: "image/png",
    size: 1,
    fingerprint: "same",
    nodeId: "current-source",
  };
  assert.equal(referenceIsOffCanvas(part, asset, visible), true);
  assert.equal(
    referenceIsOffCanvas({ ...part, nodeId: "current-source" }, asset, visible),
    false,
  );
  const pinned = { ...part, binding: "asset" as const };
  assert.equal(
    referenceIsOffCanvas(
      pinned,
      { ...asset, logicalNodeId: "hidden-source" },
      visible,
    ),
    true,
  );
  assert.equal(
    referenceIsOffCanvas(
      pinned,
      { ...asset, logicalNodeId: "current-source" },
      visible,
    ),
    false,
  );
  assert.equal(
    referenceIsOffCanvas({ ...part, nodeId: undefined }, undefined, visible),
    true,
  );
});

test("fixed historical edge retains its identity while editing prompt and upstream content", () => {
  const source = createNode("text", undefined, {
    text: "new source",
    title: "Source",
  });
  const target = createNode("text", undefined, {
    title: "Target",
    text: "old output",
    prompt: "@Old text",
    promptContent: [
      {
        type: "reference",
        assetId: "old-asset",
        referenceId: "pin",
        binding: "asset",
        name: "Old text",
        fingerprint: "old",
      },
    ],
  });
  const doc = {
    ...createDocument(),
    nodes: [source, target],
    edges: [
      {
        id: "pin",
        source: source.id,
        target: target.id,
        referenceBinding: "pinned" as const,
      },
    ],
  };
  assert.deepEqual(incomingReferenceNodes(doc, target.id), []);
  const changed = applyCommand(doc, {
    type: "update-node",
    id: source.id,
    patch: { data: { text: "third source" } },
  });
  assert.deepEqual(
    changed.nodes[1]!.data.promptContent,
    target.data.promptContent,
  );
  const content = [
    ...target.data.promptContent!,
    { type: "text" as const, text: " more" },
  ];
  const edited = applyCommand(
    changed,
    referenceContentCommand(changed, target.id, content),
  );
  assert.equal(edited.edges[0]?.id, "pin");
  assert.deepEqual(edited.nodes[1]!.data.promptContent, content);
  const disconnected = applyCommand(edited, {
    type: "remove-edges",
    ids: ["pin"],
  });
  assert.equal(disconnected.edges.length, 0);
  assert.deepEqual(disconnected.nodes[1]!.data.promptContent, [
    { type: "text", text: " more" },
  ]);
  assert.equal(disconnected.nodes[0]!.data.text, "third source");
});
