import n from "./module-A_19.js";
import o from "./module-A2_19.js";
import i from "./module-H_2_18.js";
import a from "./module-h_19.js";
import s from "./module-D_2_18.js";
import u from "./module-lN_18.js";
import c from "./module-fq_18.js";
import forced from "./module-N_18.js";
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
