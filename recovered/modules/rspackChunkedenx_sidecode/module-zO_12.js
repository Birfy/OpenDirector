import $ from "./module-A_13.js";
import tt from "./module-YR_12.js";
import te from "./module-N_12.js";
import tr from "./module-xl_13.js";
import _tn from "./module-FK_12.js";
import ti from "./module-kn_13.js";
const _tn_CONSTRUCTOR = _tn.CONSTRUCTOR;
const to = tt("Promise");
const ta = te && !_tn_CONSTRUCTOR;
$(
  {
    target: "Promise",
    stat: true,
    forced: te || _tn_CONSTRUCTOR,
  },
  {
    resolve: function (J) {
      return ti(ta && this === to ? tr : this, J);
    },
  },
);
