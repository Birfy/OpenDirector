import n from "./module-O_2.js";
import o from "./module-g2_2.js";
import i from "./module-OG_2.js";
export default function (e) {
  const t = n(this);
  const r = i(t);
  const arguments_length = arguments.length;
  for (
    let s = o(arguments_length > 1 ? arguments[1] : undefined, r),
      u = arguments_length > 2 ? arguments[2] : undefined,
      c = u === undefined ? r : o(u, r);
    c > s;
  ) {
    t[s++] = e;
  }
  return t;
}
