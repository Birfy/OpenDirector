import $ from "./module-A_13.js";
import tt from "./module-xK_12.js";
import te from "./module-vo_12.js";
import tr from "./module-d_13.js";
import tn from "./module-NK_2_2.js";
$(
  {
    target: "Iterator",
    proto: true,
    real: true,
  },
  {
    reduce: function (J) {
      tr(this);
      te(J);
      const Z = tn(this);
      let Q = arguments.length < 2;
      let $ = Q ? undefined : arguments[1];
      let to = 0;
      tt(
        Z,
        function (Z) {
          if (Q) {
            Q = false;
            $ = Z;
          } else {
            $ = J($, Z, to);
          }
          to++;
        },
        {
          IS_RECORD: true,
        },
      );
      if (Q) {
        throw TypeError("Reduce of empty iterator with no initial value");
      }
      return $;
    },
  },
);
