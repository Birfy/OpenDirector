import n from "./module-o.js";
import o from "./module-MR.js";
import i from "./module-BC_2.js";
import a from "./module-OG_2.js";
const u = n([].push);
const c = n([].join);
export default function (e) {
  const t = o(e);
  const r = a(t);
  if (!r) {
    return "";
  }
  const arguments_length = arguments.length;
  const f = [];
  let l = 0;
  while (true) {
    const p = t[l++];
    if (p === undefined) {
      throw TypeError("Incorrect template");
    }
    u(f, i(p));
    if (l === r) {
      return c(f, "");
    }
    if (l < arguments_length) {
      u(f, i(arguments[l]));
    }
  }
}
