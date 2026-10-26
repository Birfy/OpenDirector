import n from "./module-EV_7.js";
import o from "./module-F4_7.js";
import a from "./module-MU_6.js";
import i from "./module-WG_2_6.js";
const s = function (t, r, e, c, u, f, l, h) {
  let p;
  let v;
  let d = u;
  for (let g = 0, y = !!l && i(l, h); g < c;) {
    if (g in e) {
      p = y ? y(e[g], g, r) : e[g];
      if (f > 0 && n(p)) {
        v = o(p);
        d = s(t, r, p, v, d, f - 1) - 1;
      } else {
        a(d + 1);
        t[d] = p;
      }
      d++;
    }
    g++;
  }
  return d;
};
export default s;
