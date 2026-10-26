import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-vj_13.js";
import tr from "./module-V6_13.js";
import tn from "./module-ng_13.js";
import ti from "./module-X_13.js";
const to = tt("".charAt);
$(
  {
    target: "String",
    proto: true,
    forced: ti(function () {
      return "𠮷".at(-2) !== "\uD842";
    }),
  },
  {
    at: function (J) {
      const Z = tn(te(this));
      const Z_length = Z.length;
      const $ = tr(J);
      const tt = $ >= 0 ? $ : Z_length + $;
      if (tt < 0 || tt >= Z_length) {
        return undefined;
      }
      return to(Z, tt);
    },
  },
);
