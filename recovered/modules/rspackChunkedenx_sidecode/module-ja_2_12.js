import $ from "./module-A_13.js";
import tt from "./module-aq_12.js";
import te from "./module-F4_13.js";
import tr from "./module-hq_13.js";
import tn from "./module-bp_12.js";
import ti from "./module-MU_12.js";
$(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      [].unshift(0) !== 1 ||
      !(() => {
        try {
          Object.defineProperty([], "length", {
            writable: false,
          }).unshift();
        } catch (error) {
          return error instanceof TypeError;
        }
      })(),
  },
  {
    unshift: function (J) {
      const Z = tt(this);
      const Q = te(Z);
      const arguments_length = arguments.length;
      if (arguments_length) {
        ti(Q + arguments_length);
        for (let to = Q; to--;) {
          const ta = to + arguments_length;
          if (to in Z) {
            Z[ta] = Z[to];
          } else {
            tn(Z, ta);
          }
        }
        for (let ts = 0; ts < arguments_length; ts++) {
          Z[ts] = arguments[ts];
        }
      }
      return tr(Z, Q + arguments_length);
    },
  },
);
