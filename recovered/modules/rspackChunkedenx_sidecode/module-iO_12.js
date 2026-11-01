import $ from "./module-A_13.js";
import tt from "./module-WG_2_12.js";
import te from "./module-zQ_13.js";
import tr from "./module-yh_12.js";
import tn from "./module-vM_13.js";
const tr_Set = tr.Set;
const tr_add = tr.add;
$(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    filter: function (J) {
      const Z = te(this);
      const Q = tt(J, arguments.length > 1 ? arguments[1] : undefined);
      const $ = new tr_Set();
      tn(Z, function (J) {
        if (Q(J, J, Z)) {
          tr_add($, J);
        }
      });
      return $;
    },
  },
);
