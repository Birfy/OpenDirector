import n from "./module-O9_8.js";
import i from "./module-V6_9.js";
import o from "./module-ng_9.js";
import s from "./module-vj_9.js";
const a = n("".charAt);
const u = n("".charCodeAt);
const c = n("".slice);
const f = (t) =>
  function (r, e) {
    let n;
    let f;
    const h = o(s(r));
    const l = i(e);
    const h_length = h.length;
    if (l < 0 || l >= h_length) {
      if (t) {
        return "";
      }
      return undefined;
    }
    if (
      (n = u(h, l)) < 55296 ||
      n > 56319 ||
      l + 1 === h_length ||
      (f = u(h, l + 1)) < 56320 ||
      f > 57343
    ) {
      if (t) {
        return a(h, l);
      }
      return n;
    }
    if (t) {
      return c(h, l, l + 2);
    }
    return ((n - 55296) << 10) + (f - 56320) + 65536;
  };
export default {
  codeAt: f(false),
  charAt: f(true),
};
