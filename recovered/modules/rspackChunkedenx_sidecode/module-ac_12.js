import n from "./module-aq_11.js";
import o from "./module-j_2_11.js";
import i from "./module-F4_12.js";
export default function (r) {
  const t = n(this);
  const e = i(t);
  const arguments_length = arguments.length;
  for (
    let s = o(arguments_length > 1 ? arguments[1] : undefined, e),
      u = arguments_length > 2 ? arguments[2] : undefined,
      c = u === undefined ? e : o(u, e);
    c > s;
  ) {
    t[s++] = r;
  }
  return t;
}
