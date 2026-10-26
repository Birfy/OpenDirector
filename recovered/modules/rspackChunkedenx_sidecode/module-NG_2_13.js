import n from "./module-A_14.js";
import o from "./module-ui_13.js";
import i from "./module-F_14.js";
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
