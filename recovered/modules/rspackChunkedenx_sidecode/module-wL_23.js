import n from "./module-j_2_23.js";
import o from "./module-F4_24.js";
import i from "./module-er_23.js";
export default function (t, r, e) {
  const c = o(t);
  for (
    var u = n(r, c),
      f = n(e === undefined ? c : e, c),
      l = Array(Math.max(f - u, 0)),
      h = 0;
    u < f;
    u++, h++
  ) {
    i(l, h, t[u]);
  }
  l.length = h;
  return l;
}
