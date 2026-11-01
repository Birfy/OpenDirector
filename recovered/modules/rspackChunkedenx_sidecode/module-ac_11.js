import n from "./module-aq_10.js";
import o from "./module-j_2_10.js";
import i from "./module-F4_11.js";
export default function (t) {
  const r = n(this);
  const e = i(r);
  const arguments_length = arguments.length;
  for (
    let s = o(arguments_length > 1 ? arguments[1] : undefined, e),
      u = arguments_length > 2 ? arguments[2] : undefined,
      c = u === undefined ? e : o(u, e);
    c > s;
  ) {
    r[s++] = t;
  }
  return r;
}
