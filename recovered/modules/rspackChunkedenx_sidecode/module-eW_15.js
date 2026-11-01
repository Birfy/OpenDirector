import n from "./module-A_15.js";
import o from "./module-YR_14.js";
import i from "./module-Xy_2_14.js";
import a from "./module-X_15.js";
import s from "./module-O5_14.js";
const c = "AggregateError";
const u = o(c);
const forced =
  !a(function () {
    return u([1]).errors[0] !== 1;
  }) &&
  a(function () {
    return (
      u([1], c, {
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
      c,
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
