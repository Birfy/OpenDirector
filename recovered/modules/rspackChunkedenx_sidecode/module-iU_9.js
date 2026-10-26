import n from "./module-A_10.js";
import o from "./module-e_9.js";
import i from "./module-H_2_9.js";
import a from "./module-d4_9.js";
import s from "./module-bE_10.js";
import u from "./module-Za_9.js";
import c from "./module-h_10.js";
import f from "./module-w_10.js";
import l from "./module-je_9.js";
import h from "./module-LV_9.js";
import v from "./module-xK_9.js";
import d from "./module-Yw_9.js";
const p = require("./module-lN_9.js")("toStringTag");
const push = [].push;
const AggregateError = function (t, e) {
  let r;
  const n = o(b, this);
  if (a) {
    r = a(Error(), n ? i(this) : b);
  } else {
    c((r = n ? this : u(b)), p, "Error");
  }
  if (e !== undefined) {
    c(r, "message", d(e));
  }
  h(r, AggregateError, r.stack, 1);
  if (arguments.length > 2) {
    l(r, arguments[2]);
  }
  const that = [];
  v(t, push, {
    that,
  });
  c(r, "errors", that);
  return r;
};
if (a) {
  a(AggregateError, Error);
} else {
  s(AggregateError, Error, {
    name: true,
  });
}
var b = (AggregateError.prototype = u(Error.prototype, {
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
