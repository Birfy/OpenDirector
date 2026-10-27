import assert from "node:assert/strict";
import test from "node:test";
import { createNode } from "../src/canvas/model.ts";
import { searchNodes } from "../src/canvas/nodeSearch.ts";

test("search categories count the same normalized query across title, prompt and text", () => {
  const image = createNode("image", undefined, { title: "Beach" });
  const video = createNode("video", undefined, {
    title: "镜头",
    prompt: "beach at dawn",
  });
  const text = createNode("text", undefined, {
    title: "笔记",
    text: "BEACH details",
  });
  const other = createNode("audio", undefined, { title: "风声" });
  const result = searchNodes([image, video, text, other], "  beach  ", "image");
  assert.deepEqual(result.nodes, [image]);
  assert.equal(result.counts.all, 3);
  assert.equal(result.counts.image, 1);
  assert.equal(result.counts.video, 1);
  assert.equal(result.counts.text, 1);
  assert.equal(result.counts.audio, 0);
  assert.equal(searchNodes([image, video], "不存在", "all").counts.all, 0);
});

test("other includes local files, stacks and director stages and categories follow document changes", () => {
  const nodes = [
    createNode("file"),
    createNode("stack"),
    createNode("external"),
    createNode("tool"),
  ];
  assert.deepEqual(searchNodes(nodes, "", "other").nodes, nodes.slice(0, 3));
  assert.equal(searchNodes(nodes, "", "all").counts.all, 4);
  assert.equal(searchNodes(nodes.slice(1), "", "other").counts.other, 2);
});
