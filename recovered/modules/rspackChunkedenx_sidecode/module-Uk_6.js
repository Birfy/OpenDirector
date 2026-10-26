import n from "./module-M_2_6.js";
import o from "./module-xg_7.js";
import a from "./module-d_7.js";
import i from "./module-Mi_6.js";
import s from "./module-dV_6.js";
import c from "./module-ng_7.js";
import u from "./module-vj_7.js";
import f from "./module-C_7.js";
import l from "./module-Gl_6.js";
import h from "./module-uc_6.js";
o("match", function (t, r, e) {
  return [
    function (r) {
      const e = u(this);
      const o = i(r) ? undefined : f(r, t);
      if (o) {
        return n(o, r, e);
      }
      return new RegExp(r)[t](c(e));
    },
    function (t) {
      let n;
      const o = a(this);
      const i = c(t);
      const u = e(r, o, i);
      if (u.done) {
        return u.value;
      }
      if (!o.global) {
        return h(o, i);
      }
      const o_unicode = o.unicode;
      o.lastIndex = 0;
      const p = [];
      let v = 0;
      while ((n = h(o, i)) !== null) {
        const d = c(n[0]);
        p[v] = d;
        if (d === "") {
          o.lastIndex = l(i, s(o.lastIndex), o_unicode);
        }
        v++;
      }
      if (v === 0) {
        return null;
      }
      return p;
    },
  ];
});
