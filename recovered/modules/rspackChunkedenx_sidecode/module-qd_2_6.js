import n from "./module-vB_8.js";
import o from "./module-F4_7.js";
import a from "./module-jOn_6.js";
import i from "./module-j_2_6.js";
import s from "./module-Ke_6.js";
import c from "./module-V6_7.js";
import u from "./module-X_7.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
n_exportTypedArrayMethod(
  "toSpliced",
  function (t, r) {
    let e;
    let n;
    let u;
    let h;
    let d;
    let g;
    let y;
    const m = n_aTypedArray(this);
    const b = n_getTypedArrayConstructor(m);
    const A = o(m);
    const w = i(t, A);
    const arguments_length = arguments.length;
    let E = 0;
    if (arguments_length === 0) {
      n = 0;
      e = 0;
    } else if (arguments_length === 1) {
      e = 0;
      n = A - w;
    } else {
      n = Math.min(Math.max(c(r), 0), A - w);
      if ((e = arguments_length - 2)) {
        u = a((h = new b(e)));
        for (let S = 2; S < arguments_length; S++) {
          d = arguments[S];
          h[S - 2] = u ? s(d) : +d;
        }
      }
    }
    for (y = new b((g = A + e - n)); E < w; E++) {
      y[E] = m[E];
    }
    for (; E < w + e; E++) {
      y[E] = h[E - w];
    }
    for (; E < g; E++) {
      y[E] = m[E + n - e];
    }
    return y;
  },
  !!u(function () {
    const t = new Int8Array([1]);
    const r = t.toSpliced(1, 0, {
      valueOf: function () {
        t[0] = 2;
        return 3;
      },
    });
    return r[0] !== 2 || r[1] !== 3;
  }),
);
