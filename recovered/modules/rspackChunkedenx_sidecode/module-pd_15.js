import n from "./module-A_16.js";
import o from "./module-M_2_15.js";
import { f } from "./module-Qa_16.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_15.js").CONSTRUCTOR,
  },
  {
    reject: function (r) {
      const t = f(this);
      o(t.reject, undefined, r);
      return t.promise;
    },
  },
);
