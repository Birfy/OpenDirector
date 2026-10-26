import n from "./module-A_6.js";
import i from "./module-M_2_5.js";
import { f } from "./module-Qa_6.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_5.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      i(r.reject, undefined, t);
      return r.promise;
    },
  },
);
