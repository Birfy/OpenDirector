import n from "./module-A_7.js";
import o from "./module-Yj_6.js";
import a from "./module-X_7.js";
import i from "./module-ma_7.js";
import s from "./module-d_7.js";
import c from "./module-j_2_6.js";
import u from "./module-dV_6.js";
import f from "./module-V0_6.js";
const i_ArrayBuffer = i.ArrayBuffer;
const i_DataView = i.DataView;
const h_prototype = i_DataView.prototype;
const v = o(i_ArrayBuffer.prototype.slice);
const d = o(h_prototype.getUint8);
const g = o(h_prototype.setUint8);
n(
  {
    target: "ArrayBuffer",
    proto: true,
    unsafe: true,
    forced: a(function () {
      return !new i_ArrayBuffer(2).slice(1, undefined).byteLength;
    }),
  },
  {
    slice: function (t, r) {
      if (v && r === undefined) {
        return v(s(this), t);
      }
      const byteLength = s(this).byteLength;
      for (
        var n = c(t, byteLength),
          o = c(r === undefined ? byteLength : r, byteLength),
          a = new (f(this, i_ArrayBuffer))(u(o - n)),
          i = new i_DataView(this),
          p = new i_DataView(a),
          y = 0;
        n < o;
      ) {
        g(p, y++, d(i, n++));
      }
      return a;
    },
  },
);
