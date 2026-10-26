import n from "./module-j_2_21.js";
import i from "./module-F4_22.js";
import o from "./module-er_21.js";
export default function (t, r, e) {
  const u = i(t);
  for (
    var c = n(r, u),
      f = n(e === undefined ? u : e, u),
      h = Array(Math.max(f - c, 0)),
      l = 0;
    c < f;
    c++, l++
  ) {
    o(h, l, t[c]);
  }
  h.length = l;
  return h;
}
