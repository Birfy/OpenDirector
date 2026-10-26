import n from "./module-A_23.js";
import i from "./module-ui_22.js";
import o from "./module-F_23.js";
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
