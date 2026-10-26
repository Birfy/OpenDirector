import n from "./module-vB_22.js";
import o from "./module-F4_21.js";
import i from "./module-jOn_20.js";
import a from "./module-j_2_20.js";
import s from "./module-Ke_20.js";
import c from "./module-V6_21.js";
import u from "./module-X_21.js";
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
    const w = o(m);
    const A = a(t, w);
    const arguments_length = arguments.length;
    let S = 0;
    if (arguments_length === 0) {
      n = 0;
      e = 0;
    } else if (arguments_length === 1) {
      e = 0;
      n = w - A;
    } else {
      n = Math.min(Math.max(c(r), 0), w - A);
      if ((e = arguments_length - 2)) {
        u = i((h = new b(e)));
        for (let E = 2; E < arguments_length; E++) {
          d = arguments[E];
          h[E - 2] = u ? s(d) : +d;
        }
      }
    }
    for (y = new b((g = w + e - n)); S < A; S++) {
      y[S] = m[S];
    }
    for (; S < A + e; S++) {
      y[S] = h[S - A];
    }
    for (; S < g; S++) {
      y[S] = m[S + n - e];
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
