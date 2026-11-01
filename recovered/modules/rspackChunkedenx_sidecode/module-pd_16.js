import n from "./module-A_17.js";
import o from "./module-M_2_16.js";
import { f } from "./module-Qa_17.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_16.js").CONSTRUCTOR,
  },
  {
    reject: function (t) {
      const r = f(this);
      o(r.reject, undefined, t);
      return r.promise;
    },
  },
);
