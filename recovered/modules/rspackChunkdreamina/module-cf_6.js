import n from "./module-g.js";
import o from "./module-p3.js";
import i from "./module-o.js";
import a from "./module-H_2.js";
import s from "./module-r.js";
import u from "./module-D.js";
import c from "./module-hyV.js";
import f from "./module-BC_2.js";
import l from "./module-T_2.js";
import p from "./module-zV_3.js";
import h from "./module-Zi_4.js";
import v from "./module-Nt_3.js";
import d from "./module-K.js";
const g = v("replace");
const m = i("".indexOf);
const x = i("".replace);
const b = i("".slice);
const A = (e, t, r) => {
  if (r > e.length) {
    return -1;
  }
  if (t === "") {
    return r;
  }
  return m(e, t, r);
};
n(
  {
    target: "String",
    proto: true,
  },
  {
    replaceAll: function (e, t) {
      let r;
      let n;
      let i;
      let v;
      let E;
      let j;
      let I;
      let R;
      const z = a(this);
      let O = 0;
      let S = 0;
      let _ = "";
      if (!u(e)) {
        if ((r = c(e)) && !~m(f(a(p(e))), "g")) {
          throw TypeError("`.replaceAll` does not allow non-global regexes");
        }
        if ((n = l(e, g))) {
          return o(n, e, z, t);
        }
        if (d && r) {
          return x(f(z), e, t);
        }
      }
      i = f(z);
      v = f(e);
      if (!(E = s(t))) {
        t = f(t);
      }
      I = Math.max(1, (j = v.length));
      for (O = A(i, v, 0); O !== -1;) {
        R = E ? f(t(v, O, i)) : h(v, i, O, [], undefined, t);
        _ += b(i, S, O) + R;
        S = O + j;
        O = A(i, v, O + I);
      }
      if (S < i.length) {
        _ += b(i, S);
      }
      return _;
    },
  },
);
