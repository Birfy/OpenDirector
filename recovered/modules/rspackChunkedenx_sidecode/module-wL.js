import n from "./module-j_2.js";
import o from "./module-F4.js";
import i from "./module-er.js";
export default function (t, r, e) {
  const u = o(t);
  for (
    var c = n(r, u),
      f = n(e === undefined ? u : e, u),
      h = Array(Math.max(f - c, 0)),
      l = 0;
    c < f;
    c++, l++
  ) {
    i(h, l, t[c]);
  }
  h.length = l;
  return h;
}
