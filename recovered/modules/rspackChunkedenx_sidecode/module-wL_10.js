import n from "./module-j_2_10.js";
import o from "./module-F4_11.js";
import i from "./module-er_10.js";
export default function (t, r, e) {
  const u = o(t);
  for (
    var c = n(r, u),
      f = n(e === undefined ? u : e, u),
      l = Array(Math.max(f - c, 0)),
      h = 0;
    c < f;
    c++, h++
  ) {
    i(l, h, t[c]);
  }
  l.length = h;
  return l;
}
