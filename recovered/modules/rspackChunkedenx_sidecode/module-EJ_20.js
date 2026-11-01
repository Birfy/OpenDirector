import n from "./module-EV_21.js";
import o from "./module-F4_21.js";
import i from "./module-MU_20.js";
import a from "./module-WG_2_20.js";
const s = function (t, r, e, c, u, f, l, h) {
  let v;
  let p;
  let d = u;
  for (let g = 0, y = !!l && a(l, h); g < c;) {
    if (g in e) {
      v = y ? y(e[g], g, r) : e[g];
      if (f > 0 && n(v)) {
        p = o(v);
        d = s(t, r, v, p, d, f - 1) - 1;
      } else {
        i(d + 1);
        t[d] = v;
      }
      d++;
    }
    g++;
  }
  return d;
};
export default s;
