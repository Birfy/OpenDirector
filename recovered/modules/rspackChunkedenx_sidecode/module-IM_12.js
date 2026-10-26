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
    find: function (J) {
      tr(this);
      te(J);
      const Z = tn(this);
      let Q = 0;
      return tt(
        Z,
        function (Z, $) {
          if (J(Z, Q++)) {
            return $(Z);
          }
        },
        {
          IS_RECORD: true,
          INTERRUPTED: true,
        },
      ).result;
    },
  },
);
