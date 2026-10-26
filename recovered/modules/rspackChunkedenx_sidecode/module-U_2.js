import n from "./module-A.js";
import o from "./module-wG.js";
import i from "./module-F.js";
import a from "./module-mS.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toReversed: function () {
      return o(i(this), Array);
    },
  },
);
a("toReversed");
