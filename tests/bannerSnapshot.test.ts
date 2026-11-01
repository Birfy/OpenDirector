import { test } from "node:test";
import assert from "node:assert/strict";
import {
  parseBannerSnapshot,
  parseBannerSnapshotText,
  serializeBannerSnapshot,
} from "../src/domain/bannerSnapshot.ts";

const snapshot = (action: Record<string, unknown>) => ({
  version: 1,
  items: [{ id: "one", title: "A card", action }],
});

test("SSR snapshot round trip preserves source text, extra item fields and optional omission", () => {
  const input = {
    items: [
      {
        id: " one ",
        title: "</script>\u2028\u2029",
        extra: 42,
        action: { type: "tool", toolKey: "image" },
      },
    ],
    source: "",
  };
  const serialized = serializeBannerSnapshot(input);
  assert.equal(serialized.includes("<"), false);
  assert.equal(serialized.includes("\u2028"), false);
  assert.equal(serialized.includes("\u2029"), false);
  const result = parseBannerSnapshotText(serialized);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.deepEqual(result.value.items, input.items);
  assert.equal(result.value.source, "");
  assert.equal("panelKeys" in result.value, false);
});

test("untrusted boundary rejects malformed JSON, wrong versions, duplicate IDs and null optional text", () => {
  const valid = snapshot({ type: "link", url: "/create", target: "same_tab" });
  assert.equal(parseBannerSnapshotText("{").ok, false);
  assert.equal(parseBannerSnapshot({ ...valid, version: 2 }).ok, false);
  assert.equal(
    parseBannerSnapshot({ ...valid, items: [...valid.items, ...valid.items] })
      .ok,
    false,
  );
  assert.equal(parseBannerSnapshot({ ...valid, source: null }).ok, false);
  assert.equal(parseBannerSnapshot({ ...valid, panelKeys: [""] }).ok, false);
});

test("canvas rules respect range defaults, integral dimensions and finite sizes", () => {
  const action = {
    type: "canvas_tool",
    url: "/canvas",
    capability: "edit",
    mediaType: "image",
  };
  assert.equal(parseBannerSnapshot(snapshot(action)).ok, true);
  assert.equal(
    parseBannerSnapshot(snapshot({ ...action, inputRules: { minCount: 2 } }))
      .ok,
    false,
  );
  assert.equal(
    parseBannerSnapshot(
      snapshot({ ...action, inputRules: { minCount: 2, maxCount: 3 } }),
    ).ok,
    true,
  );
  for (const inputRules of [
    { maxCount: 0 },
    { minWidth: 1.5 },
    { minWidth: 200, maxWidth: 100 },
    { minSizeMB: Infinity },
  ]) {
    assert.equal(
      parseBannerSnapshot(snapshot({ ...action, inputRules })).ok,
      false,
    );
  }
});

test("generation variants preserve the observed digitalHuman special case and reference requirements", () => {
  const action = { type: "generation", generateType: "image" };
  assert.equal(
    parseBannerSnapshot(
      snapshot({
        ...action,
        referenceImages: [{ imageUri: "img:1", imageUrl: "" }],
      }),
    ).ok,
    true,
  );
  assert.equal(
    parseBannerSnapshot(
      snapshot({ ...action, referenceImages: [{ imageUri: "  " }] }),
    ).ok,
    false,
  );
  assert.equal(
    parseBannerSnapshot(snapshot({ ...action, durationSeconds: 0 })).ok,
    false,
  );
  assert.equal(
    parseBannerSnapshot(snapshot({ ...action, generateCount: 0.5 })).ok,
    false,
  );
  assert.equal(
    parseBannerSnapshot(
      snapshot({ ...action, generateType: "digitalHuman", durationSeconds: 0 }),
    ).ok,
    true,
  );
});

test("action validation is shape checking and does not pretend to sanitize or execute URLs", () => {
  assert.equal(
    parseBannerSnapshot(
      snapshot({ type: "link", url: "custom:opaque", target: "new_tab" }),
    ).ok,
    true,
  );
  assert.equal(
    parseBannerSnapshot(snapshot({ type: "unrecognized" })).ok,
    false,
  );
});
