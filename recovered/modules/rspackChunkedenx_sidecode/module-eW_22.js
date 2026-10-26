import n from "./module-A_22.js";
import i from "./module-YR_21.js";
import o from "./module-Xy_2_21.js";
import s from "./module-X_22.js";
import a from "./module-O5_21.js";
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
