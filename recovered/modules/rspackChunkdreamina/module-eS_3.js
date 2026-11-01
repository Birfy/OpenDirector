import n from "g";
import i from "i9";
import a from "jA";
import o from "z3";
import s from "h";
import A from "Nt";
import c from "lZ";
import forced from "K";
const l = A("toStringTag");
const AsyncIterator = function () {
  i(this, c);
  if (a(this) === c) {
    throw TypeError("Abstract class AsyncIterator not directly constructable");
  }
};
AsyncIterator.prototype = c;
if (!s(c, l)) {
  o(c, l, "AsyncIterator");
}
if (forced || !s(c, "constructor") || c.constructor === Object) {
  o(c, "constructor", AsyncIterator);
}
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    AsyncIterator,
  },
);
