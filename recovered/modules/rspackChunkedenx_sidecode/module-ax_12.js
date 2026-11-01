import $ from "./module-A_13.js";
import tt from "./module-M_2_12.js";
import te from "./module-aq_12.js";
import tr from "./module-e_12.js";
import _tn from "./module-A5_12.js";
import ti from "./module-vbL_12.js";
import to from "./module-cv_12.js";
import forced from "./module-N_12.js";
const _tn_IteratorPrototype = _tn.IteratorPrototype;
const ts = ti(function () {
  return tt(this.next, this.iterator);
}, true);
$(
  {
    target: "Iterator",
    stat: true,
    forced,
  },
  {
    from: function (J) {
      const Z = to(typeof J === "string" ? te(J) : J, true);
      if (tr(_tn_IteratorPrototype, Z.iterator)) {
        return Z.iterator;
      }
      return new ts(Z);
    },
  },
);
