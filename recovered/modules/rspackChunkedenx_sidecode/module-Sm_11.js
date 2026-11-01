import n from "./module-r9_11.js";
import o from "./module-X_12.js";
import i from "./module-O9_11.js";
import a from "./module-H_2_11.js";
import s from "./module-II_11.js";
import u from "./module-F_12.js";
const c = i(require("./module-P_12.js").f);
const f = i([].push);
const h =
  n &&
  o(function () {
    const r = Object.create(null);
    r[2] = 2;
    return !c(r, 2);
  });
const l = (r) =>
  function (t) {
    let e;
    const o = u(t);
    const i = s(o);
    const l = h && a(o) === null;
    for (var v = i.length, p = 0, d = []; v > p;) {
      e = i[p++];
      if (!n || (l ? e in o : c(o, e))) {
        f(d, r ? [e, o[e]] : o[e]);
      }
    }
    return d;
  };
export default {
  entries: l(true),
  values: l(false),
};
