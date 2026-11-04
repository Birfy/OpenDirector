import test from "node:test";
import assert from "node:assert/strict";
import { displayNodeTitle } from "../src/canvas/nodeTitle.ts";

test("default node names follow the active locale in both directions", () => {
  assert.equal(displayNodeTitle("video", "视频 1", "en-US"), "Video 1");
  assert.equal(displayNodeTitle("video", "Video 1", "zh-CN"), "视频 1");
  assert.equal(displayNodeTitle("image", "图片", "en-US"), "Image");
  assert.equal(displayNodeTitle("group", "分组 2", "en-US"), "Group 2");
});

test("custom names, empty names and non-default numbering stay intact", () => {
  assert.equal(displayNodeTitle("video", "Opening shot", "zh-CN"), "Opening shot");
  assert.equal(displayNodeTitle("video", "视频 1 副本", "en-US"), "视频 1 副本");
  assert.equal(displayNodeTitle("video", "", "en-US"), "Video");
  assert.equal(displayNodeTitle("video", "Video 0", "zh-CN"), "Video 0");
});
