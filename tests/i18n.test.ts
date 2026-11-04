import assert from "node:assert/strict";
import { test } from "node:test";
import { translate } from "../src/i18n/messages.ts";
import { zhCN } from "../src/i18n/messages/zh-CN/index.ts";
import { enUS } from "../src/i18n/messages/en-US/index.ts";
import { isLocale } from "../src/i18n/locale.ts";

test("both catalogs expose exactly the same keys", () => {
  assert.deepEqual(Object.keys(enUS).sort(), Object.keys(zhCN).sort());
});

test("translates stable keys in both locales", () => {
  assert.equal(translate("zh-CN", "timeline.track.video"), "画面轨");
  assert.equal(translate("en-US", "timeline.track.video"), "Video track");
});

test("interpolates named parameters", () => {
  assert.equal(
    translate("zh-CN", "timeline.track.audioNumber", { number: 3 }),
    "音频轨 3",
  );
  assert.equal(
    translate("en-US", "timeline.track.audioNumber", { number: 3 }),
    "Audio track 3",
  );
});

test("selects English plurals by count", () => {
  assert.equal(
    translate("en-US", "assistant.reply.showEarlier", { count: 1 }),
    "Show 1 earlier call",
  );
  assert.equal(
    translate("en-US", "assistant.reply.showEarlier", { count: 2 }),
    "Show 2 earlier calls",
  );
});

test("recognizes supported locale values only", () => {
  assert.equal(isLocale("zh-CN"), true);
  assert.equal(isLocale("en-US"), true);
  assert.equal(isLocale("en"), false);
  assert.equal(isLocale(null), false);
});
