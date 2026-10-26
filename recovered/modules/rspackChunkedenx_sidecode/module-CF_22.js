import n from "./module-A_23.js";
import i from "./module-M_2_22.js";
import o from "./module-OA_22.js";
import s from "./module-Yy_22.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    union: function (t) {
      return i(s, this, o(t));
    },
  },
);
