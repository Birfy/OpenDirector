import n from "./module-A_20.js";
import o from "./module-ui_19.js";
import i from "./module-F_20.js";
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
