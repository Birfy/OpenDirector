import * as n from "./module-pE.js";
import s from "k4";
export function k(key) {
  return ((e) => {
    const { key, defaultSize, sizeLimit } = e;
    try {
      const a = s.b.getItem(key);
      if (!a) {
        return defaultSize;
      }
      const r = JSON.parse(a);
      if (
        Object.values(r).some((e) => e < sizeLimit.min || e > sizeLimit.max)
      ) {
        return defaultSize;
      }
      return r;
    } catch (e) {
      return defaultSize;
    }
  })({
    key,
    defaultSize: n._7,
    sizeLimit: {
      max: n.Gy,
      min: n.AC,
    },
  });
}
