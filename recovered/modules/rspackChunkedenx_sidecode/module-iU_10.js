import n from "./module-A_11.js";
import o from "./module-e_10.js";
import i from "./module-H_2_10.js";
import a from "./module-d4_10.js";
import s from "./module-bE_11.js";
import u from "./module-Za_10.js";
import c from "./module-h_11.js";
import f from "./module-w_11.js";
import l from "./module-je_10.js";
import h from "./module-LV_10.js";
import v from "./module-xK_10.js";
import p from "./module-Yw_10.js";
const d = require("./module-lN_10.js")("toStringTag");
const push = [].push;
const AggregateError = function (t, r) {
  let e;
  const n = o(m, this);
  if (a) {
    e = a(Error(), n ? i(this) : m);
  } else {
    c((e = n ? this : u(m)), d, "Error");
  }
  if (r !== undefined) {
    c(e, "message", p(r));
  }
  h(e, AggregateError, e.stack, 1);
  if (arguments.length > 2) {
    l(e, arguments[2]);
  }
  const that = [];
  v(t, push, {
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
