import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import i from "./module-O9_23.js";
import a from "./module-vj_24.js";
import s from "./module-Y_24.js";
import c from "./module-Mi_23.js";
import u from "./module-Su_23.js";
import f from "./module-ng_24.js";
import l from "./module-C_24.js";
import h from "./module-TK_24.js";
import v from "./module-S5_23.js";
import p from "./module-lN_23.js";
import d from "./module-N_23.js";
const g = p("replace");
const b = i("".indexOf);
const m = i("".replace);
const A = i("".slice);
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
      let i;
      let p;
      let S;
      let E;
      let O;
      let R;
      const M = a(this);
      let I = 0;
      let k = 0;
      let j = "";
      if (!c(t)) {
        if ((e = u(t)) && !~b(f(a(h(t))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if ((n = l(t, g))) {
          return o(n, t, M, r);
        }
        if (d && e) {
          return m(f(M), t, r);
        }
      }
      i = f(M);
      p = f(t);
      if (!(S = s(r))) {
        r = f(r);
      }
      O = Math.max(1, (E = p.length));
      for (I = w(i, p, 0); I !== -1;) {
        R = S ? f(r(p, I, i)) : v(p, i, I, [], undefined, r);
        j += A(i, k, I) + R;
        k = I + E;
        I = w(i, p, I + O);
      }
      if (k < i.length) {
        j += A(i, k);
      }
      return j;
    },
  },
);
