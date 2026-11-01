import { h } from "./module-FOT.js";
const r = {
  image: {
    key: "reference_validation_material_image",
    defaultMessage: "{num, plural, other {图片}}",
  },
  video: {
    key: "reference_validation_material_video",
    defaultMessage: "{num, plural, other {视频}}",
  },
  audio: {
    key: "reference_validation_material_audio",
    defaultMessage: "{num, plural, other {音频}}",
  },
};
const a = {
  key: "reference_validation_material_any",
  defaultMessage: "{num, plural, other {素材}}",
};
export function f(e) {
  const { type, count } = e;
  if (type) {
    return h(r[type], {
      num: count,
    });
  }
  return h(a, {
    num: count,
  });
}
