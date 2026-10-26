import n from "./module-M_2_6.js";
import o from "./module-xg_7.js";
import a from "./module-d_7.js";
import i from "./module-Mi_6.js";
import s from "./module-vj_7.js";
import c from "./module-Ff_6.js";
import u from "./module-ng_7.js";
import f from "./module-C_7.js";
import l from "./module-uc_6.js";
o("search", function (t, r, e) {
  return [
    function (r) {
      const e = s(this);
      const o = i(r) ? undefined : f(r, t);
      if (o) {
        return n(o, r, e);
      }
      return new RegExp(r)[t](u(e));
    },
    function (t) {
      const n = a(this);
      const o = u(t);
      const i = e(r, n, o);
      if (i.done) {
        return i.value;
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
