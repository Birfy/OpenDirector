import n from "ga";
import i from "OG";
import a from "Gn";
import o from "g2";
import s from "wm";
import A from "Ok";
import c from "VV";
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
    let d;
    let p;
    let m;
    const y = n_aTypedArray(this);
    const b = n_getTypedArrayConstructor(y);
    const v = i(y);
    const I = o(t, v);
    const arguments_length = arguments.length;
    let C = 0;
    if (arguments_length === 0) {
      n = 0;
      r = 0;
    } else if (arguments_length === 1) {
      r = 0;
      n = v - I;
    } else {
      n = Math.min(Math.max(A(e), 0), v - I);
      if ((r = arguments_length - 2)) {
        c = a((h = new b(r)));
        for (let B = 2; B < arguments_length; B++) {
          d = arguments[B];
          h[B - 2] = c ? s(d) : +d;
        }
      }
    }
    for (m = new b((p = v + r - n)); C < I; C++) {
      m[C] = y[C];
    }
    for (; C < I + r; C++) {
      m[C] = h[C - I];
    }
    for (; C < p; C++) {
      m[C] = y[C + n - r];
    }
    return m;
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
