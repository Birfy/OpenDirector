import $ from "./module-A_13.js";
import tt from "./module-vo_12.js";
import te from "./module-ot_13.js";
import tr from "./module-JA_13.js";
$(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    reduce: function (J) {
      const Z = te(this);
      let Q = arguments.length < 2;
      let $ = Q ? undefined : arguments[1];
      tt(J);
      tr(Z, function (tt, te) {
        if (Q) {
          Q = false;
          $ = tt;
        } else {
          $ = J($, tt, te, Z);
        }
      });
      if (Q) {
        throw TypeError("Reduce of empty map with no initial value");
      }
      return $;
    },
  },
);
