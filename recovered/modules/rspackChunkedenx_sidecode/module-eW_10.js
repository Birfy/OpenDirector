import n from "./module-A_10.js";
import o from "./module-YR_9.js";
import i from "./module-Xy_2_9.js";
import a from "./module-X_10.js";
import s from "./module-O5_9.js";
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
        return function (e, r) {
          return i(t, this, arguments);
        };
      },
      forced,
      true,
    ),
  },
);
