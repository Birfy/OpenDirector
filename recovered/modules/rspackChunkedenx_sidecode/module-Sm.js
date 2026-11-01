import n from "./module-r9.js";
import o from "./module-X.js";
import i from "./module-O9.js";
import a from "./module-H_2.js";
import s from "./module-II.js";
import u from "./module-F.js";
const c = i(require("./module-P.js").f);
const f = i([].push);
const h =
  n &&
  o(function () {
    const t = Object.create(null);
    t[2] = 2;
    return !c(t, 2);
  });
const l = (t) =>
  function (r) {
    let e;
    const o = u(r);
    const i = s(o);
    const l = h && a(o) === null;
    for (var v = i.length, p = 0, d = []; v > p;) {
      e = i[p++];
      if (!n || (l ? e in o : c(o, e))) {
        f(d, t ? [e, o[e]] : o[e]);
      }
    }
    return d;
  };
export default {
  entries: l(true),
  values: l(false),
};
