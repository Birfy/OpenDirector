import n from "./module-g.js";
import o from "./module-Y.js";
import i from "./module-l.js";
import a from "./module-VV_4.js";
import s from "./module-Bh_2_2.js";
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
      function (e) {
        return function (t, r) {
          return i(e, this, arguments);
        };
      },
      forced,
      true,
    ),
  },
);
