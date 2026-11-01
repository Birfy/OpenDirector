import n from "./module-g2_2.js";
import o from "./module-OG_2.js";
import i from "./module-Id_2.js";
export default function (e, t, r) {
  const u = o(e);
  for (
    var c = n(t, u),
      f = n(r === undefined ? u : r, u),
      l = Array(Math.max(f - c, 0)),
      p = 0;
    c < f;
    c++, p++
  ) {
    i(l, p, e[c]);
  }
  l.length = p;
  return l;
}
