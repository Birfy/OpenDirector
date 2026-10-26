import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-O9_11.js";
import a from "./module-vj_12.js";
import s from "./module-Y_12.js";
import u from "./module-Mi_11.js";
import c from "./module-Su_11.js";
import f from "./module-ng_12.js";
import h from "./module-C_12.js";
import l from "./module-TK_12.js";
import v from "./module-S5_11.js";
import p from "./module-lN_11.js";
import d from "./module-N_11.js";
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
      let j = "";
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
