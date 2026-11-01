import n from "./module-A_10.js";
import o from "./module-Yj_9.js";
import i from "./module-X_10.js";
import a from "./module-ma_10.js";
import s from "./module-d_10.js";
import u from "./module-j_2_9.js";
import c from "./module-dV_9.js";
import f from "./module-V0_9.js";
const a_ArrayBuffer = a.ArrayBuffer;
const a_DataView = a.DataView;
const h_prototype = a_DataView.prototype;
const d = o(a_ArrayBuffer.prototype.slice);
const p = o(h_prototype.getUint8);
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
    slice: function (t, e) {
      if (d && e === undefined) {
        return d(s(this), t);
      }
      const byteLength = s(this).byteLength;
      for (
        var n = u(t, byteLength),
          o = u(e === undefined ? byteLength : e, byteLength),
          i = new (f(this, a_ArrayBuffer))(c(o - n)),
          a = new a_DataView(this),
          v = new a_DataView(i),
          y = 0;
        n < o;
      ) {
        g(v, y++, p(a, n++));
      }
      return i;
    },
  },
);
