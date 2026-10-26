import n from "./module-A_3.js";
import i from "./module-M_2_2.js";
import o from "./module-OA_2.js";
import s from "./module-sy_2.js";
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
