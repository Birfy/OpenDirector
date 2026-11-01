import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import i from "./module-O9_7.js";
import a from "./module-vj_8.js";
import s from "./module-Y_8.js";
import u from "./module-Mi_7.js";
import c from "./module-Su_7.js";
import f from "./module-ng_8.js";
import l from "./module-C_8.js";
import h from "./module-TK_8.js";
import v from "./module-S5_7.js";
import p from "./module-lN_7.js";
import d from "./module-N_7.js";
const g = p("replace");
const m = i("".indexOf);
const b = i("".replace);
const A = i("".slice);
const x = (r, t, e) => {
  if (e > r.length) {
    return -1;
  }
  if (t === "") {
    return e;
  }
  return m(r, t, e);
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
      let E;
      let S;
      let O;
      let R;
      const M = a(this);
      let I = 0;
      let k = 0;
      let T = "";
      if (!u(r)) {
        if ((e = c(r)) && !~m(f(a(h(r))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if ((n = l(r, g))) {
          return o(n, r, M, t);
        }
        if (d && e) {
          return b(f(M), r, t);
        }
      }
      i = f(M);
      p = f(r);
      if (!(E = s(t))) {
        t = f(t);
      }
      O = Math.max(1, (S = p.length));
      for (I = x(i, p, 0); I !== -1;) {
        R = E ? f(t(p, I, i)) : v(p, i, I, [], undefined, t);
        T += A(i, k, I) + R;
        k = I + S;
        I = x(i, p, I + O);
      }
      if (k < i.length) {
        T += A(i, k);
      }
      return T;
    },
  },
);
