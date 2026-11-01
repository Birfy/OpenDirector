import $ from "./module-A_13.js";
import tt from "./module-GN_12.js";
import te from "./module-d_13.js";
import tr from "./module-H_2_12.js";
const tt_has = tt.has;
const tt_get = tt.get;
const tt_toKey = tt.toKey;
const ta = (J, Z, Q) => {
  if (tt_has(J, Z, Q)) {
    return tt_get(J, Z, Q);
  }
  const $ = tr(Z);
  if ($ !== null) {
    return ta(J, $, Q);
  }
};
$(
  {
    target: "Reflect",
    stat: true,
  },
  {
    getMetadata: function (J, Z) {
      const Q = arguments.length < 3 ? undefined : tt_toKey(arguments[2]);
      return ta(J, te(Z), Q);
    },
  },
);
