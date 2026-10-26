import n from "./module-A_21.js";
import o from "./module-e_20.js";
import i from "./module-H_2_20.js";
import a from "./module-d4_20.js";
import s from "./module-bE_21.js";
import c from "./module-Za_20.js";
import u from "./module-h_21.js";
import f from "./module-w_21.js";
import l from "./module-je_20.js";
import h from "./module-LV_20.js";
import v from "./module-xK_20.js";
import p from "./module-Yw_20.js";
const d = require("./module-lN_20.js")("toStringTag");
const push = [].push;
const AggregateError = function (t, r) {
  let e;
  const n = o(b, this);
  if (a) {
    e = a(Error(), n ? i(this) : b);
  } else {
    u((e = n ? this : c(b)), d, "Error");
  }
  if (r !== undefined) {
    u(e, "message", p(r));
  }
  h(e, AggregateError, e.stack, 1);
  if (arguments.length > 2) {
    l(e, arguments[2]);
  }
  const that = [];
  v(t, push, {
    that,
  });
  u(e, "errors", that);
  return e;
};
if (a) {
  a(AggregateError, Error);
} else {
  s(AggregateError, Error, {
    name: true,
  });
}
var b = (AggregateError.prototype = c(Error.prototype, {
  constructor: f(1, AggregateError),
  message: f(1, ""),
  name: f(1, "AggregateError"),
}));
n(
  {
    global: true,
    constructor: true,
    arity: 2,
  },
  {
    AggregateError,
  },
);
