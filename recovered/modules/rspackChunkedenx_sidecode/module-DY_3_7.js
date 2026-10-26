import n from "./module-A_8.js";
import o from "./module-d_8.js";
import i from "./module-xsY_7.js";
import a from "./module-kj_7.js";
import s from "./module-NK_7.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_7.js"),
  },
  {
    toAsync: function () {
      return new a(s(new i(s(o(this)))));
    },
  },
);
