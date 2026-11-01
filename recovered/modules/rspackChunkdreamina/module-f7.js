import n from "./module-DN_2.js";
import o from "./module-OG_2.js";
import i from "./module-Bw_2.js";
import a from "./module-fM_3.js";
const s = function (e, t, r, u, c, f, l, p) {
  let h;
  let v;
  let d = c;
  for (let g = 0, y = !!l && a(l, p); g < u;) {
    if (g in r) {
      h = y ? y(r[g], g, t) : r[g];
      if (f > 0 && n(h)) {
        v = o(h);
        d = s(e, t, h, v, d, f - 1) - 1;
      } else {
        i(d + 1);
        e[d] = h;
      }
      d++;
    }
    g++;
  }
  return d;
};
export default s;
