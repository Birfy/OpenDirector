import n from "./module-A_6.js";
import i from "./module-d_6.js";
import o from "./module-xsY_5.js";
import s from "./module-kj_5.js";
import a from "./module-NK_5.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_5.js"),
  },
  {
    toAsync: function () {
      return new s(a(new o(a(i(this)))));
    },
  },
);
