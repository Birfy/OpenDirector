import n from "./module-O9_10.js";
import o from "./module-F_11.js";
import i from "./module-ng_11.js";
import a from "./module-F4_11.js";
const u = n([].push);
const c = n([].join);
export default function (t) {
  const r = o(t);
  const e = a(r);
  if (!e) {
    return "";
  }
  const arguments_length = arguments.length;
  const f = [];
  let l = 0;
  while (true) {
    const h = r[l++];
    if (h === undefined) {
      throw TypeError("Incorrect template");
    }
    u(f, i(h));
    if (l === e) {
      return c(f, "");
    }
    if (l < arguments_length) {
      u(f, i(arguments[l]));
    }
  }
}
