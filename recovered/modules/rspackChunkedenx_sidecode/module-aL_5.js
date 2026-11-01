import n from "./module-A_6.js";
import i from "./module-A2_6.js";
import o from "./module-H_2_5.js";
import s from "./module-h_6.js";
import a from "./module-D_2_5.js";
import u from "./module-lN_5.js";
import c from "./module-fq_5.js";
import forced from "./module-N_5.js";
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
