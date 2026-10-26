import n from "./module-A_10.js";
import o from "./module-M_2_9.js";
import { f } from "./module-Qa_10.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_9.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const e = f(this);
      o(e.reject, undefined, t);
      return e.promise;
    },
  },
);
