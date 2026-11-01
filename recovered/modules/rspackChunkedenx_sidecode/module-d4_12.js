import $ from "./module-WH_12.js";
import tt from "./module-d_13.js";
import te from "./module-SS_12.js";
export default Object.setPrototypeOf ||
  ("__proto__" in {}
    ? (() => {
        let J;
        let Z = false;
        const Q = {};
        try {
          (J = $(Object.prototype, "__proto__", "set"))(Q, []);
          Z = Q instanceof Array;
        } catch (J) {}
        return function (Q, $) {
          tt(Q);
          te($);
          if (Z) {
            J(Q, $);
          } else {
            Q.__proto__ = $;
          }
          return Q;
        };
      })()
    : undefined);
