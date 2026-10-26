import i from "yMd";
export function c(e, t) {
  let n;
  let i;
  const r =
    e == null ||
    (i = e.inputImageLimit) == null ||
    (n = i.find((e) => e.abilityName === t)) == null
      ? undefined
      : n.maxImageNum;
  if (typeof r === "number") {
    return Math.max(r, 0);
  }
}
export function p(e) {
  const t = c(e, i.yo.ByteEdit);
  if (t !== undefined) {
    return t;
  }
  if ((e == null ? undefined : e.key) === "high_aes_general_v50p_large") {
    return 10;
  }
  if (e == null ? undefined : e.feats.includes(i.Si.SimpleImage)) {
    return 3;
  }
  return 6;
}
