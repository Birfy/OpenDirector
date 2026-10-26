import n from "./module-A_10.js";
import o from "./module-A2_10.js";
import i from "./module-H_2_9.js";
import a from "./module-h_10.js";
import s from "./module-D_2_9.js";
import u from "./module-lN_9.js";
import c from "./module-fq_9.js";
import forced from "./module-N_9.js";
const l = u("toStringTag");
const AsyncIterator = function () {
  o(this, c);
  if (i(this) === c) {
    throw TypeError("Abstract class AsyncIterator not directly constructable");
  }
};
AsyncIterator.prototype = c;
if (!s(c, l)) {
  a(c, l, "AsyncIterator");
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
