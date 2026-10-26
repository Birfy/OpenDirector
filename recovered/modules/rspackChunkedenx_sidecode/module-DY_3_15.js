import n from "./module-A_16.js";
import o from "./module-d_16.js";
import i from "./module-xsY_15.js";
import a from "./module-kj_15.js";
import s from "./module-NK_15.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_15.js"),
  },
  {
    toAsync: function () {
      return new a(s(new i(s(o(this)))));
    },
  },
);
