import n from "./module-A_18.js";
import o from "./module-Yj_17.js";
import i from "./module-X_18.js";
import a from "./module-ma_18.js";
import s from "./module-d_18.js";
import u from "./module-j_2_17.js";
import c from "./module-dV_17.js";
import f from "./module-V0_17.js";
const a_ArrayBuffer = a.ArrayBuffer;
const a_DataView = a.DataView;
const l_prototype = a_DataView.prototype;
const p = o(a_ArrayBuffer.prototype.slice);
const d = o(l_prototype.getUint8);
const g = o(l_prototype.setUint8);
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
    slice: function (r, t) {
      if (p && t === undefined) {
        return p(s(this), r);
      }
      const byteLength = s(this).byteLength;
      for (
        var n = u(r, byteLength),
          o = u(t === undefined ? byteLength : t, byteLength),
          i = new (f(this, a_ArrayBuffer))(c(o - n)),
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
