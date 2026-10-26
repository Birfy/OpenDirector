import $ from "./module-A_13.js";
import tt from "./module-YR_12.js";
import te from "./module-Xy_3_2.js";
import tr from "./module-X_13.js";
import tn from "./module-O5_12.js";
const ti = "AggregateError";
const to = tt(ti);
const forced =
  !tr(function () {
    return to([1]).errors[0] !== 1;
  }) &&
  tr(function () {
    return (
      to([1], ti, {
        cause: 7,
      }).cause !== 7
    );
  });
$(
  {
    global: true,
    constructor: true,
    arity: 2,
    forced,
  },
  {
    AggregateError: tn(
      ti,
      function (J) {
        return function (Z, Q) {
          return te(J, this, arguments);
        };
      },
      forced,
      true,
    ),
  },
);
