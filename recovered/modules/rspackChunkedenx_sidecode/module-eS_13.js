import n from "./module-A_14.js";
import o from "./module-M_2_13.js";
import i from "./module-O9_13.js";
import a from "./module-vj_14.js";
import s from "./module-Y_14.js";
import u from "./module-Mi_13.js";
import c from "./module-Su_13.js";
import f from "./module-ng_14.js";
import h from "./module-C_14.js";
import l from "./module-TK_14.js";
import v from "./module-S5_13.js";
import p from "./module-lN_13.js";
import d from "./module-N_13.js";
const g = p("replace");
const b = i("".indexOf);
const m = i("".replace);
const A = i("".slice);
const w = (r, t, e) => {
  if (e > r.length) {
    return -1;
  }
  if (t === "") {
    return e;
  }
  return b(r, t, e);
};
n(
  {
    target: "String",
    proto: true,
  },
  {
    replaceAll: function (r, t) {
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
      let k = 0;
      let T = "";
      if (!u(r)) {
        if ((e = c(r)) && !~b(f(a(l(r))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if ((n = h(r, g))) {
          return o(n, r, M, t);
        }
        if (d && e) {
          return m(f(M), r, t);
        }
      }
      i = f(M);
      p = f(r);
      if (!(S = s(t))) {
        t = f(t);
      }
      O = Math.max(1, (E = p.length));
      for (I = w(i, p, 0); I !== -1;) {
        R = S ? f(t(p, I, i)) : v(p, i, I, [], undefined, t);
        T += A(i, k, I) + R;
        k = I + E;
        I = w(i, p, I + O);
      }
      if (k < i.length) {
        T += A(i, k);
      }
      return T;
    },
  },
);
