import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import i from "./module-OA_19.js";
import a from "./module-XL_2_19.js";
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
