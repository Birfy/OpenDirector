import n from "./module-O9_9.js";
import o from "./module-V6_10.js";
import i from "./module-ng_10.js";
import a from "./module-vj_10.js";
const s = n("".charAt);
const u = n("".charCodeAt);
const c = n("".slice);
const f = (t) =>
  function (e, r) {
    let n;
    let f;
    const l = i(a(e));
    const h = o(r);
    const l_length = l.length;
    if (h < 0 || h >= l_length) {
      if (t) {
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
      if (t) {
        return s(l, h);
      }
      return n;
    }
    if (t) {
      return c(l, h, h + 2);
    }
    return ((n - 55296) << 10) + (f - 56320) + 65536;
  };
export default {
  codeAt: f(false),
  charAt: f(true),
};
