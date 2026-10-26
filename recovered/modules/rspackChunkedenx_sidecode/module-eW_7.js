import n from "./module-A_7.js";
import o from "./module-YR_6.js";
import a from "./module-Xy_2_6.js";
import i from "./module-X_7.js";
import s from "./module-O5_6.js";
const c = "AggregateError";
const u = o(c);
const forced =
  !i(function () {
    return u([1]).errors[0] !== 1;
  }) &&
  i(function () {
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
          return a(t, this, arguments);
        };
      },
      forced,
      true,
    ),
  },
);
