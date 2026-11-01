import n from "./module-A_4.js";
import i from "./module-d_4.js";
import o from "./module-xsY_3.js";
import s from "./module-kj_3.js";
import a from "./module-NK_3.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_3.js"),
  },
  {
    toAsync: function () {
      return new s(a(new o(a(i(this)))));
    },
  },
);
