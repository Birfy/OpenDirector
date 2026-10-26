import n from "./module-A_10.js";
import o from "./module-ui_9.js";
import i from "./module-F_10.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (t, e) {
      return o(i(this), Array, t, e);
    },
  },
);
