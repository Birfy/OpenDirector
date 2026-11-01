import n from "./module-F4_7.js";
import o from "./module-V6_7.js";
export default function (t, r, e, i) {
  const s = n(t);
  const c = o(e);
  const u = c < 0 ? s + c : c;
  if (u >= s || u < 0) {
    throw RangeError("Incorrect index");
  }
  const f = new r(s);
  for (let l = 0; l < s; l++) {
    f[l] = l === u ? i : t[l];
  }
  return f;
}
