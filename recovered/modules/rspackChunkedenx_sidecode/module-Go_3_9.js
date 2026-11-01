import n from "./module-A_10.js";
import o from "./module-e_9.js";
import i from "./module-H_2_9.js";
import a from "./module-d4_9.js";
import s from "./module-bE_10.js";
import u from "./module-Za_9.js";
import c from "./module-h_10.js";
import f from "./module-w_10.js";
import l from "./module-LV_9.js";
import h from "./module-Yw_9.js";
const v = require("./module-lN_9.js")("toStringTag");
const SuppressedError = function (t, e, r) {
  let n;
  const s = o(g, this);
  if (a) {
    n = a(Error(), s ? i(this) : g);
  } else {
    c((n = s ? this : u(g)), v, "Error");
  }
  if (r !== undefined) {
    c(n, "message", h(r));
  }
  l(n, SuppressedError, n.stack, 1);
  c(n, "error", t);
  c(n, "suppressed", e);
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
