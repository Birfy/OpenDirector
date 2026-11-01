import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-OA_12.js";
import tr from "./module-PW_12.js";
$(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    difference: function (J) {
      return tt(tr, this, te(J));
    },
  },
);
