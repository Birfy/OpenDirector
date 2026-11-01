import n from "./module-F4_20.js";
import o from "./module-V6_20.js";
export default function (r, t, e, a) {
  const s = n(r);
  const u = o(e);
  const c = u < 0 ? s + u : u;
  if (c >= s || c < 0) {
    throw RangeError("Incorrect index");
  }
  const f = new t(s);
  for (let l = 0; l < s; l++) {
    f[l] = l === c ? a : r[l];
  }
  return f;
}
