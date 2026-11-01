import n from "./module-A_5.js";
import i from "./module-M_2_4.js";
import { f } from "./module-Qa_5.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_4.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      i(r.reject, undefined, t);
      return r.promise;
    },
  },
);
