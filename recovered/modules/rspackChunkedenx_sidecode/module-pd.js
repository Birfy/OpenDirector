import n from "./module-A.js";
import o from "./module-M_2.js";
import { f } from "./module-Qa.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      o(r.reject, undefined, t);
      return r.promise;
    },
  },
);
