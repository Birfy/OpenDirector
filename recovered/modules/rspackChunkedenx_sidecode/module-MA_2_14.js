import n from "./module-O9_14.js";
import o from "./module-F_15.js";
import i from "./module-ng_15.js";
import a from "./module-F4_15.js";
const c = n([].push);
const u = n([].join);
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
    c(f, i(h));
    if (l === e) {
      return u(f, "");
    }
    if (l < arguments_length) {
      c(f, i(arguments[l]));
    }
  }
}
