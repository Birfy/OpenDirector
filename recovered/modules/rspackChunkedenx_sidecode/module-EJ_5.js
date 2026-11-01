import n from "./module-EV_6.js";
import i from "./module-F4_6.js";
import o from "./module-MU_5.js";
import s from "./module-WG_2_5.js";
const a = function (t, r, e, u, c, f, h, l) {
  let v;
  let p;
  let d = c;
  for (let g = 0, y = !!h && s(h, l); g < u;) {
    if (g in e) {
      v = y ? y(e[g], g, r) : e[g];
      if (f > 0 && n(v)) {
        p = i(v);
        d = a(t, r, v, p, d, f - 1) - 1;
      } else {
        o(d + 1);
        t[d] = v;
      }
      d++;
    }
    g++;
  }
  return d;
};
export default a;
