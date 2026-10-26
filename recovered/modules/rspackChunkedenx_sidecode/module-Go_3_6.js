import n from "./module-A_7.js";
import o from "./module-e_6.js";
import a from "./module-H_2_6.js";
import i from "./module-d4_6.js";
import s from "./module-bE_7.js";
import c from "./module-Za_6.js";
import u from "./module-h_7.js";
import f from "./module-w_7.js";
import l from "./module-LV_6.js";
import h from "./module-Yw_6.js";
const p = require("./module-lN_6.js")("toStringTag");
const SuppressedError = function (t, r, e) {
  let n;
  const s = o(g, this);
  if (i) {
    n = i(Error(), s ? a(this) : g);
  } else {
    u((n = s ? this : c(g)), p, "Error");
  }
  if (e !== undefined) {
    u(n, "message", h(e));
  }
  l(n, SuppressedError, n.stack, 1);
  u(n, "error", t);
  u(n, "suppressed", r);
  return n;
};
if (i) {
  i(SuppressedError, Error);
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
