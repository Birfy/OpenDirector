import n from "./module-A_7.js";
import o from "./module-e_6.js";
import a from "./module-H_2_6.js";
import i from "./module-d4_6.js";
import s from "./module-bE_7.js";
import c from "./module-Za_6.js";
import u from "./module-h_7.js";
import f from "./module-w_7.js";
import l from "./module-je_6.js";
import h from "./module-LV_6.js";
import p from "./module-xK_6.js";
import v from "./module-Yw_6.js";
const d = require("./module-lN_6.js")("toStringTag");
const push = [].push;
const AggregateError = function (t, r) {
  let e;
  const n = o(b, this);
  if (i) {
    e = i(Error(), n ? a(this) : b);
  } else {
    u((e = n ? this : c(b)), d, "Error");
  }
  if (r !== undefined) {
    u(e, "message", v(r));
  }
  h(e, AggregateError, e.stack, 1);
  if (arguments.length > 2) {
    l(e, arguments[2]);
  }
  const that = [];
  p(t, push, {
    that,
  });
  u(e, "errors", that);
  return e;
};
if (i) {
  i(AggregateError, Error);
} else {
  s(AggregateError, Error, {
    name: true,
  });
}
var b = (AggregateError.prototype = c(Error.prototype, {
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
