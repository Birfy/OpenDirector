import n from "./module-A.js";
import o from "./module-d.js";
import i from "./module-xsY.js";
import a from "./module-kj.js";
import s from "./module-NK.js";
n(
  {
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("./module-N.js"),
  },
  {
    toAsync: function () {
      return new a(s(new i(s(o(this)))));
    },
  },
);
