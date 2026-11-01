import $ from "./module-A_13.js";
import tt from "./module-GN_12.js";
import te from "./module-d_13.js";
const tt_toKey = tt.toKey;
const tt_set = tt.set;
$(
  {
    target: "Reflect",
    stat: true,
  },
  {
    metadata: function (J, Z) {
      return function (Q, $) {
        tt_set(J, Z, te(Q), tt_toKey($));
      };
    },
  },
);
