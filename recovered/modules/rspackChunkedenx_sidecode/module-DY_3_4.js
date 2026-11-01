import n from "./module-A_5.js";
import i from "./module-d_5.js";
import o from "./module-xsY_4.js";
import s from "./module-kj_4.js";
import a from "./module-NK_4.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_4.js"),
  },
  {
    toAsync: function () {
      return new s(a(new o(a(i(this)))));
    },
  },
);
