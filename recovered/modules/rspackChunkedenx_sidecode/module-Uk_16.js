import n from "./module-M_2_16.js";
import o from "./module-xg_17.js";
import i from "./module-d_17.js";
import a from "./module-Mi_16.js";
import s from "./module-dV_16.js";
import u from "./module-ng_17.js";
import c from "./module-vj_17.js";
import f from "./module-C_17.js";
import l from "./module-Gl_16.js";
import h from "./module-uc_16.js";
o("match", function (t, r, e) {
  return [
    function (r) {
      const e = c(this);
      const o = a(r) ? undefined : f(r, t);
      if (o) {
        return n(o, r, e);
      }
      return new RegExp(r)[t](u(e));
    },
    function (t) {
      let n;
      const o = i(this);
      const a = u(t);
      const c = e(r, o, a);
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
