import test from "node:test";
import assert from "node:assert/strict";
import {
  toolTaskError,
  toolTaskPhase,
} from "../src/canvas/toolTaskText.ts";
import { setActiveLocale } from "../src/i18n/messages.ts";

test("tool progress messages are localized, including counters", () => {
  setActiveLocale("en-US");
  assert.equal(toolTaskPhase("准备素材"), "Preparing media");
  assert.equal(
    toolTaskPhase("正在增强细节（2/4）"),
    "Enhancing details (2/4)",
  );
  assert.equal(toolTaskPhase("正在补帧到 60 fps"), "Interpolating to 60 fps");
  assert.equal(toolTaskPhase("正在识别并跟踪「猫、狗」"), 'Detecting and tracking "猫、狗"');
  assert.equal(toolTaskPhase("provider custom text"), "provider custom text");
  assert.equal(toolTaskPhase(null), undefined);
  setActiveLocale("zh-CN");
  assert.equal(toolTaskPhase("准备素材"), "准备素材");
});

test("tool task errors never leak persisted Chinese", () => {
  setActiveLocale("en-US");
  assert.equal(
    toolTaskError("服务重启，任务已中断，请重新提交。"),
    "The service restarted and the task was interrupted. Submit it again.",
  );
  assert.equal(
    toolTaskError("工具执行出错，请检查素材和参数后重试。"),
    "The tool failed. Check the media and parameters and try again.",
  );
  assert.equal(
    toolTaskError("unexpected provider exception"),
    "unexpected provider exception",
  );
  assert.equal(
    toolTaskError("新的中文错误"),
    "The tool task did not complete. Try again.",
  );
  assert.equal(toolTaskError(null), undefined);
  setActiveLocale("zh-CN");
});
