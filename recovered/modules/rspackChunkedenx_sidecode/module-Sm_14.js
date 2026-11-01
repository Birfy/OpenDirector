import n from "./module-r9_14.js";
import o from "./module-X_15.js";
import i from "./module-O9_14.js";
import a from "./module-H_2_14.js";
import s from "./module-II_14.js";
import c from "./module-F_15.js";
const u = i(require("./module-P_15.js").f);
const f = i([].push);
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
    const i = s(o);
    const h = l && a(o) === null;
    for (var v = i.length, p = 0, d = []; v > p;) {
      e = i[p++];
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
