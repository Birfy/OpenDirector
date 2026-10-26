import n from "./module-M_2_7.js";
import o from "./module-xg_8.js";
import i from "./module-d_8.js";
import a from "./module-Mi_7.js";
import s from "./module-dV_7.js";
import u from "./module-ng_8.js";
import c from "./module-vj_8.js";
import f from "./module-C_8.js";
import l from "./module-Gl_7.js";
import h from "./module-uc_7.js";
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
        return h(o, a);
      }
      const o_unicode = o.unicode;
      o.lastIndex = 0;
      const v = [];
      let p = 0;
      while ((n = h(o, a)) !== null) {
        const d = u(n[0]);
        v[p] = d;
        if (d === "") {
          o.lastIndex = l(a, s(o.lastIndex), o_unicode);
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
