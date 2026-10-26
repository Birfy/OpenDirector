import n from "./module-A_17.js";
import o from "./module-e_16.js";
import i from "./module-H_2_16.js";
import a from "./module-d4_16.js";
import s from "./module-bE_17.js";
import u from "./module-Za_16.js";
import c from "./module-h_17.js";
import f from "./module-w_17.js";
import l from "./module-LV_16.js";
import h from "./module-Yw_16.js";
const v = require("./module-lN_16.js")("toStringTag");
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
