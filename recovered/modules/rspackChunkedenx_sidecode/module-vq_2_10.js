import n from "./module-M_2_10.js";
import o from "./module-xg_11.js";
import i from "./module-d_11.js";
import a from "./module-Mi_10.js";
import s from "./module-vj_11.js";
import u from "./module-Ff_10.js";
import c from "./module-ng_11.js";
import f from "./module-C_11.js";
import l from "./module-uc_10.js";
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
