import test from "node:test";
import assert from "node:assert/strict";
import { createNode } from "../src/canvas/model.ts";
import {
  pendingCanvasReferences,
  pendingReferenceInsertion,
  samePendingReferences,
} from "../src/canvas/pendingCanvasReferences.ts";

test("staging keeps blank nodes and media information without treating generation prompts as saved text", () => {
  const video = createNode("video", undefined, {
    title: "镜头",
    src: "data:video/mp4,fixture",
  });
  const blank = createNode("image", undefined, { title: "空白节点" });
  const prompt = createNode("text", undefined, {
    prompt: "Not a saved output",
  });
  const missing = createNode("image", undefined, {
    src: "data:image/png,old",
    assetState: "missing",
  });
  const before = structuredClone([video, blank, prompt, missing]);
  const staged = pendingCanvasReferences([video, blank, prompt, missing]);
  assert.equal(staged.length, 4);
  assert.equal(staged[0]!.metadataOnly, true);
  assert.equal(staged[0]!.error, null);
  assert.match(staged[1]!.error!, /尚无已保存/);
  assert.match(staged[2]!.error!, /尚无已保存/);
  assert.match(staged[3]!.error!, /已丢失/);
  assert.throws(
    () => pendingReferenceInsertion("Keep the draft", 3, staged),
    /整批未插入/,
  );
  assert.deepEqual([video, blank, prompt, missing], before);
});

test("batch insertion keeps existing text, respects the clicked caret and rejects an overlong batch atomically", () => {
  const a = createNode("text", undefined, { title: "A", text: "Actual text" });
  const b = createNode("image", undefined, {
    title: "B",
    src: "data:image/png,fixture",
  });
  const items = pendingCanvasReferences([a, b]);
  const inserted = pendingReferenceInsertion("before after", 7, items);
  assert.equal(inserted.value, "before @A @B after");
  assert.equal(inserted.caret, 13);
  assert.equal(
    pendingReferenceInsertion("before after", 999, items).value,
    "before after @A @B ",
  );
  assert.throws(
    () => pendingReferenceInsertion("before after", 7, items, 15),
    /整批未插入/,
  );
  assert.throws(
    () =>
      pendingReferenceInsertion(
        "",
        0,
        Array.from({ length: 65 }, () => items[0]!),
      ),
    /最多添加 64/,
  );
});

test("same-named selected nodes retain separate identities; title and material changes invalidate preparation", () => {
  const a = createNode("text", undefined, { title: "Same", text: "one" }),
    b = createNode("text", undefined, { title: "Same", text: "two" });
  const selected = pendingCanvasReferences([a, b, a]);
  assert.deepEqual(
    selected.map((item) => item.nodeId),
    [a.id, b.id],
  );
  assert.equal(samePendingReferences([selected[0]!], [selected[1]!]), false);
  assert.equal(
    samePendingReferences(
      selected.slice(0, 1),
      pendingCanvasReferences([
        { ...a, data: { ...a.data, text: "new body" } },
      ]),
    ),
    false,
  );
  assert.equal(
    samePendingReferences(
      selected.slice(0, 1),
      pendingCanvasReferences([
        { ...a, data: { ...a.data, title: "Renamed" } },
      ]),
    ),
    false,
  );
  assert.equal(
    samePendingReferences(
      selected.slice(0, 1),
      pendingCanvasReferences([{ ...a, position: { x: 100, y: 100 } }]),
    ),
    true,
  );
});

test("subjects stage one node with its actual main image; description-only subjects cannot be inserted", () => {
  const subject = createNode("subject", undefined, {
    title: "角色",
    subject: { description: "角色描述", category: "person", auxiliaries: [] },
  });
  assert.match(pendingCanvasReferences([subject])[0]!.error!, /尚无已保存/);
  subject.data.subject!.main = {
    id: "main",
    kind: "image",
    title: "肖像",
    src: "data:image/png,fixture",
  };
  const staged = pendingCanvasReferences([subject])[0]!;
  assert.equal(staged.error, null);
  assert.equal(staged.thumbnail, subject.data.subject!.main.src);
  assert.equal(pendingReferenceInsertion("", 0, [staged]).value, "@角色 ");
});
