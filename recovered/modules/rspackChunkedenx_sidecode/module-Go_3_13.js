import n from "./module-A_14.js";
import o from "./module-e_13.js";
import i from "./module-H_2_13.js";
import a from "./module-d4_13.js";
import s from "./module-bE_14.js";
import u from "./module-Za_13.js";
import c from "./module-h_14.js";
import f from "./module-w_14.js";
import h from "./module-LV_13.js";
import l from "./module-Yw_13.js";
const v = require("./module-lN_13.js")("toStringTag");
const SuppressedError = function (r, t, e) {
  let n;
  const s = o(g, this);
  if (a) {
    n = a(Error(), s ? i(this) : g);
  } else {
    c((n = s ? this : u(g)), v, "Error");
  }
  if (e !== undefined) {
    c(n, "message", l(e));
  }
  h(n, SuppressedError, n.stack, 1);
  c(n, "error", r);
  c(n, "suppressed", t);
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
