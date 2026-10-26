import n from "./module-M_2_22.js";
import i from "./module-xg_23.js";
import o from "./module-d_23.js";
import s from "./module-Mi_22.js";
import a from "./module-dV_22.js";
import u from "./module-ng_23.js";
import c from "./module-vj_23.js";
import f from "./module-C_23.js";
import h from "./module-Gl_22.js";
import l from "./module-uc_22.js";
i("match", function (t, r, e) {
  return [
    function (r) {
      const e = c(this);
      const i = s(r) ? undefined : f(r, t);
      if (i) {
        return n(i, r, e);
      }
      return new RegExp(r)[t](u(e));
    },
    function (t) {
      let n;
      const i = o(this);
      const s = u(t);
      const c = e(r, i, s);
      if (c.done) {
        return c.value;
      }
      if (!i.global) {
        return l(i, s);
      }
      const i_unicode = i.unicode;
      i.lastIndex = 0;
      const v = [];
      let p = 0;
      while ((n = l(i, s)) !== null) {
        const d = u(n[0]);
        v[p] = d;
        if (d === "") {
          i.lastIndex = h(s, a(i.lastIndex), i_unicode);
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
