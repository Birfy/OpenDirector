import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import o from "./module-OA_21.js";
import s from "./module-XL_2_21.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    isDisjointFrom: function (t) {
      return i(s, this, o(t));
    },
  },
);
