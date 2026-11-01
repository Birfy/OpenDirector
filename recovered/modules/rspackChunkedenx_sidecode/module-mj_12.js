import $ from "./module-A_13.js";
import tt from "./module-vo_12.js";
import te from "./module-zQ_13.js";
import tr from "./module-vM_13.js";
$(
  {
    target: "Set",
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
      tr(Z, function (tt) {
        if (Q) {
          Q = false;
          $ = tt;
        } else {
          $ = J($, tt, tt, Z);
        }
      });
      if (Q) {
        throw TypeError("Reduce of empty set with no initial value");
      }
      return $;
    },
  },
);
