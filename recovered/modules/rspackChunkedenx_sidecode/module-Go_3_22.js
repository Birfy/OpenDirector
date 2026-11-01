import n from "./module-A_23.js";
import i from "./module-e_22.js";
import o from "./module-H_2_22.js";
import s from "./module-d4_22.js";
import a from "./module-bE_23.js";
import u from "./module-Za_22.js";
import c from "./module-h_23.js";
import f from "./module-w_23.js";
import h from "./module-LV_22.js";
import l from "./module-Yw_22.js";
const v = require("./module-lN_22.js")("toStringTag");
const SuppressedError = function (t, r, e) {
  let n;
  const a = i(g, this);
  if (s) {
    n = s(Error(), a ? o(this) : g);
  } else {
    c((n = a ? this : u(g)), v, "Error");
  }
  if (e !== undefined) {
    c(n, "message", l(e));
  }
  h(n, SuppressedError, n.stack, 1);
  c(n, "error", t);
  c(n, "suppressed", r);
  return n;
};
if (s) {
  s(SuppressedError, Error);
} else {
  a(SuppressedError, Error, {
    name: true,
  });
}
var g = (SuppressedError.prototype = u(Error.prototype, {
  constructor: f(1, SuppressedError),
  message: f(1, ""),
  name: f(1, "SuppressedError"),
}));
n(
  {
    global: true,
    constructor: true,
    arity: 3,
  },
  {
    SuppressedError,
  },
);
