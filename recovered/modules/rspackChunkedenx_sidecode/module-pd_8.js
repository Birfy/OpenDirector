import n from "./module-A_9.js";
import i from "./module-M_2_8.js";
import { f } from "./module-Qa_9.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_8.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      i(r.reject, undefined, t);
      return r.promise;
    },
  },
);
