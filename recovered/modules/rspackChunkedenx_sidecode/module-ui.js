import n from "./module-F4.js";
import o from "./module-V6.js";
export default function (t, r, e, a) {
  const s = n(t);
  const u = o(e);
  const c = u < 0 ? s + u : u;
  if (c >= s || c < 0) {
    throw RangeError("Incorrect index");
  }
  const f = new r(s);
  for (let h = 0; h < s; h++) {
    f[h] = h === c ? a : t[h];
  }
  return f;
}
