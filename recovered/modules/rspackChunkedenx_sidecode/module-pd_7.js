import n from "./module-A_8.js";
import o from "./module-M_2_7.js";
import { f } from "./module-Qa_8.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_7.js").CONSTRUCTOR,
  },
  {
    reject: function (r) {
      const t = f(this);
      o(t.reject, undefined, r);
      return t.promise;
    },
  },
);
