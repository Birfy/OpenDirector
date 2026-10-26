import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
import o from "./module-OA_3.js";
import s from "./module-Vt_2_3.js";
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
