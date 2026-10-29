import assert from "node:assert/strict";
import test from "node:test";
import { createNode } from "../src/canvas/model.ts";
import {
  insertMention,
  mentionCategories,
  mentionRange,
  nodeMentionOptions,
} from "../src/canvas/referenceMentions.ts";
import { uploadReferences } from "../src/backend/generation.ts";

test("a bare @ opens references; typing after it closes, and backspacing reopens", () => {
  const text = "参考 @";
  assert.deepEqual(mentionRange(text, text.length), { start: 3, end: 4 });
  for (const suffix of ["x", "主", " ", "\n", "@"]) {
    const edited = text + suffix;
    assert.equal(mentionRange(edited, edited.length), null);
    const backspaced = edited.slice(0, -suffix.length);
    assert.deepEqual(mentionRange(backspaced, backspaced.length), {
      start: 3,
      end: 4,
    });
  }
  for (const value of ["name@", "a.b@", "user+tag@", "50%@", "@@"])
    assert.equal(mentionRange(value, value.length), null);
  assert.equal(mentionRange("@", 0, 1), null);
  assert.deepEqual(mentionRange("@后文", 1), { start: 0, end: 1 });
  assert.deepEqual(mentionRange("中文@", 3), { start: 2, end: 3 });
});

test("reference insertion replaces only the caret range and keeps surrounding text", () => {
  const next = insertMention("前 @ 后", { start: 2, end: 3 }, "主角");
  assert.equal(next.value, "前 @主角  后");
  assert.equal(next.caret, 6);
  assert.equal(
    insertMention("前后", { start: 1, end: 1 }, "图片").value,
    "前@图片 后",
  );
  assert.equal(
    insertMention("替换我", { start: 0, end: 3 }, "视频").value,
    "@视频 ",
  );
});

test("upstream references exclude blank/missing/timeline nodes and include subjects", () => {
  const image = createNode("image", undefined, {
    title: "图片一",
    src: "data:image/png;base64,AA==",
  });
  const subject = createNode("subject", undefined, {
    title: "主角",
    subject: {
      description: "",
      category: "person",
      auxiliaries: [],
      main: { id: "main", title: "肖像", kind: "image", src: image.data.src },
    },
  });
  const text = createNode("text", undefined, { text: "参考正文" });
  const missing = createNode("audio", undefined, {
    src: "missing",
    assetState: "missing",
  });
  const options = nodeMentionOptions(
    [
      image,
      subject,
      text,
      missing,
      createNode("video"),
      createNode("timeline"),
    ],
    (node) => (node.type === "text" ? "模型不支持" : null),
  );
  assert.deepEqual(
    options.map((option) => option.kind),
    ["image", "subject", "text"],
  );
  assert.equal(options[1]!.thumbnail, image.data.src);
  assert.deepEqual(mentionCategories(options), ["all", "image", "subject"]);
  assert.deepEqual(mentionCategories([]), ["all"]);
});

test("repeated text mentions reuse identical current assets and upload new content once", async () => {
  const previousFetch = globalThis.fetch;
  const text = "同一份参考正文";
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  const fingerprint =
    "sha256:" +
    [...new Uint8Array(digest)]
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  const asset = {
    id: "text-asset",
    kind: "text",
    name: "正文.md",
    fingerprint,
  };
  let available = [asset],
    writes = 0,
    placements = 0;
  globalThis.fetch = async (url, init) => {
    const path = String(url);
    if (path.endsWith("/assets?current_only=true"))
      return Response.json(available);
    if (path.endsWith("/assets/text") && init?.method === "POST") {
      writes++;
      return Response.json(asset);
    }
    if (path.endsWith("/canvas/nodes") && init?.method === "POST") {
      placements++;
      return Response.json({});
    }
    throw new Error(`Unexpected request: ${path}`);
  };
  try {
    const references = [
      { kind: "text" as const, title: "正文", text },
      { kind: "text" as const, title: "再次提及", text },
    ];
    assert.deepEqual(
      await uploadReferences(
        "project",
        references,
        new AbortController().signal,
      ),
      [asset.id],
    );
    assert.equal(writes, 0);
    available = [];
    assert.deepEqual(
      await uploadReferences(
        "project",
        references,
        new AbortController().signal,
      ),
      [asset.id],
    );
    assert.equal(writes, 1);
    assert.equal(placements, 1);
  } finally {
    globalThis.fetch = previousFetch;
  }
});
