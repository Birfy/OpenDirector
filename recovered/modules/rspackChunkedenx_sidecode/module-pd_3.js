import n from "./module-A_4.js";
import i from "./module-M_2_3.js";
import { f } from "./module-Qa_4.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_3.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      i(r.reject, undefined, t);
      return r.promise;
    },
  },
);
