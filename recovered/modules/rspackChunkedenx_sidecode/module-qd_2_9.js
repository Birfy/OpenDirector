import n from "./module-vB_11.js";
import o from "./module-F4_10.js";
import i from "./module-jOn_9.js";
import a from "./module-j_2_9.js";
import s from "./module-Ke_9.js";
import u from "./module-V6_10.js";
import c from "./module-X_10.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
n_exportTypedArrayMethod(
  "toSpliced",
  function (t, e) {
    let r;
    let n;
    let c;
    let h;
    let p;
    let g;
    let y;
    const m = n_aTypedArray(this);
    const b = n_getTypedArrayConstructor(m);
    const w = o(m);
    const A = a(t, w);
    const arguments_length = arguments.length;
    let E = 0;
    if (arguments_length === 0) {
      n = 0;
      r = 0;
    } else if (arguments_length === 1) {
      r = 0;
      n = w - A;
    } else {
      n = Math.min(Math.max(u(e), 0), w - A);
      if ((r = arguments_length - 2)) {
        c = i((h = new b(r)));
        for (let S = 2; S < arguments_length; S++) {
          p = arguments[S];
          h[S - 2] = c ? s(p) : +p;
        }
      }
    }
    for (y = new b((g = w + r - n)); E < A; E++) {
      y[E] = m[E];
    }
    for (; E < A + r; E++) {
      y[E] = h[E - A];
    }
    for (; E < g; E++) {
      y[E] = m[E + n - r];
    }
    return y;
  },
  !!c(function () {
    const t = new Int8Array([1]);
    const e = t.toSpliced(1, 0, {
      valueOf: function () {
        t[0] = 2;
        return 3;
      },
    });
    return e[0] !== 2 || e[1] !== 3;
  }),
);
