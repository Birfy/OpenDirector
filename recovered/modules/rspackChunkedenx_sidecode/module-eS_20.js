import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import i from "./module-O9_20.js";
import a from "./module-vj_21.js";
import s from "./module-Y_21.js";
import c from "./module-Mi_20.js";
import u from "./module-Su_20.js";
import f from "./module-ng_21.js";
import l from "./module-C_21.js";
import h from "./module-TK_21.js";
import v from "./module-S5_20.js";
import p from "./module-lN_20.js";
import d from "./module-N_20.js";
const g = p("replace");
const m = i("".indexOf);
const b = i("".replace);
const w = i("".slice);
const x = (t, r, e) => {
  if (e > t.length) {
    return -1;
  }
  if (r === "") {
    return e;
  }
  return m(t, r, e);
};
n(
  {
    target: "String",
    proto: true,
  },
  {
    replaceAll: function (t, r) {
      let e;
      let n;
      let i;
      let p;
      let S;
      let E;
      let O;
      let R;
      const M = a(this);
      let I = 0;
      let _ = 0;
      let k = "";
      if (!c(t)) {
        if ((e = u(t)) && !~m(f(a(h(t))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if ((n = l(t, g))) {
          return o(n, t, M, r);
        }
        if (d && e) {
          return b(f(M), t, r);
        }
      }
      i = f(M);
      p = f(t);
      if (!(S = s(r))) {
        r = f(r);
      }
      O = Math.max(1, (E = p.length));
      for (I = x(i, p, 0); I !== -1;) {
        R = S ? f(r(p, I, i)) : v(p, i, I, [], undefined, r);
        k += w(i, _, I) + R;
        _ = I + E;
        I = x(i, p, I + O);
      }
      if (_ < i.length) {
        k += w(i, _);
      }
      return k;
    },
  },
);
