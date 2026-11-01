import n from "./module-g.js";
import o from "./module-V8.js";
import i from "./module-jA_2.js";
import a from "./module-P.js";
import s from "./module-cg.js";
import u from "./module-lY_4.js";
import c from "./module-z3.js";
import f from "./module-M.js";
import l from "./module-RC.js";
import p from "./module-JM_2.js";
import h from "./module-Fm_2_2.js";
import v from "./module-Gq_3.js";
const d = require("./module-Nt_3.js")("toStringTag");
const push = [].push;
const AggregateError = function (e, t) {
  let r;
  const n = o(x, this);
  if (a) {
    r = a(Error(), n ? i(this) : x);
  } else {
    c((r = n ? this : u(x)), d, "Error");
  }
  if (t !== undefined) {
    c(r, "message", v(t));
  }
  p(r, AggregateError, r.stack, 1);
  if (arguments.length > 2) {
    l(r, arguments[2]);
  }
  const that = [];
  h(e, push, {
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
var x = (AggregateError.prototype = u(Error.prototype, {
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
