import n from "./module-EV_16.js";
import o from "./module-F4_16.js";
import i from "./module-MU_15.js";
import a from "./module-WG_2_15.js";
const s = function (r, t, e, u, c, f, h, l) {
  let v;
  let p;
  let d = c;
  for (let g = 0, y = !!h && a(h, l); g < u;) {
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
