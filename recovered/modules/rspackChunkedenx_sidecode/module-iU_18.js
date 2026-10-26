import n from "./module-A_19.js";
import o from "./module-e_18.js";
import i from "./module-H_2_18.js";
import a from "./module-d4_18.js";
import s from "./module-bE_19.js";
import u from "./module-Za_18.js";
import c from "./module-h_19.js";
import f from "./module-w_19.js";
import h from "./module-je_18.js";
import l from "./module-LV_18.js";
import v from "./module-xK_18.js";
import p from "./module-Yw_18.js";
const d = require("./module-lN_18.js")("toStringTag");
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
