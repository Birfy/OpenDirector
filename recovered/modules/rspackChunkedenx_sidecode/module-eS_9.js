import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import i from "./module-O9_9.js";
import a from "./module-vj_10.js";
import s from "./module-Y_10.js";
import u from "./module-Mi_9.js";
import c from "./module-Su_9.js";
import f from "./module-ng_10.js";
import l from "./module-C_10.js";
import h from "./module-TK_10.js";
import v from "./module-S5_9.js";
import d from "./module-lN_9.js";
import p from "./module-N_9.js";
const g = d("replace");
const m = i("".indexOf);
const b = i("".replace);
const w = i("".slice);
const x = (t, e, r) => {
  if (r > t.length) {
    return -1;
  }
  if (e === "") {
    return r;
  }
  return m(t, e, r);
};
n(
  {
    target: "String",
    proto: true,
  },
  {
    replaceAll: function (t, e) {
      let r;
      let n;
      let i;
      let d;
      let E;
      let S;
      let O;
      let _;
      const R = a(this);
      let M = 0;
      let I = 0;
      let T = "";
      if (!u(t)) {
        if ((r = c(t)) && !~m(f(a(h(t))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if ((n = l(t, g))) {
          return o(n, t, R, e);
        }
        if (p && r) {
          return b(f(R), t, e);
        }
      }
      i = f(R);
      d = f(t);
      if (!(E = s(e))) {
        e = f(e);
      }
      O = Math.max(1, (S = d.length));
      for (M = x(i, d, 0); M !== -1;) {
        _ = E ? f(e(d, M, i)) : v(d, i, M, [], undefined, e);
        T += w(i, I, M) + _;
        I = M + S;
        M = x(i, d, M + O);
      }
      if (I < i.length) {
        T += w(i, I);
      }
      return T;
    },
  },
);
