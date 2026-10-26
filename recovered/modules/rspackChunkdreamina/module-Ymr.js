import i from "rp";
import r from "A3I";
import n from "kX";
function o(e) {
  return new Set(e).size === 1;
}
export function L(e, t) {
  if (t.length < 1) {
    return true;
  }
  let a;
  const s = t.map((e) => r.l(e.blendModel));
  if (
    !s.every((t) => e.feats.includes(t)) ||
    !((e, t) => {
      let a;
      const i = new Map();
      for (const r of t) {
        i.set(r, ((a = i.get(r)) != null ? a : 0) + 1);
      }
      return [...i].every((t) => {
        var [a, i] = t;
        var r = n.c(e, a);
        return r === undefined || i <= r;
      });
    })(e, s)
  ) {
    return false;
  }
  if (s.length <= 1) {
    return true;
  }
  const { duplicateFeatures, standaloneFeatures } = ((e) => {
    const t = new Map();
    for (const a of e) {
      const i = t.get(a) || 0;
      t.set(a, i + 1);
    }
    const duplicateFeatures_1 = [];
    const standaloneFeatures_1 = [];
    for (const [o, s] of t) {
      if (s > 1) {
        duplicateFeatures_1.push(Array(s).fill(o));
      }
      standaloneFeatures_1.push(o);
    }
    return {
      duplicateFeatures: duplicateFeatures_1,
      standaloneFeatures: standaloneFeatures_1,
    };
  })(s);
  return (
    !!((e, t) => {
      const a = (t) => {
        let a;
        if (
          (a = e.featsCantCombine) == null
            ? undefined
            : a.some((e) => o(e) && e[0] === t[0] && e.length <= t.length)
        ) {
          return {
            v: false,
          };
        }
      };
      for (const r of t) {
        const n = a(r);
        if (i._(n) === "object") {
          return n.v;
        }
      }
      return true;
    })(e, duplicateFeatures) &&
    !((a = e.featsCantCombine) == null
      ? undefined
      : a.some((e) => !o(e) && e.every((e) => standaloneFeatures.includes(e))))
  );
}
