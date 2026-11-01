import n from "./module-A.js";
import o from "./module-e.js";
import i from "./module-H_2.js";
import a from "./module-d4.js";
import s from "./module-bE.js";
import u from "./module-Za.js";
import c from "./module-h.js";
import f from "./module-w.js";
import h from "./module-LV.js";
import l from "./module-Yw.js";
const v = require("./module-lN.js")("toStringTag");
const SuppressedError = function (t, r, e) {
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
