import n from "./module-F4_17.js";
import o from "./module-V6_17.js";
export default function (t, r, e, a) {
  const s = n(t);
  const u = o(e);
  const c = u < 0 ? s + u : u;
  if (c >= s || c < 0) {
    throw RangeError("Incorrect index");
  }
  const f = new r(s);
  for (let l = 0; l < s; l++) {
    f[l] = l === c ? a : t[l];
  }
  return f;
}
