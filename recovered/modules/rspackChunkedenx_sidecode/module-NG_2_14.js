import n from "./module-A_15.js";
import o from "./module-ui_14.js";
import i from "./module-F_15.js";
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
