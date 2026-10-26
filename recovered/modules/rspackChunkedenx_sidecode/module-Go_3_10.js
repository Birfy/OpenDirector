import n from "./module-A_11.js";
import o from "./module-e_10.js";
import i from "./module-H_2_10.js";
import a from "./module-d4_10.js";
import s from "./module-bE_11.js";
import u from "./module-Za_10.js";
import c from "./module-h_11.js";
import f from "./module-w_11.js";
import l from "./module-LV_10.js";
import h from "./module-Yw_10.js";
const v = require("./module-lN_10.js")("toStringTag");
const SuppressedError = function (t, r, e) {
  let n;
  const s = o(g, this);
  if (a) {
    n = a(Error(), s ? i(this) : g);
  } else {
    c((n = s ? this : u(g)), v, "Error");
  }
  if (e !== undefined) {
    c(n, "message", h(e));
  }
  l(n, SuppressedError, n.stack, 1);
  c(n, "error", t);
  c(n, "suppressed", r);
  return n;
};
if (a) {
  a(SuppressedError, Error);
} else {
  s(SuppressedError, Error, {
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
