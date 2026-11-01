import n from "./module-A_15.js";
import o from "./module-M_2_14.js";
import { f } from "./module-Qa_15.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_14.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      o(r.reject, undefined, t);
      return r.promise;
    },
  },
);
