import n from "./module-A_7.js";
import o from "./module-d_7.js";
import a from "./module-xsY_6.js";
import i from "./module-kj_6.js";
import s from "./module-NK_6.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_6.js"),
  },
  {
    toAsync: function () {
      return new i(s(new a(s(o(this)))));
    },
  },
);
