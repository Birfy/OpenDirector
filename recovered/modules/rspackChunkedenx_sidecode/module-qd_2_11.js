import n from "./module-vB_13.js";
import o from "./module-F4_12.js";
import i from "./module-jOn_11.js";
import a from "./module-j_2_11.js";
import s from "./module-Ke_11.js";
import u from "./module-V6_12.js";
import c from "./module-X_12.js";
const n_aTypedArray = n.aTypedArray;
const n_getTypedArrayConstructor = n.getTypedArrayConstructor;
const n_exportTypedArrayMethod = n.exportTypedArrayMethod;
n_exportTypedArrayMethod(
  "toSpliced",
  function (r, t) {
    let e;
    let n;
    let c;
    let l;
    let d;
    let g;
    let y;
    const b = n_aTypedArray(this);
    const m = n_getTypedArrayConstructor(b);
    const A = o(b);
    const x = a(r, A);
    const arguments_length = arguments.length;
    let S = 0;
    if (arguments_length === 0) {
      n = 0;
      e = 0;
    } else if (arguments_length === 1) {
      e = 0;
      n = A - x;
    } else {
      n = Math.min(Math.max(u(t), 0), A - x);
      if ((e = arguments_length - 2)) {
        c = i((l = new m(e)));
        for (let E = 2; E < arguments_length; E++) {
          d = arguments[E];
          l[E - 2] = c ? s(d) : +d;
        }
      }
    }
    for (y = new m((g = A + e - n)); S < x; S++) {
      y[S] = b[S];
    }
    for (; S < x + e; S++) {
      y[S] = l[S - x];
    }
    for (; S < g; S++) {
      y[S] = b[S + n - e];
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
