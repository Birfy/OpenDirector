import n from "./module-A_7.js";
import o from "./module-ui_6.js";
import a from "./module-F_7.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    with: function (t, r) {
      return o(a(this), Array, t, r);
    },
  },
);
