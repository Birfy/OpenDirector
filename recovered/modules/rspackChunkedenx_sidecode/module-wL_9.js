import n from "./module-j_2_9.js";
import o from "./module-F4_10.js";
import i from "./module-er_9.js";
export default function (t, e, r) {
  const u = o(t);
  for (
    var c = n(e, u),
      f = n(r === undefined ? u : r, u),
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
