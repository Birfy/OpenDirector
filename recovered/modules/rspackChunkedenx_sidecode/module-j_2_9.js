import n from "./module-V6_10.js";
export default function (t, e) {
  const r = n(t);
  if (r < 0) {
    return Math.max(r + e, 0);
  }
  return Math.min(r, e);
}
