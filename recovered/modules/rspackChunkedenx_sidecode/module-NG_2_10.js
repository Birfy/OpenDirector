import n from "./module-A_11.js";
import o from "./module-ui_10.js";
import i from "./module-F_11.js";
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
