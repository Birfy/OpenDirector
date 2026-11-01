import $ from "./module-A_13.js";
import tt from "./module-e_12.js";
import te from "./module-H_2_12.js";
import tr from "./module-d4_12.js";
import tn from "./module-bE_13.js";
import ti from "./module-Za_12.js";
import to from "./module-h_13.js";
import ta from "./module-w_13.js";
import ts from "./module-je_12.js";
import tf from "./module-LV_12.js";
import tu from "./module-xK_12.js";
import tc from "./module-Yw_12.js";
const th = require("./module-lN_12.js")("toStringTag");
const push = [].push;
const AggregateError = function (J, Z) {
  let Q;
  const $ = tt(tb, this);
  if (tr) {
    Q = tr(Error(), $ ? te(this) : tb);
  } else {
    to((Q = $ ? this : ti(tb)), th, "Error");
  }
  if (Z !== undefined) {
    to(Q, "message", tc(Z));
  }
  tf(Q, AggregateError, Q.stack, 1);
  if (arguments.length > 2) {
    ts(Q, arguments[2]);
  }
  const that = [];
  tu(J, push, {
    that,
  });
  to(Q, "errors", that);
  return Q;
};
if (tr) {
  tr(AggregateError, Error);
} else {
  tn(AggregateError, Error, {
    name: true,
  });
}
var tb = (AggregateError.prototype = ti(Error.prototype, {
  constructor: ta(1, AggregateError),
  message: ta(1, ""),
  name: ta(1, "AggregateError"),
}));
$(
  {
    global: true,
    constructor: true,
    arity: 2,
  },
  {
    AggregateError,
  },
);
