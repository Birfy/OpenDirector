import n from "./module-A.js";
import o from "./module-Yj.js";
import i from "./module-X.js";
import a from "./module-ma.js";
import s from "./module-d.js";
import u from "./module-j_2.js";
import c from "./module-dV.js";
import f from "./module-V0.js";
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
    slice: function (t, r) {
      if (p && r === undefined) {
        return p(s(this), t);
      }
      const byteLength = s(this).byteLength;
      for (
        var n = u(t, byteLength),
          o = u(r === undefined ? byteLength : r, byteLength),
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
