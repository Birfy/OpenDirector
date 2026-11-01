import n from "./module-p3.js";
import o from "./module-v1_2.js";
import i from "./module-IF_2.js";
import a from "./module-D.js";
import s from "./module-L_2.js";
import u from "./module-BC_2.js";
import c from "./module-H_2.js";
import f from "./module-T_2.js";
import l from "./module-n4.js";
import p from "./module-Ct_3.js";
o("match", function (e, t, r) {
  return [
    function (t) {
      const r = c(this);
      const o = a(t) ? undefined : f(t, e);
      if (o) {
        return n(o, t, r);
      }
      return new RegExp(t)[e](u(r));
    },
    function (e) {
      let n;
      const o = i(this);
      const a = u(e);
      const c = r(t, o, a);
      if (c.done) {
        return c.value;
      }
      if (!o.global) {
        return p(o, a);
      }
      const o_unicode = o.unicode;
      o.lastIndex = 0;
      const h = [];
      let v = 0;
      while ((n = p(o, a)) !== null) {
        const d = u(n[0]);
        h[v] = d;
        if (d === "") {
          o.lastIndex = l(a, s(o.lastIndex), o_unicode);
        }
        v++;
      }
      if (v === 0) {
        return null;
      }
      return h;
    },
  ];
});
