import n from "./module-A_22.js";
import i from "./module-M_2_21.js";
import { f } from "./module-Qa_22.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_21.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      i(r.reject, undefined, t);
      return r.promise;
    },
  },
);
