import $ from "./module-A_13.js";
import tt from "./module-eqX_12.js";
import _te from "./module-Rv_12.js";
const _te_add = _te.add;
$(
  {
    target: "WeakSet",
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
