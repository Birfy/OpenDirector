import n from "./module-M_2.js";
import o from "./module-xg.js";
import i from "./module-d.js";
import a from "./module-Mi.js";
import s from "./module-dV.js";
import u from "./module-ng.js";
import c from "./module-vj.js";
import f from "./module-C.js";
import h from "./module-Gl.js";
import l from "./module-uc.js";
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
