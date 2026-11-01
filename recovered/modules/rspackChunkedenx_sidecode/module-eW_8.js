import n from "./module-A_8.js";
import o from "./module-YR_7.js";
import i from "./module-Xy_2_7.js";
import a from "./module-X_8.js";
import s from "./module-O5_7.js";
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
      function (r) {
        return function (t, e) {
          return i(r, this, arguments);
        };
      },
      forced,
      true,
    ),
  },
);
