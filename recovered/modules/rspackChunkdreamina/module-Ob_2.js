import n from "./module-g.js";
import o from "./module-p3.js";
import { f } from "./module-W1_2.js";
n(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-SY_3.js").CONSTRUCTOR,
  },
  {
    reject: function (e) {
      const t = f(this);
      o(t.reject, undefined, e);
      return t.promise;
    },
  },
);
