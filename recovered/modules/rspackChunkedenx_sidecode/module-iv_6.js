import n from "./module-O9_6.js";
import o from "./module-V6_7.js";
import a from "./module-ng_7.js";
import i from "./module-vj_7.js";
const s = n("".charAt);
const c = n("".charCodeAt);
const u = n("".slice);
const f = (t) =>
  function (r, e) {
    let n;
    let f;
    const l = a(i(r));
    const h = o(e);
    const l_length = l.length;
    if (h < 0 || h >= l_length) {
      if (t) {
        return "";
      }
      return undefined;
    }
    if (
      (n = c(l, h)) < 55296 ||
      n > 56319 ||
      h + 1 === l_length ||
      (f = c(l, h + 1)) < 56320 ||
      f > 57343
    ) {
      if (t) {
        return s(l, h);
      }
      return n;
    }
    if (t) {
      return u(l, h, h + 2);
    }
    return ((n - 55296) << 10) + (f - 56320) + 65536;
  };
export default {
  codeAt: f(false),
  charAt: f(true),
};
