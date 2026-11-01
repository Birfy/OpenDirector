import n from "./module-A_5.js";
import i from "./module-M_2_4.js";
import o from "./module-OA_4.js";
import s from "./module-Vt_2_4.js";
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    intersection: function (t) {
      return i(s, this, o(t));
    },
  },
);
