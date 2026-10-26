import n from "./module-A_10.js";
import o from "./module-d_10.js";
import i from "./module-xsY_9.js";
import a from "./module-kj_9.js";
import s from "./module-NK_9.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_9.js"),
  },
  {
    toAsync: function () {
      return new a(s(new i(s(o(this)))));
    },
  },
);
