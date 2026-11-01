import n from "./module-A_23.js";
import i from "./module-M_2_22.js";
import { f } from "./module-Qa_23.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_22.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      i(r.reject, undefined, t);
      return r.promise;
    },
  },
);
