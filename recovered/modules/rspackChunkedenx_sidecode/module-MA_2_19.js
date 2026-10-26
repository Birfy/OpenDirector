import n from "./module-O9_19.js";
import o from "./module-F_20.js";
import i from "./module-ng_20.js";
import a from "./module-F4_20.js";
const u = n([].push);
const c = n([].join);
export default function (r) {
  const t = o(r);
  const e = a(t);
  if (!e) {
    return "";
  }
  const arguments_length = arguments.length;
  const f = [];
  let l = 0;
  while (true) {
    const h = t[l++];
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
