import $ from "./module-A_13.js";
import tt from "./module-aq_12.js";
import te from "./module-F4_13.js";
import tr from "./module-V6_13.js";
import tn from "./module-mS_13.js";
$(
  {
    target: "Array",
    proto: true,
  },
  {
    at: function (J) {
      const Z = tt(this);
      const Q = te(Z);
      const $ = tr(J);
      const tn = $ >= 0 ? $ : Q + $;
      if (tn < 0 || tn >= Q) {
        return undefined;
      }
      return Z[tn];
    },
  },
);
tn("at");
