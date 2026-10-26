import n from "./module-g.js";
import o from "./module-Kp.js";
import i from "./module-VV_4.js";
import a from "./module-PR_3.js";
import s from "./module-IF_2.js";
import u from "./module-g2_2.js";
import c from "./module-L_2.js";
import f from "./module-MV_4.js";
const a_ArrayBuffer = a.ArrayBuffer;
const a_DataView = a.DataView;
const p_prototype = a_DataView.prototype;
const v = o(a_ArrayBuffer.prototype.slice);
const d = o(p_prototype.getUint8);
const g = o(p_prototype.setUint8);
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
    slice: function (e, t) {
      if (v && t === undefined) {
        return v(s(this), e);
      }
      const byteLength = s(this).byteLength;
      for (
        var n = u(e, byteLength),
          o = u(t === undefined ? byteLength : t, byteLength),
          i = new (f(this, a_ArrayBuffer))(c(o - n)),
          a = new a_DataView(this),
          h = new a_DataView(i),
          y = 0;
        n < o;
      ) {
        g(h, y++, d(a, n++));
      }
      return i;
    },
  },
);
