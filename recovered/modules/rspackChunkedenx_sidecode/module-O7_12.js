import $ from "./module-A_13.js";
import tt from "./module-p8_12.js";
import _te from "./module-xUg_12.js";
const _te_remove = _te.remove;
$(
  {
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true,
  },
  {
    deleteAll: function () {
      let J;
      const Z = tt(this);
      let Q = true;
      for (let $ = 0, tr = arguments.length; $ < tr; $++) {
        J = _te_remove(Z, arguments[$]);
        Q = Q && J;
      }
      return !!Q;
    },
  },
);
