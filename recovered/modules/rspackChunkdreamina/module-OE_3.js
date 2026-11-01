import n from "./module-p3.js";
import o from "./module-v1_2.js";
import i from "./module-IF_2.js";
import a from "./module-D.js";
import s from "./module-H_2.js";
import u from "./module-o8_2.js";
import c from "./module-BC_2.js";
import f from "./module-T_2.js";
import l from "./module-Ct_3.js";
o("search", function (e, t, r) {
  return [
    function (t) {
      const r = s(this);
      const o = a(t) ? undefined : f(t, e);
      if (o) {
        return n(o, t, r);
      }
      return new RegExp(t)[e](c(r));
    },
    function (e) {
      const n = i(this);
      const o = c(e);
      const a = r(t, n, o);
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
