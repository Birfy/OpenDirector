import a from "cV2";
export function JV(t) {
  return a.x(t) !== undefined;
}
export function $h(t) {
  const e = new Set();
  return t.filter((t) => !(!JV(t) || e.has(t)) && (e.add(t), true));
}
export function C(t, e, i) {
  let a;
  let r;
  if (
    (a = (r = t.find((t) => t === e)) != null ? r : t.find((t) => t === i)) !=
    null
  ) {
    return a;
  }
  return t[0];
}
