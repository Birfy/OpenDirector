import n from "./module-A_16.js";
import o from "./module-M_2_15.js";
import i from "./module-OA_15.js";
import a from "./module-XL_2_15.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    isDisjointFrom: function (r) {
      return o(a, this, i(r));
    },
  },
);
