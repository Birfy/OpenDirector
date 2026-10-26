import $ from "./module-A_13.js";
import tt from "./module-aq_12.js";
import te from "./module-F4_13.js";
import tr from "./module-hq_13.js";
import tn from "./module-MU_12.js";
$(
  {
    target: "Array",
    proto: true,
    arity: 1,
    forced:
      require("./module-X_13.js")(function () {
        return (
          [].push.call(
            {
              length: 4294967296,
            },
            1,
          ) !== 4294967297
        );
      }) ||
      !(() => {
        try {
          Object.defineProperty([], "length", {
            writable: false,
          }).push();
        } catch (error) {
          return error instanceof TypeError;
        }
      })(),
  },
  {
    push: function (J) {
      const Z = tt(this);
      let Q = te(Z);
      const arguments_length = arguments.length;
      tn(Q + arguments_length);
      for (let ti = 0; ti < arguments_length; ti++) {
        Z[Q] = arguments[ti];
        Q++;
      }
      tr(Z, Q);
      return Q;
    },
  },
);
