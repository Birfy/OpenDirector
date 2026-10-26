import n from "./module-A_9.js";
import i from "./module-A2_9.js";
import o from "./module-H_2_8.js";
import s from "./module-h_9.js";
import a from "./module-D_2_8.js";
import u from "./module-lN_8.js";
import c from "./module-fq_8.js";
import forced from "./module-N_8.js";
const h = u("toStringTag");
const AsyncIterator = function () {
  i(this, c);
  if (o(this) === c) {
    throw TypeError("Abstract class AsyncIterator not directly constructable");
  }
};
AsyncIterator.prototype = c;
if (!a(c, h)) {
  s(c, h, "AsyncIterator");
}
if (forced || !a(c, "constructor") || c.constructor === Object) {
  s(c, "constructor", AsyncIterator);
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
