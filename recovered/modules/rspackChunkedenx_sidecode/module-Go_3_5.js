import n from "./module-A_6.js";
import i from "./module-e_5.js";
import o from "./module-H_2_5.js";
import s from "./module-d4_5.js";
import a from "./module-bE_6.js";
import u from "./module-Za_5.js";
import c from "./module-h_6.js";
import f from "./module-w_6.js";
import h from "./module-LV_5.js";
import l from "./module-Yw_5.js";
const v = require("./module-lN_5.js")("toStringTag");
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
