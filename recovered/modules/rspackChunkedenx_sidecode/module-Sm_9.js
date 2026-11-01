import n from "./module-r9_9.js";
import o from "./module-X_10.js";
import i from "./module-O9_9.js";
import a from "./module-H_2_9.js";
import s from "./module-II_9.js";
import u from "./module-F_10.js";
const c = i(require("./module-P_10.js").f);
const f = i([].push);
const l =
  n &&
  o(function () {
    const t = Object.create(null);
    t[2] = 2;
    return !c(t, 2);
  });
const h = (t) =>
  function (e) {
    let r;
    const o = u(e);
    const i = s(o);
    const h = l && a(o) === null;
    for (var v = i.length, d = 0, p = []; v > d;) {
      r = i[d++];
      if (!n || (h ? r in o : c(o, r))) {
        f(p, t ? [r, o[r]] : o[r]);
      }
    }
    return p;
  };
export default {
  entries: h(true),
  values: h(false),
};
