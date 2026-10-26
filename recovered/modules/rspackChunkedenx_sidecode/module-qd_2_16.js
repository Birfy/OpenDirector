import n from "./module-vB_18.js";
import o from "./module-F4_17.js";
import i from "./module-jOn_16.js";
import a from "./module-j_2_16.js";
import s from "./module-Ke_16.js";
import u from "./module-V6_17.js";
import c from "./module-X_17.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
n_exportTypedArrayMethod(
  "toSpliced",
  function (t, r) {
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
    const x = a(t, A);
    const arguments_length = arguments.length;
    let S = 0;
    if (arguments_length === 0) {
      n = 0;
      e = 0;
    } else if (arguments_length === 1) {
      e = 0;
      n = A - x;
    } else {
      n = Math.min(Math.max(u(r), 0), A - x);
      if ((e = arguments_length - 2)) {
        c = i((h = new b(e)));
        for (let E = 2; E < arguments_length; E++) {
          d = arguments[E];
          h[E - 2] = c ? s(d) : +d;
        }
      }
    }
    for (y = new b((g = A + e - n)); S < x; S++) {
      y[S] = m[S];
    }
    for (; S < x + e; S++) {
      y[S] = h[S - x];
    }
    for (; S < g; S++) {
      y[S] = m[S + n - e];
    }
    return y;
  },
  !!c(function () {
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
