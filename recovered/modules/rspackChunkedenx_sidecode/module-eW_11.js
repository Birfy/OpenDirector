import n from "./module-A_11.js";
import o from "./module-YR_10.js";
import i from "./module-Xy_2_10.js";
import a from "./module-X_11.js";
import s from "./module-O5_10.js";
const u = "AggregateError";
const c = o(u);
const forced =
  !a(function () {
    return c([1]).errors[0] !== 1;
  }) &&
  a(function () {
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
    AggregateError: s(
      u,
      function (t) {
        return function (r, e) {
          return i(t, this, arguments);
        };
      },
      forced,
      true,
    ),
  },
);
