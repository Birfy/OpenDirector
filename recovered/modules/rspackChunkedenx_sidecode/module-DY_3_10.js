import n from "./module-A_11.js";
import o from "./module-d_11.js";
import i from "./module-xsY_10.js";
import a from "./module-kj_10.js";
import s from "./module-NK_10.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_10.js"),
  },
  {
    toAsync: function () {
      return new a(s(new i(s(o(this)))));
    },
  },
);
