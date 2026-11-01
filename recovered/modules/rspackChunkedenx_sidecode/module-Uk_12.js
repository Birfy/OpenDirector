import $ from "./module-M_2_12.js";
import tt from "./module-xg_13.js";
import te from "./module-d_13.js";
import tr from "./module-Mi_12.js";
import tn from "./module-dV_12.js";
import ti from "./module-ng_13.js";
import to from "./module-vj_13.js";
import ta from "./module-C_13.js";
import ts from "./module-Gl_12.js";
import tf from "./module-uc_12.js";
tt("match", function (J, Z, Q) {
  return [
    function (Z) {
      const Q = to(this);
      const tt = tr(Z) ? undefined : ta(Z, J);
      if (tt) {
        return $(tt, Z, Q);
      }
      return new RegExp(Z)[J](ti(Q));
    },
    function (J) {
      let $;
      const tt = te(this);
      const tr = ti(J);
      const to = Q(Z, tt, tr);
      if (to.done) {
        return to.value;
      }
      if (!tt.global) {
        return tf(tt, tr);
      }
      const tt_unicode = tt.unicode;
      tt.lastIndex = 0;
      const tu = [];
      let tc = 0;
      while (($ = tf(tt, tr)) !== null) {
        const th = ti($[0]);
        tu[tc] = th;
        if (th === "") {
          tt.lastIndex = ts(tr, tn(tt.lastIndex), tt_unicode);
        }
        tc++;
      }
      if (tc === 0) {
        return null;
      }
      return tu;
    },
  ];
});
