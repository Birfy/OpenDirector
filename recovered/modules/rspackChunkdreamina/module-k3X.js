import i from "SZS";
import r from "TK";
import a from "T7";
import o from "gu";
const l = {
  [a.s.DreaminaModelConfigPostV45]: {
    [o.Sk.ImageInPaintRepaintButton]: (e) => {
      if (e.useV40Model) {
        return i.qV;
      }
      return 1;
    },
    [o.Sk.ImageInPaintRepaintTextArea]: (e) => {
      if (e.useV40Model) {
        return i.qV;
      }
      return 1;
    },
  },
};
export function P(e) {
  let t;
  const { containerService, abTestKey, defaultBenefitCount, scene } = e;
  const u = containerService
    .invokeFunction((e) => e.get(r.a))
    .serverAbTestManager.getAbTestValueSync(abTestKey);
  if (u === undefined) {
    return defaultBenefitCount;
  }
  const s = (t = l[abTestKey]) == null ? undefined : t[scene];
  const d = s == null ? undefined : s(u);
  if (d !== undefined) {
    return d;
  }
  return defaultBenefitCount;
}
