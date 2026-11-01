import n from "./module-A_21.js";
import o from "./module-ui_20.js";
import i from "./module-F_21.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (t, r) {
      return o(i(this), Array, t, r);
    },
  },
);
