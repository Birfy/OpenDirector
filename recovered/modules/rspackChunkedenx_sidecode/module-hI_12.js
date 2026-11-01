import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-xK_12.js";
import tr from "./module-Y_13.js";
import tn from "./module-vo_12.js";
import _ti from "./module-e7_12.js";
const _ti_Map = _ti.Map;
$(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    keyBy: function (J, Z) {
      const Q = new (tr(this) ? this : _ti_Map)();
      tn(Z);
      const $ = tn(Q.set);
      te(J, function (J) {
        tt($, Q, Z(J), J);
      });
      return Q;
    },
  },
);
