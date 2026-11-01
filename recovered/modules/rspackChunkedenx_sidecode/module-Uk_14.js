import n from "./module-M_2_14.js";
import o from "./module-xg_15.js";
import i from "./module-d_15.js";
import a from "./module-Mi_14.js";
import s from "./module-dV_14.js";
import c from "./module-ng_15.js";
import u from "./module-vj_15.js";
import f from "./module-C_15.js";
import l from "./module-Gl_14.js";
import h from "./module-uc_14.js";
o("match", function (t, r, e) {
  return [
    function (r) {
      const e = u(this);
      const o = a(r) ? undefined : f(r, t);
      if (o) {
        return n(o, r, e);
      }
      return new RegExp(r)[t](c(e));
    },
    function (t) {
      let n;
      const o = i(this);
      const a = c(t);
      const u = e(r, o, a);
      if (u.done) {
        return u.value;
      }
      if (!o.global) {
        return h(o, a);
      }
      const o_unicode = o.unicode;
      o.lastIndex = 0;
      const v = [];
      let p = 0;
      while ((n = h(o, a)) !== null) {
        const d = c(n[0]);
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
