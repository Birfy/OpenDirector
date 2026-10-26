import n from "./module-A_21.js";
import o from "./module-Yj_20.js";
import i from "./module-X_21.js";
import a from "./module-ma_21.js";
import s from "./module-d_21.js";
import c from "./module-j_2_20.js";
import u from "./module-dV_20.js";
import f from "./module-V0_20.js";
const a_ArrayBuffer = a.ArrayBuffer;
const a_DataView = a.DataView;
const h_prototype = a_DataView.prototype;
const p = o(a_ArrayBuffer.prototype.slice);
const d = o(h_prototype.getUint8);
const g = o(h_prototype.setUint8);
n(
  {
    target: "ArrayBuffer",
    proto: true,
    unsafe: true,
    forced: i(function () {
      return !new a_ArrayBuffer(2).slice(1, undefined).byteLength;
    }),
  },
  {
    slice: function (t, r) {
      if (p && r === undefined) {
        return p(s(this), t);
      }
      const byteLength = s(this).byteLength;
      for (
        var n = c(t, byteLength),
          o = c(r === undefined ? byteLength : r, byteLength),
          i = new (f(this, a_ArrayBuffer))(u(o - n)),
          a = new a_DataView(this),
          v = new a_DataView(i),
          y = 0;
        n < o;
      ) {
        g(v, y++, d(a, n++));
      }
      return i;
    },
  },
);
