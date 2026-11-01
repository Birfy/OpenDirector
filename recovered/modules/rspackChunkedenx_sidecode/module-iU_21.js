import n from "./module-A_22.js";
import i from "./module-e_21.js";
import o from "./module-H_2_21.js";
import s from "./module-d4_21.js";
import a from "./module-bE_22.js";
import u from "./module-Za_21.js";
import c from "./module-h_22.js";
import f from "./module-w_22.js";
import h from "./module-je_21.js";
import l from "./module-LV_21.js";
import v from "./module-xK_21.js";
import p from "./module-Yw_21.js";
const d = require("./module-lN_21.js")("toStringTag");
const push = [].push;
const AggregateError = function (t, r) {
  let e;
  const n = i(m, this);
  if (s) {
    e = s(Error(), n ? o(this) : m);
  } else {
    c((e = n ? this : u(m)), d, "Error");
  }
  if (r !== undefined) {
    c(e, "message", p(r));
  }
  l(e, AggregateError, e.stack, 1);
  if (arguments.length > 2) {
    h(e, arguments[2]);
  }
  const that = [];
  v(t, push, {
    that,
  });
  c(e, "errors", that);
  return e;
};
if (s) {
  s(AggregateError, Error);
} else {
  a(AggregateError, Error, {
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
