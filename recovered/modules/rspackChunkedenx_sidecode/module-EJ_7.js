import n from "./module-EV_8.js";
import o from "./module-F4_8.js";
import i from "./module-MU_7.js";
import a from "./module-WG_2_7.js";
const s = function (r, t, e, u, c, f, l, h) {
  let v;
  let p;
  let d = c;
  for (let g = 0, y = !!l && a(l, h); g < u;) {
    if (g in e) {
      v = y ? y(e[g], g, t) : e[g];
      if (f > 0 && n(v)) {
        p = o(v);
        d = s(r, t, v, p, d, f - 1) - 1;
      } else {
        i(d + 1);
        r[d] = v;
      }
      d++;
    }
    g++;
  }
  return d;
};
export default s;
