import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import { f } from "./module-Qa_13.js";
$(
  {
    target: "Promise",
    stat: true,
    forced: require("./module-FK_12.js").CONSTRUCTOR,
  },
  {
    reject: function (J) {
      const Z = f(this);
      tt(Z.reject, undefined, J);
      return Z.promise;
    },
  },
);
