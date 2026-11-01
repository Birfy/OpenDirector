import $ from "./module-A_13.js";
import tt from "./module-ot_13.js";
import te from "./module-xK_12.js";
import _tr from "./module-e7_12.js";
const _tr_set = _tr.set;
$(
  {
    target: "Map",
    proto: true,
    real: true,
    arity: 1,
    forced: true,
  },
  {
    merge: function (J) {
      const Z = tt(this);
      for (let Q = arguments.length, $ = 0; $ < Q;) {
        te(
          arguments[$++],
          function (J, Q) {
            _tr_set(Z, J, Q);
          },
          {
            AS_ENTRIES: true,
          },
        );
      }
      return Z;
    },
  },
);
