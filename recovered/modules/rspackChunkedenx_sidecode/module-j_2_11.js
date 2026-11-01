import n from "./module-V6_12.js";
export default function (r, t) {
  const e = n(r);
  if (e < 0) {
    return Math.max(e + t, 0);
  }
  return Math.min(e, t);
}
