import n from "./module-A_16.js";
import o from "./module-ui_15.js";
import i from "./module-F_16.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (r, t) {
      return o(i(this), Array, r, t);
    },
  },
);
