import n from "./module-r9_10.js";
import o from "./module-X_11.js";
import i from "./module-O9_10.js";
import a from "./module-H_2_10.js";
import s from "./module-II_10.js";
import u from "./module-F_11.js";
const c = i(require("./module-P_11.js").f);
const f = i([].push);
const l =
  n &&
  o(function () {
    const t = Object.create(null);
    t[2] = 2;
    return !c(t, 2);
  });
const h = (t) =>
  function (r) {
    let e;
    const o = u(r);
    const i = s(o);
    const h = l && a(o) === null;
    for (var v = i.length, p = 0, d = []; v > p;) {
      e = i[p++];
      if (!n || (h ? e in o : c(o, e))) {
        f(d, t ? [e, o[e]] : o[e]);
      }
    }
    return d;
  };
export default {
  entries: h(true),
  values: h(false),
};
