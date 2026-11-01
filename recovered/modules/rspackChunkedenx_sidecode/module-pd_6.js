import n from "./module-A_7.js";
import o from "./module-M_2_6.js";
import { f } from "./module-Qa_7.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_6.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      o(r.reject, undefined, t);
      return r.promise;
    },
  },
);
