import n from "./module-A_17.js";
import o from "./module-e_16.js";
import i from "./module-H_2_16.js";
import a from "./module-d4_16.js";
import s from "./module-bE_17.js";
import u from "./module-Za_16.js";
import c from "./module-h_17.js";
import f from "./module-w_17.js";
import l from "./module-je_16.js";
import h from "./module-LV_16.js";
import v from "./module-xK_16.js";
import p from "./module-Yw_16.js";
const d = require("./module-lN_16.js")("toStringTag");
const push = [].push;
const AggregateError = function (t, r) {
  let e;
  const n = o(b, this);
  if (a) {
    e = a(Error(), n ? i(this) : b);
  } else {
    c((e = n ? this : u(b)), d, "Error");
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
