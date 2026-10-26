import $ from "./module-A_13.js";
import tt from "./module-GN_12.js";
import te from "./module-d_13.js";
const tt_toKey = tt.toKey;
const tt_getMap = tt.getMap;
const tt_store = tt.store;
$(
  {
    target: "Reflect",
    stat: true,
  },
  {
    deleteMetadata: function (J, Z) {
      const Q = arguments.length < 3 ? undefined : tt_toKey(arguments[2]);
      const $ = tt_getMap(te(Z), Q, false);
      if ($ === undefined || !$.delete(J)) {
        return false;
      }
      if ($.size) {
        return true;
      }
      const tt = tt_store.get(Z);
      tt.delete(Q);
      return !!tt.size || tt_store.delete(Z);
    },
  },
);
