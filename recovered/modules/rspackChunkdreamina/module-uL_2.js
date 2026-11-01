import n from "./module-OG_2.js";
import o from "./module-Ok_2.js";
export default function (e, t, r, a) {
  const s = n(e);
  const u = o(r);
  const c = u < 0 ? s + u : u;
  if (c >= s || c < 0) {
    throw RangeError("Incorrect index");
  }
  const f = new t(s);
  for (let l = 0; l < s; l++) {
    f[l] = l === c ? a : e[l];
  }
  return f;
}
