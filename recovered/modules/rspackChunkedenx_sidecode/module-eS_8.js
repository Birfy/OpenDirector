import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
import o from "./module-O9_8.js";
import s from "./module-vj_9.js";
import a from "./module-Y_9.js";
import u from "./module-Mi_8.js";
import c from "./module-Su_8.js";
import f from "./module-ng_9.js";
import h from "./module-C_9.js";
import l from "./module-TK_9.js";
import v from "./module-S5_8.js";
import p from "./module-lN_8.js";
import d from "./module-N_8.js";
const g = p("replace");
const b = o("".indexOf);
const m = o("".replace);
const A = o("".slice);
const w = (t, r, e) => {
  if (e > t.length) {
    return -1;
  }
  if (r === "") {
    return e;
  }
  return b(t, r, e);
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
      let o;
      let p;
      let S;
      let E;
      let O;
      let R;
      const M = s(this);
      let I = 0;
      let k = 0;
      let T = "";
      if (!u(t)) {
        if ((e = c(t)) && !~b(f(s(l(t))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if ((n = h(t, g))) {
          return i(n, t, M, r);
        }
        if (d && e) {
          return m(f(M), t, r);
        }
      }
      o = f(M);
      p = f(t);
      if (!(S = a(r))) {
        r = f(r);
      }
      O = Math.max(1, (E = p.length));
      for (I = w(o, p, 0); I !== -1;) {
        R = S ? f(r(p, I, o)) : v(p, o, I, [], undefined, r);
        T += A(o, k, I) + R;
        k = I + E;
        I = w(o, p, I + O);
      }
      if (k < o.length) {
        T += A(o, k);
      }
      return T;
    },
  },
);
