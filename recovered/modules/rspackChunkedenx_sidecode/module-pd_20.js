import n from "./module-A_21.js";
import o from "./module-M_2_20.js";
import { f } from "./module-Qa_21.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_20.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      o(r.reject, undefined, t);
      return r.promise;
    },
  },
);
