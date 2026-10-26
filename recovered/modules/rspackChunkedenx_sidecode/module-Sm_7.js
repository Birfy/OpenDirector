import n from "./module-r9_7.js";
import o from "./module-X_8.js";
import i from "./module-O9_7.js";
import a from "./module-H_2_7.js";
import s from "./module-II_7.js";
import u from "./module-F_8.js";
const c = i(require("./module-P_8.js").f);
const f = i([].push);
const l =
  n &&
  o(function () {
    const r = Object.create(null);
    r[2] = 2;
    return !c(r, 2);
  });
const h = (r) =>
  function (t) {
    let e;
    const o = u(t);
    const i = s(o);
    const h = l && a(o) === null;
    for (var v = i.length, p = 0, d = []; v > p;) {
      e = i[p++];
      if (!n || (h ? e in o : c(o, e))) {
        f(d, r ? [e, o[e]] : o[e]);
      }
    }
    return d;
  };
export default {
  entries: h(true),
  values: h(false),
};
