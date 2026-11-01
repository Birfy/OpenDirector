import r from "NY";
import { J } from "./module-HSE.js";
import { Y } from "./module-LLl.js";
import { s } from "./module-A3X.js";
import { _ } from "./module-YBC.js";
import { ce } from "./module-yMd.js";
export function od(e) {
  let t;
  const i = e == null ? undefined : e.firstFrameImageAigcParams;
  if (i) {
    return {
      type: "image",
      modelReqKey: (t = i.modelConfig) == null ? undefined : t.modelReqKey,
    };
  }
}
export function Q5(e, t) {
  if (!e) {
    return false;
  }
  if (e.type === "video") {
    if (e.retired) {
      return false;
    }
    if (e.usesDedicatedGenerator || !e.modelReqKey) {
      return true;
    }
  }
  const i =
    e.type === "image"
      ? t == null
        ? undefined
        : t.imageModelConfigData.data
      : t == null
        ? undefined
        : t.videoModelConfigData.data;
  return !!(
    (i == null ? undefined : i.ok) &&
    i.value.modelList.some((t) => t.key === e.modelReqKey)
  );
}
export function aX(e, t) {
  return r._(function* () {
    return Q5(e, yield t.getInstance());
  })();
}
Object.defineProperty(exports, "RW", {
  enumerable: true,
  get: () =>
    function e(t) {
      const i =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (t) {
        if (J(t)) {
          return e(t.collection[i]);
        }
        if (Y(t)) {
          return {
            type: "image",
            modelReqKey: (r = t.modelInfo) == null ? undefined : r.modelReqKey,
          };
        }
        if (s(t)) {
          var r;
          let c;
          let d;
          let u;
          const m = t.aigcImageParams;
          const p = [
            m == null ? undefined : m.generateType,
            m == null ? undefined : m.firstGenerateType,
          ];
          return {
            type: "video",
            modelReqKey:
              m == null || (c = m.text2videoParams) == null
                ? undefined
                : c.modelReqKey,
            retired: !!(
              (m == null ||
              (u = m.text2videoParams) == null ||
              (d = u.videoGenInputs) == null
                ? undefined
                : d.length) && _(m.text2videoParams)
            ),
            usesDedicatedGenerator:
              p.includes(ce.VideoTemplate) || p.includes(ce.LipSync),
          };
        }
      }
    },
});
