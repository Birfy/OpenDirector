import $ from "./module-A_13.js";
import tt from "./module-e_12.js";
import te from "./module-H_2_12.js";
import tr from "./module-d4_12.js";
import tn from "./module-bE_13.js";
import ti from "./module-Za_12.js";
import to from "./module-h_13.js";
import ta from "./module-w_13.js";
import ts from "./module-LV_12.js";
import tf from "./module-Yw_12.js";
const tu = require("./module-lN_12.js")("toStringTag");
const SuppressedError = function (J, Z, Q) {
  let $;
  const tn = tt(td, this);
  if (tr) {
    $ = tr(Error(), tn ? te(this) : td);
  } else {
    to(($ = tn ? this : ti(td)), tu, "Error");
  }
  if (Q !== undefined) {
    to($, "message", tf(Q));
  }
  ts($, SuppressedError, $.stack, 1);
  to($, "error", J);
  to($, "suppressed", Z);
  return $;
};
if (tr) {
  tr(SuppressedError, Error);
} else {
  tn(SuppressedError, Error, {
    name: true,
  });
}
var td = (SuppressedError.prototype = ti(Error.prototype, {
  constructor: ta(1, SuppressedError),
  message: ta(1, ""),
  name: ta(1, "SuppressedError"),
}));
$(
  {
    global: true,
    constructor: true,
    arity: 3,
  },
  {
    SuppressedError,
  },
);
