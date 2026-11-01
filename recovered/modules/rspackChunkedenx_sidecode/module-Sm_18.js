import n from "./module-r9_18.js";
import o from "./module-X_19.js";
import i from "./module-O9_18.js";
import a from "./module-H_2_18.js";
import s from "./module-II_18.js";
import u from "./module-F_19.js";
const c = i(require("./module-P_19.js").f);
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
