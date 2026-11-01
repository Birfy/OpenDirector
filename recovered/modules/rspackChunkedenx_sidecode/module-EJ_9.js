import n from "./module-EV_10.js";
import o from "./module-F4_10.js";
import i from "./module-MU_9.js";
import a from "./module-WG_2_9.js";
const s = function (t, e, r, u, c, f, l, h) {
  let v;
  let d;
  let p = c;
  for (let g = 0, y = !!l && a(l, h); g < u;) {
    if (g in r) {
      v = y ? y(r[g], g, e) : r[g];
      if (f > 0 && n(v)) {
        d = o(v);
        p = s(t, e, v, d, p, f - 1) - 1;
      } else {
        i(p + 1);
        t[p] = v;
      }
      p++;
    }
    g++;
  }
  return p;
};
export default s;
