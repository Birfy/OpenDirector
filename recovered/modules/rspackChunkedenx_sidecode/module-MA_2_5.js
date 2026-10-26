import n from "./module-O9_5.js";
import i from "./module-F_6.js";
import o from "./module-ng_6.js";
import s from "./module-F4_6.js";
const u = n([].push);
const c = n([].join);
export default function (t) {
  const r = i(t);
  const e = s(r);
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
    u(f, o(l));
    if (h === e) {
      return c(f, "");
    }
    if (h < arguments_length) {
      u(f, o(arguments[h]));
    }
  }
}
