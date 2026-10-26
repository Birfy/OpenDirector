import n from "./module-M_2_5.js";
import i from "./module-xg_6.js";
import o from "./module-d_6.js";
import s from "./module-Mi_5.js";
import a from "./module-vj_6.js";
import u from "./module-Ff_5.js";
import c from "./module-ng_6.js";
import f from "./module-C_6.js";
import h from "./module-uc_5.js";
i("search", function (t, r, e) {
  return [
    function (r) {
      const e = a(this);
      const i = s(r) ? undefined : f(r, t);
      if (i) {
        return n(i, r, e);
      }
      return new RegExp(r)[t](c(e));
    },
    function (t) {
      const n = o(this);
      const i = c(t);
      const s = e(r, n, i);
      if (s.done) {
        return s.value;
      }
      const n_lastIndex = n.lastIndex;
      if (!u(n_lastIndex, 0)) {
        n.lastIndex = 0;
      }
      const f = h(n, i);
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
