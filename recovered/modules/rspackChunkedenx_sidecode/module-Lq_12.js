import $ from "./module-A_13.js";
import tt from "./module-GN_12.js";
import te from "./module-d_13.js";
const tt_get = tt.get;
const tt_toKey = tt.toKey;
$(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadata: function (J, Z) {
      const Q = arguments.length < 3 ? undefined : tt_toKey(arguments[2]);
      return tt_get(J, te(Z), Q);
    },
  },
);
