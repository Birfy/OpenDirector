import n from "./module-O9_13.js";
import o from "./module-V6_14.js";
import i from "./module-ng_14.js";
import a from "./module-vj_14.js";
const s = n("".charAt);
const u = n("".charCodeAt);
const c = n("".slice);
const f = (r) =>
  function (t, e) {
    let n;
    let f;
    const h = i(a(t));
    const l = o(e);
    const h_length = h.length;
    if (l < 0 || l >= h_length) {
      if (r) {
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
      if (r) {
        return s(h, l);
      }
      return n;
    }
    if (r) {
      return c(h, l, l + 2);
    }
    return ((n - 55296) << 10) + (f - 56320) + 65536;
  };
export default {
  codeAt: f(false),
  charAt: f(true),
};
