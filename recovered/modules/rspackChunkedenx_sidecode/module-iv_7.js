import n from "./module-O9_7.js";
import o from "./module-V6_8.js";
import i from "./module-ng_8.js";
import a from "./module-vj_8.js";
const s = n("".charAt);
const u = n("".charCodeAt);
const c = n("".slice);
const f = (r) =>
  function (t, e) {
    let n;
    let f;
    const l = i(a(t));
    const h = o(e);
    const l_length = l.length;
    if (h < 0 || h >= l_length) {
      if (r) {
        return "";
      }
      return undefined;
    }
    if (
      (n = u(l, h)) < 55296 ||
      n > 56319 ||
      h + 1 === l_length ||
      (f = u(l, h + 1)) < 56320 ||
      f > 57343
    ) {
      if (r) {
        return s(l, h);
      }
      return n;
    }
    if (r) {
      return c(l, h, h + 2);
    }
    return ((n - 55296) << 10) + (f - 56320) + 65536;
  };
export default {
  codeAt: f(false),
  charAt: f(true),
};
