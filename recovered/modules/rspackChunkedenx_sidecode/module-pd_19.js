import n from "./module-A_20.js";
import o from "./module-M_2_19.js";
import { f } from "./module-Qa_20.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_19.js").CONSTRUCTOR,
  },
  {
    reject: function (r) {
      const t = f(this);
      o(t.reject, undefined, r);
      return t.promise;
    },
  },
);
