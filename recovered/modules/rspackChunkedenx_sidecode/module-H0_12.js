import $ from "./module-A_13.js";
import tt from "./module-O9_12.js";
import te from "./module-vj_13.js";
import tr from "./module-ng_13.js";
const tn = tt("".charCodeAt);
$(
  {
    target: "String",
    proto: true,
  },
  {
    isWellFormed: function () {
      const J = tr(te(this));
      for (let Z = J.length, Q = 0; Q < Z; Q++) {
        const $ = tn(J, Q);
        if (
          (63488 & $) == 55296 &&
          ($ >= 56320 || ++Q >= Z || (64512 & tn(J, Q)) != 56320)
        ) {
          return false;
        }
      }
      return true;
    },
  },
);
