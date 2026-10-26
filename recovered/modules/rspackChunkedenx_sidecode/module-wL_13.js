import n from "./module-j_2_13.js";
import o from "./module-F4_14.js";
import i from "./module-er_13.js";
export default function (r, t, e) {
  const u = o(r);
  for (
    var c = n(t, u),
      f = n(e === undefined ? u : e, u),
      h = Array(Math.max(f - c, 0)),
      l = 0;
    c < f;
    c++, l++
  ) {
    i(h, l, r[c]);
  }
  h.length = l;
  return h;
}
