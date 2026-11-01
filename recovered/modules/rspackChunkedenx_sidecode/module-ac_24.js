import n from "./module-aq_23.js";
import o from "./module-j_2_23.js";
import i from "./module-F4_24.js";
export default function (t) {
  const r = n(this);
  const e = i(r);
  const arguments_length = arguments.length;
  for (
    let s = o(arguments_length > 1 ? arguments[1] : undefined, e),
      c = arguments_length > 2 ? arguments[2] : undefined,
      u = c === undefined ? e : o(c, e);
    u > s;
  ) {
    r[s++] = t;
  }
  return r;
}
