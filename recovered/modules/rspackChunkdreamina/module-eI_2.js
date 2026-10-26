import a from "NY";
import r from "HSE";
import n from "LLl";
import o from "A3X";
import { _ } from "./module-YBC_2.js";
import s from "yMd";
export function od(t) {
  let e;
  const i = t == null ? undefined : t.firstFrameImageAigcParams;
  if (i) {
    return {
      type: "image",
      modelReqKey: (e = i.modelConfig) == null ? undefined : e.modelReqKey,
    };
  }
}
export function Q5(t, e) {
  if (!t) {
    return false;
  }
  if (t.type === "video") {
    if (t.retired) {
      return false;
    }
    if (t.usesDedicatedGenerator || !t.modelReqKey) {
      return true;
    }
  }
  const i =
    t.type === "image"
      ? e == null
        ? undefined
        : e.imageModelConfigData.data
      : e == null
        ? undefined
        : e.videoModelConfigData.data;
  return !!(
    (i == null ? undefined : i.ok) &&
    i.value.modelList.some((e) => e.key === t.modelReqKey)
  );
}
export function aX(t, e) {
  return a._(function* () {
    return Q5(t, yield e.getInstance());
  })();
}
Object.defineProperty(exports, "RW", {
  enumerable: true,
  get: () =>
    function t(e) {
      const i =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (e) {
        if (r.J(e)) {
          return t(e.collection[i]);
        }
        if (n.Y(e)) {
          return {
            type: "image",
            modelReqKey: (a = e.modelInfo) == null ? undefined : a.modelReqKey,
          };
        }
        if (o.s(e)) {
          var a;
          let u;
          let c;
          let d;
          const h = e.aigcImageParams;
          const m = [
            h == null ? undefined : h.generateType,
            h == null ? undefined : h.firstGenerateType,
          ];
          return {
            type: "video",
            modelReqKey:
              h == null || (u = h.text2videoParams) == null
                ? undefined
                : u.modelReqKey,
            retired: !!(
              (h == null ||
              (d = h.text2videoParams) == null ||
              (c = d.videoGenInputs) == null
                ? undefined
                : c.length) && _(h.text2videoParams)
            ),
            usesDedicatedGenerator:
              m.includes(s.ce.VideoTemplate) || m.includes(s.ce.LipSync),
          };
        }
      }
    },
});
