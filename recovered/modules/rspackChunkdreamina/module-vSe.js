import { S } from "./module-hqG.js";
export function f(e) {
  const t = S(e, "tool_type");
  if (typeof t === "string" && t) {
    return t;
  }
}
export function _(e, t, i, n) {
  const r = !!(e && i.includes(e));
  const a = !!(t && n.some((e) => e === t));
  return r || a;
}
