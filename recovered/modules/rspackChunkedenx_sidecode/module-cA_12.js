import $ from "./module-A_13.js";
import tt from "./module-zQ_13.js";
import _te from "./module-yh_12.js";
const _te_add = _te.add;
$(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    addAll: function () {
      const J = tt(this);
      for (let Z = 0, Q = arguments.length; Z < Q; Z++) {
        _te_add(J, arguments[Z]);
      }
      return J;
    },
  },
);
