import n from "./module-V6_6.js";
export default function (t, r) {
  const e = n(t);
  if (e < 0) {
    return Math.max(e + r, 0);
  }
  return Math.min(e, r);
}
