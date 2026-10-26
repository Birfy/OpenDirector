import n from "./module-A_18.js";
import o from "./module-M_2_17.js";
import { f } from "./module-Qa_18.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_17.js").CONSTRUCTOR,
  },
  {
    reject: function (r) {
      const t = f(this);
      o(t.reject, undefined, r);
      return t.promise;
    },
  },
);
