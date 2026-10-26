import r from "zN";
const a = ["1k", "1.5k", "2k", "4k", "8k"];
function n(e) {
  return a.flatMap((t) => {
    var i;
    var r = e == null || (i = e[t]) == null ? undefined : i.imageRangeConfig;
    if (r) {
      return [[t, r]];
    }
    return [];
  });
}
export function Zh(e, t, i) {
  const a = r.r(e, {
    min: i.minLength,
    max: i.maxLength,
  });
  const n = r.r(t, {
    min: i.minLength,
    max: i.maxLength,
  });
  const { lengthMultiple, maxAspectRatio, minPixelNum, maxPixelNum } = i;
  const u = e * t;
  const d =
    !lengthMultiple || (e % lengthMultiple == 0 && t % lengthMultiple == 0);
  const h =
    !maxAspectRatio || Math.max(e, t) / Math.min(e, t) <= maxAspectRatio;
  return (
    a && n && d && h && (!minPixelNum || u >= minPixelNum) && u <= maxPixelNum
  );
}
export function Md(e) {
  let t;
  let i;
  let r;
  let a;
  const s = n(e);
  const o = (t = s.at(0)) == null ? undefined : t[1];
  const l = (i = s.at(-1)) == null ? undefined : i[1];
  if (o && l) {
    const lengthMultiple =
      (r = s.find((e) => {
        var [, t] = e;
        return t.lengthMultiple;
      })) == null
        ? undefined
        : r[1].lengthMultiple;
    const maxAspectRatio =
      (a = s.find((e) => {
        var [, t] = e;
        return t.maxAspectRatio;
      })) == null
        ? undefined
        : a[1].maxAspectRatio;
    return {
      minLength: o.minLength,
      minPixelNum: o.minPixelNum,
      maxLength: l.maxLength,
      maxPixelNum: l.maxPixelNum,
      lengthMultiple,
      maxAspectRatio,
    };
  }
}
export function R7(e, t, i) {
  let r;
  const a = Md(i);
  if (a && Zh(e, t, a)) {
    if (
      (r = n(i).find((i) => {
        var [, r] = i;
        return Zh(e, t, r);
      })) == null
    ) {
      return undefined;
    }
    return r[0];
  }
}
