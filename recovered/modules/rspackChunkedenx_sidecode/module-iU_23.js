import n from "./module-A_24.js";
import o from "./module-e_23.js";
import i from "./module-H_2_23.js";
import a from "./module-d4_23.js";
import s from "./module-bE_24.js";
import c from "./module-Za_23.js";
import u from "./module-h_24.js";
import f from "./module-w_24.js";
import l from "./module-je_23.js";
import h from "./module-LV_23.js";
import v from "./module-xK_23.js";
import p from "./module-Yw_23.js";
const d = require("./module-lN_23.js")("toStringTag");
const push = [].push;
const AggregateError = function (t, r) {
  let e;
  const n = o(m, this);
  if (a) {
    e = a(Error(), n ? i(this) : m);
  } else {
    u((e = n ? this : c(m)), d, "Error");
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
var m = (AggregateError.prototype = c(Error.prototype, {
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
