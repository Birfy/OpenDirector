import $ from "./module-M_2_12.js";
import tt from "./module-xg_13.js";
import te from "./module-d_13.js";
import tr from "./module-Mi_12.js";
import tn from "./module-vj_13.js";
import ti from "./module-Ff_12.js";
import to from "./module-ng_13.js";
import ta from "./module-C_13.js";
import ts from "./module-uc_12.js";
tt("search", function (J, Z, Q) {
  return [
    function (Z) {
      const Q = tn(this);
      const tt = tr(Z) ? undefined : ta(Z, J);
      if (tt) {
        return $(tt, Z, Q);
      }
      return new RegExp(Z)[J](to(Q));
    },
    function (J) {
      const $ = te(this);
      const tt = to(J);
      const tr = Q(Z, $, tt);
      if (tr.done) {
        return tr.value;
      }
      const $_lastIndex = $.lastIndex;
      if (!ti($_lastIndex, 0)) {
        $.lastIndex = 0;
      }
      const ta = ts($, tt);
      if (!ti($.lastIndex, $_lastIndex)) {
        $.lastIndex = $_lastIndex;
      }
      if (ta === null) {
        return -1;
      }
      return ta.index;
    },
  ];
});
