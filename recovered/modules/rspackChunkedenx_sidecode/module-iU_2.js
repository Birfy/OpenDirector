import n from "./module-A_3.js";
import i from "./module-e_2.js";
import o from "./module-H_2_2.js";
import s from "./module-d4_2.js";
import a from "./module-bE_3.js";
import u from "./module-Za_2.js";
import c from "./module-h_3.js";
import f from "./module-w_3.js";
import h from "./module-je_2.js";
import l from "./module-LV_2.js";
import v from "./module-xK_2.js";
import p from "./module-Yw_2.js";
const d = require("./module-lN_2.js")("toStringTag");
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
