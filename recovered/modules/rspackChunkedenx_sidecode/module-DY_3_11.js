import n from "./module-A_12.js";
import o from "./module-d_12.js";
import i from "./module-xsY_11.js";
import a from "./module-kj_11.js";
import s from "./module-NK_11.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_11.js"),
  },
  {
    toAsync: function () {
      return new a(s(new i(s(o(this)))));
    },
  },
);
