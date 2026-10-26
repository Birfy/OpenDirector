import n from "./module-O9.js";
import o from "./module-V6.js";
import i from "./module-ng.js";
import a from "./module-vj.js";
const s = n("".charAt);
const u = n("".charCodeAt);
const c = n("".slice);
const f = (t) =>
  function (r, e) {
    let n;
    let f;
    const h = i(a(r));
    const l = o(e);
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
        return s(h, l);
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
