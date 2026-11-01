import n from "g";
import i from "V8";
import a from "jA";
import o from "P";
import s from "cg";
import A from "lY";
import c from "z3";
import u from "M";
import l from "JM";
import h from "Gq";
const f = require("Nt")("toStringTag");
const SuppressedError = function (t, e, r) {
  let n;
  const s = i(p, this);
  if (o) {
    n = o(Error(), s ? a(this) : p);
  } else {
    c((n = s ? this : A(p)), f, "Error");
  }
  if (r !== undefined) {
    c(n, "message", h(r));
  }
  l(n, SuppressedError, n.stack, 1);
  c(n, "error", t);
  c(n, "suppressed", e);
  return n;
};
if (o) {
  o(SuppressedError, Error);
} else {
  s(SuppressedError, Error, {
    name: true,
  });
}
var p = (SuppressedError.prototype = A(Error.prototype, {
  constructor: u(1, SuppressedError),
  message: u(1, ""),
  name: u(1, "SuppressedError"),
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
