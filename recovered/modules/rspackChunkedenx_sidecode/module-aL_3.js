import n from "./module-A_4.js";
import i from "./module-A2_4.js";
import o from "./module-H_2_3.js";
import s from "./module-h_4.js";
import a from "./module-D_2_3.js";
import u from "./module-lN_3.js";
import c from "./module-fq_3.js";
import forced from "./module-N_3.js";
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
