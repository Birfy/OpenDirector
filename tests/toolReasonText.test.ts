import test from "node:test";
import assert from "node:assert/strict";
import { toolReasonText } from "../src/canvas/toolReasonText.ts";
import { setActiveLocale } from "../src/i18n/messages.ts";

test("tool availability reasons are translated without leaking capability labels", () => {
  setActiveLocale("en-US");
  assert.equal(
    toolReasonText("需要接入具备「图像编辑、视频局部重绘」能力的模型。"),
    "Connect a model with these capabilities: image editing, video inpainting.",
  );
  assert.equal(
    toolReasonText("接入图像分割模型后可自动识别选区；仍可手动画选区。"),
    "Connect an image segmentation model to detect selections automatically; you can still draw one manually.",
  );
  assert.equal(toolReasonText("connect an image model"), "connect an image model");
  setActiveLocale("zh-CN");
  assert.equal(
    toolReasonText("需要接入具备「图像编辑」能力的模型。"),
    "需要接入具备「图像编辑」能力的模型。",
  );
});
