import n from "./module-A_23.js";
import i from "./module-YR_22.js";
import o from "./module-Xy_2_22.js";
import s from "./module-X_23.js";
import a from "./module-O5_22.js";
const u = "AggregateError";
const c = i(u);
const forced =
  !s(function () {
    return c([1]).errors[0] !== 1;
  }) &&
  s(function () {
    return (
      c([1], u, {
        cause: 7,
      }).cause !== 7
    );
  });
n(
  {
    global: true,
    constructor: true,
    arity: 2,
    forced,
  },
  {
    AggregateError: a(
      u,
      function (t) {
        return function (r, e) {
          return o(t, this, arguments);
        };
      },
      forced,
      true,
    ),
  },
);
