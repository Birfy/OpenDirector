import n from "./module-EV.js";
import o from "./module-F4.js";
import i from "./module-MU.js";
import a from "./module-WG_2.js";
const s = function (t, r, e, u, c, f, h, l) {
  let v;
  let p;
  let d = c;
  for (let g = 0, y = !!h && a(h, l); g < u;) {
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
