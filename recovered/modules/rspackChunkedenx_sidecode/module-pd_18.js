import n from "./module-A_19.js";
import o from "./module-M_2_18.js";
import { f } from "./module-Qa_19.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_18.js").CONSTRUCTOR,
  },
  {
    reject: function (r) {
      const t = f(this);
      o(t.reject, undefined, r);
      return t.promise;
    },
  },
);
