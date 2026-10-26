import $ from "./module-A_13.js";
import tt from "./module-xK_12.js";
import te from "./module-er_12.js";
$(
  {
    target: "Object",
    stat: true,
  },
  {
    fromEntries: function (J) {
      const Z = {};
      tt(
        J,
        function (J, Q) {
          te(Z, J, Q);
        },
        {
          AS_ENTRIES: true,
        },
      );
      return Z;
    },
  },
);
