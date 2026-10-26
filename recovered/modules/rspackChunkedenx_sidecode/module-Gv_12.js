import $ from "./module-A_13.js";
import tt from "./module-WG_2_12.js";
import te from "./module-ot_13.js";
import tr from "./module-e7_12.js";
import tn from "./module-JA_13.js";
const tr_Map = tr.Map;
const tr_set = tr.set;
$(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    filter: function (J) {
      const Z = te(this);
      const Q = tt(J, arguments.length > 1 ? arguments[1] : undefined);
      const $ = new tr_Map();
      tn(Z, function (J, tt) {
        if (Q(J, tt, Z)) {
          tr_set($, tt, J);
        }
      });
      return $;
    },
  },
);
