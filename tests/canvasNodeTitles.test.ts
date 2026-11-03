import assert from "node:assert/strict";
import test from "node:test";
import {
  applyCommand,
  createDocument,
  createNode,
  derivedNodeTitle,
  nextNodeTitle,
  takenNodeTitles,
  type CanvasNodeKind,
} from "../src/canvas/model.ts";
import { createHistory, executeCommand } from "../src/canvas/history.ts";
import { copySelection, pasteFragment } from "../src/canvas/operations.ts";
import { placeResults } from "../src/canvas/linkedResults.ts";

test("hidden sources reserve their default numbers and retain titles when restored", () => {
  const nodes = Array.from({ length: 4 }, (_, index) =>
    createNode("image", undefined, { title: `图片 ${index + 1}` }),
  );
  const initial = { ...createDocument(), nodes };
  const hidden = applyCommand(initial, {
    type: "hide-nodes",
    ids: [nodes[0].id],
  });
  const added = applyCommand(hidden, {
    type: "add-nodes",
    nodes: [createNode("image")],
    titlePrefix: "图片",
  });
  assert.equal(added.nodes.at(-1)!.data.title, "图片 5");
  const restored = applyCommand(added, {
    type: "add-nodes",
    nodes: [nodes[0]],
  });
  assert.deepEqual(
    restored.nodes.map((node) => node.data.title),
    ["图片 2", "图片 3", "图片 4", "图片 5", "图片 1"],
  );
  assert.equal(restored.hiddenNodes?.length, 0);
  assert.equal(initial.nodes[0].data.title, "图片 1");
});

test("number gaps, hidden highest numbers, and custom titles do not cause collisions", () => {
  const document = {
    ...createDocument(),
    nodes: [
      createNode("image", undefined, { title: "图片 3" }),
      createNode("image", undefined, { title: "封面 2026" }),
      createNode("image", undefined, { title: "图片 12 草稿" }),
      createNode("text", undefined, { title: "图片 10" }),
      createNode("text", undefined, { title: "图片 999" }),
    ],
    hiddenNodes: [createNode("image", undefined, { title: "图片 9" })],
  };
  const before = structuredClone(document);
  assert.equal(nextNodeTitle(document, "image", "图片"), "图片 11");
  assert.deepEqual(document, before);
  assert.equal(
    nextNodeTitle({ ...document, hiddenNodes: [] }, "image", "图片"),
    "图片 4",
  );
});

test("queued and batched creations allocate names from the latest applied state", () => {
  const document = {
    ...createDocument(),
    hiddenNodes: [createNode("image", undefined, { title: "图片 4" })],
  };
  // Both commands were prepared from the same state before a UI rerender.
  const pending = [0, 1].map(() => ({
    type: "add-nodes" as const,
    nodes: [createNode("image", undefined, { title: "图片 5" })],
    titlePrefix: "图片",
  }));
  let history = createHistory(document);
  for (const command of pending) history = executeCommand(history, command);
  assert.deepEqual(
    history.present.nodes.map((node) => node.data.title),
    ["图片 5", "图片 6"],
  );
  const batch = applyCommand(document, {
    type: "add-nodes",
    nodes: pending.flatMap((command) => command.nodes),
    titlePrefix: "图片",
  });
  assert.deepEqual(
    batch.nodes.map((node) => node.data.title),
    ["图片 5", "图片 6"],
  );
  assert.equal(pending[1].nodes[0].data.title, "图片 5");
});

test("explicit and imported titles remain unchanged, including existing duplicates", () => {
  const document = {
    ...createDocument(),
    nodes: [createNode("image", undefined, { title: "图片 4" })],
  };
  const imported = createNode("image", undefined, { title: "图片 4" });
  const custom = createNode("image", undefined, { title: "封面" });
  const result = applyCommand(document, {
    type: "add-nodes",
    nodes: [imported, custom],
  });
  assert.deepEqual(
    result.nodes.map((node) => node.data.title),
    ["图片 4", "图片 4", "封面"],
  );
});

test("default numbering applies to all node kinds and handles long numeric suffixes", () => {
  const kinds: CanvasNodeKind[] = [
    "image",
    "video",
    "audio",
    "text",
    "file",
    "group",
    "timeline",
    "subject",
    "stack",
    "tool",
    "external",
  ];
  for (const kind of kinds) {
    const label = `类型 (${kind})`;
    const document = {
      ...createDocument(),
      hiddenNodes: [createNode(kind, undefined, { title: `${label} 12` })],
    };
    assert.equal(nextNodeTitle(document, kind, label), `${label} 13`);
    assert.equal(nextNodeTitle(createDocument(), kind, label), `${label} 1`);
  }
  const document = {
    ...createDocument(),
    nodes: [createNode("image", undefined, { title: "图片 9007199254740992" })],
  };
  assert.equal(
    nextNodeTitle(document, "image", "图片"),
    "图片 9007199254740993",
  );
});

test("copies and derived results never reuse the source title", () => {
  const source = createNode("video", undefined, {
    title: "无声视频",
    src: "blob:video",
    mimeType: "video/mp4",
    mediaRole: "asset",
  });
  const document = { ...createDocument(), nodes: [source] };
  const titles = takenNodeTitles(document);
  assert.equal(derivedNodeTitle("无声视频", titles), "无声视频 2");
  assert.equal(derivedNodeTitle("无声视频", titles), "无声视频 3");
  assert.equal(derivedNodeTitle("全新素材", titles), "全新素材");
  // Numbered names continue their own series instead of stacking suffixes.
  const numbered = {
    ...createDocument(),
    nodes: [
      createNode("video", undefined, { title: "视频 2" }),
      createNode("video", undefined, { title: "视频 3" }),
    ],
  };
  assert.equal(derivedNodeTitle("视频 2", takenNodeTitles(numbered)), "视频 4");

  const pasted = pasteFragment(document, copySelection(document, [source.id]));
  assert.deepEqual(
    pasted.document.nodes.map((node) => node.data.title),
    ["无声视频", "无声视频 2"],
  );
  const twice = pasteFragment(
    pasted.document,
    copySelection(pasted.document, [source.id]),
  );
  assert.deepEqual(
    twice.document.nodes.map((node) => node.data.title),
    ["无声视频", "无声视频 2", "无声视频 3"],
  );

  const [result] = placeResults(
    document,
    [
      {
        kind: "video",
        title: "无声视频",
        src: "blob:edited",
        mimeType: "video/mp4",
        byteSize: 10,
      },
    ],
    { x: 0, y: 0 },
  );
  assert.equal(result?.data.title, "无声视频 2");
});
