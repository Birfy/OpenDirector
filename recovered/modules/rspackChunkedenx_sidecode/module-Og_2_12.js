import $ from "./module-A_13.js";
import tt from "./module-GN_12.js";
import te from "./module-d_13.js";
import tr from "./module-H_2_12.js";
const tt_has = tt.has;
const tt_toKey = tt.toKey;
const to = (J, Z, Q) => {
  if (tt_has(J, Z, Q)) {
    return true;
  }
  const $ = tr(Z);
  return $ !== null && to(J, $, Q);
};
$(
  {
    target: "Reflect",
    stat: true,
  },
  {
    hasMetadata: function (J, Z) {
      const Q = arguments.length < 3 ? undefined : tt_toKey(arguments[2]);
      return to(J, te(Z), Q);
    },
  },
);
