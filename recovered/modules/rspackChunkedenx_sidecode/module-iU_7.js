import n from "./module-A_8.js";
import o from "./module-e_7.js";
import i from "./module-H_2_7.js";
import a from "./module-d4_7.js";
import s from "./module-bE_8.js";
import u from "./module-Za_7.js";
import c from "./module-h_8.js";
import f from "./module-w_8.js";
import l from "./module-je_7.js";
import h from "./module-LV_7.js";
import v from "./module-xK_7.js";
import p from "./module-Yw_7.js";
const d = require("./module-lN_7.js")("toStringTag");
const push = [].push;
const AggregateError = function (r, t) {
  let e;
  const n = o(b, this);
  if (a) {
    e = a(Error(), n ? i(this) : b);
  } else {
    c((e = n ? this : u(b)), d, "Error");
  }
  if (t !== undefined) {
    c(e, "message", p(t));
  }
  h(e, AggregateError, e.stack, 1);
  if (arguments.length > 2) {
    l(e, arguments[2]);
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
