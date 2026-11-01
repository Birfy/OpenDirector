import n from "./module-A_16.js";
import o from "./module-e_15.js";
import i from "./module-H_2_15.js";
import a from "./module-d4_15.js";
import s from "./module-bE_16.js";
import u from "./module-Za_15.js";
import c from "./module-h_16.js";
import f from "./module-w_16.js";
import h from "./module-je_15.js";
import l from "./module-LV_15.js";
import v from "./module-xK_15.js";
import p from "./module-Yw_15.js";
const d = require("./module-lN_15.js")("toStringTag");
const push = [].push;
const AggregateError = function (r, t) {
  let e;
  const n = o(m, this);
  if (a) {
    e = a(Error(), n ? i(this) : m);
  } else {
    c((e = n ? this : u(m)), d, "Error");
  }
  if (t !== undefined) {
    c(e, "message", p(t));
  }
  l(e, AggregateError, e.stack, 1);
  if (arguments.length > 2) {
    h(e, arguments[2]);
  }
  const that = [];
  v(r, push, {
    that,
  });
  c(e, "errors", that);
  return e;
};
if (a) {
  a(AggregateError, Error);
} else {
  s(AggregateError, Error, {
    name: true,
  });
}
var m = (AggregateError.prototype = u(Error.prototype, {
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
