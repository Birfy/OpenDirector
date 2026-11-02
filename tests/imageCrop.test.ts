import assert from "node:assert/strict";
import test from "node:test";
import {
  INITIAL_CROP_OPTIONS,
  parseImageCrop,
} from "../src/canvas/imageCrop.ts";

const crop = {
  src: "data:image/png;base64,a",
  width: 240,
  height: 180,
  options: {
    ...INITIAL_CROP_OPTIONS,
    rotation: 90 as const,
    aspect: "4:3" as const,
  },
};
test("crop boundaries retain editable options and reject remote sources and invalid parameters", () => {
  assert.deepEqual(parseImageCrop(crop), crop);
  for (const invalid of [
    { ...crop, src: "https://external.example/source.png" },
    { ...crop, src: "blob:null/123" },
    { ...crop, width: 0 },
    { ...crop, options: { ...crop.options, rotation: 45 } },
    { ...crop, options: { ...crop.options, brightness: Infinity } },
    { ...crop, options: { ...crop.options, freeWidth: 0 } },
  ])
    assert.throws(() => parseImageCrop(invalid));
});
