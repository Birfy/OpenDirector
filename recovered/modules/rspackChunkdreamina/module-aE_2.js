import n from "./module-o.js";
import o from "./module-Ok_2.js";
import i from "./module-BC_2.js";
import a from "./module-H_2.js";
const s = n("".charAt);
const u = n("".charCodeAt);
const c = n("".slice);
const f = (e) =>
  function (t, r) {
    let n;
    let f;
    const l = i(a(t));
    const p = o(r);
    const l_length = l.length;
    if (p < 0 || p >= l_length) {
      if (e) {
        return "";
      }
      return undefined;
    }
    if (
      (n = u(l, p)) < 55296 ||
      n > 56319 ||
      p + 1 === l_length ||
      (f = u(l, p + 1)) < 56320 ||
      f > 57343
    ) {
      if (e) {
        return s(l, p);
      }
      return n;
    }
    if (e) {
      return c(l, p, p + 2);
    }
    return ((n - 55296) << 10) + (f - 56320) + 65536;
  };
export default {
  codeAt: f(false),
  charAt: f(true),
};
