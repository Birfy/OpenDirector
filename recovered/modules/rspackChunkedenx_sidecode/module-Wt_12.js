import $ from "./module-A_13.js";
import tt from "./module-Yj_12.js";
import te from "./module-X_13.js";
import tr from "./module-ma_13.js";
import tn from "./module-d_13.js";
import ti from "./module-j_2_12.js";
import to from "./module-dV_12.js";
import ta from "./module-V0_12.js";
const tr_ArrayBuffer = tr.ArrayBuffer;
const tr_DataView = tr.DataView;
const tf_prototype = tr_DataView.prototype;
const tc = tt(tr_ArrayBuffer.prototype.slice);
const th = tt(tf_prototype.getUint8);
const td = tt(tf_prototype.setUint8);
$(
  {
    target: "ArrayBuffer",
    proto: true,
    unsafe: true,
    forced: te(function () {
      return !new tr_ArrayBuffer(2).slice(1, undefined).byteLength;
    }),
  },
  {
    slice: function (J, Z) {
      if (tc && Z === undefined) {
        return tc(tn(this), J);
      }
      const byteLength = tn(this).byteLength;
      for (
        var $ = ti(J, byteLength),
          tt = ti(Z === undefined ? byteLength : Z, byteLength),
          te = new (ta(this, tr_ArrayBuffer))(to(tt - $)),
          tr = new tr_DataView(this),
          tu = new tr_DataView(te),
          tl = 0;
        $ < tt;
      ) {
        td(tu, tl++, th(tr, $++));
      }
      return te;
    },
  },
);
