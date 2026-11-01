import n from "./module-r9_6.js";
import o from "./module-X_7.js";
import a from "./module-O9_6.js";
import i from "./module-H_2_6.js";
import s from "./module-II_6.js";
import c from "./module-F_7.js";
const u = a(require("./module-P_7.js").f);
const f = a([].push);
const l =
  n &&
  o(function () {
    const t = Object.create(null);
    t[2] = 2;
    return !u(t, 2);
  });
const h = (t) =>
  function (r) {
    let e;
    const o = c(r);
    const a = s(o);
    const h = l && i(o) === null;
    for (var p = a.length, v = 0, d = []; p > v;) {
      e = a[v++];
      if (!n || (h ? e in o : u(o, e))) {
        f(d, t ? [e, o[e]] : o[e]);
      }
    }
    return d;
  };
export default {
  entries: h(true),
  values: h(false),
};
