import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import a from "./module-O9_6.js";
import i from "./module-vj_7.js";
import s from "./module-Y_7.js";
import c from "./module-Mi_6.js";
import u from "./module-Su_6.js";
import f from "./module-ng_7.js";
import l from "./module-C_7.js";
import h from "./module-TK_7.js";
import p from "./module-S5_6.js";
import v from "./module-lN_6.js";
import d from "./module-N_6.js";
const g = v("replace");
const m = a("".indexOf);
const b = a("".replace);
const A = a("".slice);
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
      let a;
      let v;
      let E;
      let S;
      let O;
      let R;
      const M = i(this);
      let I = 0;
      let k = 0;
      let T = "";
      if (!c(t)) {
        if ((e = u(t)) && !~m(f(i(h(t))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if ((n = l(t, g))) {
          return o(n, t, M, r);
        }
        if (d && e) {
          return b(f(M), t, r);
        }
      }
      a = f(M);
      v = f(t);
      if (!(E = s(r))) {
        r = f(r);
      }
      O = Math.max(1, (S = v.length));
      for (I = x(a, v, 0); I !== -1;) {
        R = E ? f(r(v, I, a)) : p(v, a, I, [], undefined, r);
        T += A(a, k, I) + R;
        k = I + S;
        I = x(a, v, I + O);
      }
      if (k < a.length) {
        T += A(a, k);
      }
      return T;
    },
  },
);
