import n from "./module-A_3.js";
import i from "./module-wG_4.js";
import o from "./module-F_3.js";
import s from "./module-mS_3.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toReversed: function () {
      return i(o(this), Array);
    },
  },
);
s("toReversed");
