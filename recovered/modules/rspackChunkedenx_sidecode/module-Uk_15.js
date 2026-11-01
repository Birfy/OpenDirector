import n from "./module-M_2_15.js";
import o from "./module-xg_16.js";
import i from "./module-d_16.js";
import a from "./module-Mi_15.js";
import s from "./module-dV_15.js";
import u from "./module-ng_16.js";
import c from "./module-vj_16.js";
import f from "./module-C_16.js";
import h from "./module-Gl_15.js";
import l from "./module-uc_15.js";
o("match", function (r, t, e) {
  return [
    function (t) {
      const e = c(this);
      const o = a(t) ? undefined : f(t, r);
      if (o) {
        return n(o, t, e);
      }
      return new RegExp(t)[r](u(e));
    },
    function (r) {
      let n;
      const o = i(this);
      const a = u(r);
      const c = e(t, o, a);
      if (c.done) {
        return c.value;
      }
      if (!o.global) {
        return l(o, a);
      }
      const o_unicode = o.unicode;
      o.lastIndex = 0;
      const v = [];
      let p = 0;
      while ((n = l(o, a)) !== null) {
        const d = u(n[0]);
        v[p] = d;
        if (d === "") {
          o.lastIndex = h(a, s(o.lastIndex), o_unicode);
        }
        p++;
      }
      if (p === 0) {
        return null;
      }
      return v;
    },
  ];
});
