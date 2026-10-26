import n from "./module-O9_6.js";
import o from "./module-F_7.js";
import a from "./module-ng_7.js";
import i from "./module-F4_7.js";
const c = n([].push);
const u = n([].join);
export default function (t) {
  const r = o(t);
  const e = i(r);
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
    c(f, a(h));
    if (l === e) {
      return u(f, "");
    }
    if (l < arguments_length) {
      c(f, a(arguments[l]));
    }
  }
}
