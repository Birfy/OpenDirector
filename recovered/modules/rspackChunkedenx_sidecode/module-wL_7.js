import n from "./module-j_2_7.js";
import o from "./module-F4_8.js";
import i from "./module-er_7.js";
export default function (r, t, e) {
  const u = o(r);
  for (
    var c = n(t, u),
      f = n(e === undefined ? u : e, u),
      l = Array(Math.max(f - c, 0)),
      h = 0;
    c < f;
    c++, h++
  ) {
    i(l, h, r[c]);
  }
  l.length = h;
  return l;
}
