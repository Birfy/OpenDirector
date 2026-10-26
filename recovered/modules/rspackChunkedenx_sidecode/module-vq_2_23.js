import n from "./module-M_2_23.js";
import o from "./module-xg_24.js";
import i from "./module-d_24.js";
import a from "./module-Mi_23.js";
import s from "./module-vj_24.js";
import c from "./module-Ff_23.js";
import u from "./module-ng_24.js";
import f from "./module-C_24.js";
import l from "./module-uc_23.js";
o("search", function (t, r, e) {
  return [
    function (r) {
      const e = s(this);
      const o = a(r) ? undefined : f(r, t);
      if (o) {
        return n(o, r, e);
      }
      return new RegExp(r)[t](u(e));
    },
    function (t) {
      const n = i(this);
      const o = u(t);
      const a = e(r, n, o);
      if (a.done) {
        return a.value;
      }
      const n_lastIndex = n.lastIndex;
      if (!c(n_lastIndex, 0)) {
        n.lastIndex = 0;
      }
      const f = l(n, o);
      if (!c(n.lastIndex, n_lastIndex)) {
        n.lastIndex = n_lastIndex;
      }
      if (f === null) {
        return -1;
      }
      return f.index;
    },
  ];
});
