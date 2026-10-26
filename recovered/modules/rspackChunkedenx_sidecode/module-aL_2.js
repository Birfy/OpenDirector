import n from "./module-A_3.js";
import i from "./module-A2_3.js";
import o from "./module-H_2_2.js";
import s from "./module-h_3.js";
import a from "./module-D_2_2.js";
import u from "./module-lN_2.js";
import c from "./module-fq_2.js";
import forced from "./module-N_2.js";
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
