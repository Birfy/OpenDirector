import n from "./module-A_12.js";
import o from "./module-M_2_11.js";
import { f } from "./module-Qa_12.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_11.js").CONSTRUCTOR,
  },
  {
    reject: function (r) {
      const t = f(this);
      o(t.reject, undefined, r);
      return t.promise;
    },
  },
);
