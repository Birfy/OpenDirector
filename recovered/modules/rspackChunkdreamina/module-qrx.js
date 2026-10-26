import n from "./module-zD.js";
function r(e, t) {
  let i;
  let n;
  const r =
    (n = e.userMessage) == null || (i = n.metadata) == null
      ? undefined
      : i.system_hints;
  return Array.isArray(r) && r.includes(t);
}
export function Os(e) {
  return r(e, n.O_);
}
export function gt(e) {
  return r(e, n.tc);
}
export function Kp(e) {
  return r(e, n.jd);
}
