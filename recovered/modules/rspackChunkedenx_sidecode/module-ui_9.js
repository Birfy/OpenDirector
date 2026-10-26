import n from "./module-F4_10.js";
import o from "./module-V6_10.js";
export default function (t, e, r, a) {
  const s = n(t);
  const u = o(r);
  const c = u < 0 ? s + u : u;
  if (c >= s || c < 0) {
    throw RangeError("Incorrect index");
  }
  const f = new e(s);
  for (let l = 0; l < s; l++) {
    f[l] = l === c ? a : t[l];
  }
  return f;
}
