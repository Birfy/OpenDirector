import n from "./module-A.js";
import o from "./module-A2.js";
import i from "./module-H_2.js";
import a from "./module-h.js";
import s from "./module-D_2.js";
import u from "./module-lN.js";
import c from "./module-fq.js";
import forced from "./module-N.js";
const h = u("toStringTag");
const AsyncIterator = function () {
  o(this, c);
  if (i(this) === c) {
    throw TypeError("Abstract class AsyncIterator not directly constructable");
  }
};
AsyncIterator.prototype = c;
if (!s(c, h)) {
  a(c, h, "AsyncIterator");
}
if (forced || !s(c, "constructor") || c.constructor === Object) {
  a(c, "constructor", AsyncIterator);
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
