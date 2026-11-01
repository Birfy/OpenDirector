import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-zQ_13.js";
import tr from "./module-vM_13.js";
import tn from "./module-ng_13.js";
const ti = tt([].join);
const to = tt([].push);
$(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    join: function (J) {
      const Z = te(this);
      const Q = J === undefined ? "," : tn(J);
      const $ = [];
      tr(Z, function (J) {
        to($, J);
      });
      return ti($, Q);
    },
  },
);
