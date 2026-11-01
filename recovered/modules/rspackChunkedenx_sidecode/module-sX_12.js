import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import i from "./module-OA_11.js";
import a from "./module-PW_11.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    difference: function (r) {
      return o(a, this, i(r));
    },
  },
);
