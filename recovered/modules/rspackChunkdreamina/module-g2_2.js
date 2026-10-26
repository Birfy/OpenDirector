import n from "./module-Ok_2.js";
export default function (e, t) {
  const r = n(e);
  if (r < 0) {
    return Math.max(r + t, 0);
  }
  return Math.min(r, t);
}
