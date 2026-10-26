import n from "./module-aq_9.js";
import o from "./module-j_2_9.js";
import i from "./module-F4_10.js";
export default function (t) {
  const e = n(this);
  const r = i(e);
  const arguments_length = arguments.length;
  for (
    let s = o(arguments_length > 1 ? arguments[1] : undefined, r),
      u = arguments_length > 2 ? arguments[2] : undefined,
      c = u === undefined ? r : o(u, r);
    c > s;
  ) {
    e[s++] = t;
  }
  return e;
}
