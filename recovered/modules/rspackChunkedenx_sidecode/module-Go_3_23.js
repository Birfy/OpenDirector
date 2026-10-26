import n from "./module-A_24.js";
import o from "./module-e_23.js";
import i from "./module-H_2_23.js";
import a from "./module-d4_23.js";
import s from "./module-bE_24.js";
import c from "./module-Za_23.js";
import u from "./module-h_24.js";
import f from "./module-w_24.js";
import l from "./module-LV_23.js";
import h from "./module-Yw_23.js";
const v = require("./module-lN_23.js")("toStringTag");
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
