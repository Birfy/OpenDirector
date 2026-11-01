import n from "./module-A_9.js";
import i from "./module-d_9.js";
import o from "./module-xsY_8.js";
import s from "./module-kj_8.js";
import a from "./module-NK_8.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N_8.js"),
  },
  {
    toAsync: function () {
      return new s(a(new o(a(i(this)))));
    },
  },
);
