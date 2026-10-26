import n from "./module-aq_2.js";
import i from "./module-j_2_2.js";
import o from "./module-F4_3.js";
export default function (t) {
  const r = n(this);
  const e = o(r);
  const arguments_length = arguments.length;
  for (
    let a = i(arguments_length > 1 ? arguments[1] : undefined, e),
      u = arguments_length > 2 ? arguments[2] : undefined,
      c = u === undefined ? e : i(u, e);
    c > a;
  ) {
    r[a++] = t;
  }
  return r;
}
