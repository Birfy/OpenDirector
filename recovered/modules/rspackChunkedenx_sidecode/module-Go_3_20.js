import n from "./module-A_21.js";
import o from "./module-e_20.js";
import i from "./module-H_2_20.js";
import a from "./module-d4_20.js";
import s from "./module-bE_21.js";
import c from "./module-Za_20.js";
import u from "./module-h_21.js";
import f from "./module-w_21.js";
import l from "./module-LV_20.js";
import h from "./module-Yw_20.js";
const v = require("./module-lN_20.js")("toStringTag");
const SuppressedError = function (t, r, e) {
  let n;
  const s = o(g, this);
  if (a) {
    n = a(Error(), s ? i(this) : g);
  } else {
    u((n = s ? this : c(g)), v, "Error");
  }
  if (e !== undefined) {
    u(n, "message", h(e));
  }
  l(n, SuppressedError, n.stack, 1);
  u(n, "error", t);
  u(n, "suppressed", r);
  return n;
};
if (a) {
  a(SuppressedError, Error);
} else {
  s(SuppressedError, Error, {
    name: true,
  });
}
var g = (SuppressedError.prototype = c(Error.prototype, {
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
