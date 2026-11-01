import n from "./module-O9.js";
import o from "./module-F.js";
import i from "./module-ng.js";
import a from "./module-F4.js";
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
  let h = 0;
  while (true) {
    const l = r[h++];
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
