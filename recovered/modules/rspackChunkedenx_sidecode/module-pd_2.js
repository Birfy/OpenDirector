import n from "./module-A_3.js";
import i from "./module-M_2_2.js";
import { f } from "./module-Qa_3.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_2.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      i(r.reject, undefined, t);
      return r.promise;
    },
  },
);
