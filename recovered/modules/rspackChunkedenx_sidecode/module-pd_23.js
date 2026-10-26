import n from "./module-A_24.js";
import o from "./module-M_2_23.js";
import { f } from "./module-Qa_24.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_23.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      o(r.reject, undefined, t);
      return r.promise;
    },
  },
);
