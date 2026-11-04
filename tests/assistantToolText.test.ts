import test from "node:test";
import assert from "node:assert/strict";
import { assistantToolText } from "../src/canvas/assistantToolText.ts";
import { setActiveLocale } from "../src/i18n/messages.ts";

test("agent tool errors never show Chinese in the English reply card", () => {
  setActiveLocale("en-US");
  assert.equal(
    assistantToolText("本轮工具入口已关闭。"),
    "The tool entry point is closed for this turn.",
  );
  assert.equal(
    assistantToolText("只能读取不超过 64 KB 的文本素材。"),
    "Only text assets up to 64 KB can be read.",
  );
  assert.equal(
    assistantToolText("新的中文错误"),
    "The tool failed. Expand the details.",
  );
  assert.equal(
    assistantToolText("provider returned 500"),
    "provider returned 500",
  );
  setActiveLocale("zh-CN");
  assert.equal(assistantToolText("本轮工具入口已关闭。"), "本轮工具入口已关闭。");
});
