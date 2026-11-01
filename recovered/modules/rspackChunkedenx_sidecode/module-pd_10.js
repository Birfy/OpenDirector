import n from "./module-A_11.js";
import o from "./module-M_2_10.js";
import { f } from "./module-Qa_11.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_10.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      o(r.reject, undefined, t);
      return r.promise;
    },
  },
);
