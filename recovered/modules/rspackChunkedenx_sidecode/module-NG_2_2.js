import n from "./module-A_3.js";
import i from "./module-ui_2.js";
import o from "./module-F_3.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (t, r) {
      return i(o(this), Array, t, r);
    },
  },
);
