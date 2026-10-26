import n from "./module-vB_9.js";
import o from "./module-F4_8.js";
import i from "./module-jOn_7.js";
import a from "./module-j_2_7.js";
import s from "./module-Ke_7.js";
import u from "./module-V6_8.js";
import c from "./module-X_8.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
n_exportTypedArrayMethod(
  "toSpliced",
  function (r, t) {
    let e;
    let n;
    let c;
    let h;
    let d;
    let g;
    let y;
    const m = n_aTypedArray(this);
    const b = n_getTypedArrayConstructor(m);
    const A = o(m);
    const w = a(r, A);
    const arguments_length = arguments.length;
    let E = 0;
    if (arguments_length === 0) {
      n = 0;
      e = 0;
    } else if (arguments_length === 1) {
      e = 0;
      n = A - w;
    } else {
      n = Math.min(Math.max(u(t), 0), A - w);
      if ((e = arguments_length - 2)) {
        c = i((h = new b(e)));
        for (let S = 2; S < arguments_length; S++) {
          d = arguments[S];
          h[S - 2] = c ? s(d) : +d;
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
  !!c(function () {
    const r = new Int8Array([1]);
    const t = r.toSpliced(1, 0, {
      valueOf: function () {
        r[0] = 2;
        return 3;
      },
    });
    return t[0] !== 2 || t[1] !== 3;
  }),
);
