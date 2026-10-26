import n from "./module-O9_9.js";
import o from "./module-F_10.js";
import i from "./module-ng_10.js";
import a from "./module-F4_10.js";
const u = n([].push);
const c = n([].join);
export default function (t) {
  const e = o(t);
  const r = a(e);
  if (!r) {
    return "";
  }
  const arguments_length = arguments.length;
  const f = [];
  let l = 0;
  while (true) {
    const h = e[l++];
    if (h === undefined) {
      throw TypeError("Incorrect template");
    }
    u(f, i(h));
    if (l === r) {
      return c(f, "");
    }
    if (l < arguments_length) {
      u(f, i(arguments[l]));
    }
  }
}
