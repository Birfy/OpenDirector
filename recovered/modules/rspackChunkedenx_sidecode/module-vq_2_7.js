import n from "./module-M_2_7.js";
import o from "./module-xg_8.js";
import i from "./module-d_8.js";
import a from "./module-Mi_7.js";
import s from "./module-vj_8.js";
import u from "./module-Ff_7.js";
import c from "./module-ng_8.js";
import f from "./module-C_8.js";
import l from "./module-uc_7.js";
o("search", function (r, t, e) {
  return [
    function (t) {
      const e = s(this);
      const o = a(t) ? undefined : f(t, r);
      if (o) {
        return n(o, t, e);
      }
      return new RegExp(t)[r](c(e));
    },
    function (r) {
      const n = i(this);
      const o = c(r);
      const a = e(t, n, o);
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
