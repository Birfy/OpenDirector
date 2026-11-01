import n from "./module-M_2_9.js";
import o from "./module-xg_10.js";
import i from "./module-d_10.js";
import a from "./module-Mi_9.js";
import s from "./module-dV_9.js";
import u from "./module-ng_10.js";
import c from "./module-vj_10.js";
import f from "./module-C_10.js";
import l from "./module-Gl_9.js";
import h from "./module-uc_9.js";
o("match", function (t, e, r) {
  return [
    function (e) {
      const r = c(this);
      const o = a(e) ? undefined : f(e, t);
      if (o) {
        return n(o, e, r);
      }
      return new RegExp(e)[t](u(r));
    },
    function (t) {
      let n;
      const o = i(this);
      const a = u(t);
      const c = r(e, o, a);
      if (c.done) {
        return c.value;
      }
      if (!o.global) {
        return h(o, a);
      }
      const o_unicode = o.unicode;
      o.lastIndex = 0;
      const v = [];
      let d = 0;
      while ((n = h(o, a)) !== null) {
        const p = u(n[0]);
        v[d] = p;
        if (p === "") {
          o.lastIndex = l(a, s(o.lastIndex), o_unicode);
        }
        d++;
      }
      if (d === 0) {
        return null;
      }
      return v;
    },
  ];
});
