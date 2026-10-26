import n from "./module-M_2_9.js";
import o from "./module-xg_10.js";
import i from "./module-d_10.js";
import a from "./module-Mi_9.js";
import s from "./module-vj_10.js";
import u from "./module-Ff_9.js";
import c from "./module-ng_10.js";
import f from "./module-C_10.js";
import l from "./module-uc_9.js";
o("search", function (t, e, r) {
  return [
    function (e) {
      const r = s(this);
      const o = a(e) ? undefined : f(e, t);
      if (o) {
        return n(o, e, r);
      }
      return new RegExp(e)[t](c(r));
    },
    function (t) {
      const n = i(this);
      const o = c(t);
      const a = r(e, n, o);
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
