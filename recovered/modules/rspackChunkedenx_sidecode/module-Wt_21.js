import n from "./module-A_22.js";
import i from "./module-Yj_21.js";
import o from "./module-X_22.js";
import s from "./module-ma_22.js";
import a from "./module-d_22.js";
import u from "./module-j_2_21.js";
import c from "./module-dV_21.js";
import f from "./module-V0_21.js";
const s_ArrayBuffer = s.ArrayBuffer;
const s_DataView = s.DataView;
const l_prototype = s_DataView.prototype;
const p = i(s_ArrayBuffer.prototype.slice);
const d = i(l_prototype.getUint8);
const g = i(l_prototype.setUint8);
n(
  {
    target: "ArrayBuffer",
    proto: true,
    unsafe: true,
    forced: o(function () {
      return !new s_ArrayBuffer(2).slice(1, undefined).byteLength;
    }),
  },
  {
    slice: function (t, r) {
      if (p && r === undefined) {
        return p(a(this), t);
      }
      const byteLength = a(this).byteLength;
      for (
        var n = u(t, byteLength),
          i = u(r === undefined ? byteLength : r, byteLength),
          o = new (f(this, s_ArrayBuffer))(c(i - n)),
          s = new s_DataView(this),
          v = new s_DataView(o),
          y = 0;
        n < i;
      ) {
        g(v, y++, d(s, n++));
      }
      return o;
    },
  },
);
