import n from "./module-A_17.js";
import o from "./module-A2_17.js";
import i from "./module-H_2_16.js";
import a from "./module-h_17.js";
import s from "./module-D_2_16.js";
import u from "./module-lN_16.js";
import c from "./module-fq_16.js";
import forced from "./module-N_16.js";
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
