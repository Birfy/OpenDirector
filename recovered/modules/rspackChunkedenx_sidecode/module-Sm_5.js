import n from "./module-r9_5.js";
import i from "./module-X_6.js";
import o from "./module-O9_5.js";
import s from "./module-H_2_5.js";
import a from "./module-II_5.js";
import u from "./module-F_6.js";
const c = o(require("./module-P_6.js").f);
const f = o([].push);
const h =
  n &&
  i(function () {
    const t = Object.create(null);
    t[2] = 2;
    return !c(t, 2);
  });
const l = (t) =>
  function (r) {
    let e;
    const i = u(r);
    const o = a(i);
    const l = h && s(i) === null;
    for (var v = o.length, p = 0, d = []; v > p;) {
      e = o[p++];
      if (!n || (l ? e in i : c(i, e))) {
        f(d, t ? [e, i[e]] : i[e]);
      }
    }
    return d;
  };
export default {
  entries: l(true),
  values: l(false),
};
