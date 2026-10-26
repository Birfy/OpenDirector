import n from "./module-A_3.js";
import i from "./module-d_3.js";
import o from "./module-xsY_2.js";
import s from "./module-kj_2.js";
import a from "./module-NK_2.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_2.js"),
  },
  {
    toAsync: function () {
      return new s(a(new o(a(i(this)))));
    },
  },
);
