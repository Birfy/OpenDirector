import n from "./module-A_14.js";
import o from "./module-M_2_13.js";
import { f } from "./module-Qa_14.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_13.js").CONSTRUCTOR,
  },
  {
    reject: function (r) {
      const t = f(this);
      o(t.reject, undefined, r);
      return t.promise;
    },
  },
);
