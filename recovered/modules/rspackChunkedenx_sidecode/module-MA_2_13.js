import n from "./module-O9_13.js";
import o from "./module-F_14.js";
import i from "./module-ng_14.js";
import a from "./module-F4_14.js";
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
  let h = 0;
  while (true) {
    const l = t[h++];
    if (l === undefined) {
      throw TypeError("Incorrect template");
    }
    u(f, i(l));
    if (h === e) {
      return c(f, "");
    }
    if (h < arguments_length) {
      u(f, i(arguments[h]));
    }
  }
}
