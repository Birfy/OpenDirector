import n from "./module-M_2.js";
import o from "./module-xg.js";
import i from "./module-d.js";
import a from "./module-Mi.js";
import s from "./module-vj.js";
import u from "./module-Ff.js";
import c from "./module-ng.js";
import f from "./module-C.js";
import h from "./module-uc.js";
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
      const f = h(n, o);
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
