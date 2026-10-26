import n from "./module-A_24.js";
import o from "./module-ui_23.js";
import i from "./module-F_24.js";
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
