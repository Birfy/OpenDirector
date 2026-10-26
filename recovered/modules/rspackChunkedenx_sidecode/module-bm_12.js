import $ from "./module-A_13.js";
import tt from "./module-GN_12.js";
import te from "./module-d_13.js";
const tt_keys = tt.keys;
const tt_toKey = tt.toKey;
$(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getOwnMetadataKeys: function (J) {
      const Z = arguments.length < 2 ? undefined : tt_toKey(arguments[1]);
      return tt_keys(te(J), Z);
    },
  },
);
