import n from "./module-A_6.js";
import i from "./module-M_2_5.js";
import o from "./module-OA_5.js";
import s from "./module-sy_5.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    symmetricDifference: function (t) {
      return i(s, this, o(t));
    },
  },
);
