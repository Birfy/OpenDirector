import n from "./module-M_2_16.js";
import o from "./module-xg_17.js";
import i from "./module-d_17.js";
import a from "./module-Mi_16.js";
import s from "./module-vj_17.js";
import u from "./module-Ff_16.js";
import c from "./module-ng_17.js";
import f from "./module-C_17.js";
import l from "./module-uc_16.js";
o("search", function (t, r, e) {
  return [
    function (r) {
      const e = s(this);
      const o = a(r) ? undefined : f(r, t);
      if (o) {
        return n(o, r, e);
      }
      return new RegExp(r)[t](c(e));
    },
    function (t) {
      const n = i(this);
      const o = c(t);
      const a = e(r, n, o);
      if (a.done) {
        return a.value;
      }
      const n_lastIndex = n.lastIndex;
      if (!u(n_lastIndex, 0)) {
        n.lastIndex = 0;
      }
      const f = l(n, o);
      if (!u(n.lastIndex, n_lastIndex)) {
        n.lastIndex = n_lastIndex;
      }
      if (f === null) {
        return -1;
      }
      return f.index;
    },
  ];
});
