import n from "./module-F4_12.js";
import o from "./module-V6_12.js";
export default function (r, t, e, a) {
  const s = n(r);
  const u = o(e);
  const c = u < 0 ? s + u : u;
  if (c >= s || c < 0) {
    throw RangeError("Incorrect index");
  }
  const f = new t(s);
  for (let h = 0; h < s; h++) {
    f[h] = h === c ? a : r[h];
  }
  return f;
}
