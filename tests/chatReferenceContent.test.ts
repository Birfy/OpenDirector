import test from "node:test";
import assert from "node:assert/strict";
import {
  blankContent,
  contentText,
  referenceContent,
  referenceIds,
  type ReferenceAsset,
  type ReferenceContent,
} from "../src/canvas/chatReferenceContent.ts";
import { editContent, editingText } from "../src/canvas/chatReferenceDOM.ts";
import { referenceInsertion } from "../src/canvas/chatReferenceInsertion.ts";

const a: ReferenceAsset = {
  id: "a",
  name: "Same.png",
  type: "image/png",
  fingerprint: "fp-a",
  size: 50,
};
const b: ReferenceAsset = { ...a, id: "b", fingerprint: "fp-b" };
const rules = {
  allowedKinds: ["image", "video", "audio", "text"],
  maxImages: 64,
  imageBytes: 32 * 1024 * 1024,
};

test("references are atomic editing units interleaved with text, independent of labels", () => {
  const initial: ReferenceContent = [{ type: "text", text: "before after" }];
  const inserted = referenceInsertion(
    initial,
    { start: 7, end: 7 },
    [a, b],
    [],
    rules,
  );
  assert.equal(editingText(inserted.content), "before \ufffc\ufffcafter");
  assert.deepEqual(referenceIds(inserted.content), ["a", "b"]);
  assert.equal(
    contentText(inserted.content),
    "before ［参考1：Same.png］［参考2：Same.png］after",
  );
  assert.deepEqual(inserted.caret, { start: 9, end: 9 });
  const removed = editContent(inserted.content, { start: 8, end: 9 }, []);
  assert.deepEqual(referenceIds(removed), ["a"]);
  assert.equal(editingText(removed), "before \ufffcafter");
  assert.equal(editingText(initial), "before after");
});

test("unique assets retain first-mention order, repeated mentions remain individually positioned", () => {
  const positioned = referenceInsertion(
    [{ type: "text", text: "@" }],
    { start: 0, end: 1 },
    [b, a, b],
    [],
    rules,
  ).content;
  assert.deepEqual(referenceIds(positioned), ["b", "a"]);
  assert.equal(
    contentText(positioned),
    "［参考1：Same.png］［参考2：Same.png］［参考1：Same.png］",
  );
  assert.deepEqual(
    referenceContent("ignored", ["b", "a"], [a, b], positioned),
    positioned,
  );
  assert.deepEqual(
    referenceInsertion(
      positioned,
      { start: 3, end: 3 },
      [a],
      [a, b],
      rules,
      true,
    ).content,
    positioned,
  );
});

test("legacy attachment-only drafts migrate inside the body without losing text or assets", () => {
  const body = referenceContent("story", ["b", "a", "b"], [a, b]);
  assert.equal(editingText(body), "\ufffc \ufffc\nstory");
  assert.deepEqual(referenceIds(body), ["b", "a"]);
  assert.deepEqual(
    referenceContent(contentText(body), ["b", "a"], [a, b], body),
    body,
  );
});

test("over-limit and mismatched-version insertions reject the entire batch", () => {
  const body = referenceInsertion(
    [],
    { start: 0, end: 0 },
    [a],
    [],
    rules,
  ).content;
  assert.throws(
    () =>
      referenceInsertion(
        body,
        { start: 1, end: 1 },
        [{ ...a, fingerprint: "changed" }],
        [a],
        rules,
      ),
    /版本不同/,
  );
  assert.throws(
    () =>
      referenceInsertion(
        body,
        { start: 1, end: 1 },
        Array.from({ length: 64 }, (_, i) => ({ ...b, id: `asset-${i}` })),
        [a],
        rules,
      ),
    /整批未插入/,
  );
  assert.throws(
    () =>
      referenceInsertion(
        [{ type: "text", text: "x".repeat(19990) }],
        { start: 0, end: 0 },
        [a],
        [],
        rules,
      ),
    /整批未插入/,
  );
  assert.deepEqual(referenceIds(body), ["a"]);
});

test("line breaks and spaces left by deletion keep the editor empty", () => {
  assert.equal(blankContent([]), true);
  assert.equal(blankContent([{ type: "text", text: "\n" }]), true);
  assert.equal(blankContent([{ type: "text", text: " \n\t\u200b" }]), true);
  assert.equal(blankContent([{ type: "text", text: "第一行\n第二行" }]), false);
  assert.equal(
    blankContent([
      { type: "text", text: "\n" },
      { type: "reference", assetId: "a", name: "Same.png", fingerprint: null },
    ]),
    false,
  );
});
