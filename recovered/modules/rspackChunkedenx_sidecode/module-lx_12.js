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
    forEach: function (J) {
      tr(this);
      te(J);
      const Z = tn(this);
      let Q = 0;
      tt(
        Z,
        function (Z) {
          J(Z, Q++);
        },
        {
          IS_RECORD: true,
        },
      );
    },
  },
);
