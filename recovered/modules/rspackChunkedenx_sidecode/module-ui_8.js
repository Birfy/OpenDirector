import n from "./module-F4_9.js";
import i from "./module-V6_9.js";
export default function (t, r, e, s) {
  const a = n(t);
  const u = i(e);
  const c = u < 0 ? a + u : u;
  if (c >= a || c < 0) {
    throw RangeError("Incorrect index");
  }
  const f = new r(a);
  for (let h = 0; h < a; h++) {
    f[h] = h === c ? s : t[h];
  }
  return f;
}
